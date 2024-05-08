window.onload = function () {
    loadData();
};
function addRow() {
var table = document.getElementById("myTable");
var row = table.insertRow(-1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
cell1.innerHTML = "<input type='text'>";
cell2.innerHTML = "<button onclick='deleteThisRow(this)' class='del'>Finish</button>";
saveData();
}

function deleteThisRow(btn) {
var row = btn.parentNode.parentNode;
row.parentNode.removeChild(row);
saveData();
}
function saveData() {
    var table = document.getElementById("myTable");
    var data = [];
    for (var i = 1; i < table.rows.length; i++) {
        var name = table.rows[i].cells[0].querySelector("input").value;
        data.push(name);
    }
    localStorage.setItem("tableData", JSON.stringify(data));
}

function loadData() {
    var savedData = localStorage.getItem("tableData");
    if (savedData) {
        var data = JSON.parse(savedData);
        var table = document.getElementById("myTable");
        for (var i = 0; i < data.length; i++) {
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = "<input type='text' value='" + data[i] + "'>";
            cell2.innerHTML = "<button onclick='deleteThisRow(this)' class='del'>Finish</button>";
        }
    }
}
