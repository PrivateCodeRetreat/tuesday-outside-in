import { DataTable, Given, Then, When } from '@cucumber/cucumber'
import { assertThat, equalTo } from 'hamjest'
import { Board } from '../../src/Board'

type ScenarioContext = {
  theBoard: Board
}

Given('a board:', function (this: ScenarioContext, dataTable: DataTable) {
  this.theBoard = Board.from(dataTable.raw())
})

When('{int} iteration(s) has/have happened', function (this: ScenarioContext, iterations: number) {
  this.theBoard = this.theBoard.iterate(iterations)
})

Then('the board looks like:', function (this: ScenarioContext, expected: DataTable) {
  assertThat(this.theBoard.asArray(), equalTo(expected.raw()))
})
