import { VeiculoEstoque } from './../interface/VeiculoEstoque';


export class EstoqueVeiculos<T> {
    estoque: VeiculoEstoque[] = [];
    
    constructor(estoque: VeiculoEstoque[]){
        this.estoque = estoque;
    }

    adicionarEstoque(veiculoEstoque: VeiculoEstoque){
        this.estoque.push(veiculoEstoque);
    }

    removerEstoque(modelo: string): void {
        const indexVeiculo = this.estoque.findIndex((item: VeiculoEstoque) => item.modelo === modelo);
        if (indexVeiculo !== -1) {
            this.estoque.splice(indexVeiculo, 1);
            console.log(`Veículo modelo ${modelo} removido do estoque.`);
        } else {
            console.log(`Veículo modelo ${modelo} não encontrado para remoção.`);
        }
    }

    consultarEstoque(modelo: string): void{
        const veiculoEstoque: VeiculoEstoque = this.estoque.find((item: VeiculoEstoque) => item.modelo == modelo);

        if(veiculoEstoque){
            console.log(`A quantidade do veículo ${modelo} no estoque é de ${veiculoEstoque.quantidade}`);
        } else {
            console.log(`Veículo modelo ${modelo} não encontrado.`);
        }
    }

}