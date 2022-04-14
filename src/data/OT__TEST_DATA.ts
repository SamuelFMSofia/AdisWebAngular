import { AplicacionOTdto } from "src/app/dashboard/interfaces/OrdenesTrabajo/AplicacionOTdto";
import { OTtoListInterface } from "src/app/dashboard/interfaces/OrdenesTrabajo/OTtoListInterface";
import { TipoOTdto } from "src/app/dashboard/interfaces/OrdenesTrabajo/TipoOTdto";
import { UnidadTecnicaOTdto } from "src/app/dashboard/interfaces/OrdenesTrabajo/UnidadTecnicaOTdto";

export const UNIDAD_TECNICA_LIST_DATA : UnidadTecnicaOTdto[] =
[
  {
    IdDptoTecnico: 1,
    Nombre: 'APLICACIONES Y DESARROLLO',
    Sigla: 'AYD',
    SecuenciaOT : 152,
    Prioridades : [
      {
        IdPrioridad : 1,
        IdDptoTecnico : 1,
        Nombre : 'Urgente',
        estado : 1
      },
      {
        IdPrioridad : 2,
        IdDptoTecnico : 1,
        Nombre : 'Normal',
        estado : 1
      }
    ],
    Complejidades : [
      {
        IdComplejidad : 1,
        IdDptoTecnico : 1,
        Nombre : 'Alta',
        dias : 20,
        estado : 1
      },
      {
        IdComplejidad : 2,
        IdDptoTecnico : 1,
        Nombre : 'Media',
        dias: 10,
        estado : 1
      },
      {
        IdComplejidad : 3,
        IdDptoTecnico : 1,
        Nombre : 'Baja',
        dias: 5,
        estado : 1
      }
    ]
  },
  {
    IdDptoTecnico: 2,
    Nombre: 'INVESTIGACION DE APLICACIONES',
    Sigla: 'INVAPP',
    SecuenciaOT : 18562,
    Prioridades : [ ],
    Complejidades : [
      {
        IdComplejidad : 4,
        IdDptoTecnico : 2,
        Nombre : 'Alta',
        dias : 20,
        estado : 1
      },
      {
        IdComplejidad : 5,
        IdDptoTecnico : 2,
        Nombre : 'Media',
        dias: 10,
        estado : 1
      }
    ]
  },
  {
    IdDptoTecnico: 3,
    Nombre: 'SOPORTE Y MANTENIMIENTO',
    Sigla: 'SUP',
    SecuenciaOT : 76312,
    Prioridades : [
      {
        IdPrioridad : 3,
        IdDptoTecnico : 3,
        Nombre : 'Importante',
        estado : 1
      },
      {
        IdPrioridad : 4,
        IdDptoTecnico : 3,
        Nombre : 'Crítica',
        estado : 1
      },
      {
        IdPrioridad : 5,
        IdDptoTecnico : 3,
        Nombre : 'Normal',
        estado : 1
      },
      {
        IdPrioridad : 6,
        IdDptoTecnico : 3,
        Nombre : 'Baja',
        estado : 1
      }
    ],
    Complejidades : [
      {
        IdComplejidad : 6,
        IdDptoTecnico : 3,
        Nombre : 'Alta',
        dias : 20,
        estado : 1
      },
      {
        IdComplejidad : 7,
        IdDptoTecnico : 3,
        Nombre : 'Media',
        dias: 10,
        estado : 1
      },
      {
        IdComplejidad : 8,
        IdDptoTecnico : 3,
        Nombre : 'Baja',
        dias: 5,
        estado : 1
      }
    ]
  }
];

export const OT_STATUS_LIST_DATA: any[] =
[
  { id: 1,
    name: 'Registrado'
  },
  { id: 2,
    name: 'Trabajo en progreso'
  },
  { id: 3,
    name: 'Pendiente de Aprobación'
  },
  { id: 4,
    name: 'En espera de respuesta del cliente'
  },
  { id: 5,
    name: 'Concluido, en espera del Visto Bueno'
  }, 
  { id: 6,
    name: 'Cerrado'
  }
];


export const OT_LIST_DATA : OTtoListInterface[] = 
[
  {
    Nro: 1, 
    Departamento: 'Aplicaciones y Desarrollo',
    Fecha: '08/02/2022',
    AsignadoA: 'Nando Cardenas',
    FechaAsignacion: '18/02/2022',
    Estado: { id: 3,
              name:'Pendiente de Aprobación'
            },
    Tipo: 'Soporte',
    Asunto: 'No puedo aprobar una OC, me sale un error'
  },
  {
    Nro: 2, 
    Departamento: 'Investigacion de Aplicaciones',
    Fecha: '10/02/2022',
    AsignadoA: 'Alejandro Dumas',
    FechaAsignacion: '16/02/2022',
    Estado: 
    {         
      id: 4,
      name:'En espera de respuesta del cliente'
    },
    Tipo: 'Soporte',
    Asunto: 'No puedo aprobar una OC, me sale un error'
  },
  {
    Nro: 3, 
    Departamento: 'Soporte y Mantenimiento',
    Fecha: '12/02/2022',
    AsignadoA: 'Victor Escobar',
    FechaAsignacion: '',
    Estado: 
    {         
      id: 2,
      name:'Trabajo en progreso'
    },
    Tipo: 'Soporte',
    Asunto: 'No aaaaa aaaaaaaa aaaaaaaa puedo aprobar una OC, me sale un error'
  },
  {
    Nro: 4, 
    Departamento: 'Soporte y Mantenimiento',
    Fecha: '15/02/2022',
    AsignadoA: 'Nando Cardenas',
    FechaAsignacion: '18/02/2022',
    Estado: { id: 3,
              name:'Pendiente de Aprobación'
            },
    Tipo: 'Soporte',
    Asunto: 'No puedo aprobar una OC, me sale un error'
  },
  {
    Nro: 5, 
    Departamento: 'Investigacion de Aplicaciones',
    Fecha: '16/02/2022',
    AsignadoA: 'Alejandro Dumas',
    FechaAsignacion: '16/02/2022',
    Estado: 
    {         
      id: 4,
      name:'En espera de respuesta del cliente'
    },
    Tipo: 'Soporte',
    Asunto: 'No puedo aprobar una OC, me sale un error'
  },
  {
    Nro: 654865, 
    Departamento: 'Investigacion de Aplicaciones',
    Fecha: '24/02/2022',
    AsignadoA: 'Victor Escobar',
    FechaAsignacion: '14/02/2022',
    Estado: 
    {         
      id: 5,
      name:'Concluido, en espera del Visto Bueno'
    },
    Tipo: 'Soporte',
    Asunto: 'No aaaaa aaaaaaaa aaaaaaaa puedo aprobar una OC, me sale un error'
  },
  {
    Nro: 7, 
    Departamento: 'Investigacion de Aplicaciones',
    Fecha: '01/03/2022',
    AsignadoA: 'Pedro Picapiedras',
    FechaAsignacion: '22/02/2022',
    Estado: 
    {         
      id: 2,
      name:'Trabajo en progreso'
    },
    Tipo: 'Soporte',
    Asunto: 'No puedo aprobar una OC, me sale un error'
  },
  {
    Nro: 8, 
    Departamento: 'Aplicaciones y Desarrollo',
    Fecha: '04/03/2022',
    AsignadoA: 'Pedro Picapiedras',
    FechaAsignacion: '05/03/2022',
    Estado: 
    {         
      id: 2,
      name:'Trabajo en progreso'
    },
    Tipo: 'Soporte',
    Asunto: 'No puedo aprobar una OC, me sale un error'
  },
];


export const OT_TIPO_LIST_DATA : TipoOTdto[] = 
[
  {
    IdTipoOT: 1,
    IdDptoTecnico: 3,
    IdUserResponsable: 0,
    Nombre: 'SOPORTE',
    RequiereAprobacion: 0,
    estado: 1,
    Subtipos: []
  },
  {
    IdTipoOT: 2,
    IdDptoTecnico: 1,
    IdUserResponsable: 0,
    Nombre: 'CONFIGURACIONES',
    RequiereAprobacion: 0,
    estado: 1,
    Subtipos: [
      { 
        IdSubTipoOT: 1,
        IdDptoTecnico: 1,
        IdTipoOT: 2,
        Nombre: 'PERFILES DE ACCESO',
        estado: 1
      },
      { 
        IdSubTipoOT: 2,
        IdDptoTecnico: 1,
        IdTipoOT: 2,
        Nombre: 'CONFIGURACION DE CODIGO',
        estado: 1
      },
      { 
        IdSubTipoOT: 3,
        IdDptoTecnico: 1,
        IdTipoOT: 2,
        Nombre: 'CONFIGURACION DE ALMACENES',
        estado: 1
      }
    ]
  },
  {
    IdTipoOT: 3,
    IdDptoTecnico: 2,
    IdUserResponsable: 0,
    Nombre: 'HELP DESK',
    RequiereAprobacion: 1,
    estado: 1,
    Subtipos: [
      { 
        IdSubTipoOT: 4,
        IdDptoTecnico: 2,
        IdTipoOT: 3,
        Nombre: 'CONFIGURACION 1',
        estado: 1
      },
      { 
        IdSubTipoOT: 5,
        IdDptoTecnico: 2,
        IdTipoOT: 3,
        Nombre: 'CONFIGURACIONES EXTRAS',
        estado: 1
      }
    ]
  },
  {
    IdTipoOT: 4,
    IdDptoTecnico: 2,
    IdUserResponsable: 0,
    Nombre: 'ORACLE EBS',
    RequiereAprobacion: 1,
    estado: 1,
    Subtipos: [
      { 
        IdSubTipoOT: 6,
        IdDptoTecnico: 2,
        IdTipoOT: 4,
        Nombre: 'MODULO INV',
        estado: 1
      },
      { 
        IdSubTipoOT: 7,
        IdDptoTecnico: 2,
        IdTipoOT: 4,
        Nombre: 'MODULO AR',
        estado: 1
      },
      { 
        IdSubTipoOT: 8,
        IdDptoTecnico: 2,
        IdTipoOT: 4,
        Nombre: 'MODULO AP',
        estado: 2
      },
      { 
        IdSubTipoOT: 9,
        IdDptoTecnico: 2,
        IdTipoOT: 4,
        Nombre: 'GESTION DE USUARIOS',
        estado: 1
      }
    ]
  },
  {
    IdTipoOT: 5,
    IdDptoTecnico: 1,
    IdUserResponsable: 0,
    Nombre: 'EXAMPLE 2222',
    RequiereAprobacion: 1,
    estado: 1,
    Subtipos: []
  },
  {
    IdTipoOT: 6,
    IdDptoTecnico: 3,
    IdUserResponsable: 0,
    Nombre: 'EXAMPLE 666',
    RequiereAprobacion: 0,
    estado: 1,
    Subtipos: [
      { 
        IdSubTipoOT: 10,
        IdDptoTecnico: 3,
        IdTipoOT: 6,
        Nombre: 'MANTENIMIENTO',
        estado: 1
      },
      { 
        IdSubTipoOT: 11,
        IdDptoTecnico: 3,
        IdTipoOT: 6,
        Nombre: 'EXAMPLE AAAA',
        estado: 1
      }
    ]
  },
  {
    IdTipoOT: 7,
    IdDptoTecnico: 3,
    IdUserResponsable: 0,
    Nombre: 'MTECH',
    RequiereAprobacion: 0,
    estado: 1,
    Subtipos: []
  },
  {
    IdTipoOT: 8,
    IdDptoTecnico: 2,
    IdUserResponsable: 0,
    Nombre: 'MARCAJE Y ACCESOS',
    RequiereAprobacion: 1,
    estado: 1,
    Subtipos: []
  }
]


export const OT_APLICACION_LIST_DATA : AplicacionOTdto[] =
[
  {
    IdAplicacion : 1,
    IdDptoTecnico : 1,
    Nombre : 'Aplicacion 1',
    Estado : 1,
    SubApliciones : [
      {
        IdSubAplicacion : 1,
        IdDptoTecnico : 1,
        IdAplicacion : 1,
        Nombre : 'SubAplicacion 1',
        Estado : 1
      },
      {
        IdSubAplicacion : 2,
        IdDptoTecnico : 1,
        IdAplicacion : 1,
        Nombre : 'SubAplicacion 2',
        Estado : 1
      },
      {
        IdSubAplicacion : 3,
        IdDptoTecnico : 1,
        IdAplicacion : 1,
        Nombre : 'SubAplicacion 3',
        Estado : 2
      }
    ]
  },
  {
    IdAplicacion : 2,
    IdDptoTecnico : 2,
    Nombre : 'Aplicacion 2',
    Estado : 1,
    SubApliciones : [
      {
        IdSubAplicacion : 4,
        IdDptoTecnico : 2,
        IdAplicacion : 2,
        Nombre : 'SubAplicacion 4',
        Estado : 1
      },
      {
        IdSubAplicacion : 5,
        IdDptoTecnico : 2,
        IdAplicacion : 2,
        Nombre : 'SubAplicacion 5',
        Estado : 1
      },
      {
        IdSubAplicacion : 6,
        IdDptoTecnico : 2,
        IdAplicacion : 2,
        Nombre : 'SubAplicacion 6',
        Estado : 1
      }
    ]
  },
  {
    IdAplicacion : 3,
    IdDptoTecnico : 2,
    Nombre : 'Aplicacion 3',
    Estado : 1,
    SubApliciones : []
  },
  {
    IdAplicacion : 4,
    IdDptoTecnico : 3,
    Nombre : 'Aplicacion 4',
    Estado : 1,
    SubApliciones : []
  }
]