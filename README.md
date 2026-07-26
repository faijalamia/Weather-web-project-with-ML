📌 Overview

This project is a full-stack weather forecasting application that combines live weather data retrieval with a machine learning model to predict the next 5 hours of temperature and humidity for a given location.

Rather than relying on static historical forecasts, the application fetches real-time meteorological data and feeds it into a trained ML model to generate short-term predictions — making it practical and dynamic.

✨ Features
🔴 Live data integration — fetches real-time weather parameters from an external API
🤖 ML-based forecasting — predicts temperature and humidity for the next 5 hours
🌐 Web application interface — interactive and user-friendly front end
📓 Jupyter notebook — full model training, evaluation, and experimentation pipeline
📊 Weather dataset — curated weather.csv used for model training and validation
🗂️ Repository Structure
Weather-web-project-with-ML/
│
├── Weather_forecasting.ipynb   # ML model training, data analysis & forecasting pipeline
├── weather.csv                 # Weather dataset used for training
│
├── web_application/            # Web app source code (frontend + backend integration)
│   └── ...
│
├── archive/                    # Saved/archived model versions and experiments
│   └── ...
│
└── README.md
🧠 How It Works
Live Weather API
      │
      ▼
 Data Preprocessing
      │
      ▼
 Trained ML Model  ◄──── weather.csv (training data)
      │
      ▼
 5-Hour Forecast (Temperature & Humidity)
      │
      ▼
 Web Application (displayed to user)
Data Collection — Live weather readings are fetched via API at runtime.
Preprocessing — Raw data is cleaned and formatted to match training features.
Prediction — The trained ML model outputs temperature and humidity forecasts for the next 5 hourly intervals.
Display — Results are rendered in the web interface in a clean, readable format.
🛠️ Tech Stack
Layer	Technology
Language	Python 3.8+
ML & Data	Scikit-learn, Pandas, NumPy
Visualization	Matplotlib, Seaborn
Notebook	Jupyter Notebook
Web App	HTML, CSS, JavaScript
Data Source	Live Weather API
🚀 Getting Started
Prerequisites
bash
pip install pandas numpy scikit-learn matplotlib seaborn jupyter requests
Run the Notebook
bash
jupyter notebook Weather_forecasting.ipynb
Run the Web Application
bash
cd web_application
# Open index.html in your browser, or run the backend server if applicable
📊 Dataset

The weather.csv file contains historical weather observations used for training the forecasting model. Features include:

Temperature (°C)
Humidity (%)
Additional meteorological parameters

The model is trained on this data and then applied to live readings at inference time.

📈 Model

The forecasting model is built and evaluated in Weather_forecasting.ipynb. The notebook covers:

Exploratory Data Analysis (EDA)
Feature engineering and selection
Model training and hyperparameter tuning
Evaluation metrics (MAE, RMSE)
5-hour ahead prediction pipeline

Trained model artifacts are stored in the archive/ folder.

👩‍💻 Author

Fhameda Faija Lamia CSE, Sylhet Engineering College, Bangladesh 📧 lamia.619@sec.ac.bd 🔗 GitHub · LinkedIn · ResearchGate

📄 License

This project is open-source and available under the MIT License.

If you find this project useful, please consider giving it a ⭐ on GitHub!
