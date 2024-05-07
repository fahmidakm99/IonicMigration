import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.html',
  styleUrls: ['home.scss'],
})
export class HomePage {
  username: string = "";
  password: string = "";
 
  constructor(private router: Router,
    private alertController : AlertController) { }
 
  async doLogin() {
    if (this.username === "admin" && this.password === "admin") {
      console.log("Login Success");
      // Navigate to another page, for example 'list'
      // this.router.navigate(['/list', { param1: this.username }]);
      this.router.navigate(['/list'], { queryParams: { username: this.username } });
    } else {
      console.log("Login failed...");
      const alert = await this.alertController.create({
        header: 'Login Failed...',
        message: 'Incorrect username or password. Please try again.',
        buttons: ['OK'],
      });

      await alert.present();
      // Reload the current page
      this.router.navigate(['/home']);
    }
  }
}



// import { Component } from '@angular/core';
// import { ListPage } from '../list/list';



// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.html',
//   styleUrls: ['home.scss'],
// })
// export class HomePage {
//   username: any = "";
//   password: any = "";
//   constructor(public navCtrl: NavController) {

//   }
//   doLogin(){
//     if(this.username==="admin" && this.password==="admin"){
//       console.log("Login Success");
//       this.navCtrl.push(ListPage,{ param1: this.username });
//     }
//     else{
//       console.log("Login failed...");
//       this.navCtrl.setRoot(HomePage);
//     }
   
//   }
// }
