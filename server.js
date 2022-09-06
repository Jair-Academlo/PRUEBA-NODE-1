const { app } = require("./app");
require("colors");

const PORT = 4200;

app.listen(PORT, () => {
  console.log(`this server on port ${PORT} is executing`.cyan);
});
