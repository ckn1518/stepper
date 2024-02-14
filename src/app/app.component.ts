import { Component, OnInit } from '@angular/core';
import { step } from './model/stepper.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'stepper';
  events:step[] = [];
  ngOnInit(){
    this.events = [
      {text: 'Complete Item', icon: 'fa fa-check', status: 'complete'},
      {text: 'Needs Attention', icon: 'fa fa-exclamation', status: 'needAttention'},
      {text: 'Currently Completing', icon: 'fa fa-pencil', status: 'inProgress'},
      {text: 'Not Complete', icon: '', status: 'notStarted' },
      {text: 'Not Complete', icon: '', status: 'notStarted' },
      {text: 'Not Complete', icon: '', status: 'notStarted' },
      {text: 'Not Complete', icon: '', status: 'notStarted' },
    ]
  }
}
