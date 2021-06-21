import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Monumenet } from '../models/monument';
import { AngularFirestore ,AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private api: Observable<any>;
  private monuments: Observable<Monumenet[]>;
  private monumentCollection: AngularFirestoreCollection<Monumenet>;
  private header =  new HttpHeaders({'Access-Control-Allow-Origin':'*'});
 
  

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
  
  getMonuments(): Observable<Monumenet[]> {
      return this.monuments ;
  }
  getVilles(): Observable<any> {
    return this.http.get<Observable<any>>('http://localhost/monuments-master/AppMonument/src/app/jsonvilles.php');
}

  addMonuments(monument: Monumenet): Promise<DocumentReference> {
    return this.monumentCollection.add(monument);
  }

}
