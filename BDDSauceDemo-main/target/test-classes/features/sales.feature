@sales
  Feature: Sales flow
    description CLass
  
  Scenario: User make a purchase with 2 item
    Given User open the website souce demo
    When User input "standard_user" as userName and input "secret_sauce" as pass
    Then User already on landing page
    Then User sort product list by "Name (Z to A)"
    And User choice 2 product from the list
    And User Click Product add to cart
    And User Click remove product to cart
    And User Click Check Out product
    When User input "viski" as firstNameCheckOut and input "arditia" as lastNameCheckOut and input "16620" as portalCode
    And User Click continue confirm to payment
    Then Page Display where item price is same with item total
    And Page Display the item total price after tax is same with total purchase
    And User Click Finish for Order Done
    Then THANK YOU FOR YOUR ORDER
    And User Click Burger Button
    And User Click Button Log Out