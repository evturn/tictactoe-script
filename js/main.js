var wins = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],
    [ 1, 5, 9 ],
    [ 7, 5, 3 ]
];

var cells = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
  {id: 9}
];

var cpuImg = [
  {img: 'img/o-1.jpg'},
  {img: 'img/o-2.jpg'},
  {img: 'img/o-3.jpg'},
  {img: 'img/o-4.jpg'},
  {img: 'img/o-5.jpg'}
];

var userImg = [
  {img: 'img/x-1.jpg'},
  {img: 'img/x-2.jpg'},
  {img: 'img/x-3.jpg'},
  {img: 'img/x-4.jpg'}
];


var cpu = new Cells(cpuImg);
var user = new Cells(userImg);
var cells = new Cells(cells);
var cellsView = new CellsView({collection: cells});
var turns = cells.length;
var occupied = [];
