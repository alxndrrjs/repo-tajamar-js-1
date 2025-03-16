// favicon.js
export function updateFavicon() {
    const isLightMode = document.body.classList.contains('light-mode');  // Revisa si está en dark-mode
    const favicon = document.querySelector("link[rel*='icon']") || document.createElement("link");

    favicon.rel = 'icon';

    // Cambiar favicon según el tema actual
    if (isLightMode) {
        favicon.href = 'assets/icon/favicon-light.svg';  // Cambiar a favicon oscuro
    } else {
        favicon.href = 'assets/icon/favicon-dark.svg';  // Cambiar a favicon claro
    }

    document.head.appendChild(favicon);
}

// export function updateFavicon() {
//     const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
//     const favicon = document.querySelector('link[rel="icon"]');

//     // Cambiar el favicon dependiendo del esquema de color
//     if (darkModeMediaQuery.matches) {
//         favicon.setAttribute("href", "../assets/icon/favicon-dark.svg");  // Favicon para modo oscuro
//     } else {
//         favicon.setAttribute("href", "../assets/icon/favicon-light.svg");  // Favicon para modo claro
//     }
// }