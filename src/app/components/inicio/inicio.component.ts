import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
age: number = 25;
weight: number = 60;
height: number = 170
sex: string = "male"

constructor(private router : Router){}
ngOnInit(): void {

}

changeHeight(event: any):void{
this.height = event.target.value
}

male(){
this.sex= "male"
}

female(){
  this.sex= "female"
}

calculateBMI(){
const bMI = this.weight / Math.pow(this.height /100, 2)
console.log(bMI)
this.router.navigate(['/result', bMI.toFixed(1)])

}

}
