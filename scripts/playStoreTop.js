const puppeteer = require("puppeteer");
const { scrapPlayStore } = require('./helpers')  
  
  //Open Puppeteer 
  ;(async () => {
      const browser = await puppeteer.launch({
        headless: true
      });
  
      const page = await browser.newPage();


      //Facebook 
      var app = 'com.facebook.katana'
      await scrapPlayStore(page, app)   

      //Instagram 
      var app = 'com.instagram.android'
      await scrapPlayStore(page, app)  

      //Skype 
      var app = 'com.skype.raider'
      await scrapPlayStore(page, app)  

      //Twitter 
      var app = 'com.twitter.android'
      await scrapPlayStore(page, app)  
      
      //Reddit 
      var app = 'com.reddit.frontpage'
      await scrapPlayStore(page, app)  
      
      //TikTok 
      var app = 'com.zhiliaoapp.musically'
      await scrapPlayStore(page, app)  
      
      //Linkedin 
      var app = 'com.linkedin.android'
      await scrapPlayStore(page, app)  
      
      //Pinterest 
      var app = 'com.pinterest'
      await scrapPlayStore(page, app)  
      
      //Tumblr 
      var app = 'com.tumblr'
      await scrapPlayStore(page, app)  
      
      //Snapchat 
      var app = 'com.snapchat.android'
      await scrapPlayStore(page, app)  
      
      //Facebook lite 
      var app = 'com.facebook.lite'
      await scrapPlayStore(page, app)  

      //Gmail 
      var app = 'com.google.android.gm'
      await scrapPlayStore(page, app)  

      //Whatsapp 
      var app = 'com.whatsapp'
      await scrapPlayStore(page, app)     
      
      //Viber 
      var app = 'com.viber.voip'
      await scrapPlayStore(page, app)   
      
      //Outlook 
      var app = 'com.microsoft.office.outlook'
      await scrapPlayStore(page, app)  
      
      //Spark Email 
      var app = 'com.readdle.spark'
      await scrapPlayStore(page, app)  

      //Cisco Webex Meetings 
      var app = 'com.cisco.webex.meetings'
      await scrapPlayStore(page, app)
      
      //Messenger 
      var app = 'com.facebook.orca'
      await scrapPlayStore(page, app)  
      
      //WeChat 
      var app = 'com.tencent.mm'
      await scrapPlayStore(page, app)  
      
      //Telegram 
      var app = 'org.telegram.messenger'
      await scrapPlayStore(page, app)  
      
      //Line 
      var app = 'jp.naver.line.android'
      await scrapPlayStore(page, app)  
      
      //Zoom 
      var app = 'us.zoom.videomeetings'
      await scrapPlayStore(page, app)  
      
      //Google Meet 
      var app = 'com.google.android.apps.meetings'
      await scrapPlayStore(page, app)  
      
      //Slack 
      var app = 'com.Slack'
      await scrapPlayStore(page, app)  
      
      //Microsoft Teams 
      var app = 'com.microsoft.teams'
      await scrapPlayStore(page, app)  

      //Netflix 
      var app = 'com.netflix.mediaclient'
      await scrapPlayStore(page, app)  
      
      //Likee 
      var app = 'video.like'
      await scrapPlayStore(page, app)  
      
      //Spotify 
      var app = 'com.spotify.music'
      await scrapPlayStore(page, app)  
      
      //Shazam 
      var app = 'com.shazam.android'
      await scrapPlayStore(page, app)  
      
      //Soundcloud 
      var app = 'com.soundcloud.android'
      await scrapPlayStore(page, app)  
      
      //Youtube music 
      var app = 'com.google.android.apps.youtube.music'
      await scrapPlayStore(page, app)  
      
      //Twitch 
      var app = 'tv.twitch.android.app'
      await scrapPlayStore(page, app)  

      //Discord 
      var app = 'com.discord'
      await scrapPlayStore(page, app)  
      
      //Vimeo 
      var app = 'com.vimeo.android.videoapp'
      await scrapPlayStore(page, app)  
      
      //Youtube 
      var app = 'com.google.android.youtube'
      await scrapPlayStore(page, app)  
      
      //Deezer 
      var app = 'deezer.android.app'
      await scrapPlayStore(page, app)  

      //Coinbase 
      var app = 'com.coinbase.android'
      await scrapPlayStore(page, app)  
      
      //Venmo 
      // var app = 'com.venmo'
      // await scrapPlayStore(page, app)  
      
      //PayPal 
      var app = 'com.paypal.android.p2pmobile'
      await scrapPlayStore(page, app)  
      
      //Cash App 
      // var app = 'com.squareup.cash'
      // await scrapPlayStore(page, app)  

      //Airbnb 
      var app = 'com.airbnb.android'
      await scrapPlayStore(page, app)  
      
      //Booking 
      var app = 'com.booking'
      await scrapPlayStore(page, app)  
      
      //Grab 
      var app = 'com.grabtaxi.passenger'
      await scrapPlayStore(page, app)  
      
      //Google maps 
      var app = 'com.google.android.apps.maps'
      await scrapPlayStore(page, app)  
      
      //Maps.me 
      var app = 'com.mapswithme.maps.pro'
      await scrapPlayStore(page, app)  
      
      //Kayak 
      var app = 'com.kayak.android'
      await scrapPlayStore(page, app)  
      
      //TripAdvisor 
      var app = 'com.tripadvisor.tripadvisor'
      await scrapPlayStore(page, app)  
      
      //Uber 
      var app = 'com.ubercab'
      await scrapPlayStore(page, app)  
      
      //Lyft 
      var app = 'me.lyft.android'
      await scrapPlayStore(page, app)  
      
      //Turo 
      var app = 'com.relayrides.android.relayrides'
      await scrapPlayStore(page, app)  
      
      //Bolt 
      var app = 'ee.mtakso.client'
      await scrapPlayStore(page, app)  
      
      //Skyscanner 
      var app = 'net.skyscanner.android.main'
      await scrapPlayStore(page, app)  

      //Kickstarter 
      var app = 'com.kickstarter.kickstarter'
      await scrapPlayStore(page, app)  

      //MyFitnessPal 
      var app = 'com.myfitnesspal.android'
      await scrapPlayStore(page, app)  

      //Yelp 
      // var app = 'com.yelp.android'
      // await scrapPlayStore(page, app)  
      
      //Uber Eats 
      var app = 'com.ubercab.eats'
      await scrapPlayStore(page, app)  
      
      //foodpanda 
      var app = 'com.global.foodpanda.android'
      await scrapPlayStore(page, app)  
      
      //DoorDash 
      // var app = 'com.dd.doordash'
      // await scrapPlayStore(page, app)  
      
      //Groupon 
      // var app = 'com.groupon'
      // await scrapPlayStore(page, app)  
      
      //AliExpress 
      var app = 'com.alibaba.aliexpresshd'
      await scrapPlayStore(page, app)  
      
      //Wish 
      var app = 'com.contextlogic.wish'
      await scrapPlayStore(page, app)  
      
      //Amazon 
      var app = 'com.amazon.mShop.android.shopping'
      await scrapPlayStore(page, app)  
      
      //Shopee 
      // var app = 'com.shopee.th'
      // await scrapPlayStore(page, app)  
      
      //Photoshop Express 
      var app = 'com.adobe.psmobile'
      await scrapPlayStore(page, app)  
      
      //Flickr 
      var app = 'com.flickr.android'
      await scrapPlayStore(page, app)  
      
      //Prisma 
      var app = 'com.neuralprisma'
      await scrapPlayStore(page, app)  
      
      //Notion 
      var app = 'notion.id'
      await scrapPlayStore(page, app)  
      
      //Asana 
      var app = 'com.asana.app'
      await scrapPlayStore(page, app)  
      
      //Dropbox 
      var app = 'com.dropbox.android'
      await scrapPlayStore(page, app)  
      
      //Evernote 
      var app = 'com.evernote'
      await scrapPlayStore(page, app)  
      
      //IFTTT 
      var app = 'com.ifttt.ifttt'
      await scrapPlayStore(page, app)  

      //Todoist 
      var app = 'com.todoist'
      await scrapPlayStore(page, app)  

      //Microsoft Word 
      var app = 'com.microsoft.office.word'
      await scrapPlayStore(page, app)  
      
      //Google Drive 
      var app = 'com.google.android.apps.docs'
      await scrapPlayStore(page, app)  
      
      //Google docs 
      var app = 'com.google.android.apps.docs.editors.docs'
      await scrapPlayStore(page, app)  
      
      //Jira 
      var app = 'com.atlassian.android.jira.core'
      await scrapPlayStore(page, app)  
      
      //Confluence 
      var app = 'com.atlassian.android.confluence.core'
      await scrapPlayStore(page, app) 
      
      //Upwork for freelancers 
      var app = 'com.upwork.android.apps.main'
      await scrapPlayStore(page, app) 

      //Upwork for clients 
      var app = 'com.upwork.android.apps.client'
      await scrapPlayStore(page, app) 
      
      //Fiverr
      var app = 'com.fiverr.fiverr'
      await scrapPlayStore(page, app)

      //Freelancer
      var app = 'com.freelancer.android.messenger'
      await scrapPlayStore(page, app)

      //Coursera
      var app = 'org.coursera.android'
      await scrapPlayStore(page, app)

      //Udemy
      var app = 'com.udemy.android'
      await scrapPlayStore(page, app)

      //Eventbrite
      var app = 'com.eventbrite.attendee'
      await scrapPlayStore(page, app)

      //Github 
      var app = 'com.github.android'
      await scrapPlayStore(page, app)  
      
      //Tinder 
      var app = 'com.tinder'
      await scrapPlayStore(page, app)  
      
      //Badoo 
      var app = 'com.badoo.mobile'
      await scrapPlayStore(page, app)  

    
      await browser.close()

  })()
  