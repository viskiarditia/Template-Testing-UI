@Login
  Feature: Login
    As a user I want to login website sauce demo

    // test case login

  Scenario: Normal Login
    Given User open the website souce demo
    When User input "standard_user" as userName and input "secret_sauce" as pass
    Then User already on landing page

  Scenario Outline: Invalid Login
    Given User open the website souce demo
    When User input "<userName>" as userName and input "<password>" as pass
    Then User see error "<errorText>" on login page
    Examples:
      | userName      | password      | errorText                                                                 |
      | standard_user |               | Epic sadface: Password is required                                        |
      |               | secret_sauce  | Epic sadface: Username is required                                        |
      | 123salah      | salah juga123 | Epic sadface: Username and password do not match any user in this service |



