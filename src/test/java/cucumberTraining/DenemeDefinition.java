package cucumberTraining;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.testng.Reporter;

/**
 * Created by celik.gumusdag on 01.06.2016.
 */
public class DenemeDefinition {

    WebDriver driver = HooksTest.driver;
    String url = "http://www.google.com/";

    @Given("^Kontrol given$")
    public void kontrolGiven() throws Throwable {
        System.out.println("my current url is: " + url);
    }

    @When("^kontrol when go$")
    public void kontrolWhenGo() throws Throwable {
        driver.get(url);
    }

    @Then("^kontrol then go$")
    public void kontrolThenGo() throws Throwable {
        String currentUrl = driver.getCurrentUrl();
        System.out.println(currentUrl);
        Reporter.log(" i have the correct url for test diary");
    }
}
