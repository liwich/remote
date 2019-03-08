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
  isPaused: boolean;

  constructor(private profileService: ProfileService) {}

  ionViewWillEnter() {
    this.loading = true;
    this.getProfile();
    this.getCurrentSong();
  }

  getProfile() {
    this.profile$ = this.profileService.getProfile()
    .subscribe((data) => {
      return this.profile = data;
    },
    (err) => {
      console.error(err);
    });
  }

  getCurrentSong() {
    this.currentSong$ = this.profileService.getCurrentSong()
    .subscribe((data) => {
      this.loading = false;
      if (!data) {
        this.isPlaying = true;
      } else {
        if (!data.is_playing) {
          this.isPaused = true;
        } else {
          this.isPlaying = true;
        }
        return this.currentSong = data;
      }
    }, (err) => {
      this.loading = false;
      console.error(err);
    });
  }

  skipBack() {

  }

  playPause() {

  }

  skipForward() {

  }
}
