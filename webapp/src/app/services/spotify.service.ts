import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private url = 'https://accounts.spotify.com';
  private redirectUrl = 'http://localhost:4200/callback';
  private scopes = 'user-read-private user-read-email playlist-modify-public user-modify-playback-state user-read-currently-playing user-read-playback-state';
  private clientId: string;
  private clientSecret: string;

  constructor(private http: HttpClient) { }

  getAuthorization(clientId, clientSecret){
    this.setClientId(clientId);
    this.setClientId(clientSecret);
    location.href = `${this.url}/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(this.redirectUrl)}&scope=${encodeURIComponent(this.scopes)}`;
  }

  setClientId(clientId){
    this.clientId = clientId;
  }

  getClientId(){
    return this.clientId;
  }

  setClientSecret(clientSecret){
    this.clientSecret = clientSecret;
  }

  getClientSecret(){
    return this.clientSecret;
  }

  getCredentials(code){
    const data = {
      clientId: this.clientId,
      clientSecret: this.clientSecret,
      code: code
    }
    return this.http.post(`http://10.16.0.106:3000/profile/token`, data);
  }
}
