import os
import eel

# Initialize eel with the 'www' folder
eel.init('www')

# Define a Python function that can be called from Javascript
os.system('start msedge.exe --app=http://localhost:8000/index.html')

# Start the eel app
eel.start('index.html', mode='None', host='localhost', port=8000, block=True)
