const express = require('express');
const routes = require('./routes');

const PORT = 3000;
const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(routes.userRoute);
app.use(routes.categorieRoute);
app.use(routes.postRoute);

app.listen(PORT, () => console.log('ouvindo porta 3000!'));
