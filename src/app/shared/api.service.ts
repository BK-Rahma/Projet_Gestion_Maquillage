import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postArticle(data: any) {
    return this.http.post<any>("http://localhost:3000/articles", data)
      .pipe(map((res: any) => {
        return res;
      }));
  }

  getArticles() {
    return this.http.get<any>("http://localhost:3000/articles")
      .pipe(map((res: any) => {
        return res;
      }));
  }

  updateArticle(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/articles/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }));
  }

  deleteArticle(id: number) {
    return this.http.delete<any>("http://localhost:3000/articles/" + id)
      .pipe(map((res: any) => {
        return res;
      }));
  }


  postCategory(data: any) {
    return this.http.post<any>("http://localhost:3000/category", data)
      .pipe(map((res: any) => {
        return res;
      }));
  }

  getCategories() {
    return this.http.get<any>("http://localhost:3000/category")
      .pipe(map((res: any) => {
        return res;
      }));
  }

  updateCategory(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/category/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }));
  }

  deleteCategory(id: number) {
    return this.http.delete<any>("http://localhost:3000/category/" + id)
      .pipe(map((res: any) => {
        return res;
      }));
  }

}
