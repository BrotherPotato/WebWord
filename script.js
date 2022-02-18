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

  var rawData;
  var rawDataLines = [];
  var dataElements = []

  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) { // local request
      rawData = rawFile.responseText;
      rawDataLines = rawData.split("\r\n"); // split every line
      //dataElements = rawDataLines.split(" +");
      console.log(rawDataLines);
      rawDataLines.forEach(line => {
        dataElements.push(line.split("    "));
      });

      console.log(dataElements);
    }
  }
  rawFile.send();


});