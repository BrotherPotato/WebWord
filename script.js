// add code


class Word {
  constructor(wordText, freq) {
    this.wordText = wordText;
    this.freq = freq;
  }
}


var listOfWords = [];
var solution;
var size = 5;
var boardState = [];
var evaluations = [];
var rowIndex = 0;



$(document).ready(function () {
 
  var file = 'textFiles/lemmas_60k.txt';

  var data; // string
  var dataLines; // array

  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) { // local request
      data = rawFile.responseText;
      dataLines = data.split(" ");
    }
  }
  rawFile.send();

});