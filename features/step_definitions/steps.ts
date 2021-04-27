import { Given, Then } from '@cucumber/cucumber'
import { assertThat, equalTo } from 'hamjest'
import { Board } from '../../src/Board'

type ScenarioContext = {
  theBoard: Board
}

Given('a {int} x {int} board', function (this: ScenarioContext, rows: number, cols: number) {
  this.theBoard = Board.create(rows, cols)
})

Then('the board looks like:', function (this: ScenarioContext, expected: string) {
  assertThat(this.theBoard.toString(), equalTo(expected))
})
