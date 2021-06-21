import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Monumenet } from '../models/monument';

import { map } from 'rxjs/operators';
import { AngularFirestore ,AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-monument',
  templateUrl: './monument.page.html',
  styleUrls: ['./monument.page.scss'],
})
export class MonumentPage implements OnInit {

  
  monuments: Observable<any> ;
  private monumentCollection: AngularFirestoreCollection<Monumenet>;
  constructor(private afs:AngularFirestore,private http:HttpClient) { 
    this.monumentCollection = this.afs.collection<Monumenet>('monuments');
    this.monuments = this.monumentCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
        const data = a.payload.doc.data();
        const  id = null  ;
        return { id, ...data };
      })
      })
  )
  }

  ngOnInit() {
    this.gety().subscribe(data => {
      this.monuments = data;
    })
  }
  gety(): Observable<any> {
    return this.http.get<Observable<any>>('http://localhost/monuments-master/AppMonument/src/app/json.php');
}
}
