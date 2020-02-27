import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  
  profileDetails = {
    vorname: 'Lionel',
    Nachname: 'Messi',
    Tellefonenummer: 9746734843342,
    Email: 'lionel@barca.com',
    PLZ: 'YTZ'
  }
  constructor() { }

  ngOnInit() {
  }

}
