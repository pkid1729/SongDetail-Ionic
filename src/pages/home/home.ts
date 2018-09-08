import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Song1Page } from '../song1/song1';
import { Song2Page } from '../song2/song2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  openSong1Page()
  {
    console.log("Navigated to Song 1");
    this.navCtrl.push(Song1Page);

  }
  openSong2Page()
  {
    console.log("Navigated to Song 1");
    this.navCtrl.push(Song2Page);

  }


}
