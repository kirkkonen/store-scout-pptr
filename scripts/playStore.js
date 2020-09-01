const puppeteer = require("puppeteer");
const { scrapPlayStore } = require('./helpers')  
  
  //Open Puppeteer 
  ;(async () => {
      const browser = await puppeteer.launch({
        headless: true
      });
  
      const page = await browser.newPage();
  
      try {

        // MT4
        var app = 'net.metaquotes.metatrader4'
        await scrapPlayStore(page, app)        

        // XM
        var app = 'com.xm.webapp'
        await scrapPlayStore(page, app)
        
        // FXPro CTrader
        var app = 'com.fxproctrader.ct'
        await scrapPlayStore(page, app)
  
        // MT5
        var app = 'net.metaquotes.metatrader5'
        await scrapPlayStore(page, app)      
        
        // HF
        var app = 'com.hotforex.www.hotforex'
        await scrapPlayStore(page, app)      
  
        // IG
        var app = 'com.iggroup.android.cfd'
        await scrapPlayStore(page, app)
  
        // Trading 212
        var app = 'com.avuscapital.trading212'
        await scrapPlayStore(page, app)
  
        // eToro
        var app = 'com.etoro.openbook'
        await scrapPlayStore(page, app)
  
        // Libertex
        var app = 'com.libertex.mobile'
        await scrapPlayStore(page, app)
        
        // Naga
        var app = 'swipestox.mobile'
        await scrapPlayStore(page, app)
  
        // Markets.com
        var app = 'com.markets.android'
        await scrapPlayStore(page, app)
  
        // Plus500
        var app = 'com.Plus500'
        await scrapPlayStore(page, app)
  
        // EasyMarkets
        var app = 'giniapps.easymarkets.com'
        await scrapPlayStore(page, app)
  
        // TradingView
        var app = 'com.tradingview.tradingviewapp'
        await scrapPlayStore(page, app)
  
        // Exness
        var app = 'com.exness.android.pa'
        await scrapPlayStore(page, app)
  
        // IQ Option
        var app = 'com.iqoption'
        await scrapPlayStore(page, app)
  
        // Forex4you
        var app = 'com.forex4you.android'
        await scrapPlayStore(page, app)
  
        // AAATrade
        var app = 'com.aaatrade.AAATrade'
        await scrapPlayStore(page, app)  
        
        // Roboforex
        var app = 'com.roboforex.webtrader'
        await scrapPlayStore(page, app)

        // FXTM
        var app = 'com.fxtm.prod'
        await scrapPlayStore(page, app)
  
        // Forex.com 
        var app = 'com.forex.whitelabel.forex'
        await scrapPlayStore(page, app)
  
        // AvaTrade GO
        var app = 'com.avatrade.mobile'
        await scrapPlayStore(page, app)
  
        // Skilling
        var app = 'com.FinovelCyprusLimited.Skilling'
        await scrapPlayStore(page, app)
  
        // Investing.com
        var app = 'com.fusionmedia.investing'
        await scrapPlayStore(page, app)
  
        // NetDania
        var app = 'com.netdania'
        await scrapPlayStore(page, app)
  
        // Admiral Markets
        var app = 'com.admiralmarkets'
        await scrapPlayStore(page, app)
  
  
      } catch (e) {
        await page.screenshot({ path: 'android-error-screenshot.png' })
        console.log(e)
        process.exit()
        
      } finally {
        await browser.close()
      }
  })()
  