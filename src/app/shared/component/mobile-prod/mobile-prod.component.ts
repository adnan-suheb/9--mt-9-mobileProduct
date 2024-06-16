import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../interface/prod.interface';
import { products } from '../../const/prod';

@Component({
  selector: 'app-mobile-prod',
  templateUrl: './mobile-prod.component.html',
  styleUrls: ['./mobile-prod.component.scss']
})
export class MobileProdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  mobileProdData:Array<Iproduct>=products



}
