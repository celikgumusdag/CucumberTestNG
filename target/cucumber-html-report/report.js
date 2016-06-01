$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("testdiary.feature");
formatter.feature({
  "line": 3,
  "name": "validate Testdiary site is working",
  "description": "",
  "id": "validate-testdiary-site-is-working",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@testdiary"
    }
  ]
});
formatter.before({
  "duration": 5961198744,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "validating testdiary",
  "description": "",
  "id": "validate-testdiary-site-is-working;validating-testdiary",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I have the current testdiary url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I open the testdiary url",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "testdiary should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionTest.i_have_the_current_testdiary_url()"
});
formatter.result({
  "duration": 256016280,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionTest.i_open_the_testdiary_url()"
});
formatter.result({
  "duration": 4612309712,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionTest.testdiary_should_be_displayed()"
});
formatter.result({
  "duration": 125019655,
  "status": "passed"
});
formatter.after({
  "duration": 2254925900,
  "status": "passed"
});
formatter.uri("testdiary2.feature");
formatter.feature({
  "line": 3,
  "name": "Kontrol Kontrol",
  "description": "",
  "id": "kontrol-kontrol",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@testdiary2"
    }
  ]
});
formatter.before({
  "duration": 3569761098,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "lalala testdiary",
  "description": "",
  "id": "kontrol-kontrol;lalala-testdiary",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Kontrol given",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "kontrol when go",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "kontrol then go",
  "keyword": "Then "
});
formatter.match({
  "location": "DenemeDefinition.kontrolGiven()"
});
formatter.result({
  "duration": 445430,
  "status": "passed"
});
formatter.match({
  "location": "DenemeDefinition.kontrolWhenGo()"
});
formatter.result({
  "duration": 2991677645,
  "status": "passed"
});
formatter.match({
  "location": "DenemeDefinition.kontrolThenGo()"
});
formatter.result({
  "duration": 111752001,
  "error_message": "org.junit.ComparisonFailure: expected:\u003chttp[://www.google.com/]\u003e but was:\u003chttp[s://www.google.com.tr/?gfe_rd\u003dcr\u0026ei\u003d19tOV8iTF6uz8wejmZ7oAg\u0026gws_rd\u003dssl]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat cucumberTraining.DenemeDefinition.kontrolThenGo(DenemeDefinition.java:33)\r\n\tat ✽.Then kontrol then go(testdiary2.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2022856917,
  "status": "passed"
});
});