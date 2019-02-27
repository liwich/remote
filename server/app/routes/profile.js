module.exports = (app) => {

    // Profile controller
    let controller = app.controllers.profile
    let c = app.helpers.controllerHandler

    app.get('/profile', c(controller.index))
    app.get('/profile/listening', c(controller.listening))
    app.get('/profile/playlists', c(controller.playlists))
    app.get('/profile/playlist/:playlistId/tracks', c(controller.playlistTracks, (req, res, next) => [req.params.playlistId]))
}
