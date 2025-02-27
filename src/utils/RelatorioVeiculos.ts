import { Veiculo } from "../interface/Veiculo";

export class RelatorioVeiculos{ 
    gerarRelatorio(veiculos: Veiculo[]): string{
        let relatorio = "";
        veiculos.forEach(veiculo => {
            relatorio += `${veiculo.marca} ${veiculo.modelo} - ano ${veiculo.ano}\n`
        });

        return relatorio;
    }
}