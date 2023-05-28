package step_definitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.chrome.ChromeOptions;

public class Hooks {
    public static WebDriver webDriver;

    @Before
    public void openBrowser(){
        ChromeOptions a = new ChromeOptions();
        a.addArguments("--remote-allow-origins=*");
        WebDriverManager.chromedriver().setup();

        webDriver = new ChromeDriver();
        String appUrl = "https://www..com/";
        webDriver.get(appUrl);
        webDriver.manage().window().maximize();
    }

    @After
    public void closeBrowser(){
        webDriver.quit();
    }

}