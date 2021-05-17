import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/_core/services/data.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends DataService {
  constructor(public http: HttpClient) {
    super(`${environment.apiUrl}/products`, http);
  }

  getAllBySubCategorieId(id: any, headersObject = {}): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}/productsBySubCategoryId/${id}`,
      { headers: headersObject }
    );
  }
}
