export interface modifyuserInterface{


  idUser			:number,
	userCode				:string,
	Password		:string,
	lastLogin			:string,
	passwordDate		:string, //number
	abreviatura		:string,
	tipoUsuario	:{id	:number, nombre: string};
  perfil        :{idPerfil :number, nombre :string, estado: string};
	AprobadorOT			:string,
  unidadTecnica      :{idDptoTecnico:number, nombre : string};
	estado				:string, //number
	creationDate	:string,
	creationBy			:string,
	modifyDate			:string,
	modifyBy			:string, //number
  
}
