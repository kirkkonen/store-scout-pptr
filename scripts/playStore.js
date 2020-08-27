//Define scraping function

async function scrapPlayStore(page, app) {

    await page.goto(`https://play.google.com/store/apps/details?id=${app}`);
  
    await page.setViewport({ width: 1792, height: 940 });
    
    var updates = ['Android']

    var appName = await page.$("h1");
    var appNameText = await page.evaluate(appName => appName.innerText, appName);
    updates.push(appNameText)

    var updateDate = await page.$("div[class=hAyfc]:nth-child(1) > span[class=htlgb]");
    var updateDateText = await page.evaluate(updateDate => updateDate.innerText, updateDate);
    updates.push(updateDateText)

    var currentVersion = await page.$("div[class=hAyfc]:nth-child(4) > span[class=htlgb]");
    var currentVersionText = await page.evaluate(currentVersion => currentVersion.innerText, currentVersion);
    updates.push(currentVersionText)

    var releaseNotes = await page.$("c-wiz[jsrenderer=eG38Ge] > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span[jsslot]");
    var releaseNotesText = await page.evaluate(releaseNotes => releaseNotes.innerHTML, releaseNotes);
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
        var app = 'com.fxproctrader.ct'
        await scrapPlayStore(page, app)
        // XM
        var app = 'com.xm.webapp'
        await scrapPlayStore(page, app)
  
        // MT4
        var app = 'net.metaquotes.metatrader4'
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
  
        // // Exness NOT AVAILABLE IN CYPRUS
        // var app = 'com.exness.android.pa'
        // await scrapPlayStore(page, app)
  
        // // IQ Option NOT AVAILABLE IN CYPRUS
        // var app = 'com.iqoption'
        // await scrapPlayStore(page, app)
  
        // // Forex4you NOT AVAILABLE IN CYPRUS
        // var app = 'com.forex4you.android'
        // await scrapPlayStore(page, app)
  
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
        console.log(e)
        process.exit()
        
      } finally {
        await browser.close()
      }
  })()
  