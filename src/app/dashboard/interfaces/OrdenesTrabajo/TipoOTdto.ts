
export interface TipoOTdto 
{
    IdTipoOT : number,
    IdDptoTecnico :number,
    IdUserResponsable : number,
    Nombre : string,
    RequiereAprobacion : number,
    estado : number,
    Subtipos: SubtipoOTdto[]
};


export interface SubtipoOTdto 
{
    IdSubTipoOT : number,
    IdDptoTecnico : number,
    IdTipoOT : number,
    Nombre : string,
    estado : number
}