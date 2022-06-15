import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  
  title:string = "Pet Shop"
  constructor() { }

  ngOnInit(): void {
  }

}
