export interface modifyuserInterface{


  idUser			:number,
	abreviatura		:string,
  estado				:string, //number
 // unidadTecnica      :{IdDptoTecnico:number, nombre : string};
  tipoUsuario	:{id	:number, nombre: string};
  perfil        :{idPerfil :number, nombre :string, estado: number};

}
