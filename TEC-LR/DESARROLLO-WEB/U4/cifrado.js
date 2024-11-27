const readline = require('readline');

// Crear una interfaz para leer la entrada del usuario desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para cifrar el mensaje
function cifrar(texto, desplazamiento) {
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    let char = texto[i];

    if (char.match(/[a-z]/i)) {
      // Determina si es mayúscula o minúscula
      let codigo = texto.charCodeAt(i);
      let base = char === char.toUpperCase() ? 65 : 97;

      // Realiza el desplazamiento y ajusta con modulo 26
      char = String.fromCharCode(((codigo - base + desplazamiento) % 26) + base);
    }

    resultado += char;
  }

  return resultado;
}

// Función para descifrar el mensaje
function descifrar(texto, desplazamiento) {
  // Usar la función cifrar con desplazamiento negativo para descifrar
  return cifrar(texto, -desplazamiento);
}

// Preguntar al usuario el mensaje y el desplazamiento
rl.question('Introduce el mensaje a cifrar: ', (mensaje) => {
  rl.question('Introduce el desplazamiento (número entero): ', (desplazamiento) => {
    desplazamiento = parseInt(desplazamiento);

    // Cifrar el mensaje
    let mensajeCifrado = cifrar(mensaje, desplazamiento);
    console.log("Mensaje cifrado: " + mensajeCifrado);

    // Descifrar el mensaje
    let mensajeDescifrado = descifrar(mensajeCifrado, desplazamiento);
    console.log("Mensaje descifrado: " + mensajeDescifrado);

    // Cerrar la interfaz de readline
    rl.close();
  });
});
