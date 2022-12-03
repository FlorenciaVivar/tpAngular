import { Component, OnInit } from '@angular/core';
import { ContactDataService } from '../contact-data.service';
import { contact } from './contact';

@Component({
  selector: 'app-clothes-contact',
  templateUrl: './clothes-contact.component.html',
  styleUrls: ['./clothes-contact.component.scss']
})
export class ClothesContactComponent implements OnInit {

  contact: contact[] = [] ;

  constructor(
    private contactDataService: ContactDataService) { }

  getAllContacts():void{
    this.contactDataService.getAllContacts()
    .subscribe(contact => this.contact = contact);
   }

  ngOnInit(): void {
   this.getAllContacts();
  }

  c: contact = {
    "name":'',
    "email":'',
    "contact":'',
  }

  insert(){
    this.contactDataService.insertContact(this.c).subscribe(contact =>{
     this.getAllContacts();
    });
      this.c.name ='';
      this.c.email ='';
      this.c.contact = '';
    }

}
