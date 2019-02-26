module.exports = () =>{
    return (promise, params) => async (req, res, next) => {
        const boundParams = params ? params(req, res, next) : []
        try {
            const result = await promise(...boundParams)
            return res.json(result || { message: 'OK' })
        } catch (error) {
            return res.status(500) && next(error)
        }
    }
}