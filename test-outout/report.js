$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/user/eclipse-workspace/FaceBook-1/src/main/java/Features/login1.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook login  Action Feature",
  "description": "",
  "id": "facebook-login--action-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Facebook login Test Scenario",
  "description": "",
  "id": "facebook-login--action-feature;facebook-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user should enter the url",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of the page is facebook",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should enter \" jayeshkani25@gmail.com \" and \"$XSM7#@25 \"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user should click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginstepDefinition1.user_present_on_login_page()"
});
formatter.result({
  "duration": 15762310300,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition1.title_of_the_page_is_facebook()"
});
formatter.result({
  "duration": 2106820200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " jayeshkani25@gmail.com ",
      "offset": 19
    },
    {
      "val": "$XSM7#@25 ",
      "offset": 50
    }
  ],
  "location": "LoginstepDefinition1.user_should_enter_and(String,String)"
});
formatter.result({
  "duration": 697761100,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition1.user_should_click_on_login_button()"
});
formatter.result({
  "duration": 2293613200,
  "status": "passed"
});
});