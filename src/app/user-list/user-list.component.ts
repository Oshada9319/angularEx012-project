import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users = [
    {name: "Oshada"},
    {name: "Kasun"},
    {name: "Malmi"}
  ]

  constructor() { }

  ngOnInit() {
  }

}