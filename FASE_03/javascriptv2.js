function validateEmail() {
    const emailField = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailField.value)) {
        emailError.textContent = "E-mail inválido.";
        emailError.style.display = "block";
    } else {
        emailError.style.display = "none";
    }
}

function validateCPF(cpf) {
    const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfPattern.test(cpf);
}


function addUC() {
    const ucName = prompt("Digite o nome da nova UC:");
    if (ucName) {
        const table = document.getElementById("ucList").getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        const ucCell = newRow.insertCell(0);
        const actionsCell = newRow.insertCell(1);
        
        ucCell.textContent = ucName;
        actionsCell.innerHTML = `
            <button onclick="moveUp(this)">⬆️</button>
            <button onclick="moveDown(this)">⬇️</button>
            <button onclick="removeUC(this)">❌</button>
        `;
    }
}


function moveUp(button) {
    const row = button.parentNode.parentNode;
    const previousRow = row.previousElementSibling;
    if (previousRow) {
        row.parentNode.insertBefore(row, previousRow);
    }
}


function moveDown(button) {
    const row = button.parentNode.parentNode;
    const nextRow = row.nextElementSibling;
    if (nextRow) {
        row.parentNode.insertBefore(nextRow, row);
    }
}


function removeUC(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}


function addPersonalInfo() {
    const newInfo = document.getElementById("newPersonalInfo").value;
    if (newInfo) {
        const personalDescription = document.getElementById("personalDescription");
        personalDescription.innerHTML += "<br>" + newInfo;
        document.getElementById("newPersonalInfo").value = ""; 
    }
}