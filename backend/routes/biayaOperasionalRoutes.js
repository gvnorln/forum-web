const express = require('express');
const router = express.Router();
const biayaOperasionalController = require('../controllers/biayaOperasionalController');
const authMiddleware = require('../middleware/authMiddleware');
const validateBiayaOperasional = require('../middleware/validateBiayaOperasional');

router.post('/biaya-operasional', authMiddleware, validateBiayaOperasional, biayaOperasionalController.createBiayaOperasional);
router.get('/biaya-operasional', authMiddleware, biayaOperasionalController.getBiayaOperasionals);
router.get('/biaya-operasional/:id', authMiddleware, biayaOperasionalController.getBiayaOperasionalById);
router.put('/biaya-operasional/:id', authMiddleware, validateBiayaOperasional, biayaOperasionalController.updateBiayaOperasional);
router.delete('/biaya-operasional/:id', authMiddleware, biayaOperasionalController.deleteBiayaOperasional);

module.exports = router;
