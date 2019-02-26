import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  profile: any;
  profile$: any;
  currentSong$: any;
  currentSong: any;
  isPlaying: boolean;
  constructor(private profileService: ProfileService) {}

  ionViewWillEnter() {
    this.profile$ = this.profileService.getProfile()
    .subscribe((data) => {
      this.profile = data;
    },
    (err) => console.log('error'));

    this.currentSong$ = this.profileService.getCurrentSong()
    .subscribe((data) => {
      if (!data.is_playing) {
        this.isPlaying = false;
      } else {
        this.isPlaying = true;
        this.currentSong = data;
      }
    });
  }
}
