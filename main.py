import webview
import threading
import serial
import os

def leer_arduino():
    try:
        ser = serial.Serial('COM3', baudrate=9600, timeout=1)
        while True:
            arduinoData = ser.readline()
            if arduinoData:
                print(arduinoData.decode().strip())
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    ruta_html = os.path.abspath("web/HTML/index.html")
    ruta_html = f"file://{ruta_html}"

    # Crear ventana
    window = webview.create_window("Telemetría Arduino", ruta_html)

    # Iniciar hilo para lectura Arduino
    hilo = threading.Thread(target=leer_arduino, daemon=True)
    hilo.start()

    # Iniciar ventana
    webview.start()
