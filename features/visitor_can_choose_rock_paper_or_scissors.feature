Feature: Visitor can choose Rock Paper or Scissors
  As a user
  In order to play RPS
  I would like to choose from Rock Paper or Scissors

  Background: 
    Given I visit the site
    Then I should see "Rock"
    And I should see "Paper"
    And I should see "Scissors"

    Scenario: Visitor chooses Rock
    When I click on "Rock"
    Then I should see "Your choice was Rock"

    Scenario: Visitor chooses Paper
    When I click on "Paper"
    Then I should see "Your choice was Paper"
    
    Scenario: Visitor chooses Scissors
    When I click on "Scissors"
    Then I should see "Your choice was Scissors"