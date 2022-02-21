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
var amountOfWords = 0;

//var dataSet = [];

$(document).ready(function () {
  
  prepareBoard(size);

  

  function prepareBoard(size) {

    boardState = [6][size]; // first value row, second value char index
    rows = [6];

    //var row1 = document.getElementById("row1");

    //var t1 = document.createElement("div");
    //t1.classList.add("tile");
    //t1.setAttribute("id", "t" + 1);
    //row1.appendChild(t1);

    var box = document.getElementById("tileBox");
    for (let j = 0; j < rows.length; j++) { // loops through rows
      rows[j] = document.createElement("div");
      for (let i = 0; i < boardState[j].length; i++) { // loops through elements
        
        boardState[j][i] = document.createElement("div");
        boardState[j][i].classList.add("tile");
        boardState[j][i].setAttribute("id", "t" + 1);
        row1.appendChild(boardState[j][i]);
      }
      box.appendChild(rows[j]);
    }

    
    /*
    CODE FOR ADDING BLOCKS
    
    */

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
        //console.log(listOfWords);
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

  function evaluation(word) {
		solutionLetters = solution.split("");
		charEvaluation = new String[solutionLetters.length];
		testLetters = word.split("");
		
		letterDone = new boolean[solutionLetters.length];
		solutionLetterDone = new boolean[solutionLetters.length]; 

		for (var i = 0; i < testLetters.length; i++) {
				if(testLetters[i].equals(solutionLetters[i])) {
            charEvaluation[i] = "correct";
						letterDone[i] = true;
						solutionLetterDone[i] = true;
				}
		}
		
		for (var i = 0; i < testLetters.length; i++) {
			if(letterDone[i] == false) {
				for (var j = 0; j < solutionLetters.length; j++) {
					if(testLetters[i].equals(solutionLetters[j]) && solutionLetterDone[j] == false) {
						charEvaluation[i] = "present";
						letterDone[i] = true;
						solutionLetterDone[j] = true;
						break;
					}
				}
			}
		}
		
		for (var i = 0; i < testLetters.length; i++) {
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
		for (var i = 0; i < listOfWords.size(); i++) {
			if(input.equals(listOfWords.get(i).getWord())) {
				isWord = true;
			}
		}
		return isWord;
	}

});