Feature: Game of life

  Scenario: Still life - block
    Given a board:
      | . | . | . | . |
      | . | * | * | . |
      | . | * | * | . |
      | . | . | . | . |
    When 2 iterations have happened
    Then the board looks like:
      | . | . | . | . |
      | . | * | * | . |      
      | . | * | * | . |      
      | . | . | . | . |      
