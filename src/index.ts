import { EstoqueVeiculos } from "./classes/EstoqueVeiculos";
import { GerenciadorVeiculos } from "./classes/GerenciadorVeiculos";
import { Carro } from "./interface/Carro";
import { Moto } from "./interface/Moto";
import { VeiculoEstoque } from "./interface/VeiculoEstoque";
// import { GerenciadorVeiculos } from "./classes/GerenciadorVeiculos";

const accord: Carro = {
    marca: "Honda",
    modelo: "Accord",
    ano: 2020,
    portas: 4,
    acelerar: () => "O carro está acelerando!"
};

const camry: Carro = {
    marca: "Toyota",
    modelo: "Camry",
    ano: 2025,
    portas: 4,
    acelerar: () => "O carro está acelerando!"
}

const africaTwin: Moto = {
    marca: "Honda",
    modelo: "Africa Twin",
    ano: 2025,
    cilindradas: 1100,
    acelerar: () => "A moto está acelerando!"
}

const tiger900: Moto = {
    marca: "Tiger",
    modelo: "900 Rally",
    ano: 2025,
    cilindradas: 1100,
    acelerar: () => "A moto está acelerando!"
}


// EXERCICIO 1s
let listaDeCarros: Carro[] = [];
listaDeCarros.push(accord);
listaDeCarros.push(camry);
const gerenciadorDeCarros = new GerenciadorVeiculos<Carro>(listaDeCarros);
gerenciadorDeCarros.remover(camry);
// gerenciadorDeCarros.exibirListaDeVeiculos();

let listaDeMotos: Moto[] = [];
listaDeMotos.push(africaTwin);
listaDeMotos.push(tiger900);
const gerenciadorDeMotos = new GerenciadorVeiculos<Moto>(listaDeMotos);
gerenciadorDeMotos.remover(africaTwin);
// gerenciadorDeMotos.exibirListaDeVeiculos();

// EXERCÍCIO 2
let corollaEstoque: VeiculoEstoque = {
    modelo: "Corolla",
    quantidade: 10,
};
let civicEstoque: VeiculoEstoque = {
    modelo: "Civic",
    quantidade: 15,
};
let listaDeEstoqueCarros: VeiculoEstoque[] = [];
listaDeEstoqueCarros.push(corollaEstoque);
const estoqueCarros = new EstoqueVeiculos<Carro>(listaDeEstoqueCarros);
estoqueCarros.adicionarEstoque(civicEstoque);
estoqueCarros.removerEstoque("Corolla")


let africaTwinEstoque: VeiculoEstoque = {
    modelo: "Africa Twin",
    quantidade: 5,
};

let tiger900Estoque: VeiculoEstoque = {
    modelo: "Tiger 900 Rally",
    quantidade: 7,
};
let listaDeEstoqueMotos: VeiculoEstoque[] = [];
listaDeEstoqueMotos.push(africaTwinEstoque);
const estoqueMotos = new EstoqueVeiculos<Moto>(listaDeEstoqueMotos);
estoqueMotos.adicionarEstoque(tiger900Estoque);
estoqueMotos.removerEstoque("Africa Twin");





// console.log("Carro: ", accord);
// console.log(accord.acelerar());
// console.log("Moto:", africaTwin);
// console.log(minhaMoto.acelerar());
