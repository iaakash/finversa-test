import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  menuItems = [
    {
      title: 'Home',
      url: '/dashboard/home'
    },
    {
      title: 'Checklist',
      url: '/dashboard/checklist'
    },
    {
      title: 'Profile',
      url: '/dashboard/profile'
    }
  ];

  currentPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.currentPath = event.url;
    });
   }

  ngOnInit() {
  }

}
