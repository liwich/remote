const functions = require('firebase-functions');
const SpotifyWebApi = require('spotify-web-api-node');
const spotifyApi = new SpotifyWebApi({
    refreshToken: "AQBxznxgioul6nezAQF6yuPE7oMZn3BPXM5F2m5I_AgMEnRzNFB8eaxuYciCAFX0E0QgO-Xj5m4Tf1UzCbEKxwnNHHp9aoMarUlQCqrWxMhjx65DG-VeDno6AqIRHAEHxIPClQ",
    clientId: "345d484bea0f4d30adc30c0453563e40",
    clientSecret: "2b7fb1b02d1345b9920a0cddf622cc4e"
});

spotifyApi.refreshAccessToken()
    .then(
        (data) => spotifyApi.setAccessToken(data.body.access_token),
        (err) => console.log(err))

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.searchTrack = functions.https.onRequest((req, res) => {
    const query = req.query.text;
    spotifyApi.searchTracks(query)
        .then(function (data) {
            res.send(data.body);
        }, function (err) {
            console.error(err);
        })
});

exports.profile = functions.https.onRequest((req, res) => {
    spotifyApi.getMe()
        .then(function (data) {
            res.send(data.body);
        }, function (err) {
            res.status(err.statusCode).send(err);
        });
});

exports.profilePlaylists = functions.https.onRequest((req, res) => {
    spotifyApi.getUserPlaylists()
        .then(function (data) {
            res.send(data.body);
        }, function (err) {
            res.status(err.statusCode).send(err);
        });
});

exports.playlistTracks = functions.https.onRequest((req, res) => {
    const playlistId = req.query.text;
    spotifyApi.getPlaylistTracks(playlistId)
        .then(function (data) {
            res.send(data.body);
        }, function (err) {
            res.status(err.statusCode).send(err);
        });
});

exports.addPlaylist = functions.https.onRequest((req, res) => {
    const body = req.body;
    spotifyApi.getMe()
        .then((data) => {
            const profile = data.body;
            spotifyApi.createPlaylist(profile.id, body.name)
                .then((data) => {
                    res.send(data.body);
                })
        }, (err) => {
            res.status(err.statusCode).send(err);
        });
})

exports.addPlaylistTrack = functions.https.onRequest((req, res) => {
    const body = req.body;
    spotifyApi.addTracksToPlaylist(body.playlistId, body.tracks)
        .then((data) => {
            res.send(data.body)
        },
            (err) => {
                res.status(err.statusCode).send(err);
            })
});

exports.removePlaylistTrack = functions.https.onRequest((req, res) => {
    const body = req.body;
    spotifyApi.removeTracksFromPlaylist(body.playlistId, body.tracks)
        .then((data) => {
            res.send(data.body)
        },
            (err) => {
                res.status(err.statusCode).send(err);
            })
})
