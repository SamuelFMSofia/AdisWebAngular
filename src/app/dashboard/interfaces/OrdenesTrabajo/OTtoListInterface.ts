export interface OTtoListInterface  
{
    Nro :number,
    Departamento :string,
    Fecha :string,
    AsignadoA: string,
    FechaAsignacion: string,
    Estado: {
        id: number,
        name:string
    },
    Tipo: string,
    Asunto: string
};