var ascii = [73, 32, 115, 112, 101, 97, 107, 32, 105, 110, 32, 110, 117, 109, 98, 101, 114, 115];

var english = [];

ascii = ascii.forEach(function(a){
   a = String.fromCharCode(a.toString());
   english.push(a);
});

console.log(english);

//single line solution:

ascii.forEach(function(a){  a = String.fromCharCode(a.toString()); });
