//  Importar o Express
import express from 'express';

//  Importar nossas rotas definidas (importa o export default), não esquecer a extensão .js
import ecoRoutes from './src/routes/ecoRoutes.js';

//  Criar a instância do app Express
const app = express();

//  Middleware para processar JSON
app.use(express.json());

//  Definir a porta
const PORT = process.env.PORT || 3000;

//  Função auxiliar para formatar respostas JSON
const formatResponse = (res, data) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data, null, 2));
};

//  Usar as rotas importadas
app.use('/api', ecoRoutes);

//  Middleware para tratamento de rotas não encontradas (404)
app.use((req, res) => {
  formatResponse(res, {
    status: 'error',
    message: 'Rota não encontrada',
    path: req.originalUrl
  });
  res.status(404);
});

//  Middleware para tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  formatResponse(res, {
    status: 'error',
    message: 'Erro interno do servidor'
  });
  res.status(500);
});

//  Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor Eco Conecta (ESM Refatorado) rodando na porta ${PORT}`);
  console.log(`Acesse em: http://localhost:${PORT}`);
});