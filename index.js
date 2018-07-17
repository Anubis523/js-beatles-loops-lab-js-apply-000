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