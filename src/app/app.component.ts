import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrayWithMessage = [];
  title = 'message-new';
  addSms(value){
    this.arrayWithMessage.push(value);
  }
}
