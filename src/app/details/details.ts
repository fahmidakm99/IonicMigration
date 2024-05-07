// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';

// /**
//  * Generated class for the DetailsPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */

// @IonicPage()
// @Component({
//   selector: 'page-details',
//   templateUrl: 'details.html',
// })
// export class DetailsPage {
//   item: any;
//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//     this.item = navParams.get('item');
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad DetailsPage');
//   }

// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-details',
  templateUrl: './details.html',
  styleUrls: ['./details.scss'],
})
export class DetailsPage implements OnInit {
  item: any;
 
  constructor(private route: ActivatedRoute) { }
 
  ngOnInit() {
    this.item = history.state.item;
    console.log('Item:', this.item);
  }
 
}
 