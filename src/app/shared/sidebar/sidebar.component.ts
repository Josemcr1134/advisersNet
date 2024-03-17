import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  showNewAffiliate:boolean = false;
  showAffiliate:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  showHideNAF(){
    this.showNewAffiliate = !this.showNewAffiliate;
  }
  showHideAF(){
    this.showAffiliate = !this.showAffiliate;
  }
}
