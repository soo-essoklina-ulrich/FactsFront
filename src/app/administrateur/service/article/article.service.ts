import {Injectable} from '@angular/core';
import {CrudInterface} from "../../../interface/crud/crud-interface";
import {Article} from "../../../models/article/article";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment.development";
import {FormBuilder, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ArticleService implements CrudInterface {
  private readonly url = environment.apiUrl + '/article/';

  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) {
  }

  /**
   * create form for article
   */

  createForm() {
    return this.fb.group({
      libelle: ['', Validators.required],
      prix_unitaire: ['', Validators.required]
    });
  }

  createUpdateFrom() {
    return this.fb.group({
      libelle: [''],
      prix_unitaire: ['']
    });
  }


  /**
   * create article service
   * Fields: libelle, prix_unitaire
   * @param data
   * @return Observable<Article>
   * */
  create(data: Article): Observable<Article> {
    return this.http.post<Article>(this.url + 'save', data, {headers: {Authorization: 'Bearer ' + localStorage.getItem('bearer')}});
  }


  /**
   * delete article service
   * @param id
   * @return void
   * */

  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.url + 'delete/' + id, {headers: {Authorization: 'Bearer ' + localStorage.getItem('bearer')}});
  }

  /**
   * find article by id
   * @param id
   * @return Observable<Article>
   * */

  findById(id: number): Observable<Article> {
    return this.http.get<Article>(this.url + 'getbyid/' + id, {headers: {Authorization: 'Bearer ' + localStorage.getItem('bearer')}});
  }

  /**
   * find article fields libelle and prix_unitaire
   * find all articles
   * @return Observable<Article[]>
   * */
  findAll(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url + 'findlibelleAndPrix', {headers: {Authorization: 'Bearer ' + localStorage.getItem('bearer')}});
  }

  /**
   * update article
   * */

  update(id: number, data: Article): Observable<Article> {
    return this.http.put<Article>(this.url + 'update/' + id, data, {headers: {Authorization: 'Bearer ' + localStorage.getItem("bearer")}});
  }
}
