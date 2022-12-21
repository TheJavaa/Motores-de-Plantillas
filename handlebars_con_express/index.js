const express = require('express');
const { engine } = require('express-handlebars');

const PORT = 8080;
const app = express();
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) });

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
