import express from 'express';
import { newPeepValidation } from '../middleware/chitter.validation.js';
import { peepGetController, peepCreateController, saveFavePeepsController, getFavPeepsController, getFavPeepController } from '../controllers/peep.controller.js';


const router = express.Router()



router.route("/")
    .get(peepGetController);

router.route("/createpeep")
    .post(newPeepValidation, peepCreateController);

router.route("/")
    .put(saveFavePeepsController);

router.route("/savedpeeps/ids/:userID")
    .get(getFavPeepController);

router.route("/savedpeeps/:userID")
    .get(getFavPeepsController);




export { router as peepRouter };