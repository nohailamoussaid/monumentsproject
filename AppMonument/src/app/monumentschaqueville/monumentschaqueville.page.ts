import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-monumentschaqueville',
  templateUrl: './monumentschaqueville.page.html',
  styleUrls: ['./monumentschaqueville.page.scss'],
})
export class MonumentschaquevillePage implements OnInit {
  argument:any
  monuments: Observable<any> ;

  constructor(private activatedRoute:ActivatedRoute,private fs:FirebaseService) {
    this.argument= this.activatedRoute.snapshot.paramMap.get('xyz');
  }

  ngOnInit() {
    this.fs.getApi().pipe(map(data=>{
      return data.filter(monument => monument.ville=== this.argument)
    })

      ).subscribe(data => {
      this.monuments = data;
    })
  }

}
