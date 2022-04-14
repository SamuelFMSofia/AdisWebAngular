export interface AplicacionOTdto 
{
    IdAplicacion : number,
    IdDptoTecnico : number,
    Nombre : string,
    Estado : number,
    SubApliciones : SubAplicacionOTdto[]
}

export interface SubAplicacionOTdto
{
    IdSubAplicacion : number,
    IdDptoTecnico : number,
    IdAplicacion : number,
    Nombre : string,
    Estado : number
}