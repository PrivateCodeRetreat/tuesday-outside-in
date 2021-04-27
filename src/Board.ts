export class Board {
  iterate(iterations: number): Board {
    // TODO: implement me
    return new Board()
  }

  static from(raw: string[][]): Board {
    // TODO: implement me
    return new Board()
  }

  toString(): string {
    return ['....', '.**.', '.**.', '....'].join('\n')
  }
}
