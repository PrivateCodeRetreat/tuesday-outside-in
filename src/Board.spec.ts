import { assertThat, defined } from 'hamjest'
import { Board } from './Board'

describe(Board.name, () => {
  it('can be created from an Array of "." and "*" strings', () => {
    const board = Board.from([['.', '*']])
    assertThat(board, defined())
  })
})
