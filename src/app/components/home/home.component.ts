import { Component, OnInit } from '@angular/core';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sort: string = "text";

  constructor() { 
  }

  ngOnInit(): void {
  }

}
