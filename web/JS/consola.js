 window.addEventListener('DOMContentLoaded', () => {
  const consola = document.getElementById('consola');
  const input = document.getElementById('inputConsola');

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const comando = input.value.trim();
      if (!comando) return;

      const lineaComando = document.createElement('div');
      lineaComando.textContent = `C:\\Users\\rober> ${comando}`;
      consola.appendChild(lineaComando);

      const date = new Date();

      let respuesta;
      switch (comando.toLowerCase()) {
        case 'hello':
          respuesta = 'Hola mundo';
          break;
        case 'clear':
          consola.innerHTML = '';
          respuesta = '        Bienvenido al sistema de telemetría.';
          break;
        case 'help':
          respuesta = 'Comandos disponibles: \n-hello, \n-clear, \n-help, \n-showSensors, \n-getDate, \n-temp, \n-hum, \n-top';
          break;
        case 'showsensors':
                    respuesta = 'Sensores compatibles con esta app:\n- Temp/Hum --> DHT11  \n - Distancia --> HC-SR04  ';
          break;
        case 'getdate':
                    respuesta = 'La fecha de hoy es' + `${date}`;
          break;
        case 'temp':
                    respuesta = 'Para obtener los datos de la temperatura actual inserte el arduino';
          break;
        case 'hum':
                    respuesta = 'Para obtener los datos del nivell de humedad actual inserte el arduino';
          break;
          respuesta = `Comando ${comando} ejecutado correctamente.`;
          break;
        default:
          respuesta = `"${comando}" no se reconoce como un comando interno o externo, programa o archivo por lotes ejecutable.`;
      }

      const lineaRespuesta = document.createElement('div');
      lineaRespuesta.textContent = respuesta;
      consola.appendChild(lineaRespuesta);

      consola.scrollTop = consola.scrollHeight;
      input.value = '';
    }
  });
});
