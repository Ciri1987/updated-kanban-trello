var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var prefix = "https://cors-anywhere.herokuapp.com/";
var myHeaders = {
    'X-Client-Id': '3741',
    'X-Auth-Token': 'c7afdb22496c25a41ec88cd6533c218d'
};


var board = {
    name: 'Kanban Board',
    addColumn: function (column) {
        this.element.appendChild(column.element);
    },
    element: document.querySelector('#board .column-container')
};


document.querySelector('#board .create-column').addEventListener('click', function () {
    var name = prompt('Enter a column name');
    var data = new FormData();

    data.append('name', name);

    fetch(prefix + baseUrl + '/column', {
            method: 'POST',
            headers: myHeaders,
            body: data,
        })
        .then(function (resp) {
            return resp.json();
        })
        .then(function (resp) {
            var column = new Column(resp.id, name);
            board.addColumn(column);
        });
});