import {Observable} from "rxjs";

export interface CrudInterface {


  /**
   * create
   * @param data
   */
  create(data: any): Observable<any>;

  /**
   * findById
   * @param id
   */
  findById(id: number ): Observable<any>;

  /**
   * findAll
   */
  findAll(): Observable<any[]>;

  /**
   *  update
   * @param id
   * @param data
   */
  update(id: number, data: any): Observable<any>;

  /**
   * delete
   * @param id
   */
  delete(id: number): Observable<any>;
}
