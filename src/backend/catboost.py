from flask import Flask, jsonify, request
import pandas as pd
import pickle
from catboost import CatBoostClassifier

# Load the saved model
with open('catboost_model.pkl', 'rb') as f:
    catboost_model = pickle.load(f)

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    user_input_df = pd.DataFrame(data)

    # Use the model to make predictions
    prediction = catboost_model.predict_proba(user_input_df)[:, 1]

    # Prepare the response
    if prediction.any() >= 0.5:
        result = f'You are likely by {round(prediction[0]*100)}% to have PCOS.'
    else:
        result = 'You are not likely to have PCOS.'

    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
