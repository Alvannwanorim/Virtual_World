class World {
  constructor(graph, roadWidth = 100, roadRoundness = 10) {
    this.graph = graph;
    this.roadWidth = roadWidth;
    this.roadRoundness = roadRoundness;

    this.envelopes = [];
    this.intersections = [];
    this.roadBoarders = [];

    this.generate();
  }

  generate() {
    this.envelopes.length = 0;
    for (const seg of this.graph.segments) {
      this.envelopes.push(
        new Envelope(seg, this.roadWidth, this.roadRoundness)
      );
    }

    // this.roadBoarders = Polygon.union(this.envelopes.map((e) => e.polygon));
  }

  draw(ctx) {
    for (const env of this.envelopes) {
      env.draw(ctx);
    }
    for (const seg of this.roadBoarders) {
      // console.log(seg);
      seg.draw(ctx, { color: "white", width: 4 });
    }
  }
}
