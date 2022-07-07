Feature: Login Page

  Scenario: Visit login page and type invalid credentials
    Given I visit the login page
    When I type valid user name
    But I type invalid password
    And I press login button
    Then I should see an alert with a message