import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'happyface',
  templateUrl: './happyface.component.html',
  styleUrls: ['./happyface.component.css']
})
export class HappyfaceComponent implements OnInit {

  @Input() value = 0

  constructor() { }

  ngOnInit() {
  }

}
