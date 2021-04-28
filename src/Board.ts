export class Board {
  static from(raw: string[][]): Board {
    return new Board(raw)
  }

  constructor(readonly raw: string[][]) {}

  iterate(iterations: number): Board {
    return new Board(this.raw)
  }

  asArray(): string[][] {
    return this.raw
  }
}
