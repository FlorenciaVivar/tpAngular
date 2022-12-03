import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contact } from './clothes-contact/contact';
import { Observable, tap} from 'rxjs';

const URL = "https://638a58e34eccb986e8ab1158.mockapi.io/consulta";

@Injectable({
  providedIn: 'root'
})
export class ContactDataService {

  constructor(private http: HttpClient ) { }

  public getAllContacts(): Observable <contact[] >{
    return this.http.get<contact[]>(URL);
    }

  public insertContact(contact : contact): Observable<contact>{
      return this.http.post<contact>(URL,contact);
    }

  public deleteContact(contact : contact): Observable<contact>{
    return this.http.delete<contact>(URL + "/" + contact.id)
  }
}
