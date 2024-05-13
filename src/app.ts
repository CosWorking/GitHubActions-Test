// app.ts
import express from 'express';

const app = express();
const port = 3000;

app.get('/test', (req, res) => {
  const variable = req.query.variable;
  if (variable === 'GitHubActions') {
    res.status(200).send('OK');
  } else {
    res.status(400).send('Bad Request');
  }
});

const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export { app, server };
