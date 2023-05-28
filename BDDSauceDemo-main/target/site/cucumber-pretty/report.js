$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "As a user I want to login website sauce demo\n\n// test case login",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 8980610708,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Normal Login",
  "description": "",
  "id": "login;normal-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User open the website souce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User input \"standard_user\" as userName and input \"secret_sauce\" as pass",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User already on landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLogin()"
});
formatter.result({
  "duration": 383216875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 50
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 3168878709,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.verifyLandingPage()"
});
formatter.result({
  "duration": 3190085875,
  "status": "passed"
});
formatter.after({
  "duration": 147564208,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Invalid Login",
  "description": "",
  "id": "login;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User open the website souce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User input \"\u003cuserName\u003e\" as userName and input \"\u003cpassword\u003e\" as pass",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User see error \"\u003cerrorText\u003e\" on login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "login;invalid-login;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "errorText"
      ],
      "line": 17,
      "id": "login;invalid-login;;1"
    },
    {
      "cells": [
        "standard_user",
        "",
        "Epic sadface: Password is required"
      ],
      "line": 18,
      "id": "login;invalid-login;;2"
    },
    {
      "cells": [
        "",
        "secret_sauce",
        "Epic sadface: Username is required"
      ],
      "line": 19,
      "id": "login;invalid-login;;3"
    },
    {
      "cells": [
        "123salah",
        "salah juga123",
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 20,
      "id": "login;invalid-login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5829750958,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Invalid Login",
  "description": "",
  "id": "login;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User open the website souce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User input \"standard_user\" as userName and input \"\" as pass",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User see error \"Epic sadface: Password is required\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLogin()"
});
formatter.result({
  "duration": 184114791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "",
      "offset": 50
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 986797541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Password is required",
      "offset": 16
    }
  ],
  "location": "LoginSteps.verifyErrorText(String)"
});
formatter.result({
  "duration": 50595125,
  "status": "passed"
});
formatter.after({
  "duration": 129406708,
  "status": "passed"
});
formatter.before({
  "duration": 5814848333,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Invalid Login",
  "description": "",
  "id": "login;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User open the website souce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User input \"\" as userName and input \"secret_sauce\" as pass",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User see error \"Epic sadface: Username is required\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLogin()"
});
formatter.result({
  "duration": 212795667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 37
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 917383958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username is required",
      "offset": 16
    }
  ],
  "location": "LoginSteps.verifyErrorText(String)"
});
formatter.result({
  "duration": 41049417,
  "status": "passed"
});
formatter.after({
  "duration": 111198875,
  "status": "passed"
});
formatter.before({
  "duration": 5770374083,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Invalid Login",
  "description": "",
  "id": "login;invalid-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User open the website souce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User input \"123salah\" as userName and input \"salah juga123\" as pass",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User see error \"Epic sadface: Username and password do not match any user in this service\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLogin()"
});
formatter.result({
  "duration": 238410542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123salah",
      "offset": 12
    },
    {
      "val": "salah juga123",
      "offset": 45
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 1876323625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service",
      "offset": 16
    }
  ],
  "location": "LoginSteps.verifyErrorText(String)"
});
formatter.result({
  "duration": 41741250,
  "status": "passed"
});
formatter.after({
  "duration": 108364750,
  "status": "passed"
});
formatter.uri("features/sales.feature");
formatter.feature({
  "line": 2,
  "name": "Sales flow",
  "description": "description CLass",
  "id": "sales-flow",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sales"
    }
  ]
});
formatter.before({
  "duration": 5642467875,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User make a purchase with 2 item",
  "description": "",
  "id": "sales-flow;user-make-a-purchase-with-2-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User open the website souce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User input \"standard_user\" as userName and input \"secret_sauce\" as pass",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User already on landing page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User sort product list by \"Name (Z to A)\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User choice 2 product from the list",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User Click Product add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User Click remove product to cart",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User Click Check Out product",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User input \"viski\" as firstNameCheckOut and input \"arditia\" as lastNameCheckOut and input \"16620\" as portalCode",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User Click continue confirm to payment",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Page Display where item price is same with item total",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Page Display the item total price after tax is same with total purchase",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User Click Finish for Order Done",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "THANK YOU FOR YOUR ORDER",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User Click Burger Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User Click Button Log Out",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyLogin()"
});
formatter.result({
  "duration": 211360333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 50
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 3169883750,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.verifyLandingPage()"
});
formatter.result({
  "duration": 3180418708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z to A)",
      "offset": 27
    }
  ],
  "location": "PurchaseStep.sortProductValue(String)"
});
formatter.result({
  "duration": 3200346459,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.choiceProduct()"
});
formatter.result({
  "duration": 3307895791,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.clickcart()"
});
formatter.result({
  "duration": 3185054625,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.clickremove()"
});
formatter.result({
  "duration": 3102245791,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.clickCheckOut()"
});
formatter.result({
  "duration": 3091528792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "viski",
      "offset": 12
    },
    {
      "val": "arditia",
      "offset": 51
    },
    {
      "val": "16620",
      "offset": 91
    }
  ],
  "location": "PurchaseStep.inputCheckOut(String,String,String)"
});
formatter.result({
  "duration": 4026227042,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.continueConfirm()"
});
formatter.result({
  "duration": 3119325583,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.verifyPrice()"
});
formatter.result({
  "duration": 73371041,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.verifyTotal()"
});
formatter.result({
  "duration": 3057292041,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.buttonFinishOrder()"
});
formatter.result({
  "duration": 3113460750,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.headerFinish()"
});
formatter.result({
  "duration": 3052350958,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.burgerButton()"
});
formatter.result({
  "duration": 3175688583,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseStep.buttonLogOut()"
});
formatter.result({
  "duration": 3110551083,
  "status": "passed"
});
formatter.after({
  "duration": 112331708,
  "status": "passed"
});
});