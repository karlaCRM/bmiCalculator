import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
bim!: number;
result!: string;
interpretation!: string;

constructor(private route: ActivatedRoute){
this.bim= +route.snapshot.paramMap.get('value')!;

}


ngOnInit(): void {
  this.getResult()
}

getResult(){
  if(this.bim >= 25){
    this.result = `Overweight`;
    this.interpretation= `You are overweight, don't worry too much. Try to exercise and eat healthy.`
  }
 if(this.bim >= 18.5 && this.bim < 30){
    this.result = `Normal`;
    this.interpretation= `You have a normal weight. It's still important to exercise.`
  }
  if(this.bim >= 30 && this.bim < 35 ){
    this.result = `Obesity`;
    this.interpretation=`You have obesity. It is important that you know that it is not synonymous with being sick.`
  }
  if(this.bim >= 35 ){
    this.result = `Class II Obesity`;
    this.interpretation=`You have class II obesity. It is important that you know that it is not synonymous with being sick.`
  }
 if(this.bim <= 18.5 ){
    this.result = `Underweight`;
    this.interpretation=`You have a lower body weight than normal. It is not synonymous with being sick.`
  }



}


}
