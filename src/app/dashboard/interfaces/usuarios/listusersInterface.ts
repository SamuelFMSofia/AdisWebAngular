export interface listusersInterface{


  idUser			:number,
	userCode				:string,
	Password		:string,
	lastLogin			:string,
	passwordDate		:string, //number
	abreviatura		:string,
	tipoUsuario	:{id	:number, nombre: string};
  perfil        :{idPerfil :number, nombre :string, estado: string};
	AprobadorOT			:string,
  dptoTecnico       :{idDptoTecnico:number, nombre : string};
	estado				:string, //number
	creationDate	:string,
	creationBy			:string,
	modifyDate			:string,
	modifyBy			:string, //number
  
  persona :{
	//primary key(IdUsr)


  // Persona relacion  1+++++++++1
  idPersona:		  	number,
  numeroDocumento:        string;//
  //Password :      string;
  nombreCompleto : string;
  correo: string;
  locacion : string;
  sucursal:         string;
  //estado:				  string;//number
  aprobador: {
    userCode: string,
    nombre : string};
    empresa : {
      id : number,
      nombre: string,
      estado : string
      };
      gerencia : {
        id : number,
        nombre :string 
        };
        unidadOrganizacional :
        {
        id : number,
        nombre : string,
        sigla: string
        };

        cargo : {
          id : number,
          nombre : string
          };
  IdPlanilla:			number,
  CodPlanilla:			string,
  




  NroDocAprobador:  string;//Aprobador
  NombreAprobador:   string;

  creationDate : string;
  creationBy : string;
  modifyDate : string;
  modifyBy : string
        }
}
