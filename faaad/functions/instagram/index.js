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
    sketch.background("#E7E4D8");
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
    sketch.textSize(120);
    sketch.textStyle(sketch.BOLD);
    sketch.textFont("Helvetica");
    sketch.textAlign(sketch.LEFT, sketch.TOP); // <-- Alinea arriba a la izquierda

    sketch.fill("#000000ff");
    const margen = 62;
    sketch.text(inputs.Titulo, margen + 10, margen + 26);

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
  Subtitulo: {
    type: "text",
    default: "Subtitulo",
  },
  Bajada: {
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
