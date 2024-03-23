export class Article {

  private _id: number;
  private _libelle: string;
  private _prix_unitaire: number;

  constructor(id: number,libelle: string, prix_unitaire: number) {
    this._id = id;
    this._libelle = libelle;
    this._prix_unitaire = prix_unitaire;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get libelle(): string {
    return this._libelle;
  }

  set libelle(value: string) {
    this._libelle = value;
  }

  get prix_unitaire(): number {
    return this._prix_unitaire;
  }

  set prix_unitaire(value: number) {
    this._prix_unitaire = value;
  }
}
