import { Component, OnInit } from '@angular/core';
import { checklist } from '../../../../config';
@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss'],
})
export class ChecklistPage implements OnInit {

  config = checklist;
  constructor() { }

  ngOnInit() {
  }

}
