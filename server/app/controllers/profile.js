
module.exports = (app) => {
    const services = app.services

    return {

        /**
         * Get profile
         * route: /profile
         */
        index: async () => {
            return await services.spotifyApi.get()
        }

    }
}
