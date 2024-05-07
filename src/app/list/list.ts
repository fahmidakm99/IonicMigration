import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
 
@Component({
  selector: 'app-list',
  templateUrl: './list.html',
  styleUrls: ['./list.scss'],
})
export class ListPage implements OnInit {
  items: any[];
  username: any;
  isLoading = false;

 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {
    this.items = [
      { id: 1, name: 'Item 1', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Santa_Engracia%2C_Museo_de_Bellas_Artes_de_Sevilla.jpg/71px-Santa_Engracia%2C_Museo_de_Bellas_Artes_de_Sevilla.jpg?20210506164548' },
      { id: 2, name: 'Item 2', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/80px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg?20110818173323' },
      { id: 3, name: 'Item 3', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/%28Venice%29_Allegory_of_the_Art_of_Painting_by_Francesco_Maggiotto_-_Gallerie_Accademia.jpg/105px-%28Venice%29_Allegory_of_the_Art_of_Painting_by_Francesco_Maggiotto_-_Gallerie_Accademia.jpg?20230902064709' }
    ];
  }
 
 
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
  }
  async showDetails(item: any) {
    this.isLoading = true;
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 1500,
    });

    loading.present();

    setTimeout(() => {
      this.isLoading = false;
      // loadingEl.dismiss();
      this.router.navigate(['/details'], { state: { item: item } });
    }, 1500);

    // this.router.navigate(['/details'], { state: { item: item } });
  }
}


// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { DetailsPage } from '../details/details';

// /**
//  * Generated class for the ListPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */

// @IonicPage()
// @Component({
//   selector: 'page-list',
//   templateUrl: 'list.html',
// })
// export class ListPage {
//   items: any[];
//   username:any;
//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//     this.items = [
//       { id: 1, name: 'Item 1' },
//       { id: 2, name: 'Item 2' },
//       { id: 3, name: 'Item 3' }
//     ];
//   }

//   ionViewDidLoad() {
//     this.username=this.navParams.get('param1');
//     console.log('ionViewDidLoad ListPage');
//   }
//   showDetails(item) {
//     this.navCtrl.push(DetailsPage, { item: item });
//   }
// }
