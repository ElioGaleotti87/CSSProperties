/Comparaciones/
selector {
	property = value;
}

var firstName = value;

Definitios
var variable: lugar, contenedor, ubicacion de almacenamiento donde guardar cosas para recuperarlas despues

Las variables se pisan 
var firstName = value01;
var firstName = value02;
firstName = value02
firstName 
value02

Las variales se pueden rehusar para otras operaciones
var realNumber = 13;
realNumber + 12
25

Argumentos
son un estilo de variable que se declaran dentro de la funcion
toman un valor luego cuando se las invocada
function saluda(nombre){
	console.log('Hola como va ' + nombre)
};
saluda('Mariano');
Hola como va Mariano

function suma(a, b){
	console.log(a+b)
};
suma(1,10)
11


El lenguaje de programacion tiene una cantidad de operaciones que sabe hacer
Presedencia de Signos (concepto matematico)
2*4 + 3*(1+2)
17
2*4 + 3*3
8 + 9 
17

const variable: la variable no puede ser pisada, variable constante
const PI = 3.1416
PI + realNumber
16.1416

palabras reservadas por el lenguaje var, const 

firstName: se accede a lo que esta adentro de la variable por medio de ese nombre

= operacion de asignacion (lo que esta a la derecha del = guardarlo en firstName)

value: representacion de cosas

Tipo de Dato: que tipo de cosas que se guarda en var variable

String: hilo de letras y o numeros que se escriben entre comillas
Numbers: var num, var real, var neg
Boolean: 'to make decisions, you have to ask yourself a question' yes or no, true or false, 1 or 0
true or false son palabras reservadas
Null: nada, no es un 0, ni una palabra vacia
undefined: no definido;

Operadores Matematicos
+ - * / = % (Modulo) Modulo devuelve el resto de la division entera

Operacion matematia con String
'2' * '2'
4
'2' + '2'
"22"
 Casteo de datos: se cambia el tipo de dato
 convertir tipo de datos para resolver lo que el usuario le estaba pidiendo
 
 Logica interna
'nombre ' + ' apellido'
"nombre  apellido"
 Suma de dos strings devuelve un string concatenado

NaN (Not a Number)
 null + undefined
 NaN

Funciones
No escribir codigo que haga dos veces lo mismo
verbos o acciones que hacen una persona o computadora
Una funcion agrupa codigo, lo guarda en un lugar para luego ejecutarlo

// console.log() recibe un argumento entre los parentesis y lo imprime

console.log('Hola, mi nombre es sarasa,Guzman')
console.log('estoy re pintado')

function myFunction() {
	//codigo
}

const otraFuncion = function() {
	//codigo
}

//arrow function
const yOtra = () => {
	//codigo
};


function presentar(nombre,judicial) {
	console.log('Hola mi nombre es ' + nombre)
	console.log('Estoy re ' + judicial)
};

presentar('Mariano', 'imputado'); /Invocar variable que ha sido declarada/
Hola mi nombre es Mariano
Estoy re imputado

presentar(); /Invocar variable que no ha sido declarada/
Hola mi nomre es undefined
Estoy re undefined

//..Crear - Invocar - Declarar o no variable..//

Argumentos en Funciones
Declarar un argumento en una funcion es como haber declarado una variable en otro Scope
La variable no tiene valor aun, solo hasta que esta es invocada y se le asigna un valor




Similitudes con Label y la relacion con Input en HTML





Scope /Areas donde algunas variables tienen sentido y otras no/

//Ejemplo de Scope//
var nombre = Mariano;

function reimputado (nombre){
	console.log('Hola como andas imputado ' + nombre)
};

reimputado('Mati');
Hola como andas imputado Mati

me imprime Mati en vez de Mariano por una cuestion de Scope
Cuando uno declara una funcion todo lo que este adentro de las llaves, se conoce como un Scope nuevo
Las variables definidas dentro de una funcion no pueden ser accedidas desde afuera

Como interactuan entre si los Scopes??

var nombre = Mariano;

function reimputado (){
	console.log('Hola como andas imputado ' + nombre)
};

reimputado();
Hola como andas imputado Mariano

Cuando uno ejecuta en una function una variable que no fue declarada previamente como argumento
javascript busca en el siguiente scope (area para encontrar sentido a la variable) e imprime ese valor al ser Invocada


alert('asasa');

prompt('sasas');
Le tiras un string y te lo devuelve por medio de un input 

Funciones matematicas
Math. 



Funciones Return

function noRetorna(){
	var hola = 1
	var chao = 2
};
noRetorna();
undefined

var mariano = noRetorna(); //var mariano a lo que me devuelva noRtorna(), 
//como las funciones sin argumentos no devuelven un valor especifico
//me devuelve undefined cuando llamo a la variable mariano  
mariano
undefined

function siRetorna(){
	return 'La concha que te re pario'
};
siRetorna();
"La concha que te remil pario"


function siRetorna02(){
	return 15
};
siRetorna02();
15

var mariano = SiRetorna02();
mariano
15

SiRetorna02() + 12
27

suma (suma(3,4), suma(3,4))

Todo el codigo que este abajo del return no va a funcionar, nunca se lo va a leer
Las funciones pueden retornar una sola vez
function suma(a, b){
	console.log('hola')
	return a + b
	console.log('ciao') 
};
 
suma(1, 2);
hola
3


 

Control de Flujo (condicionales)
Permite agregar logica al codigo. 
Ir haciendo preguntas e ir ejecutando distintos codigos segun ciertas condiciones

function puedeManejar(edad){
	if (edad > 18) { //Las condiciones son expresiones (rutas, caminos) que se convierten en verdadero o en falso (boolean)//
		return true;
	}
		return false;
}

puedeManejar(22);
true

== se usa para comparar

if(true){
	console.log('hola')
};
hola

if(false){
	console.log('hola') //nunca va a salir hola porque la condificion
};						//es falsa
undefined


Condiciones anidadas

edad = 21
21

if (edad >=21){
	console.log('puedes comprar alcohol');
} else {
	console.log('no puedes comprar alcohol');
};
puedes comprar alcohol

edad=18
18

if (edad >=21){
	console.log('puedes comprar alcohol');
} else {
	console.log('no puedes comprar alcohol');
};
no puedes comprar alcohol



/Else If/

edad = 19

If(edad >=30){
	console.log('sos viejo');
}else if (edad >=20){
	console.log('sos joven');
} else {
	console.log('estas re imputado');
};
estas re imputado






















