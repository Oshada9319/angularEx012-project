import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  constructor(){
    this.user=new User();
    this.user.name="Oshada Maheeshan";
    this.user.title="Engineer-Technology";
    this.user.address="115/2,Hamuda Mawatha,Thumbowila,Piliyandala";
    this.user.phone=[
        "077-8436021",
        "071-6865261",
        "011-2652253"
    ];
  }
}
