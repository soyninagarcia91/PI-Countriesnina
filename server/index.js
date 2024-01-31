const axios = require("axios");
const server = require("./src/server");
const getCountries = require("./src/controllers/getCountries.js");
const { conn } = require("./src/db.js");
const PORT = 3002;

conn
  .sync({ alter: true })
  .then(async () => {
    await getCountries();
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
