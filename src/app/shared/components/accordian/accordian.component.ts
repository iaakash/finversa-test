import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss'],
})
export class AccordianComponent implements OnInit {
  
  @Input() config:any;
  constructor() { }

  ngOnInit() {
  }

  toggleSelection(idx) { 
    this.config.items = this.config.items.map(item => {
      return {
        ...item,
        open: false,
      };
    });
    this.config.items[idx].open = !this.config.items[idx].open;
  }

  toggleItem(i,j) {

  }

}
