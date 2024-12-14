import express from 'express';
import cors from 'cors';
import { config } from './config/env';
import routes from './routes';
import albumRoutes from './routes/albumRoutes';
import photoRoutes from './routes/photoRoutes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use('/api/albums', albumRoutes)
app.use('/api/photos', photoRoutes)

const PORT = config.server.port;

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;