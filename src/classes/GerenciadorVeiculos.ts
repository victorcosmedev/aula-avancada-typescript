import { Veiculo } from "../interface/Veiculo";

export class GerenciadorVeiculos<T extends Veiculo> {
    private listaDeVeiculos: T[];

    constructor(listaDeVeiculos: T[]){
        this.listaDeVeiculos = listaDeVeiculos;
    }
    
    adicionar(veiculo: T){
        this.listaDeVeiculos.push(veiculo);
    }

    remover(veiculo: T){
        this.listaDeVeiculos = this.listaDeVeiculos.filter(item => item != veiculo);
    }

    exibirListaDeVeiculos(): T[] {
        return this.listaDeVeiculos;
    }
}