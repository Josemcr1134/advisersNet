import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {

  public ID:string = '';
  public statisticType!:number;
  constructor( private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id,  typeStatistic}) => {
      this.ID = id
      this.statisticType = typeStatistic
    });
    console.log(this.ID, this.statisticType);
  }
}
