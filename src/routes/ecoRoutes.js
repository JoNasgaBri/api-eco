// 1. Importar o Express e o Router
import express from 'express';
const router = express.Router();

// 2. Importar os controllers (importa todas as exportações como um objeto) e a extensão .js
import * as ecoController from '../controller/ecoController.js';

// 3. Definir as rotas usando o router e os controllers importados
router.get('/dicas-reciclagem', ecoController.getDicaReciclagem);
router.get('/info-consumo-agua', ecoController.getInfoAgua);
router.get('/alternativas-plasticos', ecoController.getAlternativasPlastico);
router.get('/calendario-ambiental', ecoController.getCalendarioAmbiental);

// 4. Exportar o router configurado como padrão (default)
export default router;