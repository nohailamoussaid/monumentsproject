import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { FirebaseService } from '../services/firebase.service';
import { Observable } from 'rxjs';
import { Monumenet } from '../models/monument';


@Component({
  selector: 'app-villes',
  templateUrl: './villes.page.html',
  styleUrls: ['./villes.page.scss'],
})
export class VillesPage implements OnInit {
  villes: Observable<any> ;
  id:any;
  constructor(private fs:FirebaseService,private router:Router) { 

  }

 ngOnInit() {
    this.fs.getVilles().subscribe(data => {
      this.villes = data;
    })
  }
  
  anassfiltrer(nom:string){
    this.id='monumentschaqueville/'+nom;
    this.router.navigate([this.id]);
    console.log(nom);
  }

}
