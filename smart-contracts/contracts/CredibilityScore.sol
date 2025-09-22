// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CredibilityScore {
    // Mapping from wallet address to credibility score
    mapping(address => uint256) private scores;

    // Event to emit when a score is updated
    event ScoreUpdated(address indexed user, uint256 newScore);

    // Function to set the credibility score for a user
    function setScore(address user, uint256 score) external {
        scores[user] = score;
        emit ScoreUpdated(user, score);
    }

    // Function to get the credibility score for a user
    function getScore(address user) external view returns (uint256) {
        return scores[user];
    }
}