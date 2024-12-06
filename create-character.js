const classFields = document.getElementById('classFields');
const newCharacterForm = document.getElementById('newCharacterForm');

document.getElementById('addMulticlassBtn').addEventListener('click', () => {
    const multiclassGroup = document.createElement('div');
    multiclassGroup.className = 'class-group';
    multiclassGroup.innerHTML = `
        <div class="multiclass-entry">
            <div class="form-group">
                <label>Class:</label>
                <input type="text" placeholder="Enter class" required>
            </div>

            <div class="form-group">
                <label>Subclass:</label>
                <input type="text" placeholder="Enter subclass" required>
            </div>

            <div class="form-group">
                <label>Level:</label>
                <input type="text" placeholder="Enter level" required>
            </div>

            <button type="button" class="removeMulticlassBtn">Remove</button>
        </div>        
    `;
    // Append the new multiclass fields to the classFields div
    classFields.appendChild(multiclassGroup);
    multiclassGroup.querySelector('.removeMulticlassBtn').addEventListener('click', () => {
        classFields.removeChild(multiclassGroup);  // Removes the entire multiclass entry
});
});

newCharacterForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(newCharacterForm);
    const characterData = {
        name: formData.get('characterName'),
        level: parseInt(formData.get('characterLevel'), 10),
        classes: [],
    };

    const classInputs = classFields.querySelectorAll('.class-group');
    classInputs.forEach((group) => {
        const className = group.querySelector('input:nth-child(2)').value;
        const subclassName = group.querySelector('input:nth-child(4)').value;
        characterData.classes.push({ class: className, subclass: subclassName });
    });

    console.log('Character Created:', characterData);

    alert('Character created successfully!');
    newCharacterForm.reset();
});
