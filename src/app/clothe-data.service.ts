import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ClothesClothesComponent } from './clothes-clothes/clothes-clothes.component';
import { Clothe } from './clothes-list/clothe';

const URL = 'https://63868e5bd9b24b1be3da84f6.mockapi.io/clothe';

@Injectable({
  providedIn: 'root'
})
export class ClotheDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable <Clothe[] >{
   return this.http.get<Clothe[]>(URL)
            .pipe(
              tap((clothes: Clothe[]) => clothes.forEach(clothe => clothe.quantity= 0))
            );
  }

  // public insertClothe(clothe : Clothe): Observable<Clothe>{
  //   return this.http.post<Clothe>(URL,clothe);

  // }

  // public deleteClothe(clothe : Clothe): Observable<Clothe>{
  //   return this.http.delete<Clothe>(URL + "/" + clothe.id)
  // }

}
