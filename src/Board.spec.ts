import { assertThat, defined } from 'hamjest'
import { Board } from './Board'

describe(Board.name, () => {
  it('can be created', () => {
    const rows = 1
    const cols = 2
    const board = Board.create(rows, cols)
    assertThat(board, defined())
  })
})
