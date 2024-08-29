const express = require('express');
const router = express.Router();
const {
  getTipoEstudios,
  getOneTipoEstudio,
  createTipoEstudio,
  updateTipoEstudio,
  deleteTipoEstudio,
} = require('../controllers/tipoEstudioController');

// Ruta para obtener todos los tipos de estudios con paginación
router.get('/tipo-estudios', getTipoEstudios);

// Ruta para obtener un tipo de estudio por nombre
router.get('/tipo-estudios/:estudio', getOneTipoEstudio);

// Ruta para crear un nuevo tipo de estudio
router.post('/tipo-estudios', createTipoEstudio);

// Ruta para actualizar un tipo de estudio
router.put('/tipo-estudios/:estudio', updateTipoEstudio);

// Ruta para eliminar un tipo de estudio
router.delete('/tipo-estudios/:estudio', deleteTipoEstudio);

module.exports = router;