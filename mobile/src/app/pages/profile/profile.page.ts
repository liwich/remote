import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {
  profile: any;
  profile$: any;
  currentSong$: any;
  currentSong: any;
  isPlaying: boolean;
  loading = true;

  constructor(private profileService: ProfileService) {}

  ionViewWillEnter() {
    this.loading = true;
    this.profile$ = this.profileService.getProfile()
    .subscribe((data) => {
      this.profile = data;
    },
    (err) => console.log('error'));

    this.currentSong$ = this.profileService.getCurrentSong()
    .subscribe((data) => {
      this.loading = false;
      if (!data.is_playing) {
        this.isPlaying = false;
      } else {
        this.isPlaying = true;
        this.currentSong = data;
      }
    }, (err) => {
      this.loading = false;
    });
  }
}
