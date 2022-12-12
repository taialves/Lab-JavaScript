


var arr = [1,3,3,2,5,6,2,5,2,2];
var x="ss";

function isArray(x){
    if(Array.isArray(arr)){

        console.log("é array");
    }else{
        console.log("nao e array");
    }
}

function cloneArray(x){
    var novoArray = x.slice();

    console.log(novoArray);
}

function primeiroElArray(){
    console.log(arr.at(0));
}

function ultimoElArray(){
    console.log(arr.at(arr.length - 1));
}

function unirElementos(){
    var string = arr.toString()
    string = string.replace(/,/g, "")
    console.log(string);
}

function duplicados(x){
    var novaArr = arr.filter((este, i) => arr.indexOf(este) === i);
    console.log(novaArr);
}

function soma(x,y){

    for(var i = 0;i< x.length; i++){
        console.log(x[i] + y[i]);
    }

}
// isArray(arr)
// cloneArray(arr)
// primeiroElArray()
// ultimoElArray()
// unirElementos()
duplicados()







