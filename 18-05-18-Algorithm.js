// function findp(seoul){

//   var index= 0;

//   for(var i= 0; i < seoul.length; i++){
    
//     if(seoul[i] === "Kim"){
//       index = i;
//     }
//   }

//   return "Kim "+index+"번 째 있다.";
// }

// console.log(findp(["LEE", "Park", "Kim"]));
// /* 사람을 찾는 함수 findp를 만들고 매개 변수를 정한다.
//    매개 변수에는 배열이 들어가 있다.*/

// function reverse(str){
//   var result = "";
//   for(var j= str.length-1; j >= 0; j--){
//     result += str[j];
    
//   }
//   return result;
// }
// console.log(reverse('hello'))

function middleCharacter(str){
  var result = "";

  for(var i= 1; i < str.length-1; i++){
    
      result+= str[i];
  }  
    return result;
  
}
console.log(middleCharacter("thellot"))