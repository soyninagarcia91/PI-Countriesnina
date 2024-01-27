const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const getCountries = require('./src/controllers/getCountries.js')
const PORT = 3002;

conn.sync({ force: true })
.then(async() => {
  await getCountries();
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
