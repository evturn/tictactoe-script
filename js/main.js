var donutData = [
  {img: 'img/o-1.jpg', emblem: 'o'},
  {img: 'img/o-2.jpg', emblem: 'o'},
  {img: 'img/o-3.jpg', emblem: 'o'},
  {img: 'img/o-4.jpg', emblem: 'o'},
  {img: 'img/o-5.jpg', emblem: 'o'}
];

var eclairData = [
  {img: 'img/x-1.jpg', emblem: 'x'},
  {img: 'img/x-2.jpg', emblem: 'x'},
  {img: 'img/x-3.jpg', emblem: 'x'},
  {img: 'img/x-4.jpg', emblem: 'x'}
];

var winningOutcomes = [
    [ 'a1', 'a2', 'a3' ],
    [ 'b1', 'b2', 'b3' ],
    [ 'c1', 'c2', 'c3' ],
    [ 'a1', 'b1', 'c1' ],
    [ 'a2', 'b2', 'c2' ],
    [ 'a1', 'b2', 'c3' ],
    [ 'c1', 'b2', 'a3' ]
];

new AppView();





function isOdd(number) {
  return number % 2;
};

function compareValues(array) {
  for(var i = 1; i < array.length; i++) {
    if (array[i] !== array[0]) {
        return false;
    }
  };
  return true;
};

function removeValue(array, value) {
  var idx = array.indexOf(value);
  if (idx != -1) {
    array.splice(idx, 1);
  }
};

$(function() {
  cellsCollection = new CellsCollection(cellGrid);
  new CellsView(cellsCollection);

});
