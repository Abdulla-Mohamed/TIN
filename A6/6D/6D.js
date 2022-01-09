function addRow(form)
{
    let table = document.getElementById("table");
    let row = table.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = form.id.value;
    cell2.innerHTML = form.name.value;
    cell3.innerHTML = form.spec.value;
}