class Envelope {
  constructor(skeleton, width, roundness = 0) {
    this.skeleton = skeleton;
    this.polygon = this.#generatePolygon(width, roundness);
  }

  #generatePolygon(width, roundness) {
    if (!this.skeleton) return;
    const { p1, p2 } = this.skeleton;
    // console.log(p1, p2);

    const radius = width / 2;
    const alpha = angle(subtract(p1, p2));
    const alpha_cw = alpha + Math.PI / 2;
    const alpha_ccw = alpha - Math.PI / 2;

    const points = [];
    const step = Math.PI / Math.max(1, roundness);
    const eps = step / 2;
    for (let i = alpha_ccw; i <= alpha_cw + eps; i += step) {
      points.push(translate(p1, i, radius));
    }
    for (let i = alpha_ccw; i <= alpha_cw + eps; i += step) {
      points.push(translate(p2, Math.PI + i, radius));
    }
    return new Polygon(points);
  }

  draw(ctx) {
    this.polygon.draw(ctx);
    this.polygon.drawSegments(ctx);
  }
}
