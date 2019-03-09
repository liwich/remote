import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  url: string;
  clientId: string;
  clientSecret: string;
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.url = window.location.href;
    this.clientId = '345d484bea0f4d30adc30c0453563e40';
    this.clientSecret = '2b7fb1b02d1345b9920a0cddf622cc4e';
  }

  requestAuthorization(){
    this.spotifyService.getAuthorization(this.clientId, this.clientSecret);
  }

}
