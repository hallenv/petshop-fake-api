import app from './app.js';
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`🐾 API de Pets disponível em http://localhost:${PORT}/api/pets`);
});