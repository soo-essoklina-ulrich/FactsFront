export class Utilisateur {
  private _id: number;
  private _nom: string;
  private _prenom: string;
  private _numero: number;
  private _email: string;
  private _role: string;

  constructor(id: number, nom: string, prenom: string,numero:number, email: string,  role: string,) {
    this._id = id;
    this._nom = nom;
    this._prenom = prenom;
    this._email = email;
    this._numero = numero;
    this._role = role;

  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get numero(): number {
    return this._numero;
  }

  set numero(value: number) {
    this._numero = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }
}
