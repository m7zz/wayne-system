const express = require("express");
const router = express.Router();

const controller = require("../controllers/recursos.controller");

router.get("/", controller.getRecursos);
router.post("/", controller.addRecurso);
router.delete("/:id", controller.deleteRecurso);
router.put("/:id", controller.updateRecurso);

module.exports = router;