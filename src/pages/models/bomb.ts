export class Bomb {
  id:number;
  explode:boolean;
  imagePath:string;

  constructor() {
    this.explode = false;
    this.imagePath = "../../assets/imgs/bomb_PNG40.png";
  }
}
