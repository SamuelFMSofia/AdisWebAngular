
export interface modifypersonInterface{

  idPersona :number;
  correo :string;
  locacion : string;
  sucursal : string;
  estado : string;

  aprobador :
  {
  userCode :string,
  nombre :string
  };
  empresa :
  {
  id : number,
  nombre :string,
  estado :string
  };
  gerencia :
  {
  id :number,
  nombre: string,
  gerencia :string
  };
  unidadOrganizacional :
  {
  id :number,
  nombre :string,
  sigla :string
  };
  cargo :
  {
  id :number,
  nombre :string
  }


}





