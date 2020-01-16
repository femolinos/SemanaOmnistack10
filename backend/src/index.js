// Métodos HTTP: GET (buscar dados), POST (criar dados), PUT (atualizar dados), DELETE (deletar dados)

// Tipos de parâmetros:

// Query Params: Usados em sua maioria em métodos GET, são colocados na URL (Ex.: http://localhost:3333/?search=Diego). Neste caso, usaríamos request.query
// Route Params: Usados em métodos PUT e DELETE, fica apenas na rota (ou URL) (Ex.: request.params). Serve para identificar um recurso na alteração ou remoção.
// Body: Usado em POST e PUT, são as informações sendo enviadas no corpo da requisição. (request.body). Dados para criação ou alteração de um registro.

// MongoDB (Não-relacional)

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://femolinos:Felipe!154233@cluster0-rdfgf.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json()); //Essa config informa que todas as requisições da aplicação serão feitas desta forma.
app.use(routes); // Precisa ser colocado após a config de JSON da linha acima

app.listen(3333);