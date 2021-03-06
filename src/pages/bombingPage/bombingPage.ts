import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {Bomb} from '../models/bomb';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'bombing-page',
  templateUrl: 'bombing-page.html'
})
export class BombingPage {
  items:Bomb[] = [];
  makeItHidden:boolean = false;
  constructor(public navCtrl: NavController,
    public navParams:NavParams,
    public alertCtrl: AlertController) {
    this.items = this.navParams.get('items');
    console.log(this.items);
  }

  ionViewWillEnter() {
    let domSize = document.getElementsByClassName('imagebomb').length;
    for(let i = 0; i < domSize; i++) {
      let img = <HTMLElement>document.getElementsByClassName('imagebomb')[i];
      img.setAttribute("style", "position:absolute;");
      let xy = this.getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    }
  }

 getRandomPosition(element) {
var x = document.body.offsetHeight-element.clientHeight-80;
var y = document.body.offsetWidth-element.clientWidth;
var randomX = Math.floor(Math.random()*x);
var randomY = Math.floor(Math.random()*y);
return [randomX,randomY];
}


  onClickBomb($event) {
    console.log($event.target.id);
    if(this.items[$event.target.id].explode === true) {
      console.log("This is the bomb!");
      let alert = this.alertCtrl.create({
      title: 'You Lose!',
      subTitle: 'Thank you for the coffee :)',
      buttons: ['OK']
    });
    alert.present();
    }
    document.getElementById($event.target.id).style.display="none";

     if(this.items.length < 1) {

     }
  }
}
