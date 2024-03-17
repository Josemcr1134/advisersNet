import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family-plan',
  templateUrl: './family-plan.component.html',
  styleUrls: ['./family-plan.component.css']
})
export class FamilyPlanComponent implements OnInit {

  public beneficiares:number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  addBeneficiaries(){
    this.beneficiares= this.beneficiares + 1;
   
    if(this.beneficiares > 6){
      alert('Los beneficiarios han llegado a su limite')
    } else {
      console.log(this.beneficiares)
    }
  }

}
