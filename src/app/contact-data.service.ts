import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './clothes-contact/contact';
import { Observable, tap} from 'rxjs';

const URL = "https://638a58e34eccb986e8ab1158.mockapi.io/consulta";

@Injectable({
  providedIn: 'root'
})
export class ContactDataService {

  constructor(private http: HttpClient ) { }

  public getAllContacts(): Observable <Contact[] >{
    return this.http.get<Contact[]>(URL);
    }

  public insertContact(contact : Contact): Observable<Contact>{
      return this.http.post<Contact>(URL,contact);
    }

  public deleteContact(contact : Contact): Observable<Contact>{
    return this.http.delete<Contact>(URL + "/" + contact.id)
  }
}
