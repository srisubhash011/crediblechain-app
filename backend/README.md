# CredibleChain Backend

## Overview
CredibleChain is a decentralized peer-to-peer lending platform that leverages blockchain technology to provide automated micro-loans to micro-entrepreneurs. This backend application is responsible for calculating credibility scores based on user performance data and managing loan requests.

## Directory Structure
- `src/`: Contains the main application logic.
  - `app.py`: Main entry point for the backend application.
  - `credibility_score.py`: Logic for calculating the "Credibility Score".
  - `mock_data.py`: Generates mock performance data for testing.
- `requirements.txt`: Lists the dependencies required for the backend application.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd crediblechain-app/backend
   ```

2. **Install Dependencies**
   It is recommended to use a virtual environment. You can create one using `venv` or `conda`.
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   pip install -r requirements.txt
   ```

3. **Run the Application**
   You can start the backend server by running:
   ```bash
   python src/app.py
   ```

4. **API Endpoints**
   - `/calculate_score`: Endpoint to calculate the credibility score based on user performance data.
   - `/request_loan`: Endpoint for borrowers to request loans based on their credibility score.

## Usage Guidelines
- Ensure that the necessary mock data is generated using `mock_data.py` before testing the credibility scoring functionality.
- The backend is designed to work in conjunction with the smart contracts deployed on the Ethereum testnet.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.