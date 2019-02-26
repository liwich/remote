module.exports = (app) => {

    // Profile controller
    let controller = app.controllers.profile
    let c = app.helpers.controllerHandler

    app.get('/profile', c(controller.index))
}
