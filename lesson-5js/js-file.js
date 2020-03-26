"use strict"

function makeBuffer(){
	var string = '';
	
	return{
		getNext : function(){
			string++;
		},
		add : function(value){
			string = string + '' + value;
		},
		print : function(){
			return string;
		},
		clear : function(){
			string = '';
		}
	}
}

//1
var buffer = makeBuffer();

//додати значення до буферу
buffer.add( 'JavaScript ');
buffer.add( 'Вчити ');
buffer.add( 'Потрібно!');

// отримати поточне значення
console.log(buffer.print());
// JavaScript Вчити Потрібно!

var buffer = makeBuffer ();
buffer.add(0);
buffer.add(1);
buffer.add(0);
console.log (buffer.print()); // '010'

//2
var buffer = makeBuffer ();

buffer.add("Тест ");
buffer.add("тебе не з'їсть");
console.log((buffer.print())); // Тест тебе не з'їсть
buffer.clear ();
console.log( (buffer.print())); // "" 