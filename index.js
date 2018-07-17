// add solution here
function theBeatlesPlay (musicians, instruments) {
  let arr = [];
  let i;
  for (i = 0; i < musicians.length; i++){
    let entry = `${musicians[0]} plays ${instruments[0]}.`;
    arr.push(entry);
  }
  return arr;
}