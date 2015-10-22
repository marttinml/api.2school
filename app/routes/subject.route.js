module.exports = function (app) {
    var Subject = require('../controllers/subject.controller');

    //IFU
    app.route('/subject.status.insert').post(Subject.statusInsert);
    app.route('/subject.status.find').post(Subject.statusFind);
    app.route('/subject.status.update').post(Subject.statusUpdate);

    app.route('/subject.insert').post(Subject.insert);
    app.route('/subject.find').post(Subject.find);
    app.route('/subject.update').post(Subject.update);
};