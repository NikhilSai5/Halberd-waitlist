function applySunsetFilter(image) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;

  ctx.drawImage(image, 0, 0);

  const imageData = ctx.getImageData(
    0,
    0,
    canvas.width,
    canvas.height
  );

  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    let r = data[i];
    let g = data[i + 1];
    let b = data[i + 2];

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    // Ignore grayscale pixels
    if (delta < 10) continue;

    // Calculate hue
    let hue = 0;

    if (max === r) {
      hue = 60 * (((g - b) / delta) % 6);
    } else if (max === g) {
      hue = 60 * ((b - r) / delta + 2);
    } else {
      hue = 60 * ((r - g) / delta + 4);
    }

    if (hue < 0) hue += 360;

    // --------------------------------
    // GREEN → GOLD / ORANGE
    // --------------------------------
    if (hue >= 70 && hue <= 170) {
      const strength = Math.min(
        1,
        Math.max(0, (hue - 70) / 100)
      );

      // Warm destination color
      r = r + (220 - r) * 0.45;
      g = g + (150 - g) * 0.30;
      b = b + (65 - b) * 0.45;

      // Reduce green dominance
      g *= 0.92;
    }

    // --------------------------------
    // CYAN / TEAL → GOLD
    // --------------------------------
    if (hue >= 170 && hue <= 210) {
      r = r + (205 - r) * 0.35;
      g = g + (145 - g) * 0.25;
      b = b + (75 - b) * 0.45;
    }

    // --------------------------------
    // BLUE → PURPLE/WARM SHADOW
    // --------------------------------
    if (hue >= 210 && hue <= 270) {
      r = r + (95 - r) * 0.20;
      b = b + (80 - b) * 0.15;
    }

    // --------------------------------
    // WARM HIGHLIGHTS
    // --------------------------------
    const brightness = (r + g + b) / 3;

    if (brightness > 155) {
      const highlightStrength =
        (brightness - 155) / 100;

      r += 18 * highlightStrength;
      g += 8 * highlightStrength;
      b -= 8 * highlightStrength;
    }

    // Contrast
    const contrast = 1.08;

    r = (r - 128) * contrast + 128;
    g = (g - 128) * contrast + 128;
    b = (b - 128) * contrast + 128;

    data[i] = Math.min(255, Math.max(0, r));
    data[i + 1] = Math.min(255, Math.max(0, g));
    data[i + 2] = Math.min(255, Math.max(0, b));
  }

  ctx.putImageData(imageData, 0, 0);

  return canvas.toDataURL("public/img/mountain_4.png");
}