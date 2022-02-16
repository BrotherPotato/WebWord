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



$(document).ready(function(){
    $("#inputfile").change(function(){
        var file = 'textFiles\lemmas_60k.txt';
        
        var fReader = new FileReader();

        fReader.addEventListener("load", function() {
            // this will then display a text file
            var text = fReader.result;
          }, false);
            
        fr.readAsText(file);
    });

    if(text != null){
        alert('asdasd');
    }


});