const puppeteer = require("puppeteer");
const { scrapAppStore } = require('./helpers')

//Open Puppeteer
;(async () => {
    const browser = await puppeteer.launch({
      headless: true
    });

    const page = await browser.newPage();
    const context = browser.defaultBrowserContext()
    await context.overridePermissions("https://apps.apple.com", ["geolocation"])

    await page.goto(`https://apps.apple.com`);

    await page.setGeolocation({ latitude: 51, longitude: 0})
    
    try {

      // FXPro CTrader
      // var app = 'fxpro-direct-trading-online/id1436961771'
      // await scrapAppStore(page, app)

            // Exness 
            var app = 'exness-trader-trade-on-the-go/id1359763701'
            await scrapAppStore(page, app)
      
            // IQ Option 
            var app = 'iq-option-fx-broker/id871125783'
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



      // Forex4you
      var app = 'forex4you-trading-platform/id1008039704'
      await scrapPlayStore(page, app)

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
      await page.screenshot({ path: 'ios-error-screenshot.png' })
      console.log(e)
      process.exit()
      
    } finally {
      await browser.close()
    }
})()



