
module.exports = () => {
    return {

        /**
         * Get profile
         * route: /profile
         */
        index: async () => {
            return {profile: true}
        }

    }
}
