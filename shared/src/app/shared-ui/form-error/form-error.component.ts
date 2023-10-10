import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-label',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.css']
})
export class FormErrorComponent implements OnInit {

  @Input() errorMessage: string = "";
  @Input() errorClass: string = "";

  constructor() { }

  ngOnInit() {
  }

}
