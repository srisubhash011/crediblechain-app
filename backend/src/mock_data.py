from random import randint, uniform

def generate_mock_data(num_users=10):
    mock_data = []
    for user_id in range(num_users):
        user_data = {
            "user_id": user_id,
            "average_delivery_rating": round(uniform(3.0, 5.0), 2),
            "completed_orders": randint(50, 500),
            "monthly_income": round(uniform(1000, 5000), 2),
            "customer_feedback": randint(1, 100),  # Simulating feedback score out of 100
        }
        mock_data.append(user_data)
    return mock_data

if __name__ == "__main__":
    data = generate_mock_data()
    for user in data:
        print(user)