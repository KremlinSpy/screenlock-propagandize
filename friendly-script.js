const fs = require('fs')

const { Builder, By, until } = require('selenium-webdriver')
const wp = require('wallpaper');
require('chromedriver')

const driver = new Builder().forBrowser('chrome').build();
const actions = driver.actions({ async: true });

(async () => {
  await driver.get('https://www.xvideos.com/tags/gay-hardcore')
  await driver.navigate().refresh()
  await driver.wait(until.elementsLocated(By.css('.thumb-block.tb_full_init.tbm-init-ok')))
  const previews = await driver.findElements(By.css('.thumb-block.tb_full_init.tbm-init-ok'))
  await previews[4].click()
  await driver.wait(until.elementLocated(By.css('.page-title')), 5000);
  await driver.findElement(By.css('.buttons-bar.right img:last-child')).click();
  await driver.findElement(By.css('.big-button.play img')).click()
  const progressbar = await driver.findElement(By.css('.bufferdiv'))
  await actions.move({origin: progressbar}).click().perform()
  await driver.sleep(2000)
  
  const encodedString = await driver.takeScreenshot();
  await fs.writeFileSync('./gayshit.png', encodedString, 'base64')

  await driver.sleep(5000);

  await wp.set('./gayshit.png');
})()
