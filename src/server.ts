import express from 'express';
import { clientRouter } from './app.ts';
const server = express();
const PORT = process.env.PORT || 3000;


server.use(express.json());
server.use('/api/v1/', clientRouter);   
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
