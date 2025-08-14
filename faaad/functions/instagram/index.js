export const handler = ({ inputs, mechanic, sketch }) => {
  const { ancho, altura, text, color1, color2, radiusPercentage } = inputs;

  const center = [ancho / 2, altura / 2];
  const radius = ((altura / 2) * radiusPercentage) / 100;
  const angle = Math.random() * Math.PI * 2;

  sketch.setup = () => {
    sketch.createCanvas(ancho, altura);
  };

  sketch.draw = () => {
    sketch.background("#F4F4F4");
    sketch.noStroke();

    sketch.translate(...center);
    sketch.rotate(angle);

    sketch.fill(color1);
    sketch.arc(0, 0, 2 * radius, 2 * radius, -sketch.PI, 0);
    sketch.fill(color2);
    sketch.arc(0, 0, 2 * radius, 2 * radius, 0, sketch.PI);

    sketch.rotate(-angle);
    sketch.fill("#000000");
    sketch.textAlign(sketch.CENTER, sketch.BOTTOM);
    sketch.textStyle(sketch.BOLD);
    sketch.textSize(altura / 10);
    sketch.text(text, 0, altura / 2 - altura / 20);

    mechanic.done();
  };
};

export const inputs = {
    ancho: {
    type: "number",
    default: 1350
  },
  altura: {
    type: "number",
    default: 1080
  },
  text: {
    type: "text",
    default: "mechanic"
  },
  color1: {
    type: "color",
    model: "hex",
    default: "#E94225"
  },
  color2: {
    type: "color",
    model: "hex",
    default: "#002EBB"
  },
  radiusPercentage: {
    type: "number",
    default: 40,
    min: 0,
    max: 100,
    slider: true
  }
};

export const presets = {
  post: {
    altura: 1080,
    ancho: 1350
  },
  story: {
    altura: 1080,
    ancho: 1200
  }
};

export const settings = {
  engine: require("@mechanic-design/engine-p5")
};
