import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lrheader',
  templateUrl: './lrheader.component.html',
  styleUrls: ['./lrheader.component.scss']
})
export class LrheaderComponent implements OnInit {

  constructor() { }

  @Input() title : string;
  
  ngOnInit(): void {
  }

}
