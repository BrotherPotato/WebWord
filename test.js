var a = [0, 1, 2, 3, 4, 5, 5 ,5, 6, 7 ,8, 8, 9];
var x = 9;
function solution(A, X) {
    console.log("s");
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
console.log(solution(a, x));

var s = [1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2]
function castleFunc(A) {
    var castle = 2;
    console.log(A);
    for (let index = 0; index < A.length; index++) {
        if(A[index] === A[index + 1]){
            A.splice(index,1);
            index--;
        }  
    }

    if(A.length === 1){
        return castle = 1;
    }

    console.log(A);
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
