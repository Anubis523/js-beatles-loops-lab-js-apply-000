// add solution here
function theBeatlesPlay (musicians, instruments) {
  let arr = [];
  var i;
  for (i = 0; i < musicians.length; i++){
    let entry = `${musicians[i]} plays ${instruments[i]}`;
    arr.push(entry);
  }
  return arr;
}

function johnLennonFacts (facts) {
  let i = 0;
  while (i < facts.length ){
    facts[i] += '!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles (times) {
  let arr = [];
  if (times < 15) {
     do {
      arr.push ('I Love the Beatles!');
      times --;
    }
    while (times > 0) {
    }
  }
  else {
    arr = ['I Love the Beatles!'];
  }

  return arr;
}