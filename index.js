// add solution here
function theBeatlesPlay (musicians, instruments) {
  let arr = [];
  for (let i = 0; i < musicians.length; i++){
    arr.push(`${musicians[0]} plays ${instruments[0]}.`);
  }
  return arr;
}