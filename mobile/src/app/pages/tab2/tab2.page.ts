import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  playlists: any;
  constructor(private profileService: ProfileService) {

  }

  ionViewWillEnter() {
    this.playlists = this.profileService.getMyPlaylists();
  }

}
