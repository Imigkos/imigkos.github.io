// Handle Create New Character button
document.getElementById('createCharacterBtn').addEventListener('click', () => {
    alert("Redirecting to create new character form!");
    // Add logic to navigate or display the character creation form
});

// Handle Upload Character JSON file
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

// Display Character Data
function displayCharacterData(data) {
    const output = document.getElementById('output');
    output.style.display = 'block';
    output.innerHTML = `
        <h2>Character Data:</h2>
        <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
}
