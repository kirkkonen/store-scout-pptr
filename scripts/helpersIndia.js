//note export syntax for classic Node.js

module.exports.scrapAppStore = async function (page, app) {

    await page.goto(`https://apps.apple.com/in/app/${app}`);

    await page.waitFor(3000);      

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