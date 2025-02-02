const express = require("express");
const app = express();
const path = require("path");

// Servir archivos estáticos desde la carpeta 'visualizations'
app.use(express.static(path.join(__dirname, "visualizations")));

// Endpoint para ejecutar algoritmos
app.get("/run/:category/:algorithm", (req, res) => {
  const { category, algorithm } = req.params;
  try {
    const modulePath = path.join(__dirname, "algorithms", category, algorithm);
    const algorithmModule = require(modulePath);
    console.log(algorithmModule);

    // Asegúrate de que req.query.input sea un array de números
    const input = JSON.parse(req.query.input);

    const result = algorithmModule(input);
    res.json({ result });
  } catch (error) {
    res.status(500).json({
      error: `Error al ejecutar el algoritmo: ${error.message}`,
    });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
