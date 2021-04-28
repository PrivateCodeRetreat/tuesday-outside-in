Feature: Game of life

  Scenario: One live cell dies of loneliness
    Given a board:
      | . | . | . |
      | . | * | . |
      | . | . | . |
    When 1 iteration has happened
    Then the board looks like:
      | . | . | . |
      | . | . | . |
      | . | . | . |

  Rule: A cell with three neighbours lives on
    Scenario: A single row of three cells 
      Given a board:
        | . | . | . |
        | * | * | * |
        | . | . | . |
      When 1 iteration has happened
      Then the board looks like:
        | . | . | . |
        | . | * | . |
        | . | . | . |

  @todo
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
