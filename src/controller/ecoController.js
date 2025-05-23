// 1. Importar os dados usando desestruturação e a extensão .js
import {
    dicasReciclagem,
    dadosConsumoAgua,
    alternativasPlasticos,
    calendarioAmbiental
} from '../data/ecoData.js';

// Função auxiliar para formatar a resposta JSON
const formatResponse = (res, data) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data, null, 2));
};

// Controller para a rota /dicas-reciclagem
const getDicaReciclagem = (req, res) => {
  const indiceAleatorio = Math.floor(Math.random() * dicasReciclagem.length);
  const dicaDoDia = dicasReciclagem[indiceAleatorio];
  formatResponse(res, {
    status: 'success',
    message: 'Dica de reciclagem retornada com sucesso',
    data: {
      dica: dicaDoDia
    }
  });
};

// Controller para a rota /info-consumo-agua
const getInfoAgua = (req, res) => {
  formatResponse(res, {
    status: 'success',
    message: 'Informações sobre consumo de água retornadas com sucesso',
    data: dadosConsumoAgua
  });
};

// Controller para a rota /alternativas-plasticos
const getAlternativasPlastico = (req, res) => {
  formatResponse(res, {
    status: 'success',
    message: 'Alternativas aos plásticos retornadas com sucesso',
    data: {
      alternativas: alternativasPlasticos,
      total: alternativasPlasticos.length
    }
  });
};

// Controller para a rota /calendario-ambiental
const getCalendarioAmbiental = (req, res) => {
  formatResponse(res, {
    status: 'success',
    message: 'Calendário ambiental retornado com sucesso',
    data: {
      eventos: calendarioAmbiental,
      total: calendarioAmbiental.length,
      descricao: 'Datas importantes relacionadas ao meio ambiente'
    }
  });
};

// 3. Exportar todas as funções do controller usando exportação nomeada
export {
    getDicaReciclagem,
    getInfoAgua,
    getAlternativasPlastico,
    getCalendarioAmbiental
};