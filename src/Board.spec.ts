import { assertThat, defined, equalTo } from 'hamjest'
import { Board } from './Board'

describe(Board.name, () => {
  it('can be created from an Array of "." and "*" strings', () => {
    const board = Board.from([['.', '*']])
    assertThat(board, defined())
  })

  describe('rendering as a string', () => {
    it('renders a 1x1 board with a dead cell', () => {
      const board = Board.from([['.']])
      assertThat(board.asArray(), equalTo([['.']]))
    })
    it('renders a 2x2 board with two dead cells', () => {
      const board = Board.from([
        ['.', '.'],
        ['.', '.'],
      ])
      assertThat(
        board.asArray(),
        equalTo([
          ['.', '.'],
          ['.', '.'],
        ])
      )
    })
  })
})
