const express = require("express");

const kodersUseCase = require("../usecases/koders.usecase");

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const koders = await kodersUseCase.getAll();
    response.json({
      success: true,
      data: {
        koders,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

router.post("/", async (request, response) => {
  try {
    const koderCreate = await kodersUseCase.create(request.body);
    response.json({
      success: true,
      data: {
        koder: koderCreate,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

router.get("/:id", async (request, response) => {
  try {
    // const {id} = request.params;
    const id = request.params.id;
    const koder = await kodersUseCase.getById(id);

    response.json({
      success: true,
      data: {
        koder,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const koderDeleted = await kodersUseCase.deleteById(id);

    response.json({
      success: true,
      data: {
        koder: koderDeleted,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

router.patch("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const koderUpdate = await kodersUseCase.updateById(id, request.body);

    response.json({
      success: true,
      data: {
        koder: koderUpdate,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
