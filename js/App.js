function generateTemplate(name, data, basicElement) {
    var template = document.getElementById(name).innerHTML;
    var element = document.createElement(basicElement || 'div');

    Mustache.parse(template);
    element.innerHTML = Mustache.render(template, data);

    return element;
}

//API KODILLA

var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var prefix = "https://cors-anywhere.herokuapp.com/";
var myHeaders = {
    'X-Client-Id': '3741',
    'X-Auth-Token': 'c7afdb22496c25a41ec88cd6533c218d'
};

fetch(prefix + baseUrl + '/board', {
        headers: myHeaders
    })
    .then(function (resp) {
        return resp.json();
    })
    .then(function (resp) {
        setupColumns(resp.columns);
    });

function setupColumns(columns) {
    columns.forEach(function (column) {
        var col = new Column(column.id, column.name);
        board.addColumn(col);
        setupCards(col, column.cards);
        console.log('kolumna', columns);
        console.log('kolumna col', col);

    });
}

function setupCards(col, cards) {
    cards.forEach(function (card) {
        var cardObj = new Card(card.id, card.name);
        col.addCard(cardObj);
    });
}