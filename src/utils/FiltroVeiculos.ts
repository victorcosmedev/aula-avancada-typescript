import { Veiculo } from "../interface/Veiculo";

export class FiltroVeiculos {

    filtrarPorAno(veiculos: Veiculo[], ano: number): Veiculo[]{
        let listaFiltrada: Veiculo[] = [];
        listaFiltrada = veiculos.filter(veiculo => veiculo.ano == ano);
        return listaFiltrada;
    }

    filtrarPorMarca(veiculos: Veiculo[], marca: string): Veiculo[]{
        return veiculos.filter(veiculo => veiculo.marca == marca);
    }

    filtrarPorModelo(veiculos: Veiculo[], modelo: string): Veiculo[] {
        return veiculos.filter(veiculo => veiculo.modelo == modelo);
    }
}