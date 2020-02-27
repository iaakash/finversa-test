import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  menuConfig:any;
  constructor() { }

  ngOnInit() {
    this.menuConfig = [
      {
        icon: 'document-text-outline',
        title: 'Scann Document',
        subtitle: 'Submit Tax Documents'
      },
      {
        icon: 'document-text-outline',
        title: 'Calculate Tax Savings',
        subtitle: 'Dont miss out on savings'
      },
      {
        icon: 'document-text-outline',
        title: 'Checklist',
        subtitle: 'Keep Perfect Overview'
      },
      {
        icon: 'document-text-outline',
        title: 'My Profile',
        subtitle: 'who are you?'
      }
    ]
  }

}
