import { VeiculoEstoque } from './../interface/VeiculoEstoque';


export class EstoqueVeiculos<T> {
    estoque: VeiculoEstoque[] = [];
    
    constructor(estoque: VeiculoEstoque[]){
        this.estoque = estoque;
    }

    adicionarEstoque(veiculoEstoque: VeiculoEstoque){
        const veiculoExistente = this.estoque.find(veiculo => veiculo.modelo == veiculoEstoque.modelo);

        if(veiculoExistente){
            veiculoExistente.quantidade += veiculoEstoque.quantidade;
        } else {
            this.estoque.push(veiculoEstoque);
        }
    }

    removerEstoque(modelo: string): void {
        const indexVeiculo = this.estoque.findIndex((item: VeiculoEstoque) => item.modelo === modelo);
        if (indexVeiculo !== -1) {
            const veiculo = this.estoque[indexVeiculo];
            veiculo.quantidade -= 1;
            if (veiculo.quantidade <= 0) {
                this.estoque.splice(indexVeiculo, 1);
            } else {
                this.estoque[indexVeiculo] = veiculo;
            }
        } else {
            console.log(`Veículo modelo ${modelo} não encontrado para remoção.`);
        }
    }

    consultarEstoque(modelo: string): number{
        const veiculoEstoque: VeiculoEstoque = this.estoque.find((item: VeiculoEstoque) => item.modelo == modelo);

        if(veiculoEstoque){
            return veiculoEstoque.quantidade
        }

        return 0;
    }

}