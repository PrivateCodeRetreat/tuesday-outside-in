import { assertThat, defined } from 'hamjest'
import { Board } from './Board'

describe(Board.name, () => {
  it('can be created', () => {
    const board = new Board()
    assertThat(board, defined())
  })
})
