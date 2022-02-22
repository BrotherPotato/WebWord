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
var rows = [];
var evaluations = [];
var rowIndex = 0;
var colIndex = 0;
var amountOfWords = 0;

//var dataSet = [];

$(document).ready(function () {
  
  prepareBoard(size);

  function prepareBoard(size) {

    //boardState = [6][size]; // first value row, second value char index
    for (let i = 0; i < 6; i++) {
      boardState[i] = new Array(size);
    }

    tilesRow1 = new Array();
    tilesRow2 = new Array();
    tilesRow3 = new Array();
    tilesRow4 = new Array();
    tilesRow5 = new Array();
    tilesRow6 = new Array();
    rows = [6];
    console.log(boardState);
    //var row1 = document.getElementById("row1");

    //var t1 = document.createElement("div");
    //t1.classList.add("tile");
    //t1.setAttribute("id", "t" + 1);
    //row1.appendChild(t1);

    for (let i = 0; i < size; i++) {
      tilesRow1[i] = document.createElement("div");
      tilesRow1[i].classList.add("tile");
      tilesRow1[i].setAttribute("id", "r1t" + (i + 1));
      var rowDiv1 = document.getElementById("row1");
      rowDiv1.appendChild(tilesRow1[i]);

      tilesRow2[i] = document.createElement("div");
      tilesRow2[i].classList.add("tile");
      tilesRow2[i].setAttribute("id", "r2t" + (i + 1));
      var rowDiv2 = document.getElementById("row2");
      rowDiv2.appendChild(tilesRow2[i]);

      tilesRow3[i] = document.createElement("div");
      tilesRow3[i].classList.add("tile");
      tilesRow3[i].setAttribute("id", "r3t" + (i + 1));
      var rowDiv3 = document.getElementById("row3");
      rowDiv3.appendChild(tilesRow3[i]);

      tilesRow4[i] = document.createElement("div");
      tilesRow4[i].classList.add("tile");
      tilesRow4[i].setAttribute("id", "r4t" + (i + 1));
      var rowDiv4 = document.getElementById("row4");
      rowDiv4.appendChild(tilesRow4[i]);

      tilesRow5[i] = document.createElement("div");
      tilesRow5[i].classList.add("tile");
      tilesRow5[i].setAttribute("id", "r5t" + (i + 1));
      var rowDiv5 = document.getElementById("row5");
      rowDiv5.appendChild(tilesRow5[i]);

      tilesRow6[i] = document.createElement("div");
      tilesRow6[i].classList.add("tile");
      tilesRow6[i].setAttribute("id", "r6t" + (i + 1));
      var rowDiv6 = document.getElementById("row6");
      rowDiv6.appendChild(tilesRow6[i]);
    }

    loadNewDataset(size); // loads listOfWords, solution, and amountOfWords
  }

  function loadNewDataset(size) {
    var file = 'textFiles/lemmas_60k.txt';

    var rawData;
    var rawDataLines = [];
    var dataElements = [];
    //var words = [];
  
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4) { // local request
        rawData = rawFile.responseText;
        rawDataLines = rawData.split("\r\n"); // split every line
        rawDataLines.shift();
        rawDataLines.pop();
        //console.log(rawDataLines);
        //dataElements = rawDataLines.split(" +");
        //console.log(rawDataLines);
        rawDataLines.forEach(line => {
          dataElements.push(line.split("    "));
        });
        //console.log(dataElements)
        dataElements.forEach(line => {
          var text = line[1].toUpperCase()
          
          if(text.length == size){
            var word = {textString: text, freq: line[3]};
            //console.log(Object.values(word));
            listOfWords.push(word);
            amountOfWords++;
          }
          //words.push(word);
          
        });
        //words.shift();
        //console.log(listOfWords);
        //console.log(dataElements);
        console.log(listOfWords);
        //console.log(Object.values(listOfWords[0])[0]);
        //console.log(amountOfWords);
        setRandomWord();
      }
    }
    rawFile.send();
    //console.log(amountOfWords);

    

  }

  function setRandomWord() {
    //console.log(amountOfWords);

    //alert("random");
    //console.log(listOfWords.length);
    //console.log(listOfWords[0].values);

    //console.log(Object.values(listOfWords[0]));
    //console.log(Object.values(listOfWords));
    //console.log(Object.values(listOfWords).length);
    var randomIndex = Math.floor(Math.random() * amountOfWords * 0.8);
    //console.log(randomIndex);
    solution = Object.values(listOfWords[randomIndex])[0];
    console.log(solution);
  }

  $('body').keydown(function (e) {
    console.log('keydown', String.fromCharCode( e.which ));
    var inputChar = String.fromCharCode(e.which);
    if(e.which == 8 && colIndex > 0){ // backspace
      //console.log("8888")
      colIndex--;
      let tileDiv = document.getElementById("r" + (rowIndex + 1) + "t" + (colIndex + 1));
      tileDiv.innerHTML = '';
      boardState[rowIndex][colIndex] = null;

    } else if(e.which == 13 && colIndex == size && isWord(boardState[rowIndex].join(''))){ // enter
      //console.log("131313113");
      //console.log(boardState[rowIndex].join(''));
      evaluation(boardState[rowIndex].join(''));


      rowIndex++;
      colIndex = 0;
    }
    
    else if(isLetter(inputChar) && colIndex < size) {
      boardState[rowIndex][colIndex] = inputChar;

      let tempPara = document.createElement("p");
      tempPara.innerText = inputChar;

      //let rowDiv = document.getElementById("row" + (rowIndex + 1));
      //let tileDiv = rowDiv.childNodes[colIndex]
      let tileDiv = document.getElementById("r" + (rowIndex + 1) + "t" + (colIndex + 1));
      tileDiv.appendChild(tempPara);

      colIndex++;
      console.log(boardState);
    }

  });

  function isLetter(char) {
    return char.toLowerCase() != char.toUpperCase();
  }

  function evaluation(word) {
		var solutionLetters = solution.split("");
    console.log(solutionLetters);
		var charEvaluation = new Array(size);
		var testLetters = word.split("");
    console.log(testLetters);
		
		letterDone = new Array(size).fill(false);
		solutionLetterDone = new Array(size).fill(false);

		for (let i = 0; i < testLetters.length; i++) {
				if(testLetters[i] === solutionLetters[i]) {
            charEvaluation[i] = "correct";
						letterDone[i] = true;
						solutionLetterDone[i] = true;
            document.getElementById("r" + (rowIndex + 1) + "t" + (i + 1)).style.backgroundColor = 'green';
				}
		}
		
		for (let i = 0; i < testLetters.length; i++) {
			if(letterDone[i] == false) {
				for (let j = 0; j < solutionLetters.length; j++) {
					if(testLetters[i] === solutionLetters[j] && solutionLetterDone[j] == false) {
						charEvaluation[i] = "present";
						letterDone[i] = true;
						solutionLetterDone[j] = true;
            document.getElementById("r" + (rowIndex + 1) + "t" + (i + 1)).style.backgroundColor = 'yellow';
						break;
					}
				}
			}
      console.log(charEvaluation);
		}
		
		for (let i = 0; i < testLetters.length; i++) {
			if(letterDone[i] == false) {
				charEvaluation[i] = "absent";
			}
		}
		
		return charEvaluation;
	}

  function CorrectAnswer(word) {
		if(solution.equals(word)) {
			for (var i = 0; i < boardState.length; i++) {
				System.out.println(this.boardState[i]);
			}
			return true;
		} else {
			return false;
		}
	}

  function isWord(input) {
		var isWord = false;
    console.log(input);

		for (var i = 0; i < listOfWords.length; i++) {
			if(input == listOfWords[i].textString) {
				isWord = true;
			}
		}
		return isWord;
	}

});