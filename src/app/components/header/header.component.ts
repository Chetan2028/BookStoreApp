import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  header!: FormGroup;
  name:any;
  email:any;
  bag=0;
  list:any;
  
  constructor(
    private formbuilder:FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.header=this.formbuilder.group({
      dataa:[""]
    })
  }

  goToCart(){
    this.router.navigate(['cart']);
  }
  dashboard(){
    this.router.navigate(['dashboard']);
  }
}
