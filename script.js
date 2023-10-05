function mostrarResultado() {
  // Obtener el valor del input
  const inputCategorias = document.getElementById("categorias").value;

  // Dividir el texto ingresado en categorías separadas por espacios
  const categorias = inputCategorias.split(" ");

  // Crear un objeto para realizar el seguimiento de las categorías agrupadas
  const categoriasAgrupadas = {};

  // Contar categorías y agruparlas
  let i = 0;
while (i < categorias.length) {
  // Obtener la categoría actual del array
  const categoria = categorias[i];

  // Eliminar el punto "." de la categoría para contarla correctamente
  const categoriaSinPunto = categoria.replace(".", "");

  // Comprobar si la categoría aún no está agrupada en el objeto categoriasAgrupadas
  if (!categoriasAgrupadas[categoriaSinPunto]) {
    // Si la categoría no está agrupada, inicializa su objeto en categoriasAgrupadas
    categoriasAgrupadas[categoriaSinPunto] = {
      total: 0,     // Inicializar el contador total en 0
      limpias: 0,   // Inicializar el contador de categorías limpias en 0
    };
  }

  // Incrementar el contador total de la categoría
  categoriasAgrupadas[categoriaSinPunto].total++;

  // Comprobar si la categoría contiene un punto ".", lo que la hace "limpia"
  if (categoria.includes(".")) {
    // Si la categoría tiene un punto, incrementar el contador de categorías limpias
    categoriasAgrupadas[categoriaSinPunto].limpias++;
  }

  // Incrementar el índice para pasar a la siguiente categoría en el array
  i++;
}


  // Crear una tabla HTML con los resultados
  const resultadoTable = document.getElementById("resultadoTable").getElementsByTagName('tbody')[0];
  resultadoTable.innerHTML = "";

  for (const categoria in categoriasAgrupadas) {
    const fila = resultadoTable.insertRow();
    const celdaCadena = fila.insertCell(0);
    const celdaCantidad = fila.insertCell(1);
    const celdaLimpias = fila.insertCell(2); // Nueva celda para unidades limpias
    const celdaSucias = fila.insertCell(3);  // Nueva celda para unidades sucias

    celdaCadena.textContent = categoria;
    celdaCantidad.textContent = categoriasAgrupadas[categoria].total;
    celdaLimpias.textContent = categoriasAgrupadas[categoria].limpias;
    celdaSucias.textContent = categoriasAgrupadas[categoria].total - categoriasAgrupadas[categoria].limpias;
  }


  // Mostrar la cantidad total de unidades limpias y sucias
  let unidadesLimpias = 0;
  let unidadesSucias = 0;

  for (const categoria in categoriasAgrupadas) {
    unidadesLimpias += categoriasAgrupadas[categoria].limpias;
    unidadesSucias += categoriasAgrupadas[categoria].total - categoriasAgrupadas[categoria].limpias;
  }

  document.getElementById("limpia").textContent = unidadesLimpias;
  document.getElementById("sucia").textContent = unidadesSucias;
}
