import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { Banner } from '../modal/banner.modal';
import { Teachers } from '../modal/teacher.modal';
import { environment } from 'src/environments/environment';
import { AngularFireUploadTask } from '@angular/fire/compat/storage/task';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class AdminService {
  baseUri: string = environment.baseUrl;
  editDataBehaviour = new BehaviorSubject(null)
  public filesArray: any = [];
  filterVallue = new BehaviorSubject('null')
  percentage: Observable<any>;
  snapshot: Observable<any>;
  downloadURL: string;
  task: AngularFireUploadTask;
  productDetailsBehaviour = new Subject()
  productData = new BehaviorSubject(null)
  producDataForHome = new BehaviorSubject(null)

  constructor(
    private http: HttpClient,
    private storage: AngularFireStorage,
    private db: AngularFirestore
  ) {}
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  getTeacherById(id: string): Observable<any> {
    const url = `${this.baseUri}/teacher/get-teacher-by-id/${id}`;
    return this.http.get<Teachers>(url).pipe(catchError(this.errorMgmt));
  }

  addTeacher(data: any): Observable<any> {
    const url = `${this.baseUri}/teacher/add-teacher`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  getTeacher() {
  return   this.http.get(`${this.baseUri}/teacher/get-teacher`)
  }


  deleteTeacher(id: any): Observable<any> {
    const header = new HttpHeaders();
    let url = `${this.baseUri}/teacher/deleteteacher/${id}`;
    return this.http
      .delete(url, { headers: header })
      .pipe(catchError(this.errorMgmt));
  }

  updateTeacher(id:any, data:any): Observable<any> {
    let url = `${this.baseUri}/teacher/updateteacher/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }



  addBanner(data: any): Observable<any> {
    const url = `${this.baseUri}/banner/add-banner`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  getBanner() {
  return   this.http.get(`${this.baseUri}/banner/get-banner`)
  }


  deleteBanner(id: any): Observable<any> {
    const header = new HttpHeaders();
    let url = `${this.baseUri}/banner/deletebanner/${id}`;
    return this.http
      .delete(url, { headers: header })
      .pipe(catchError(this.errorMgmt));
  }

  


 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


  addResult(data: any): Observable<any> {
    const url = `${this.baseUri}/result/add-result`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  getResult() {
  return   this.http.get(`${this.baseUri}/result/get-result`)
  }


  deleteResult(id: any): Observable<any> {
    const header = new HttpHeaders();
    let url = `${this.baseUri}/result/deleteResult/${id}`;
    return this.http
      .delete(url, { headers: header })
      .pipe(catchError(this.errorMgmt));
  }

  addGallery(data: any): Observable<any> {
    const url = `${this.baseUri}/gallery/add-gallery`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  getGallery() {
  return this.http.get(`${this.baseUri}/gallery/get-gallery`)
  }


  deleteGallery(id: any): Observable<any> {
    const header = new HttpHeaders();
    let url = `${this.baseUri}/gallery/deletegallery/${id}`;
    return this.http
      .delete(url, { headers: header })
      .pipe(catchError(this.errorMgmt));
  }


}
