// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LendingPool {
    address public owner;
    address public authorizedLender;

    struct Loan {
        address borrower;
        uint256 amount;
        uint256 interestRate;
        bool approved;
        bool repaid;
    }

    mapping(address => uint256) public balances;
    Loan[] public loans;

    event Deposit(address indexed lender, uint256 amount);
    event Withdraw(address indexed lender, uint256 amount);
    event LoanRequested(address indexed borrower, uint256 amount, uint256 interestRate, uint256 loanId);
    event LoanApproved(uint256 loanId);
    event LoanRepaid(uint256 loanId);

    modifier onlyAuthorizedLender() {
        require(msg.sender == authorizedLender, "Not authorized lender");
        _;
    }

    constructor(address _authorizedLender) {
        owner = msg.sender;
        authorizedLender = _authorizedLender;
    }

    // Deposit funds to the pool
    function deposit() external payable onlyAuthorizedLender {
        balances[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    // Withdraw funds from the pool
    function withdraw(uint256 amount) external onlyAuthorizedLender {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
        emit Withdraw(msg.sender, amount);
    }

    // Request a loan
    function requestLoan(uint256 amount, uint256 interestRate) external {
        loans.push(Loan(msg.sender, amount, interestRate, false, false));
        emit LoanRequested(msg.sender, amount, interestRate, loans.length - 1);
    }

    // Approve a loan (only authorized lender)
    function approveLoan(uint256 loanId) external onlyAuthorizedLender {
        require(!loans[loanId].approved, "Already approved");
        loans[loanId].approved = true;
        payable(loans[loanId].borrower).transfer(loans[loanId].amount);
        emit LoanApproved(loanId);
    }

    // Repay a loan
    function repayLoan(uint256 loanId) external payable {
        Loan storage loan = loans[loanId];
        require(msg.sender == loan.borrower, "Only borrower can repay");
        require(loan.approved, "Loan not approved");
        require(!loan.repaid, "Already repaid");
        uint256 repaymentAmount = loan.amount + (loan.amount * loan.interestRate / 100);
        require(msg.value >= repaymentAmount, "Insufficient repayment");
        loan.repaid = true;
        emit LoanRepaid(loanId);
    }

    // Get all loans
    function getLoans() external view returns (Loan[] memory) {
        return loans;
    }
}

//0x186a3dc785aa8ada188b6805b54fb153123c3a5d
