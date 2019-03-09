import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-authorization-callback',
  templateUrl: './authorization-callback.component.html',
  styleUrls: ['./authorization-callback.component.css']
})
export class AuthorizationCallbackComponent implements OnInit {
  code: string;
  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((d) => {
      this.code = d.code;
      this.spotifyService.getCredentials(this.code)
      .subscribe((response) => {
        console.log(response);
      },
      (err)=>{console.error(err)});
    });
  }

}
