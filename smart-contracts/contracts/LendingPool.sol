// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LendingPool {
    struct Loan {
        uint256 amount;
        uint256 interestRate;
        uint256 repaymentAmount;
        uint256 repaymentDeadline;
        bool isRepaid;
    }

    mapping(address => Loan) public loans;
    mapping(address => uint256) public balances;
    address[] public lenders;

    event LoanRequested(address indexed borrower, uint256 amount, uint256 interestRate);
    event LoanRepaid(address indexed borrower, uint256 amount);
    event FundsDeposited(address indexed lender, uint256 amount);
    event FundsWithdrawn(address indexed lender, uint256 amount);

    function deposit() external payable {
        require(msg.value > 0, "Must deposit a positive amount");
        balances[msg.sender] += msg.value;
        lenders.push(msg.sender);
        emit FundsDeposited(msg.sender, msg.value);
    }

    function requestLoan(uint256 _amount, uint256 _interestRate) external {
        require(loans[msg.sender].amount == 0, "Existing loan must be repaid first");
        uint256 repaymentAmount = _amount + (_amount * _interestRate) / 100;
        loans[msg.sender] = Loan({
            amount: _amount,
            interestRate: _interestRate,
            repaymentAmount: repaymentAmount,
            repaymentDeadline: block.timestamp + 30 days,
            isRepaid: false
        });
        emit LoanRequested(msg.sender, _amount, _interestRate);
    }

    function repayLoan() external payable {
        Loan storage loan = loans[msg.sender];
        require(loan.amount > 0, "No loan found");
        require(!loan.isRepaid, "Loan already repaid");
        require(msg.value >= loan.repaymentAmount, "Insufficient repayment amount");

        loan.isRepaid = true;
        balances[msg.sender] -= loan.amount;
        emit LoanRepaid(msg.sender, loan.repaymentAmount);
    }

    function withdrawFunds(uint256 _amount) external {
        require(balances[msg.sender] >= _amount, "Insufficient balance");
        balances[msg.sender] -= _amount;
        payable(msg.sender).transfer(_amount);
        emit FundsWithdrawn(msg.sender, _amount);
    }

    function getLoanDetails(address _borrower) external view returns (Loan memory) {
        return loans[_borrower];
    }

    function getLenderBalance() external view returns (uint256) {
        return balances[msg.sender];
    }
}