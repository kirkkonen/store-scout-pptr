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
  
      //Facebook 
      var app = 'facebook/id284882215'
      await scrapAppStore(page, app)

      //Instagram 
      var app = 'instagram/id389801252'
      await scrapAppStore(page, app)

      //Skype 
      var app = 'skype-for-iphone/id304878510'
      await scrapAppStore(page, app)

      //Twitter 
      var app = 'twitter/id333903271'
      await scrapAppStore(page, app)

      //Whatsapp
      var app = 'whatsapp-messenger/id310633997'
      await scrapAppStore(page, app)

      //Viber
      var app = 'viber-messenger-chats-calls/id382617920'
      await scrapAppStore(page, app)

      //Reddit 
      var app = 'reddit/id1064216828'
      await scrapAppStore(page, app)

      //TikTok 
      var app = 'tiktok-trends-start-here/id835599320'
      await scrapAppStore(page, app)

      //Linkedin 
      var app = 'linkedin-network-job-finder/id288429040'
      await scrapAppStore(page, app)

      //Pinterest 
      var app = 'pinterest/id429047995'
      await scrapAppStore(page, app)

      //Tumblr 
      var app = 'tumblr/id305343404'
      await scrapAppStore(page, app)

      //Snapchat 
      var app = 'snapchat/id447188370'
      await scrapAppStore(page, app)

      //Gmail 
      var app = 'gmail-email-by-google/id422689480'
      await scrapAppStore(page, app)

      //Outlook 
      var app = 'microsoft-outlook/id951937596'
      await scrapAppStore(page, app)

      //Spark Email 
      var app = 'spark-mail-email-by-readdle/id997102246'
      await scrapAppStore(page, app)  

      //Cisco Webex Meetings 
      var app = 'cisco-webex-meetings/id298844386'
      await scrapAppStore(page, app)

      //Messenger 
      var app = 'messenger/id454638411'
      await scrapAppStore(page, app)

      //WeChat 
      var app = 'wechat/id414478124'
      await scrapAppStore(page, app)

      //Telegram 
      var app = 'telegram-messenger/id686449807'
      await scrapAppStore(page, app)

      //Line 
      var app = 'line/id443904275'
      await scrapAppStore(page, app)

      //Zoom 
      var app = 'zoom-cloud-meetings/id546505307'
      await scrapAppStore(page, app)

      //Google Meet 
      var app = 'google-meet/id1013231476'
      await scrapAppStore(page, app)

      //Slack 
      var app = 'slack/id803453959'
      await scrapAppStore(page, app)

      //Microsoft Teams 
      var app = 'microsoft-teams/id1113153706'
      await scrapAppStore(page, app)

      //Netflix 
      var app = 'netflix/id363590051'
      await scrapAppStore(page, app)

      //Likee 
      var app = 'likee-let-you-shine/id1251790681'
      await scrapAppStore(page, app)

      //Spotify 
      var app = 'spotify-music-and-podcasts/id324684580'
      await scrapAppStore(page, app)

      //Shazam 
      var app = 'shazam-music-discovery/id284993459'
      await scrapAppStore(page, app)

      //Soundcloud 
      var app = 'soundcloud-music-audio/id336353151'
      await scrapAppStore(page, app)

      //Youtube music 
      var app = 'youtube-music/id1017492454'
      await scrapAppStore(page, app)

      //Twitch 
      var app = 'twitch-live-game-streaming/id460177396'
      await scrapAppStore(page, app)

      //Discord 
      var app = 'discord-talk-chat-hang-out/id985746746'
      await scrapAppStore(page, app)

      //Youtube 
      var app = 'youtube-watch-listen-stream/id544007664'
      await scrapAppStore(page, app)

      //Deezer 
      var app = 'deezer-music-podcast-player/id292738169'
      await scrapAppStore(page, app)

      //Coinbase 
      var app = 'coinbase-buy-sell-bitcoin/id886427730'
      await scrapAppStore(page, app)

      //Venmo 
      // var app = 'venmo/id351727428'
      // await scrapAppStore(page, app)

      //PayPal 
      var app = 'paypal-mobile-cash/id283646709'
      await scrapAppStore(page, app)

      //Cash App 
      // var app = 'cash-app/id711923939'
      // await scrapAppStore(page, app)

      //Airbnb 
      var app = 'airbnb/id401626263'
      await scrapAppStore(page, app)

      //Booking 
      var app = 'booking-com-hotels-travel/id367003839'
      await scrapAppStore(page, app)

      //Google maps 
      var app = 'google-maps-transit-food/id585027354'
      await scrapAppStore(page, app)

      //Maps.me 
      var app = 'maps-me-offline-maps-gps-nav/id510623322'
      await scrapAppStore(page, app)

      //Kayak 
      var app = 'kayak-flights-hotels-cars/id305204535'
      await scrapAppStore(page, app)

      //Skyscanner 
      var app = 'skyscanner-travel-deals/id415458524'
      await scrapAppStore(page, app)

      //TripAdvisor 
      var app = 'tripadvisor-hotels-vacation/id284876795'
      await scrapAppStore(page, app)

      //Uber 
      var app = 'uber-request-a-ride/id368677368'
      await scrapAppStore(page, app)

      //Lyft 
      var app = 'lyft/id529379082'
      await scrapAppStore(page, app)

      //Turo 
      var app = 'turo-better-than-car-rental/id555063314'
      await scrapAppStore(page, app)

      //Bolt 
      var app = 'bolt-fast-affordable-rides/id675033630'
      await scrapAppStore(page, app)

      //Kickstarter 
      var app = 'kickstarter/id596961532'
      await scrapAppStore(page, app)

      //MyFitnessPal 
      var app = 'myfitnesspal/id341232718'
      await scrapAppStore(page, app)

      //Yelp 
      var app = 'yelp-food-delivery-services/id284910350'
      await scrapAppStore(page, app)

      //Uber Eats 
      var app = 'uber-eats-food-delivery/id1058959277'
      await scrapAppStore(page, app)

      //foodpanda 
      var app = 'foodpanda-food-delivery/id758103884'
      await scrapAppStore(page, app)

      //AliExpress 
      var app = 'aliexpress-shopping-app/id436672029'
      await scrapAppStore(page, app)

      //Wish 
      var app = 'wish-shopping-made-fun/id530621395'
      await scrapAppStore(page, app)

      //Amazon 
      var app = 'amazon-shopping/id297606951'
      await scrapAppStore(page, app)

      //Photoshop Express 
      var app = 'photoshop-express-photo-editor/id331975235'
      await scrapAppStore(page, app)

      //iMovie 
      var app = 'imovie/id377298193'
      await scrapAppStore(page, app)

      //Flickr 
      var app = 'flickr/id328407587'
      await scrapAppStore(page, app)
      
      //Prisma
      var app = 'prisma-photo-editor/id1122649984'
      await scrapAppStore(page, app)

      //Notion 
      var app = 'notion-notes-projects-docs/id1232780281'
      await scrapAppStore(page, app)
      
      //Asana 
      var app = 'asana-your-work-manager/id489969512'
      await scrapAppStore(page, app)

      //Dropbox 
      var app = 'dropbox-backup-sync-share/id327630330'
      await scrapAppStore(page, app)

      //Evernote 
      var app = 'evernote-notes-organizer/id281796108'
      await scrapAppStore(page, app)

      //IFTTT 
      var app = 'ifttt/id660944635'
      await scrapAppStore(page, app)

      //Todoist 
      var app = 'todoist-to-do-list-tasks/id572688855'
      await scrapAppStore(page, app)

      //Microsoft word 
      var app = 'microsoft-word/id586447913'
      await scrapAppStore(page, app)

      //Google Drive 
      var app = 'google-drive/id507874739'
      await scrapAppStore(page, app)

      //Google docs 
      var app = 'google-docs-sync-edit-share/id842842640'
      await scrapAppStore(page, app)

      //Jira 
      var app = 'jira-cloud-by-atlassian/id1006972087'
      await scrapAppStore(page, app)

      //Confluence 
      var app = 'confluence-cloud/id1006971684'
      await scrapAppStore(page, app)

      //Upwork for freelancers 
      var app = 'upwork-for-freelancers/id1446736499'
      await scrapAppStore(page, app)

      //Upwork for clients 
      var app = 'upwork-for-clients/id1464065313'
      await scrapAppStore(page, app)

      //Fiverr
      var app = 'fiverr-freelance-services/id346080608'
      await scrapAppStore(page, app) 

      //Freelancer 
      var app = 'freelancer-hire-find-jobs/id927810012'
      await scrapAppStore(page, app) 

      //Coursera
      var app = 'coursera-learn-new-skills/id736535961'
      await scrapAppStore(page, app) 

      //Udemy 
      var app = 'udemy-online-video-courses/id562413829'
      await scrapAppStore(page, app)  
      
      //EventBrite
      var app = 'eventbrite/id487922291'
      await scrapAppStore(page, app)  

      //Github 
      var app = 'github/id1477376905'
      await scrapAppStore(page, app)

      //Tinder 
      var app = 'tinder-dating-meet-people/id547702041'
      await scrapAppStore(page, app)

      //Badoo 
      var app = 'badoo-dating-chats-friends/id351331194'
      await scrapAppStore(page, app)

      await browser.close()

})()