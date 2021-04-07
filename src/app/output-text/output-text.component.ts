import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-output-text',
  templateUrl: './output-text.component.html',
  styleUrls: ['./output-text.component.css']
})
export class OutputTextComponent implements OnInit {
  @Input() newMessages;
  constructor() { }

  ngOnInit(): void {
  }

}
