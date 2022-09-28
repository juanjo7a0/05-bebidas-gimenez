const miArray = ["agua", "campari", "cerveza", "champagne", "fernet", "gancia", "gaseosa", "jugo", "tequila", "vodka"];
console.log (miArray.length);

const marcas = ["villavicencio", "fratelli", "quilmes", "maria extra brut", "branca", "fratelli", "coca cola", "tang", "sminorff"];

const miArraymarcas = miArray.concat(marcas)
console.log(miArraymarcas);

miArray.forEach ((miArray, indice)=>{
console.log(`${indice}: ${miArray}`);   
});

const carrito = [
    {nombre: "agua", precio: 300},
    {nombre: "campari", precio: 700},
    {nombre: "cerveza", precio: 300},
    {nombre: "champagne", precio: 1100},
    {nombre: "fernet", precio: 1200},
    {nombre: "gaseosa", precio: 350},
    {nombre: "jugo", precio: 100},
    {nombre: "tequila", precio: 1500},
    {nommbre: "vodka", precio: 1500},
];

let total = 0;

carrito.forEach((producto)=>(total += producto.precio));
console.log (total);

let resultado = carrito.reduce((acc, producto) => {
    return acc + producto.precio;
},0);
console.log (resultado);


const numeros = [3, 2 , 1, 0];
for (let i = 0; i<=3; i++) {
   alert(numeros[i]);
}

function Bebida (tipo, marca, precio) {
    this.tipo = tipo;
    this.marca = marca;
    this.precio = precio;
}
const productofernet = new Bebida("Fernet, Branca, 2000");
console.log(productofernet);

function Cliente (nombre, apellido, celular){
    this.nombre = nombre;
    this.apellido = apellido;
    this.celular = celular;
    this.saludos = function () {
        console.log("Saludos" + this.nombre);
    };
}

const cliente1 = new Cliente("Juan, Gimenez, 221");
const cliente2 = new Cliente("Pablo, Gimenez, 221");

cliente1.saludos();
cliente2.saludos();

const texto = document.querySelector ("h1");
console.log(texto);

const textoo = document.querySelector ("h2").textContent="Tenemos todo tipo de bebida para fiestas y eventos";
console.log(textoo);


let agregado = document.createElement("h5");
agregado.innerHTML="<h5>--Prohibida su venta a menores de 18 años--</h5>"
document.body.appendChild(agregado);

const lista = document.querySelector("#listacarrito");
let bebidas = ["Agua", "Campari", "Cerveza", "Champagne", "Fernet", "Gaseosa", "Jugo", "Tequila", "Vodka"];
for (let bebida of bebidas){
    let listado = document.createElement("li");
    listado.innerHTML=bebida
    lista.appendChild(listado);
}

const inputnombreyapellido = document.querySelector("#nombreyapellido")
inputnombreyapellido.addEventListener("keydown", ()=>{
    console.log("Escribiendo...")
});

const inputmail = document.querySelector("#mail")
inputmail.addEventListener("blur", ()=>{
    console.log("Validando...")
});

const button = document.
querySelector("#btnCarrito")
button.onclick= function () {
    alert("Vamos a dirigirnos a tu carrito")
};

const bebidasalcoholicas = ["Campari","Cerveza","Champagne","Fernet","Gaseosa","Gancia","Jugo","Vodka"]
const bebidasalcoholicasstr = JSON.stringify(bebidasalcoholicas)
localStorage.setItem("Stock actual", bebidasalcoholicasstr)
console.log(bebidasalcoholicasstr);

const bebidasAlcoholicas = localStorage.getItem("Stock actual")
console.log(JSON.parse(bebidasAlcoholicas));

const bebidasalcoholicasarray= JSON.parse(localStorage.getItem("Stock actual"))
bebidasalcoholicasarray.push("Ginebra")
console.log(bebidasalcoholicasarray)
localStorage.setItem("bebidasalcoholicas", bebidasalcoholicasarray);