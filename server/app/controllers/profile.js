
module.exports = (app) => {
    const services = app.services

    return {

        /**
         * Get profile
         * route: /profile
         */
        index: async () => {
            return await services.spotifyApi.getProfile()
        },
        
        /**
         * Get the song the user is playing
         * route: /profile/listening
         */
        listening: async () => {
            return await services.spotifyApi.getProfileCurrentSong()
        },

        /**
         * Get user playlists
         * route: /profile/playlists
         */
        playlists: async () => {
            return await services.spotifyApi.profilePlaylists()
        },

        /**
         * Get playlist tracks
         * route: /profile/playlist/:playlistId/tracks
         */
        playlistTracks: async (playlistId) => {
            return await services.spotifyApi.playlistTracks(playlistId)
        }

    }
}
