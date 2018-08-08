import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dev-app';
  sum: number = 0;


  ReplaceValue(ID):void{
    this.title=ID.value;
  }

  AddValues(VAL1,VAL2):void{
   this.sum =  parseInt(VAL1.value) + parseInt(VAL2.value);
  }

  SubValues(VAL1,VAL2):void{
    this.sum =  parseInt(VAL1.value) - parseInt(VAL2.value);
   }

   MulValues(VAL1,VAL2):void{
    this.sum =  parseInt(VAL1.value) * parseInt(VAL2.value);
   }

   DivValues(VAL1,VAL2):void{
    this.sum =  parseInt(VAL1.value) / parseInt(VAL2.value);
   }
}
