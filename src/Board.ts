class DeadCell {
  toString() {
    return '.'
  }
}

class LiveCell {
  toString() {
    return '*'
  }
}

type Cell = LiveCell | DeadCell

const toCell: (raw: string) => Cell = (raw) => (raw == '.' ? new DeadCell() : new LiveCell())

export class Board {
  static from(raw: string[][]): Board {
    return new Board(raw.map((row) => row.map(toCell)))
  }

  constructor(readonly cells: DeadCell[][]) {}

  iterate(iterations: number): Board {
    return new Board(this.cells)
  }

  asArray(): string[][] {
    return this.cells.map((rows) => rows.map((cell) => cell.toString()))
  }
}
