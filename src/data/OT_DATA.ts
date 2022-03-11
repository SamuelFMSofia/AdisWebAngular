import { OTtoListInterface } from "src/app/dashboard/interfaces/OrdenesTrabajo/OTtoListInterface";
import { UnidadTecnicaSimpleInterface } from "src/app/dashboard/interfaces/unidad_tecnica/unidadTecnicaSimpleInterface";

export const UNIDAD_TECNICA_DATA : UnidadTecnicaSimpleInterface[] =
[
  {
    id: 1,
    nombre: 'APLICACIONES Y DESARROLLO',
    sigla: 'AYD',
    secuenciaOT : 152
  },
  {
    id: 2,
    nombre: 'INVESTIGACION DE APLICACIONES',
    sigla: 'INVAPP',
    secuenciaOT : 18562
  },
  {
    id: 3,
    nombre: 'SOPORTE Y MANTENIMIENTO',
    sigla: 'SUP',
    secuenciaOT : 76312
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