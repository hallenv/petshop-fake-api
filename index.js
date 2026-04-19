import express from 'express';
const app = express();


// --- SERVER START ---
const PORTA = 3000;

app.listen(PORTA, () => {
	console.log(` API PETSHOP ONLINE NA PORTA ${PORTA}`);
});

// BANCO DE DADOS DE BRINCADEIRA
let pets = [{ id: 1, nome: "Paçoca", especie: "Cão", raca: "Labrador", idade: 3 },
{ id: 2, nome: "Frajola", especie: "Gato", raca: "SRD", idade: 5 }
];

// middleware para o express enteder JSON no corpo das req
app.use(express.json()); // para ler req.body

// READ (listar tds)
app.get('/pets', (req, res) => { res.status(200).json(pets); });

// READ (listar especifico)
app.get('/pets/:id', (req, res) => {
	const { id } = req.params; // id da URL
	const pet = pets.find(p => p.id === Number(id));

	if (!pet) {
		return res.status(404).json({ CODE: "NOT FOUND" });
	}

	res.status(200).json(pet);
});

// POST (criar pet)
app.post('/pets', (req, res) => {
	const { nome, especie, raca, idade } = req.body;
	const novoPet = { id: pets.length + 1, nome, especie, raca, idade };

	pets.push(novoPet);
	res.status(201).json(novoPet);
});

// UPDATE (substituir totalmente)
app.put('/pets/:id', (req, res) => {
	const { id } = req.params;
	const index = pets.findIndex(p => p.id === Number(id));

	if (index === -1) return res.status(404).json({ CODE: "NOT FOUND" });

	pets[index] = { id: Number(id), ...req.body };
	res.json(pets[index]);
});

// PATCH (substituir parte)
app.patch('/pets/:id', (req, res) => {
	const { id } = req.params;
	const pet = pets.find(p => p.id === Number(id));

	if (!pet) return res.status(404).json({ CODE: "NOT FOUND" });

	if (req.body.nome) pet.nome = req.body.nome;
	if (req.body.especie) pet.especie = req.body.especie;
	if (req.body.raca) pet.raca = req.body.raca;
	if (req.body.idade) pet.idade = req.body.idade;

	res.json(pet);
});

// DELETE (remover)
app.delete('pets/:id', (req, res) => {
	const { id } = req.params;
	const initialSize = pets.length;

	pets = pets.filter(p => p.id !== Number(id));

	if (pets.length === initialSize) {
		return res.status(404).json({ CODE: "NOT FOUND" });
	}

	res.status(204).send(); // sucesso, mas sem conteudo no body
});

// middleware para notificar rota nao encontrada
app.use((req, res, next) => {
	res.status(404).json({ CODE: "ROUTE NOT FOUND" });
});

// middleware para log
app.use((req, res, next) => {
	console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
	next(); // chama prox middleware
});