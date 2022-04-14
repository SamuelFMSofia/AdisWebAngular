export interface UnidadTecnicaOTdto
{
    IdDptoTecnico :number,
    Nombre :string,
    Sigla :string,
    SecuenciaOT :number,
    Prioridades : PriorityDto[],
    Complejidades : ComplexityDto[]
}

export interface PriorityDto
{
    IdPrioridad : number,
    IdDptoTecnico : number,
    Nombre : string,
    estado : number
}

export interface ComplexityDto
{
    IdComplejidad : number,
    IdDptoTecnico : number,
    Nombre : string,
    dias : number,
    estado : number
}