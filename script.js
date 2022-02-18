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
  var dataElements = [];
  var words = [];

  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) { // local request
      rawData = rawFile.responseText;
      rawDataLines = rawData.split("\r\n"); // split every line
      rawDataLines.pop();
      //console.log(rawDataLines);
      //dataElements = rawDataLines.split(" +");
      //console.log(rawDataLines);
      rawDataLines.forEach(line => {
        dataElements.push(line.split("    "));
      });
      //console.log(dataElements)
      dataElements.forEach(line => {
        var word = {text:line[1], freq:line[3]};
        words.push(word);
      });
      words.shift();
      console.log(words);
      //console.log(dataElements);
    }
  }
  rawFile.send();


});