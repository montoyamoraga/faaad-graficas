export const handler = ({ inputs, mechanic, sketch }) => {
  const { ancho, altura, text, color1, color2, radiusPercentage } = inputs;

  const center = [ancho / 2, altura / 2];
  const radius = ((altura / 2) * radiusPercentage) / 100;
  const angle = Math.random() * Math.PI * 2;

  // tipografias

  let WorkFaAADA;
  let WorkFaAAAB;

  sketch.preload = () => {
  // WorkFaAADA = sketch.loadFont("/assets/fonts/WorkFaAAD-A.otf");
  };

  sketch.setup = () => {
    sketch.createCanvas(ancho, altura);
  };

  sketch.draw = () => {
    sketch.background("#E7E4D8");
    sketch.noStroke();
    sketch.fill("#000000ff");

    if (inputs.mostrarGrilla) {
      sketch.stroke(200);
      sketch.strokeWeight(1);

      const margen = 62;
      const cols = 20;
      const rows = 20;
      const gridWidth = inputs.ancho - margen * 2;
      const gridHeight = inputs.altura - margen * 2;

      // Líneas verticales
      for (let i = 0; i <= cols; i++) {
        let x = margen + (gridWidth / cols) * i;
        sketch.line(x, margen, x, inputs.altura - margen);
      }
      // Líneas horizontales
      for (let j = 0; j <= rows; j++) {
        let y = margen + (gridHeight / rows) * j;
        sketch.line(margen, y, inputs.ancho - margen, y);
      }
      sketch.noStroke();
    }

    // Configura el tamaño y estilo del texto
    sketch.textSize(120);
    sketch.textStyle(sketch.BOLD);
    sketch.textFont("Courier New");

    sketch.text(inputs.Titulo, 20, 20 + sketch.textAscent());

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
