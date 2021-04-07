import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-and-button',
  templateUrl: './input-and-button.component.html',
  styleUrls: ['./input-and-button.component.css']
})
export class InputAndButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() receiveValue = new EventEmitter<string>();
  passValue(value){
  this.receiveValue.emit(value);
  }

}
