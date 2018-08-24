var blink1 = function() {
  eyes[0].className = 'eye closed';
  eyes[1].className = 'eye closed';
  var open = 50 + Math.random() * 100;
  setTimeout('eyes[0].className = "eye";', open);
  setTimeout('eyes[1].className = "eye";', open);
  setTimeout(blink1, 2500 + Math.random() * 7500);
};
var blink2 = function() {
  var one = Math.random() * 100;
  var two = Math.random() * 100;
  setTimeout('eyes[2].className = "eye closed";', one);
  setTimeout('eyes[3].className = "eye closed";', two);
  setTimeout('eyes[2].className = "eye";', one + 100);
  setTimeout('eyes[3].className = "eye";', two + 200);
  setTimeout(blink2, 2500 + Math.random() * 7500);
};
var eyes = [
  document.getElementById('eye1'),
  document.getElementById('eye2'),
  document.getElementById('eye3'),
  document.getElementById('eye4')
];
setTimeout(blink1, 2500);
setTimeout(blink2, 5000);
