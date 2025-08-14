export const handler = ({ inputs, mechanic, sketch }) => {
  const { ancho, altura, text, color1, color2, radiusPercentage } = inputs;

  const center = [ancho / 2, altura / 2];
  const radius = ((altura / 2) * radiusPercentage) / 100;
  const angle = Math.random() * Math.PI * 2;

  // tipografias

  let WorkFaAADA;
  let WorkFaAAAB;

  sketch.preload = () => {};

  sketch.setup = () => {
    sketch.createCanvas(ancho, altura);
  };

  sketch.draw = () => {
    sketch.background("#dbdbdbff");
    sketch.noStroke();
    sketch.fill("#000000ff");

    if (inputs.mostrarGrilla) {
      sketch.stroke(200);
      sketch.strokeWeight(2);

      const margen = 62;
      const cols = 20;
      const rows = 60;
      const gridWidth = inputs.ancho - margen * 2;
      const gridHeight = inputs.altura - margen * 2;

      // Líneas verticales (cruzan todo el canvas)
      for (let i = 0; i <= cols; i++) {
        let x = margen + (gridWidth / cols) * i;
        sketch.line(x, 0, x, inputs.altura); // Cambiado para que crucen todo
      }
      // Líneas horizontales (cruzan todo el canvas)
      for (let j = 0; j <= rows; j++) {
        let y = margen + (gridHeight / rows) * j;
        sketch.line(0, y, inputs.ancho, y); // Cambiado para que crucen todo
      }

      // Resalta el margen de la grilla
      sketch.stroke("#393939ff"); // Color rojo para resaltar
      sketch.strokeWeight(4);
      sketch.noFill();
      sketch.rect(margen, margen, gridWidth, gridHeight);

      sketch.noStroke();
    }

    // Configura el tamaño y estilo del texto
    sketch.textSize(210);
    sketch.textStyle(sketch.BOLD);
    sketch.textFont("Helvetica");
    sketch.textAlign(sketch.LEFT, sketch.TOP); // <-- Alinea arriba a la izquierda

    sketch.fill("#000000ff");
    const margen = 62;
    sketch.text(inputs.Titulo, margen + 10, margen + 26);

    // Dibuja el texto "Escuela" rotado 90 grados en el margen derecho superior de la grilla
    sketch.push();
    sketch.textSize(48);
    sketch.textStyle(sketch.NORMAL);
    sketch.textFont("Helvetica");
    sketch.textAlign(sketch.LEFT, sketch.TOP);
    sketch.fill("#000000ff");

    // Calcula la posición en el margen derecho superior
    const gridWidth = inputs.ancho - margen * 2;
    const x = margen + gridWidth; // margen derecho de la grilla
    const y = margen + 35; // margen superior de la grilla

    sketch.translate(x, y);
    sketch.rotate(Math.PI / 2); // 90 grados en radianes
    sketch.text(inputs.Escuela, 0, 0);
    sketch.pop();

    // Dibuja el texto "InfoExtra" debajo de la grilla, alineado a la izquierda
    sketch.textSize(40); // Ajusta el tamaño si lo necesitas
    sketch.textStyle(sketch.NORMAL);
    sketch.textFont("Helvetica");
    sketch.textAlign(sketch.LEFT, sketch.TOP);
    sketch.fill("#000000ff");

    // Posición: debajo del margen inferior izquierdo de la grilla
    const gridHeight = inputs.altura - margen * 2;
    const infoX = margen;
    const infoY = margen + gridHeight - 120; // 64 es el tamaño del texto

    sketch.text(inputs.InfoExtra, infoX, infoY);

    mechanic.done();
  };
};

export const inputs = {
  ancho: {
    type: "number",
    default: 1080,
  },
  altura: {
    type: "number",
    default: 1350,
  },
  Titulo: {
    type: "text",
    default: "Título",
  },
  Escuela: {
    type: "text",
    default: "Escuela de Diseño",
  },
  InfoExtra: {
    type: "text",
    default: "Bajada",
  },
  mostrarGrilla: {
    type: "boolean",
    default: false,
    label: "Mostrar grilla",
  },
};

export const presets = {
  default: {
    width: 1080,
    height: 1350,
  },
};

export const settings = {
  engine: require("@mechanic-design/engine-p5"),
};
