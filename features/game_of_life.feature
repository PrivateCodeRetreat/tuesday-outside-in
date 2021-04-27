Feature: Game of life

  Scenario: 0 iterations
    Given a 2 x 3 board
    Then the board looks like:
      """
      ...
      ...
      ...
      """