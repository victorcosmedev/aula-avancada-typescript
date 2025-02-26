export class GerenciadorVeiculos<T> {
    listaDeVeiculos: T[];

    constructor(listaDeVeiculos: T[]){
        this.listaDeVeiculos = listaDeVeiculos;
    }
    
    adicionar(veiculo: T){
        this.listaDeVeiculos.push(veiculo);
    }

    remover(veiculo: T){
        this.listaDeVeiculos = this.listaDeVeiculos.filter(item => item != veiculo);
    }

    exibirListaDeVeiculos(): void {
        console.log(this.listaDeVeiculos);
    }
}