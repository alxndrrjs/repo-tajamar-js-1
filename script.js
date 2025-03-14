document.getElementById('console-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const input = e.target.value;
        if (input.trim() !== "") {
            executeCommand(input);
            e.target.value = '';  // Limpiar el campo de entrada
        }
    }
});

function executeCommand(command) {
    const consoleOutput = document.getElementById('console-output');
    
    // Mostrar el comando en la consola
    consoleOutput.innerHTML += `<div>> ${command}</div>`;
    
    // Ejemplo de manejo de comandos simples
    if (command === "hola") {
        consoleOutput.innerHTML += `<div>Hola, ¿cómo estás?</div>`;
    } else if (command === "fecha") {
        const date = new Date();
        consoleOutput.innerHTML += `<div>${date}</div>`;
    } else {
        consoleOutput.innerHTML += `<div>Comando no reconocido: ${command}</div>`;
    }

    // Desplazar hacia el final
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
}
