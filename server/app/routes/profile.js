module.exports = (app) => {

    // Profile controller
    let controller = app.controllers.profile;
    let c = app.helpers.controllerHandler;

    /**
     * @swagger
     * /profile:
     *   get:
     *     tags:
     *       - profile
     *     description: Returns profile information
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Profile object
     */
    app.get('/profile', c(controller.index));

    /**
     * @swagger
     * /profile/listening:
     *   get:
     *     tags:
     *       - profile
     *     description: Returns profile track playing
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Track object
     */
    app.get('/profile/listening', c(controller.listening));

    /**
     * @swagger
     * /profile/playlists:
     *   get:
     *     tags:
     *       - profile
     *     description: Returns profile playlists
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Playlists object
     */
    app.get('/profile/playlists', c(controller.playlists));

    /**
     * @swagger
     * /profile/playlist/:playlistId/tracks:
     *   get:
     *     tags:
     *       - profile
     *     description: Returns playlist tracks
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Tracks object
     */
    app.get('/profile/playlist/:playlistId/tracks', c(controller.playlistTracks, (req, res, next) => [req.params.playlistId]));

    /**
     * @swagger
     * /profile/playlist/:playlistId/tracks:
     *   post:
     *     tags:
     *       - profile
     *       - playlists
     *     description: Adds new profile playlist
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Playlist object
     */
    app.post('/profile/playlist/:name', c(controller.addPlaylist, (req, res, next) => [req.params.name]));
};
