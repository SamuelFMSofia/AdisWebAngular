export interface createpersonInterface{

  numeroDocumento : string;
  nombreCompleto :string;
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
  sigla :string
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
  };
 

}


	