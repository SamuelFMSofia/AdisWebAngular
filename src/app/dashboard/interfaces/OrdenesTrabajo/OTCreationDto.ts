export interface OTCreationDto 
{
    IdOT : number | null,
    NumOt : number | null,
    Fecha : Date | null,
    UserSolicitante : UserOtSimplifiedDto | null,
    IdDptoTecnico : number  | null,
    IdTipoOt : number | null,
    IdSubTipoOt : number | null,
    UserSoporte : UserOtSimplifiedDto | null,
    IdAplicacion: number | null,
    IdSubAplicacion: number | null,
    CorreoCC: string | null,
    Asunto: string | null,
    Descripcion: string | null,
    IdPrioridad: number | null,
    IdComplejidad: number | null,
    Estado: EstadoOtDto | null
} 

export function defaultOT() : OTCreationDto {
    return {
        IdOT : null,
        NumOt : null,
        Fecha : null,
        UserSolicitante : null,
        IdDptoTecnico : null,
        IdTipoOt : null,
        IdSubTipoOt : null,
        UserSoporte : null,
        IdAplicacion : null,
        IdSubAplicacion : null,
        CorreoCC : null,
        Asunto : null,
        Descripcion : null,
        IdComplejidad : null,
        IdPrioridad : null,
        Estado : null
    };
}

export interface UserOtSimplifiedDto 
{
    IdUser: number,
    Nombre: string,
    CI: string,
    Correo: string,
    Empresa: 
    {
        Id: number,
        Nombre: string
    }
}

export interface EstadoOtDto
{
    IdEstado: number,
    Nombre: string
}