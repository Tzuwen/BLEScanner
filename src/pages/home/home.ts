import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BLE } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public timers;
  
  constructor(public navCtrl: NavController) { 

    // this.timers = [];

    // BLE.scan([], 3).subscribe(device => {
    //   //console.log(JSON.stringify(device));
    //   this.timers.push({ id: device.id, name: device.name });
    // }, error => {
    //   console.log(error);
    // });   
  }

  scanBLE() {
    this.timers = [];
    console.log("Start Scaning");
    BLE.scan([], 3).subscribe(device => {
      //console.log(JSON.stringify(device));

      this.timers.push({ id: device.id, name: device.name });

    }, error => {
      console.log(error);
    });

    setTimeout(function () {
      console.log(this.timers);
      this.timers = this.timers;
    }, 2000);
  }
}
