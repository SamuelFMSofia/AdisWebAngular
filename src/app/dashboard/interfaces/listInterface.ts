
export interface listInterface{

        idPersona :number;
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
      idPlanilla :number;
      codPlanilla :string;
      creationDate :string;
      creationBy :string;
      modifyDate : string;
      modifyBy :string;

}
