import { Carro } from "./interface/Carro";
import { Moto } from "./interface/Moto";

const meuCarro: Carro = {
    marca: "Honda",
    modelo: "Accord",
    ano: 2020,
    portas: 4,
    acelerar: () => "O carro está acelerando!"
};

const minhaMoto: Moto = {
    marca: "Honda",
    modelo: "Africa Twin",
    ano: 2025,
    cilindradas: 1100,
    acelerar: () => "A moto está acelerando!"
}

console.log("Carro: ", meuCarro);
console.log(meuCarro.acelerar());
console.log("Moto:", minhaMoto);
console.log(minhaMoto.acelerar());