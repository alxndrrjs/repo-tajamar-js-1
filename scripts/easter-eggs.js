import { updateFavicon } from "./favicon.js";

// Cambiar tema
export function toggleTheme() {
    document.body.classList.toggle('light-mode');
    alert('¡Has cambiado el tema!');

    // Actualizar el favicon según el tema
    updateFavicon();

    // Guardar el tema en localStorage
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
}
  
// Contador de errores
export let errorCount = 0;

export function incrementErrorCount() {
    errorCount++;
}

window.onerror = function() {
    incrementErrorCount();  // Incrementa el contador de errores
};

// Restablecer página
export function resetSettings() {
    document.body.classList.remove('light-mode');
    localStorage.removeItem('theme');
    errorCount = 0; // Reiniciar el contador de errores
    alert('¡Se han restablecido todas las configuraciones!');
}
