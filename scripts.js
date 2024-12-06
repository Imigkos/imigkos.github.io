// Elements
const createCharacterBtn = document.getElementById('createCharacterBtn');
const characterForm = document.getElementById('characterForm');
const menu = document.getElementById('menu');
const cancelFormBtn = document.getElementById('cancelFormBtn');
const addMulticlassBtn = document.getElementById('addMulticlassBtn');
const classFields = document.getElementById('classFields');
const newCharacterForm = document.getElementById('newCharacterForm');


document.getElementById('createCharacterBtn').addEventListener('click', () => {
    window.location.href = 'create-character.html'; // Replace with the correct path to your character creation page
});

document.getElementById('uploadCharacter').addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file && file.type === "application/json") {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const characterData = JSON.parse(e.target.result);
                displayCharacterData(characterData);
            } catch (error) {
                alert("Invalid JSON file!");
            }
        };
        reader.readAsText(file);
    } else {
        alert("Please upload a valid JSON file!");
    }
});