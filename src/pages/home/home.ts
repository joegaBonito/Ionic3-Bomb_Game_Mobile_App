import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { BombingPage } from '../bombingPage/bombingPage';
import { Bomb } from '../models/bomb';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:Bomb[] = [];
  numOfBomb:number = 0;
  constructor(public navCtrl: NavController,
  public alertCtrl: AlertController) {

  }
  ionViewDidEnter() {
    this.items = [];
    this.numOfBomb = 0;
  }

  addPlayer() {
    let bomb = new Bomb();
    bomb.id = this.items.length+1;
    bomb.explode = false;
    this.items.push(bomb);
    console.log(this.items);
  }

  subtractPlayer(){
    this.items.pop();
    console.log(this.items);
  }

  addBomb() {
    this.numOfBomb++;
  }

  subtractBomb(){
    if(this.numOfBomb <= 0) {
      let alert = this.alertCtrl.create({
          title: 'Oops!',
          subTitle: 'Quantity of Bomb(s) cannot be less than 0.',
          buttons: ['OK']
        });
      this.numOfBomb = 0;
      alert.present();
    } else {
      this.numOfBomb--;
    }
  }

  nextPage() {
  if (this.numOfBomb > this.items.length) {
    console.log(this.numOfBomb);
    console.log(this.items.length);
    let alert = this.alertCtrl.create({
        title: 'Check Again!',
        subTitle: 'Quantity of Bomb(s) cannot be greater than quantity of player(s).',
        buttons: ['OK']
      });
    alert.present();
  } else if(this.items.length > 0 && this.numOfBomb > 0){
  var i = 0;
  while(i < this.numOfBomb) {
    this.items[i].explode = true;
    i++;
  }
  this.navCtrl.push(BombingPage, {
    items:this.items
  });
 } else {
    let alert = this.alertCtrl.create({
        title: 'Check Again!',
        subTitle: 'Quantity of Player(s) or Bomb(s) cannot be 0.',
        buttons: ['OK']
      });
    alert.present();
    }
  }
}
