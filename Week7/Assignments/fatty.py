import json
from datetime import datetime

# Load the dataset
with open('fatty-liver-dataset.json', 'r') as file:
    patients = json.load(file)

# Filter patients with weight >= 100 using filter() and a lambda function
heavy_patients = filter(lambda p: p.get('Weight', 0) >= 100, patients)

# Prepare all log lines at once
timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
log_lines = [
    f"{timestamp} - {patient.get('Patient ID', 'Unknown')}: {patient.get('Fasting Blood sugar', 'N/A')} : "
    f"{patient.get('Urea', 'N/A')} : Patient’s BMI is {patient.get('BMI', 'N/A')}\n"
    for patient in heavy_patients
]

# Write all log lines to the file at once
with open('patient_bmi_log.txt', 'w') as log_file:
    log_file.writelines(log_lines)

print("Log has been saved to 'patient_bmi_log.txt'")
