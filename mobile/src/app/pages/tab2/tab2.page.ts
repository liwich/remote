import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  playlists: any;
  loading = true;
  playlists$: any;
  searchTerm: string;
  playlistsTem: any;
  constructor(private profileService: ProfileService) { }

  ionViewWillEnter() {
    this.loading = true;
    this.getPlaylists();
  }

  getPlaylists() {
    this.playlists$ = this.profileService.getMyPlaylists()
      .subscribe((data) => {
        this.playlists = data;
        this.playlistsTem = Object.assign(this.playlists);
        this.loading = false;
        if (this.searchTerm) {
          this.filterPlaylists();
        }
      },
        (err) => {
          this.loading = false;
        });
  }

  filterPlaylists() {
    if (this.searchTerm) {
      this.playlists = this.playlists.filter(x => x.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    } else {
      this.playlists = this.playlistsTem;
    }
  }

}
