from catboost import CatBoostClassifier
from sklearn.model_selection import train_test_split
import pandas as pd
import pickle


pcos_df = pd.read_csv(
    '/PCOS_data_without_infertility..csv', sheet_name='Full_new')
# Load the data and pre-process
pcos_df.drop(columns=['Sl. No', 'Patient File No.',
             'RBS(mg/dl)'], inplace=True)
pcos_df.fillna(pcos_df.median(), inplace=True)

# Create X and y
X = pcos_df.drop(columns=['PCOS (Y/N)'])
y = pcos_df['PCOS (Y/N)']

# Print the columns of X
# print("Columns of X:")
# print(X.columns)

# Print the values of each row in X
# print("Values of each row in X:")
# for i in range(len(X)):
#     print(X.iloc[i])

# Train the model
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)
catboost_model = CatBoostClassifier(
    iterations=1000, learning_rate=0.1, depth=3)
catboost_model.fit(X_train, y_train)

# Save the model as a pickle file
with open("catboost_model.pkl", "wb") as f:
    pickle.dump(catboost_model, f)
