var headElem = document.head;

//memberi judul halaman web
var judul = document.getElementsByTagName('title');
judul[0].innerHTML = 'Find Kakashi!!!';

//memberi link CSS
// var linkCss = document.createElement('link');
// linkCss.setAttribute('href', 'assets/css/stylegame.css');
// linkCss.setAttribute('rel', 'stylesheet');
// headElem.appendChild(linkCss);

var bodyElem = document.body;

//membuat element <div id="papan">. Child dari <body>
var divPapan = document.createElement('div');
divPapan.setAttribute('id', 'papan');
bodyElem.appendChild(divPapan);

bodyElem.insertBefore(divPapan, document.getElementsByTagName('script')[0]);

//membuat element <h1 id="pesan">. Child dari <div id="papan">
var h1 = document.createElement('h1');
h1.setAttribute('id', 'pesan');
divPapan.appendChild(h1);

//membuat element <form>. Child dari <div id="papan">
var form = document.createElement('form');
divPapan.appendChild(form);

//membuat element <div class="input">. Child dari <form>
var divInput = document.createElement('div');
divInput.setAttribute('class', 'input');
form.appendChild(divInput);

//membuat element <input id="tebakanInput">. Child dari <div class="input">
var inputText = document.createElement('input');
inputText.setAttribute('id', 'tebakanInput');
inputText.setAttribute('type', 'text');
inputText.setAttribute('class', 'form-control');
inputText.setAttribute('placeholder', 'A0');
inputText.setAttribute('autofocus','');
divInput.appendChild(inputText);

//membuat element <input id="cariButton">. Child dari <div class="input">
var inputButton = document.createElement('input');
inputButton.setAttribute('id', 'cariButton');
inputButton.setAttribute('type', 'button');
inputButton.setAttribute('class', 'btn btn-danger');
inputButton.setAttribute('value', 'Cari!');
divInput.appendChild(inputButton);

//membuat element <table>. Child dari <div id="papan">
var table = document.createElement('table');
divPapan.appendChild(table);

//membuat element <tr>. Child dari <table>
var tr1Elem = document.createElement('tr');
table.appendChild(tr1Elem);

//membuat element <td>. Child dari <tr>
var td00Elem = document.createElement('td');
td00Elem.setAttribute('id', '00');
tr1Elem.appendChild(td00Elem);

var td01Elem = document.createElement('td');
td01Elem.setAttribute('id', '01');
tr1Elem.appendChild(td01Elem);

var td02Elem = document.createElement('td');
td02Elem.setAttribute('id', '02');
tr1Elem.appendChild(td02Elem);

var td03Elem = document.createElement('td');
td03Elem.setAttribute('id', '03');
tr1Elem.appendChild(td03Elem);

var td04Elem = document.createElement('td');
td04Elem.setAttribute('id', '04');
tr1Elem.appendChild(td04Elem);

var td05Elem = document.createElement('td');
td05Elem.setAttribute('id', '05');
tr1Elem.appendChild(td05Elem);

var td06Elem = document.createElement('td');
td06Elem.setAttribute('id', '06');
tr1Elem.appendChild(td06Elem);

//membuat element <tr>. Child dari <table>
var tr2Elem = document.createElement('tr');
table.appendChild(tr2Elem);

//membuat element <td>. Child dari <tr>
var indextd1 = 9;
for(var i = 0; i < 7; i++) {
  indextd1++;
  var td10Elem = document.createElement('td');
  td10Elem.setAttribute('id', indextd1);
  tr2Elem.appendChild(td10Elem);
}

//membuat element <tr>. Child dari <table>
var tr3Elem = document.createElement('tr');
table.appendChild(tr3Elem);

//membuat element <td>. Child dari <tr>
var indextd2 = 19;
for (var i = 0; i < 7; i++) {
  indextd2++;
  var td20Elem = document.createElement('td');
  td20Elem.setAttribute('id', indextd2);
  tr3Elem.appendChild(td20Elem);
}

//membuat element <tr>. Child dari <table>
var tr4Elem = document.createElement('tr');
table.appendChild(tr4Elem);

//membuat element <td>. Child dari <tr>
var indextd3 = 29;
for (var i = 0; i < 7; i++) {
  indextd3++;
  var td30Elem = document.createElement('td');
  td30Elem.setAttribute('id', indextd3);
  tr4Elem.appendChild(td30Elem);
}

//membuat element <tr>. Child dari <table>
var tr5Elem = document.createElement('tr');
table.appendChild(tr5Elem);

//membuat element <td>. Child dari <tr>
var indextd4 = 39;
for (var i = 0; i < 7; i++) {
  indextd4++;
  var td40Elem = document.createElement('td');
  td40Elem.setAttribute('id', indextd4);
  tr5Elem.appendChild(td40Elem);
}

//membuat element <tr>. Child dari <table>
var tr6Elem = document.createElement('tr');
table.appendChild(tr6Elem);

//membuat element <td>. Child dari <tr>
var indextd5 = 49;
for (var i = 0; i < 7; i++) {
  indextd5++;
  var td50Elem = document.createElement('td');
  td50Elem.setAttribute('id', indextd5);
  tr6Elem.appendChild(td50Elem);
}

//membuat element <tr>. Child dari <table>
var tr7Elem = document.createElement('tr');
table.appendChild(tr7Elem);

//membuat element <td>. Child dari <tr>
var indextd6 = 59;
for (var i = 0; i < 7; i++) {
  indextd6++;
  var td60Elem = document.createElement('td');
  td60Elem.setAttribute('id', indextd6);
  tr7Elem.appendChild(td60Elem);
}
