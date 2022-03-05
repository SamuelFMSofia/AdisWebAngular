export interface aplicacionesInterface{
  idAplica:number,
  nombre: string,
  idDptoTecnico: number,
  TieneSubAplica: number,
  estado: number,
  SubAplicaciones: [

    {
      idSubAplica:number,
      IdDptoTecnico: number,
      idAplica: number,
      nombre: string,
      estado:number
    }]
}
