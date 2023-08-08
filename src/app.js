const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./utils/database');
const routes = require('./routes/routes');
const initModels = require('./models/initModels');

initModels();

//db.sync({alter:true});

dotenv.config();

const app = express();

const PORT = process.env.PORT  || 8000;

app.use(cors());
app.use(express.json());

// Routes
app.use(routes);



app.get('/', (req, res) => {
   res.send('Servidor funcionando');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto${PORT}`)
});