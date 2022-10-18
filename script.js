var selectedRow = null


// AFFICHER LES DONNÉES SAISIES DANS LE TABLEAU 

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
        formData["fullName"] = document.getElementById("fullName").value;
        formData["email"] = document.getElementById("email").value;
        formData["salary"] = document.getElementById("salary").value;
        formData["city"] = document.getElementById("city").value;
        return formData;       
     }

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Modifier</a>
                       <a onClick="onDelete(this)">Supprimer</a>`;
}


// RESET LE TABLEAU APRÈS CHAQUE ENTRÉE 

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}


// PERMET LA MODIFICATION DES ELEMENTS ENREGISTRES 

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}


// PERMET D'AFFICHER LES MODIFICATIONS DANS LE TABLEAU 

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}


// PERMET DE SUPPRIMER UNE LIGNE 

function onDelete(td) {
    if (confirm('Êtes-vous sûr de vouloir supprimer l enregistrement ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

// PERMET D'AFFICHER LES DONNÉES DANS LE FORMULAIRE 

function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}