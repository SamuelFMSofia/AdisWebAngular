

export interface clientUserInterface{
  IdUsr: number;
    UserCode: string; //Login
    Password :string;
    PasswordAnt : string;
    DiasExpiracion :string;
    Abreviatura :string;
    Perfil : string;
    AprobadorOT : string;
    IdDptoTecnico : number;
    PasswordDate : Date;
    LastLogin : Date;
    Estado : number;

    /*
    ---------------------------UserCode: string;
    */

  Email: string;
  Cargo: string;
  UnidadOrg: string;
  Empresa: string;
  Gerencia: string;
  Locacion: string;
  Sucursal: string;
  NroDocAprobador:string;
}
