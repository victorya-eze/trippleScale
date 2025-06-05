import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import enrollmentsHandler from './pages/api/enrollments.js';
import getEnrollmentsHandler from './pages/api/get-enrollments.js';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());

app.post('/api/enrollments', (req, res) => enrollmentsHandler(req, res));
app.get('/api/get-enrollments', (req, res) => getEnrollmentsHandler(req, res));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
