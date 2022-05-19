var a = [0, 1, 2, 3, 4, 5, 5 ,5, 6, 7 ,8, 8, 9];
var x = 9;
function solution(A, X) {
    //console.log("s");
  var N = A.length;
  if( N === 0){
    return -1;

  } 
  var l = 0;
  var r = N-1;
  while (l < r) {
    var m = Math.floor((l+r)/2 + 1);
    if(A[m] > X) {
      r = m;
    } else {
      l = m;
    }

  }
  if(A[l] === X) {
    return l;
  }
  return -1;
}
//console.log(solution(a, x));

var s = [1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2]
function castleFunc(A) {
    var castle = 2;
    //console.log(A);
    for (let index = 0; index < A.length; index++) {
        if(A[index] === A[index + 1]){
            A.splice(index,1);
            index--;
        }  
    }

    if(A.length === 1){
        return castle = 1;
    }

    //console.log(A);
    for (let index = 1; index <= A.length - 2; index++) {
        //console.log(index);
        if((A[index -1] > A[index]) && A[index] < A[index +1]){ //min
            castle++;
        } else if((A[index -1] < A[index]) && A[index] > A[index +1]){ // max
            castle++;
        } else { // no min or max
            
        }
    }
    return castle;
}
console.log(castleFunc(s));


//console.log(solution(a, x));
function timeStirng(s1, s2) {
    var numUniqMoment = 0;

    var s1time = s1.split(':'); // 15, 15, 00
    //console.log(s1time);
    var s1string = s1time.join(''); // 151500
    //console.log(s1string);
    var s1elements = s1string.split(''); // 1, 5, 1, 5, 0, 0
    var s1joinedElements = s1elements.join('').split('');
    console.log(s1elements);
    console.log(s1joinedElements);
    s1time = s1joinedElements;
    //console.log(s1time);
    var s2time = s2.split(':');
    var s2string = s2time.join('');
    var s2elements = s2string.split('');
    var s2joinedElements = s2elements.join('').split('');
    s2time = s2joinedElements;
    console.log(s2time);
    var count = 0;
    //var currentTime = s1time;
    while(!((s1time[0] == s2time[0]) && (s1time[1] == s2time[1]) && (s1time[2] == s2time[2]) && (s1time[3] == s2time[3]) && (s1time[4] == s2time[4]) && (s1time[5] == s2time[5]))){
        //console.log(s1time);
        numUniqMoment += isUniq(s1time);
        //console.log(numUniqMoment);
        s1time[5]++;
        //console.log(s1time); // 1 5    1 5     0 0
        console.log(s1time);
        if(s1time[5] == 10){
            s1time[4] = s1time[4] + 1;
            s1time[5] = 0.0;
        }
        //console.log(s1time);
        if(s1time[4] == 6){
            s1time[3] = s1time[3] + 1;
            s1time[4] = 0.0;
        }
        if(s1time[3] == 10){
            s1time[2] = s1time[2] + 1;
            s1time[3] = 0.0;
        }
        //console.log(s1time);
        if(s1time[2] == 6){
            s1time[1] = s1time[1] + 1;
            s1time[2] = 0.0;
        }
        if(s1time[1] == 10){
            s1time[0] = s1time[0] + 1;
            s1time[1] = 0.0;
        }
        if(s1time[0] == 2 && s1time[1] == 4) {
            s1time[1] = 0.0;
            s1time[0] = 0.0;
        }
        
        //console.log(s1time);

        count++;
        if(count == 20){
            break;
        }

    }
    return numUniqMoment;
}
var s1 = "15:15:00";
var s2 = "15:15:12";
var numbersArray = [0,0,0,0,0,0];
console.log(timeStirng(s1, s2));

function isUniq(str){
    //var time = str.split(':');
    //console.log(str);
    //var numbersString = str.join(''); //12, 23, 12 -> 122312
    //var numbersArray = str.split('');
    numbersArray = str;
    //console.log(str);
    //console.log(numbersArray);
    numbersArray.sort((a,b)=>a-b)   // 122312 -> 112223

    for (let index = 0; index < numbersArray.length; index++) { // 112223 - > 123
        if(numbersArray[index] === numbersArray[index + 1]){
            numbersArray.splice(index,1);
            index--;
        }  
    }
    //console.log(numbersArray);
    if(numbersArray.length < 3){
        //console.log("numbersString");
        return 1;
    }
    return 0;
}