const SpotifyWebApi = require('spotify-web-api-node')

const spotifyApi = new SpotifyWebApi({
    refreshToken: 'AQChjEs2JC04Py57kuIHO1n6csDc-CSbdfrLXY8k5-js8IOVwawkzEjtT5vFr1wompp6LMUQLTy83RNSeN_1ZAhmGZHriz7ek7Z0rxuPKtQu7LLHdNYEEuLuGP38k6Q74inIrw',
    clientId: '345d484bea0f4d30adc30c0453563e40',
    clientSecret: '2b7fb1b02d1345b9920a0cddf622cc4e'
})

module.exports = () => {
    return {
        getProfile: getProfile,
        getProfileCurrentSong: getProfileCurrentSong,
        profilePlaylists: profilePlaylists,
        playlistTracks: playlistTracks,
        addPlaylist: addPlaylist,
        addPlaylistTrack: addPlaylistTrack,
        removePlaylistTrack: removePlaylistTrack
    }
}

async function getProfile() {
    await refreshAccessToken()
    const data = await spotifyApi.getMe()
    return data.body || {}
}

async function getProfileCurrentSong() {
    await refreshAccessToken()
    const data = await spotifyApi.getMyCurrentPlayingTrack()
    return data.body || {}
}

async function profilePlaylists() {
    await refreshAccessToken()
    const data = await spotifyApi.getUserPlaylists()
    return data.body || []
}

async function playlistTracks(playlistId) {
    await refreshAccessToken()
    const data = await spotifyApi.getPlaylistTracks(playlistId)
    return data.body || {}
}

async function addPlaylist(name) {
    await refreshAccessToken()
    const profile = await getProfile()
    const data = await spotifyApi.createPlaylist(profile.id, name)
    return data.body || {}
}
async function addPlaylistTrack(playlistId, tracks) {
    await refreshAccessToken()
    const data = await spotifyApi.addTracksToPlaylist(playlistId, tracks)
    return data.body || {}
}

async function removePlaylistTrack(playlistId, tracks) {
    await refreshAccessToken()
    const data = await spotifyApi.removeTracksFromPlaylist(playlistId, tracks)
    return data.body || {}
}

function refreshAccessToken() {
    return spotifyApi.refreshAccessToken()
        .then(
            (data) => {
                spotifyApi.setAccessToken(data.body.access_token)
            })
}
