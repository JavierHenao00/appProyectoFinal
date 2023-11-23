import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  nameSearch:string = "";

  constructor(private firestore:AngularFirestore) { }
  
  read_Student(){
    return this.firestore.collection("EstudiantesPendientes").snapshotChanges();
  }

}
