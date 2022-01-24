const express = require('express');
const app = express();
app.use('/', express.static('./docs/.vuepress/dist'));
const port = 8088;

app.listen(port, () => {
  console.log(`my-docs listening at ${port}`);
});