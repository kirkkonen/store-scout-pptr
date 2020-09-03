//note export syntax for classic Node.js

module.exports.scrapAppStore = async function (page, app) {

    await page.goto(`https://apps.apple.com/in/app/${app}`);

    await page.setViewport({ width: 1792, height: 940 });
    
    var updates = ['iOS']
  
    const appName = await page.$("h1");
    const appNameText = await page.evaluate(appName => appName.innerText, appName);
    updates.push(appNameText)
  
    await page.click('.version-history');
    await page.waitFor(3000);
    
    try {
        await page.waitForSelector('#modal-container > .we-modal');
    } catch {
        await page.click('.version-history');
        await page.waitForSelector('#modal-container > .we-modal');
    } 
  
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

  module.exports.scrapPlayStore = async function (page, app) {

    await page.goto(`https://play.google.com/store/apps/details?id=${app}`);
  
    await page.setViewport({ width: 1792, height: 940 });
    
    var updates = ['Android']

    await page.waitFor(3000)

    var appName = await page.$("h1");
    var appNameText = await page.evaluate(appName => appName.innerText, appName);
    updates.push(appNameText)

    var updateDate = await page.$("div[class=hAyfc]:nth-child(1) > span[class=htlgb]");
    var updateDateText = await page.evaluate(updateDate => updateDate.innerText, updateDate);
    updates.push(updateDateText)

    var currentVersion = await page.$("div[class=hAyfc]:nth-child(4) > span[class=htlgb]");
    var currentVersionText = await page.evaluate(currentVersion => currentVersion.innerText, currentVersion);
    updates.push(currentVersionText)

    try {
        var releaseNotes = await page.$("c-wiz[jsrenderer=eG38Ge] > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span[jsslot]");
        var releaseNotesText = await page.evaluate(releaseNotes => releaseNotes.innerText, releaseNotes);
        updates.push(releaseNotesText)

    } 
    catch (e) {
    console.log("Unable to get release notes")
    }

    console.log(updates)
  }