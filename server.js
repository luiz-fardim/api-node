const express = require("express")
const app = express()

app.use(express.json())

// "banco de dados" falso
let usuarios = [
  { id: 1, nome: "Luiz" },
  { id: 2, nome: "Maria" }
]

// rota inicial
app.get("/", (req, res) => {
  res.send("API funcionando!")
})

// buscar todos usuários
app.get("/usuarios", (req, res) => {
  if (!usuarios) {
    return res.status(404).json({ erro: "User not found" })
  }

  res.status(200).json(usuarios)
})

// buscar usuário por id
app.get("/usuarios/:id", (req, res) => {
  const id = req.params.id
  const usuario = usuarios.find(u => u.id == id)

  res.json(usuario)
})

// criar usuário
app.post("/usuarios", (req, res) => {
  const novoUsuario = {
    id: usuarios.length + 1,
    nome: req.body.nome
  }

  usuarios.push(novoUsuario)

  res.json(novoUsuario)
})

// atualizar usuário
app.put("/usuarios/:id", (req, res) => {
  const id = req.params.id
  const usuario = usuarios.find(u => u.id == id)

  usuario.nome = req.body.nome

  res.json(usuario)
})

// deletar usuário
app.delete("/usuarios/:id", (req, res) => {
  const id = req.params.id

  usuarios = usuarios.filter(u => u.id != id)

  res.json({ mensagem: "Usuário deletado" })
})

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000")
})