let devolverString = (str)=>{console.log(str)};

devolverString("Hola");

let suma = (a,b)=> {console.log (a+b)};

suma(1,2);

let resta = (a,b)=> {console.log (a-b)};

resta(1,2);

let multiplicacion = (a,b)=> {console.log (a*b)};

multiplicacion(1,2);

let division = (a,b)=> {console.log (a/b)};

division(1,2);

let sonIguales = (a,b)=> (a===b)?console.log ("True"):console.log ("False");

sonIguales(1,1);

let tienenMismaLongitud = (a,b)=> (a.length === b.length)?console.log ("True"):console.log ("False");

tienenMismaLongitud("A","B");

let menosQueNoventa = (a)=> (a < 90)?console.log ("True"):console.log ("False");

menosQueNoventa(80);

let mayorQueCincuenta = (a)=> (a > 50)?console.log ("True"):console.log ("False");

mayorQueCincuenta(20);

let obtenerResto = (a,b)=> {console.log(a%b)};

obtenerResto(11,2);

let esPar = a=> (a%2 === 0)?console.log ("True"):console.log ("False");

esPar(17);

let esImpar = a=> (a%2 === 0)?console.log ("False"):console.log ("True");

esImpar(17);

let elevarAlCuadrado = a => {console.log(a*a)};

elevarAlCuadrado(5);

let elevarAlCubo = a => {console.log(a*a*a)};

elevarAlCubo(5);

let elevar = (num,exp)=>{console.log(Math.pow(num,exp))}

elevar(5,2);

let redonderNumero = a=>{console.log(Math.round(a))};

redonderNumero(5.5);

let redondearHaciaArriba = a=>{console.log(Math.ceil(a))};

redondearHaciaArriba(5.5);

let numeroRandom= () =>{console.log(Math.random())};

numeroRandom();

let esPositivo = a =>(a>0)?console.log("Es positivo"):(a<0)?console.log("Es negativo"):console.log("Es cero");

esPositivo(-1);

let agregarSimboloExclamacion = a => {console.log(`${a}!`)};

agregarSimboloExclamacion("Hola");

let combinarNombres = (a,b) => {console.log(`${a} ${b}`)};

combinarNombres("Juan","Pablo");

let obtenerSaludo = (a) => {console.log(`Hola ${a}`)};

obtenerSaludo("Juan");

let obtenerAreaRectangulo = (a,b) => {console.log(a*b)}

obtenerAreaRectangulo(5,5);

let retornarPerimetro = (a) => {console.log(a*4)}

retornarPerimetro(5);

let areaDelTriangulo = (a,b) => {console.log((a*b)/2)};

areaDelTriangulo(5,5);

let deEuroAdolar = a => {console.log(a*1.2)}

deEuroAdolar(5);

let esVocal = (a)=>{a = a.toLowerCase();(a.length!==1)?console.log("Dato incorrecto ingresaste mas de un caracter"):(a == "a" || a == "e" || a == "i" || a == "o" || a == "u")?console.log("Es vocal"):console.log("No es vocal");}

esVocal("a");






