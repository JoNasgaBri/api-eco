# API Eco Conecta

API para fornecer informações sobre sustentabilidade, reciclagem e meio ambiente.

## 🚀 Funcionalidades

- Dicas de reciclagem
- Informações sobre consumo de água
- Alternativas aos plásticos
- Calendário ambiental

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Entre na pasta do projeto:
```bash
cd api-eco
```

3. Instale as dependências:
```bash
npm install
```

## 🚀 Como executar

### Modo Desenvolvimento
```bash
npm run dev
```

### Modo Produção
```bash
npm start
```

O servidor estará rodando em: http://localhost:3000

## 📚 Endpoints da API

### Dicas de Reciclagem
- **GET** `/api/dicas-reciclagem`
- Retorna uma dica aleatória sobre reciclagem

### Informações sobre Água
- **GET** `/api/info-consumo-agua`
- Retorna dados sobre consumo de água e dicas de economia

### Alternativas aos Plásticos
- **GET** `/api/alternativas-plasticos`
- Retorna uma lista de alternativas sustentáveis para produtos plásticos

### Calendário Ambiental
- **GET** `/api/calendario-ambiental`
- Retorna datas importantes relacionadas ao meio ambiente

## 📦 Estrutura do Projeto

```
api-eco/
├── src/
│   ├── controller/
│   │   └── ecoController.js
│   ├── data/
│   │   └── ecoData.js
│   └── routes/
│       └── ecoRoutes.js
├── server.js
├── package.json
└── README.md
```

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express.js
- ECMAScript Modules (ESM)

## 📝 Formato das Respostas

Todas as respostas da API seguem o formato:

```json
{
  "status": "success",
  "message": "Mensagem descritiva",
  "data": {
    // Dados específicos de cada endpoint
  }
}
```

## ⚠️ Tratamento de Erros

A API inclui tratamento para:
- Rotas não encontradas (404)
- Erros internos do servidor (500)

## 🤝 Contribuindo

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC.
