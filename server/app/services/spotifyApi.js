const SpotifyWebApi = require('spotify-web-api-node')

const spotifyApi = new SpotifyWebApi({
    refreshToken: 'AQChjEs2JC04Py57kuIHO1n6csDc-CSbdfrLXY8k5-js8IOVwawkzEjtT5vFr1wompp6LMUQLTy83RNSeN_1ZAhmGZHriz7ek7Z0rxuPKtQu7LLHdNYEEuLuGP38k6Q74inIrw',
    clientId: '345d484bea0f4d30adc30c0453563e40',
    clientSecret: '2b7fb1b02d1345b9920a0cddf622cc4e'
})

module.exports = (app) => {

    return {
        get: async () => {
            return await executeSpotifyApiMethod('getMe')
        }
    }

}

function executeSpotifyApiMethod(method, params) {
    return new Promise((resolve, reject) => {
        spotifyApi.refreshAccessToken()
            .then(
                (data) => {
                    spotifyApi.setAccessToken(data.body.access_token)
                    spotifyApi[method](params)
                        .then((data) => {
                            resolve(data.body)
                        })
                },
                reject)
    })
}
