const express = require('express');

const WorkerRoutes = require('./routes/Worker');

const app = express();

app.use(express.json({ strict: true }));

app.use('/worker', WorkerRoutes);

app.listen(3001, () => console.log('Running on port 3001'));
