const WorkerRoute = require('express').Router();

const { checkSchema } = require('express-validator');
const WorkerValidation = require('../middlewares/validations/Worker');

const WorkerController = require('../controllers/Worker');

WorkerRoute.get('/', WorkerController.test);

WorkerRoute.post('/subscribe', checkSchema(WorkerValidation.onSubscribe), WorkerController.subscribe);

module.exports = WorkerRoute;
