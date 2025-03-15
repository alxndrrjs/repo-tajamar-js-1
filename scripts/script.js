import { exercises } from "./exercises.js";

const outputElement = document.getElementById("output");
const exercisesElement = document.getElementById("exercises");

const lines = [
    "Live reload enabled.",
    "[Violation] 'setTimeout' handler took 52ms", 
    "[Warning] Deprecation: The `beforeunload` event is changing behavior in Chrome 123.",
    "[Info] Fetching latest data from API...",
    "Failed to load resource: the server responded with a status of 404 (Not Found)",
    "Uncaught TypeError: undefined is not a function",
    "index.html:99",
    "favicon.ico:1",
];

let index = 0;
let exerciseIndex = 0;

function typeLine() {
    if (index < lines.length) {
        let line = document.createElement("div");
        if (lines[index].includes("Failed")) {
            line.classList.add("error");
        } else if (lines[index].includes("Warning")) {
            line.classList.add("warning");
        } else if (lines[index].includes("Info")) {
            line.classList.add("info");
        }
        
        line.textContent = lines[index];
        outputElement.appendChild(line);
        outputElement.scrollTop = outputElement.scrollHeight;
        index++;

    } else if (exerciseIndex < exercises.length) {

        // Mostrar los ejercicios después de terminar la consola
        let exercise = document.createElement("div");
        let title = document.createElement("h2");
        let codeBlock = document.createElement("pre");
        
        title.textContent = exercises[exerciseIndex].title;
        codeBlock.textContent = exercises[exerciseIndex].code;

        exercise.appendChild(title);
        exercise.appendChild(codeBlock);
        exercisesElement.appendChild(exercise);

        exerciseIndex++;
    }
    
    setTimeout(typeLine, 500);
}

typeLine();