class Graph {
  constructor(points = [], segments = []) {
    this.points = points;
    this.segments = segments;
  }

  addPoint(point) {
    this.points.push(point);
  }

  containsPoint(point) {
    return this.points.find((p) => p.equals(point));
  }

  tryAddPoint(point) {
    if (!this.containsPoint(point)) {
      this.points.push(point);
      return true;
    }
    return false;
  }

  segmentsWithPoint(point) {
    const segs = [];
    for (const seg of this.segments) {
      if (seg.includes(point)) {
        segs.push(seg);
      }
    }
    return segs;
  }

  removePoint(point) {
    // console.log(point);

    const segs = this.segmentsWithPoint(point);
    // console.log(segs);

    for (const seg of segs) {
      this.removeSegment(seg);
    }
    this.points.splice(this.points.indexOf(point), 1);
  }

  addSegment(seg) {
    if (!this.containsSegment(seg)) {
      this.segments.push(seg);
      return true;
    }
    return false;
  }

  containsSegment(segment) {
    return this.segments.find((seg) => seg.equals(segment));
  }

  removeSegment(seg) {
    this.segments.splice(this.segments.indexOf(seg), 1);
  }

  removeAll() {
    this.segments.length = 0;
    this.points.length = 0;
  }

  draw(ctx) {
    for (const seg of this.segments) {
      seg.draw(ctx);
    }

    for (const point of this.points) {
      point.draw(ctx);
    }
  }
}
