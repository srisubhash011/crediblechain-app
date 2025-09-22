from flask import Flask, request, jsonify
from credibility_score import calculate_credibility_score
from mock_data import generate_mock_data

app = Flask(__name__)

@app.route('/api/credibility_score', methods=['POST'])
def get_credibility_score():
    user_data = request.json
    performance_data = generate_mock_data(user_data['user_id'])
    score = calculate_credibility_score(performance_data)
    return jsonify({'credibility_score': score})

@app.route('/api/request_loan', methods=['POST'])
def request_loan():
    loan_request = request.json
    # Logic to handle loan request based on credibility score
    # This is a placeholder for actual loan processing logic
    return jsonify({'status': 'Loan request submitted', 'amount': loan_request['amount']})

if __name__ == '__main__':
    app.run(debug=True)