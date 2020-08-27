//Define scraping function

async function scrapAppStore(page, app) {

  await page.goto(`https://apps.apple.com/cy/app/${app}`);

  await page.setViewport({ width: 1792, height: 940 });
  
  var updates = ['iOS']

  const appName = await page.$("h1");
  const appNameText = await page.evaluate(appName => appName.innerText, appName);
  updates.push(appNameText)

  await page.click('.version-history');
  await page.waitFor(3000);
  await page.click('.version-history');
  await page.waitForSelector('#modal-container > .we-modal');

  const version = await page.$('.version-history__item__version-number');
  const versionText = await page.evaluate(version => version.innerText, version);
  updates.push(versionText)

  const releaseDate = await page.$('.version-history__item__release-date');
  const releaseDateText = await page.evaluate(releaseDate => releaseDate.innerText, releaseDate);
  updates.push(releaseDateText)

  const releaseNotes = await page.$(".version-history__item__release-notes");
  var releaseNotesText = await page.evaluate(releaseNotes => releaseNotes.innerText.replace(/\n+/g, ' '), releaseNotes);
  updates.push(releaseNotesText) 
  

  console.log(updates)
}


//Open Puppeteer
const puppeteer = require("puppeteer");

;(async () => {
    const browser = await puppeteer.launch({
      headless: true
    });

    const page = await browser.newPage();

    try {

      // FXPro CTrader
      var app = 'fxpro-direct-trading-online/id1436961771'
      await scrapAppStore(page, app)
      // XM
      var app = 'xm-trading-point/id1072084799'
      await scrapAppStore(page, app)

      // MT4
      var app = 'metatrader-4/id496212596'
      await scrapAppStore(page, app)

      // MT5
      var app = 'metatrader-5/id413251709'
      await scrapAppStore(page, app)      
      
      // HF
      var app = 'hf-forex-trading/id1097517968'
      await scrapAppStore(page, app)      

      // IG
      var app = 'ig-cfd-trading-and-forex/id406492428'
      await scrapAppStore(page, app)

      // Trading 212
      var app = 'trading-212/id566325832'
      await scrapAppStore(page, app)

      // eToro
      var app = 'etoro-social-trading/id674984916'
      await scrapAppStore(page, app)

      // Libertex
      var app = 'libertex-mobile-trading-app/id1140806268'
      await scrapAppStore(page, app)
      
      // Naga
      var app = 'naga-social-investing-network/id1182702365'
      await scrapAppStore(page, app)

      // Markets.com
      var app = 'markets-com-online-trading/id875786044'
      await scrapAppStore(page, app)

      // Plus500
      var app = 'plus500-online-trading/id417962622'
      await scrapAppStore(page, app)

      // EasyMarkets
      var app = 'easymarkets-forex-trading/id348823316'
      await scrapAppStore(page, app)

      // TradingView
      var app = 'tradingview-stocks-forex/id1205990992'
      await scrapAppStore(page, app)

      // // Exness NOT AVAILABLE IN CYPRUS
      // var app = 'exness-trader-trade-on-the-go/id1359763701'
      // await scrapPlayStore(page, app)

      // // IQ Option NOT AVAILABLE IN CYPRUS
      // var app = 'iq-option-fx-broker/id871125783'
      // await scrapPlayStore(page, app)

      // // Forex4you NOT AVAILABLE IN CYPRUS
      // var app = 'forex4you-trading-platform/id1008039704'
      // await scrapPlayStore(page, app)

      // AAATrade
      var app = 'aaatrade/id1196285884'
      await scrapAppStore(page, app)

      // Roboforex
      var app = 'mobiletrader-roboforex/id1137639247'
      await scrapAppStore(page, app)
      
      // FXTM
      var app = 'fxtm-trader-forex-trading/id1265719831'
      await scrapAppStore(page, app)

      // Forex.com 
      var app = 'forex-com-forex-trading/id1300506717'
      await scrapAppStore(page, app)

      // AvaTrade GO
      var app = 'avatrade-go-trading-app/id1247935193'
      await scrapAppStore(page, app)

      // Skilling
      var app = 'skilling/id1441386723'
      await scrapAppStore(page, app)

      // Investing.com
      var app = 'investing-com-stocks-finance/id909998122'
      await scrapAppStore(page, app)

      // NetDania
      var app = 'netdania-stock-forex-trader/id446371774'
      await scrapAppStore(page, app)

      // Admiral Markets
      var app = 'admiral-markets/id1222861799'
      await scrapAppStore(page, app)


    } catch (e) {
      console.log(e)
      process.exit()
      
    } finally {
      await browser.close()
    }
})()



