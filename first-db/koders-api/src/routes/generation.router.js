const express = require("express");

const GenerationUseCase = require("../usecases/generation.usecase");

const router = express.Router();

router.post("/", async (request, response) => {
  try {
    const createdGeneration = await GenerationUseCase.create(request.body);
    response.json({
      success: true,
      data: {
        Generation: createdGeneration,
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

router.get("/", async (request, response) => {
  try {
    const Generation = await GenerationUseCase.getAll();
    response.json({
      success: true,
      data: {
        Generation,
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
    const GenerationDelete = await GenerationUseCase.deleteById(id);
    response.json({
      success: true,
      data: {
        Generation: GenerationDelete,
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
    const GenerationUpdate = await GenerationUseCase.updateById(
      id,
      request.body
    );
    response.json({
      success: true,
      data: {
        Generation: GenerationUpdate,
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
