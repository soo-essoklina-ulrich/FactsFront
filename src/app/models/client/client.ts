import {ProformaF} from "../Proforma_F/proforma-f";

export class Client {
  private _id : number;
  private _sigle : string;
  private _name : string;
  private _lieu : string;
  private _telephone : string;
  private _proforma_f : ProformaF[];


  constructor(id: number, sigle: string, name: string, lieu: string, telephone: string, proforma_f: ProformaF[]) {
    this._id = id;
    this._sigle = sigle;
    this._name = name;
    this._lieu = lieu;
    this._telephone = telephone;
    this._proforma_f = proforma_f;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get sigle(): string {
    return this._sigle;
  }

  set sigle(value: string) {
    this._sigle = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get lieu(): string {
    return this._lieu;
  }

  set lieu(value: string) {
    this._lieu = value;
  }

  get telephone(): string {
    return this._telephone;
  }

  set telephone(value: string) {
    this._telephone = value;
  }

  get proforma_f(): ProformaF[] {
    return this._proforma_f;
  }

  set proforma_f(value: ProformaF[]) {
    this._proforma_f = value;
  }
}
