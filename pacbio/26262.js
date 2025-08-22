	  if (window.convertflow == undefined) {

  // all database calls for needed account data, in one spot
  (function() {

    // define app variable with account data

    function defineApp() {
      window.convertflow = {};
      var app = {
        actions: {},
        admin: {},
        campaigns: {},
        cart: {},
        ctas: {},
        api: {
          ctas: {},
          areas: {}
        },
        elements: {},
        fields: {},
        field_options: {},
        helpers: {},
        sections: {},
        steps: {},
        variants: {},
        visitors: {},
        website: {
          id: 26262,
          data: {"currency":"USD","terms-link":"","visit_goals":[],"privacy-link":"https://www.pacb.com/legal-and-trademarks/privacy-policy/","business_type":"other","form-tracking":"true","ip-geolocation":"true","last_published":"2025-08-04 17:01:41 +0000","privacy-message":"Accept privacy policy and terms of service","terms-link-text":"Terms of Service","brand_color_dark":"#233652","traffic_estimate":"10,000 - 100,000","brand_color_light":"#fff","marketing-consent":"By registering on this web page, you are consenting and agreeing to collection and use of that information by PacBio in accordance with its Privacy Policy.","privacy-link-text":"Privacy Policy","url-identification":"true","brand_color_vibrant":"#1493bc","cart-value-threshold":"50"},
          name: "pacb.com",
          brand: "PacBio",
          privacy_message: "Accept privacy policy and terms of service",
          privacy_link: "https://www.pacb.com/legal-and-trademarks/privacy-policy/",
          privacy_link_text: "Privacy Policy",
          terms_link: "",
          terms_link_text: "Terms of Service",
          marketing_consent: "By registering on this web page, you are consenting and agreeing to collection and use of that information by PacBio in accordance with its Privacy Policy.",
          sms_consent: "By checking this box, you agree to receive recurring automated promotional and personalized marketing text messages (e.g. cart reminders) from {BRAND} at the cell number used when signing up. Consent is not a condition of any purchase. Reply HELP for help and STOP to cancel. Msg frequency varies. Msg & data rates may apply.",
          form_tracking: "true",
          url_identification: "true",
          brand_style: {
            'brand_color_dark': "#233652",
            'brand_color_light': "#fff",
            'brand_color_vibrant': "#1493bc"
          },
          profiles: {},
          powered_by: false,
          currency_character: "$", 
          actions: {},
          conditions: {},
          broadcasts: {},
          ctas: {},
          integrations: {},
          conditions_groups: {}
        }
      }

      app.visitors.uid_cookie = 'cf_' + app.website.id + '_id';
      app.visitors.expiration_cookie = 'cf_' + app.website.id + '_person_time';
      app.visitors.localstorage_prevent = 'cf_' + app.website.id + '_person_storage_prevent';
      app.visitors.localstorage_last_update = 'cf_' + app.website.id + '_person_last_update';
      app.visitors.enrichment_status = {};
      app.visitors.targeting_sync_status = {};
      app.local_person = 'cf_' + app.website.id + '_person';
      app.interface_root = "https://app.convertflow.com/websites/" + app.website.id + "/";
      app.api_root = "https://app.convertflow.co/websites/" + app.website.id + "/";
      app.api_contacts_validate = 'https://convertflow.co/email-validation/';

      app.api_contacts = app.api_root + 'contacts/create';
      app.api_events = app.api_root + 'events/create';
      app.api_visitors = app.api_root + 'visitors/';
      app.powered_by_link = "https://www.convertflow.com/?utm_source=poweredby&utm_medium=cf_referral&utm_campaign=default&utm_term=PacBio";
      app.geotargeting = true;
      app.timed = (app.interface_root.indexOf('localhost') > -1 || location.search.indexOf('cfTime=true')) > -1;
      app.services = ["activecampaign","attentive","autopilot","aweber","beehiiv","campaignmonitor","convertkit","customerio","drip","getresponse","googlerecaptcha","googletagmanager","hubspot","infusionsoft","intercom","klaviyo","mailchimp","okendo","omnisend","ontraport","ortto","postscript","salesforce","segment","sendinblue","sendlane","shopify","tatango","wordpress","yotpo"];
      app.live = (window.location.search.indexOf('iframe=true&variant=') == -1);
      app.use_cdn = true;
      app.environment = 'production';
      app.plan_type = "2021_pro";

      if ((app.live == true && app.use_cdn == true) || ("" == 'true' && app.website.id !== 0)) {
        app.assets_root = 'https://js.convertflow.co/production/websites/' + app.website.id + '/';
      } else {
        app.assets_root = app.interface_root;
      }

      app.shopify_storefront_token = "";
      app.shopify_store_url = "" || window.Shopify?.shop || window.location.hostname;
      app.yotpo_storefront_token = "";
      app.okendo_storefront_token = "";
      app.recaptcha_site_key = "";

      // uses activerecord instance variables^ to set state of account for js app
      var website = app.website;



          var profile = {"id":25542,"name":"Zuhayr","lastname":"Mallam","avatar":"https://uploads.convertflow.co/production/users/25542/CWUkhWFjSxuHnYjJmhbR_Zuhayr_headshot.jpg"};
          website.profiles[25542] = profile;

          website.actions[333109] = {"id":333109,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2245233,"website_id":26262,"element_id":2245233,"cta_id":88961,"data":null};
          website.actions[334480] = {"id":334480,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2256761,"website_id":26262,"element_id":2256761,"cta_id":88961,"data":null};
          website.actions[334911] = {"id":334911,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2259325,"website_id":26262,"element_id":2259325,"cta_id":89516,"data":null};
          website.actions[334912] = {"id":334912,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2259329,"website_id":26262,"element_id":2259329,"cta_id":89516,"data":null};
          website.actions[337014] = {"id":337014,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2278574,"website_id":26262,"element_id":2278574,"cta_id":90073,"data":null};
          website.actions[337553] = {"id":337553,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2285834,"website_id":26262,"element_id":2285834,"cta_id":90183,"data":null};
          website.actions[338033] = {"id":338033,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2290662,"website_id":26262,"element_id":2290662,"cta_id":90073,"data":null};
          website.actions[339236] = {"id":339236,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2300890,"website_id":26262,"element_id":2300890,"cta_id":90183,"data":null};
          website.actions[351887] = {"id":351887,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2442716,"website_id":26262,"element_id":2442716,"cta_id":95117,"data":null};
          website.actions[351888] = {"id":351888,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2442717,"website_id":26262,"element_id":2442717,"cta_id":95117,"data":null};
          website.actions[351889] = {"id":351889,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2442720,"website_id":26262,"element_id":2442720,"cta_id":95117,"data":null};
          website.actions[351890] = {"id":351890,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2442721,"website_id":26262,"element_id":2442721,"cta_id":95117,"data":null};
          website.actions[366387] = {"id":366387,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2585575,"website_id":26262,"element_id":2585575,"cta_id":99019,"data":null};
          website.actions[366459] = {"id":366459,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2586217,"website_id":26262,"element_id":2586217,"cta_id":99043,"data":null};
          website.actions[366491] = {"id":366491,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2586824,"website_id":26262,"element_id":2586824,"cta_id":99043,"data":null};
          website.actions[366504] = {"id":366504,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2587024,"website_id":26262,"element_id":2587024,"cta_id":99067,"data":null};
          website.actions[368107] = {"id":368107,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2741582,"website_id":26262,"element_id":2741582,"cta_id":99067,"data":null};
          website.actions[368732] = {"id":368732,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2747232,"website_id":26262,"element_id":2747232,"cta_id":99067,"data":null};
          website.actions[376510] = {"id":376510,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818052,"website_id":26262,"element_id":2818052,"cta_id":103485,"data":null};
          website.actions[376511] = {"id":376511,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818056,"website_id":26262,"element_id":2818056,"cta_id":103485,"data":null};
          website.actions[376512] = {"id":376512,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818060,"website_id":26262,"element_id":2818060,"cta_id":103486,"data":null};
          website.actions[376513] = {"id":376513,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818066,"website_id":26262,"element_id":2818066,"cta_id":103485,"data":null};
          website.actions[376514] = {"id":376514,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818067,"website_id":26262,"element_id":2818067,"cta_id":103486,"data":null};
          website.actions[376515] = {"id":376515,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818074,"website_id":26262,"element_id":2818074,"cta_id":103486,"data":null};
          website.actions[376516] = {"id":376516,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818078,"website_id":26262,"element_id":2818078,"cta_id":103487,"data":null};
          website.actions[376517] = {"id":376517,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818082,"website_id":26262,"element_id":2818082,"cta_id":103487,"data":null};
          website.actions[376518] = {"id":376518,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818087,"website_id":26262,"element_id":2818087,"cta_id":103487,"data":null};
          website.actions[376523] = {"id":376523,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818196,"website_id":26262,"element_id":2818196,"cta_id":103492,"data":null};
          website.actions[376524] = {"id":376524,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818200,"website_id":26262,"element_id":2818200,"cta_id":103492,"data":null};
          website.actions[376525] = {"id":376525,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818205,"website_id":26262,"element_id":2818205,"cta_id":103492,"data":null};
          website.actions[376526] = {"id":376526,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818219,"website_id":26262,"element_id":2818219,"cta_id":103495,"data":null};
          website.actions[376527] = {"id":376527,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818223,"website_id":26262,"element_id":2818223,"cta_id":103495,"data":null};
          website.actions[376528] = {"id":376528,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818228,"website_id":26262,"element_id":2818228,"cta_id":103495,"data":null};
          website.actions[376530] = {"id":376530,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818233,"website_id":26262,"element_id":2818233,"cta_id":103496,"data":null};
          website.actions[376531] = {"id":376531,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818237,"website_id":26262,"element_id":2818237,"cta_id":103496,"data":null};
          website.actions[376532] = {"id":376532,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818242,"website_id":26262,"element_id":2818242,"cta_id":103496,"data":null};
          website.actions[376533] = {"id":376533,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818246,"website_id":26262,"element_id":2818246,"cta_id":103497,"data":null};
          website.actions[376534] = {"id":376534,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818250,"website_id":26262,"element_id":2818250,"cta_id":103497,"data":null};
          website.actions[376535] = {"id":376535,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818255,"website_id":26262,"element_id":2818255,"cta_id":103497,"data":null};
          website.actions[376536] = {"id":376536,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818259,"website_id":26262,"element_id":2818259,"cta_id":103498,"data":null};
          website.actions[376537] = {"id":376537,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818263,"website_id":26262,"element_id":2818263,"cta_id":103498,"data":null};
          website.actions[376538] = {"id":376538,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818268,"website_id":26262,"element_id":2818268,"cta_id":103498,"data":null};
          website.actions[376539] = {"id":376539,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818272,"website_id":26262,"element_id":2818272,"cta_id":103499,"data":null};
          website.actions[376540] = {"id":376540,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818276,"website_id":26262,"element_id":2818276,"cta_id":103499,"data":null};
          website.actions[376541] = {"id":376541,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818281,"website_id":26262,"element_id":2818281,"cta_id":103499,"data":null};
          website.actions[376542] = {"id":376542,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818285,"website_id":26262,"element_id":2818285,"cta_id":103500,"data":null};
          website.actions[376543] = {"id":376543,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818289,"website_id":26262,"element_id":2818289,"cta_id":103500,"data":null};
          website.actions[376544] = {"id":376544,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2818294,"website_id":26262,"element_id":2818294,"cta_id":103500,"data":null};
          website.actions[381189] = {"id":381189,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2870973,"website_id":26262,"element_id":2870973,"cta_id":104902,"data":null};
          website.actions[381190] = {"id":381190,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2870974,"website_id":26262,"element_id":2870974,"cta_id":104902,"data":null};
          website.actions[381191] = {"id":381191,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871020,"website_id":26262,"element_id":2871020,"cta_id":104904,"data":null};
          website.actions[381192] = {"id":381192,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871021,"website_id":26262,"element_id":2871021,"cta_id":104904,"data":null};
          website.actions[381193] = {"id":381193,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871027,"website_id":26262,"element_id":2871027,"cta_id":104905,"data":null};
          website.actions[381194] = {"id":381194,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871028,"website_id":26262,"element_id":2871028,"cta_id":104905,"data":null};
          website.actions[381195] = {"id":381195,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871034,"website_id":26262,"element_id":2871034,"cta_id":104906,"data":null};
          website.actions[381196] = {"id":381196,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871035,"website_id":26262,"element_id":2871035,"cta_id":104906,"data":null};
          website.actions[381197] = {"id":381197,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871041,"website_id":26262,"element_id":2871041,"cta_id":104907,"data":null};
          website.actions[381198] = {"id":381198,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871042,"website_id":26262,"element_id":2871042,"cta_id":104907,"data":null};
          website.actions[381199] = {"id":381199,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871048,"website_id":26262,"element_id":2871048,"cta_id":104908,"data":null};
          website.actions[381200] = {"id":381200,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871049,"website_id":26262,"element_id":2871049,"cta_id":104908,"data":null};
          website.actions[381205] = {"id":381205,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871058,"website_id":26262,"element_id":2871058,"cta_id":104908,"data":null};
          website.actions[381206] = {"id":381206,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871065,"website_id":26262,"element_id":2871065,"cta_id":104910,"data":null};
          website.actions[381207] = {"id":381207,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871067,"website_id":26262,"element_id":2871067,"cta_id":104910,"data":null};
          website.actions[381208] = {"id":381208,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871068,"website_id":26262,"element_id":2871068,"cta_id":104910,"data":null};
          website.actions[381209] = {"id":381209,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871074,"website_id":26262,"element_id":2871074,"cta_id":104911,"data":null};
          website.actions[381210] = {"id":381210,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871075,"website_id":26262,"element_id":2871075,"cta_id":104911,"data":null};
          website.actions[381211] = {"id":381211,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871081,"website_id":26262,"element_id":2871081,"cta_id":104912,"data":null};
          website.actions[381212] = {"id":381212,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871082,"website_id":26262,"element_id":2871082,"cta_id":104912,"data":null};
          website.actions[381213] = {"id":381213,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871088,"website_id":26262,"element_id":2871088,"cta_id":104913,"data":null};
          website.actions[381214] = {"id":381214,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871089,"website_id":26262,"element_id":2871089,"cta_id":104913,"data":null};
          website.actions[381215] = {"id":381215,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871092,"website_id":26262,"element_id":2871092,"cta_id":104914,"data":null};
          website.actions[381216] = {"id":381216,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871094,"website_id":26262,"element_id":2871094,"cta_id":104914,"data":null};
          website.actions[381217] = {"id":381217,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871095,"website_id":26262,"element_id":2871095,"cta_id":104914,"data":null};
          website.actions[381218] = {"id":381218,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871101,"website_id":26262,"element_id":2871101,"cta_id":104915,"data":null};
          website.actions[381219] = {"id":381219,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871102,"website_id":26262,"element_id":2871102,"cta_id":104915,"data":null};
          website.actions[381220] = {"id":381220,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871108,"website_id":26262,"element_id":2871108,"cta_id":104916,"data":null};
          website.actions[381221] = {"id":381221,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871109,"website_id":26262,"element_id":2871109,"cta_id":104916,"data":null};
          website.actions[381222] = {"id":381222,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871112,"website_id":26262,"element_id":2871112,"cta_id":104917,"data":null};
          website.actions[381223] = {"id":381223,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871113,"website_id":26262,"element_id":2871113,"cta_id":104917,"data":null};
          website.actions[381224] = {"id":381224,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871119,"website_id":26262,"element_id":2871119,"cta_id":104918,"data":null};
          website.actions[381225] = {"id":381225,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871121,"website_id":26262,"element_id":2871121,"cta_id":104918,"data":null};
          website.actions[381226] = {"id":381226,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871122,"website_id":26262,"element_id":2871122,"cta_id":104918,"data":null};
          website.actions[381227] = {"id":381227,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871128,"website_id":26262,"element_id":2871128,"cta_id":104919,"data":null};
          website.actions[381228] = {"id":381228,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871130,"website_id":26262,"element_id":2871130,"cta_id":104919,"data":null};
          website.actions[381229] = {"id":381229,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871131,"website_id":26262,"element_id":2871131,"cta_id":104919,"data":null};
          website.actions[381230] = {"id":381230,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871137,"website_id":26262,"element_id":2871137,"cta_id":104920,"data":null};
          website.actions[381231] = {"id":381231,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871138,"website_id":26262,"element_id":2871138,"cta_id":104920,"data":null};
          website.actions[381232] = {"id":381232,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871144,"website_id":26262,"element_id":2871144,"cta_id":104921,"data":null};
          website.actions[381233] = {"id":381233,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871145,"website_id":26262,"element_id":2871145,"cta_id":104921,"data":null};
          website.actions[381234] = {"id":381234,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871148,"website_id":26262,"element_id":2871148,"cta_id":104922,"data":null};
          website.actions[381235] = {"id":381235,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871149,"website_id":26262,"element_id":2871149,"cta_id":104922,"data":null};
          website.actions[381236] = {"id":381236,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871157,"website_id":26262,"element_id":2871157,"cta_id":104924,"data":null};
          website.actions[381237] = {"id":381237,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871158,"website_id":26262,"element_id":2871158,"cta_id":104924,"data":null};
          website.actions[381238] = {"id":381238,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871164,"website_id":26262,"element_id":2871164,"cta_id":104925,"data":null};
          website.actions[381239] = {"id":381239,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871165,"website_id":26262,"element_id":2871165,"cta_id":104925,"data":null};
          website.actions[381240] = {"id":381240,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871168,"website_id":26262,"element_id":2871168,"cta_id":104926,"data":null};
          website.actions[381241] = {"id":381241,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871169,"website_id":26262,"element_id":2871169,"cta_id":104926,"data":null};
          website.actions[381242] = {"id":381242,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871175,"website_id":26262,"element_id":2871175,"cta_id":104927,"data":null};
          website.actions[381243] = {"id":381243,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871176,"website_id":26262,"element_id":2871176,"cta_id":104927,"data":null};
          website.actions[381244] = {"id":381244,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871182,"website_id":26262,"element_id":2871182,"cta_id":104928,"data":null};
          website.actions[381245] = {"id":381245,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871183,"website_id":26262,"element_id":2871183,"cta_id":104928,"data":null};
          website.actions[381246] = {"id":381246,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871186,"website_id":26262,"element_id":2871186,"cta_id":104929,"data":null};
          website.actions[381247] = {"id":381247,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871188,"website_id":26262,"element_id":2871188,"cta_id":104929,"data":null};
          website.actions[381248] = {"id":381248,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871189,"website_id":26262,"element_id":2871189,"cta_id":104929,"data":null};
          website.actions[381249] = {"id":381249,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871195,"website_id":26262,"element_id":2871195,"cta_id":104930,"data":null};
          website.actions[381250] = {"id":381250,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871196,"website_id":26262,"element_id":2871196,"cta_id":104930,"data":null};
          website.actions[381263] = {"id":381263,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871226,"website_id":26262,"element_id":2871226,"cta_id":104932,"data":null};
          website.actions[381264] = {"id":381264,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871227,"website_id":26262,"element_id":2871227,"cta_id":104932,"data":null};
          website.actions[381265] = {"id":381265,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871233,"website_id":26262,"element_id":2871233,"cta_id":104933,"data":null};
          website.actions[381266] = {"id":381266,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871234,"website_id":26262,"element_id":2871234,"cta_id":104933,"data":null};
          website.actions[381267] = {"id":381267,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871237,"website_id":26262,"element_id":2871237,"cta_id":104934,"data":null};
          website.actions[381268] = {"id":381268,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871238,"website_id":26262,"element_id":2871238,"cta_id":104934,"data":null};
          website.actions[381269] = {"id":381269,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871244,"website_id":26262,"element_id":2871244,"cta_id":104935,"data":null};
          website.actions[381270] = {"id":381270,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871245,"website_id":26262,"element_id":2871245,"cta_id":104935,"data":null};
          website.actions[381271] = {"id":381271,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871248,"website_id":26262,"element_id":2871248,"cta_id":104936,"data":null};
          website.actions[381272] = {"id":381272,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871249,"website_id":26262,"element_id":2871249,"cta_id":104936,"data":null};
          website.actions[381273] = {"id":381273,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871255,"website_id":26262,"element_id":2871255,"cta_id":104937,"data":null};
          website.actions[381274] = {"id":381274,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871256,"website_id":26262,"element_id":2871256,"cta_id":104937,"data":null};
          website.actions[381275] = {"id":381275,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871262,"website_id":26262,"element_id":2871262,"cta_id":104938,"data":null};
          website.actions[381276] = {"id":381276,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871264,"website_id":26262,"element_id":2871264,"cta_id":104938,"data":null};
          website.actions[381277] = {"id":381277,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871265,"website_id":26262,"element_id":2871265,"cta_id":104938,"data":null};
          website.actions[381278] = {"id":381278,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871271,"website_id":26262,"element_id":2871271,"cta_id":104939,"data":null};
          website.actions[381279] = {"id":381279,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871273,"website_id":26262,"element_id":2871273,"cta_id":104939,"data":null};
          website.actions[381280] = {"id":381280,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":2871274,"website_id":26262,"element_id":2871274,"cta_id":104939,"data":null};
          website.actions[408781] = {"id":408781,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3185321,"website_id":26262,"element_id":3185321,"cta_id":115340,"data":null};
          website.actions[411538] = {"id":411538,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3218080,"website_id":26262,"element_id":3218080,"cta_id":116449,"data":null};
          website.actions[413705] = {"id":413705,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3243217,"website_id":26262,"element_id":3243217,"cta_id":117102,"data":null};
          website.actions[413712] = {"id":413712,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3243290,"website_id":26262,"element_id":3243290,"cta_id":117105,"data":null};
          website.actions[413713] = {"id":413713,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3243295,"website_id":26262,"element_id":3243295,"cta_id":117106,"data":null};
          website.actions[413714] = {"id":413714,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3243300,"website_id":26262,"element_id":3243300,"cta_id":117107,"data":null};
          website.actions[413924] = {"id":413924,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3246120,"website_id":26262,"element_id":3246120,"cta_id":117189,"data":null};
          website.actions[413925] = {"id":413925,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3246125,"website_id":26262,"element_id":3246125,"cta_id":117190,"data":null};
          website.actions[413926] = {"id":413926,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3246130,"website_id":26262,"element_id":3246130,"cta_id":117191,"data":null};
          website.actions[413927] = {"id":413927,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3246135,"website_id":26262,"element_id":3246135,"cta_id":117192,"data":null};
          website.actions[413928] = {"id":413928,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3246141,"website_id":26262,"element_id":3246141,"cta_id":117194,"data":null};
          website.actions[413931] = {"id":413931,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3246235,"website_id":26262,"element_id":3246235,"cta_id":117196,"data":null};
          website.actions[413933] = {"id":413933,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3246240,"website_id":26262,"element_id":3246240,"cta_id":117197,"data":null};
          website.actions[413934] = {"id":413934,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3246245,"website_id":26262,"element_id":3246245,"cta_id":117198,"data":null};
          website.actions[413935] = {"id":413935,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3246250,"website_id":26262,"element_id":3246250,"cta_id":117199,"data":null};
          website.actions[413936] = {"id":413936,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3246255,"website_id":26262,"element_id":3246255,"cta_id":117200,"data":null};
          website.actions[413937] = {"id":413937,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3246260,"website_id":26262,"element_id":3246260,"cta_id":117201,"data":null};
          website.actions[413938] = {"id":413938,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3246265,"website_id":26262,"element_id":3246265,"cta_id":117202,"data":null};
          website.actions[414485] = {"id":414485,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3255417,"website_id":26262,"element_id":3255417,"cta_id":117505,"data":null};
          website.actions[414487] = {"id":414487,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3255422,"website_id":26262,"element_id":3255422,"cta_id":117506,"data":null};
          website.actions[414488] = {"id":414488,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3255427,"website_id":26262,"element_id":3255427,"cta_id":117507,"data":null};
          website.actions[414489] = {"id":414489,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3255432,"website_id":26262,"element_id":3255432,"cta_id":117508,"data":null};
          website.actions[414490] = {"id":414490,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3255437,"website_id":26262,"element_id":3255437,"cta_id":117509,"data":null};
          website.actions[414491] = {"id":414491,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3255442,"website_id":26262,"element_id":3255442,"cta_id":117510,"data":null};
          website.actions[414493] = {"id":414493,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3255447,"website_id":26262,"element_id":3255447,"cta_id":117511,"data":null};
          website.actions[414494] = {"id":414494,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3255456,"website_id":26262,"element_id":3255456,"cta_id":117512,"data":null};
          website.actions[440009] = {"id":440009,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":3622556,"website_id":26262,"element_id":3622556,"cta_id":126365,"data":null};
          website.actions[469804] = {"id":469804,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4121530,"website_id":26262,"element_id":4121530,"cta_id":137297,"data":null};
          website.actions[469886] = {"id":469886,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4123510,"website_id":26262,"element_id":4123510,"cta_id":137358,"data":null};
          website.actions[471032] = {"id":471032,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4143775,"website_id":26262,"element_id":4143775,"cta_id":138056,"data":null};
          website.actions[471054] = {"id":471054,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4144116,"website_id":26262,"element_id":4144116,"cta_id":138066,"data":null};
          website.actions[471055] = {"id":471055,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4144123,"website_id":26262,"element_id":4144123,"cta_id":138067,"data":null};
          website.actions[471056] = {"id":471056,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4144130,"website_id":26262,"element_id":4144130,"cta_id":138068,"data":null};
          website.actions[471057] = {"id":471057,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4144137,"website_id":26262,"element_id":4144137,"cta_id":138069,"data":null};
          website.actions[471058] = {"id":471058,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4144155,"website_id":26262,"element_id":4144155,"cta_id":138071,"data":null};
          website.actions[471059] = {"id":471059,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4144162,"website_id":26262,"element_id":4144162,"cta_id":138072,"data":null};
          website.actions[471060] = {"id":471060,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4144168,"website_id":26262,"element_id":4144168,"cta_id":138073,"data":null};
          website.actions[471061] = {"id":471061,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4144174,"website_id":26262,"element_id":4144174,"cta_id":138074,"data":null};
          website.actions[471062] = {"id":471062,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4144180,"website_id":26262,"element_id":4144180,"cta_id":138075,"data":null};
          website.actions[471063] = {"id":471063,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4144222,"website_id":26262,"element_id":4144222,"cta_id":138082,"data":null};
          website.actions[471064] = {"id":471064,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4144228,"website_id":26262,"element_id":4144228,"cta_id":138083,"data":null};
          website.actions[471065] = {"id":471065,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4144234,"website_id":26262,"element_id":4144234,"cta_id":138084,"data":null};
          website.actions[474788] = {"id":474788,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4210129,"website_id":26262,"element_id":4210129,"cta_id":139939,"data":null};
          website.actions[475191] = {"id":475191,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4214263,"website_id":26262,"element_id":4214263,"cta_id":140104,"data":null};
          website.actions[475196] = {"id":475196,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4214412,"website_id":26262,"element_id":4214412,"cta_id":140112,"data":null};
          website.actions[475222] = {"id":475222,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4214658,"website_id":26262,"element_id":4214658,"cta_id":140119,"data":null};
          website.actions[475223] = {"id":475223,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4214664,"website_id":26262,"element_id":4214664,"cta_id":140120,"data":null};
          website.actions[475224] = {"id":475224,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4214670,"website_id":26262,"element_id":4214670,"cta_id":140121,"data":null};
          website.actions[475225] = {"id":475225,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4214676,"website_id":26262,"element_id":4214676,"cta_id":140122,"data":null};
          website.actions[475226] = {"id":475226,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4214682,"website_id":26262,"element_id":4214682,"cta_id":140123,"data":null};
          website.actions[475227] = {"id":475227,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4214688,"website_id":26262,"element_id":4214688,"cta_id":140124,"data":null};
          website.actions[475931] = {"id":475931,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4225069,"website_id":26262,"element_id":4225069,"cta_id":140398,"data":null};
          website.actions[475933] = {"id":475933,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4225111,"website_id":26262,"element_id":4225111,"cta_id":140400,"data":null};
          website.actions[475948] = {"id":475948,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4225162,"website_id":26262,"element_id":4225162,"cta_id":140404,"data":null};
          website.actions[475949] = {"id":475949,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4225168,"website_id":26262,"element_id":4225168,"cta_id":140405,"data":null};
          website.actions[478262] = {"id":478262,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4263351,"website_id":26262,"element_id":4263351,"cta_id":141244,"data":null};
          website.actions[484791] = {"id":484791,"action_type":"Track completion of campaign","tag_id":null,"contactable_type":"Element","contactable_id":4330658,"website_id":26262,"element_id":4330658,"cta_id":141851,"data":null};
          website.actions[484799] = {"id":484799,"action_type":"Track completion of campaign","tag_id":null,"contactable_type":"Element","contactable_id":4330909,"website_id":26262,"element_id":4330909,"cta_id":141851,"data":null};
          website.actions[486715] = {"id":486715,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4382810,"website_id":26262,"element_id":4382810,"cta_id":144050,"data":null};
          website.actions[486741] = {"id":486741,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4384332,"website_id":26262,"element_id":4384332,"cta_id":144050,"data":null};
          website.actions[486742] = {"id":486742,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4384333,"website_id":26262,"element_id":4384333,"cta_id":144050,"data":null};
          website.actions[487356] = {"id":487356,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4399496,"website_id":26262,"element_id":4399496,"cta_id":144368,"data":null};
          website.actions[487364] = {"id":487364,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4399766,"website_id":26262,"element_id":4399766,"cta_id":144377,"data":null};
          website.actions[487367] = {"id":487367,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4399848,"website_id":26262,"element_id":4399848,"cta_id":144382,"data":null};
          website.actions[499202] = {"id":499202,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":4604535,"website_id":26262,"element_id":4604535,"cta_id":148462,"data":null};
          website.actions[544833] = {"id":544833,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":5269808,"website_id":26262,"element_id":5269808,"cta_id":161713,"data":null};
          website.actions[552128] = {"id":552128,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":5307521,"website_id":26262,"element_id":5307521,"cta_id":162592,"data":null};
          website.actions[552129] = {"id":552129,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":5307525,"website_id":26262,"element_id":5307525,"cta_id":162593,"data":null};
          website.actions[552130] = {"id":552130,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":5307529,"website_id":26262,"element_id":5307529,"cta_id":162594,"data":null};
          website.actions[602118] = {"id":602118,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":5734771,"website_id":26262,"element_id":5734771,"cta_id":170369,"data":null};
          website.actions[651129] = {"id":651129,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":6485138,"website_id":26262,"element_id":6485138,"cta_id":179508,"data":null};
          website.actions[652508] = {"id":652508,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":6528386,"website_id":26262,"element_id":6528386,"cta_id":180107,"data":null};
          website.actions[652975] = {"id":652975,"action_type":"Track completion of CTA","tag_id":null,"contactable_type":"Element","contactable_id":6542238,"website_id":26262,"element_id":6542238,"cta_id":180286,"data":null};


          var cta = {"id":104929,"name":"VUM21_EMEA_Ask_IsoSeq","options":{"published_at":"2021-11-09T03:48:59+00:00"},"cta_type":"hook"};
          website.ctas[104929] = cta;
          var cta = {"id":89352,"name":"2021-SMRT-Leiden-1","options":{"published_at":"2021-06-01T21:14:40+00:00"},"cta_type":"hook"};
          website.ctas[89352] = cta;
          var cta = {"id":115340,"name":"Melissa HiFiViral","options":{"published_at":"2022-03-09T07:59:07+00:00"},"cta_type":"hook"};
          website.ctas[115340] = cta;
          var cta = {"id":90864,"name":"2021-06-Webinar-Sequel-IIe-Rebroadcast-2","options":{"published_at":"2021-06-18T16:12:05+00:00"},"cta_type":"hook"};
          website.ctas[90864] = cta;
          var cta = {"id":89518,"name":"2021-05-SMRT-Grant-Clinical-4","options":{"published_at":"2021-06-16T20:50:16+00:00"},"cta_type":"bar"};
          website.ctas[89518] = cta;
          var cta = {"id":104902,"name":"VUM21_APAC_Human_Learned","options":{"published_at":"2021-11-09T02:50:15+00:00"},"cta_type":"hook"};
          website.ctas[104902] = cta;
          var cta = {"id":103495,"name":"2021-Book-a-Meeting-Website-Popups-Switzerland","options":{"published_at":"2021-10-21T18:42:48+00:00"},"cta_type":"hook"};
          website.ctas[103495] = cta;
          var cta = {"id":104904,"name":"VUM21_EMEA_Human_Learned","options":{"published_at":"2021-11-09T02:49:58+00:00"},"cta_type":"hook"};
          website.ctas[104904] = cta;
          var cta = {"id":117507,"name":"2022-Roadshow-Popup1-Wisconsin","options":{"published_at":"2022-04-06T14:11:20+00:00"},"cta_type":"overlay"};
          website.ctas[117507] = cta;
          var cta = {"id":103496,"name":"2021-Book-a-Meeting-Website-Popups-Netherlands","options":{"published_at":"2021-10-21T18:52:18+00:00"},"cta_type":"hook"};
          website.ctas[103496] = cta;
          var cta = {"id":103485,"name":"2021-Book-a-Meeting-Website-Popups-Germany","options":{"published_at":"2021-10-21T18:30:57+00:00"},"cta_type":"hook"};
          website.ctas[103485] = cta;
          var cta = {"id":103487,"name":"2021-Book-a-Meeting-Website-Popups-UK","options":{"published_at":"2021-10-21T18:14:48+00:00"},"cta_type":"hook"};
          website.ctas[103487] = cta;
          var cta = {"id":104905,"name":"VUM21_AMR_Human_Learned","options":{"published_at":"2021-11-09T02:50:56+00:00"},"cta_type":"hook"};
          website.ctas[104905] = cta;
          var cta = {"id":103486,"name":"2021-Book-a-Meeting-Website-Popups-Canada","options":{"published_at":"2021-10-21T18:22:42+00:00"},"cta_type":"hook"};
          website.ctas[103486] = cta;
          var cta = {"id":89516,"name":"2021-05-SMRT-Grant-Clinical-3","options":{"published_at":"2021-06-02T16:20:10+00:00"},"cta_type":"overlay"};
          website.ctas[89516] = cta;
          var cta = {"id":103497,"name":"2021-Book-a-Meeting-Website-Popups-Belgium","options":{"published_at":"2021-10-22T01:50:21+00:00"},"cta_type":"hook"};
          website.ctas[103497] = cta;
          var cta = {"id":104932,"name":"VUM21_AMR_PAS_Learned","options":{"published_at":"2021-11-09T03:54:53+00:00"},"cta_type":"hook"};
          website.ctas[104932] = cta;
          var cta = {"id":104906,"name":"VUM21_APAC_Ask_Circulomics","options":{"published_at":"2021-11-09T02:51:48+00:00"},"cta_type":"hook"};
          website.ctas[104906] = cta;
          var cta = {"id":117508,"name":"2022-Roadshow-Popup1-Indiana","options":{"published_at":"2022-04-06T14:14:00+00:00"},"cta_type":"overlay"};
          website.ctas[117508] = cta;
          var cta = {"id":103498,"name":"2021-Book-a-Meeting-Website-Popups-Luxembourg","options":{"published_at":"2021-10-22T02:52:03+00:00"},"cta_type":"hook"};
          website.ctas[103498] = cta;
          var cta = {"id":104933,"name":"VUM21_AMR_PAS_Q\u0026A","options":{"published_at":"2021-11-09T03:53:47+00:00"},"cta_type":"hook"};
          website.ctas[104933] = cta;
          var cta = {"id":104907,"name":"VUM21_APAC_Ask_Metagenomics","options":{"published_at":"2021-11-09T02:52:29+00:00"},"cta_type":"hook"};
          website.ctas[104907] = cta;
          var cta = {"id":117506,"name":"2022-Roadshow-Popup1-Kentucky","options":{"published_at":"2022-04-06T14:05:10+00:00"},"cta_type":"overlay"};
          website.ctas[117506] = cta;
          var cta = {"id":104908,"name":"VUM21_APAC_Ask_HiFiViral","options":{"published_at":"2021-11-09T03:05:29+00:00"},"cta_type":"hook"};
          website.ctas[104908] = cta;
          var cta = {"id":103499,"name":"2021-Book-a-Meeting-Website-Popups-Austria","options":{"published_at":"2021-10-22T02:57:13+00:00"},"cta_type":"hook"};
          website.ctas[103499] = cta;
          var cta = {"id":104934,"name":"VUM21_AMR_IDM_Learned","options":{"published_at":"2021-11-09T03:56:39+00:00"},"cta_type":"hook"};
          website.ctas[104934] = cta;
          var cta = {"id":103500,"name":"2021-Book-a-Meeting-Website-Popups-Ireland","options":{"published_at":"2021-10-22T03:02:33+00:00"},"cta_type":"hook"};
          website.ctas[103500] = cta;
          var cta = {"id":104910,"name":"VUM21_APAC_Ask_IsoSeq","options":{"published_at":"2021-11-09T03:04:53+00:00"},"cta_type":"hook"};
          website.ctas[104910] = cta;
          var cta = {"id":104935,"name":"VUM21_AMR_IDM_Q\u0026A","options":{"published_at":"2021-11-09T03:57:31+00:00"},"cta_type":"hook"};
          website.ctas[104935] = cta;
          var cta = {"id":117191,"name":"2022-Roadshow-Popup1-NewYork","options":{"published_at":"2022-04-01T05:58:02+00:00"},"cta_type":"overlay"};
          website.ctas[117191] = cta;
          var cta = {"id":117190,"name":"2022-Roadshow-Popup1-Massachusetts","options":{"published_at":"2022-04-01T05:55:06+00:00"},"cta_type":"overlay"};
          website.ctas[117190] = cta;
          var cta = {"id":140122,"name":"2023 Roadshow - Sweden","options":{"published_at":"2023-02-23T23:45:50+00:00"},"cta_type":"overlay"};
          website.ctas[140122] = cta;
          var cta = {"id":117510,"name":"2022-Roadshow-Popup1-Delaware","options":{"published_at":"2022-04-06T14:19:30+00:00"},"cta_type":"overlay"};
          website.ctas[117510] = cta;
          var cta = {"id":104911,"name":"VUM21_APAC_IDM_Learned","options":{"published_at":"2021-11-09T03:07:03+00:00"},"cta_type":"hook"};
          website.ctas[104911] = cta;
          var cta = {"id":117189,"name":"2022-Roadshow-Popup1-Pennsylvania","options":{"published_at":"2022-04-01T05:56:44+00:00"},"cta_type":"overlay"};
          website.ctas[117189] = cta;
          var cta = {"id":104936,"name":"VUM21_AMR_Ask_COVID","options":{"published_at":"2021-11-09T03:59:06+00:00"},"cta_type":"hook"};
          website.ctas[104936] = cta;
          var cta = {"id":104930,"name":"VUM21_AMR_Keynote","options":{"published_at":"2021-11-09T03:50:46+00:00"},"cta_type":"hook"};
          website.ctas[104930] = cta;
          var cta = {"id":104937,"name":"VUM21_AMR_Ask_Circulomics","options":{"published_at":"2021-11-09T04:01:14+00:00"},"cta_type":"hook"};
          website.ctas[104937] = cta;
          var cta = {"id":117105,"name":"2022-Roadshow-Popup1-UK","options":{"published_at":"2022-03-31T08:03:46+00:00"},"cta_type":"overlay"};
          website.ctas[117105] = cta;
          var cta = {"id":90073,"name":"2021-06-SMRT-Grant-HiFi-For-Accuracy-1","options":{"published_at":"2021-06-12T01:37:00+00:00"},"cta_type":"overlay"};
          website.ctas[90073] = cta;
          var cta = {"id":104912,"name":"VUM21_APAC_IDM_Q\u0026A","options":{"published_at":"2021-11-09T03:13:31+00:00"},"cta_type":"hook"};
          website.ctas[104912] = cta;
          var cta = {"id":117511,"name":"2022-Roadshow-Popup1-NewHampshire","options":{"published_at":"2022-04-06T14:22:16+00:00"},"cta_type":"overlay"};
          website.ctas[117511] = cta;
          var cta = {"id":90183,"name":"2021-06-Webinar-Sequel-IIe-Rebroadcast-1","options":{"published_at":"2021-06-17T07:08:38+00:00"},"cta_type":"overlay"};
          website.ctas[90183] = cta;
          var cta = {"id":117512,"name":"2022-Roadshow-Popup1-RhodeIsland","options":{"published_at":"2022-04-28T13:18:34+00:00"},"cta_type":"overlay"};
          website.ctas[117512] = cta;
          var cta = {"id":104913,"name":"VUM21_APAC_Human_Q\u0026A","options":{"published_at":"2021-11-09T03:13:51+00:00"},"cta_type":"hook"};
          website.ctas[104913] = cta;
          var cta = {"id":104938,"name":"VUM21_AMR_Ask_Metagenomics","options":{"published_at":"2021-11-09T04:02:58+00:00"},"cta_type":"hook"};
          website.ctas[104938] = cta;
          var cta = {"id":104914,"name":"VUM21_APAC_Kickoff","options":{"published_at":"2021-11-09T03:16:43+00:00"},"cta_type":"hook"};
          website.ctas[104914] = cta;
          var cta = {"id":103492,"name":"2021-Book-a-Meeting-Website-Popups-France","options":{"published_at":"2021-10-21T18:36:44+00:00"},"cta_type":"hook"};
          website.ctas[103492] = cta;
          var cta = {"id":104939,"name":"VUM21_AMR_Ask_IsoSeq","options":{"published_at":"2021-11-09T04:04:29+00:00"},"cta_type":"hook"};
          website.ctas[104939] = cta;
          var cta = {"id":140120,"name":"2023 Roadshow - Belgium","options":{"published_at":"2023-02-23T23:41:26+00:00"},"cta_type":"overlay"};
          website.ctas[140120] = cta;
          var cta = {"id":117107,"name":"2022-Roadshow-Popup1-Switzerland","options":{"published_at":"2022-03-31T08:07:59+00:00"},"cta_type":"overlay"};
          website.ctas[117107] = cta;
          var cta = {"id":104915,"name":"VUM21_APAC_Keynote","options":{"published_at":"2021-11-09T03:18:55+00:00"},"cta_type":"hook"};
          website.ctas[104915] = cta;
          var cta = {"id":88961,"name":"2021-05-SMRT-Grant-Clinical-1","options":{"published_at":"2021-06-02T07:43:35+00:00"},"cta_type":"overlay"};
          website.ctas[88961] = cta;
          var cta = {"id":117196,"name":"2022-Roadshow-Popup1-Maryland","options":{"published_at":"2022-04-01T06:05:08+00:00"},"cta_type":"overlay"};
          website.ctas[117196] = cta;
          var cta = {"id":99067,"name":"2021-Book-a-Meeting-Website-Popups-USA","options":{"published_at":"2021-10-20T06:21:09+00:00"},"cta_type":"hook"};
          website.ctas[99067] = cta;
          var cta = {"id":104916,"name":"VUM21_APAC_PAS_Q\u0026A","options":{"published_at":"2021-11-09T03:20:40+00:00"},"cta_type":"hook"};
          website.ctas[104916] = cta;
          var cta = {"id":117197,"name":"2022-Roadshow-Popup1-Texas","options":{"published_at":"2022-04-01T06:07:10+00:00"},"cta_type":"overlay"};
          website.ctas[117197] = cta;
          var cta = {"id":104917,"name":"VUM21_APAC_PAS_Learned","options":{"published_at":"2021-11-09T03:22:27+00:00"},"cta_type":"hook"};
          website.ctas[104917] = cta;
          var cta = {"id":88604,"name":"2021-05-SMRT-Grant-Clinical-2","options":{"published_at":"2021-06-02T16:01:28+00:00"},"cta_type":"hook"};
          website.ctas[88604] = cta;
          var cta = {"id":117198,"name":"2022-Roadshow-Popup1-Utah","options":{"published_at":"2022-04-01T06:08:57+00:00"},"cta_type":"overlay"};
          website.ctas[117198] = cta;
          var cta = {"id":117509,"name":"2022-Roadshow-Popup1-Michigan","options":{"published_at":"2022-04-06T14:15:57+00:00"},"cta_type":"overlay"};
          website.ctas[117509] = cta;
          var cta = {"id":97833,"name":"2021-08-SMRT-Grant-Plant-Animal-Sciences-Popup1","options":{"published_at":"2021-09-30T01:12:47+00:00"},"cta_type":"hook"};
          website.ctas[97833] = cta;
          var cta = {"id":104918,"name":"VUM21_EMEA_Kickoff","options":{"published_at":"2021-11-09T03:25:46+00:00"},"cta_type":"hook"};
          website.ctas[104918] = cta;
          var cta = {"id":140121,"name":"2023 Roadshow - Netherlands","options":{"published_at":"2023-02-23T23:43:53+00:00"},"cta_type":"overlay"};
          website.ctas[140121] = cta;
          var cta = {"id":117505,"name":"2022-Roadshow-Popup1-NewJersey","options":{"published_at":"2022-04-06T14:02:45+00:00"},"cta_type":"overlay"};
          website.ctas[117505] = cta;
          var cta = {"id":117199,"name":"2022-Roadshow-Popup1-Washington","options":{"published_at":"2022-04-01T06:10:41+00:00"},"cta_type":"overlay"};
          website.ctas[117199] = cta;
          var cta = {"id":104919,"name":"VUM21_AMR_Kickoff","options":{"published_at":"2021-11-09T03:31:32+00:00"},"cta_type":"hook"};
          website.ctas[104919] = cta;
          var cta = {"id":117200,"name":"2022-Roadshow-Popup1-France","options":{"published_at":"2022-04-01T06:12:20+00:00"},"cta_type":"overlay"};
          website.ctas[117200] = cta;
          var cta = {"id":117201,"name":"2022-Roadshow-Popup1-Spain","options":{"published_at":"2022-04-01T06:14:46+00:00"},"cta_type":"overlay"};
          website.ctas[117201] = cta;
          var cta = {"id":104920,"name":"VUM21_EMEA_Keynote","options":{"published_at":"2021-11-09T03:33:29+00:00"},"cta_type":"hook"};
          website.ctas[104920] = cta;
          var cta = {"id":95117,"name":"2021 Microbio Webinar Series + SMRT Grant","options":{"published_at":"2021-08-11T06:56:33+00:00"},"cta_type":"overlay"};
          website.ctas[95117] = cta;
          var cta = {"id":117202,"name":"2022-Roadshow-Popup1-Netherlands","options":{"published_at":"2022-04-01T06:16:35+00:00"},"cta_type":"overlay"};
          website.ctas[117202] = cta;
          var cta = {"id":104921,"name":"VUM21_EMEA_Human_Q\u0026A","options":{"published_at":"2021-11-09T03:35:07+00:00"},"cta_type":"hook"};
          website.ctas[104921] = cta;
          var cta = {"id":104922,"name":"VUM21_AMR_Human_Q\u0026A","options":{"published_at":"2021-11-09T03:36:12+00:00"},"cta_type":"hook"};
          website.ctas[104922] = cta;
          var cta = {"id":117106,"name":"2022-Roadshow-Popup1-Germany","options":{"published_at":"2022-04-01T06:19:23+00:00"},"cta_type":"overlay"};
          website.ctas[117106] = cta;
          var cta = {"id":104924,"name":"VUM21_EMEA_PAS_Learned","options":{"published_at":"2021-11-09T03:41:09+00:00"},"cta_type":"hook"};
          website.ctas[104924] = cta;
          var cta = {"id":95713,"name":"2021-07-SMRT-Grant-Microbial-Popup1","options":{"published_at":"2021-09-30T01:11:15+00:00"},"cta_type":"bar"};
          website.ctas[95713] = cta;
          var cta = {"id":104925,"name":"VUM21_EMEA_PAS_Q\u0026A","options":{"published_at":"2021-11-09T03:41:33+00:00"},"cta_type":"hook"};
          website.ctas[104925] = cta;
          var cta = {"id":98079,"name":"2021-08-SMRT-Grant-Plant-Animal-Sciences-Popup2","options":{"published_at":"2021-09-30T01:13:30+00:00"},"cta_type":"bar"};
          website.ctas[98079] = cta;
          var cta = {"id":104926,"name":"VUM21_EMEA_Ask_Circulomics","options":{"published_at":"2021-11-09T03:44:10+00:00"},"cta_type":"hook"};
          website.ctas[104926] = cta;
          var cta = {"id":104927,"name":"VUM21_EMEA_IDM_Learned","options":{"published_at":"2021-11-09T03:46:30+00:00"},"cta_type":"hook"};
          website.ctas[104927] = cta;
          var cta = {"id":117102,"name":"2022-Roadshow-Popup1-California","options":{"published_at":"2022-03-31T07:28:19+00:00"},"cta_type":"overlay"};
          website.ctas[117102] = cta;
          var cta = {"id":104928,"name":"VUM21_EMEA_IDM_Q\u0026A","options":{"published_at":"2021-11-09T03:47:14+00:00"},"cta_type":"hook"};
          website.ctas[104928] = cta;
          var cta = {"id":90768,"name":"2021-06-SMRT-Grant-HiFi-For-Accuracy-2","options":{"published_at":"2021-06-17T07:18:27+00:00"},"cta_type":"bar"};
          website.ctas[90768] = cta;
          var cta = {"id":141244,"name":"2023 Roadshow - Berkeley/LA - Exit Intent","options":{"published_at":"2023-03-15T05:13:25+00:00"},"cta_type":"overlay"};
          website.ctas[141244] = cta;
          var cta = {"id":117194,"name":"2022-Roadshow-Popup1-North Carolina","options":{"published_at":"2022-04-01T06:03:07+00:00"},"cta_type":"overlay"};
          website.ctas[117194] = cta;
          var cta = {"id":140119,"name":"2023 Roadshow - France","options":{"published_at":"2023-02-23T23:39:02+00:00"},"cta_type":"overlay"};
          website.ctas[140119] = cta;
          var cta = {"id":99043,"name":"2021-10-ASHG-Workshop-Popup1","options":{"published_at":"2021-10-13T07:26:45+00:00"},"cta_type":"hook"};
          website.ctas[99043] = cta;
          var cta = {"id":140123,"name":"2023 Roadshow - Denmark","options":{"published_at":"2023-02-23T23:48:10+00:00"},"cta_type":"overlay"};
          website.ctas[140123] = cta;
          var cta = {"id":140124,"name":"2023 Roadshow - Norway","options":{"published_at":"2023-02-23T23:50:23+00:00"},"cta_type":"overlay"};
          website.ctas[140124] = cta;
          var cta = {"id":144050,"name":"2023 HiFi Experience Tour - Japan","options":{"published_at":"2023-04-21T21:25:46+00:00"},"cta_type":"overlay"};
          website.ctas[144050] = cta;
          var cta = {"id":126365,"name":"2022-08-AMER-Event-Iso-Seq-Social-Club","options":{"published_at":"2022-08-16T17:11:05+00:00"},"cta_type":"overlay"};
          website.ctas[126365] = cta;
          var cta = {"id":99019,"name":"2021-11-Virtual-User-Meeting-Popup1","options":{"published_at":"2021-11-09T03:30:08+00:00"},"cta_type":"overlay"};
          website.ctas[99019] = cta;
          var cta = {"id":140398,"name":"2023 Roadshow - Pennsylvania","options":{"published_at":"2023-02-28T23:19:59+00:00"},"cta_type":"overlay"};
          website.ctas[140398] = cta;
          var cta = {"id":117192,"name":"2022-Roadshow-Popup1-Ohio","options":{"published_at":"2022-04-01T06:00:21+00:00"},"cta_type":"overlay"};
          website.ctas[117192] = cta;
          var cta = {"id":132516,"name":"2022-11-New-Packaging","options":{"published_at":"2022-11-03T23:52:36+00:00"},"cta_type":"bar"};
          website.ctas[132516] = cta;
          var cta = {"id":116449,"name":"2022-Roadshow-Popup1-Illinois","options":{"published_at":"2022-03-31T07:21:26+00:00"},"cta_type":"overlay"};
          website.ctas[116449] = cta;
          var cta = {"id":139939,"name":"2023 Roadshow - UK","options":{"published_at":"2023-02-23T16:47:41+00:00"},"cta_type":"overlay"};
          website.ctas[139939] = cta;
          var cta = {"id":140400,"name":"2023 Roadshow - Delaware","options":{"published_at":"2023-02-28T23:20:24+00:00"},"cta_type":"overlay"};
          website.ctas[140400] = cta;
          var cta = {"id":140104,"name":"2023 Roadshow - Switzerland","options":{"published_at":"2023-02-23T18:21:56+00:00"},"cta_type":"overlay"};
          website.ctas[140104] = cta;
          var cta = {"id":140404,"name":"2023 Roadshow - Minnesota","options":{"published_at":"2023-02-28T23:31:12+00:00"},"cta_type":"overlay"};
          website.ctas[140404] = cta;
          var cta = {"id":140112,"name":"2023 Roadshow - Germany","options":{"published_at":"2023-04-28T08:40:59+00:00"},"cta_type":"overlay"};
          website.ctas[140112] = cta;
          var cta = {"id":140405,"name":"2023 Roadshow - Nebraska","options":{"published_at":"2023-02-28T23:39:11+00:00"},"cta_type":"overlay"};
          website.ctas[140405] = cta;
          var cta = {"id":140410,"name":"2023 Roadshow - Iowa","options":{"published_at":"2023-02-28T23:42:38+00:00"},"cta_type":"overlay"};
          website.ctas[140410] = cta;
          var cta = {"id":138056,"name":"2023 Roadshow - California - Exit Intent","options":{"published_at":"2023-03-01T21:03:54+00:00"},"cta_type":"overlay"};
          website.ctas[138056] = cta;
          var cta = {"id":140464,"name":"2023 Roadshow - California - SF Aggressive","options":{"published_at":"2023-03-01T21:20:35+00:00"},"cta_type":"overlay"};
          website.ctas[140464] = cta;
          var cta = {"id":138066,"name":"2023 Roadshow - North Carolina","options":{"published_at":"2023-01-25T01:07:59+00:00"},"cta_type":"overlay"};
          website.ctas[138066] = cta;
          var cta = {"id":140409,"name":"2023 Roadshow - Wisconsin","options":{"published_at":"2023-02-28T23:41:14+00:00"},"cta_type":"overlay"};
          website.ctas[140409] = cta;
          var cta = {"id":138067,"name":"2023 Roadshow - Canada","options":{"published_at":"2023-01-25T01:19:14+00:00"},"cta_type":"overlay"};
          website.ctas[138067] = cta;
          var cta = {"id":144368,"name":"2023 HiFi Experience Tour - NZ","options":{"published_at":"2023-06-22T18:39:43+00:00"},"cta_type":"overlay"};
          website.ctas[144368] = cta;
          var cta = {"id":138068,"name":"2023 Roadshow - New York","options":{"published_at":"2023-01-25T01:27:01+00:00"},"cta_type":"overlay"};
          website.ctas[138068] = cta;
          var cta = {"id":137358,"name":"2023 Roadshow - Brazil","options":{"published_at":"2023-01-25T01:13:30+00:00"},"cta_type":"overlay"};
          website.ctas[137358] = cta;
          var cta = {"id":144377,"name":"2023 HiFi Experience Tour - Taiwan","options":{"published_at":"2023-04-26T20:10:01+00:00"},"cta_type":"overlay"};
          website.ctas[144377] = cta;
          var cta = {"id":138069,"name":"2023 Roadshow - New Jersey","options":{"published_at":"2023-01-25T01:28:52+00:00"},"cta_type":"overlay"};
          website.ctas[138069] = cta;
          var cta = {"id":137297,"name":"2023 Roadshow - Texas","options":{"published_at":"2023-01-25T01:34:53+00:00"},"cta_type":"overlay"};
          website.ctas[137297] = cta;
          var cta = {"id":144382,"name":"2023 HiFi Experience Tour - Singapore","options":{"published_at":"2023-04-26T20:13:37+00:00"},"cta_type":"overlay"};
          website.ctas[144382] = cta;
          var cta = {"id":138071,"name":"2023 Roadshow - Louisiana","options":{"published_at":"2023-01-25T01:35:14+00:00"},"cta_type":"overlay"};
          website.ctas[138071] = cta;
          var cta = {"id":138072,"name":"2023 Roadshow - Oklahoma","options":{"published_at":"2023-01-25T01:37:23+00:00"},"cta_type":"overlay"};
          website.ctas[138072] = cta;
          var cta = {"id":138073,"name":"2023 Roadshow - Massachusetts","options":{"published_at":"2023-01-25T01:48:13+00:00"},"cta_type":"overlay"};
          website.ctas[138073] = cta;
          var cta = {"id":138074,"name":"2023 Roadshow - Maryland","options":{"published_at":"2023-01-25T01:53:42+00:00"},"cta_type":"overlay"};
          website.ctas[138074] = cta;
          var cta = {"id":138075,"name":"2023 Roadshow - Washington","options":{"published_at":"2023-01-25T02:11:30+00:00"},"cta_type":"overlay"};
          website.ctas[138075] = cta;
          var cta = {"id":138077,"name":"2023 Roadshow - Colorado","options":{"published_at":"2023-01-25T01:59:19+00:00"},"cta_type":"overlay"};
          website.ctas[138077] = cta;
          var cta = {"id":148462,"name":"2023 HiFi Experience Tour - Australia","options":{"published_at":"2023-07-01T17:29:34+00:00"},"cta_type":"overlay"};
          website.ctas[148462] = cta;
          var cta = {"id":138078,"name":"2023 Roadshow - Utah","options":{"published_at":"2023-01-25T02:00:12+00:00"},"cta_type":"overlay"};
          website.ctas[138078] = cta;
          var cta = {"id":138079,"name":"2023 Roadshow - Oregon","options":{"published_at":"2023-01-25T02:02:26+00:00"},"cta_type":"overlay"};
          website.ctas[138079] = cta;
          var cta = {"id":141851,"name":"2023-04-HT-Nanobind-Kit","options":{"published_at":"2023-04-06T23:24:08+00:00"},"cta_type":"bar"};
          website.ctas[141851] = cta;
          var cta = {"id":142113,"name":"2023-03-PAS-HT-Workflow","options":{"published_at":"2023-03-27T22:31:10+00:00"},"cta_type":"bar"};
          website.ctas[142113] = cta;
          var cta = {"id":138080,"name":"2023 Roadshow - Illinois","options":{"published_at":"2023-01-25T02:03:31+00:00"},"cta_type":"overlay"};
          website.ctas[138080] = cta;
          var cta = {"id":138082,"name":"2023 Roadshow - Virginia","options":{"published_at":"2023-01-25T02:21:55+00:00"},"cta_type":"overlay"};
          website.ctas[138082] = cta;
          var cta = {"id":138083,"name":"2023 Roadshow - District of Columbia","options":{"published_at":"2023-01-25T02:23:51+00:00"},"cta_type":"overlay"};
          website.ctas[138083] = cta;
          var cta = {"id":138084,"name":"2023 Roadshow - Connecticut","options":{"published_at":"2023-01-25T02:25:22+00:00"},"cta_type":"overlay"};
          website.ctas[138084] = cta;
          var cta = {"id":169943,"name":"2024-08-Cancer-Pathfinder","options":{"published_at":"2024-07-30T21:26:48+00:00"},"cta_type":"hook"};
          website.ctas[169943] = cta;
          var cta = {"id":151171,"name":"2023-Onso-Now-Shipping","options":{"published_at":"2023-08-23T16:41:10+00:00"},"cta_type":"hook"};
          website.ctas[151171] = cta;
          var cta = {"id":170369,"name":"2024-09-AMER-Event-NY-Seminar","options":{"published_at":"2024-08-16T19:36:41+00:00"},"cta_type":"overlay"};
          website.ctas[170369] = cta;
          var cta = {"id":168329,"name":"2024-03-Promo-Run-Revio-Popup (copy)","options":{"published_at":"2024-06-28T00:38:14+00:00"},"cta_type":"hook"};
          website.ctas[168329] = cta;
          var cta = {"id":161713,"name":"2024 PRISM - Houston","options":{"published_at":"2024-03-26T00:31:21+00:00"},"cta_type":"overlay"};
          website.ctas[161713] = cta;
          var cta = {"id":162592,"name":"2024 PRISM - San Francisco","options":{"published_at":"2024-03-26T00:14:40+00:00"},"cta_type":"overlay"};
          website.ctas[162592] = cta;
          var cta = {"id":162593,"name":"2024 PRISM - Boston","options":{"published_at":"2024-03-26T00:31:58+00:00"},"cta_type":"overlay"};
          website.ctas[162593] = cta;
          var cta = {"id":179508,"name":"2025 PRISM - SF/Boston","options":{"published_at":"2025-02-28T20:31:21+00:00"},"cta_type":"overlay"};
          website.ctas[179508] = cta;
          var cta = {"id":162594,"name":"2024 PRISM - Bethesda","options":{"published_at":"2024-03-14T23:43:04+00:00"},"cta_type":"overlay"};
          website.ctas[162594] = cta;
          var cta = {"id":180107,"name":"2025 PRISM - Danang, Vietnam","options":{"published_at":"2025-03-12T19:52:59+00:00"},"cta_type":"overlay"};
          website.ctas[180107] = cta;
          var cta = {"id":180286,"name":"2025 PRISM - Athens, Greece","options":{"published_at":"2025-03-17T17:34:37+00:00"},"cta_type":"overlay"};
          website.ctas[180286] = cta;
          var cta = {"id":161711,"name":"2024-03-Promo-Run-Revio-Popup","options":{"published_at":"2024-02-28T20:45:58+00:00"},"cta_type":"hook"};
          website.ctas[161711] = cta;
          var cta = {"id":155298,"name":"2023-11-Kinnex-Launch-Popup","options":{"published_at":"2023-12-12T18:21:32+00:00"},"cta_type":"hook"};
          website.ctas[155298] = cta;
          var cta = {"id":157803,"name":"2023-12-Blog-Subscribe-Popup","options":{"published_at":"2023-12-12T18:17:02+00:00"},"cta_type":"hook"};
          website.ctas[157803] = cta;


          website.conditions[254303] = {"condition_type":"If URL contains","url":"","tag_id":null,"keyword":"pacb.com","count":0,"data_name":null,"area_id":null,"cta_id":null,"data":{"device":"desktop"},"operator":"or","condition_cta":0,"country":""};

          var broadcast = {"id":92594,"name":"2023-Onso-Now-Shipping (copy) (copy)","quick":true,"timezone":null,"range_start":null,"range_end":null,"timeframe":false};
          broadcast.conditions = {};
          broadcast.ctas = [157803];

            broadcast.conditions[446085] = {"condition_type":"If URL contains","url":null,"tag_id":null,"keyword":"pacb.com/blog/","count":0,"data_name":null,"area_id":null,"cta_id":null,"data":null,"operator":"or","condition_cta":0,"country":null};

          website.broadcasts[92594] = broadcast;
          var broadcast = {"id":91181,"name":"2023-Onso-Now-Shipping (copy)","quick":true,"timezone":null,"range_start":null,"range_end":null,"timeframe":false};
          broadcast.conditions = {};
          broadcast.ctas = [155298];

            broadcast.conditions[437689] = {"condition_type":"If page is","url":"https://www.pacb.com/research-focus/microbiology/discovery-microbiology/","tag_id":null,"keyword":null,"count":0,"data_name":null,"area_id":null,"cta_id":null,"data":null,"operator":"or","condition_cta":0,"country":null};
            broadcast.conditions[437688] = {"condition_type":"If URL contains","url":null,"tag_id":null,"keyword":"/plant-animal-sciences/","count":0,"data_name":null,"area_id":null,"cta_id":null,"data":null,"operator":"or","condition_cta":0,"country":null};
            broadcast.conditions[437687] = {"condition_type":"If page is","url":"https://www.pacb.com/products-and-services/applications/rna-sequencing/human/","tag_id":null,"keyword":null,"count":0,"data_name":null,"area_id":null,"cta_id":null,"data":null,"operator":"or","condition_cta":0,"country":null};
            broadcast.conditions[437686] = {"condition_type":"If page is","url":"https://www.pacb.com/products-and-services/applications/","tag_id":null,"keyword":null,"count":0,"data_name":null,"area_id":null,"cta_id":null,"data":null,"operator":"or","condition_cta":0,"country":null};

          website.broadcasts[91181] = broadcast;
          var broadcast = {"id":69182,"name":"Melissa HiFiViral","quick":true,"timezone":null,"range_start":null,"range_end":null,"timeframe":false};
          broadcast.conditions = {};
          broadcast.ctas = [115340];

            broadcast.conditions[329189] = {"condition_type":"If URL contains","url":null,"tag_id":null,"keyword":"zuhayr-test","count":0,"data_name":null,"area_id":null,"cta_id":null,"data":null,"operator":"or","condition_cta":0,"country":null};

          website.broadcasts[69182] = broadcast;


      app.website = website;
      return app;
    }
    var app = defineApp();



    // with app defined and state set, 
    // define the functions of the app, 
    // organized into namespaces
 

    app.actions.groupSameActionTypes = function(actions, only_types = []) {
  return Object.values(actions).reduce((acc, action) => {
    if (only_types.includes(action.action_type)) {
      if (acc[action.action_type]) {
        acc[action.action_type].actions.push(action);
      } else {
        acc[action.action_type] = {
          action_type: action.action_type,
          actions: [action]
        };
      }
    } else {
      acc[action.id] = action;
    }

    return acc;
  }, {});
};

app.actions.mapEventToActions = function(event) {

	var eventTypes = {
    'Complete': ['element_id'],
    'Completion': ['broadcast_id']
  }

  var foreign_keys = eventTypes[event.event_type];

  if (foreign_keys) {
    foreign_keys.forEach(function(foreign_key) {
      if (event[foreign_key]) {
        var contactable_type = foreign_key.replace('_id', '');
        var actions = $cf.map(app.website.actions, function(action) {if (action.contactable_type.toLowerCase() == contactable_type && action.contactable_id == event[foreign_key]) return action});
        let actionsToRun = app.actions.groupSameActionTypes(actions, ['Shopify - Add to cart']);

        Object.values(actionsToRun).forEach(function(action) {
          app.actions.run(action, event);
        });
      }
    })
  }
}


app.actions.run = function(action, event) {

	var integration_type;
	if (action.action_type.indexOf(' - ') > 0) {
		var integration_type = action.action_type.split(' - ')[0];
	}
		
	// convertflow automations
	if (!integration_type) {
		
		if (action.action_type == 'Add a tag') {
			convertflow.person.data.tags = convertflow.person.data.tags || [];
			if (!convertflow.person.data.tags.includes(action.tag_id)) {
				convertflow.person.data.tags.push(action.tag_id);
			}
			app.helpers.compressAndStore(app.local_person, convertflow.person);
		}

		if (action.action_type == 'Remove a tag') {
			convertflow.person.data.tags = convertflow.person.data.tags || [];
			if (convertflow.person.data.tags && convertflow.person.data.tags.includes(action.tag_id)) {
				var tag_index = convertflow.person.data.tags.indexOf(action.tag_id);
				if (tag_index > -1) {
					convertflow.person.data.tags.splice(tag_index, 1);
				}
			}
			app.helpers.compressAndStore(app.local_person, convertflow.person);
		}

		
		if (action.action_type == 'Update custom field' && action.data) {
			var custom_field = action.data['field'];
			var value = action.data['value'];

			if (custom_field && value) {
				convertflow.person.extra = convertflow.person.extra || {};
				convertflow.person.extra[custom_field] = value;
				app.helpers.compressAndStore(app.local_person, convertflow.person);

				$cf('span[data-merge="' + custom_field + '"]').text(value);
			}
		}

		
		if (action.action_type == 'Update score' && action.data) {
			var custom_field = action.data['field'];
			var value = action.data['number'] && app.helpers.isNumeric(action.data['number']) ? parseInt(action.data['number']) : action.data['number'];

			if (custom_field && custom_field !== 'CURRENT_SCORE' && value !== undefined) {
				convertflow.person.extra = convertflow.person.extra || {};
				convertflow.person.extra[custom_field] = value;
				app.helpers.compressAndStore(app.local_person, convertflow.person);

				$cf('span[data-merge="' + custom_field + '"]').text(value);
			}

			if (custom_field == 'CURRENT_SCORE' && value !== undefined) {
				var cta = convertflow.ctas[event.contactable_id];
				var variant;
				if (cta) {
					variant = cta.variants[event.variant_id];
					variant.score = value;
					$cf("div[data-cta-id='" + cta.id + "']").find('span[data-merge="CURRENT_SCORE"]').text(value);
				}
			}
		}

		if ((action.action_type == 'Add to score' || action.action_type == 'Subtract from score') && action.data) {
			var custom_field = action.data['field'];
			var value = action.data['number'] && app.helpers.isNumeric(action.data['number']) ? parseInt(action.data['number']) : undefined;

			if (custom_field && custom_field !== 'CURRENT_SCORE' && value !== undefined) {
				convertflow.person.extra = convertflow.person.extra || {};
				var current_value = convertflow.person.extra[custom_field];
				var isNumeric = current_value !== undefined ? app.helpers.isNumeric(current_value) : false;
				
				if (current_value && isNumeric == true) {

					if (action.action_type == 'Add to score') {
						convertflow.person.extra[custom_field] = parseInt(convertflow.person.extra[custom_field]) + value;
					} else if (action.action_type == 'Subtract from score') {
						convertflow.person.extra[custom_field] = parseInt(convertflow.person.extra[custom_field]) - value;
					}
					
				} else if (!current_value || isNumeric == false) {
					convertflow.person.extra[custom_field] = value;
				}
				
				app.helpers.compressAndStore(app.local_person, convertflow.person);
				$cf('span[data-merge="' + custom_field + '"]').text(convertflow.person.extra[custom_field]);
			}

			if (custom_field == 'CURRENT_SCORE' && value !== undefined) {
				var cta = convertflow.ctas[event.contactable_id];
				var variant;
				if (cta) {
					variant = cta.variants[event.variant_id];
					variant.score = variant.score || 0;

					if (action.action_type == 'Add to score') {
						variant.score = variant.score + value;
					} else if (action.action_type == 'Subtract from score') {
						variant.score = variant.score - value;
					}
					$cf("div[data-cta-id='" + cta.id + "']").find('span[data-merge="CURRENT_SCORE"]').text(variant.score);
				}
			}
		}

	}

  // third party integration automations
  if (integration_type) {
    var integration = $cf.map(app.website.integrations, function (integration) {
      if (integration.integration_type == integration_type) return integration;
    })[0];

    // Check for client-side with storefront integrations first
    if (
      integration_type == "Shopify" &&
      window.convertflow?.app?.shopify_storefront_token &&
      window.convertflow?.app?.shopify_store_url
    ) {
      if (action.action_type == "Shopify - Add to cart") {
        const IntegrationService = new ProductsIntegrationsService(
          integration_type
        );

        let products = [];

        if (action.actions && action.actions.length > 0) {
          action.actions.forEach((nested_action) => {
            if (nested_action.action_type == "Shopify - Add to cart" && nested_action.data) {
              const selectedPlanId = nested_action.data["selling_plan_id"]
              const parsedPlanId = selectedPlanId ?
                selectedPlanId.includes('gid://shopify/SellingPlan/') ?
                  selectedPlanId : `gid://shopify/SellingPlan/${selectedPlanId}` : undefined

              products.push({
                quantity: 1,
                merchandiseId: `gid://shopify/ProductVariant/${nested_action.data["variant_id"]}`,
                sellingPlanId: parsedPlanId
              });
            }
          });
        }

        IntegrationService.headlessSessionCart().then((cart_session) => {
          new Promise((resolve, reject) => {
            IntegrationService.adapter()
              .addToCart(cart_session?.id, products)
              .then((updatedCart) => {
                console.log("Updated cart:", updatedCart);

                IntegrationService.saveOnCartSession(
                  integration_type,
                  updatedCart
                );
                resolve(updatedCart);
              });
          });
        });
      }

      if (action.action_type == "Shopify - Remove from cart") {
        const IntegrationService = new ProductsIntegrationsService(
          integration_type
        );

        IntegrationService.headlessSessionCart().then((cart_session) => {
          const line_id = cart_session?.lines?.find(
            (line) =>
              line.id ==
              `gid://shopify/ProductVariant/${action.data["variant_id"]}`
          )?.line_id;

          if (line_id) {
            new Promise((resolve, reject) => {
              IntegrationService.adapter()
                .removeFromCart(cart_session.id, [line_id])
                .then((updatedCart) => {
                  IntegrationService.saveOnCartSession(
                    integration_type,
                    updatedCart
                  );
                  resolve(updatedCart);
                });
            });
          } else {
            resolve();
          }
        });
      }

      if (action.action_type == "Shopify - Clear cart") {
        const IntegrationService = new ProductsIntegrationsService(
          integration_type
        );
        IntegrationService.headlessSessionCart(true);

        if (typeof window.Shopify == "object") {
          setTimeout(function () {
            fetch("/cart/clear.js", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({}),
            })
              .then((response) => {
                return response.json();
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          }, 200);
        } else if (integration.cms_url) {
          setTimeout(function () {
            window.location.href = integration.cms_url + "/cart/clear";
          }, 100);
        }
      }

      if (action.action_type == "Shopify - Apply discount code") {
        const IntegrationService = new ProductsIntegrationsService(
          integration_type
        );

        IntegrationService.headlessSessionCart().then((cart_session) => {
          new Promise((resolve, reject) => {
            IntegrationService.adapter()
              .applyDiscountCode(cart_session?.id, action.data["discount_code"])
              .then((updatedCart) => {
                console.log("Updated cart:", updatedCart);

                resolve(updatedCart);
              });
          });
        });
      }
    } else if (integration) {
      if (integration.action_types && integration.action_types.length > 0) {
        const actionType = integration.action_types.filter(
          (actionType) => actionType.action_type == action.action_type
        )[0];

        if (actionType && actionType.settings) {
          actionType.settings
            .filter((setting) => setting.localstorage)
            .forEach((setting) => {
              const array_name = setting.localstorage.target;
              const value = action.data[setting.attribute];
              const targeting_data_key = integration_type.toLowerCase();
              const targeting_data =
                convertflow.person.data[targeting_data_key] || {};

              targeting_data[array_name] = targeting_data[array_name] || [];
              const existingItem = targeting_data[array_name].filter(
                (item) => item["id"] == value + ""
              )[0];

              if (setting.localstorage.action == "add" && !existingItem) {
                const newItem = {
                  id: value,
                };
                targeting_data[array_name].push(newItem);
              } else if (
                setting.localstorage.action == "remove" &&
                existingItem
              ) {
                targeting_data[array_name] = targeting_data[array_name].filter(
                  (item) => item["id"] != value + ""
                );
              }

              convertflow.person.data[targeting_data_key] = targeting_data;
              app.helpers.compressAndStore(app.local_person, convertflow.person);
            });
        }
      }

      if (action.action_type.indexOf("Shopify") > -1) {
        if (action.action_type == "Shopify - Add to cart") {
          if (typeof window.Shopify == "object") {
            let products = [];

            if (action.actions && action.actions.length > 0) {
              action.actions.forEach((nested_action) => {
                if (nested_action.action_type == "Shopify - Add to cart") {
                  products.push({
                    quantity: 1,
                    id: nested_action.data["variant_id"],
                    selling_plan: nested_action.data["selling_plan_id"].replace('gid://shopify/SellingPlan/', '')
                  });
                }
              });
            }

            setTimeout(function () {
              fetch("/cart/add.js", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  items: products,
                }),
              })
                .then((response) => {
                  return response.json();
                })
                .catch((error) => {
                  console.error("Error:", error);
                });
            }, 200);
          } else if (integration.cms_url) {
            setTimeout(function () {
              window.location.href =
                integration.cms_url + "/cart/add?id=" + action.data["variant_id"];
            }, 100);
          }
        }

        if (action.action_type == "Shopify - Remove from cart") {
          if (typeof window.Shopify == "object") {
            setTimeout(function () {
              fetch("/cart/change.js", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  quantity: 0,
                  id: action.data["variant_id"],
                }),
              })
                .then((response) => {
                  return response.json();
                })
                .catch((error) => {
                  console.error("Error:", error);
                });
            }, 200);
          } else if (integration.cms_url) {
            setTimeout(function () {
              window.location.href =
                integration.cms_url +
                "/cart/change?id=" +
                action.data["variant_id"] +
                "&quantity=0";
            }, 100);
          }
        }

        if (action.action_type == "Shopify - Clear cart") {
          if (typeof window.Shopify == "object") {
            setTimeout(function () {
              fetch("/cart/clear.js", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({}),
              })
                .then((response) => {
                  return response.json();
                })
                .catch((error) => {
                  console.error("Error:", error);
                });
            }, 200);
          } else if (integration.cms_url) {
            setTimeout(function () {
              window.location.href = integration.cms_url + "/cart/clear";
            }, 100);
          }
        }
      }

      if (action.action_type.indexOf("Intercom") > -1) {
        if (action.action_type == "Intercom - Trigger messenger") {
          if (typeof window.Intercom == "function") {
            Intercom("showNewMessage");
          }
        }
      }
    }
  }
};

    // loop through live campaigns, check conditions

app.campaigns.initialize = function(website, admin_widget) {

  if (app.timed == true) console.timeEnd('Person load');

  if (window.convertflow.snippetsLoaded == undefined) {
    app.ctas.findSnippets();
  }

  // check site wide conditions
  if ($cf.isEmptyObject(website.conditions) || app.campaigns.checkConditions(website.conditions) == true) {
    website.status = true;

    // loop through priority broadcasts
    $cf.each(website.broadcasts, function(id, broadcast) {

      // get broadcast conditions that are not specific to a CTA
      var conditions = $cf.map(broadcast.conditions, function(condition) {if (condition.cta_id == null && condition.condition_type !== 'If area is') return condition})

      // can we show this broadcast? (check campaign status, conditions and timeframe)
      if (broadcast.quick == false && (app.campaigns.checkConditions(conditions) == true || $cf.isEmptyObject(conditions)) && (broadcast.timeframe == false || (parseInt(broadcast.range_start) < $cf.now() && $cf.now() < parseInt(broadcast.range_end)))) {
        broadcast.status = true;

        // set campaign type for stats association
        broadcast.campaign_type = 'broadcast'

        // check and launch ctas in broadcast
        $cf.each(broadcast.ctas, function(index, cta_id) {
          var cta_conditions = $cf.map(broadcast.conditions, function(condition) {if (condition.cta_id == cta_id && condition.condition_type !== 'If area is') return condition})
          var area_conditions = $cf.map(broadcast.conditions, function(condition) {if (condition.cta_id == cta_id && condition.condition_type == 'If area is') return condition})

          if (($cf.isEmptyObject(cta_conditions) || app.campaigns.checkConditions(cta_conditions) == true) && (app.website.ctas[cta_id].cta_type !== 'inline' || $cf.isEmptyObject(area_conditions) == false)) {
            app.website.ctas[cta_id].status = true;
            app.website.ctas[cta_id].broadcast_id = broadcast.id;
            var cta = app.website.ctas[cta_id]

            // give this broadcast CTA priority over CTAs from other campaign types
            if (cta.cta_type == 'inline') {
              $cf.each(area_conditions, function(index, condition) {
                if (convertflow['areas'][condition.area_id] == undefined) {
                  convertflow['areas'][condition.area_id] = cta_id
                }
              })
            }
            app.ctas.load(cta_id, broadcast)
          }
        })
      }
    })

    // standalone CTA campaigns
    $cf.each(website.broadcasts, function(id, standalone) {

      // check conditions of standalone CTA campaign
      var cta_id = standalone.ctas[0]

      if (standalone.quick == true && app.campaigns.checkConditions(standalone.conditions) == true && cta_id !== undefined) {
        standalone.status = true;

        // inject if it's a popup, if not check that there is an area condition
        if (app.website.ctas[cta_id].cta_type !== 'inline' || $cf.map(standalone.conditions, function(condition) {if (condition.condition_type == 'If area is') return condition}).length > 0) {

          if (app.website.ctas[cta_id].cta_type == 'inline') {
            var area_conditions = $cf.map(standalone.conditions, function(condition) {if (condition.cta_id == cta_id && condition.condition_type == 'If area is') return condition})
            $cf.each(area_conditions, function(index, condition) {
              if (convertflow['areas'][condition.area_id] == undefined) {
                convertflow['areas'][condition.area_id] = cta_id
              }
            })
          }

          // launch CTA
          $cf.each(standalone.ctas, function(index, cta_id) {
            app.ctas.load(cta_id, standalone)
          })
        }
      }
    })
  }

  if (admin_widget !== false) {
    app.admin.initialize(website)
  }
}
    // all of the condition logic in one function
app.campaigns.checkConditions = function (conditions, person, payload) {
  if (
    window.convertflow !== undefined &&
    window.convertflow.person !== undefined
  ) {
    var person = window.convertflow.person;
  } else if (person !== undefined) {
    var person = person;
  } else {
    var person = { data: {} };
  }
  var results = [];
  var outcome = false;

  function reduceURL(url) {
    return app.helpers.cleanURL(url).replace('https://', '').replace('http://', '').replace(/\/+$/, '');
  }

  // loop through conditions, add to results
  $cf.each(conditions, function (id, condition) {
    if (
      condition.condition_type &&
      condition.condition_type !== null &&
      condition.condition_type !== "null" &&
      condition.condition_type !== "If area is"
    ) {
      var operator = condition.operator;
      var result = false;
      var fullurl = window.location.href;
      var service = condition.condition_type
        .split(" ")
        .splice(-1)[0]
        .toLowerCase();

      if (condition.url !== null) {
        var condition_url = reduceURL(condition.url.split('?')[0]);
        var conditionURLFlattened = condition_url.replace('www.', '');

        var current_page = reduceURL(`${window.location.hostname}${window.location.pathname}`);
        var currentPageFlattened = current_page.replace('www.', '');
      }

      var description = {
        id: id,
        condition_type: condition.condition_type,
        value: condition_url,
        current_page: current_page,
        operator: operator,
      };

      // always true
      if (condition.condition_type == "Everywhere") {
        var result = true;
      }

      // condition url equals current page
      if (condition.condition_type == "If page is") {
        if (conditionURLFlattened == currentPageFlattened) {
          var result = true;
        }
        condition.value = conditionURLFlattened;
        description["current_page"] = currentPageFlattened;
      }

      // condition url is not current page
      if (condition.condition_type == "If page is NOT") {
        if (conditionURLFlattened !== currentPageFlattened) {
          var result = true;
        }
        condition.value = conditionURLFlattened;
        description["current_page"] = currentPageFlattened;
      }

      // full url contains keyword
      if (condition.condition_type == "If URL contains") {
        if (fullurl.indexOf(condition.keyword) > -1) {
          var result = true;
        }
        condition.value = condition.keyword;
      }

      // full url does not contain keyword
      if (condition.condition_type == "If URL does NOT contain") {
        if (fullurl.indexOf(condition.keyword) == -1) {
          var result = true;
        }
        condition.value = condition.keyword;
      }

      // if visitors location city matches keyword
      if (condition.condition_type == "If visiting from city") {
        if (
          person.data.location !== undefined &&
          person.data.location["city"] !== undefined &&
          person.data.location["city"]
            .toLowerCase()
            .indexOf(condition.keyword.toLowerCase()) > -1
        ) {
          var result = true;
        }
        condition.value = condition.keyword;
      }

      // if visitors location city does not match keyword
      if (condition.condition_type == "If NOT visiting from city") {
        if (
          person.data.location == undefined ||
          person.data.location["city"] == undefined ||
          person.data.location["city"]
            .toLowerCase()
            .indexOf(condition.keyword.toLowerCase()) == -1
        ) {
          var result = true;
        }
        condition.value = condition.keyword;
      }

      // if visitors location region matches keyword
      if (condition.condition_type == "If visiting from region") {
        if (
          person.data.location !== undefined &&
          person.data.location["regionName"] !== undefined &&
          person.data.location["regionName"]
            .toLowerCase()
            .indexOf(condition.keyword.toLowerCase()) > -1
        ) {
          var result = true;
        }
        condition.value = condition.keyword;
      }

      // if visitors location region does not match keyword
      if (condition.condition_type == "If NOT visiting from region") {
        if (
          person.data.location == undefined ||
          person.data.location["regionName"] == undefined ||
          person.data.location["regionName"]
            .toLowerCase()
            .indexOf(condition.keyword.toLowerCase()) == -1
        ) {
          var result = true;
        }
        condition.value = condition.keyword;
      }

      // if visitors location country matches keyword
      if (condition.condition_type == "If visiting from country") {
        if (
          person.data.location !== undefined &&
          person.data.location["countryCode"] !== undefined &&
          person.data.location["countryCode"].indexOf(condition.country) > -1
        ) {
          var result = true;
        }
        condition.value = condition.country;
      }

      // if visitors location country does not match keyword
      if (condition.condition_type == "If NOT visiting from country") {
        if (
          person.data.location == undefined ||
          person.data.location["countryCode"] == undefined ||
          person.data.location["countryCode"].indexOf(condition.country) == -1
        ) {
          var result = true;
        }
        condition.value = condition.country;
      }

      // if visiting a convertflow page with matching id
      if (condition.condition_type == "If visiting ConvertFlow landing page") {
        var pageCtaOuter = $cf('.convertflow-cta.cf-page').parent();
        var pageCtaId = $cf(pageCtaOuter).attr('data-cta-id') || $cf(pageCtaOuter).attr('cta-id');

        if (!pageCtaId) {
          var pageCtaWrapper = $cf('.convertflow-cta.cf-page');
          var pageCtaId = $cf(pageCtaWrapper).attr('data-cta-id') || $cf(pageCtaWrapper).attr('cta-id');
        }

        if (
          !condition.condition_cta || 
          condition.condition_cta == pageCtaId
        ) {
          var result = true;
        }
        condition.value = condition.condition_cta;
      }

      // if visitor has viewed CTA
      if (condition.condition_type == "If person has viewed CTA" || condition.condition_type == "If person has viewed campaign") {
        var count = condition.count || 0;

        if (
          person.data.campaigns !== undefined &&
          person.data.campaigns.ctas !== undefined &&
          person.data.campaigns.ctas[condition.condition_cta] !== undefined &&
          person.data.campaigns.ctas[condition.condition_cta]["stats"] !==
            undefined &&
          person.data.campaigns.ctas[condition.condition_cta]["stats"]["View"] !== undefined && 
          typeof person.data.campaigns.ctas[condition.condition_cta]["stats"]["View"] == 'number' && 
          person.data.campaigns.ctas[condition.condition_cta]["stats"]["View"] >= count
        ) {
          var result = true;
        }
        condition.value = "\"" + condition.condition_cta + "\" more than " + count + " times";
      }

      // if visitor has not viewed CTA
      if (condition.condition_type == "If person has NOT viewed CTA" || condition.condition_type == "If person has NOT viewed campaign") {
        var count = condition.count || 0;
        
        if (
          person.data.campaigns == undefined ||
          person.data.campaigns.ctas == undefined ||
          person.data.campaigns.ctas[condition.condition_cta] == undefined ||
          person.data.campaigns.ctas[condition.condition_cta]["stats"] == undefined ||
          person.data.campaigns.ctas[condition.condition_cta]["stats"]["View"] == undefined || 
          typeof person.data.campaigns.ctas[condition.condition_cta]["stats"]["View"] !== 'number' || 
          person.data.campaigns.ctas[condition.condition_cta]["stats"]["View"] < count
        ) {
          var result = true;
        }
        condition.value = "\"" + condition.condition_cta + "\" ";

        if (count > 0) {
          condition.value += count + " times";
        }
      }

      // if visitor has converted with CTA
      if (
        condition.condition_type == "If person has engaged with CTA" ||
        condition.condition_type == "If person has converted with CTA" || 
        condition.condition_type == "If person has converted with campaign"
      ) {
        if (
          person.data.campaigns !== undefined &&
          person.data.campaigns.ctas !== undefined &&
          person.data.campaigns.ctas[condition.condition_cta] !== undefined &&
          person.data.campaigns.ctas[condition.condition_cta]["stats"] !==
            undefined &&
          person.data.campaigns.ctas[condition.condition_cta]["stats"][
            "Complete"
          ] !== undefined
        ) {
          var result = true;
        }
        condition.value = condition.condition_cta;
      }

      // if visitor has not converted with CTA
      if (
        condition.condition_type == "If person has NOT engaged with CTA" ||
        condition.condition_type == "If person has NOT converted with CTA" || 
        condition.condition_type == "If person has NOT converted with campaign"
      ) {
        if (
          person.data.campaigns == undefined ||
          person.data.campaigns.ctas == undefined ||
          person.data.campaigns.ctas[condition.condition_cta] == undefined ||
          person.data.campaigns.ctas[condition.condition_cta]["stats"] ==
            undefined ||
          person.data.campaigns.ctas[condition.condition_cta]["stats"][
            "Complete"
          ] == undefined
        ) {
          var result = true;
        }
        condition.value = condition.condition_cta;
      }

      // if visitor has completed CTA
      if (condition.condition_type == "If person has completed CTA" || condition.condition_type == "If person has completed campaign") {
        if (
          person.data.campaigns !== undefined &&
          person.data.campaigns.ctas !== undefined &&
          person.data.campaigns.ctas[condition.condition_cta] !== undefined &&
          person.data.campaigns.ctas[condition.condition_cta]["stats"] !==
            undefined &&
          person.data.campaigns.ctas[condition.condition_cta]["stats"][
            "Completion"
          ] !== undefined
        ) {
          var result = true;
        }
        condition.value = condition.condition_cta;
      }

      // if visitor has not converted with CTA
      if (condition.condition_type == "If person has NOT completed CTA" || condition.condition_type == "If person has NOT completed campaign") {
        if (
          person.data.campaigns == undefined ||
          person.data.campaigns.ctas == undefined ||
          person.data.campaigns.ctas[condition.condition_cta] == undefined ||
          person.data.campaigns.ctas[condition.condition_cta]["stats"] ==
            undefined ||
          person.data.campaigns.ctas[condition.condition_cta]["stats"][
            "Completion"
          ] == undefined
        ) {
          var result = true;
        }
        condition.value = condition.condition_cta;
      }

      // If person is in visitor segment
      if (condition.condition_type == "If person is in visitor segment" || condition.condition_type == "If in custom segment") {
        var conditions_group;

        if (condition.data["conditions_group_id"]) {
          var conditions_group =
            app.website.conditions_groups[
              condition.data["conditions_group_id"]
            ];
        }
        if (
          conditions_group &&
          conditions_group.conditions &&
          app.campaigns.checkConditions(conditions_group.conditions) == true
        ) {
          var result = true;
        }
        if (conditions_group) {
          condition.value = conditions_group.name;
        } else {
          condition.value = condition.data["conditions_group_id"];
        }
      }

      // If person is NOT in visitor segment
      if (condition.condition_type == "If person is NOT in visitor segment" || condition.condition_type == "If NOT in custom segment") {
        var conditions_group;

        if (condition.data["conditions_group_id"]) {
          var conditions_group =
            app.website.conditions_groups[
              condition.data["conditions_group_id"]
            ];
        }
        if (
          !conditions_group ||
          !conditions_group.conditions ||
          app.campaigns.checkConditions(conditions_group.conditions) == false
        ) {
          var result = true;
        }
        if (conditions_group) {
          condition.value = conditions_group.name;
        } else {
          condition.value = condition.data["conditions_group_id"];
        }
      }

      // if visitor is identified as a contact
      if (condition.condition_type == "If person is an identified contact" || condition.condition_type == "If identified contact") {
        if (person.email) {
          var result = true;
        }
      }

      // if visitor is identified as a contact
      if (
        condition.condition_type == "If person is NOT an identified contact" || condition.condition_type == "If anonymous visitor"
      ) {
        if (!person.email) {
          var result = true;
        }
      }

      // check device by checking screen size
      if (condition.condition_type == "If device type is") {
        if (condition.data.device == "desktop") {
          if ($cf(window).width() > 1024) {
            var result = true;
          }
        } else if (
          condition.data.device.indexOf("mobile") > -1 ||
          condition.data.device.indexOf("tablet") > -1
        ) {
          if ($cf(window).width() < 1025) {
            var result = true;
          }
        }
        condition.value = condition.data.device;
      }

      // if visitor has tag
      if (
        condition.condition_type == "If contact has tag" ||
        condition.condition_type == "If person has tag"
      ) {
        if (
          person.data.tags !== undefined &&
          $cf.grep(person.data.tags, function (s) {
            return s == condition.tag_id;
          }).length > 0
        ) {
          var result = true;
        }
        condition.value = condition.tag_id;
      }

      // if visitor does NOT have tag
      if (
        condition.condition_type == "If contact does NOT have tag" ||
        condition.condition_type == "If person does NOT have tag"
      ) {
        if (
          person.data.tags == undefined ||
          $cf.grep(person.data.tags, function (s) {
            return s == condition.tag_id;
          }).length == 0
        ) {
          var result = true;
        }
        condition.value = condition.tag_id;
      }

      // if visitor has visited page
      if (condition.condition_type == "If person has visited") {
        var count = condition.count || 0;
        
        const historyResult = condition_url &&
          person.data.visits &&
          person.data.visits[condition_url] && 
          typeof person.data.visits[condition_url] == 'number' &&
          person.data.visits[condition_url] >= count;

        const sessionResult = convertflow.session && convertflow.session.urls && typeof convertflow.session.urls == 'object' && convertflow.session.urls.filter((visit) => visit.url && reduceURL(visit.url) == condition_url).length >= count

        if (historyResult || sessionResult) {
          var result = true;
        }
        condition.value = condition_url;

        if (count > 0) {
          condition.value += " " + count + " times";
        }
      }

      // if visitor has NOT visited page
      if (condition.condition_type == "If person has NOT visited") {
        var count = condition.count || 0;

        const historyResult = !condition_url ||
          !person.data.visits ||
          !person.data.visits[condition_url] ||
          typeof person.data.visits[condition_url] !== 'number' ||
          person.data.visits[condition_url] < count;

        const sessionResult = !convertflow.session || !convertflow.session.urls || typeof convertflow.session.urls !== 'object' || convertflow.session.urls.filter((visit) => visit.url && reduceURL(visit.url) == condition_url).length < count

        if (historyResult && sessionResult) {
          var result = true;
        }
        condition.value = condition_url;

        if (count > 0) {
          condition.value += " " + count + " times";
        }
      }

      if (condition.condition_type == "If person has visited URL in session with keyword") {
        var count = condition.count || 0;
        const legacyResult = condition.keyword &&
          person.data.visits &&
          person.data.visits.session && 
          typeof person.data.visits.session == 'object' && 
          Object.keys(person.data.visits.session).filter((url) => url.indexOf(condition.keyword) > -1 && person.data.visits.session[url] >= count).length > 0;

        const newResult = convertflow.session && convertflow.session.urls && typeof convertflow.session.urls == 'object' && convertflow.session.urls.filter((visit) => visit.url && visit.url.indexOf(condition.keyword) > -1).length >= count

        if (newResult || legacyResult) {
          var result = true;
        }
        condition.value = condition.keyword;

        if (count > 0) {
          condition.value += " ? " + count + " times";
        }
      }

      if (condition.condition_type == "If person has NOT visited URL in session with keyword") {
        var count = condition.count || 0;

        const legacyResult = !person.data.visits ||
          !person.data.visits.session ||  
          typeof person.data.visits.session !== 'object' || 
          Object.keys(person.data.visits.session).filter((url) => url.indexOf(condition.keyword) > -1 && person.data.visits.session[url] >= count).length == 0;

        const newResult = !convertflow.session || !convertflow.session.urls || typeof convertflow.session.urls !== 'object' || convertflow.session.urls.filter((visit) => visit.url && visit.url.indexOf(condition.keyword) > -1).length < count

        if (newResult && legacyResult) {
          var result = true;
        }
        condition.value = condition.keyword;

        if (count > 0) {
          condition.value += " ? " + count + " times";
        }
      }

      // If person has more than X page views
      if (condition.condition_type == "If person has more than X page views") {
        const historyResult = person.data.visits !== undefined &&
          person.data.visits.pages !== undefined &&
          person.data.visits.pages > condition.count;

        const sessionResult = convertflow.session && convertflow.session.pages && convertflow.session.pages > condition.count;

        if (historyResult || sessionResult) {
          var result = true;
        }
        condition.value = condition.count;
      }

      // If person has less than X page views
      if (condition.condition_type == "If person has less than X page views") {
        const historyResult = person.data.visits == undefined ||
          person.data.visits.pages == undefined ||
          person.data.visits.pages < condition.count;
        
        const sessionResult = !convertflow.session || !convertflow.session.pages || convertflow.session.pages < condition.count;

        if (historyResult && sessionResult) {
          var result = true;
        }
        condition.value = condition.count;
      }

      // If person has more than X sessions
      if (condition.condition_type == "If person has more than X sessions") {
        const legacyResult = person.data.visits !== undefined &&
          person.data.visits.session !== undefined &&
          person.data.visits.session.sessions !== undefined &&
          person.data.visits.session.sessions > condition.count;

        const newResult = person.data.session && person.data.session.sessions && person.data.session.sessions > condition.count;
        
        if (newResult || legacyResult) {
          var result = true;
        }
        condition.value = condition.count;
      }

      // If person has fewer than X sessions
      if (condition.condition_type == "If person has fewer than X sessions") {
        const legacyResult = person.data.visits == undefined ||
          person.data.visits.session == undefined ||
          person.data.visits.session.sessions == undefined ||
          person.data.visits.session.sessions < condition.count;

        const newResult = !person.data.session || !person.data.session.sessions || person.data.session.sessions < condition.count;

        if (newResult && legacyResult) {
          var result = true;
        }
        condition.value = condition.count;
      }

      // If person has more than X pageviews in current session
      if (
        condition.condition_type ==
        "If person has more than X page views in current session"
      ) {
        const legacyResult = person.data.visits !== undefined &&
          person.data.visits.session !== undefined &&
          person.data.visits.session.pages !== undefined &&
          person.data.visits.session.pages > condition.count;

        const newResult = convertflow.session && convertflow.session.pages && convertflow.session.pages > condition.count;

        if (newResult || legacyResult) {
          var result = true;
        }
        condition.value = condition.count;
      }

      // If person has fewer than X page views in current session
      if (
        condition.condition_type ==
        "If person has fewer than X page views in current session"
      ) {
        const legacyResult = person.data.visits == undefined ||
          person.data.visits.session == undefined ||
          person.data.visits.session.pages == undefined ||
          person.data.visits.session.pages < condition.count;

        const newResult = !convertflow.session || !convertflow.session.pages || convertflow.session.pages < condition.count;

        if (newResult && legacyResult) {
          var result = true;
        }
        condition.value = condition.count;
      }

      // If person had session within last X days
      if (
        condition.condition_type == "If person had session within last X days"
      ) {
        const legacyResult = person.data.visits !== undefined &&
          person.data.visits.session !== undefined &&
          person.data.visits.session.previous !== undefined &&
          app.helpers.parseDate(person.data.visits.session.previous) >=
            Date.parse(new Date()) - condition.count * 24 * 60 * 60 * 1000;

        const newResult = convertflow.session && convertflow.session.previous && app.helpers.parseDate(convertflow.session.previous) >=
            Date.parse(new Date()) - condition.count * 24 * 60 * 60 * 1000;

        if (newResult || legacyResult) {
          var result = true;
        }
        condition.value = condition.count;
      }

      // If person has NOT had session within last X days
      if (
        condition.condition_type ==
        "If person has NOT had session within last X days"
      ) {
        const legacyResult = person.data.visits == undefined ||
          person.data.visits.session == undefined ||
          person.data.visits.session.previous == undefined ||
          app.helpers.parseDate(person.data.visits.session.previous) <=
            Date.parse(new Date()) - condition.count * 24 * 60 * 60 * 1000;

        const newResult = !convertflow.session || !convertflow.session.previous || app.helpers.parseDate(convertflow.session.previous) <= Date.parse(new Date()) - condition.count * 24 * 60 * 60 * 1000;

        if (newResult && legacyResult) {
          var result = true;
        }
        condition.value = condition.count;
      }

      // If current session is more than X minutes
      if (
        condition.condition_type == "If current session is more than X minutes"
      ) {
        const legacyResult = person.data.visits !== undefined &&
          person.data.visits.session !== undefined &&
          person.data.visits.session.current !== undefined &&
          app.helpers.parseDate(person.data.visits.session.current) <=
            Date.parse(new Date()) - condition.count * 60 * 1000;

        const newResult = convertflow.session && convertflow.session.current && app.helpers.parseDate(convertflow.session.current) <= Date.parse(new Date()) - condition.count * 60 * 1000;
        
        if (newResult || legacyResult) {
          var result = true;
        }
        condition.value = condition.count;
      }

      // If current session is less than X minutes
      if (
        condition.condition_type == "If current session is less than X minutes"
      ) {
        const legacyResult = person.data.visits == undefined ||
          person.data.visits.session == undefined ||
          person.data.visits.session.current == undefined ||
          app.helpers.parseDate(person.data.visits.session.current) >=
            Date.parse(new Date()) - condition.count * 60 * 1000;

        const newResult = !convertflow.session || !convertflow.session.current || app.helpers.parseDate(convertflow.session.current) >= Date.parse(new Date()) - condition.count * 60 * 1000;

        if (newResult && legacyResult) {
          var result = true;
        }
        condition.value = condition.count;
      }

      // If cookie value contains keyword
      if (condition.condition_type == "If cookie value contains keyword") {
        if (
          app.helpers.getCookie(condition.url) &&
          condition.keyword &&
          app.helpers.getCookie(condition.url).indexOf(condition.keyword) > -1
        ) {
          var result = true;
        }
        condition.value = condition.url + " ? " + condition.keyword;
      }

      // If cookie value does NOT contain keyword
      if (
        condition.condition_type == "If cookie value does NOT contain keyword"
      ) {
        if (
          !app.helpers.getCookie(condition.url) ||
          !condition.keyword ||
          app.helpers.getCookie(condition.url).indexOf(condition.keyword) == -1
        ) {
          var result = true;
        }
        condition.value = condition.url + " ? " + condition.keyword;
      }

      // If global variable value contains keyword
      if (
        condition.condition_type == "If global variable value contains keyword"
      ) {
        if (
          condition.url &&
          condition.keyword &&
          (app.helpers.nestedGet(window, condition.url, "") + "").indexOf(
            condition.keyword
          ) > -1
        ) {
          var result = true;
        }
        condition.value = condition.url + " ? " + condition.keyword;
      }

      // If global variable value does NOT contain keyword
      if (
        condition.condition_type ==
        "If global variable value does NOT contain keyword"
      ) {
        if (
          !condition.url ||
          !condition.keyword ||
          !app.helpers.nestedGet(window, condition.url) ||
          (app.helpers.nestedGet(window, condition.url, "") + "").indexOf(
            condition.keyword
          ) == -1
        ) {
          var result = true;
        }
        condition.value = condition.url + " ? " + condition.keyword;
      }

      // If function returns value containing keyword
      // If function does NOT return value containing keyword

      // if visitor has visited with a URL parameter matching value
      if (
        condition.condition_type == "If person has visited with URL parameter"
      ) {
        const historyResult = person.data.params !== undefined &&
          (person.data.params[condition.url] == condition.keyword ||
            fullurl.indexOf(condition.url + "=" + condition.keyword) > -1);

        const sessionResult = convertflow.session && convertflow.session.urls && typeof convertflow.session.urls == 'object' && convertflow.session.urls.filter((visit) => visit.url && visit.url.indexOf(`${condition.url}=${condition.keyword}`) > -1).length > 0

        if (historyResult || sessionResult) {
          var result = true;
        }
        condition.value =
          "'" + condition.url + "' = '" + condition.keyword + "'";
      }

      // if visitor has NOT visited with a URL parameter matching value
      if (
        condition.condition_type ==
        "If person has NOT visited with URL parameter"
      ) {
        const historyResult = person.data.params == undefined ||
          (person.data.params[condition.url] !== condition.keyword &&
            fullurl.indexOf(condition.url + "=" + condition.keyword) == -1);

        const sessionResult = !convertflow.session || !convertflow.session.urls || typeof convertflow.session.urls !== 'object' || convertflow.session.urls.filter((visit) => visit.url && visit.url.indexOf(`${condition.url}=${condition.keyword}`) > -1).length < 1

        if (historyResult && sessionResult) {
          var result = true;
        }
        condition.value =
          "'" + condition.url + "' = '" + condition.keyword + "'";
      }

      // if visitors referral sources contain
      if (condition.condition_type == "If referral source contains") {
        const historyResult = person.data.sources !== undefined &&
          $cf.grep(person.data.sources, function (s) {
            return (
              s !== undefined && s !== null && s.indexOf(condition.keyword) > -1
            );
          }).length > 0;

        const sessionResult = convertflow.session && convertflow.session.attribution && convertflow.session.attribution.referral_source && convertflow.session.attribution.referral_source.indexOf(condition.keyword) > -1
        const profileResult = convertflow.person && convertflow.person.referral_source && convertflow.person.referral_source.indexOf(condition.keyword) > -1;

        if (historyResult || sessionResult || profileResult) {
          var result = true;
        }
        condition.value = condition.keyword;
      }

      // if visitors referral sources contain
      if (condition.condition_type == "If referral source does NOT contain") {
        const historyResult = person.data.sources == undefined ||
          $cf.grep(person.data.sources, function (s) {
            return (
              s !== undefined && s !== null && s.indexOf(condition.keyword) > -1
            );
          }).length == 0;
        
        const sessionResult = !convertflow.session || !convertflow.session.attribution || !convertflow.session.attribution.referral_source || convertflow.session.attribution.referral_source.indexOf(condition.keyword) == -1;
        const profileResult = !convertflow.person || !convertflow.person.referral_source || convertflow.person.referral_source.indexOf(condition.keyword) == -1;

        if (historyResult && sessionResult && profileResult) {
          var result = true;
        }
        condition.value = condition.keyword;
      }

      // if visitors contact field values contain keyword
      if (condition.condition_type == "If contact field value contains") {
        if (
          person[condition.data["attribute"]] &&
          person[condition.data["attribute"]].indexOf(condition.keyword) > -1
        ) {
          var result = true;
        }
        condition.value =
          condition.data["attribute"] + " ? " + condition.keyword;
      }

      // if visitors contact field value does NOT contain keyword
      if (
        condition.condition_type == "If contact field value does NOT contain"
      ) {
        if (
          !person[condition.data["attribute"]] ||
          person[condition.data["attribute"]].indexOf(condition.keyword) == -1
        ) {
          var result = true;
        }
        condition.value =
          condition.data["attribute"] + " ? " + condition.keyword;
      }

      // if visitors custom field values contain keyword
      if (condition.condition_type == "If custom field value contains") {
        if (
          person.extra !== undefined &&
          person.extra !== null &&
          person.extra[condition.data.slug] !== undefined &&
          person.extra[condition.data.slug].indexOf(condition.keyword) > -1
        ) {
          var result = true;
        }
        condition.value = condition.data.slug + " ? " + condition.keyword;
      }

      // if visitors custom field values do NOT contain keyword
      if (
        condition.condition_type == "If custom field value does NOT contain"
      ) {
        if (
          person.extra == undefined ||
          person.extra[condition.data.slug] == undefined ||
          person.extra[condition.data.slug].indexOf(condition.keyword) == -1
        ) {
          var result = true;
        }
        condition.value = condition.data.slug + " ? " + condition.keyword;
      }

      // if visitors custom field is an integer greater than provided value
      if (condition.condition_type == "If custom field is greater than" || 
          condition.condition_type == "If answer to question is greater than" || 
          condition.condition_type == "If contact custom field is greater than") {
        if (
          person.extra !== undefined &&
          person.extra !== null &&
          person.extra[condition.data.slug] !== undefined && 
          app.helpers.isNumeric(person.extra[condition.data.slug]) && 
          app.helpers.isNumeric(condition.keyword) && 
          parseInt(person.extra[condition.data.slug]) > parseInt(condition.keyword)
        ) {
          var result = true;
        }
        condition.value = condition.data.slug + " > " + condition.keyword;
      }

      // if visitors custom field is less than provided value
      if (condition.condition_type == "If custom field is less than" || 
          condition.condition_type == "If answer to question is less than" || 
          condition.condition_type == "If contact custom field is less than") {
        if (
          person.extra !== undefined &&
          person.extra !== null &&
          person.extra[condition.data.slug] !== undefined && 
          app.helpers.isNumeric(person.extra[condition.data.slug]) && 
          app.helpers.isNumeric(condition.keyword) && 
          parseInt(person.extra[condition.data.slug]) < parseInt(condition.keyword)
        ) {
          var result = true;
        }
        condition.value = condition.data.slug + " < " + condition.keyword;
      }

      // if visitor has certain tag in specific integration
      if (
        condition.condition_type.indexOf("If person has tag in") > -1 ||
        condition.condition_type.indexOf("If person has tag value in") > -1
      ) {
        if (
          person.data[service] !== undefined &&
          person.data[service]["tags"] !== undefined &&
          $cf.grep(person.data[service]["tags"], function (s) {
            return (
              s.id == condition.data.tag_id.replace("&#39;", "'").toString()
            );
          }).length > 0
        ) {
          var result = true;
        }
        condition.value = condition.data.tag_id.toString();
      }

      // if visitor does NOT have certain tag in specific integration
      if (
        condition.condition_type.indexOf("If person doesn't have tag in") >
          -1 ||
        condition.condition_type.indexOf(
          "If person doesn't have tag value in"
        ) > -1
      ) {
        if (
          person.data[service] == undefined ||
          person.data[service]["tags"] == undefined ||
          $cf.grep(person.data[service]["tags"], function (s) {
            return (
              s.id == condition.data.tag_id.replace("&#39;", "'").toString()
            );
          }).length == 0
        ) {
          var result = true;
        }
        condition.value = condition.data.tag_id.toString();
      }

      // if visitor is subscribed to a list in specific integration
      if (
        condition.condition_type.indexOf("If person is subscribed to list in") >
          -1 ||
        condition.condition_type.indexOf(
          "If person is subscribed to campaign in"
        ) > -1
      ) {
        if (
          person.data[service] !== undefined &&
          person.data[service]["lists"] !== undefined &&
          $cf.grep(person.data[service]["lists"], function (s) {
            return s.id == condition.data.list_id.toString();
          }).length > 0
        ) {
          var result = true;
        }
        condition.value = condition.data.list_id.toString();
      }

      // if visitor is NOT subscribed to a list in specific integration
      if (
        condition.condition_type.indexOf(
          "If person is NOT subscribed to list in"
        ) > -1 ||
        condition.condition_type.indexOf(
          "If person is NOT subscribed to campaign in"
        ) > -1
      ) {
        if (
          person.data[service] == undefined ||
          person.data[service]["lists"] == undefined ||
          $cf.grep(person.data[service]["lists"], function (s) {
            return s.id == condition.data.list_id.toString();
          }).length == 0
        ) {
          var result = true;
        }
        condition.value = condition.data.list_id.toString();
      }

      // if visitor is in a campaign in specific integration
      if (
        condition.condition_type.indexOf("If person is in campaign in Salesforce") > -1
      ) {
        if (
          person.data[service] !== undefined &&
          person.data[service]["campaigns"] !== undefined &&
          $cf.grep(person.data[service]["campaigns"], function (s) {
            return s.id == condition.data.campaign_id.toString();
          }).length > 0
        ) {
          var result = true;
        }
        condition.value = condition.data.campaign_id.toString();
      }

      // if visitor is NOT in a campaign in a specific integration
      if (condition.condition_type.indexOf("If person is NOT subscribed to campaign in") > -1
      ) {
        if (
          person.data[service] == undefined ||
          person.data[service]["campaigns"] == undefined ||
          $cf.grep(person.data[service]["campaigns"], function (s) {
            return s.id == condition.data.campaign_id.toString();
          }).length == 0
        ) {
          var result = true;
        }
        condition.value = condition.data.campaign_id.toString();
      }

      // if visitor belongs to group in specific integration
      if (condition.condition_type.indexOf("If person is in group in") > -1) {
        var group_id = condition.data.group_id || condition.data.tag_id;

        if (
          person.data[service] !== undefined &&
          person.data[service]["groups"] !== undefined &&
          $cf.grep(person.data[service]["groups"], function (s) {
            return s.id == group_id.replace("&#39;", "'").toString();
          }).length > 0
        ) {
          var result = true;
        }
        condition.value = group_id.toString();
      }

      // if visitor does NOT belong to group in specific integration
      if (
        condition.condition_type.indexOf("If person is NOT in group in") > -1
      ) {
        var group_id = condition.data.group_id || condition.data.tag_id;

        if (
          person.data[service] == undefined ||
          person.data[service]["groups"] == undefined ||
          $cf.grep(person.data[service]["groups"], function (s) {
            return s.id == group_id.replace("&#39;", "'").toString();
          }).length == 0
        ) {
          var result = true;
        }
        condition.value = group_id.toString();
      }

      // if visitor is a member of a segment in specific integration
      if (
        condition.condition_type.indexOf("If person is a member of segment") >
        -1
      ) {
        if (
          person.data[service] !== undefined &&
          person.data[service]["segments"] !== undefined &&
          $cf.grep(person.data[service]["segments"], function (s) {
            return s.id == condition.data.segment_id.toString();
          }).length > 0
        ) {
          var result = true;
        }
        condition.value = condition.data.segment_id.toString();
      }

      // if visitor is NOT a member of a segment in specific integration
      if (
        condition.condition_type.indexOf(
          "If person is NOT a member of segment"
        ) > -1
      ) {
        if (
          person.data[service] == undefined ||
          person.data[service]["segments"] == undefined ||
          $cf.grep(person.data[service]["segments"], function (s) {
            return s.id == condition.data.segment_id.toString();
          }).length == 0
        ) {
          var result = true;
        }
        condition.value = condition.data.segment_id.toString();
      }

      // if visitor is in workflow in specific integration
      if (
        condition.condition_type.indexOf("If person is in workflow in") > -1
      ) {
        if (
          person.data[service] !== undefined &&
          person.data[service]["workflows"] !== undefined &&
          $cf.grep(person.data[service]["workflows"], function (s) {
            return s.id == condition.data.workflow.toString();
          }).length > 0
        ) {
          var result = true;
        }
        condition.value = condition.data.workflow.toString();
      }

      // if visitor is NOT in workflow in specific integration
      if (
        condition.condition_type.indexOf("If person is NOT in workflow in") > -1
      ) {
        if (
          person.data[service] == undefined ||
          person.data[service]["workflows"] == undefined ||
          $cf.grep(person.data[service]["workflows"], function (s) {
            return s.id == condition.data.workflow.toString();
          }).length == 0
        ) {
          var result = true;
        }
        condition.value = condition.data.workflow.toString();
      }

      // if visitor has lifecycle stage contact property value
      if (
        condition.condition_type.indexOf("If person is in lifecycle stage in") >
        -1
      ) {
        if (
          person.data[service] !== undefined &&
          person.data[service]["properties"] !== undefined &&
          $cf.grep(person.data[service]["properties"], function (p) {
            return (
              p.property == "lifecyclestage" &&
              p.value == condition.data.lifecycle_stage.toString()
            );
          }).length > 0
        ) {
          var result = true;
        }
        condition.value = condition.data.lifecycle_stage.toString();
      }

      // if visitor does NOT have lifecycle stage contact property value
      if (
        condition.condition_type.indexOf(
          "If person is NOT in lifecycle stage in"
        ) > -1
      ) {
        if (
          person.data[service] == undefined ||
          person.data[service]["properties"] == undefined ||
          $cf.grep(person.data[service]["properties"], function (p) {
            return (
              p.property == "lifecyclestage" &&
              p.value == condition.data.lifecycle_stage.toString()
            );
          }).length == 0
        ) {
          var result = true;
        }
        condition.value = condition.data.lifecycle_stage.toString();
      }

      // if visitor has submitted form in integration
      if (
        condition.condition_type.indexOf("If person has submitted form in") > -1
      ) {
        if (
          person.data[service] !== undefined &&
          person.data[service]["forms"] !== undefined &&
          $cf.grep(person.data[service]["forms"], function (f) {
            return f.name == condition.data.form.toString();
          }).length > 0
        ) {
          var result = true;
        }
        condition.value = condition.data.form.toString();
      }

      // if visitor has NOT submitted form in integration
      if (
        condition.condition_type.indexOf("If person did NOT submit form in") >
        -1
      ) {
        if (
          person.data[service] == undefined ||
          person.data[service]["forms"] == undefined ||
          $cf.grep(person.data[service]["forms"], function (f) {
            return f.name == condition.data.form.toString();
          }).length == 0
        ) {
          var result = true;
        }
        condition.value = condition.data.form.toString();
      }

      // if visitor has contact property value that matches in integration
      if (
        condition.condition_type.indexOf(
          "If contact property value matches in"
        ) > -1 ||
        condition.condition_type.indexOf(
          "If person has custom field value in"
        ) > -1
      ) {
        if (
          person.data[service] !== undefined &&
          person.data[service]["properties"] !== undefined &&
          $cf.grep(person.data[service]["properties"], function (p) {
            return (
              p.property == condition.data.property_type &&
              p.value == condition.data.property
            );
          }).length > 0
        ) {
          var result = true;
        }
        condition.value =
          condition.data.property_type + " = " + condition.data.property;
      }

      // if visitor does NOT have contact property value that matches in integration
      if (
        condition.condition_type.indexOf(
          "If contact property value does NOT match in"
        ) > -1 ||
        condition.condition_type.indexOf(
          "If person doesn't have custom field value in"
        ) > -1
      ) {
        if (
          person.data[service] == undefined ||
          person.data[service]["properties"] == undefined ||
          $cf.grep(person.data[service]["properties"], function (p) {
            return (
              p.property == condition.data.property_type &&
              p.value == condition.data.property
            );
          }).length == 0
        ) {
          var result = true;
        }
        condition.value =
          condition.data.property_type + " != " + condition.data.property;
      }

      // if visitor has contact property value contains keyword in integration
      if (
        condition.condition_type.indexOf(
          "If contact property value contains in"
        ) > -1
      ) {
        if (
          person.data[service] !== undefined &&
          person.data[service]["properties"] !== undefined &&
          $cf.grep(person.data[service]["properties"], function (p) {
            return (
              p.property == condition.data.property_type &&
              p.value.indexOf(condition.data.property) > -1
            );
          }).length > 0
        ) {
          var result = true;
        }
        condition.value =
          condition.data.property_type + " ? " + condition.data.property;
      }

      // if visitor does NOT have contact property value contains keyword in integration
      if (
        condition.condition_type.indexOf(
          "If contact property value does NOT contain in"
        ) > -1
      ) {
        if (
          person.data[service] == undefined ||
          person.data[service]["properties"] == undefined ||
          $cf.grep(person.data[service]["properties"], function (p) {
            return (
              p.property == condition.data.property_type &&
              p.value.indexOf(condition.data.property) > -1
            );
          }).length == 0
        ) {
          var result = true;
        }
        condition.value =
          condition.data.property_type + " ? " + condition.data.property;
      }

      // if visitor has contact property value matches keyword in integration
      if (
        condition.condition_type.indexOf("If person has field value in") > -1
      ) {
        if (
          person.data[service] !== undefined &&
          person.data[service]["properties"] !== undefined &&
          $cf.grep(person.data[service]["properties"], function (p) {
            return (
              p.id == condition.data.property_type &&
              p.value == condition.data.property
            );
          }).length > 0
        ) {
          var result = true;
        }
        condition.value =
          condition.data.property_type + " = " + condition.data.property;
      }

      // if visitor does NOT have contact property value matching keyword in integration
      if (
        condition.condition_type.indexOf(
          "If person doesn't have field value in"
        ) > -1
      ) {
        if (
          person.data[service] == undefined ||
          person.data[service]["properties"] == undefined ||
          $cf.grep(person.data[service]["properties"], function (p) {
            return (
              p.id == condition.data.property_type &&
              p.value == condition.data.property
            );
          }).length == 0
        ) {
          var result = true;
        }
        condition.value =
          condition.data.property_type + " != " + condition.data.property;
      }

      // if visitor has contact property value containing keyword in integration
      if (
        condition.condition_type.indexOf("If custom field contains value in") >
        -1
      ) {
        if ((
            person.data[service] !== undefined &&
            person.data[service]["fields"] !== undefined &&
            $cf.grep(person.data[service]["fields"], function (field) {
              return (
                field.id == condition.data.field &&
                field.value &&
                field.value.indexOf(condition.data.value) > -1
              );
            }).length > 0
          ) || (
            person.data[service] !== undefined &&
            person.data[service]["properties"] !== undefined &&
            $cf.grep(person.data[service]["properties"], function (p) {
              return (
                p.id == condition.data.property_type &&
                p.value &&
                p.value.indexOf(condition.data.property) > -1
              );
            }).length > 0
          )
        ) {
          var result = true;
        }
        condition.value =
          (condition.data.field || condition.data.property_type) + " ? " + (condition.data.value || condition.data.property);
      }

      // if visitor does NOT have contact property value matching keyword in integration
      if (
        condition.condition_type.indexOf(
          "If custom field does NOT contain value in"
        ) > -1
      ) {
        if ((
          person.data[service] == undefined ||
          person.data[service]["fields"] == undefined ||
          $cf.grep(person.data[service]["fields"], function (field) {
            return (
              field.id == condition.data.field &&
              field.value &&
              field.value.indexOf(condition.data.value) > -1
            );
          }).length == 0
        ) && (
          person.data[service] == undefined ||
          person.data[service]["properties"] == undefined ||
          $cf.grep(person.data[service]["properties"], function (p) {
            return (
              p.id == condition.data.property_type &&
              p.value &&
              p.value.indexOf(condition.data.property) > -1
            );
          }).length == 0
        )) {
          var result = true;
        }
        condition.value =
          (condition.data.field || condition.data.property_type) + " ? " + (condition.data.value || condition.data.property);
      }

      // check if body class for wordpress page and page ID match
      if (condition.condition_type == "If visiting WordPress page") {
        if (
          $cf("body").hasClass("page") &&
          (condition.data.page_id == "All" ||
            $cf("body").hasClass("page-id-" + condition.data.page_id))
        ) {
          var result = true;
        }
        condition.value = condition.data.page_id;
      }

      // check if check body class for wordpress page and page ID do NOT match
      if (condition.condition_type == "If NOT visiting WordPress page") {
        if (
          $cf("body").hasClass("page") == false ||
          (condition.data.page_id !== "All" &&
            $cf("body").hasClass("page-id-" + condition.data.page_id) == false)
        ) {
          var result = true;
        }
        condition.value = condition.data.page_id;
      }

      // check if body class for wordpress post and post ID match
      if (condition.condition_type == "If visiting WordPress post") {
        if (
          $cf("body").hasClass("single-post") &&
          (condition.data.post_id == "All" ||
            $cf("body").hasClass("postid-" + condition.data.post_id))
        ) {
          var result = true;
        }
        condition.value = condition.data.post_id;
      }

      // check if body class for wordpress post and post ID do NOT match
      if (condition.condition_type == "If NOT visiting WordPress post") {
        if (
          $cf("body").hasClass("single-post") == false ||
          (condition.data.post_id !== "All" &&
            $cf("body").hasClass("postid-" + condition.data.post_id) == false)
        ) {
          var result = true;
        }
        condition.value = condition.data.post_id;
      }

      // check if body class for wordpress category ID match
      if (condition.condition_type == "If visiting WordPress category") {
        if (
          $cf("body").hasClass("category-" + condition.data.category_id) ||
          ($cf("body").hasClass("single-post") &&
            $cf(".post")
              .first()
              .hasClass("category-" + condition.data.category_id))
        ) {
          var result = true;
        }
        condition.value = condition.data.category_id;
      }

      // check if body class for wordpress category ID do NOT match
      if (condition.condition_type == "If NOT visiting WordPress category") {
        if (
          $cf("body").hasClass("category-" + condition.data.category_id) ==
            false &&
          ($cf("body").hasClass("single-post") &&
            $cf(".post")
              .first()
              .hasClass("category-" + condition.data.category_id)) == false
        ) {
          var result = true;
        }
        condition.value = condition.data.category_id;
      }

      // check if body class for wordpress tag ID match
      if (condition.condition_type == "If WordPress post has tag") {
        if (
          $cf("body").hasClass("tag-" + condition.data.tag_id) ||
          ($cf("body").hasClass("single-post") &&
            $cf(".post")
              .first()
              .hasClass("tag-" + condition.data.tag_id))
        ) {
          var result = true;
        }
        condition.value = condition.data.tag_id;
      }

      // check if body class for wordpress tag ID do NOT match
      if (condition.condition_type == "If WordPress post does NOT have tag") {
        if (
          $cf("body").hasClass("tag-" + condition.data.tag_id) == false &&
          ($cf("body").hasClass("single-post") &&
            $cf(".post")
              .first()
              .hasClass("tag-" + condition.data.tag_id)) ==
            false
        ) {
          var result = true;
        }
        condition.value = condition.data.tag_id;
      }

      // check if body class has logged in class
      if (condition.condition_type == "If person is logged into WordPress") {
        if ($cf("body").hasClass("logged-in")) {
          var result = true;
        }
      }

      // check if body class has logged in class
      if (
        condition.condition_type == "If person is NOT logged into WordPress"
      ) {
        if ($cf("body").hasClass("logged-in") == false) {
          var result = true;
        }
      }

      // if custom field selection contains
      if (
        condition.condition_type.indexOf("If CTA custom field contains") > -1 ||
        condition.condition_type.indexOf("If form custom field contains") > -1 || 
        condition.condition_type == "If custom field contains" || 
        condition.condition_type == "If funnel custom field contains" || 
        condition.condition_type == "If contact custom field value contains"
      ) {
        if (
          person.extra !== undefined &&
          condition.data !== null &&
          condition.data.slug !== undefined &&
          condition.keyword !== null &&
          person.extra[condition.data.slug] !== undefined &&
          person.extra[condition.data.slug].indexOf(condition.keyword) > -1
        ) {
          var result = true;
        }
        if (condition.data !== null) {
          condition.value = condition.data.slug + " ? " + condition.keyword;
        }
      }

      // if custom field selection does NOT contain
      if (
        condition.condition_type.indexOf("If CTA custom field does NOT contain") > -1 ||
        condition.condition_type.indexOf("If form custom field does NOT contain") > -1 || 
        condition.condition_type == "If custom field does NOT contain" || 
        condition.condition_type == "If funnel custom field does NOT contain" ||
        condition.condition_type == "If contact custom field value does NOT contain"
      ) {
        if (
          person.extra == undefined ||
          condition.data == undefined ||
          condition.data.slug == undefined ||
          condition.keyword == undefined ||
          person.extra[condition.data.slug] == undefined ||
          person.extra[condition.data.slug].indexOf(condition.keyword) == -1
        ) {
          var result = true;
        }
        if (condition.data !== null) {
          condition.value = condition.data.slug + " ? " + condition.keyword;
        }
      }

      // If CTA survey selection matches
      if (
        condition.condition_type.indexOf("If CTA survey selection matches") > -1 ||
        condition.condition_type.indexOf("If survey selection matches") > -1 || 
        condition.condition_type == "If answer to question is"
      ) {
        if (
          person.extra !== undefined &&
          condition.data !== null &&
          condition.data.slug !== undefined &&
          condition.keyword !== null &&
          person.extra[condition.data.slug] !== undefined &&
          (person.extra[condition.data.slug] == condition.keyword || (person.extra[condition.data.slug].split(', ').includes(condition.keyword)))
        ) {
          var result = true;
        }
        if (condition.data !== null) {
          condition.value = condition.data.slug + " == " + condition.keyword;
        }
      }

      // If CTA survey selection does NOT match
      if (
        condition.condition_type.indexOf("If CTA survey selection does NOT match") > -1 ||
        condition.condition_type.indexOf("If survey selection does NOT match") > -1 || 
        condition.condition_type == "If answer to question is NOT"
      ) {
        if (
          person.extra == undefined ||
          condition.data == undefined ||
          condition.data.slug == undefined ||
          condition.keyword == undefined ||
          person.extra[condition.data.slug] == undefined ||
          (person.extra[condition.data.slug] !== condition.keyword && person.extra[condition.data.slug].split(', ').includes(condition.keyword) == false)
        ) {
          var result = true;
        }
        if (condition.data !== null) {
          condition.value = condition.data.slug + " != " + condition.keyword;
        }
      }


      // if variant's current score is greater than provided value
      if (condition.condition_type == "If current score is greater than" || 
          condition.condition_type == "If funnel score is greater than") {
        if (
          payload && 
          payload.variant && 
          payload.variant.score !== undefined && 
          app.helpers.isNumeric(condition.keyword) && 
          payload.variant.score > parseInt(condition.keyword)
        ) {
          var result = true;
        }
        condition.value = "Funnel score > " + condition.keyword;
      }

      // if variant's current score is less than provided value
      if (condition.condition_type == "If current score is less than" || 
          condition.condition_type == "If funnel score is less than") {
        if (
          payload && 
          payload.variant && 
          payload.variant.score !== undefined && 
          app.helpers.isNumeric(condition.keyword) && 
          payload.variant.score < parseInt(condition.keyword)
        ) {
          var result = true;
        }
        condition.value = "Funnel score < " + condition.keyword;
      }

      // if variant's current answers are mostly the selected letter
      if (condition.condition_type == "If quiz answers are mostly") {
        if (
          payload &&
          payload.variant &&
          payload.variant.current_answers &&
          typeof payload.variant.current_answers == 'object' &&
          payload.variant.current_answers.length > 0
        ) {
          let letter = condition.keyword;
          let letterPosition = letter.charCodeAt(0) - 65 + 1;

          let currentAnswers = payload.variant.current_answers;
          let positions = currentAnswers.map((field) => {
            const normalizedFieldOptions = app.helpers.normalizeObjectsPositions(Object.values(field.field_options));

            const answer = normalizedFieldOptions.find((option) => option.value == field.answers[0].value);
            return answer.position;
          }).flat();

          let mostFrequent = app.helpers.findMostFrequent(positions);

          if (mostFrequent !== null && letterPosition == mostFrequent) {
            var result = true;
          }
        }
        condition.value = `If quiz answers are mostly ${condition.keyword}`;
      }

      // if variant's current answers are NOT mostly the selected letter
      if (condition.condition_type == "If quiz answers are NOT mostly") {
        if (
          !payload ||
          !payload.variant ||
          !payload.variant.current_answers ||
          typeof payload.variant.current_answers !== 'object' ||
          payload.variant.current_answers.length == 0
        ) {
          var result = true;

        } else {
          let letter = condition.keyword;
          let letterPosition = letter.charCodeAt(0) - 65 + 1;

          let currentAnswers = payload.variant.current_answers;
          let positions = currentAnswers.map((field) => {
            const normalizedFieldOptions = app.helpers.normalizeObjectsPositions(Object.values(field.field_options));

            const answer = normalizedFieldOptions.find((option) => option.value == field.answers[0].value);
            return answer.position;
          }).flat();
          let mostFrequent = app.helpers.findMostFrequent(positions);

          if (mostFrequent === null || letterPosition !== mostFrequent) {
            var result = true;
          }
        }
        condition.value = `If quiz answers are NOT mostly ${condition.keyword}`;
      }

      // If person has purchased product in connected shopping cart
      if (
        condition.condition_type.indexOf("If person has purchased product in") >
        -1
      ) {
        if (
          person.data[service] !== undefined &&
          person.data[service]["purchases"] !== undefined &&
          $cf.grep(person.data[service]["purchases"], function (s) {
            return s.id == condition.data.product_variant_id;
          }).length > 0
        ) {
          var result = true;
        }
        condition.value = condition.data.product_variant_id;
      }

      // If person has NOT purchased product in connected shopping cart
      if (
        condition.condition_type.indexOf(
          "If person has NOT purchased product in"
        ) > -1
      ) {
        if (
          person.data[service] == undefined ||
          person.data[service]["purchases"] == undefined ||
          $cf.grep(person.data[service]["purchases"], function (s) {
            return s.id == condition.data.product_variant_id;
          }).length == 0
        ) {
          var result = true;
        }
        condition.value = condition.data.product_variant_id;
      }

      // check if person has completed CTA step
      if (condition.condition_type == "If current step has been completed") {
        if (
          person.data !== undefined &&
          person.data["campaigns"] !== undefined &&
          person.data["campaigns"]["ctas"] !== undefined &&
          person.data["campaigns"]["ctas"] !== undefined &&
          person.data["campaigns"]["ctas"][condition.data["cta_id"]] !==
            undefined &&
          person.data["campaigns"]["ctas"][condition.data["cta_id"]][
            "variants"
          ] !== undefined &&
          person.data["campaigns"]["ctas"][condition.data["cta_id"]][
            "variants"
          ][condition.data["variant_id"]] !== undefined &&
          person.data["campaigns"]["ctas"][condition.data["cta_id"]][
            "variants"
          ][condition.data["variant_id"]]["steps"] !== undefined &&
          person.data["campaigns"]["ctas"][condition.data["cta_id"]][
            "variants"
          ][condition.data["variant_id"]]["steps"][
            condition.data["step_id"]
          ] !== undefined &&
          person.data["campaigns"]["ctas"][condition.data["cta_id"]][
            "variants"
          ][condition.data["variant_id"]]["steps"][condition.data["step_id"]][
            "stats"
          ] !== undefined &&
          person.data["campaigns"]["ctas"][condition.data["cta_id"]][
            "variants"
          ][condition.data["variant_id"]]["steps"][condition.data["step_id"]][
            "stats"
          ]["Complete"] !== undefined
        ) {
          var result = true;
        }
      }

      // Segment conditions
      if (condition.condition_type.indexOf("in Segment") > -1) {
        var ajs_traits;
        var personas_traits;

        if (
          window.analytics &&
          typeof analytics.user == "function" &&
          analytics.user() &&
          analytics.user().traits()
        ) {
          var ajs_traits = analytics.user().traits();
        }

        if (
          person.data["segment"] &&
          person.data["segment"] &&
          person.data["segment"]["properties"]
        ) {
          var personas_traits = person.data["segment"]["properties"];
        }

        // check if person's segment trait matches value
        if (condition.condition_type == "If trait matches in Segment") {
          if (
            (ajs_traits &&
              typeof ajs_traits == "object" &&
              ajs_traits[condition.data.trait] &&
              ajs_traits[condition.data.trait].toString() ==
                condition.data.value) ||
            (personas_traits &&
              $cf.grep(personas_traits, function (p) {
                return (
                  p.id == condition.data.trait &&
                  p.value.toString() == condition.data.value
                );
              }).length > 0)
          ) {
            var result = true;
          }

          condition.value = condition.data.trait + " ? " + condition.data.value;
        }

        // check if person's segment trait does NOT match value
        if (condition.condition_type == "If trait does NOT match in Segment") {
          if (
            (!ajs_traits ||
              typeof ajs_traits !== "object" ||
              !ajs_traits[condition.data.trait] ||
              ajs_traits[condition.data.trait].toString() !==
                condition.data.value) &&
            (!personas_traits ||
              $cf.grep(personas_traits, function (p) {
                return (
                  p.id == condition.data.trait &&
                  p.value.toString() == condition.data.value
                );
              }).length == 0)
          ) {
            var result = true;
          }

          condition.value = condition.data.trait + " ? " + condition.data.value;
        }

        // check if person's segment trait contains keyword
        if (
          condition.condition_type == "If trait contains keyword in Segment"
        ) {
          if (
            ajs_traits &&
            typeof ajs_traits == "object" &&
            ajs_traits[condition.data.trait] &&
            ajs_traits[condition.data.trait]
              .toString()
              .indexOf(condition.data.value) > -1
          ) {
            var result = true;
          }

          if (
            result !== true &&
            personas_traits &&
            $cf.grep(personas_traits, function (p) {
              return (
                p.id == condition.data.trait &&
                p.value.toString().indexOf(condition.data.value) > -1
              );
            }).length > 0
          ) {
            var result = true;
          }

          condition.value = condition.data.trait + " ? " + condition.data.value;
        }

        // check if person's segment trait does NOT contain keyword
        if (
          condition.condition_type ==
          "If trait does NOT contain keyword in Segment"
        ) {
          if (
            !ajs_traits ||
            typeof ajs_traits !== "object" ||
            !ajs_traits[condition.data.trait] ||
            ajs_traits[condition.data.trait]
              .toString()
              .indexOf(condition.data.value) == -1
          ) {
            var result = true;

            if (
              !personas_traits ||
              $cf.grep(personas_traits, function (p) {
                return (
                  p.id == condition.data.trait &&
                  p.value.toString().indexOf(condition.data.value) > -1
                );
              }).length == 0
            ) {
              var result = true;
            } else {
              var result = false;
            }
          }

          condition.value = condition.data.trait + " ? " + condition.data.value;
        }

        // check if person's segment trait integer is greater than given integer
        if (
          condition.condition_type ==
          "If trait integer is greater than in Segment"
        ) {
          if (
            (ajs_traits &&
              typeof ajs_traits == "object" &&
              ajs_traits[condition.data.trait] &&
              typeof ajs_traits[condition.data.trait] == "number" &&
              ajs_traits[condition.data.trait] >
                parseInt(condition.data.value)) ||
            (personas_traits &&
              $cf.grep(personas_traits, function (p) {
                return (
                  p.id == condition.data.trait &&
                  typeof p.value == "number" &&
                  parseInt(p.value) > condition.data.value
                );
              }).length > 0)
          ) {
            var result = true;
          }

          condition.value = condition.data.trait + " ? " + condition.data.value;
        }

        // check if person's segment trait integer is less than given integer
        if (
          condition.condition_type == "If trait integer is less than in Segment"
        ) {
          if (
            (ajs_traits &&
              typeof ajs_traits == "object" &&
              ajs_traits[condition.data.trait] &&
              typeof ajs_traits[condition.data.trait] == "number" &&
              ajs_traits[condition.data.trait] <
                parseInt(condition.data.value)) ||
            (personas_traits &&
              $cf.grep(personas_traits, function (p) {
                return (
                  p.id == condition.data.trait &&
                  typeof p.value == "number" &&
                  parseInt(p.value) < condition.data.value
                );
              }).length > 0)
          ) {
            var result = true;
          }

          condition.value = condition.data.trait + " ? " + condition.data.value;
        }
      }

      // Segment conditions
      if (condition.condition_type.indexOf("Shopify") > -1) {
        let cart;
        let total_price;
        let cart_products;
        let integration = $cf.map(app.website.integrations, function (
          integration
        ) {
          if (integration.integration_type == "Shopify") return integration;
        })[0];

        const cartSession = window.convertflow?.session?.cart?.Shopify

        if (integration && integration.cart) {
          cart = integration.cart;
          total_price = cart.original_total_price || cart.total_price;
          cart_products = integration?.cart?.items
        } else if (cartSession) {
          cart = cartSession;
          total_price = cartSession.lines
            ?.map(a => a.price)
            ?.reduce((a,b) => parseFloat(a) + parseFloat(b)) * 100 || 0
          cart_products = cartSession?.lines?.map(line => {
            return {
              handle: line.product.handle,
              product_type: line.product.productType,
              title: line.product.title
            }
          })
        }

        if (condition.condition_type == "If visiting Shopify product") {
          if (
            window.location.href.indexOf(
              "products/" + condition.data["product_id"]
            ) > -1
          ) {
            var result = true;
          }

          condition.value = condition.data["product_id"];
        }

        if (condition.condition_type == "If NOT visiting Shopify product") {
          if (
            window.location.href.indexOf(
              "products/" + condition.data["product_id"]
            ) == -1
          ) {
            var result = true;
          }

          condition.value = condition.data["product_id"];
        }

        if (condition.condition_type == "If visiting Shopify collection") {
          if (
            window.location.href.indexOf(
              "collections/" + condition.data["collection_id"]
            ) > -1 ||
            (condition.data["collection_id"] == "frontpage" &&
              window.location.pathname == "/")
          ) {
            var result = true;
          }

          condition.value = condition.data["collection_id"];
        }

        if (condition.condition_type == "If NOT visiting Shopify collection") {
          if (
            window.location.href.indexOf(
              "collections/" + condition.data["collection_id"]
            ) == -1 &&
            (condition.data["collection_id"] == "frontpage" &&
              window.location.pathname == "/") == false
          ) {
            var result = true;
          }

          condition.value = condition.data["collection_id"];
        }

        if (condition.condition_type == "If Shopify cart contains product") {
          if (
            cart &&
            cart_products &&
            $cf.map(cart_products, function (item) {
              if (item["handle"] == condition.data["product_id"]) return item;
            }).length > 0
          ) {
            var result = true;
          }

          condition.value = condition.data["product_id"];
        }

        if (
          condition.condition_type == "If Shopify cart does NOT contain product"
        ) {
          if (
            !cart ||
            !cart_products ||
            $cf.map(cart_products, function (item) {
              if (item["handle"] == condition.data["product_id"]) return item;
            }).length == 0
          ) {
            var result = true;
          }

          condition.value = condition.data["product_id"];
        }

        if (condition.condition_type == "If Shopify cart contains type of product") {
          if (
            cart &&
            cart_products &&
            $cf.map(cart_products, function (item) {
              if ((item["product_type"] || "").toLowerCase() == condition.data["product_type"].toLowerCase()) return item;
            }).length > 0
          ) {
            var result = true;
          }

          condition.value = condition.data["product_type"].toLowerCase();
        }

        if (
          condition.condition_type == "If Shopify cart does NOT contain type of product"
        ) {
          if (
            !cart ||
            !cart_products ||
            $cf.map(cart_products, function (item) {
              if ((item["product_type"] || "").toLowerCase() == condition.data["product_type"].toLowerCase()) return item;
            }).length == 0
          ) {
            var result = true;
          }

          condition.value = condition.data["product_type"].toLowerCase();
        }

        if (condition.condition_type == "If Shopify cart has product with title containing keyword") {
          if (
            cart &&
            cart_products &&
            $cf.map(cart_products, function (item) {
              if ((item["title"] || "").toLowerCase().indexOf(condition.data["keyword"].toLowerCase()) > -1) return item;
            }).length > 0
          ) {
            var result = true;
          }

          condition.value = condition.data["keyword"].toLowerCase();
        }

        if (
          condition.condition_type == "If Shopify cart does NOT have product with title containing keyword"
        ) {
          if (
            !cart ||
            !cart_products ||
            $cf.map(cart_products, function (item) {
              if ((item["title"] || "").toLowerCase().indexOf(condition.data["keyword"].toLowerCase()) > -1) return item;
            }).length == 0
          ) {
            var result = true;
          }

          condition.value = condition.data["keyword"].toLowerCase();
        }

        if (
          condition.condition_type ==
          "If Shopify cart contains greater than X items"
        ) {
          if (
            cart &&
            cart_products &&
            cart_products.length > parseInt(condition.data["value"])
          ) {
            var result = true;
          }

          condition.value = condition.data["value"];
        }

        if (
          condition.condition_type ==
          "If Shopify cart contains less than X items"
        ) {
          if (
            !cart ||
            !cart_products ||
            cart_products.length < parseInt(condition.data["value"])
          ) {
            var result = true;
          }

          condition.value = condition.data["value"];
        }

        if (
          condition.condition_type == "If Shopify cart value is greater than"
        ) {
          if (
            cart &&
            total_price &&
            total_price / 100 > parseInt(condition.data["value"])
          ) {
            var result = true;
          }

          condition.value = condition.data["value"];
        }

        if (condition.condition_type == "If Shopify cart value is less than") {
          if (
            !cart ||
            !total_price ||
            total_price / 100 < parseInt(condition.data["value"])
          ) {
            var result = true;
          }

          condition.value = condition.data["value"];
        }

        if (
          condition.condition_type ==
          "If Shopify order contains greater than X items"
        ) {
          if (
            typeof window.Shopify == "object" &&
            typeof window.Shopify.checkout == "object" && 
            typeof window.Shopify.checkout.line_items == 'object' && 
            window.Shopify.checkout.line_items.length > parseInt(condition.data["value"])
          ) {
            var result = true;
          }

          condition.value = condition.data["value"];
        }

        if (
          condition.condition_type ==
          "If Shopify order contains less than X items"
        ) {
          if (
            typeof window.Shopify == "object" &&
            typeof window.Shopify.checkout == "object" && 
            typeof window.Shopify.checkout.line_items == 'object' && 
            window.Shopify.checkout.line_items.length < parseInt(condition.data["value"])
          ) {
            var result = true;
          }

          condition.value = condition.data["value"];
        }

        if (
          condition.condition_type == "If Shopify order value is greater than"
        ) {
          if (
            typeof window.Shopify == "object" &&
            typeof window.Shopify.checkout == "object" && 
            window.Shopify.checkout.total_price && 
            parseFloat(window.Shopify.checkout.total_price) > parseInt(condition.data["value"])
          ) {
            var result = true;
          }

          condition.value = condition.data["value"];
        }

        if (condition.condition_type == "If Shopify order value is less than") {
          if (
            typeof window.Shopify == "object" &&
            typeof window.Shopify.checkout == "object" && 
            window.Shopify.checkout.total_price && 
            parseFloat(window.Shopify.checkout.total_price) < parseInt(condition.data["value"])
          ) {
            var result = true;
          }

          condition.value = condition.data["value"];
        }

        if (condition.condition_type == "If Shopify order has product") {
          if (
            typeof window.Shopify == "object" &&
            typeof window.Shopify.checkout == "object" && 
            typeof window.Shopify.checkout.line_items == 'object' && 
            $cf.map(window.Shopify.checkout.line_items, function (item) {
              if (item["product_id"] + '' == condition.data["product_id"]) return item;
            }).length > 0
          ) {
            var result = true;
          }

          condition.value = condition.data["product_id"];
        }

        if (
          condition.condition_type == "If Shopify order does NOT have product"
        ) {
          if (
            typeof window.Shopify == "object" &&
            typeof window.Shopify.checkout == "object" && 
            typeof window.Shopify.checkout.line_items == 'object' && 
            $cf.map(window.Shopify.checkout.line_items, function (item) {
              if (item["product_id"] + '' == condition.data["product_id"]) return item;
            }).length == 0
          ) {
            var result = true;
          }

          condition.value = condition.data["product_id"];
        }

        if (condition.condition_type == "If Shopify order has product with title containing keyword") {
          if (
            typeof window.Shopify == "object" &&
            typeof window.Shopify.checkout == "object" && 
            typeof window.Shopify.checkout.line_items == 'object' && 
            $cf.map(window.Shopify.checkout.line_items, function (item) {
              if ((item["title"] || "").toLowerCase().indexOf(condition.data["keyword"].toLowerCase()) > -1) return item;
            }).length > 0
          ) {
            var result = true;
          }

          condition.value = condition.data["keyword"].toLowerCase();
        }

        if (
          condition.condition_type == "If Shopify order does NOT have product with title containing keyword"
        ) {
          if (
            typeof window.Shopify == "object" &&
            typeof window.Shopify.checkout == "object" && 
            typeof window.Shopify.checkout.line_items == 'object' && 
            $cf.map(window.Shopify.checkout.line_items, function (item) {
              if ((item["title"] || "").toLowerCase().indexOf(condition.data["keyword"].toLowerCase()) > -1) return item;
            }).length == 0
          ) {
            var result = true;
          }

          condition.value = condition.data["keyword"].toLowerCase();
        }

        if (condition.condition_type == "If customer has tag in Shopify") {
          if (
            window.cf_shopify && 
            cf_shopify.tags &&
            cf_shopify.tags.includes(condition.data.tag)
          ) {
            var result = true;
          }
          condition.value = condition.data.tag;
        }

        if (condition.condition_type == "If customer does NOT have tag in Shopify") {
          if (
            !window.cf_shopify || 
            !cf_shopify.tags ||
            !cf_shopify.tags.includes(condition.data.tag)
          ) {
            var result = true;
          }
          condition.value = condition.data.tag;
        }

        if (condition.condition_type == "If customer has purchased Shopify product") {
          if (
            window.cf_shopify && 
            cf_shopify.orders &&
            cf_shopify.orders.some(order =>
              order.item_product_ids.includes(condition.data['product_id'])
            )
          ) {
            var result = true;
          }
          condition.value = condition.data['product_id'];
        }

        if (condition.condition_type == "If customer has NOT purchased Shopify product") {
          if (
            !window.cf_shopify || 
            !cf_shopify.orders ||
            !cf_shopify.orders.some(order =>
              order.item_product_ids.includes(condition.data['product_id'])
            )
          ) {
            var result = true;
          }
          condition.value = condition.data['product_id'];
        }
        
        if (condition.condition_type == "If customer has purchased Shopify product with keyword") {
          if (
            window.cf_shopify && 
            cf_shopify.orders &&
            cf_shopify.orders.some(order =>
              order.item_names.some(item_name =>
                item_name.toLowerCase().includes(condition.data.keyword.toLowerCase())
              )
            )
          ) {
            var result = true;
          }
          condition.value = condition.data.keyword.toLowerCase();
        }

        if (condition.condition_type == "If customer has NOT purchased Shopify product with keyword") {
          if (
            !window.cf_shopify || 
            !cf_shopify.orders ||
            !cf_shopify.orders.some(order =>
              order.item_names.some(item_name =>
                item_name.toLowerCase().includes(condition.data.keyword.toLowerCase())
              )
            )
          ) {
            var result = true;
          }
          condition.value = condition.data.keyword.toLowerCase();
        }

        if (condition.condition_type == "If customer total Shopify spend greater than") {
          if (
            window.cf_shopify && 
            cf_shopify.total_spent > parseInt(condition.data.value)
          ) {
            var result = true;
          }
          condition.value = condition.data.value;
        }

        if (condition.condition_type == "If customer total Shopify spend less than") {
          if (
            !window.cf_shopify || 
            cf_shopify.total_spent < parseInt(condition.data.value)
          ) {
            var result = true;
          }
          condition.value = condition.data.value;
        }
        
        if (condition.condition_type == "If customer Shopify order count is greater than") {
          if (
            window.cf_shopify && 
            cf_shopify.orders &&
            cf_shopify.orders.length > parseInt(condition.data.value)
          ) {
            var result = true;
          }
          condition.value = condition.data.value;
        }

        if (condition.condition_type == "If customer Shopify order count is less than") {
          if (
            !window.cf_shopify || 
            !cf_shopify.orders ||
            cf_shopify.orders.length < parseInt(condition.data.value)
          ) {
            var result = true;
          }
          condition.value = condition.data.value;
        }

        if (condition.condition_type == "If customer last Shopify order value is greater than") {
          if (
            window.cf_shopify && 
            cf_shopify.orders &&
            cf_shopify.orders.length > 0 &&
            cf_shopify.orders[0].total_net_amount > parseInt(condition.data.value)
          ) {
            var result = true;
          }
          condition.value = condition.data.value;
        }

        if (condition.condition_type == "If customer last Shopify order value is less than") {
          if (
            window.cf_shopify && 
            cf_shopify.orders &&
            cf_shopify.orders.length > 0 &&
            cf_shopify.orders[0].total_net_amount < parseInt(condition.data.value)
          ) {
            var result = true;
          }
          condition.value = condition.data.value;
        }
      }

      condition[operator] = result;
      description[operator] = result;
      results.push(description);
    }
  });

  if (
    ($cf.isEmptyObject(conditions) !== true &&
      ($cf.grep(results, function (s) {
        return s.and !== undefined;
      }).length == 0 ||
        $cf.grep(results, function (s) {
          return s.and == false;
        }).length == 0) &&
      $cf.grep(results, function (s) {
        return s.or !== undefined;
      }).length == 0) ||
    (($cf.grep(results, function (s) {
      return s.and !== undefined;
    }).length == 0 ||
      $cf.grep(results, function (s) {
        return s.and == false;
      }).length == 0) &&
      $cf.grep(results, function (s) {
        return s.or == true;
      }).length > 0)
  ) {
    var outcome = true;
  }

  // console.log(outcome)

  return outcome;
};


    // create or return cta localstorage history object

app.ctas.locallystored = function() {
  if (app.localstorage) {
    var locallystored = localStorage.getItem('cf_ctas')
    if (locallystored == undefined || locallystored == "undefined" || locallystored == null) {
      localStorage.setItem('cf_ctas', JSON.stringify({}))
      var data = {}
    } else {
      var locallystored = JSON.parse(locallystored);
      var data = {}
      if (location.search.indexOf('cfTime=true') > -1) {
        console.log(locallystored)
      }
      $cf.each(locallystored, function(cta_id, last_updated) {
        if (location.search.indexOf('cfTime=true') > -1) {
          console.log(app.website.ctas[parseInt(cta_id)])
          console.log(app.website.ctas[parseInt(cta_id)] == undefined || 
            app.website.ctas[parseInt(cta_id)].options['published_at'] == undefined || 
            (last_updated < app.helpers.parseDate(app.website.ctas[parseInt(cta_id)].options['published_at'])) || 
            (last_updated <= Date.parse(new Date()) - (7 * 24 * 60 * 60 * 1000)))
        }
        if (app.website.ctas[parseInt(cta_id)] == undefined || 
            app.website.ctas[parseInt(cta_id)].options['published_at'] == undefined || 
            (last_updated < app.helpers.parseDate(app.website.ctas[parseInt(cta_id)].options['published_at'])) || 
            (last_updated <= Date.parse(new Date()) - (7 * 24 * 60 * 60 * 1000))
          ) {
          localStorage.removeItem('cta' + cta_id)
        } else {
          data[cta_id] = last_updated
        }
        return data
      })
      localStorage.setItem('cf_ctas', JSON.stringify(data))
    }
    return data;
  } else {
    return {}
  }
}



// load CTA script or get from localstorage
app.ctas.load = function(cta_id, campaign, snippet, callback) {

  // only initiate CTA load if called from campaign that triggered CTA. priority order is 1) broadcast 2) CTA campaign

  var can_load_campaign = campaign && (
    (campaign.campaign_type == 'broadcast' && app.website.ctas[cta_id]['broadcast_id'] == campaign.id) 
    ||
    app.website.ctas[cta_id]['broadcast_id'] == undefined
  )

  // don't load CTA onto a convertflow landing page unless it's a direct cta snippet or conditions were specified

  var can_load_if_landing_page = campaign && (
    $cf('body').hasClass('convertflow-page') == false 
    || 
    snippet 
    || 
    $cf.map(campaign.conditions, function(condition) {
      var pageCtaOuter = $cf('.convertflow-cta.cf-page').parent();
      var pageCtaId = $cf(pageCtaOuter).attr('data-cta-id') || $cf(pageCtaOuter).attr('cta-id');

      if (!pageCtaId) {
        var pageCtaWrapper = $cf('.convertflow-cta.cf-page');
        var pageCtaId = $cf(pageCtaWrapper).attr('data-cta-id') || $cf(pageCtaWrapper).attr('cta-id');
      }

      if (condition.condition_type == 'If visiting ConvertFlow landing page' && (!condition.condition_cta || condition.condition_cta == pageCtaId)) {
        return condition
      }
    }).length > 0 
    ||
    window.Shopify !== undefined
  )


  if (campaign == undefined || (can_load_campaign && can_load_if_landing_page)) {

    var cta_path = app.assets_root + 'cta/' + cta_id + '.js';

    if (app.live == false) {
      var cta_path = cta_path + '?preview=true';
    }

    var local = app.helpers.decompressAndGet("cta" + cta_id)

    if (local !== null && local !== "undefined") {
      var cta = JSON.parse(local)
    } else {
      var cta = null;
    }
    var selectors = [];
    var conditions = undefined
    if (campaign !== undefined) {
      var conditions = $cf.map(campaign.conditions, function(condition) {
        if (condition.cta_id == cta_id && condition.condition_type == 'If area is' && condition.area_id !== null) return condition
      })
    }

    // determine areas to inject inline CTA into
    if (conditions !== undefined) {
      $cf.each(conditions, function(index, condition) {
        var area_selector = 'cf-' + app.website.id + '-area-' + condition.area_id;
        selectors.push('.' + area_selector + ' , ' + '#' + area_selector);

        if ($cf(`.${area_selector}`)[0]) {
          condition.and = true;
          condition.value = condition.area_id;
        }
      })
    }

    if (snippet !== undefined) {
      var cta_id = $cf(snippet).attr('cta-id') || $cf(snippet).attr('data-cta-id')
      var website_id = $cf(snippet).attr('website-id') || $cf(snippet).attr('data-website-id')
      if (website_id == app.website.id) {
        selectors.push(snippet)
      }
    }

    if (campaign !== undefined && campaign.campaign_type == 'broadcast' && campaign.quick == false) {
      app.website.ctas[cta_id][campaign.campaign_type + '_id'] = campaign.id
    }

    var startInject = function(callback) {
      // associate with campaign
      if (campaign !== undefined && campaign.campaign_type == 'broadcast' && campaign.quick == false) {
        convertflow.ctas[cta_id]['broadcast_id'] = campaign.id
      }

      var cta = convertflow.ctas[cta_id];
      if (cta !== undefined) {
        app.ctas.inject(cta, campaign, selectors, callback);
      }
    }
  
    if (cta == null || (app.website.ctas[cta_id] !== undefined && app.helpers.parseDate(cta.options.published_at) < app.helpers.parseDate(app.website.ctas[cta_id].options.published_at))) {
      var async = app.website.ctas[cta_id] && app.website.ctas[cta_id].cta_type !== 'page';

      app.helpers.loadScript(cta_path, function() {
        var cta = convertflow.ctas[cta_id]

        if (app.live == true && cta.cta_type == 'inline') {
          var locallystored = app.ctas.locallystored();
          app.helpers.compressAndStore("cta" + cta_id, JSON.stringify(cta))
          locallystored[cta_id] = Date.parse(new Date())

          if (app.localstorage) {
            localStorage.setItem('cf_ctas', JSON.stringify(locallystored));
          }
        }

        startInject(callback)
      }, async);
    } else {
      convertflow.ctas[cta_id] = cta;
      startInject(callback)
    }
  }

  // mark campaigns as false if page is convertflow landing page and they're not targeted to the page
  if ($cf('body').hasClass('convertflow-page') && campaign && can_load_if_landing_page == false) {
    campaign.status = false
  }
}



// inject CTA html into page
app.ctas.inject = function(cta, campaign, selectors, callback) {
  if ($cf('body').length > 0) {
    var variant = app.ctas.test(cta);

    if (variant) {
      if (cta.cta_type !== 'inline' && cta.cta_type !== 'page' && app.live == true) {
        if ($cf('#' + 'cta' + cta.id).length == 0) {

          if (variant.options['trigger_type'] !== 'click' && campaign !== undefined && campaign.campaign_type == 'broadcast') {
            var supression = cta.cta_type + 'Triggered'

            if (convertflow[supression] == undefined) {
              convertflow[supression] = campaign.id;

              if (variant.options['trigger_type'] == 'prehook') {
                convertflow.hookTriggered = campaign.id;
              }
            }
          }

          var div = document.createElement('div');
          $cf(div).attr('id', 'cta' + cta.id).css('display', 'none');
          var classname = "convertflow-cta";
          if (app.website.ctas[cta.id] !== undefined) {
            var classname = classname + ' cf-' + app.website.ctas[cta.id].cta_type;
          }
          div.className = classname;

          div.innerHTML = variant.html;
          var component = $cf(div).children('[data-react-class]')[0];
          if (component) {
            $cf(component).removeAttr('data-react-props');
            $cf(component).removeAttr('data-react-class');
            $cf(component).removeAttr('data-hydrate');
            $cf(component).removeAttr('data-react-cache-id');
          }
          
          $cf(document.body).append(div);
          app.ctas.initialize(cta, variant, $cf('#' + 'cta' + cta.id), callback);
        }
      } else {
        $cf(selectors).each(function(index, selector) {
          // is this an area? if so, get the ID
          var isArea = (typeof selector === "string" && selector.indexOf('area') > -1) ? true : false;
          if (isArea == true) {
            var area_id = selector.split("-").pop()
          } else {
            var area_id = undefined
          }

          var checkForEmbed = function(selector) {
            if ($cf(selector).length > 0) {
              $cf(selector).each(function() {
                // if standalone CTA, inject into area if empty. If embedded CTA injected into area, check if area is available or reserved
                if ($cf(this).find('.convertflow-cta').length == 0 && ((isArea == true && area_id !== undefined && convertflow['areas'][area_id] == cta.id) || isArea == false)) {
                  
                  if (convertflow.ctas[cta.id]['broadcast_id'] && !$cf(this).attr('broadcast-id')) {
                    $cf(this).attr('broadcast-id', convertflow.ctas[cta.id]['broadcast_id'])
                  }
                  
                  if (app.timed == true) {
                    console.timeEnd('CTA inject');
                  }

                  if ($cf(this).attr('data-variant-id') && $cf(this).find(`[id="cta_${cta.id}"]`).length > 0) {
                    var div = this;
                    var preloaded_variant_id = $cf(this).attr('data-variant-id');

                    if (preloaded_variant_id && convertflow.ctas[cta.id]['variants'][preloaded_variant_id]) {
                      variant = convertflow.ctas[cta.id]['variants'][preloaded_variant_id];
                    }

                  } else {
                    var div = document.createElement('div');
                    $cf(div).addClass('cta' + cta.id).css('display', 'block')
                    var classname = "convertflow-cta";
                    if (app.website.ctas[cta.id] !== undefined) {
                      var classname = classname + ' cf-' + app.website.ctas[cta.id].cta_type;
                    }
                    div.className = classname;

                    div.innerHTML = variant.html;
                    
                    $cf(div).find('div[id="cta_' + cta.id + '"]').css({'margin-left': 'auto', 'margin-right': 'auto'})
                    $cf(this).html(div);
                    $cf(div).attr('injected', 'true');
                  }

                  var component = $cf(div).children('[data-react-class]')[0];
                  if (component) {
                    $cf(component).removeAttr('data-react-props');
                    $cf(component).removeAttr('data-react-class');
                    $cf(component).removeAttr('data-hydrate');
                    $cf(component).removeAttr('data-react-cache-id');
                  }

                  
                  app.ctas.initialize(cta, variant, this, callback);

                  // check for snippets on loaded landing page CTA
                  if (cta.cta_type == 'page') {
                    app.ctas.findSnippets()
                    if (convertflow.person) {
                      app.campaigns.initialize(app.website, false)
                    }
                  }

                  if (app.live == false && typeof window.parent == 'object') {
                    console.log('embed finishLoading');
                    window.parent.postMessage('finishLoading', '*');
                  }
                }
              })
            } else if (document.readyState !== 'complete') {
              setTimeout(function() {
                checkForEmbed(selector)
              }, 10)
            }
          }

          checkForEmbed(selector)
        })
      }
    }
  } else {
    setTimeout(function() {
      app.ctas.inject(cta, campaign, selectors);
    }, 50)
  }
}



// looks for embedded CTA snippets

app.ctas.findSnippets = function() {
  window.convertflow.snippetsLoaded = true;
  if ($cf('.cf-cta-snippet[website-id="' + app.website.id + '"]').length > 0 || $cf('.cf-cta-snippet[data-website-id="' + app.website.id + '"]').length > 0) {
    $cf('.cf-cta-snippet[website-id="' + app.website.id + '"], .cf-cta-snippet[data-website-id="' + app.website.id + '"]').each(function(index, snippet) {

      if ($cf(snippet).attr('data-initialized') !== 'true') {
        $cf(snippet).attr('data-initialized', 'true');

        var cta_id = $cf(snippet).attr('cta-id') || $cf(snippet).attr('data-cta-id')
        var campaign;
        var broadcast_id = $cf(snippet).attr('data-broadcast-id')
        if (broadcast_id) {
          campaign = app.website.broadcasts[broadcast_id];
        }
        app.ctas.load(cta_id, campaign, snippet)
      }
    })
  } else if (document.readyState !== 'complete') {
    setTimeout(function() {
      app.ctas.findSnippets()
    }, 50)
  }
}



// enter variant IDs and probablity weights, 
// ordered accordingly, returns variant

app.ctas.splitTest = function(variations, weights) {
  var rand = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  var generateWeighedList = function(list, weight) {
    var weighed_list = [];
    for (var i = 0; i < weight.length; i++) {
      var multiples = weight[i] * 100;
      for (var j = 0; j < multiples; j++) {
        weighed_list.push(list[i]);
      }
    }
    return weighed_list;
  };

  // which variant of CTA?
  var weighed_list = generateWeighedList(variations, weights);
  var random_num = rand(0, weighed_list.length-1);
  var variant = weighed_list[random_num];
  return variant;
}



// split tests CTA, returns winning variant

app.ctas.test = function(cta) {
  if (app.live == true) {
    var variants = {}
    var variations = []
    var weights = []
    $cf.each(cta.variants, function(variant_id, variant) {
      var weight = variant.percentage * 0.01;
      variants[variant_id] = weight;
      variations.push(variant_id);
      weights.push(weight)
    })
    var cookie = app.helpers.getCookie("cf_" + app.website.id + "_cta_" + cta.id)

    // check if we should run new split test
    if (cta.test_type !== "cookie" || cookie == null || variants[cookie] == undefined || variants[cookie] == 0) {
      var variant = app.ctas.splitTest(variations, weights);

      if (cta.test_type == 'cookie' && Object.values(cta.variants).length > 1) {
        app.helpers.setCookie("cf_" + app.website.id + "_cta_" + cta.id, variant, 20 * 365 * 24 * 60);
      }
    } else {
      var variant = app.helpers.getCookie("cf_" + app.website.id + "_cta_" + cta.id)
    }

    var variantToShow = cta.variants[parseInt(variant)];
    if (variantToShow) {
      variantToShow.winner = true;
      return variantToShow;
    }
  } else {
    var variant_id = 0;
    var variantToShow = cta.variants[parseInt(variant_id)];
    variantToShow.winner = true;
    return variantToShow;
  }
}


// find and replace CTA merge tags

app.ctas.mergeTags = function(cta, variant, embed) {
  var personMap = app.helpers.personMap()
  $cf(embed).find('p, h1, h2, h3, h4, h5, h6, span, .cf-merge-tag-allowed').each(function(index, element) {
    $cf.each($cf(element).html().match("((.*))"), function(index, match) {
      if (typeof match !== 'undefined' && match !== null) {
        var txt = match.split('(');
        var mergetags = []
        for (var i = 1; i < txt.length; i++) {
          mergetags.push(txt[i].split(')')[0])
        }

        function fallback(mergetag, mergetag_text, dataname) {
          if (mergetag_text.indexOf('fallback') > -1) {
            var fallback = mergetag_text.slice(mergetag_text.indexOf('fallback=') + 'fallback='.length).replace(/\}/g, '').replace(/\)/g, '');
            $cf(element).html($cf(element).html().replace(mergetag, '<span data-merge="' + dataname + '">' + fallback + '</span>'));
          } else if (mergetag_text.indexOf('fallback') == -1) {
            $cf(element).html($cf(element).html().replace(mergetag, '<span data-merge="' + dataname + '"></span>'));
          }
        }

        // score merge tag
        if (match.indexOf('CURRENT_SCORE') !== -1) {
          var score_tags = mergetags.filter(function(mergetag) {return mergetag.indexOf('{CURRENT_SCORE}') > -1})

          $cf.each(score_tags, function(index, mergetag) {
            var mergetag = '(' + mergetag + ')';
            var mergetag_text = app.helpers.removeTags(mergetag);
            
            if (mergetag_text.indexOf(' OR ') > -1) {
              var parameter = mergetag_text.substring(12, mergetag_text.lastIndexOf(" OR ")).replace(/\}/g, '').replace(/\)/g, '');
            } else {
              var parameter = mergetag_text.substring(12, mergetag_text.lastIndexOf("})")).replace(/\}/g, '').replace(/\)/g, '');
            }

            if (variant.score !== undefined && variant.score !== null) {
              $cf(element).html($cf(element).html().replace(mergetag, '<span data-merge="CURRENT_SCORE">' + variant.score + '</span>'));
            } else {
              fallback(mergetag, mergetag_text, "CURRENT_SCORE");
            }
          })
        }

        // preset field merge tags
        $cf.each(personMap, function(dataname, property) {            
          if (match.indexOf(property) !== -1) {
            var person_tags = mergetags.filter(function(mergetag) {return mergetag.indexOf('person.' + property) > -1 && mergetag.indexOf('.fields.') == -1})

            $cf.each(person_tags, function(index, mergetag) {
              var mergetag = '(' + mergetag + ')';
              var mergetag_text = app.helpers.removeTags(mergetag);

              if ((convertflow.person !== undefined && convertflow.person[dataname] !== undefined && convertflow.person[dataname] !== null && convertflow.person[dataname].length > 0) || app.helpers.getParameterByName(property) !== "") {
                if (app.helpers.getParameterByName(property) == "") {
                  $cf(element).html($cf(element).html().replace(mergetag, '<span data-merge="' + dataname + '">' + convertflow.person[dataname] + '</span>'));
                } else {
                  $cf(element).html($cf(element).html().replace(mergetag, '<span data-merge="' + dataname + '">' + app.helpers.getParameterByName(property) + '</span>'));
                }
              } else {
                fallback(mergetag, mergetag_text, dataname);
              }
            })
          }
        });

        // custom field merge tags
        if (match.indexOf('.fields.') !== -1) {
          var field_tags = mergetags.filter(function(mergetag) {return mergetag.indexOf('person.fields.') > -1})
          $cf.each(field_tags, function(index, mergetag) {
            var mergetag = '(' + mergetag + ')';
            var mergetag_text = app.helpers.removeTags(mergetag);

            if (mergetag_text.indexOf(' OR ') > -1) {
              var dataname = mergetag_text.substring(16, mergetag_text.lastIndexOf(" OR ")).replace(/\}/g, '').replace(/\)/g, '');
            } else {
              var dataname = mergetag_text.substring(16, mergetag_text.lastIndexOf("})")).replace(/\}/g, '').replace(/\)/g, '');
            }

            if ((convertflow.person && convertflow.person.extra && (convertflow.person.extra[dataname] || convertflow.person.extra[dataname] == 0) ) || app.helpers.getParameterByName(dataname) !== "") {
              if (app.helpers.getParameterByName(dataname) == "") {
                $cf(element).html($cf(element).html().replace(mergetag, '<span data-merge="' + dataname + '">' + convertflow.person.extra[dataname] + '</span>'));
              } else {
                $cf(element).html($cf(element).html().replace(mergetag, '<span data-merge="' + dataname + '">' + app.helpers.getParameterByName(dataname) + '</span>'));
              }
            } else {
              fallback(mergetag, mergetag_text, dataname);
            }
          })
        }

        // url parameter merge tags
        if (match.indexOf('parameter=') !== -1) {
          var param_tags = mergetags.filter(function(mergetag) {return mergetag.indexOf('parameter=') > -1})

          $cf.each(param_tags, function(index, mergetag) {
            var mergetag = '(' + mergetag + ')';
            var mergetag_text = app.helpers.removeTags(mergetag);
            
            if (mergetag_text.indexOf(' OR ') > -1) {
              var parameter = mergetag_text.substring(12, mergetag_text.lastIndexOf(" OR ")).replace(/\}/g, '').replace(/\)/g, '');
            } else {
              var parameter = mergetag_text.substring(12, mergetag_text.lastIndexOf("})")).replace(/\}/g, '').replace(/\)/g, '');
            }

            if (app.helpers.getParameterByName(parameter) !== "") {
              $cf(element).html($cf(element).html().replace(mergetag, app.helpers.getParameterByName(parameter)));
            } else if (mergetag_text.indexOf('fallback') > -1) {
              var fallback = mergetag_text.slice(mergetag_text.indexOf('fallback=') + 'fallback='.length).replace(/\}/g, '').replace(/\)/g, '');
              $cf(element).html($cf(element).html().replace(mergetag, fallback));
            } else if (mergetag_text.indexOf('fallback') == -1) {
              $cf(element).html($cf(element).html().replace(mergetag, ''));
            }
          })
        }

        // global variable merge tags
        if (match.indexOf('window.') !== -1) {
          var tags = mergetags.filter(function(mergetag) {return mergetag.indexOf('window.') > -1})

          $cf.each(tags, function(index, mergetag) {
            var mergetag = '(' + mergetag + ')';
            var mergetag_text = app.helpers.removeTags(mergetag);
            
            if (mergetag_text.indexOf(' OR ') > -1) {
              var variableName = mergetag_text.substring(9, mergetag_text.lastIndexOf(" OR ")).replace(/\}/g, '').replace(/\)/g, '');
            } else {
              var variableName = mergetag_text.substring(9, mergetag_text.lastIndexOf("})")).replace(/\}/g, '').replace(/\)/g, '');
            }
            var globalVariable = app.helpers.nestedGet(window, variableName);

            if (globalVariable && (typeof globalVariable == 'string' || typeof globalVariable == 'number')) {
              globalVariable = globalVariable + '';
              $cf(element).html($cf(element).html().replace(mergetag, globalVariable));

            } else if (mergetag_text.indexOf('fallback') > -1) {
              var fallback = mergetag_text.slice(mergetag_text.indexOf('fallback=') + 'fallback='.length).replace(/\}/g, '').replace(/\)/g, '');
              $cf(element).html($cf(element).html().replace(mergetag, fallback));
            } else if (mergetag_text.indexOf('fallback') == -1) {
              $cf(element).html($cf(element).html().replace(mergetag, ''));
            }
          })
        }

        // shopping cart merge tags
        if (match.indexOf('cart.') !== -1) {
          var currency_character = (app.website.currency_character) ? app.website.currency_character : '$';
          var cart_tags = mergetags.filter(function(mergetag) {return mergetag.indexOf('cart.') > -1})

          $cf.each(cart_tags, function(index, mergetag) {
            var mergetag = '(' + mergetag + ')';
            var mergetag_text = app.helpers.removeTags(mergetag);
            var merge_value;

            if (mergetag_text.indexOf(' OR ') > -1) {
              var dataname = mergetag_text.substring(7, mergetag_text.lastIndexOf(" OR ")).replace(/\}/g, '').replace(/\)/g, '');
            } else {
              var dataname = mergetag_text.substring(7, mergetag_text.lastIndexOf("})")).replace(/\}/g, '').replace(/\)/g, '');
            }

            $cf(element).html($cf(element).html().replace(mergetag, `<span data-merge="${dataname}">${currency_character}0</span>`));

            function updateCartMergeTags() {
              if (convertflow.cart !== undefined && typeof convertflow.cart == 'object' && dataname) {
                var cart_count_threshold;
                var cart_value_threshold;

                if (variant.options['cart-value-threshold']) {
                  cart_value_threshold = variant.options['cart-value-threshold'];
                } else {
                  cart_value_threshold = (app.website.data['cart-value-threshold']) ? app.website.data['cart-value-threshold'] : 50;
                }

                if (dataname == 'count') {
                  merge_value = (convertflow.cart[dataname]) ? convertflow.cart[dataname] : '0';
                }

                if (dataname == 'value') {
                  merge_value = currency_character + ((convertflow.cart[dataname]) ? convertflow.cart[dataname].toFixed(2) : 0);
                }

                if (dataname == 'value_threshold' && cart_value_threshold) {
                  try {
                    merge_value = currency_character + parseInt(cart_value_threshold).toFixed(2);
                  } catch(err) {
                    console.log(err);
                  };
                }
              
                if (dataname == 'value_threshold_gap' && cart_value_threshold) {
                  try {
                    var threshold = parseInt(cart_value_threshold);
                    var cart_value = (convertflow.cart['value']) ? convertflow.cart['value'] : 0;
                    var gap = (threshold - cart_value).toFixed(2);
                    if (gap < 0) {
                      gap = 0;
                    }
                    merge_value = currency_character + gap;
                  } catch(err) {
                    console.log(err);
                  };
                }

                if (dataname == 'count_threshold' && cart_count_threshold) {
                  try {
                    merge_value = currency_character + parseInt(cart_count_threshold);
                  } catch(err) {
                    console.log(err);
                  };
                }

                if (dataname == 'count_threshold_gap' && cart_count_threshold) {
                  try {
                    var threshold = parseInt(cart_count_threshold);
                    var cart_count = (convertflow.cart['count']) ? convertflow.cart['count'] : 0;
                    var gap = threshold - cart_count;
                    if (gap < 0) {
                      gap = 0;
                    }
                    merge_value = gap;
                  } catch(err) {
                    console.log(err);
                  };
                }

                if (merge_value) {
                  $cf(element).find(`span[data-merge="${dataname}"]`).html(merge_value);
                }
              }
            }

            app.helpers.onVisible($cf(embed)[0], () => {
              updateCartMergeTags();
            });

            ['cfAddToCartShopify', 'cfUpdateCartShopify', 'cfChangeCartShopify', 'cfClearCartShopify'].forEach(function (eventName) {
              window.addEventListener(eventName, function (event) {
                updateCartMergeTags();
              });
            });

          });
        }

        // product page merge tags
        if (match.indexOf('product.') !== -1) {
          var product_tags = mergetags.filter(function(mergetag) {return mergetag.indexOf('product.') > -1})

          $cf.each(product_tags, function(index, mergetag) {
            var mergetag = '(' + mergetag + ')';
            var mergetag_text = app.helpers.removeTags(mergetag);
            var merge_value;

            if (mergetag_text.indexOf(' OR ') > -1) {
              var dataname = mergetag_text.substring(10, mergetag_text.lastIndexOf(" OR ")).replace(/\}/g, '').replace(/\)/g, '');
            } else {
              var dataname = mergetag_text.substring(10, mergetag_text.lastIndexOf("})")).replace(/\}/g, '').replace(/\)/g, '');
            }

            if (dataname) {
              const productObject = cta.product ? cta.product : convertflow.product;
              var currency_character = (app.website.currency_character) ? app.website.currency_character : '$';

              if (productObject && typeof productObject == "object") {

                if (dataname == 'title' && productObject.title) {
                  merge_value = productObject.title;
                }

                if (dataname == 'type' && productObject.type) {
                  merge_value = productObject.type;
                }

                if (dataname == 'price' && productObject.price) {
                  merge_value = currency_character + (productObject.price ? (productObject.price / 100).toFixed(2) : 0);
                }

                if (dataname == 'compare_at_price' && productObject.compare_at_price) {
                  merge_value = currency_character + (productObject.compare_at_price ? (productObject.compare_at_price / 100).toFixed(2) : 0);
                }

                if (dataname == 'description' && productObject.description) {
                  merge_value = productObject.description;
                }
              }
            }

            if (merge_value) {
              $cf(element).html($cf(element).html().replace(mergetag, '<span data-merge="' + dataname + '">' + merge_value + '</span>'));
            } else {
              fallback(mergetag, mergetag_text, dataname);
            }
          });
        }

        // product page merge tags
        if (match.indexOf('collection.') !== -1) {
          var collection_tags = mergetags.filter(function(mergetag) {return mergetag.indexOf('collection.') > -1})

          $cf.each(collection_tags, function(index, mergetag) {
            var mergetag = '(' + mergetag + ')';
            var mergetag_text = app.helpers.removeTags(mergetag);
            var merge_value;
            var stringLength = 'collection'.length;

            if (mergetag_text.indexOf(' OR ') > -1) {
              var dataname = mergetag_text.substring(stringLength, mergetag_text.lastIndexOf(" OR ")).replace(/\}/g, '').replace(/\)/g, '');
            } else {
              var dataname = mergetag_text.substring(stringLength, mergetag_text.lastIndexOf("})")).replace(/\}/g, '').replace(/\)/g, '');
            }

            if (dataname) {
              let urlPath = window.location.pathname;
              urlPath = urlPath.replace('/all', '');
              const match = urlPath.match(/\/collections\/([^/]+)/);

              if (match && match.length > 1) {
                const collectionName = match[1].replace('-', ' ');
                merge_value = collectionName.charAt(0).toUpperCase() + collectionName.slice(1);
              }
            }

            if (merge_value) {
              $cf(element).html($cf(element).html().replace(mergetag, '<span data-merge="' + dataname + '">' + merge_value + '</span>'));
            } else {
              fallback(mergetag, mergetag_text, dataname);
            }
          });
        }

        // integration custom field / properties merge tags
        var services = app.services;
        $cf.each(services, function(index, service) {
          if (match.indexOf(service) !== -1) {
            var service_tags = mergetags.filter(function(mergetag) {return mergetag.indexOf('person.' + service + '.') > -1})
            $cf.each(service_tags, function(index, mergetag) {
              var mergetag = '(' + mergetag + ')';
              var mergetag_text = app.helpers.removeTags(mergetag);

              if (mergetag_text.indexOf(' OR ') > -1) {
                var dataname = mergetag_text.substring(('person.' + service + '.').length + 2, mergetag_text.lastIndexOf(" OR ")).replace(/\}/g, '').replace(/\)/g, '');
              } else {
                var dataname = mergetag_text.substring(('person.' + service + '.').length + 2, mergetag_text.lastIndexOf("})")).replace(/\}/g, '').replace(/\)/g, '');
              }

              if (convertflow.person !== undefined && convertflow.person.data[service] !== undefined && convertflow.person.data[service]['fields'] && $cf.grep(convertflow.person.data[service]['fields'], function(p) { return (p.field == dataname || p.id == dataname || p.name == dataname) && p.value}).length !== 0) {
                var property = $cf.grep(convertflow.person.data[service]['fields'], function(p) { return (p.field == dataname || p.id == dataname || p.name == dataname)})[0].value
                $cf(element).html($cf(element).html().replace(mergetag, '<span data-merge="' + dataname + '">' + property + '</span>'));

              } else if (convertflow.person !== undefined && convertflow.person.data[service] !== undefined && convertflow.person.data[service]['properties'] && $cf.grep(convertflow.person.data[service]['properties'], function(p) { return (p.property == dataname || p.id == dataname || p.name == dataname) && p.value}).length !== 0) {
                var property = $cf.grep(convertflow.person.data[service]['properties'], function(p) { return (p.property == dataname || p.id == dataname || p.name == dataname)})[0].value
                $cf(element).html($cf(element).html().replace(mergetag, '<span data-merge="' + dataname + '">' + property + '</span>'));

              } else {
                fallback(mergetag, mergetag_text, dataname);
              }
            })
          }
        })
      }
    })
  })
}



app.ctas.initialize = function(cta, variant, embed, callback) {

  app.variants.handleLoad({
    cta: cta,
    variant: variant,
    embed: embed
  });

  app.ctas.style(cta, variant, embed)
  app.ctas.brandStyle(cta, variant, embed)
  app.ctas.poweredby(cta, variant, embed)
  app.ctas.consentMessages(cta, variant, embed)
  app.helpers.plugins();

  if ((cta.cta_type == 'inline' || cta.cta_type == 'page') == false) {
    app.ctas.trigger(cta, variant, embed)
    app.ctas.bindClose(cta, variant, embed)
  }
  app.ctas.profile(cta, variant, embed)

  // make sure columns height match
  $cf(embed).find('.cf-section').each(function(index, section) {
    var section_id = $cf(section).attr('section-id')

    if (cta.cta_type == 'overlay' && cta.overlay_type == 'splash' && 
      (variant.options['splash-type'] == undefined || variant.options['splash-type'] == 'full')) {
      $cf(section).find('.cf-column').css('min-height', $cf(window).height())
    }
  });

  app.ctas.mergeTags(cta, variant, embed);
  app.ctas.forms(cta, variant, embed);
  app.ctas.buttons(cta, variant, embed);
  app.ctas.surveys(cta, variant, embed);

  if (app.website.data['google-fonts'] != 'false') {
    app.ctas.fonts(cta, variant, embed)
  }

  // track view, fire first step script and run skip logic if page CTA or inline cta
  if (cta.cta_type == 'inline' || cta.cta_type == 'page') {

    var step = $cf.map(variant.steps, function(step) {if (step.position == 1) return step})[0]

    const campaignsCustomScript = () => {
      // run website custom scripts
      if (app.website && app.website.data && app.website.data['campaigns-script']) {
        try {
          $cf('body').append(app.website.data['campaigns-script']);
        } catch(e) {
          console.log(e.message, e.stack);
        };
      }
    }

    const pagesCustomScript = () => {
      // run website custom scripts
      if (app.website && app.website.data && app.website.data['pages-script']) {
        try {
          $cf('body').append(app.website.data['pages-script']);
        } catch(e) {
          console.log(e.message, e.stack);
        };
      }
    }

    const variantCustomScript = () => {
      // run variant custom scripts
      if (variant.options && variant.options['script']) {
        try {
          $cf('body').append(variant.options['script']);
        } catch(e) {
          console.log(e.message, e.stack);
        };
      }
    }

    const firstStepCustomScript = () => {
      // run step custom scripts
      if (step.options && step.options['script']) {
        try {
          $cf('body').append(step.options['script']);
        } catch(e) {
          console.log(e.message, e.stack);
        };
      }
    }

    if (cta.cta_type == 'page') {

      // segment
      let segmentIntegration = Object.values(app.website.integrations || []).filter((integration) => integration.integration_type == 'Segment')[0];
      if (segmentIntegration && segmentIntegration.segment_write_key) {
        !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){if(window.analytics.initialized)return window.analytics[e].apply(window.analytics,arguments);var i=Array.prototype.slice.call(arguments);i.unshift(e);analytics.push(i);return analytics}};for(var i=0;i<analytics.methods.length;i++){var key=analytics.methods[i];analytics[key]=analytics.factory(key)}analytics.load=function(key,i){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=i};analytics._writeKey=segmentIntegration.segment_write_key;;analytics.SNIPPET_VERSION="4.16.1";
          analytics.load(segmentIntegration.segment_write_key);
          analytics.page();
        }}();
      }

      // connected gtm container
      let gtmIntegration = Object.values(app.website.integrations || []).filter((integration) => integration.integration_type == 'Googletagmanager')[0];

      if (gtmIntegration && gtmIntegration.gtm_id) {
        var gtag_path = `https://www.googletagmanager.com/gtag/js?id=${gtmIntegration.gtm_id}`;
        var configOptions = {};
        var clientId = app.helpers.getParameterByName('clientId');
        var sessionId = app.helpers.getParameterByName('sessionId');

        if (clientId) configOptions['client_id'] = clientId;
        if (sessionId) configOptions['session_id'] = sessionId;

        if (!window.gtag) {
          app.helpers.loadScript(gtag_path, function() {
            window.dataLayer = window.dataLayer || [];
            window.gtag = function(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());
            gtag('config', gtmIntegration.gtm_id, configOptions);
            console.log('gtag loaded', gtmIntegration.gtm_id);
          }, true);

        } else if (app.helpers.isGtagLoaded(gtmIntegration.gtm_id) !== true) {

          app.helpers.loadScript(gtag_path, function() {
            window.dataLayer = window.dataLayer || [];
            gtag('config', gtmIntegration.gtm_id, configOptions);
            console.log('gtag loaded', gtmIntegration.gtm_id);
          }, true);
        }

      } else {
        
        // if GA measurement ID added, use that
        var tracking_id;
        if (app.website.data['google-analytics-tracking-id']) {
          tracking_id = app.website.data['google-analytics-tracking-id'];
        }

        if (tracking_id) {
          var gtag_path = `https://www.googletagmanager.com/gtag/js?id=${tracking_id}`;
          var configOptions = {};
          var clientId = app.helpers.getParameterByName('clientId');
          var sessionId = app.helpers.getParameterByName('sessionId');

          if (clientId) configOptions['client_id'] = clientId;
          if (sessionId) configOptions['session_id'] = sessionId;

          if (!window.gtag) {
            app.helpers.loadScript(gtag_path, function() {
              window.dataLayer = window.dataLayer || [];
              window.gtag = function(){
                dataLayer.push(arguments);
              }

              gtag('js', new Date());
              gtag('config', tracking_id, configOptions);
              console.log('google analytics measurement ID loaded', tracking_id);
            }, true);

          } else if (app.helpers.isGtagLoaded(tracking_id) !== true) {

            app.helpers.loadScript(gtag_path, function() {
              window.dataLayer = window.dataLayer || [];
              gtag('config', tracking_id, configOptions);
              console.log('google analytics measurement ID loaded', tracking_id);
            }, true);
          }
        }

      }

      pagesCustomScript();
      variantCustomScript();
      firstStepCustomScript();
      
      app.ctas.initializeStep(cta, variant, step, embed);
    }

    if (app.live == true) {

      var trackExternalEvent = function() {
        app.visitors.fireEvent("cfView", {
          cta: cta,
          variant: variant,
          step: step,
        });
      }

      app.helpers.onVisible($cf(embed)[0], () => {
        if (convertflow.ctas[cta.id]['viewTracked'] !== true) {
          convertflow.ctas[cta.id]['viewTracked'] = true;
          
          app.ctas.track({
            event_type: 'View', 
            variant_id: variant.id,
            step_id: step.id
          }, cta);

          if (cta.cta_type == 'inline') {
            trackExternalEvent();
            campaignsCustomScript();
            variantCustomScript();
            firstStepCustomScript();

            app.ctas.initializeStep(cta, variant, step, embed);
          }
        }
      });

      // if a landing page, wait until page loads to track external events
      if (cta.cta_type == 'page') {
        $cf(window).on('load', function() {
          trackExternalEvent();
        });
      }
    }
  }

  if (callback !== undefined) {
    callback(cta, variant, embed);
  }
}




// dynamic load in google fonts

app.ctas.fonts = function(cta, variant, embed) {
  $cf(embed).find('[style*="font-family"],[data-font]').each(function(i, dom_element) {
    var full_font_family = $cf(dom_element).attr("data-font") || dom_element.style.fontFamily || $cf(dom_element).css("font-family");
    
    if (full_font_family) {
      $cf(full_font_family.split(',')).each(function(i, font_family) {
        var font_family = font_family.replace(/['"]+/g, '').trim();

        if (font_family && $cf.inArray(font_family, ["Your site font", "Helvetica Nueue", 'Helvetica Neue', 'Helvetica-Nueue', 'Helvetica', "Georgia", 'Verdana', 'Times', 'system-ui', 'sans-serif', 'serif', 'inherit', 'Arial', 'sans-serif', 'San-serif', '-apple-system']) == -1 && convertflow.fonts[font_family] == undefined) {

          function loadFont(font_family) {
            if (!convertflow.fonts[font_family]) {
              convertflow.fonts[font_family] = dom_element;
              WebFont.load({
                google: {
                  families: [font_family, `${font_family}:700,900`]
                }
              })
            }
          }
          
          if (window['WebFont'] == undefined) {
            $cf(document).on('cfFontReady', function() {
              loadFont(font_family);
            });

            if (window.convertflow.fontsLoaded == undefined) {
              window.convertflow.fontsLoaded = true;
              app.helpers.cachedScript('https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js').done(function() {
                $cf(document).trigger('cfFontReady');
              });
            }
          } else {
            loadFont(font_family);
          }
        }
      });
    }
  });
}



// update CTA profile

app.ctas.profile = function(cta, variant, embed) {
  var brand = app.website.brand;
  var user_id = $cf(embed).find('.cf-profile-name').attr('data-user-id') || $cf(embed).find('.cf-profile-name').attr('user-id');
  
  var user = (user_id !== undefined) ? app.website.profiles[parseInt(user_id)] : undefined;

  // use latest brand name
  $cf(embed).find('.cf-profile-title').each(function(index, span) {
    if (brand !== null && brand.length > 0) {
      $cf(span).text(brand);
    }
  })

  // use latest user data
  if (user !== undefined) {
    $cf(embed).find('.cf-profile-name').each(function(index, span) {
      if (user.name !== null && user.name.length > 0) {
        var name = user.name
        if (user.lastname !== null && user.lastname.length > 0) {
          var name = name + ' ' + user.lastname
        }
        $cf(span).text(name);
      }
    })

    // update profile image source if it's changed
    $cf(embed).find('.cf-profile-img').each(function(index, div) {
      var image = $cf(div).find('img')
      if ($cf(image).attr('src') !== user.avatar) {
        $cf(image).attr('src', user.avatar)
      }
    })
  }
}



// show powered by links

app.ctas.poweredby = function(cta, variant, embed) {
  if (app.website.powered_by == true && app.live == true) {
    $cf('.cf-powered-by').show()
  }
}



// update consent messages

app.ctas.consentMessages = function(cta, variant, embed) {
  if (app.website.privacy_message.length > 0) {
    var privacy_message = $cf('<div />').html(app.website.privacy_message).text();
    $cf(embed).find('.cf-privacy-message').text(privacy_message);
  }
  if (app.website.privacy_link.length > 0) {
    var privacy_link = app.website.privacy_link
    if (app.website.privacy_link.indexOf('http') == -1) {
      var privacy_link = 'http://' + privacy_link
    }
    $cf(embed).find('.cf-privacy-link').attr('href', privacy_link).show();
  }

  if (app.website.privacy_link_text.length > 0) {
    var privacy_link_text = $cf('<div />').html(app.website.privacy_link_text).text();
    $cf(embed).find('.cf-privacy-link').html('<br>' + privacy_link_text)
  }

  if (app.website.terms_link.length > 0) {
    var terms_link = app.website.terms_link
    if (app.website.terms_link.indexOf('http') == -1) {
      var terms_link = 'http://' + terms_link
    }
    $cf(embed).find('.cf-terms-link').attr('href', terms_link).show();
  }

  if (app.website.terms_link_text.length > 0) {
    var terms_link_text = $cf('<div />').html(app.website.terms_link_text).text();
    $cf(embed).find('.cf-terms-link').text(terms_link_text);
  }

  if (app.website.marketing_consent.length > 0) {
    var marketing_consent = $cf('<div />').html(app.website.marketing_consent).text();
    $cf(embed).find('.cf-marketing-label').html(marketing_consent)
  }

  if (app.website.sms_consent.length > 0) {
    var smsConsentMessage = app.website.sms_consent;

    if (app.website.brand) {
      smsConsentMessage = smsConsentMessage.replace('{BRAND}', app.website.brand);
    } else {
      smsConsentMessage = smsConsentMessage.replace('{BRAND}', window.location.hostname);
    }
    
    var sms_consent = $cf('<div />').html(smsConsentMessage).text();
    $cf(embed).find('.cf-sms-message').html(sms_consent)
  }
}



// resets all popup CTA suppression and removes embedded CTAs

app.ctas.resetCTAs = function() {
  var ctas = window.convertflow.ctas;
  var html_style = $cf('html').attr('style');

  if (ctas) {
    $cf.each(Object.keys(ctas), function(index, cta_id) {
      if (ctas[cta_id]) {
        ctas[cta_id]['fired'] = undefined
        ctas[cta_id]['clicktriggered'] = undefined

        if (ctas[cta_id]['timeout']) {
          clearTimeout(ctas[cta_id]['timeout']);
          ctas[cta_id]['timeout'] = undefined;
        }
      }
    })
  }

  if (convertflow.barTriggered == true && html_style && html_style.indexOf('padding-top') > -1 && html_style.indexOf('transition') > -1) {
    $cf('html').css('transition', '').css('padding-top', '')
  }

  convertflow.hookTriggered = undefined;
  convertflow.overlayTriggered = undefined;
  convertflow.twoTapTriggered = undefined;
  convertflow.barTriggered = undefined;
  convertflow.snippetsLoaded = undefined;
  convertflow.areas = {};

  $cf('.convertflow-cta, .cf-prehook-popup').remove()
  $cf('.cf-cta-snippet[data-initialized="true"]').each(function(index, snippet) {
    $cf(snippet).attr('data-initialized', 'false');
  });
}


// add dynamic cta styles to container

app.ctas.style = function (cta, variant, embed) {
  var embed_css = { width: "100%" };

  // treat 2560px as 100% width
  if (variant.options["container-width"] == '2560px') {
    variant.options["container-width"] = '100%'; 
  }

  // outer center sidebars and bumpers
  if (cta.cta_type == "inline") {
    if (
      variant.options["cta-position"] == "center" ||
      (variant.options["cta-position"] == undefined &&
        (cta.inline_type == "sidebar" || cta.inline_type == "bumper"))
    ) {
      embed_css["margin-left"] = "auto";
      embed_css["margin-right"] = "auto";
    }

    if (variant.options["cta-position"] == "left") {
      embed_css["margin-right"] = "auto";
    }

    if (variant.options["cta-position"] == "right") {
      embed_css["margin-left"] = "auto";
    }

    if (cta.inline_type == "embed") {
      embed_css["max-width"] = variant.options["container-width"];
    } else {
      if (cta.inline_type == "sidebar") {
        embed_css["max-width"] = "310px";
      }

      if (cta.inline_type == "bumper") {
        embed_css["max-width"] = "900px";
      }
    }
  }

  if (cta.cta_type !== "inline") {
    var popup_css = {};

    // define extra popup elements
    var trigger = $cf(embed).find('div[id="cta_' + cta.id + '"]');
    $cf(trigger).addClass("cf-has-transitions cf-is-hidden");

    var trigger_css = {};
    var container = trigger;

    // add close icon
    var close_css = {};
    if (cta.cta_type !== "page" && $cf(embed).find(".cf-close").length == 0) {
      $cf(container).prepend(
        '<div data-cta="' + cta.id + '" class="cf-cta-close">x</div>'
      );
      var close = $cf(embed).find(".cf-cta-close");
    }

    // style powered by link
    var powered_by = $cf(
      '<div class="cf-powered-by" style="display: none; bottom: 0; padding: 7px; padding-top: 5px; width: 100%; text-align: center; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; height: 30px; line-height: 22px !important;">' +
        '<a rel="nofollow" href="' +
        app.powered_by_link +
        '" target="_blank" style="cursor: pointer; font-family: Helvetica Neue, Helvetica, Arial, sans-serif !important; letter-spacing: 0.5px !important; font-smoothing: antialiased !important; -moz-osx-font-smoothing: auto !important; -webkit-font-smoothing: antialiased !important;">' +
        '<div class="cf-powered-by-inner" style="display: block !important; margin-left: auto !important; margin-right: auto !important; max-width: 143px !important; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; font-family: inherit !important; color: inherit !important;">' +
        '<span style="float: left; font-size: 11px; font-family: inherit !important; color: inherit !important; letter-spacing: inherit !important;">Crafted in</span>' +
        '<img style="width: 11px !important; transition: all 0.2s ease !important; left: 0 !important; right: 0 !important; float: left !important; margin-left: 4px !important; margin-right: auto !important; margin-top: 6px !important;" />' +
        '<span style="float: right; font-size: 11px; font-family: inherit !important; color: inherit !important; letter-spacing: inherit !important;">ConvertFlow</span>' +
        "</div>" +
        "</a>" +
        "</div>"
    );

    // set powered by link utms

    var link = $cf(powered_by).find("a").attr("href");

    if (link.indexOf("https://www.convertflow.com/") > -1) {
      var link = link.replace("https://www.convertflow.com/", "");
    }

    if (link.indexOf("https://app.convertflow.com/refer") > -1) {
      var link = link.replace("https://app.convertflow.com/refer", "");
    }

    if (link.indexOf("utm_campaign=default") > -1) {
      var link = link.replace("default", cta.cta_type);
    }

    if (cta.cta_type == "page") {
      var link = "/landing-pages" + link;
    }

    if (cta.cta_type == "overlay" || cta.cta_type == "hook") {
      var link = "/popups" + link;
    }

    if (cta.cta_type == "bar") {
      var link = "/sticky-bars" + link;
    }

    var link = link + "&utm_content=" + cta.id;
    $cf(powered_by)
      .find("a")
      .attr("href", "https://www.convertflow.com" + encodeURI(link));

    if (
      cta.cta_type == "page" ||
      cta.cta_type == "bar" ||
      (cta.cta_type == "overlay" && ["dark", "custom"].includes(variant.options["container-background"]))
    ) {
      $cf(powered_by).css({
        background: "rgba(22, 31, 49, 0.85)",
      });

      $cf(powered_by)
        .find("a")
        .each(function () {
          $cf(this)[0].style.setProperty("color", "#fff", "important");
        });

      $cf(powered_by)
        .find("img")
        .attr(
          "src",
          "https://img.convertflow.co/static/convertflow-crafted-in-icon-white.png"
        );
    } else {
      $cf(powered_by).css({
        background:
          cta.cta_type == "overlay" ||
          (cta.cta_type == "hook" && $cf(window).width() <= 480)
            ? "rgba(255, 255, 255, 0.95)"
            : "none",
      });

      $cf(powered_by)
        .find("a")
        .each(function () {
          $cf(this)[0].style.setProperty("color", "#bbb", "important");
        });

      $cf(powered_by)
        .find("img")
        .attr(
          "src",
          "https://img.convertflow.co/static/convertflow-crafted-in-icon-grey.png"
        );
    }

    // add overlay specific styles
    if (cta.cta_type == "overlay") {
      
      $cf(powered_by).css({
        position: "fixed",
        "z-index": "100000",
        cursor: "pointer",
      });

      $cf.extend(popup_css, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        "overflow-y": "auto",
        "z-index": "100001",
        opacity: "0",
        transition: "opacity 0.2 ease",
      });

      if (variant.options["container-background"] == "dark") {
        popup_css["background"] = "rgba(15, 21, 33, 0.89)";
      } else if (variant.options["container-background"] == "light") {
        popup_css["background"] = "rgba(250, 250, 255, 0.88)";
      } else if (variant.options["container-background"] == "custom" && variant.options["container-background-color"]) {
        popup_css["background"] = variant.options["container-background-color"];
      } else {
        popup_css["background"] = "rgba(15, 21, 33, 0.89)";
      }

      if (cta.overlay_type == "boxed") {
        var boxed_style = {};

        if ($cf(window).width() > 480) {
          $cf.extend(boxed_style, {
            position: "absolute",
            "margin-left": "auto",
            "margin-right": "auto",
            "margin-top": "4%",
            cursor: "initial",
            "z-index": "99998",
            left: "0",
            right: "0",
            "margin-bottom": "4%",
          });

          boxed_style["max-width"] = variant.options["container-width"];

          if (app.helpers.IE()) {
            boxed_style["width"] = variant.options["container-width"];
          }
        } else {
          $cf.extend(boxed_style, {
            position: "absolute",
            "margin-left": "auto",
            "margin-right": "auto",
            "margin-top": "10%",
            "margin-bottom": "4%",
            "max-width": "90%",
            width: "100%",
            "min-width": "310px",
            cursor: "initial",
            "z-index": "99998",
            left: "0",
            right: "0",
          });
          close_css["top"] = "1%";
        }

        if (variant.options["container-width"] == "100%") {
          boxed_style["margin-top"] = "0px";
          boxed_style["margin-bottom"] = "0px";
          boxed_style["max-width"] = "100%";
        }

        $cf.extend(trigger_css, boxed_style);
      }

      if (cta.overlay_type == "splash") {
        var splash_style = {};

        if ($cf(window).width() > 480) {
          $cf.extend(trigger_css, {
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            cursor: "initial",
            "z-index": "99998",
          });
        } else {
          $cf.extend(close_css, {
            top: "2%",
          });
        }
      }

      if (
        variant.options["close-style"] == undefined ||
        variant.options["close-style"] == "default"
      ) {
        var close_style = {
          position: "absolute",
          right: "10px",
          top: "10px",
          width: "25px",
          height: "25px",
          "border-radius": "25px",
          "text-align": "center",
          "line-height": "22px",
          "font-size": "19px",
          "font-family": "Verdana, Arial, sans-serif",
          cursor: "pointer",
          "z-index": "99999",
          "box-shadow": "rgba(0, 0, 0, 0.2) 0px 3px 50px 0px",
        };

        close_style["background"] = "rgba(242, 245, 249, 1)";
        close_style["color"] = "rgb(103 111 132)";

        $cf.extend(close_css, close_style);
      }
      var powered_by_div = embed;
    }

    // add hook specific styles
    if (cta.cta_type == "hook") {
      // desktop hooks
      if ($cf(window).width() > 480) {
        $cf(powered_by).css({
          position: "absolute",
          "z-index": "100000",
          cursor: "pointer",
          "max-width": "100%",
          bottom: "0px",
          "border-radius": "0px 0px 3px 3px",
        });

        // corner (vertical and horizontal) hook styles
        if (cta.hook_type !== "full") {
          var corner_style = {};

          if (app.website.powered_by == true) {
            corner_style["bottom"] = "0px";
            corner_style["padding-bottom"] = "30px";
          } else {
            corner_style["padding-bottom"] = "0px";
            corner_style["bottom"] = "20px";
          }

          $cf.extend(corner_style, {
            position: "fixed",
            "z-index": "99999",
          });

          if (
            cta.hook_type == "vertical" &&
            (variant.options["container-width"] == undefined ||
              variant.options["container-width"] == "310px")
          ) {
            $cf.extend(corner_style, {
              width: "310px",
            });
          }
          if (
            cta.hook_type == "horizontal" ||
            (cta.hook_type == "vertical" &&
              variant.options["container-width"] == "500px")
          ) {
            $cf.extend(corner_style, {
              width: "500px",
            });
          }

          if (
            cta.hook_type == "vertical" &&
            variant.options["container-width"]
          ) {
            $cf.extend(corner_style, {
              width: variant.options["container-width"],
            });
          }

          if (
            variant.options["cta-position"] == undefined ||
            variant.options["cta-position"] == "right"
          ) {
            corner_style["right"] = "20px";
          }

          if (variant.options["cta-position"] == "left") {
            corner_style["left"] = "20px";
          }

          if (variant.options["cta-position"] == "center") {
            corner_style["right"] = "0";
            corner_style["left"] = "0";
            corner_style["margin-left"] = "auto";
            corner_style["margin-right"] = "auto";
          }
          
          const cfContainer = $cf(embed).children('div[id="cta_' + cta.id + '"]').children(".cf-container");
          app.helpers.onVisible($cf(cfContainer)[0], () => {
            app.ctas.setHookPopupOverflow(embed, cta, variant);
          })

          // corner close style
          if (
            variant.options["close-style"] == undefined ||
            variant.options["close-style"] == "default"
          ) {
            var close_style = {
              position: "absolute",
              right: "5px",
              top: "5px",
              width: "20px",
              height: "20px",
              "border-radius": "20px",
              "text-align": "center",
              "line-height": "18px",
              "font-size": "14px",
              "font-family": "Verdana, Arial, sans-serif",
              cursor: "pointer",
              "z-index": "99999",
            };
            close_style["background"] = "rgba(242, 245, 249, 1)";
            close_style["color"] = "rgb(103 111 132)";
          }

          $cf.extend(trigger_css, corner_style);
          var powered_by_div = trigger;
        }

        // full height hook style
        if (cta.hook_type == "full") {
          $cf(powered_by).css({
            "margin-left": "-20px",
            "max-width": "390px",
          });

          $cf.extend(popup_css, {
            position: "fixed",
            top: "0",
            right: "0",
            width: "100%",
            "max-width": "390px",
            height: "100%",
            "overflow-y": "auto",
            "z-index": "100000",
            opacity: "0",
            transition: "opacity 0.2 ease",
            "box-shadow": "rgba(0, 0, 0, 0.290196) 0px 2px 5px 0px",
            padding: "0px 20px",
            "-webkit-box-sizing": "border-box",
            "-moz-box-sizing": "border-box",
            "box-sizing": "border-box",
          });

          if (variant.options["container-background"] !== "dark") {
            popup_css["background"] = "rgba(250, 250, 255, 0.88)";
          } else {
            popup_css["background"] = "rgba(15, 21, 33, 0.89)";
          }

          // corner close style
          if (
            variant.options["close-style"] == undefined ||
            variant.options["close-style"] == "default"
          ) {
            var close_style = {
              position: "absolute",
              right: "3%",
              top: "1%",
              width: "25px",
              height: "25px",
              "border-radius": "20px",
              "text-align": "center",
              "line-height": "22px",
              "font-size": "16px",
              "font-family": "Verdana, Arial, sans-serif",
              cursor: "pointer",
              "z-index": "99999",
            };
            if (variant.options["container-background"] !== "dark") {
              close_style["background"] = "#f8fafd";
              close_style["color"] = "#8994b0";
            } else {
              close_style["background"] = "#202631";
              close_style["color"] = "#8994b0";
            }
          }

          $cf.extend(trigger_css, {
            width: "310px",
            position: "relative",
            "margin-top": "16%",
            "padding-bottom": "50px",
            "margin-left": "auto",
            "margin-right": "auto",
            "margin-bottom": "4%",
          });

          var powered_by_div = embed;
        }
      }

      if ($cf(window).width() <= 480) {
        $cf.extend(popup_css, {
          "overflow-y": "auto",
          "z-index": "100000",
          opacity: "0",
          transition: "opacity 0.2 ease"
        });

        var max_height = window.innerHeight - 80;
        $cf(embed)
          .children('div[id="cta_' + cta.id + '"]')
          .children(".cf-container")
          .css({
            "max-height": max_height + "px",
            "overflow-y": "auto",
          });

        $cf.extend(trigger_css, {
          "z-index": "100000",
          position: "fixed",
          bottom: "0",
          right: "0",
          left: "0",
          right: "0",
          width: "90%",
          "min-width": "310px",
          "max-height": "100%",
          "margin-left": "auto",
          "margin-right": "auto",
          "margin-bottom": "30px",
        });

        $cf(powered_by).css({
          position: "fixed",
          background: 'none'
        });

        $cf(powered_by).each(function () {
          $cf(this)[0].style.setProperty("margin-left", "inherit", "important");
        });

        var powered_by_div = embed;

        if (
          variant.options["close-style"] == undefined ||
          variant.options["close-style"] == "default"
        ) {
          var close_style = {
            position: "absolute",
            right: "5px",
            top: "5px",
            width: "25px",
            height: "25px",
            "border-radius": "20px",
            "text-align": "center",
            "line-height": "22px",
            "font-size": "16px",
            "font-family": "Verdana, Arial, sans-serif",
            cursor: "pointer",
            "z-index": "99999",
          };

          close_style["background"] = "rgba(242, 245, 249, 1)";
          close_style["color"] = "rgb(103 111 132)";
        }
        $cf(embed).find(".cf-profile").css("max-width", "100%");
        $cf(powered_by).css("max-width", "100%").css("margin-left", "0px");
        $cf(powered_by).find(".cf-powered-by img").css("opacity", "1");
        $cf(powered_by).find(".cf-powered-by a").css("color", "#fff");
      }

      $cf.extend(close_css, close_style);
    }

    // add landing pages tyles
    if (cta.cta_type == "page") {
      var powered_by_div = embed;
    }

    // add landing page and sticky bar powered by style
    if (cta.cta_type == "page" || cta.cta_type == "bar") {
      var icon = $cf(powered_by)
        .find("img")
        .each(function () {
          $cf(this)[0].style.setProperty("margin-right", "2px", "important");
          $cf(this)[0].style.setProperty("margin-top", "4px", "important");

          if (cta.cta_type == "page") {
            $cf(this)[0].style.setProperty("margin-left", "2px", "important");
          }
        });

      $cf(powered_by).find(".cf-powered-by-inner").prepend(icon);
      $cf(powered_by).find("span").first().remove();
      $cf(powered_by).find("span").text("Crafted in ConvertFlow");

      $cf(powered_by)
        .find("span")
        .each(function () {
          $cf(this)[0].style.setProperty("font-size", "10px", "important");
        });

      $cf(powered_by)
        .find(".cf-powered-by-inner")
        .each(function () {
          $cf(this)[0].style.setProperty("max-width", "135px", "important");
        });

      $cf(powered_by).css({
        padding: "3px",
        width: "147px",
        height: "25px",
        position: "fixed",
        "z-index": "100000",
        cursor: "pointer",
        left: "0",
        right: "initial",
        "line-height": "18px",
        background: "rgba(22, 31, 49, 0.60)",
        "border-radius": "0px 5px 0px 0px",
        top: "initial",
        bottom: "0",
      });
    }

    // add sticky bar styles
    if (cta.cta_type == "bar") {
      $cf.extend(popup_css, {
        position: "fixed",
        right: "0",
        width: "100%",
        "max-width": "100%",
        "z-index": "99998",
        display: "none",
        "-webkit-box-sizing": "border-box",
        "-moz-box-sizing": "border-box",
        "box-sizing": "border-box",
      });

      if (variant.options["bar-position"] == "top") {
        popup_css["top"] = "0";

        if (variant.options["bar-fixed"] == 'false') {
          popup_css['position'] = 'absolute';
        }

        $cf("html")
          .css("transition", "padding-top 0.3s")
          .css("-webkit-transition", "padding-top 0.3s");
      } else {
        popup_css["bottom"] = "0";
      }

      if (variant.options["bar-fixed"] !== 'false') {
        var max_height = window.innerHeight;
        $cf(embed)
          .children('div[id="cta_' + cta.id + '"]')
          .children(".cf-container")
          .css({
            "max-height": max_height + "px",
            "overflow-y": "auto",
          }).scrollTop(0);
      }

      if (variant.options["container-width"]) {
        popup_css['max-width'] = variant.options["container-width"];
      }

      if (
        variant.options["cta-position"] == "right"
      ) {
        popup_css["right"] = "0px";
      }

      if (variant.options["cta-position"] == "left") {
        popup_css["left"] = "0px";
      }

      if (variant.options["cta-position"] == undefined || variant.options["cta-position"] == "center") {
        popup_css["right"] = "0";
        popup_css["left"] = "0";
        popup_css["margin-left"] = "auto";
        popup_css["margin-right"] = "auto";
      }

      var close_style = {
        position: "fixed",
        right: "5px",
        top: "5px",
        width: "20px",
        height: "20px",
        "border-radius": "20px",
        "text-align": "center",
        "line-height": "18px",
        "font-size": "14px",
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        "font-family": "Verdana, Arial, sans-serif",
        cursor: "pointer",
        "z-index": "99999",
      };

      close_style["background"] = "rgba(242, 245, 249, 1)";
      close_style["color"] = "rgb(103 111 132)";

      if ($cf(window).width() <= 480) {
        close_style["top"] = "10px";
        close_style["right"] = "10px";
      }

      $cf(powered_by).find("span").hide();

      if (variant.options["bar-position"] == "top") {
        $cf(powered_by).css({
          "border-radius": "0px 0px 5px 0px",
          top: "0",
          bottom: "initial",
        });
      } else {
        $cf(powered_by).css({
          "border-radius": "0px 5px 0px 0px",
          top: "initial",
          bottom: "0",
        });
      }

      $cf(powered_by).css("width", "25px");
      $cf(powered_by).css("position", "absolute");

      $cf(powered_by)
        .on("mouseover", function () {
          $cf(this).find("span").show();
          $cf(powered_by).css("width", "141px");
        })
        .on("mouseleave", function () {
          $cf(this).find("span").hide();
          $cf(powered_by).css("width", "25px");
        });

      var powered_by_div = embed;

      $cf.extend(close_css, close_style);
    }

    $cf(powered_by_div).append(powered_by);
    $cf(embed).css(popup_css);
    $cf(trigger).css(trigger_css);

    // apply close css
    if (close) {
      $cf(close).css(close_css);
    }
  }

  if (
    cta.cta_type == "page" ||
    ((cta.cta_type == "inline" || cta.cta_type == "overlay") &&
      variant["options"]["container-width"] == "100%")
  ) {
    const expandSectionHeight = function (section_id) {
      $cf(`.cf-section[section-id="${section_id}"]`).attr("data-browser-height", "true");
      $cf(`.cf-section[section-id="${section_id}"], .cf-column[section-id="${section_id}"]`)
        .each(function (i, section_div) {
          $cf(section_div).css("min-height", $cf(window).height() + "px");
        });
    };

    $cf.each(variant.steps, function (step_id, step) {
      $cf.each(step.sections, function (section_id, section) {
        if (
          (section.options["structure"]["browser-height"] == "true" && $cf(window).width() > 1024) ||
          (section.options["structure"]["browser-height-mobile"] == "true" && $cf(window).width() <= 768)
        ) {
          expandSectionHeight(section_id);
        }
      });
    });
  }

  $cf(embed).css(embed_css);
};

// triggers popup CTAs

app.ctas.trigger = function (cta, variant, embed, trigger_type_override) {
  var trigger_cookie = "viewedCta" + cta.id;
  var trigger_type = variant.options.trigger_type;
  var step = $cf.map(variant.steps, function (step) {
    if (step.position == 1) return step;
  })[0];
  var supression = cta.cta_type + "Triggered";

  if (variant.options["aggressive"] == "true") {
    app.helpers.deleteCookie(trigger_cookie);
  }

  var fire = function (fire_trigger_type) {
    if (
      (convertflow.ctas[cta.id]["clicktriggered"] == undefined &&
        (convertflow[supression] == undefined ||
          cta.broadcast_id == convertflow[supression] ||
          fire_trigger_type == "click")) ||
      (convertflow.ctas[cta.id]["clicktriggered"] == true &&
        fire_trigger_type == "click")
    ) {
      $cf(embed).css({ display: "block", opacity: "1" });
      $cf(embed)
        .find('div[id="cta_' + cta.id + '"]')
        .removeClass("cf-is-hidden");

      if (cta.cta_type == "hook") {
        $cf(embed)
          .find('div[id="cta_' + cta.id + '"]')
          .addClass("slide-up");

      } else if (cta.cta_type == "bar") {
        if (variant.options["bar-position"] == "bottom") {
          $cf(embed)
            .find('div[id="cta_' + cta.id + '"]')
            .addClass("slide-up");
        } else {
          var barHeight = $cf(embed)
            .find('div[id="cta_' + cta.id + '"]')
            .outerHeight();
          $cf("html").css("padding-top", barHeight + "px");
          $cf(embed)
            .find('div[id="cta_' + cta.id + '"]')
            .addClass("slide-down");
        }

      } else {
        $cf(embed)
          .find('div[id="cta_' + cta.id + '"]')
          .addClass("is-visible");
      }

      if (convertflow.ctas[cta.id]["fired"] == undefined) {
        convertflow.ctas[cta.id]["fired"] = true;
        convertflow[supression] = true;

        if (app.live == true && step.tracked !== true) {
          step.tracked = true;
          
          app.ctas.track(
            {
              event_type: "View",
              variant_id: variant.id,
              step_id: step.id,
            },
            cta
          );
          app.visitors.fireEvent("cfView", {
            cta: cta,
            variant: variant,
            step: step,
          });
        }

        // run website custom scripts
        if (app.website && app.website.data && app.website.data['campaigns-script']) {
          try {
            $cf('body').append(app.website.data['campaigns-script']);
          } catch(e) {
            console.log(e.message, e.stack);
          };
        }

         // run variant custom scripts
        if (variant.options && variant.options['script']) {
          try {
            $cf('body').append(variant.options['script']);
          } catch(e) {
            console.log(e.message, e.stack);
          };
        }

        // run step custom scripts
        if (step.options && step.options["script"]) {
          try {
            $cf("body").append(step.options["script"]);
          } catch (e) {
            console.log(e.message, e.stack);
          }
        }

        app.ctas.initializeStep(cta, variant, step, embed);

        if (app.live == false && typeof window.parent == 'object') {
          console.log('popup finishLoading');
          window.parent.postMessage('finishLoading', '*');
        }
      }
    }
  };

  // trigger popup after X number of seconds
  this.delayed = function () {
    if (variant.options.delay !== undefined) {
      var delay = parseInt(variant.options.delay) * 1000;
    } else {
      var delay = 3 * 1000;
    }
    
    convertflow.ctas[cta.id]['timeout'] = setTimeout(function () {
      if (convertflow.ctas[cta.id]["fired"] !== true) {
        fire("delayed");
        convertflow.ctas[cta.id]['timeout'] = undefined;
      }
    }, delay);
  };

  // trigger popup when scrolling to X percentage
  this.scroll = function () {
    var length = $cf(document).height();
    if (variant.options.scroll !== undefined) {
      var scroll = parseInt(variant.options.scroll);
    } else {
      var scroll = 0;
    }
    var target = (scroll * length) / 100;
    $cf(window)
      .off("scroll.cta" + cta.id)
      .on("scroll.cta" + cta.id, function () {
        if (
          $cf(window).scrollTop() >= target &&
          $cf(embed).css("display") != "block"
        ) {
          if (convertflow.ctas[cta.id]["fired"] !== true) fire("scroll");
        }
      });
  };

  // trigger popup on exit intent
  this.exit = function () {
    // desktop mouse exit detection
    if ($cf(window).width() > 480) {
      var config = config || {},
        aggressive = config.aggressive || false,
        sensitivity = setDefault(config.sensitivity, 20),
        timer = setDefault(config.timer, 1000),
        delay = setDefault(config.delay, 0),
        callback = config.callback || function () {},
        cookieExpire = setDefaultCookieExpire(config.cookieExpire) || "",
        cookieDomain = config.cookieDomain
          ? ";domain=" + location.hostname.split(".").slice(-2).join(".")
          : "",
        cookieName = config.cookieName ? config.cookieName : trigger_cookie,
        sitewide = config.sitewide === true ? ";path=/" : "",
        _delayTimer = null,
        _html = document.documentElement;
      trigger_type = config.trigger_type;
      animation = config.animation;

      function setDefault(_property, _default) {
        return typeof _property === "undefined" ? _default : _property;
      }

      function setDefaultCookieExpire(days) {
        var ms = days * 24 * 60 * 60 * 1000;

        var date = new Date();
        date.setTime(date.getTime() + ms);

        return "; expires=" + date.toUTCString();
      }

      function handleMouseleave(e) {
        if (
          e.clientY > sensitivity ||
          (checkCookieValue(cookieName, "true") && !aggressive)
        )
          return;
        _delayTimer = setTimeout(_fireAndCallback, delay);
      }

      function handleMouseenter(e) {
        if (_delayTimer) {
          clearTimeout(_delayTimer);
          _delayTimer = null;
        }
      }

      var disableKeydown = false;
      function handleKeydown(e) {
        if (
          disableKeydown ||
          (checkCookieValue(cookieName, "true") && !aggressive)
        )
          return;
        else if (!e.metaKey || e.keyCode !== 76) return;

        disableKeydown = true;
        _delayTimer = setTimeout(_fireAndCallback, delay);
      }

      function checkCookieValue(cookieName, value) {
        return parseCookies()[cookieName] === value;
      }

      function parseCookies() {
        var cookies = document.cookie.split("; ");

        var ret = {};
        for (var i = cookies.length - 1; i >= 0; i--) {
          var trigger = cookies[i].split("=");
          ret[trigger[0]] = trigger[1];
        }
        return ret;
      }

      function _fireAndCallback() {
        if (convertflow.ctas[cta.id]["fired"] !== true) fire("exit");
      }

      $cf(window)
        .off("mouseleave.cta" + cta.id)
        .on("mouseleave.cta" + cta.id, handleMouseleave);
      $cf(window)
        .off("mouseenter.cta" + cta.id)
        .on("mouseenter.cta" + cta.id, handleMouseenter);
    }

    // mobile back button exit dection
    if (
      $cf(window).width() <= 480 &&
      variant.options["trigger-mobile-exit"] !== "false"
    ) {
      if (window.history && window.history.pushState) {
        window.addEventListener("popstate", function (event) {
          var hashLocation = location.hash;
          var hashSplit = hashLocation.split("#!/");
          var hashName = hashSplit[1];
          if (hashName !== "") {
            var hash = window.location.hash;
            if (hash === "") {
              if (convertflow.ctas[cta.id]["fired"] !== true) fire("exit");
            }
          }
        });

        if (convertflow.ctas[cta.id]["mobile_exit_intent_ready"] !== true) {
          convertflow.ctas[cta.id]["mobile_exit_intent_ready"] = true;
          window.history.pushState("forward", null, null);
        }
      }
    }
  };

  // trigger popup on button click
  this.clickPop = function () {
    $cf(document).on("click", ".cta-" + cta.id + "-trigger", function () {
      if (
        $cf(this).attr("data-validated") == undefined ||
        $cf(this).attr("data-validated") == "true"
      ) {
        $cf(".cf-" + cta.cta_type).hide();
        fire("click");
      }
    });
  };

  // show profile popup, and trigger full popup on engagement
  this.twoTapPopup = function () {
    var twoTapContents = variant.two_tap_popup || variant.profilepop;

    if (twoTapContents && (!convertflow.twoTapTriggered || (trigger_type_override == 'two-tap' && variant.options['prehook-trigger-on-close'] + '' == 'true'))) {

      if ($cf(".cf-two-tap.cta" + cta.id + ", .cf-prehook-popup.cta" + cta.id).length == 0) {
        $cf("body").append(twoTapContents);
      }
      
      var twoTapDiv = $cf(".cf-two-tap.cta" + cta.id + ", .cf-prehook-popup.cta" + cta.id);
      $cf(twoTapDiv).removeAttr('data-react-class');
      $cf(twoTapDiv).removeAttr('data-react-props');
      $cf(twoTapDiv).removeAttr('data-hydrate');
      $cf(twoTapDiv).removeAttr('data-react-cache-id');
      $cf(twoTapDiv).css("display", "none");

      // function to display the two tap popup
      function showTwoTapPopup() {
        // show if two tap hasn't show, CTA type hasn't shown or if CTA placement reserved by campaign, or if triggered manually
        if (
            (convertflow.twoTapTriggered == undefined &&
              (convertflow[supression] == undefined || 
                cta.broadcast_id == convertflow[supression])
            ) || 
          (trigger_type_override == 'two-tap' && variant.options['prehook-trigger-on-close'] + '' == 'true')
        ) {

          // mark two taps as triggered
          convertflow.twoTapTriggered = true;

          var twoTapMessage = $cf(twoTapDiv).find('.cf-two-tap-message, .prehook-message');
          app.ctas.mergeTags(cta, variant, twoTapMessage);
          if (app.website.data['google-fonts'] != 'false') {
            app.ctas.fonts(cta, variant, twoTapDiv);
          }
          
          if (variant.options['trigger_type'] == 'prehook') {
            $cf(twoTapMessage).find("p").attr("style", 'margin: 0 !important; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important; font-size: 16px !important; color: #6f818e; line-height: 1.4 !important; padding: 0px; -webkit-font-smoothing: subpixel-antialiased; -moz-osx-font-smoothing: initial; font-smoothing: subpixel-antialiased;');
          }
            
          $cf(twoTapDiv).addClass("slide-up");
          $cf(twoTapDiv)[0].style.setProperty('display', 'block', 'important');

          var twoTapClose = $cf(twoTapDiv).find(".cf-two-tap-close, .prehook-close");
          app.ctas.bindClose(cta, variant, embed, twoTapClose);

          var twoTapButton = $cf(twoTapDiv).find(".cf-two-tap-message, .cf-prehook-button");
          $cf(twoTapButton).on('click', function () {
            fire("click");
            $cf(twoTapDiv)[0].style.setProperty('display', 'none', 'important');
          });
        }
      };

      if (variant.options["prehook-trigger-type"] == "scroll") {
        var length = $cf(document).height();
        if (variant.options["scroll"] !== undefined) {
          var scroll = parseInt(variant.options["scroll"]);
        } else {
          var scroll = 0;
        }
        var target = (scroll * length) / 100;
        $cf(window).scroll(function () {
          if (
            $cf(window).scrollTop() >= target
          ) {
            if (convertflow.ctas[cta.id]["fired"] !== true)
              showTwoTapPopup();
          }
        });
      }

      if (variant.options["prehook-trigger-type"] == "delayed") {
        if (variant.options["scroll"] !== undefined) {
          var delay = parseInt(variant.options["delay"]) * 1000;
        } else {
          var delay = 0;
        }
        setTimeout(function () {
          if (convertflow.ctas[cta.id]["fired"] !== true)
            showTwoTapPopup();
        }, delay);
      }

      if (
        variant.options["prehook-trigger-type"] == "immediate" ||
        variant.options["prehook-trigger-type"] == undefined
      ) {
        if (convertflow.ctas[cta.id]["fired"] !== true) {
          showTwoTapPopup();
        }
      }

      if (variant.options['trigger_type'] !== 'two-tap' && variant.options['prehook-trigger-on-close'] + '' == 'true' && trigger_type_override == 'two-tap') {
        showTwoTapPopup();
      }
    }
  };

  this.onAddToCart = () => {
    window.addEventListener("cfAddToCart", function (event) {
      if (window.convertflow.ctas[cta.id]["fired"] !== true && (!variant.options['cart-trigger-check'] || (
          variant.options['cart-trigger-check'] == 'greater' && convertflow.cart?.value != null && convertflow.cart.value > (variant.options['cart-trigger-value'] || 0)
        ) || (
          variant.options['cart-trigger-check'] == 'less' && convertflow.cart?.value != null && convertflow.cart.value < (variant.options['cart-trigger-value'] || 0)
        ) || (
          variant.options['cart-trigger-check'] == 'range' && convertflow.cart?.value != null && convertflow.cart.value >= (variant.options['cart-trigger-value-lower'] || 0) && convertflow.cart.value <= (variant.options['cart-trigger-value-upper'] || 0)
        )
      )) {
        fire("addToCart");
      }
    });

    window.addEventListener("cfAddToCartShopify", function (event) {
      if (window.convertflow.ctas[cta.id]["fired"] !== true && (!variant.options['cart-trigger-check'] || (
          variant.options['cart-trigger-check'] == 'greater' && convertflow.cart?.value != null && convertflow.cart.value > (variant.options['cart-trigger-value'] || 0)
        ) || (
          variant.options['cart-trigger-check'] == 'less' && convertflow.cart?.value != null && convertflow.cart.value < (variant.options['cart-trigger-value'] || 0)
        ) || (
          variant.options['cart-trigger-check'] == 'range' && convertflow.cart?.value != null && convertflow.cart.value >= (variant.options['cart-trigger-value-lower'] || 0) && convertflow.cart.value <= (variant.options['cart-trigger-value-upper'] || 0)
        )
      )) {
        fire("addToCart");
      }
    });
  };

  // trigger popup
  $cf(document).on("trigger_CTA_" + cta.id, function () {
    $cf(".cf-" + cta.cta_type).hide();
    fire("click");
  });

  if (app.live == true) {
    const notSurpressed = app.helpers.getCookie(trigger_cookie) == undefined || app.helpers.getCookie(trigger_cookie) == null || app.helpers.getCookie(trigger_cookie) == "";
    const twoTapIfSurpressed = notSurpressed == false && variant.options["prehook-trigger-on-close"] == 'true' && variant.options["prehook-trigger-when-suppressed"] + '' == 'true' && variant.options["aggressive"] !== "true";

    if (notSurpressed) {
      if (variant.options.trigger_type == "exit") {
        this.exit();
      }
      if (variant.options.trigger_type == "delayed") {
        this.delayed();
      }
      if (variant.options.trigger_type == "scroll") {
        this.scroll();
      }
      if (["two-tap", "prehook"].includes(variant.options.trigger_type)) {
        this.twoTapPopup();
      }
      if (variant.options.trigger_type == "cart" && window.location.href.indexOf('/cart') == -1) {
        this.onAddToCart();
      }
    }

    if (twoTapIfSurpressed) {
      this.twoTapPopup();
    }
  } else {
    fire("click");
  }

  // any popup can be trigger with class click
  this.clickPop();

  if (trigger_type_override == 'two-tap') {
    this.twoTapPopup();
  }
};

app.ctas.brandStyle = function (cta, variant, embed) {
  if (app.live !== true) {
    // color styles
    $cf.each(
      ["brand_color_dark", "brand_color_light", "brand_color_vibrant"],
      function (i, color_key) {
        if (app.website.brand_style[color_key]) {
          if (color_key == 'brand_color_dark') {
            var color_key_code = 'BLACK' 
          }
          if (color_key == 'brand_color_light') {
            var color_key_code = 'WHITE' 
          }
          if (color_key == 'brand_color_vibrant') {
            var color_key_code = 'MEDIUMBLUE' 
          }
          $cf.each(
            [
              "background",
              "color",
              "border-color",
              "border-top-color",
              "border-bottom-color",
              "border-left-color",
              "border-right-color",
            ],
            function (i, style_type) {
              $cf(embed)
                .find(
                  '[style*="' + style_type + '"][style*="' + color_key + '"], [style*="' + style_type + '"][style*="' + color_key_code + '"]'
                )
                .each(function (i, dom_element) {
                  var inline_style = $cf(
                    $cf(dom_element).attr("style").split(";")
                  ).filter(function () {
                    return (
                      this.indexOf(style_type) > -1 &&
                      (this.indexOf(color_key) > -1 || this.indexOf(color_key_code) > -1)
                    );
                  })[0];

                  if (inline_style) {
                    dom_element.style.setProperty(
                      style_type,
                      app.website.brand_style[color_key],
                      "important"
                    );
                  }
                });
            }
          );
        }
      }
    );

  }
};

// listen for close click

app.ctas.bindClose = function(cta, variant, embed, selector) {
  var originalSelector = selector;

  if (selector == undefined) {
    var selector = '#cta' + cta.id + ' .cf-cta-close, .cf-close[data-cta-id="' + cta.id + '"]';
  }

  $cf(selector).unbind('click').on('click', function() {
    app.ctas.close(cta, variant, embed, true);
    
    if (originalSelector) {
      $cf('.cf-two-tap[data-cta-id=' + cta.id + '], .cf-prehook-popup.cta' + cta.id).removeClass('slide-up').hide();
    }

    if (!originalSelector && variant.options['trigger_type'] !== 'prehook' && variant.options['prehook-trigger-on-close'] + '' == 'true') {
      app.ctas.triggerTwoTap(cta, variant, embed);
    }
  });
}



// close out CTA and track

app.ctas.close = function(cta, variant, embed, track) {
  $cf(embed).hide();

  // pause videos
  $cf(embed).find('.cf-video iframe[src]').each(function(i, frame) {
    $cf(frame).removeAttr('src');
  });

  // adjust html tag if pushed down by sticky bar
  if (cta.cta_type == 'bar' && variant.options['bar-position'] == 'top') {
    $cf('html').css('transition', '').css('-webkit-transition', '').css('padding-top', '0')
  }

  if (track == true) {
    if (variant.options.aggressive == 'minutes') {
      var expire = parseInt(variant.options['minutes-hide'] || '30');
    } else if (variant.options.hide) {
      var expire = parseInt(variant.options.hide) * 24 * 60;
    } else {
      var expire = 0 * 24 * 60;
    }

    app.helpers.setCookie('viewedCta' + cta.id, 'true', expire);

    app.visitors.fireEvent("cfClose", {
      cta: cta,
      variant: variant
    });
  }
}



// handles triggering two tap popup
app.ctas.triggerTwoTap = function(cta, variant, embed) {
  app.ctas.trigger(cta, variant, embed, 'two-tap');

  var prehookPosition = variant.options["prehook-position"] ? variant.options["prehook-position"] : 'right';
  var overlappingPrehooks = $cf('.cf-two-tap[data-position="' + prehookPosition + '"].slide-up');
  
  // add offset to prehook
  var prehook = $cf('.cf-two-tap[data-cta-id=' + cta.id + ']')[0];
  if (prehook && overlappingPrehooks.length > 1) {
    var extraOffset = 20 + ((overlappingPrehooks.length - 1) * 5);
    prehook.style.setProperty('bottom', extraOffset + 'px', 'important');

    if (prehookPosition == 'right') {
      prehook.style.setProperty('right', extraOffset + 'px', 'important');
      prehook.style.setProperty('box-shadow', '5px 5px 0px 0px rgba(0,0,0,0.09)', 'important');
    } else if (prehookPosition == 'left') {
      prehook.style.setProperty('left', extraOffset + 'px', 'important');
      prehook.style.setProperty('box-shadow', '-5px 5px 0px 0px rgba(0,0,0,0.09)', 'important');
    } else if (prehookPosition == 'center') {
      prehook.style.setProperty('box-shadow', '0px 5px 0px 0px rgba(0,0,0,0.09)', 'important');
    }
  };
}



// add CTA data to events before tracking

app.ctas.track = function(event, cta, element) {
  $cf.extend(event, {
    website_id: app.website_id,
    visitor_token: app.visitors.uid(),
    contactable_type: 'Cta',
    contactable_id: cta.id,
    url: app.helpers.cleanURL(window.location.href)
  })
  var position = undefined;
  if (cta.broadcast_id !== undefined) event.broadcast_id = cta.broadcast_id;
  if (event.variant_id !== undefined && event.step_id == undefined) {
    var variant = cta.variants[event.variant_id];
    var step = $cf.map(variant.steps, function(step) {if (step.position == 1) return step})[0]
    var position = step.position;
    if (step !== undefined && step.id !== undefined) event.step_id = step.id;
  }

  // skip sending event to database if completion event, or if conversion event for form/survey elements when contact data processing is enabled
  var skip_database_storage = event.event_type == 'Completion' || 
    (event.event_type == 'Complete' && $cf.inArray(element.element_type, ['form', 'survey', 'quiz']) > -1 && app.website.data["contact-processing"] !== "false");

  app.visitors.trackEvent(event, skip_database_storage);
}





// skips CTA steps if action group conditions are met

app.ctas.initializeStep = function(cta, variant, step, embed) {
  const stepDiv = $cf(embed).find('.cf-step[data-step-id="' + step.id + '"]');

  // clear video iframes
  $cf(embed).find('.cf-video iframe[src]').each(function(i, frame) {
    $cf(frame).removeAttr('src');
  });

  const loadLazyVideos = () => {
    $cf(stepDiv).find('.cf-video iframe').each(function(i, frame) {
      var src = $cf(frame).attr('data-src');

      if (!$cf(frame).attr('src')) {
        $cf(frame).attr('src', src);
      }
    })
  }

  loadLazyVideos();

  // Observe CTA to properly activate lazy loaded videos
  if (['overlay', 'hook', 'bar'].includes(cta.cta_type) && $cf(embed)[0]) {
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutationRecord) {
        if (mutationRecord.target.style.display == 'block') {
          loadLazyVideos();
        }
      });
    });

    observer.observe($cf(embed)[0], { attributes : true, attributeFilter : ['style'] });
  }

  // check steps ActionGroup conditions to see if one is true
  var true_action_group;

  if (step.action_groups !== undefined) {
    $cf.each(step.action_groups, function(i, action_group) {
      if (!action_group.field_id && !true_action_group && app.campaigns.checkConditions(action_group.conditions, convertflow.person, {variant: variant}) == true) {
        action_group.status = true;
        true_action_group = action_group
      }
    })
  }

  if (true_action_group) {
    app.ctas.performConfirmationAction({
      embed: embed,
      cta: cta,
      variant: variant,
      step: step,
      action_group: true_action_group
    });
  }

  if (cta.cta_type == 'hook') {
    app.helpers.onVisible($cf(stepDiv)[0], () => {
      app.ctas.setHookPopupOverflow(embed, cta, variant);
    })
  }

  // scroll to anchor link if location hash
  if (cta.cta_type == 'page' && window.location.hash && $cf(stepDiv).find(window.location.hash).length > 0) {
    app.helpers.onVisible($cf(stepDiv)[0], () => {
      setTimeout(function() {
        $cf('html, body').animate({
          scrollTop: $cf(window.location.hash).offset().top
        }, 500);
      }, 500);
    });
  }

  if (typeof app.admin.render == "function") {
    app.admin.render(app.website);
  }

  return true_action_group;
}









// initializes forms

app.ctas.forms = function(cta, variant, embed) {
  // loop through form elements of CTA, apply logic

  $cf.each(variant.steps, function(step_id, step) {
    $cf.each(step.sections, function(section_id, section) {
      $cf.each(section.elements, function(element_id, element) {
        if (element.element_type == 'form' || element.element_type == 'quiz') {
          $cf(embed).find(`.cf-cta-item[data-type="form"][data-id="${element_id}"], .cf-cta-item[data-type="quiz"][data-id="${element_id}"]`).each(function(index, cta_item) {

            var form = $cf(cta_item).find('form');
            var form_container = $cf(embed).find('div[id="element' + element_id + '_form"]');


            // add visitor token to form
            $cf(form).find('input[name="contact[visitor_token]"]').val(app.visitors.uid())


            // order form fields

            $cf(form).find('.cf-form-fields').each(function(index, field_container) {
              var fields = $cf(field_container).find('.cf-form-field').sort(function(a,b){ return $cf(a).attr('data-pos') - $cf(b).attr('data-pos'); });
              $cf(field_container).find('.cf-form-field').remove()
              $cf(field_container).append(fields)
            })

            // order dropdown options

            $cf(form).find('.cf-select').each(function(index, radio_field) {

              $cf(radio_field).find('input[type="radio"]').each(function(index, radio_option) {
                $cf(radio_option).click(function() {
                  if ($cf(radio_option).attr('checkstate') == 'true') {
                    $cf(radio_option).prop('checked', false);
                    $cf(radio_option).attr('checkstate', 'false');
                  } else {
                    $cf(radio_field).find('input[type="radio"]').prop('checked', false);
                    $cf(radio_field).find('input[type="radio"]').attr('checkstate', 'false');
                    $cf(radio_option).prop('checked', true);
                    $cf(radio_option).attr('checkstate', 'true');
                  }
                })
              })

              $cf(radio_field).find('input[type="checkbox"]').each(function(index, checkbox) {
                $cf(checkbox).on('change', function() {
                  var checkbox_values = $cf(form).find('input[type="checkbox"][data-slug="' + $cf(checkbox).attr('data-slug') + '"]:checked').map(function() {return this.value;}).get().join(', ');
                  $cf(form).find('input[name="' + $cf(checkbox).attr('data-slug') + '"][type="hidden"]').val(checkbox_values);
                });
              });
            })


            // initialize range field sliders

            $cf(form).find('.cf-field-range').each(function(i, rangeContainer) {
              var range = $cf(rangeContainer).find('.cf-field-range-slider')[0];
              var field_id = $cf(range).attr('data-id');
              var field = Object.values(element.fields).filter(function(field) {
                if (field.id + '' == field_id) {
                  return field;
                }
              })[0];
              
              if (field) {
                var rangeStartValue = 0;
                var rangeValues = {min: 0, max: 1000};
                var rangeStep = field.options['increment'] ? parseInt(field.options['increment']) : 1;
                var rangePips = false;
                var rangeSnap = false;
                var numberType = field.options['range-value-type'] ? field.options['range-value-type'] : 'integer';

                // range input using min/max and step
                if (field.options['range-type'] !== 'increments') {
                  var rangeSliderMinimum = field.options["minimum"] ? parseInt(field.options["minimum"]) : 0;
                  var rangeSliderMaximum = field.options["maximum"] ? parseInt(field.options["maximum"]) : 1000;
                  rangeStartValue = rangeSliderMaximum * 0.25;

                  rangeStartValue = [rangeStartValue];
                  if (field.options["multiple-handles"] == "true") {
                    rangeStartValue.push(rangeSliderMaximum * 0.75);
                  }

                  rangeValues = {
                    min: rangeSliderMinimum,
                    max: rangeSliderMaximum,
                  };

                  rangePips = false;

                  if (field.options['range-labels'] == 'true') {
                    rangePips = {
                      mode: 'range',
                      values: [rangeSliderMinimum, rangeSliderMaximum],
                      density: 100,
                    }; 

                    var pipFormats = {};

                    if (numberType == 'currency') {
                      rangePips['format'] = app.helpers.wNumb({
                        decimals: 2,
                        prefix: app.website.currency_character
                      })
                    }

                    if (numberType == 'percentage') {
                      rangePips['format'] = app.helpers.wNumb({
                        decimals: 0,
                        suffix: '%'
                      })
                    }

                    if (field.options['range-label-minimum']) {
                      pipFormats[rangeSliderMinimum] = field.options['range-label-minimum'];
                    }

                    if (field.options['range-label-maximum']) {
                      pipFormats[rangeSliderMaximum] = field.options['range-label-maximum'];
                    }

                    if (Object.keys(pipFormats).length > 0) {
                      rangePips['format'] = {
                        to: function(a) {
                          return pipFormats[a];
                        }
                      }
                    }
                  }
                }

                // range input using field options
                if (field.options['range-type'] == 'increments') {
                  rangeSnap = field.options['limit-to-increments'] !== 'false' ? true : false;

                  if (rangeSnap == true) {
                    rangeStep = undefined;
                  }

                  var values = [];
                  if (field.field_options) {
                    Object.values(field.field_options).forEach(function(field_option) {
                      if (app.helpers.isNumeric(field_option.value)) {
                        values.push(parseInt(field_option.value));
                      }
                    })
                  }

                  if (values) {
                    var sortedValues = values.sort(function(a, b) {return a - b});
                    rangeStartValue = sortedValues[0];
                    rangeSliderMaximum = sortedValues[sortedValues.length -1];

                    rangeValues = {
                      min: rangeStartValue,
                      max: sortedValues[sortedValues.length -1]
                    };
                    
                    rangeStartValue = [rangeStartValue];
                    if (field.options["multiple-handles"] == "true") {
                      rangeStartValue.push(rangeSliderMaximum * 0.75);
                    }

                    var numberOfPipsDividedBy100 = 100 / sortedValues.length;
                    sortedValues.filter(function(option_value) {
                      if (option_value !== rangeStartValue && option_value !== rangeSliderMaximum) {
                        return option_value;
                      }
                    }).forEach(function(option_value, i) {
                      var percentage = numberOfPipsDividedBy100 * (i + 1);
                      rangeValues[percentage + '%'] = option_value;
                    })

                    rangePips = {
                      mode: 'values',
                      values: values,
                      density: values.length,
                    }; 

                    if (numberType == 'currency') {
                      rangePips['format'] = app.helpers.wNumb({
                        decimals: 2,
                        prefix: app.website.currency_character
                      })
                    }

                    if (numberType == 'percentage') {
                      rangePips['format'] = app.helpers.wNumb({
                        decimals: 0,
                        suffix: '%'
                      })
                    }
                  }
                }

                app.helpers.noUiSlider.create(range, {
                  tooltips: true,
                  start: rangeStartValue,
                  connect: true,
                  range: rangeValues,
                  step: rangeStep,
                  pips: rangePips,
                  snap: rangeSnap,
                  format: {
                    to: function (value) {
                      return parseInt(value).toFixed();
                    },
                    from: function (value) {
                      return parseInt(value).toFixed();
                    }
                  }
                });

                rangeContainer.timeoutId = undefined;

                range.noUiSlider.on('start', function (values) {
                  $cf(rangeContainer).find('.noUi-tooltip').show();
                  clearTimeout(rangeContainer.timeoutId);
                });

                range.noUiSlider.on('set', function (values) {
                  $cf(rangeContainer).find('.noUi-tooltip').show(); 
                });

                range.noUiSlider.on('update', function (values) {
                  var separator = ' - ';
                  var formattedNumbers = [];

                  $cf(values).each(function(i, value) {
                    if (numberType == 'integer') {
                      formattedNumbers.push(value);

                    } else if (numberType == 'percentage') {
                      formattedNumbers.push(value + '%');

                    } else if (numberType == 'currency') {
                      formattedNumbers.push(app.website.currency_character + value + '.00');                      
                    }
                  });

                  var formattedValues = formattedNumbers.join(separator);
                  var rangeField = $cf(rangeContainer).find('input');
                  $cf(rangeField).val(formattedValues);

                  clearTimeout(rangeContainer.timeoutId);
                  rangeContainer.timeoutId = setTimeout(function() {
                    $cf(rangeContainer).find('.noUi-tooltip').hide(); 
                  }, 2000);
                });
              }
            })


            // mobile optimize horizontal forms

            if (element.options['form-type'] == 'horizontal' && $cf(window).width() < 481 && (element.options['field-size'] !== 'cf-field-regular' || $cf(form_container).find('.cf-form-field[data-visible="true"]').length > 1 || $cf(form_container).attr('data-consent') == 'true')) {
              $cf(form_container).removeClass('cf-form-horizontal').addClass('cf-form-vertical')
            }

            if (element.options['form-type'] == 'horizontal' && $cf(window).width() > 480) {
              $cf(form_container).find('.cf-form-field[data-visible="true"]').each(function(i, field) {
                if (i >= 4) {
                  $cf(field).attr('data-visible', 'false')
                }
              })
            }



            // prefill hidden fields with attribution and campaign data
            $cf(form).find('input[name="contact[source_url]"]').val(app.helpers.cleanURL(window.location.href));
            $cf.each(['broadcast_id'], function(index, campaign_id) {
              if (convertflow.ctas[cta.id][campaign_id] !== undefined) {
                $cf(form).find('input[name="contact[' + campaign_id + ']"]').val(convertflow.ctas[cta.id][campaign_id])
              }
            })

            if (element.options['prefill-fields'] !== 'false') {
              
              // prefill country code fields
              $cf(form).find('select.cf-sms-countries').each(function(i, select) {
                var countryCode;
                var countryValue;
                
                if (convertflow.person.data.location && convertflow.person.data.location["countryCode"]) {
                  countryCode = convertflow.person.data.location["countryCode"];
                } else if (convertflow.person.country) {
                  var countryName = convertflow.person.country;
                  countryValue = $cf(select).find('option:contains(' + countryName + ')').attr('value');
                } else if (element.options['phone-default-country']) {
                  countryCode = element.options['phone-default-country'];
                } else if (app.website.data['default-country']) {
                  countryCode = app.website.data['default-country'];
                }

                if (countryValue) {
                  $cf(select).val(countryValue);
                } else if (countryCode) {
                  $cf(select).val(countryCode);
                } else {
                  $cf(select).val('US');
                }
                
                let phoneField = $cf(form).find('input[name="contact[phone]"]')[0];
                if (phoneField) {
                  app.helpers.onVisible(phoneField, function() {
                    let phoneFieldHeight = $cf(phoneField).outerHeight();

                    if (phoneFieldHeight && typeof phoneFieldHeight == 'number' && phoneFieldHeight > 0) {
                      select.style.setProperty('height', $cf(phoneField).outerHeight() + 'px', 'important');
                    }
                  });
                }
              });

              // loop through person map and prefill preset contact fields with existing contact data
              var contactFields = {
                name: ['name', 'first_name', 'firstname', 'f_name', 'fname'],
                last_name: ['last_name', 'lastname', 'last', 'l_name', 'lname'],
                email: ['email', 'emailaddress', 'email_address'],
                phone: ['phone', 'phone_number', 'telephone', 'cellphone', 'cell'],
                url: ['website'],
                company_name: ['company_title', 'company', 'company_title', 'companyname', 'company_name'],
                company_title: ['company_title', 'job', 'jobtitle', 'job_title'],
                city: ['city'],
                country: ['country'],
                address: ['address', 'streetaddress', 'address1'],
                state: ['state', 'region'],
                zip_code: ['zip_code', 'zipcode', 'postal', 'postalcode']
              }
              
              $cf.each(contactFields, function(database_field, field_names) {
                var attribute = undefined;

                if (database_field !== 'last_name') {
                  var custom_params = element.options[database_field.replace('_', '-') + '-prefill-params'];
                } else {
                  var custom_params = element.options['lastname-prefill-params'];
                }

                if (custom_params) {
                  $cf.each(custom_params.split(','), function(i, custom_param_name) {
                    var custom_param_name = custom_param_name.replace(' ', '')
                    if (custom_param_name && app.helpers.getParameterByName(custom_param_name)) {
                      attribute = app.helpers.getParameterByName(custom_param_name);
                    }
                  })
                }

                if (!attribute) {
                  $cf.each(field_names, function(i, contact_field) {
                    var contact_field_value = $cf(form).find('[name="contact[' + database_field + ']"]').val();
                    if (app.helpers.getParameterByName(contact_field) !== "" || (["", null].includes(contact_field_value) && convertflow.person !== undefined && convertflow.person[database_field])) {
                      if (convertflow.person !== undefined && convertflow.person[database_field]) {
                        attribute = convertflow.person[database_field]
                      }

                      if (app.helpers.getParameterByName(contact_field)) {
                        attribute = app.helpers.getParameterByName(contact_field)
                      }
                    }
                  })
                }
                
                if (attribute) {
                  const fieldObject = $cf(form).find('[name="contact[' + database_field + ']"]');
                  if (fieldObject && fieldObject.is('select')) {
                    fieldObject.attr('data-selected', 'true')
                  }

                  $cf(form).find('[name="contact[' + database_field + ']"]').val(attribute)
                  
                  if (element.options['hide-prefilled-fields'] == 'true' && element.options['form-type'] !== 'horizontal') {
                    $cf(form).find('[name="contact[' + database_field + ']"]').attr('prefilled', 'true')
                  }
                }
              })

              // loop through custom fields and prefill custom field if data available
              $cf.each(element.fields, function(i, field) {
                if (field.field_type !== undefined && field.field_type !== 'survey' && field.slug) {
                  var person_field = undefined;
                  var url_parameter = undefined;

                  // does this person already have this field?
                  if (convertflow.person !== undefined && convertflow.person.extra !== undefined && convertflow.person.extra !== null  && convertflow.person.extra[field.slug] !== undefined && convertflow.person.extra[field.slug] !== null && convertflow.person.extra[field.slug] !== "") {
                    var person_field = convertflow.person.extra[field.slug];
                  }

                  // does this field have a value to pre-fill?
                  if (field.value && ['dropdown', 'range'].includes(field.field_type) == false) {
                    var person_field = field.value
                    var url_parameter = person_field
                  }

                  // does the URL contain the value of a custom defined parameter to map to this field?
                  if (field.url_params) {
                    var custom_param = $cf(field.url_params.split(',')).map(function(i, custom_param_name) {
                      var custom_param_name = custom_param_name.replace(' ', '')
                      if (!custom_param && custom_param_name && app.helpers.getParameterByName(custom_param_name)) {
                        var custom_param = app.helpers.getParameterByName(custom_param_name);
                        return custom_param
                      }
                    })[0]
                    if (custom_param) {
                      var person_field = custom_param
                      var url_parameter = person_field
                    }
                  }

                  // is there a URL parameter mapping directly to this fields dataname?
                  if (app.helpers.getParameterByName(field.slug)) {
                    var person_field = app.helpers.getParameterByName(field.slug);
                  }

                  // prefill field if prefilled value available
                  if (person_field !== undefined) {
                    var field_selector = undefined
                    if (field.field_type == 'text' || field.field_type == 'hidden' || field.field_type == 'number') {
                      var field_selector = 'input[name="contact[extra][' + field.slug + ']"]'
                    }
                    if (field.field_type == 'paragraph') {
                      var field_selector = 'textarea[name="contact[extra][' + field.slug + ']"]'
                    }
                    if (field.field_type == 'dropdown') {
                      var field_selector = 'select[name="contact[extra][' + field.slug + ']"]'
                    }
                    if (field.field_type == 'radio' || field.field_type == 'select' || field.field_type == 'checkbox') {
                      var field_selector = 'input[name="contact[extra][' + field.slug + ']"]'
                    }

                    if (field_selector !== undefined) {

                      if ((field.field_type == 'text' || field.field_type == 'hidden' || field.field_type == 'paragraph' || field.field_type == 'dropdown' || field.field_type == 'number')) {
                        if (!$cf(form).find(field_selector).val() || url_parameter) {
                          $cf(form).find(field_selector).val(person_field)

                          if (field.field_type == 'dropdown') {
                            $cf(form).find(field_selector).attr('data-selected', 'true')
                          }
                        }
                      }

                      if (['radio', 'select', 'checkbox'].includes(field.field_type)) {

                        $cf(person_field.split(', ')).each(function(i, person_field_value) {
                          $cf(form).find(field_selector + '[value="' + person_field_value + '"]').prop('checked', true);
                        });

                        const isMultiSelect = field.field_type !== "radio" && (field.multi_select == true || field.field_type == "checkbox");
                        if (isMultiSelect) {
                          var checkbox_values = $cf(form).find('input[data-slug="contact[extra][' + field.slug + ']"][type="checkbox"]:checked').map(function() {return this.value;}).get().join(', ');
                          $cf(form).find(field_selector + '[type="hidden"]').val(checkbox_values);
                        }

                      }

                      if (element.options['hide-prefilled-fields'] == 'true') {
                        $cf(form).find(field_selector).attr('prefilled', 'true')
                      }
                    }
                  }

                }
              })

              $cf(form).find('[prefilled="true"]').hide()

              $cf(form).find('[prefilled="true"]').each(function(i, prefilled_input) {
                $cf(prefilled_input).parents('.cf-form-field').each(function(i, prefilled_field) {
                  prefilled_field.style.setProperty('display', 'none', 'important');
                })
              })
            }

            function formatEmailAddress(form) {
              var email_value = $cf(form).find('input[name="contact[email]"]').val();

              if (email_value) {
                var email_value = email_value.toLowerCase()
                $cf(form).find('input[name="contact[email]"]').val(email_value);
              }
              return email_value;
            };

            function formatPhoneNumber(form) {
              // format phone number with international dial code
              var phoneField = $cf(form).find('input[name="contact[phone]"]');
              var phoneFieldOgValue = $cf(phoneField).val();
              var formattedPhoneNumber;
              var dialCodeField = $cf(form).find('.cf-sms-countries');

              if (phoneFieldOgValue && phoneFieldOgValue.indexOf('+') == -1 && $cf(dialCodeField).val()) {
                var phoneNumber = phoneFieldOgValue.replace(/[\s()+\-\.]|ext/gi, '');
                var dialCode = $cf(dialCodeField).find('option[value="' + $cf(dialCodeField).val() + '"]').attr('data-dial_code');
                var formattedPhoneNumber = "+" + dialCode + phoneNumber;
                $cf(phoneField).val(formattedPhoneNumber);
                return formattedPhoneNumber;
              } else {
                return phoneFieldOgValue;
              }
            };

            // submits data once form is validated
            function submitForm(form) {
              formatEmailAddress(form);
              formatPhoneNumber(form);

              // update personalization data, prefill fields and personalize merge tags on the page
              var formData = $cf(form).serializeArray();
              var contactFields = ['email', 'name', 'last_name', 'phone', 'website', 'company_name', 'company_title', 'url', 'city', 'country', 'address', 'state', 'zip_code', 'extra', 'marketing_consent', 'privacy_consent', 'sms_consent']

              var submittedFields = {};
              cta.payload = cta.payload || {};

              cta.payload = {...cta.payload, ...{
                'visitor_token': convertflow.person.visitor_token,
                'source_url': app.helpers.cleanURL(window.location.href),
                'contactable_type': 'Cta',
                'contactable_id': cta.id,
                'website_id': app.website.id,
                'element_id': element.id,
                'variant_id': variant.id,
                'step_id': step.id,
                'extra': cta.payload['extra'] || {}
              }};

              if (convertflow.ctas[cta.id]['broadcast_id']) {
                cta.payload['broadcast_id'] = convertflow.ctas[cta.id]['broadcast_id'];
              }

              $cf.each(formData, function(index, contact_field) {
                if (contact_field.name.indexOf('extra') == -1) {

                  var field_name = contact_field.name.replace('contact[', '').replace(']', '');

                  if ($cf.inArray(field_name, contactFields) > -1 && contact_field.value.length > 0) {

                    if (contact_field.value !== undefined && contact_field.value !== "") {

                      $cf('span[data-merge="' + field_name + '"]').text(contact_field.value)
                      convertflow.person[field_name] = contact_field.value
                      submittedFields[field_name] = contact_field.value
                      cta.payload[field_name] = contact_field.value;

                      $cf('.new_contact').each(function (index, contact_form) {
                        $cf(contact_form).find('input[name="contact[' + field_name + ']"]').val(contact_field.value)
                      })
                    }
                  }
                } else {

                  var field_name = contact_field.name.replace('contact[', '').replace('[', '').replace(']', '').replace('extra', '').replace(']', '');
                  
                  if (contact_field.value) {
                    $cf('span[data-merge="' + field_name + '"]').text(contact_field.value)
                    convertflow.person.extra = convertflow.person.extra || {}
                    convertflow.person.extra[field_name] = contact_field.value
                    submittedFields[field_name] = contact_field.value
                    cta.payload['extra'][field_name] = contact_field.value;

                    var score = app.ctas.incrementScore(embed, cta, variant, element, field_name, contact_field.value);
                    $cf(form).append('<input type="hidden" name="contact[latest_score]" value="' + score + '" />');
                    cta.payload['latest_score'] = score;

                    if (variant['score_field']) {
                      $cf(form).append('<input type="hidden" name="contact[extra][' + variant['score_field'] + ']" value="' + score + '" />');
                      cta.payload['extra'][variant['score_field']] = score;
                    }

                    $cf('.new_contact').each(function (index, contact_form) {
                      var contact_form_field = $cf(contact_form).find('input[name="contact[extra][' + field_name + ']"]')

                      if (!$cf(contact_form_field).val()) {
                        $cf(contact_form_field).val(contact_field.value)
                      }
                    })
                    
                  }

                }
              })


              // submit submission if live environment, remove from localstorage
              var contactData = $cf(form).serialize();
              var contactData = 'cf2=true&' + contactData;

              if (app.live == true) {

                var action_groups = []

                if (element.action_groups !== undefined) {
                  $cf.each(element.action_groups, function(i, action_group) {
                    if ($cf.isEmptyObject(action_group.conditions) == false && app.campaigns.checkConditions(action_group.conditions, window.convertflow.person, {variant: variant}) == true) {
                      action_groups.push(action_group.id)
                    }
                  })
                }

                if (action_groups.length > 0) {
                  var contactData = 'action_groups=' + action_groups.join() + '&' + contactData;
                  cta.payload['action_groups'] = action_groups.join();
                }

                if (app.localstorage) {
                  app.helpers.compressAndStore(app.local_person, convertflow.person);
                }

                if (app.website.data["contact-processing"] !== "false") {
                  $cf.ajax({
                    type: "GET",
                    url: app.api_contacts,
                    data: {contact: cta.payload},
                    contentType: "application/json; charset=utf-8",
                    dataType: "JSONP",
                    complete: function(data,status,xhr)  {
                    }
                  });
                }

              }

              element.contactData = contactData
              app.ctas.conversionLogic({
                embed: embed,
                cta: cta,
                variant: variant,
                step: step,
                section: section,
                element: element,
                submission_data: submittedFields
              });

            }

            // form validation logic
            const emailField = $cf(form).find('input[name="contact[email]"]');
            const emailIcon = $cf(emailField).find('.cf-email-validation');
            const emailValidationRequired = element.options['show-email'] !== 'false' && element.options['validate-email'] == 'true';
            
            const phoneField = $cf(form).find('input[name="contact[phone]"]');
            const phoneIcon = $cf(phoneField).find('.cf-phone-validation');
            const phoneValidationRequired = element.options['show-phone'] == 'true' && element.options['validate-phone'] == 'true' && (element.options['phone-required'] !== 'false' || element.options['show-email'] == 'false');

            const icon_big_error = 'https://img.convertflow.co/static/validation-big-error.png';
            const icon_big_success = 'https://img.convertflow.co/static/validation-big-success-grey.png';
            const icon_big_success_green = 'https://img.convertflow.co/static/validation-big-success.png';
            const icon_loader = 'https://img.convertflow.co/static/loader.png';

            function validationIcon(field, status) {
              $cf(field).removeClass('cf-error');
              const icon = $cf(field).parents('.cf-form-field').find('.cf-email-validation');
              $cf(icon).show();
              $cf(icon).removeClass('cf-spinner');

              if (status == 'pending') {
                $cf(icon).attr('src', icon_loader);
                $cf(icon).addClass('cf-spinner');
              }

              if (status == 'error') {
                $cf(field).addClass('cf-error');
                $cf(icon).attr('src', icon_big_error);
              };

              if (status == 'success') {
                $cf(icon).hide();
              }
            }
  
            // validations email format and forces lowercase
            function validateEmailFormat(form) {
              var email = $cf(emailField).val().toLowerCase();
              var filter = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

              $cf(form).find('.cf-button').removeAttr('disabled');
              $cf(emailField)[0].setCustomValidity('');
              $cf(emailIcon).hide();

              if (emailField.val() == "") {
                validationIcon(emailField, 'error');
              }

              if (filter.test(email)) {
                validationIcon(emailField, 'success');
                return true;

              } else {
                validationIcon(emailField, 'error');
                return false;
              }
            }


            // validations phone format
            function validatePhoneFormat(form) {
              var phoneValue = $cf(phoneField).val().replace(/[\s()+\-\.]|ext/gi, '');
              var filter = /^\d{4,}$/;

              $cf(form).find('.cf-button').removeAttr('disabled');
              $cf(phoneField)[0].setCustomValidity('');

              if ((element.options['show-email'] == 'true' && element.options['phone-required'] !== 'true' && $cf(phoneField).val() == '') || filter.test(phoneValue)) {
                validationIcon(phoneField, 'success');
                return true;

              } else {
                validationIcon(phoneField, 'error');
                return false;
              }
            }


            // validates required checkboxes
            function validateCheckboxes(form) {
              var allChecked = true;

              $cf(form).find('input[type="checkbox"][required]:visible').each(function(i, checkbox) {
                if ($cf(checkbox).is(":checked") == false) {
                  allChecked = false;
                }
              });
              return allChecked;
            }


            // checks mailserver API if email is real
            function validateIdentifier(form) {
              $cf(form).find('.cf-button').attr('disabled', true);

              let email;
              if (emailValidationRequired) {
                email = $cf(emailField).val().toLowerCase();
              }

              let phone;
              if (phoneValidationRequired) {
                phone = $cf(phoneField).val();
              }

              if (email || phone) {
                let validationUrl = `${app.api_contacts_validate}?version=v2`;
                
                if (email) {
                  validationUrl = `${validationUrl}&email=${formatEmailAddress(form)}`;
                  validationIcon(emailField, 'pending');
                }

                if (phone) {
                  validationUrl = `${validationUrl}&phone=${encodeURIComponent(formatPhoneNumber(form))}`;
                  validationIcon(phoneField, 'pending');
                }

                $cf.ajax({
                  url: validationUrl,
                  dataType: "JSONP",
                  timeout: 10000,
                  success: function(json) {
                    $cf(form).find('.cf-button').removeAttr('disabled');

                    let canSubmit = true;

                    if (json.email) {
                      const notBusinessEmail = element.options['validate-email-business'] == 'true' && json.email.free == true;
                      
                      if (json.email.mx_found == false || json.email.score < 0.48 || notBusinessEmail) {
                        canSubmit = false;
                        validationIcon(emailField, 'error');
                        $cf(emailField)[0].setCustomValidity(`${notBusinessEmail ? 'Please enter a business email' : 'Please enter a valid email address'}`);
                        $cf(emailField)[0].reportValidity();
                        $cf(form).find('.cf-button').attr('disabled', true);
                      } else {
                        validationIcon(emailField, 'success');
                        $cf(emailField)[0].setCustomValidity('');
                      }
                    }

                    if (json.phone) {
                      if (json.phone.valid == false) {
                        canSubmit = false;
                        validationIcon(phoneField, 'error');
                        $cf(phoneField)[0].setCustomValidity('Please enter a valid phone number');
                        $cf(phoneField)[0].reportValidity();
                        $cf(form).find('.cf-button').attr('disabled', true);
                        
                      } else if (json.phone.phone_number) {
                        validationIcon(phoneField, 'success');
                        $cf(phoneField).val(json.phone.phone_number);
                        $cf(phoneField)[0].setCustomValidity('');
                      }
                    }

                    if (canSubmit) {
                      submitForm(form);
                    }

                  },
                  error: function(XMLHttpRequest, textStatus, errorThrown) {
                    $cf(form).find('.cf-button').removeAttr('disabled')
                    submitForm(form)
                  }
                });
              }
            }

            $cf(form).attr('action', '')
            $cf.validator.messages.required = '';

            // apply format validation to typing
            $cf(form).find('input[name="contact[email]"]').keyup(function() {
              validateEmailFormat(form);
            });

            // apply format validation to typing
            $cf(form).find('input[name="contact[phone]"]').keyup(function(i, phoneField) {
              validatePhoneFormat(form);
            });

            // jquery validate logic on form submission event, submits if valid
            $cf(form).validate({
              highlight: function(field_tag, errorClass, validClass) {
                if (app.helpers.IE() == false && $cf(form).attr('data-validity-reported') !== 'true') {
                  $cf(form).attr('data-validity-reported', 'true')
                  $cf(form)[0].reportValidity();
                }
                $cf(field_tag).addClass('cf-error');
              },
              unhighlight: function(field_tag) {
                if ($cf(field_tag).attr('name') !== 'contact[email]' && ($cf(field_tag).attr('name') !== 'contact[phone]' || element.options['show-phone'] !== 'true')) {
                  $cf(field_tag).removeClass('cf-error');
                }
              },
              submitHandler: function(form, event) {
                event.preventDefault();

                var emailFormatAcceptable = element.options['show-email'] == 'false' || validateEmailFormat(form) == true;
                var phoneFormatAcceptable = element.options['show-phone'] !== 'true' || validatePhoneFormat(form) == true;
                var checkboxesValidated = validateCheckboxes(form);
                var formIsValid = true;
                $cf(form).find(':input:visible').each(function() {
                  if (this.checkValidity() == false) {
                    formIsValid = false;
                  }
                });

                if (emailFormatAcceptable && phoneFormatAcceptable && checkboxesValidated && formIsValid) {

                  if (emailValidationRequired || phoneValidationRequired) {
                    validateIdentifier(form)
                  } else {
                    submitForm(form)
                  }

                };
                return false
              }
            })

          });
        }
      })
    })
  })
}


// button redirect logic

app.ctas.buttons = function(cta, variant, embed) {
  // loop through button elements of CTA, apply logic
  $cf.each(variant.steps, function(step_id, step) {
    $cf.each(step.sections, function(section_id, section) {
      $cf.each(section.elements, function(element_id, element) {
        if (element.element_type == 'button') {

          $cf(embed).find('.cf-cta-item[data-type="button"][data-id="' + element_id + '"]').each(function(index, cta_item) {
            var button = $cf(cta_item).find('.cf-button')[0];

            $cf(button).on('click', function(e) {
              app.ctas.conversionLogic({
                embed: embed,
                cta: cta,
                variant: variant,
                step: step,
                section: section,
                element: element
              });
            });

          });

        }
      })
    })
  })
}

// survey selection logic

app.ctas.surveys = function(cta, variant, embed) {
  // loop through survey elements of CTA, apply logic
  $cf.each(variant.steps, function(step_id, step) {
    $cf.each(step.sections, function(section_id, section) {
      $cf.each(section.elements, function(element_id, element) {
        if (element.element_type == 'survey') {

          $cf(embed).find('.cf-cta-item[data-type="survey"][data-id="' + element_id + '"]').each(function(index, cta_item) {

            var field_div = $cf(cta_item).find('.cf-survey-field');
            var custom_field = $cf(field_div).attr('data-field');
            var field_submit = $cf(cta_item).find('.cf-survey-next-outer');

            // track conversion and send data to API
            var submitSurvey = function(custom_field, custom_field_value) {

              cta.payload = cta.payload || {};
              cta.payload = {...cta.payload, ...{
                'visitor_token': convertflow.person.visitor_token,
                'source_url': app.helpers.cleanURL(window.location.href),
                'contactable_type': 'Cta',
                'contactable_id': cta.id,
                'website_id': app.website.id,
                'variant_id': variant.id,
                'step_id': step.id,
                'element_id': element.id,
                'extra': cta.payload['extra'] || {}
              }};

              if (convertflow.ctas[cta.id]['broadcast_id']) {
                cta.payload['broadcast_id'] = convertflow.ctas[cta.id]['broadcast_id'];
              }

              if (convertflow.person.email) {
                cta.payload['email'] = convertflow.person.email
              }

              if (convertflow.person.phone) {
                cta.payload['phone'] = convertflow.person.phone
              }

              if (custom_field && custom_field_value) {
                convertflow.person.extra = convertflow.person.extra || {};
                convertflow.person.extra[custom_field] = custom_field_value;
                cta.payload['extra'][custom_field] = custom_field_value;
              }

              var score = app.ctas.incrementScore(embed, cta, variant, element, custom_field, custom_field_value);
              if (score !== undefined) {
                cta.payload['latest_score'] = score;

                if (variant['score_field']) {
                  cta.payload['extra'][variant['score_field']] = score;
                }
              }

              var action_groups = []
              if (element.action_groups !== undefined) {
                $cf.each(element.action_groups, function(i, action_group) {
                  if ($cf.isEmptyObject(action_group.conditions) == false && app.campaigns.checkConditions(action_group.conditions, window.convertflow.person, {variant: variant}) == true) {
                    action_groups.push(action_group.id)
                  }
                })
              }

              if (action_groups.length > 0) {
                cta.payload['action_groups'] = action_groups.join()
              }

              if (app.live == true) {
                
                if (app.website.data["contact-processing"] !== "false") {
                  $cf.ajax({
                    type: "GET",
                    url: app.api_contacts,
                    data: {contact: cta.payload},
                    contentType: "application/json; charset=utf-8",
                    dataType: "JSONP",
                    success: function(data,status,xhr)  {
                    }
                  });
                }

                if (app.localstorage) {
                  app.helpers.compressAndStore(app.local_person, convertflow.person);
                }
              }


              // update personalization data, prefill fields and personalize merge tags on the page
              if (custom_field && custom_field_value) {
                $cf('span[data-merge="' + custom_field + '"]').text(custom_field_value)

                $cf('.new_contact').each(function (index, contact_form) {
                  $cf(contact_form).find('input[name="contact[extra][' + custom_field + ']"]').val(custom_field_value)
                })
              }

              var submittedFields = {}
              submittedFields[custom_field] = custom_field_value

              app.ctas.conversionLogic({
                embed: embed,
                cta: cta,
                variant: variant,
                step: step,
                section: section,
                element: element,
                submission_data: submittedFields
              });
            }


            var is_multi_select = $cf(field_div).attr('data-multi-select');
            var has_confirmation_button = $cf(field_div).attr('data-confirmation-button');

            // click functionality of each survey option

            $cf(field_div).find('.cf-survey-choice').on('click', function(e) {
              var custom_field_value = $cf(this).attr('data-value');

              if (is_multi_select !== 'true' && has_confirmation_button !== "true") {
                $cf(field_div).find('.cf-survey-choice').each(function() {
                  $cf(this).removeAttr('data-selected');
                });

                $cf(this).attr('data-selected', 'true');
                submitSurvey(custom_field, custom_field_value);
              };

              if (is_multi_select == 'true') {
                if ($cf(this).attr('data-selected') !== 'true') {
                  $cf(this).attr('data-selected', 'true');
                } else {
                  $cf(this).removeAttr('data-selected');
                }
              };

              if (has_confirmation_button == 'true' && is_multi_select !== 'true') {
                let currently_selected = $cf(this).attr('data-selected')

                $cf(field_div).find('.cf-survey-choice').each(function() {
                  $cf(this).removeAttr('data-selected');
                });

                if (currently_selected !== 'true') {
                  $cf(this).attr('data-selected', 'true');
                }
              };

              if (has_confirmation_button == 'true' || is_multi_select == 'true') {
                if ($cf(field_div).find('.cf-survey-choice[data-selected="true"]').length > 0) {
                  $cf(field_submit).show();
                } else if (element.options["survey-next-hide"] !== "false") {
                  $cf(field_submit).hide();
                }
              };

              $cf(field_div).find('.cf-survey-choice').removeClass('cf-error');
            })

            if (is_multi_select == 'true' || has_confirmation_button == 'true') {
              $cf(field_submit).find('.cf-survey-next').on('click', function() {
                var custom_field_values = [];

                $cf(field_div).find('.cf-survey-choice[data-selected="true"]').each(function(i, choice) {
                  custom_field_values.push($cf(choice).attr('data-value'));
                });

                if (custom_field_values.length > 0) {
                  var custom_field_value = custom_field_values.join(', ');
                  submitSurvey(custom_field, custom_field_value);
                } else {
                  $cf(field_div).find('.cf-survey-choice').addClass('cf-error');
                  
                  setTimeout(function() {
                    $cf(field_div).find('.cf-survey-choice').removeClass('cf-error');
                  }, 2000);
                }
              });
            }

          })
        }
      })
    })
  })
}


app.ctas.conversionLogic = function(payload, track_conversion = true) {
  const embed = payload.embed;
  const cta = payload.cta;
  const variant = payload.variant;
  const step = payload.step;
  const section = payload.section;
  const element = payload.element;
  const submission_data = payload.submission_data;

  // track conversion if not a CTA close button & not tracked before (this any triggers default client-side automations logic to run)
  const conversionTrackingNotDisabled = false == (element.options['confirmation-close'] == "true" && element.options['disable-conversion'] == 'true' && (element.options['confirmation-type'] == 'redirect' || (element.options['confirmation-type'] == undefined && element.options['redirect-url'])))

  if (conversionTrackingNotDisabled && track_conversion) {
    // Can retrack if element is a form, survey or quiz
    const canReTrack = ['quiz'].includes(element.element_type)

    if (canReTrack || $cf(embed).find('.cf-element[data-id="' + element.id + '"]').attr('data-tracked') == undefined) {
      $cf(embed).find('.cf-element[data-id="' + element.id + '"]').attr('data-tracked', 'true')
      app.ctas.trackConversion(payload)
    }
  }

  // Get all matching conditional actions that met conditions
  let matched_conditional_action_groups = [];
  if (element.action_groups !== undefined) {
    $cf.each(element.action_groups, function(i, action_group) {
      const has_matching_conditions = app.campaigns.checkConditions(action_group.conditions, window.convertflow.person, {variant: variant}) == true;

      if (has_matching_conditions) {
        matched_conditional_action_groups.push(action_group);
      }
    });
  }

  const matched_conditional_action_groups_with_actions = matched_conditional_action_groups
    .filter(action_group => {
      const has_actions = action_group.actions && Object.values(action_group.actions).length > 0;
      const has_field_id = action_group.field_id;
      const has_script = action_group.data['script'];

      return (has_actions && !has_field_id) || has_script;
    })

  // Run all conditional automations of those that met conditions
  let flattened_action_groups_actions = matched_conditional_action_groups_with_actions
    .reduce((acc, group) => ({
      ...acc,
      ...group.actions
    }), {});

  let grouped_actions_to_run = app.actions.groupSameActionTypes(flattened_action_groups_actions, ['Shopify - Add to cart']);
  Object.values(grouped_actions_to_run).forEach(function(action_group) {
    app.actions.run(action_group, {
      contactable_id: cta.id,
      variant_id: variant.id,
    });
  });

  // Run all script actions of those that met conditions
  matched_conditional_action_groups_with_actions.forEach(function(action_group) {
    if (action_group['data']['script']) {
      try {
        $cf('body').append(action_group['data']['script']);
      } catch(e) {
        console.log(e.message, e.stack);
      };
    }
  });

  // Get first matching conditional action Confirmation Action
  let true_action_group;
  if (element.action_groups !== undefined) {
    matched_conditional_action_groups.forEach(function(action_group) {
      if (true_action_group && action_group.field_id) { return; }

      const confirmation_type = action_group.data['confirmation-type'];
      const is_redirect = confirmation_type == 'redirect' && (action_group.data['redirect-url'] || action_group.data['confirmation-close'] == 'true');
      const is_cart_or_checkout = ['cart', 'checkout'].includes(confirmation_type);
      const is_step = confirmation_type == 'step' && action_group.data['redirect-step'];
      const is_cta = confirmation_type == 'cta' && action_group.data['confirmation-cta'];
      const is_message = confirmation_type == 'message';
      const is_sms = confirmation_type == 'sms' && action_group.data['sms-number'];

      if (is_redirect || is_cart_or_checkout || is_step || is_cta || is_message || is_sms) {
        action_group.status = true;
        true_action_group = action_group;
      }
    })
  }

  // perform default confirmation action
  app.ctas.performConfirmationAction({
    ...payload, action_group: true_action_group
  });

  // fire default conversion script
  if (element.options['script'] !== undefined && element.options['script'] !== "") {
    try {
      $cf('body').append(element.options['script']);
    } catch(e) {
      console.log(e.message, e.stack);
    };
  }

  if (true_action_group && typeof app.admin.render == "function") {
    app.admin.render(app.website);
  }
}


app.ctas.trackConversion = function(event) {
  const cta = event.cta;
  const variant = event.variant;
  const step = event.step;
  const element = event.element;
  const product = event.product;
  const productVariant = event.product_variant;
  const submission_data = event.submission_data;

  if (app.live == true) {

    // fire javascript event
    var js_event = {
      cta: cta,
      variant: variant,
      step: step,
      element: element,
      score: variant.score
    }

    if (submission_data) {
      js_event.fields = submission_data;
    }

    if (event.productData) {
      js_event.product = event.productData;
    }

    if (['form', 'survey', 'quiz'].includes(element.element_type)) {
      app.visitors.fireEvent('cfSubmit', js_event)
    }

    app.visitors.fireEvent('cfConversion', js_event);


    var payload = {
      event_type: 'Complete',
      variant_id: variant.id,
      step_id: step.id,
      element_id: element.id,
      data: {}
    }

    if (variant.score !== undefined && variant.score !== null) {
      payload.data.score = variant.score;
    }

    if (product) {
      payload.product_id = product.id;
    }

    if (productVariant) {
      payload.product_variant_id = productVariant.id;
    }

    if (event.productData) {
      payload.data = {...payload.data, ...event.productData};
    }

    var action_groups = []
    if (element.action_groups !== undefined) {
      $cf.each(element.action_groups, function(i, action_group) {
        if ($cf.isEmptyObject(action_group.conditions) == false && app.campaigns.checkConditions(action_group.conditions, window.convertflow.person, {variant: variant}) == true) {
          
          action_groups.push(action_group.id)

          if (action_group.actions && $cf.map(action_group.actions, function(action) {if (['Track completion of CTA', 'Track completion of campaign'].includes(action.action_type)) {return action}}).length > 0) {
            var completion = Object.assign({}, payload);
            completion['event_type'] = 'Completion';
            app.ctas.track(completion, cta, element);
            app.visitors.fireEvent('cfCompletion', js_event);
          }
        }
      })
    }

    if (action_groups.length > 0) {
      payload['action_groups'] = action_groups.join()
    }

    app.ctas.track(payload, cta, element);


    if ($cf.map(element.actions, function(action) {if (['Track completion of CTA', 'Track completion of campaign'].includes(action.action_type)) {return action}}).length > 0) {
      var completion = Object.assign({}, payload);
      completion['event_type'] = 'Completion';
      app.ctas.track(completion, cta, element);
      app.visitors.fireEvent('cfCompletion', js_event);
    }
  }
}


app.ctas.performConfirmationAction = function(payload) {
  const element = payload.element;
  const action_group = payload.action_group;
   
  var element_confirmation_type = element ? element.options['confirmation-type'] : undefined;
  var can_use_default = (!action_group || !action_group.data['confirmation-type']);

  if (
    (action_group && action_group.data['confirmation-type'] == 'step') || 
    (can_use_default && element_confirmation_type == 'step' && element.options['redirect-step']) ||
    (can_use_default && !element_confirmation_type && element.options['redirect-step'])
  ) {
    
    app.ctas.performConfirmationActionStep(payload);

  } else if (
    (action_group && action_group.data['confirmation-type'] == 'redirect' && action_group.data['redirect-url']) || 
    (can_use_default && element_confirmation_type == 'redirect' && element.options['redirect-url']) ||
    (can_use_default && !element_confirmation_type && element.options['redirect-url'])
  ) {

    app.ctas.performConfirmationActionRedirect(payload);

  } else if (
    !['products', 'product_hero'].includes(element.element_type) && (
      (action_group && action_group.data['confirmation-type'] == 'cart') || (can_use_default && element_confirmation_type == 'cart')
    )
  ) {

    let selected_integration =  action_group && action_group.data['confirmation-type'] == 'cart'
      ? action_group.data["selected-store-integration"]
      : element.options['selected-store-integration'];

    app.ctas.performConfirmationActionRedirectToCart(payload, selected_integration);

  } else if (
    !['products', 'product_hero'].includes(element.element_type) && (
      (action_group && action_group.data['confirmation-type'] == 'checkout') || (can_use_default && element_confirmation_type == 'checkout')
    )
  ) {

    let selected_integration =  action_group && action_group.data['confirmation-type'] == 'checkout'
      ? action_group.data["selected-store-integration"]
      : element.options['selected-store-integration'];

    app.ctas.performConfirmationActionRedirectToCheckout(payload, selected_integration);

  } else if (
    (action_group && action_group.data['confirmation-type'] == 'cta' && action_group.data['confirmation-cta']) ||
    (can_use_default && element_confirmation_type == 'cta' && element.options['confirmation-cta']) || 
    (can_use_default && !element_confirmation_type && element.options['confirmation-cta'])
  ) {

    app.ctas.performConfirmationActionCta(payload);
  
  } else if (
    (action_group && action_group.data['confirmation-type'] == 'sms' && action_group.data['sms-number']) ||
    (can_use_default && element_confirmation_type == 'sms' && element.options['sms-number'])
  ) {

    app.ctas.performConfirmationActionSms(payload);

  } else if (
    can_use_default && ['product', 'cart'].includes(element_confirmation_type)
  ) {

    // redirecting to product
    if (payload.redirect_url) {
      app.ctas.performConfirmationActionRedirect(payload);
    }

    // adding product to cart
    if (element_confirmation_type == 'cart') {
      app.ctas.performConfirmationActionUpdateCart(payload);
    }

  } else if (
    (action_group && action_group.data['confirmation-type'] == 'message') ||
    (can_use_default && element_confirmation_type == 'message') || 
    (can_use_default && !element_confirmation_type && element.element_type !== 'button')
  ) {

    app.ctas.performConfirmationActionMessage(payload);
  }

  if (
    (action_group && ['redirect', 'cta', 'sms'].includes(action_group.data['confirmation-type']) && action_group.data['confirmation-close'] == 'true') || 
    (can_use_default && ['redirect', 'cta', 'sms'].includes(element_confirmation_type) && element.options['confirmation-close'] == 'true') || 
    (can_use_default && !element_confirmation_type && element.options['confirmation-close'] == 'true')
  ) {
    app.ctas.performConfirmationActionClose(payload);
  }

}



app.ctas.performConfirmationActionMessage = function(payload) {
  const embed = payload.embed;
  const cta = payload.cta;
  const variant = payload.variant;
  const step = payload.step;
  const section = payload.section;
  const element = payload.element;
  const action_group = payload.action_group;

  var container = $cf(embed).find(`.cf-element[data-id="${element.id}"]`);
  var confirmation_message = action_group && action_group.data['confirmation-type'] == 'message' && action_group.data['confirmation'] ? action_group.data['confirmation'] : element.options['confirmation'] ? element.options['confirmation'] : 'Thanks!';
  var confirmation_style = '';

  if (element.options['confirmation-background-color']) {
    var confirmation_style = confirmation_style + 'background: ' + element.options['confirmation-background-color'] + ' !important;';
  }

  if (element.options['confirmation-text-color']) {
    var confirmation_style = confirmation_style + 'color: ' + element.options['confirmation-text-color'] + ' !important;';
  }

  if (element.options['field-font']) {
    var confirmation_style = confirmation_style + 'font-family: ' + element.options['field-font'] + ' !important;';
  }

  var confirmation_style = 'style="' + confirmation_style + '"';

  $cf(container).find('.element-content').remove();
  $cf(container).html('<div class="cf-row cf-outer-center cf-center cf-regular-vspace cf-horizontal-somepadding cf-thanks-message" ' + confirmation_style + '>' + confirmation_message + '</span>')

}



app.ctas.performConfirmationActionStep = function(payload) {
  const embed = payload.embed;
  const cta = payload.cta;
  const variant = payload.variant;
  const step = payload.step;
  const section = payload.section;
  const element = payload.element;
  const action_group = payload.action_group;
  const step_override = payload.step_override;
  const submission_data = payload.submission_data;

  var redirect_step = step_override || undefined;
  
  if (!redirect_step && action_group && action_group.data['confirmation-type'] == 'step' && (action_group.data['redirect-step'] == 'previous' || variant.steps[action_group.data['redirect-step']])) {
    redirect_step = action_group.data['redirect-step'];
  }
  
  if (!redirect_step && element) {
    if (!redirect_step && element.options['redirect-step']) {
      redirect_step = element.options['redirect-step'];
    }

    if (submission_data && element.fields) {
      Object.values(element.fields).forEach(function(field) {
        if (field.slug && field.field_options && field.multi_select !== true) {
          Object.values(field.field_options).forEach(function(field_option) {
            if (field_option.step_id && submission_data[field.slug] == field_option.value) {
              redirect_step = field_option.step_id;
            }
          });
        }
      });
    }
  }
  
  if (redirect_step && (redirect_step == 'previous' || variant.steps[parseInt(redirect_step)])) {
    var next_step;

    if (redirect_step == 'previous' && variant.previousStep) {
      next_step = variant.steps[variant.previousStep];
    } else {
      next_step = variant.steps[redirect_step]
    }

    if (next_step.position < step.position) {
      let embedEl = embed;
      if (embedEl && typeof embedEl.jquery === 'string') { embedEl = embedEl[0]; }

      let payload = {
        cta: cta,
        variant: variant,
        embed: embedEl
      };

      app.elements.elementTypes.quiz.reset(payload);
      app.elements.elementTypes.timer.reset(payload);
    }

    if (step) {
      variant.previousStep = step.id; // set previous step, for back buttons
    }

    var skipped;
    if (redirect_step !== 'previous') {
      skipped = app.ctas.initializeStep(cta, variant, next_step, embed);
    }

    if (skipped == undefined && next_step) {
      // hide all steps (IE safe)
      $cf(embed).find('.cf-step').each(function(i, step_div) {
        let step_div_id = $cf(step_div).attr('data-step-id');

        if(!step_div_id) {
          step_div_id = $cf(step_div).attr('step-id');
        }

        if (variant.steps[step_div_id]) {
          $cf(step_div).attr('style', '')
          step_div.style.display = 'none';
        }
      })

      // show redirect step (IE safe)
      $cf(embed).find('.cf-step[data-step-id="' + redirect_step + '"], .cf-step[step-id="' + next_step.id + '"]').each(function(i, step_div) {
        $cf(step_div).attr('style', '')
        step_div.style.display = 'block';
      })

      // track view for next step
      if (app.live == true && next_step.tracked !== true) {
        next_step.tracked = true;
        
        setTimeout(function() {
          app.ctas.track({
            event_type: 'View', 
            variant_id: variant.id,
            step_id: next_step.id
          }, cta);


          app.visitors.fireEvent('cfView', {
            cta: cta,
            variant: variant,
            step: next_step
          });
        }, 500);
      }

      // pass over collected field data to next steps forms
      if (element !== undefined && element.element_type == 'form') {
        $cf.each(element.contactData.split('&'), function (index, elem) {
          var vals = elem.split('=');
          
          if (vals[0].indexOf('contact') > -1 && $cf(embed).find('div[id="step_' + next_step.id + '"] form').length && vals[1].length && vals[0] !== "contact%5Belement_id%5D" && vals[0] !== "contact%5Bstep_id%5D") {
            var stepDiv = $cf(embed).find('div[id="step_' + next_step.id + '"]');
            
            $cf(stepDiv).find('.new_contact').each(function() {
              $cf(this).find('input[name="' + decodeURIComponent(vals[0]) + '"]').val(decodeURIComponent(vals[1].replace(/\+/g, ' ')));

              if ($cf(this).attr('data-hide-prefilled-fields') == 'true') {
                var field_div = $cf(this).find('[name="' + decodeURIComponent(vals[0]) + '"]').parents('.cf-form-field')[0];

                if (field_div) {
                  $cf(field_div).attr('data-visible', 'false');
                }
              }
            })
          }
        })
      }

      // scroll to top of page if landing page
      if (variant.options["scroll-to-top"] !== "false" && cta.cta_type == 'page') {
        window.scrollTo(0, 0);
      }

      // scroll to top of embed if inline
      if (cta.cta_type == 'inline' && $cf(window).width() < 480 && (!action_group || !action_group.step_id)) {
        embed.scrollIntoView();
      }

      // push website content down for new sticky bar height
      if (cta.cta_type == 'bar') {
        if (variant.options['bar-position'] == 'top') {
          var barHeight = $cf(embed).find('.cta').outerHeight()
          $cf('html').css('padding-top', barHeight + 'px')
        }
      }

      if (next_step !== undefined && next_step['options']['script'] !== undefined) {
        try {
          $cf('body').append(next_step['options']['script']);
        } catch(e) {
          console.log(e.message, e.stack);
        };
      }
    }
  }

  if (element && element.element_type == 'quiz') {
    let firstQuestion = Object.values(element.fields).sort(
      (a, b) => a.position - b.position
    )[0];

    app.elements.elementTypes.quiz.setCurrentQuestion(firstQuestion, element, payload);
    app.elements.elementTypes.quiz.toggleButtons(element, 1, firstQuestion, payload);
  }
}


app.ctas.performConfirmationActionRedirect = function(payload) {
  const embed = payload.embed;
  const cta = payload.cta;
  const variant = payload.variant;
  const step = payload.step;
  const section = payload.section;
  const element = payload.element;
  const action_group = payload.action_group;

  var redirect_url;
  var query_string;
  var target_blank;

  if (action_group && action_group.data['confirmation-type'] == 'redirect' && action_group.data['redirect-url']) {
    redirect_url = action_group.data['redirect-url'];
    query_string = action_group.data['query-string'];
    target_blank = action_group.data['target-blank'];
  }

  if (!redirect_url && element.options['redirect-url']) {
    redirect_url = element.options['redirect-url'];
    query_string = element.options['query-string'];
    target_blank = element.options['target-blank'];
  }

  if (payload.redirect_url) {
    redirect_url = payload.redirect_url;
    target_blank = element.options['target-blank'];
  }

  if ($cf.inArray(element.element_type, ['form', 'survey']) > -1 && query_string == 'true') {

    var queryString = function(form, redirect_url) {
      var new_redirect_url = redirect_url

      if ($cf(form).attr('data-query-string') !== 'false') {
        var paramMap = {'extra': {}}

        $cf.each(app.helpers.personMap(), function(key, value) {
          var parameter = key
          paramMap[parameter] = value
          var option_attribute = value

          if (value == 'firstname') {
            var parameter = 'name'
            var option_attribute = 'name'
          }

          if (value == 'lastname') {
            var parameter = 'last_name'
          }

          if (value == 'website') {
            var parameter = 'url'
          }

          if (value == 'company_name') {
            var parameter = 'company_name'
            var option_attribute = 'company-name'
          }

          if (value == 'company_title') {
            var parameter = 'company_title'
            var option_attribute = 'company-title'
          }

          if (value == 'zipcode') {
            var option_attribute = 'zip-code'
          }

          if (element.options[option_attribute + '-redirect-dataname']) {
            paramMap[parameter] = element.options[option_attribute + '-redirect-dataname']
          }
        })

        $cf.each(element.fields, function(field_id, field) {
          if (field.parameter == undefined || field.parameter == "") {
            paramMap['extra'][field.slug] = field.slug
          } else {
            paramMap['extra'][field.slug] = field.parameter
          }
        })

        if (new_redirect_url.indexOf("?") == -1) {
          var query_start = "?"
        } else {
          var query_start = "&"
        }

        var email_input = $cf(form).find('input[name="contact[email]"]').val()

        if (email_input || convertflow.person.email !== undefined) {
          if (email_input) {
            var email_value = $cf(form).find('input[name="contact[email]"]').val()
          } else if (convertflow.person.email !== undefined) {
            var email_value = convertflow.person.email
          }
          new_redirect_url = new_redirect_url + query_start + paramMap['email'] + '=' + encodeURIComponent(email_value);
        } else {
          new_redirect_url = new_redirect_url + query_start + paramMap['email'] + '=';
        }
        delete paramMap.email

        if (new_redirect_url.indexOf("&amp;") > -1) {
          new_redirect_url = new_redirect_url.replace(new RegExp('&amp;', 'g'), '&');
        }


        $cf.each(paramMap, function(contact_field, param_key) {
          if (contact_field !== "extra") {
            var field = $cf(form).find('input[name="contact[' + contact_field + ']"]')
            
            if (contact_field == 'last_name') {
              var field_container = $cf(form).find('.cf-form-field[data-field="lastname"]')
            } else {
              var field_container = $cf(form).find('.cf-form-field[data-field="' + contact_field.replace('_', '-') + '"]')
            }
            
            var param_value = $cf(field).val()

            if ($cf(field_container).attr('data-visible') == 'true') {
              new_redirect_url = new_redirect_url + '&' + param_key + '=' + encodeURIComponent(param_value);
            }
          } else {
            $cf.each(param_key, function(field_slug, field_param) {
              var field = $cf(form).find('[name="contact[extra][' + field_slug + ']"], .cf-survey-field[data-field="' + field_slug + '"] .cf-survey-choice[data-selected="true"]')
              var param_value = $cf(field).val() || $cf(field).attr('data-value')
              if (param_value) {
                new_redirect_url = new_redirect_url + '&' + field_param + '=' + encodeURIComponent(param_value);
              }
            })
          }
        })
      }
      return new_redirect_url
    }

    var redirect_url = queryString($cf(embed).find('form[element-id="' + element.id + '"], .cf-element[data-id="' + element.id + '"] .cf-survey'), redirect_url)
  }

  app.helpers.redirectToFormattedUrl(redirect_url, target_blank == 'true');
}

const addConfirmationProductsToCart = function(payload, selected_integration) {
  const element = payload.element;
  const action_group = payload.action_group;
  const IntegrationService = new ProductsIntegrationsService(selected_integration);

  const product_variant_ids = action_group?.data["selected-product-variant-ids"] ||
    element.options["selected-product-variant-ids"];
  const products_quantity = action_group?.data["selected-products-quantity"] ||
    element.options["selected-products-quantity"];

  return new Promise((resolve, reject) => {
    IntegrationService.headlessSessionCart().then((cart_session) => {
      if (product_variant_ids) {
        const promises = product_variant_ids.split(',').map((product_variant_id) => {
          return IntegrationService.adapter().addToCart(
            cart_session?.id, [{ quantity: products_quantity || 1, merchandiseId: product_variant_id }]
          ).then((updatedCart) => {
            IntegrationService.saveOnCartSession(selected_integration, updatedCart);
            resolve(updatedCart);
          });
        });
        Promise.all(promises).then((results) => {
          resolve(results);
        }).catch((error) => {
          reject(error);
        });
      } else {
        resolve();
      }
    }).catch((error) => {
      reject(error);
    });
  });
}

app.ctas.performConfirmationActionRedirectToCart = function(payload, selected_integration) {
  const element = payload.element;
  const adding_to_cart = convertflow.session.cart && convertflow.session.cart[selected_integration]?.adding_to_cart

  let interval = setInterval(() => {
    if (adding_to_cart !== true) {
      clearInterval(interval);

      addConfirmationProductsToCart(payload, selected_integration).then(async () => {
        const cartURL = await new ProductsIntegrationsService(selected_integration)
          .storeCartURL({ discountCode: element.options["products-cart-redirect-discount"] })

        app.helpers.redirectToFormattedUrl(cartURL)
      })
    }
  }, 100);
}

app.ctas.performConfirmationActionRedirectToCheckout = function(payload, selected_integration) {
  const element = payload.element;
  const adding_to_cart = convertflow.session.cart && convertflow.session.cart[selected_integration]?.adding_to_cart

  let interval = setInterval(() => {
    if (adding_to_cart !== true) {
      clearInterval(interval);

      addConfirmationProductsToCart(payload, selected_integration).then(async () => {
        const checkoutURL = await new ProductsIntegrationsService(selected_integration)
          .storeCheckoutURL({ discountCode: element.options["products-cart-redirect-discount"] })

        app.helpers.redirectToFormattedUrl(checkoutURL)
      })
    }
  }, 100);
}

app.ctas.performConfirmationActionCta = function(payload) {
  const embed = payload.embed;
  const cta = payload.cta;
  const variant = payload.variant;
  const step = payload.step;
  const section = payload.section;
  const element = payload.element;
  const action_group = payload.action_group;
  const cta_override = payload.cta_override;

  var confirmation_cta_id = cta_override || undefined;

  if (action_group && action_group.data['confirmation-type'] == 'cta' && action_group.data['confirmation-cta']) {
    confirmation_cta_id = parseInt(action_group.data['confirmation-cta']);
  }

  if (!confirmation_cta_id && element.options['confirmation-cta']) {
    confirmation_cta_id = parseInt(element.options['confirmation-cta']);
  }

  var campaign = undefined;
  if (convertflow.ctas[cta.id]['broadcast_id'] !== undefined) {
    var campaign = app.website.broadcasts[convertflow.ctas[cta.id]['broadcast_id']]
  }

  if (convertflow.ctas[confirmation_cta_id] == undefined) {
    convertflow.load({
      cta_id: confirmation_cta_id,
      campaign: campaign,
      callback: function() {
        convertflow.trigger({
          cta_id: confirmation_cta_id
        })
      }
    });
    var confirmation_cta = convertflow.ctas[confirmation_cta_id]

    if (confirmation_cta !== undefined) {
      convertflow.ctas[confirmation_cta_id]['clicktriggered'] = true
    }
  } else {
    convertflow.trigger({
      cta_id: confirmation_cta_id
    })
  }

  if (element.options["products-button-close-popup"] == "true") {
    convertflow.close({
      cta_id: cta.id
    })
  }
}

app.ctas.performConfirmationActionClose = function(payload) {
  const embed = payload.embed;
  const cta = payload.cta;
  const variant = payload.variant;
  const element = payload.element;

  $cf(embed).hide()

  if (variant.options['aggressive'] !== 'true' && variant.options['hide'] !== "") {
    if (variant.options.aggressive == 'minutes') {
      var expire = parseInt(variant.options['minutes-hide'] || '30');
    } else if (variant.options.hide) {
      var expire = parseInt(variant.options.hide) * 24 * 60;
    } else {
      var expire = 0 * 24 * 60;
    }

    app.helpers.setCookie('viewedCta' + cta.id, 'true', expire)
  }

  if (cta.cta_type == 'bar') {
    if (variant.options['bar-position'] == 'bottom') {
      $cf(embed).find('.cta').addClass('slide-up')
    } else {
      var barHeight = $cf(embed).find('.cta').outerHeight()
      $cf('html').css('padding-top', barHeight + 'px')
      $cf(embed).find('.cta').addClass('slide-down')
    }
  }

  // pause videos
  $cf(embed).find('.cf-video iframe[src]').each(function(i, frame) {
    $cf(frame).removeAttr('src');
  });

  if (variant.options['trigger_type'] !== 'prehook' && variant.options['prehook-trigger-on-close'] + '' == 'true' && element.options['disable-conversion'] == 'true') {
    app.ctas.triggerTwoTap(cta, variant, embed);
  }

  app.visitors.fireEvent("cfClose", {
    cta: cta,
    variant: variant
  });
}



app.ctas.performConfirmationActionSms = function(payload) {
  const embed = payload.embed;
  const cta = payload.cta;
  const variant = payload.variant;
  const step = payload.step;
  const section = payload.section;
  const element = payload.element;
  const action_group = payload.action_group;

  var sms_number = action_group && action_group.data['confirmation-type'] == 'sms' && action_group.data['sms-number'] ? action_group.data['sms-number'] : element.options['sms-number'] ? element.options['sms-number'] : '';
  var phone_number = sms_number.replaceAll('(', '').replaceAll(')', '').replaceAll(' ', '').replaceAll('-', '');

  var sms_keyword = action_group && action_group.data['sms-keyword'] ? action_group.data['sms-keyword'] : element.options['sms-keyword'] ? element.options['sms-keyword'] : '';

  setTimeout(function() {
    window.location = "sms:" + phone_number + "&body=" + sms_keyword;
  }, 500)
  
}

app.ctas.eventSourceSlug = function(cta, variant, step, element) {
  const toCapitalizedWords = (string) =>
    (string?.match(/[A-Za-z][a-z]*/g) || [])
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  let output = ''

  if (cta) { 
    const ctaType = cta?.cta_type;
    const prettyCtaType = ctaType == 'page' ? 'Landing Page' : ctaType == 'inline' ? 'Embed' : ctaType == 'bar' ? 'Sticky Bar' : ctaType == 'hook' ? 'Hook Popup' : ctaType == 'overlay' ? 'Overlay Popup' : ctaType;
    output += `${toCapitalizedWords(prettyCtaType)} - ${cta?.name} (${cta?.id})`;
  }
  if (variant) { output += ` - Variant ${toCapitalizedWords(variant?.variation)}` }
  if (step) { output += ` - Funnel Step ${step?.position}` }
  if (element) { output += ` - ${toCapitalizedWords(element?.element_type)} Element` }

  return output;
}

app.ctas.performConfirmationActionUpdateCart = function(payload) {
  const embed = payload.embed;
  const cta = payload.cta;
  const variant = payload.variant;
  const step = payload.step;
  const section = payload.section;
  const element = payload.element;
  const action_group = payload.action_group;
  const productDiv = payload.productDiv;

  if (payload.embed.jquery) {
    payload.embed = $cf(payload.embed)[0];
  }

  const button = payload.button;

  if (button && element.options["products-source"]?.toLowerCase() !== "convertflow") {
    const buttonNewContent = element.options["products-cart-button"] ? element.options["products-cart-button"] : "<p>View Cart</p>";
    const discountCode = element.options["products-cart-redirect-discount"];

    let actionAfterAddToCart = "cart"

    if (element.options["products-button-action-after-add-to-cart"]) {
      actionAfterAddToCart = element.options["products-button-action-after-add-to-cart"];
    }

    button.classList.add('cf-disabled');
    button.onclick = null;

    setTimeout(() => {
      button.innerHTML = buttonNewContent;
      button.classList.remove('cf-disabled');

      button.onclick = (event) => {
        event.preventDefault();

        // TODO: Hard coded to Shopify bc that was the default behaviour. Need to make it dynamic in the future
        const productsIntegrationService = new ProductsIntegrationsService("Shopify")
        const urlOptions = {
          discountCode: discountCode,
          eventSourceSlug: app.ctas.eventSourceSlug(cta, variant, step, element)
        }

        new Promise((resolve) => {
          if (actionAfterAddToCart == "checkout") {
            resolve(productsIntegrationService.storeCheckoutURL(urlOptions));
          } else if (actionAfterAddToCart == "redirect" && element.options["products-button-redirect-url"]) {
            resolve(app.helpers.cleanURL(payload.element.options["products-button-redirect-url"]));
          } else if (actionAfterAddToCart == "step") {
            app.ctas.performConfirmationActionStep({...payload, step_override: element.options["products-button-redirect-step"]});
            resolve("");
          } else if (actionAfterAddToCart == "cta") {
            app.ctas.performConfirmationActionCta({...payload, cta_override: element.options["products-button-confirmation-cta"]});
            resolve("");
          } else {
            resolve(productsIntegrationService.storeCartURL(urlOptions));
          }
        }).then((redirectURL) => {
          app.ctas.conversionLogic({
            ...payload,
            redirect_url: redirectURL,
            productDiv: productDiv,
          }, app.elements.products.shouldTrackConversion(element, "cf-clicking-through-to-cart"));
        })
      }
    }, 500);
  }
}



app.ctas.incrementScore = function(embed, cta, variant, element, custom_field, custom_field_value, score_to_set) {
  var scoreIncrement = 0;

  if (!variant.score) {
    variant.score = 0;
  }

  var field = Object.values(element.fields).filter(function(field) {
    const slug_or_id = field.slug == "New Field" ? `cf_question_id_${field.id}` : field.slug;
    const parsedSlug = element.element_type == "quiz" ? slug_or_id : field.slug

    if (parsedSlug == custom_field) {
      return field;
    }
  })[0];

  if (field && field.field_options && Object.values(field.field_options).length > 0) {
    var field_options = Object.values(field.field_options).filter(function(field_option) {
      let fieldOptionValue = field_option.value ? field_option.value : field_option.label;

      if (fieldOptionValue == custom_field_value || custom_field_value.split(', ').includes(fieldOptionValue)) {
        return field_option;
      }
    });

    field_options.forEach((field_option) => {
      if (field_option.score !== undefined && field_option.score !== null) {
        scoreIncrement += field_option.score;
      }
    })
  }

  variant.score = variant.score + scoreIncrement;
  $cf(embed).find('span[data-merge="CURRENT_SCORE"]').text(variant.score);
  return variant.score;
}


app.ctas.setHookPopupOverflow = function(embed, cta, variant) {
  if (cta.cta_type == 'hook') {
    const max_height = window.innerHeight - 80;
    const cfContainer = $cf(embed).children('div[id="cta_' + cta.id + '"]').children(".cf-container");
    
    $cf(cfContainer).css({"max-height": max_height + "px"});
    $cf(cfContainer).css({"overflow-y": "auto"});
  }
}
    app.elements.elementTypes = {};

app.elements.handleLoad = (payload) => {
  const element = payload.element;

  let namespace;

  if (element.element_type == "products") {
    if (element.options["products-source"] == "Shopify") {
      namespace = app.elements.elementTypes["products_legacy"]
    } else {
      namespace = app.elements.elementTypes["products"]
    }
  } else {
    namespace = app.elements.elementTypes[element.element_type];
  }

  if (namespace) {
    namespace.handleLoad(payload);
  }
};

app.elements.products = {
  populateAdaptedProduct: (payload, adaptedProduct) => {
    window.convertflow.app.adapted_products = window.convertflow.app.adapted_products || []
    window.convertflow.app.adapted_products.push(adaptedProduct)

    const element = payload.element;
    const productSelector = adaptedProduct?.is_variant == true ? 'data-product-variant-id' : 'data-product-id';
    const parsedProductId = adaptedProduct?.is_variant == true ? adaptedProduct.id : adaptedProduct?.product_id || adaptedProduct?.id;
    const elementSelector = `.cf-products-outer[data-element-id="${payload.element.id}"]`

    const productDivById = payload.embed.querySelector(`
      ${elementSelector} .cf-products-item[${productSelector}="${parsedProductId}"],
      ${elementSelector} .cf-product-hero-inner[${productSelector}="${parsedProductId}"]`);
    const productDivByHandle = payload.embed.querySelector(`${elementSelector} .cf-products-item[data-handle="${adaptedProduct.handle}"]`);

    const productDiv = productDivById || productDivByHandle;
    const objectToUse = payload.objectToUse || payload.object || payload.element || adaptedProduct;

    if (productDiv) {
      productDiv.setAttribute("data-product-populated", true);

      const variantsFilter = objectToUse.options["products-variant-filter"]
      const productImage = productDiv.querySelector(".cf-products-item-image");
      const productImageCarousel = productDiv.querySelector(".cf-product__slider");
      const productTitle = productDiv.querySelector(".cf-products-item-title p");
      const productPrice = productDiv.querySelector(".cf-products-item-price-base");
      const productDescription = productDiv.querySelector(".cf-products-item-description");
      const productReviews = productDiv.querySelector(".cf-products-reviews");
      const productButton = productDiv.querySelector(".cf-products-item-button");
      const variantPickerWrapper = productDiv.querySelector(".cf-variant-picker-wrapper");
      const subscriptionPickerSelect = productDiv.querySelector(".cf-products-subscription-dropdown-wrapper select");
      const subscriptionPickerRadio = productDiv.querySelector(".cf-products-subscription-radio-wrapper");
      const removeFromCartButton = productDiv.querySelector(".cf-products-item-remove-from-cart");

      function buildVariantPicker(adaptedProduct, availableVariantOptionValues = []) {
        let optionsContent = '';

        adaptedProduct.options.forEach((option) => {
          if (option.name !== "Title") {
            optionsContent += `<p class="cf-variant-picker-label" style="font-size: 13px;">${option.name}</p>`
          }

          optionsContent += `<div class="cf-products-options-wrapper" data-option-name="${option.name}">`
          option.values.filter(val => !availableVariantOptionValues || availableVariantOptionValues.includes(val) && val !== 'Default Title').forEach((value) => {
            optionsContent += `<div class="cf-products-option-item" data-value="${value}">${value}</div>`
          });

          optionsContent += `</div>`
        });

        if (variantPickerWrapper) {
          variantPickerWrapper.innerHTML = optionsContent;
        }

        const variantPickerOptions = productDiv.querySelectorAll('.cf-products-options-wrapper')
        variantPickerOptions.forEach((option_wrapper) => {
          const optionItems = option_wrapper.querySelectorAll('.cf-products-option-item')

          optionItems.forEach((option_item) => {
            option_item.addEventListener('click', (event) => {
              event.target.parentElement.querySelectorAll('.cf-products-option-item').forEach((option_item) => {
                option_item.classList.remove('cf-products-item-button--selected');
                option_item.setAttribute('data-selected', 'false');
              });

              option_item.classList.add('cf-products-item-button--selected');
              event.target.setAttribute('data-selected', 'true');

              checkVariantAvailability(true);
            })

            optionItems[0].click()
          })
        })
      }

      function checkVariantAvailability(change_variant = false) {
        if (element.options["products-variant-picker-style"] == "cf-options-buttons" && element.options["products-source"] == "ShopifyGraphql") {
          const selectedOptions = productDiv.querySelectorAll(".cf-products-options-wrapper .cf-products-option-item[data-selected='true']");
          const selectedOptionsValues = Object.values(selectedOptions).map((option) => option.innerHTML)
          selectedProductVariant = adaptedProduct.variants.find((variant) => {
            const variantOptionsValues = variant.title.split(' / ');
            return selectedOptionsValues.every((value) => variantOptionsValues.includes(value));
          });

          if (element.options["confirmation-type"] == "cart" && productButton) {
            if (selectedProductVariant.available == true) {
              productButton.classList.remove('cf-products-item-button--disabled');
              productButton.innerHTML = `<p>${element.html ? element.html : "Add to Cart"}</p>`;
            } else {
              productButton.classList.add('cf-products-item-button--disabled');
              productButton.innerHTML = `<p>${element.options["products-sold-out-button-text"] ? element.options["products-sold-out-button-text"] : "Sold Out"}</p>`;
            }
          }

          selectedProductVariant.title.split(' / ').forEach((value) => {
            productDiv.querySelectorAll('.cf-products-option-item').forEach((option_item) => {
              option_item.classList.remove('cf-products-option-item--disabled');
            });

            const optionDiv = productDiv.querySelector(`.cf-products-option-item[data-value="${value}"]`);

            if (optionDiv) {
              optionDiv.classList.remove('cf-products-option-item--disabled');

              if (selectedProductVariant.available == false) {
                optionDiv.classList.add('cf-products-option-item--disabled');
              }
            }
          });

          if (change_variant == true) {
            changeProductVariant(selectedProductVariant.id);
          }
        }
      }

      const onClick = (event) => {
        app.elements.products.handleClick(
          {
            ...payload,
            adaptedProduct: adaptedProduct,
            button: productButton,
          },
          productDiv
        );
      };

      function changeProductVariant(value) {
        const productButton = productDiv.querySelector(".cf-products-item-button");

        if (productButton) {
          const buttonNewContent = element.html
            ? element.html
            : (element.options["confirmation-type"] == "cart" && element.options["products-source"]?.toLowerCase() !== "convertflow")
            ? "<p>Add To Cart</p>"
            : "<p>Go To Product</p>"
          productButton.innerHTML = buttonNewContent;
          productButton.onclick = onClick;
        }

        const productImage = productDiv.querySelector(".cf-products-item-image");
        const productTitle = productDiv.querySelector(".cf-products-item-title p");
        const productPriceContainer = productDiv.querySelector(".cf-products-item-price");
        const productPrice = productPriceContainer
          ? productPriceContainer.querySelector(
              ".cf-products-item-price-discount"
            ) ||
            productPriceContainer.querySelector(".cf-products-item-price-base")
          : null;

        const productDescription = productDiv.querySelector(".cf-products-item-description");
        const productBadge = productDiv.querySelector(".cf-products-item-badge")

        const strippedValues = variantsFilter?.split(",")?.map(item => item.trim());
        const parsedFilterQuery = app.helpers.parseDynamicFieldValues(strippedValues, window.convertflow.person);

        const isConditionalRecommendation = ['product_hero', 'product'].includes(objectToUse?.element_type) !== true;

        let limitedVariantIds = [];

        // Check if there are limited variants for this product specifically
        if (objectToUse.options["shopify-products-source"] == "selected" && objectToUse.options["shopify-products-selected-variants"]) {
          const parsedLimitedVariantIds = objectToUse.options["shopify-products-selected-variants"]?.split(",").filter((item) => item)

          limitedVariantIds = parsedLimitedVariantIds.filter((item) =>
            adaptedProduct.variants.map((variant) => variant.id + "").includes(item)
          );
        } else if (objectToUse.options["products-source"] == "ShopifyGraphql" && variantsFilter) {
          limitedVariantIds = adaptedProduct.variants.filter((variant) =>
            parsedFilterQuery.some(query => variant.title.includes(query))
          ).map(el => el.id)
        }

        let selectedProductVariant = adaptedProduct.variants.filter(
          (productVariant) => {
            const isSelectedVariant = productVariant.id + "" == value

            if (isSelectedVariant && limitedVariantIds.length == 0 || isSelectedVariant && limitedVariantIds.includes(productVariant.id + "")) {
              return productVariant;
            }
          })[0] || adaptedProduct.variants[0];

        if (selectedProductVariant) {
          productDiv.setAttribute("data-product-variant-id", selectedProductVariant.id);

          if (productImage) {
            if (selectedProductVariant.image) {
              productImage.innerHTML = `<img src="${selectedProductVariant.image}" loading="lazy" />`;
            } else if (adaptedProduct.image) {
              productImage.innerHTML = `<img src="${adaptedProduct.image}" loading="lazy" />`;
            }
          }

          if (productDescription) {
            if (element.options["products-description-override-text"] && !isConditionalRecommendation) {
              productDescription.innerHTML = element.options["products-description-override-text"];

              if (element.options["products-description-formatting"] == "cf-unformatted-text" && productDescription) {
                let tempDiv = document.createElement("div");
                tempDiv.innerHTML = productDescription.innerHTML;
                productDescription.innerHTML = tempDiv.textContent || tempDiv.innerText || "";
              }
            } else if (selectedProductVariant.description) {
              productDescription.innerHTML = selectedProductVariant.description;
            } else if (adaptedProduct.description) {
              productDescription.innerHTML = adaptedProduct.description;
            }

            if (element.options["products-description-formatting"] == "cf-unformatted-text" && productDescription) {
              let tempDiv = document.createElement("div");
              tempDiv.innerHTML = productDescription.innerHTML;
              productDescription.innerHTML = tempDiv.textContent || tempDiv.innerText || "";
            }
          }

          if (productTitle) {
            if (element.options["products-title-override-text"] && !isConditionalRecommendation) {
              productTitle.innerHTML = element.options["products-title-override-text"];
            } else if (selectedProductVariant.title && adaptedProduct.source?.toLowerCase() == "convertflow") {
              productTitle.innerHTML = `${selectedProductVariant.title.includes('Default Title') ? adaptedProduct.title : selectedProductVariant.title}`
            } else if (selectedProductVariant.title && adaptedProduct?.is_variant) {
              productTitle.innerHTML = adaptedProduct.variant_title;
            } else if (selectedProductVariant.title && element.options["products-title-show-variant-name"] !== "false") {
              productTitle.innerHTML = `${adaptedProduct.title} ${selectedProductVariant.title.includes('Default Title') ? '' : ' - ' + selectedProductVariant.title}`
            } else {
              productTitle.innerHTML = adaptedProduct.title;
            }
          }

          if (productBadge) {
            productBadge.style.display = "block";

            let productImageBadgeText;

            if (element.options["products-show-image-sold-out-badge"] == "true" && selectedProductVariant.available === false) {
              productImageBadgeText = element.options["products-image-sold-out-badge-text"] || "SOLD OUT";
            } else if (element.options["products-image-badge-style"] == "custom") {
              productImageBadgeText = element.options["products-image-badge-custom-message"] || "10% Off"
            } else if (element.options["products-discount-type"] == "detect") {

              if (selectedProductVariant.compare_at_price) {
                productImageBadgeText = `${app.website.currency_character} ${((selectedProductVariant.compare_at_price / 100) - selectedProductVariant.price).toFixed(2)} OFF`
              } else {
                productBadge.style.display = "none";
              }
            }

            if (productImageBadgeText) {
              productBadge.innerHTML = productImageBadgeText;
            }
          }

          if (selectedProductVariant.price && productPrice) {
            let priceFormatted = parseFloat(selectedProductVariant.price)
            productPrice.innerText = priceFormatted;

            let priceDiscounted;

            if (element.options["products-discount-type"] == "amount") {
              let discountAmount = element.options["products-discount-amount"] || 10;
              priceDiscounted = priceFormatted - parseFloat(discountAmount);
            }

            if (element.options["products-discount-type"] == "percentage") {
              let discountPercentage = element.options["products-discount-percentage"] || 10;
              priceDiscounted = priceFormatted - priceFormatted * (parseFloat(discountPercentage) * 0.01);
            }

            if (element.options["products-discount-type"] == "detect" && selectedProductVariant.compare_at_price) {
              priceDiscounted = priceFormatted;
              priceFormatted = selectedProductVariant.compare_at_price / 100
            }

            priceDiscounted = priceDiscounted?.toFixed(2)
            priceFormatted = priceFormatted.toFixed(2)

            const originalPrice = productPriceContainer.querySelector("strike") || document.createElement("strike");

            if (productPriceContainer && priceDiscounted !== undefined) {
              productPriceContainer.setAttribute('data-discount', true)

              const productPriceElement = productPriceContainer.querySelector('.cf-products-item-price-base');
              if (productPriceElement) {
                productPriceElement.classList.replace('cf-products-item-price-base', 'cf-products-item-price-discount');
              }
              originalPrice.innerHTML = `${app.website.currency_character}<span class="cf-products-item-price-base">${priceFormatted}</span>`;
              productPriceContainer.querySelector('p').prepend(originalPrice);

              let productDiscount = productDiv.querySelector('.cf-products-item-price-discount');
              if (productDiscount && (selectedProductVariant.compare_at_price || priceDiscounted)) {
                productDiscount.innerHTML = priceDiscounted
              }
            } else {
              productPriceContainer.querySelector('.cf-products-item-price-base').innerHTML = priceFormatted;
              originalPrice.innerHTML = '';
            }
          }

          // Change Options and Select variant dropdown
          if (element.options["products-variant-picker-style"] == "cf-options-buttons" && element.options["products-source"] == "ShopifyGraphql") {
            const variantPickerOptions = productDiv.querySelectorAll('.cf-products-options-wrapper')

            variantPickerOptions.forEach((option_wrapper) => {
              const optionItems = option_wrapper.querySelectorAll('.cf-products-option-item')

              optionItems.forEach((option_item) => {
                option_item.classList.remove('cf-products-item-button--selected');
                option_item.setAttribute('data-selected', 'false');
              });

              const selectedOption = Object.values(optionItems)
                .find((option_item) =>
                  selectedProductVariant.selected_options.map(e => e.value).includes(option_item.dataset.value)
                )

              if (selectedOption) {
                selectedOption.classList.add('cf-products-item-button--selected');
                selectedOption.setAttribute('data-selected', 'true');
              }
            })
          } else {
            const selectTag = productDiv.querySelector(".cf-products-item-variants select");

            if (selectTag) {
              selectTag.value = selectedProductVariant.id;
            }
          }

          // Change Variant carousel Image
          if (element.options["products-images-to-show"] == "carousel" && productImageCarousel) {
            const images = productImageCarousel.querySelectorAll(".cf-product__image");
            images.forEach((image) => {
              if (image.dataset.variantId) {
                image.classList.remove("cf-product__image--active");

                if (image.src == selectedProductVariant.image) {
                  image.classList.add("cf-product__image--active");
                }
              }
            });
          }
        }
      }

      if (adaptedProduct.source == "ShopifyGraphql" && adaptedProduct.imageList && adaptedProduct.imageList.length > 0 && element.options["products-images-to-show"] == "carousel" && productImageCarousel) {
        let contentCarousel = '';

        adaptedProduct.imageList.forEach((image, i) => {
          const imgVariantID = adaptedProduct.variant_images.find((variantImage) => variantImage.src == image.transformedSrc)?.variant_id || adaptedProduct.variants[0].id;
          const parsedVariantId = imgVariantID.replace('gid://shopify/ProductVariant/', '')
          contentCarousel += `<img class="cf-product__image ${i == 0 ? 'cf-product__image--active' : ''}" data-variant-id="${parsedVariantId}" src="${image.transformedSrc}" loading="lazy" />`
        });

        productImageCarousel.innerHTML = contentCarousel;

        const images = productImageCarousel.querySelectorAll(".cf-product__image");
        images.forEach((image) => {
          image.addEventListener("click", (event) => {
            if (variantPickerWrapper) {
              changeProductVariant(event.target.dataset.variantId);
            }

            productDiv.querySelector('.cf-products-item-image img').src = event.target.src;

            productImageCarousel.querySelector(".cf-product__image--active")?.classList?.remove("cf-product__image--active");
            event.target.classList.add("cf-product__image--active");

            checkVariantAvailability();
          });
        });

      }

      if (adaptedProduct?.is_variant == true) {
        productDiv.setAttribute("data-product-id", adaptedProduct.product_id);
        productDiv.setAttribute("data-product-variant-id", adaptedProduct.id);
      } else {
        productDiv.setAttribute("data-product-id", adaptedProduct.id)
      }

      if (adaptedProduct.source == "ShopifyGraphql" && variantPickerWrapper && element.options["products-variant-picker-style"] == "cf-options-buttons") {
        buildVariantPicker(adaptedProduct)
      } else {
        if (variantPickerWrapper) {
          const variantPickerSelector = variantPickerWrapper.querySelector("select");
          let optionsContent = '';

          adaptedProduct.variants.forEach((variant) => {
            optionsContent += `<option value="${variant.id}">${variant.title}</option>`
          });

          variantPickerSelector.innerHTML = optionsContent;
        }
      }

      if (adaptedProduct.source == "ShopifyGraphql" && (subscriptionPickerRadio || subscriptionPickerSelect)) {
        if (element.options["products-subscription-choices-type"] == "radios") {
          let optionsContent = '';

          if (adaptedProduct.requires_selling_plan !== true || !adaptedProduct.subscriptions || adaptedProduct.subscriptions?.length == 0) {
            optionsContent += `
              <p>
                <input type="radio" name="cf-subscription-type-${adaptedProduct.id}" id="cf-subs-default-${adaptedProduct.id}" value="" checked="checked" />
                <label for="cf-subs-default-${adaptedProduct.id}">${element.options["products-subscription-default-plan-text"] ? element.options["products-subscription-default-plan-text"] : "One-time purchase"}</label>
              </p>
            `;
          }

          adaptedProduct.subscriptions?.forEach((subscriptionGroup) => {
            Object.values(subscriptionGroup.sellingPlans).forEach((subscription) => {
              optionsContent += '<p>'
              optionsContent += `<input type="radio" name="cf-subscription-type-${adaptedProduct.id}" id="${subscription.id}" value="${subscription.id}" />`
              optionsContent += `<label for="${subscription.id}">${element.options["products-subscription-show-group-name"] !== "false" ? subscriptionGroup.name + " - " : ""} ${subscription.name}</label>`
              optionsContent += '</p>'
            }
          )});

          subscriptionPickerRadio.innerHTML = optionsContent;

        } else {
          let optionsContent = '';

          if (adaptedProduct.requires_selling_plan !== true || !adaptedProduct.subscriptions || adaptedProduct.subscriptions?.length == 0) {
            optionsContent += `<option value="">${element.options["products-subscription-default-plan-text"] ? element.options["products-subscription-default-plan-text"] : "One-time purchase"}</option>`;
          }

          adaptedProduct.subscriptions?.forEach((subscriptionGroup) => {
            Object.values(subscriptionGroup.sellingPlans).forEach((subscription) => {
              optionsContent += `<option value="${subscription.id.split("/").pop()}">${element.options["products-subscription-show-group-name"] !== "false" ? subscriptionGroup.name + " - " : ""} ${subscription.name}</option>`
            })
          });
          subscriptionPickerSelect.innerHTML = optionsContent;
        }
      }

      if (adaptedProduct.price) {
        productDiv.setAttribute("data-product-price", adaptedProduct.price);
      }

      if (adaptedProduct.source == "ShopifyGraphql" && removeFromCartButton) {
        removeFromCartButton.onclick = () => {
          app.elements.products.handleRemoveFromCart(adaptedProduct);
        };
      }

      const productVariantOptions = [];
      let productVariantsToUse = [];
      let defaultVariantId;

      if (adaptedProduct?.is_variant == true) {
        defaultVariantId = adaptedProduct.id;
      }

      if (
        objectToUse.options["shopify-products-source"] == "selected" &&
        objectToUse.options["shopify-products-selected-variants"] &&
        adaptedProduct.variants.length > 1
      ) {
        productVariantsToUse = adaptedProduct.variants.filter(
          (productVariant) => {
            if (
              objectToUse.options["shopify-products-selected-variants"]
                .split(",")
                .filter(item => item)
                .includes(productVariant.id + "")
            ) {
              return productVariant;
            }
          }
        );

        if (productVariantsToUse[0] && productVariantsToUse[0].id) {
          defaultVariantId = productVariantsToUse[0].id;
        }
      }

      if (element.options["products-source"] == "ShopifyGraphql" && variantsFilter) {
        const productsVariantOperator = payload.objectToUse.options["products-variant-filter-operator"] || "OR";
        const strippedValues = variantsFilter.split(",").map(item => item.trim());
        const parsedFilterQuery = app.helpers.parseDynamicFieldValues(strippedValues, window.convertflow.person);

        console.log('CF product variants query', parsedFilterQuery);

        let filteredVariants = []

        if (productsVariantOperator == "AND") {
          filteredVariants.push(adaptedProduct.variants.filter((variant) => {
            return parsedFilterQuery.every((query) => {
              return variant.title.toLowerCase().includes(query.toLowerCase());
            });
          }))
        } else {
          parsedFilterQuery.forEach((query) => {
            filteredVariants.push(adaptedProduct.variants.filter((variant) => {
              return variant.title.toLowerCase().includes(query.toLowerCase());
            }))
          });
        }

        if (filteredVariants.length > 0) {
          productVariantsToUse.push(...filteredVariants.flat())

          if (productVariantsToUse[0] && productVariantsToUse[0].id) {
            defaultVariantId = productVariantsToUse[0].id;
          }
        }
      }

      if (!productVariantsToUse || productVariantsToUse.length == 0) {
        productVariantsToUse = adaptedProduct.variants;

        if (adaptedProduct.source?.toLowerCase() == "convertflow") {
          defaultVariantId = productVariantsToUse.find((variant) => variant.id == adaptedProduct.id)?.id;
        } else if (
          !defaultVariantId &&
          productVariantsToUse &&
          productVariantsToUse[0] &&
          productVariantsToUse[0].id
        ) {
          defaultVariantId = productVariantsToUse[0].id;
        }
      }

      if ((element.options["confirmation-type"] == "cart" || adaptedProduct.source?.toLowerCase() == "convertflow") && adaptedProduct?.variants?.length > 0) {
        if (element.options["products-variant-picker-style"] == "cf-options-buttons" && adaptedProduct.source == "ShopifyGraphql") {
          let availableVariantOptionValues = [...new Set(productVariantsToUse.map(e=> e.title.split(' / ')).flat())]
          buildVariantPicker(adaptedProduct, availableVariantOptionValues)
        } else {
          const selectTag = productDiv.querySelector(".cf-products-item-variants select");


          productVariantsToUse.forEach((productVariant) => {
            const optionTag = document.createElement("option");
            optionTag.value = productVariant.id;
            optionTag.innerHTML = `${productVariant?.title?.includes('Default Title') ? adaptedProduct.title : productVariant.title}`
            productVariantOptions.push(optionTag);
          });

          if (selectTag) {
            selectTag.replaceChildren(...productVariantOptions);
          }

          if (selectTag) {
            selectTag.onchange = (event) => {
              changeProductVariant(selectTag.value);
            };
          }
        }
      }

      if (defaultVariantId) {
        changeProductVariant(defaultVariantId);
      }

      const onLinkToClick = (event) => {
        event.preventDefault();
        const redirectURL = event.target?.closest('.cf-link-to-trigger')?.href || adaptedProduct.redirect_url;

        app.ctas.conversionLogic({
          ...payload,
          redirect_url: redirectURL,
          productDiv: productDiv,
        }, app.elements.products.shouldTrackConversion(element, "cf-link-clicked-or-added-to-cart"));
      };

      const wrapProductContentWithLinkTo = (content) => {
        let redirectUrl = adaptedProduct.redirect_url.includes('http') ? adaptedProduct.redirect_url : `http://${adaptedProduct.redirect_url}`;

        if (["Shopify", "ShopifyGraphql"].includes(adaptedProduct.source)) {
          redirectUrl = `https://${window.convertflow.app.shopify_store_url}${adaptedProduct.redirect_url}`
        }

        return content.replace(/^/, x => x + `<a class="cf-link-to-trigger" href="${redirectUrl}">`).replace(/$/, x => x + '</a>')
      }

      if (productReviews && element.options["products-reviews-link-to-product"] == "true") {
        productReviews.parentElement.innerHTML = wrapProductContentWithLinkTo(productReviews.parentElement.innerHTML)
      }

      if (productImage && element.options["products-image-link-to-product"] == "true") {
        productImage.parentElement.innerHTML = wrapProductContentWithLinkTo(productImage.parentElement.innerHTML)
      }
      if (productDescription && element.options["products-description-link-to-product"] == "true" && productDescription) {
        productDescription.innerHTML = wrapProductContentWithLinkTo(productDescription.innerHTML)
      }
      if (productTitle && element.options["products-title-link-to-product"] == "true") {
        productTitle.parentElement.innerHTML = wrapProductContentWithLinkTo(productTitle.parentElement.innerHTML)
      }
      if (productPrice && element.options["products-price-link-to-product"] == "true") {
        productPrice.innerHTML = wrapProductContentWithLinkTo(productPrice.innerHTML)
      }

      productDiv.querySelectorAll('.cf-link-to-trigger').forEach((link) => {
        link.onclick = onLinkToClick;
      })

      if (productButton) {
        element.addingToCart = false;
        productButton.onclick = onClick;
      } else if (
        objectToUse.options["shopify-products-source"] &&
        objectToUse.options["shopify-products-source"] !== "cart" &&
        element.options["confirmation-type"] == "product" &&
        element.options["products-show-remove-from-cart"] !== "true"
      ) {
        const clickableDiv = productDiv.querySelector(
          ".cf-products-item-inner"
        );
        clickableDiv.style.cursor = "pointer";
        clickableDiv.onclick = onClick;
      }

      const showProductsQuantity = element.options["quantity-picker-show"]
        ? element.options["quantity-picker-show"]
        : element.options["products-quantity"]
        ? element.options["products-quantity"]
        : "false";

      const quantityDiv = productDiv.querySelector(".cf-increment-quantity-picker");

      if (showProductsQuantity == "true" && quantityDiv) {
        const quantityInput = quantityDiv.querySelector(
          ".cf-products-quantity"
        );
        const quantityDecrement = quantityDiv.querySelector(".cf-decrement");
        const quantityIncrement = quantityDiv.querySelector(".cf-increment");

        quantityDecrement.onclick = function (e) {
          if (quantityInput.innerHTML > 1) {
            quantityInput.innerHTML = parseInt(quantityInput.innerHTML) - 1;
          }
        };

        quantityIncrement.onclick = function (e) {
          quantityInput.innerHTML = parseInt(quantityInput.innerHTML) + 1;
        };
      }

      const isConditionalRecommendation = ['product_hero', 'product'].includes(payload.object?.element_type) !== true;

      // Override title/description just on the initialization
      if (productDescription && !isConditionalRecommendation) {
        if (element.options["products-description-override-text"]) {
          productDescription.innerHTML = element.options["products-description-override-text"];

          if (element.options["products-description-formatting"] == "cf-unformatted-text" && productDescription) {
            let tempDiv = document.createElement("div");
            tempDiv.innerHTML = productDescription.innerHTML;
            productDescription.innerHTML = tempDiv.textContent || tempDiv.innerText || "";
          }
        }
      }

      if (productTitle && !isConditionalRecommendation) {
        if (element.options["products-title-override-text"]) {
          productTitle.innerHTML = element.options["products-title-override-text"];
        }
      }

      if (window.convertflow && typeof convertflow.app?.ctas?.mergeTags == "function") {
        app.ctas.mergeTags(payload.cta, payload.variant, productDiv);
      }

      if (element.element_type == "products") {
        productDiv.style.display = "block";
      }
    }
  },

  shouldTrackConversion: (element, target_action = "cf-added-to-cart") => {
    if (element.options["confirmation-type"] == "product" || !element.options["products-source"] || element.options["products-source"]?.toLowerCase() == "convertflow") {
      return true;
    }

    if (element.options["confirmation-type"] == "cart") {
      if (element.options["products-cart-redirect"] == "true" ||
        element.options["products-checkout-redirect"] == "true") {
        return true;
      }

      switch (element.options["track-conversion-when"]) {
        case "cf-added-to-cart":
          return target_action == "cf-added-to-cart";
        case "cf-link-clicked-or-added-to-cart":
          return target_action == "cf-added-to-cart" || target_action == "cf-link-clicked-or-added-to-cart";
        case "cf-clicking-through-to-cart":
          return target_action == "cf-clicking-through-to-cart";
        default:
          return true;
      }
    }

    return false;
  },

  setupProductReviews: (payload, client, integration_type) => {
    const renderStarIcon = (score) => {
      const emptyStar = '<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="svg-inline--fa fa-star " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" color="white"><path fill="currentColor" d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"></path></svg>'
      const solidStar = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg>'
      const halfStar = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star-half-stroke" class="svg-inline--fa fa-star-half-stroke " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z"></path></svg>'

      const fullStars = Math.floor(score);
      const hasHalfStar = score % 1 !== 0;

      const starIcons = [];

      for (let i = 0; i < fullStars; i++) {
        starIcons.push(solidStar);
      }

      if (hasHalfStar) {
        starIcons.push(halfStar);
      }

      const remainingStars = 5 - starIcons.length;
      for (let i = 0; i < remainingStars; i++) {
        starIcons.push(emptyStar);
      }

      return starIcons.join("");
    }

    const productIds = window.convertflow.app.adapted_products.map(e => e.id)

    new ProductsReviewsAdapterService(client, integration_type)
      .getReviews(productIds)
      .then((response) => {
        response.forEach((review) => {
          const element = payload.element;
          const productReviewsDivs = payload.embed.querySelectorAll(
            `.cf-products-item[data-product-id="${review.product_id}"] .cf-products-reviews`
          );

          if (productReviewsDivs) {
            productReviewsDivs.forEach((productReviewsDiv) => {
              let reviewContent = ""

              reviewContent += "<div class='cf-products-reviews-stars-inner'>"

              if (review.product_score) {
                reviewContent += renderStarIcon(review.product_score);
              }

              reviewContent += "</div>"

              if (review.product_total_reviews > 0) {
                reviewContent += `<div class='cf-products-reviews-count'>${review.product_total_reviews}</div>`
                reviewContent += `<div class='cf-products-reviews-label'>${element.options["products-reviews-label"] ? element.options["products-reviews-label"] : "Reviews"}</div>`
              }

              productReviewsDiv.innerHTML = reviewContent;
            });
          }
        })
      });
  },

  showEmptyMessage: (show, payload) => {
    const elementDiv = payload.embed.querySelector(
      `.cf-element[data-element-id="${payload.element.id}"]`
    );
    const productsEmptyDivs = elementDiv.querySelectorAll(`.cf-products-empty-message`);

    const addAllButtons = elementDiv.querySelectorAll(`.cf-products-all-button-outer .cf-button`);

    if (show) {
      productsEmptyDivs.forEach(div => { div.style.display = "block" });

      addAllButtons.forEach(button => { button.style.display = "none" });
    } else {
      productsEmptyDivs.forEach(div => { div.style.display = "none" });

      addAllButtons.forEach(button => { button.style.display = "inline-block" });
    }
  },

  getRedirectUrlForCartClick: async (payload, element) => {
    let redirectURL;
    let actionAfterAddToCart;
    const discountCode = element.options["products-cart-redirect-discount"];

    if (element.options["products-cart-redirect"] == "true") {
      actionAfterAddToCart = "cart";
    } else if (element.options["products-checkout-redirect"] == "true") {
      actionAfterAddToCart = "checkout";
    } else if (element.options["products-button-action-after-add-to-cart"]) {
      actionAfterAddToCart = element.options["products-button-action-after-add-to-cart"];
    }

    if (actionAfterAddToCart == "cart") {
      redirectURL = await new ProductsIntegrationsService("Shopify").storeCartURL({ discountCode: discountCode })
    } else if (actionAfterAddToCart == "checkout"){
      redirectURL = await new ProductsIntegrationsService("Shopify").storeCheckoutURL({ discountCode: discountCode })
    } else if (actionAfterAddToCart == "redirect" && element.options["products-button-redirect-url"]) {
      app.helpers.cleanURL(element.options["products-button-redirect-url"])
    } else if (actionAfterAddToCart == "step") {
      app.ctas.performConfirmationActionStep({...payload, step_override: element.options["products-button-redirect-step"]});
    } else if (actionAfterAddToCart == "cta") {
      app.ctas.performConfirmationActionCta({...payload, cta_override: element.options["products-button-confirmation-cta"]});
    }

    return redirectURL;
  },

  getSelectedVariantForProduct: (payload, product) => {
    const element = payload.element;
    const elementDiv = payload.embed.querySelector(`.cf-element[data-element-id="${element.id}"]`);
    const productDiv = elementDiv.querySelector(
      `.cf-products-item[data-handle=\"${product.handle}\"]`
    );

    return product.variants.find((variant) => {
      return variant.id == productDiv.getAttribute('data-product-variant-id')
    });
  },

  getProductMatchedRecommendation: (payload, object) => {
    const productRecommendations = object.product_recommendations || {};

    const trueConditionalRecommendation = Object.values(productRecommendations).filter((productRecommendation) => {
      if (
        !$cf.isEmptyObject(productRecommendation.conditions) &&
        app.campaigns.checkConditions(
          productRecommendation.conditions,
          window.convertflow.person,
          { variant: payload.variant }
        ) == true
      ) {
        productRecommendation.status = true;
        return productRecommendation;
      }
    })[0];

    return trueConditionalRecommendation || object;
  },

  handleRemoveFromCart: (adaptedProduct) => {
    const productsIntegrationService = new ProductsIntegrationsService("Shopify");
    const adapterService = productsIntegrationService.adapter();

    productsIntegrationService.headlessSessionCart().then((cartSession) => {
      adapterService.removeFromCart(cartSession?.id, [adaptedProduct]);
    });
  },

  handleClick: async (payload, productDiv) => {
    const element = payload.element;
    const product = payload.adaptedProduct;

    // redirect to selected product's redirect URL
    if (!["Shopify", "ShopifyGraphql"].includes(element.options["products-source"])) {
      let redirectURL = product.redirect_url;
      let selectedProductVariantID;
      let selectedProductVariant;

      if (
        product.variants &&
        Object.values(product.variants).length > 0
      ) {
        const productVariantSelectTag = productDiv.querySelector("select");

        if (productVariantSelectTag) {
          selectedProductVariantID = productVariantSelectTag.value;
          selectedProductVariant = product.variants.find((v) => v.id == selectedProductVariantID)
        } else {
          selectedProductVariantID = product.id;
          selectedProductVariant = product;
        }

        if (selectedProductVariant && selectedProductVariant.redirect_url) {
          redirectURL = selectedProductVariant.redirect_url;
        }
      }

      app.ctas.conversionLogic({
        ...payload,
        redirect_url: redirectURL,
        product: product,
        product_variant: selectedProductVariant,
      });
    }

    // add shopify product to cart or redirect to url
    if (["Shopify", "ShopifyGraphql"].includes(element.options["products-source"])) {
      let productPrice = product.price / 100;

      const productDiscount = productDiv.querySelector(
        ".cf-products-item-price-discount"
      );
      if (productDiscount) {
        productPrice = productDiscount.innerText;
        try {
          productPrice = parseFloat(productPrice);
        } catch (e) {}
      }

      let productPayload = {
        product_id: product.id,
        product_name: product.title,
        product_price: productPrice,
        product_source: "Shopify",
      };

      // add to cart
      if (
        element.options["confirmation-type"] == "cart" &&
        product.variants.length > 0
      ) {
        element.addingToCart = true;

        const productButton = productDiv.querySelector(".cf-products-item-button");
        if (productButton && productButton.classList.contains('cf-products-item-button--disabled')) {
          return false;
        }

        const selectedProductVariant = app.elements.products.getSelectedVariantForProduct(payload, product);
        const parsedProductVariantID = selectedProductVariant.id.includes(
          "gid://"
        ) ? selectedProductVariant.id.split("/").pop() : selectedProductVariant.id;

        const selectedProductQuantityDiv = productDiv.querySelector(
          ".cf-increment-quantity-picker .cf-products-quantity"
        );
        const selectedProductQuantity = selectedProductQuantityDiv
          ? selectedProductQuantityDiv.innerHTML
          : 1;


        let selectedProductSubscriptionDiv;
        if (element.options["products-subscription-choices-type"] == "radios") {
          selectedProductSubscriptionDiv = productDiv.querySelector(
            ".cf-products-subscription-radio-wrapper input[type='radio']:checked"
          );
        } else {
          selectedProductSubscriptionDiv = productDiv.querySelector(
            ".cf-products-subscription-dropdown-wrapper select"
          );
        }
        let selectedSellingPlanID = selectedProductSubscriptionDiv?.value

        if (parsedProductVariantID) {
          const productsIntegrationService = new ProductsIntegrationsService("Shopify");
          const adapterService = productsIntegrationService.adapter();

          let redirectURL;

          if (product.requires_selling_plan && !selectedSellingPlanID) {
            const defaultSubscription = selectedProductVariant.subscriptions[0]?.sellingPlans[0]?.id

            if (defaultSubscription) {
              selectedSellingPlanID = defaultSubscription
            } else {
              console.log('Shopify Product configured to require a subscription but product has no subscription plans.')
            }
          }

          const parsedPlanId = selectedSellingPlanID ?
            selectedSellingPlanID.includes('gid://shopify/SellingPlan/') ?
              selectedSellingPlanID : `gid://shopify/SellingPlan/${selectedSellingPlanID}` : undefined

          productsIntegrationService.headlessSessionCart().then((cartSession) => {
            adapterService.addToCart(
              cartSession?.id,
              [{
                quantity: selectedProductQuantity,
                merchandiseId: `gid://shopify/ProductVariant/${parsedProductVariantID}`,
                sellingPlanId: parsedPlanId
              }]
            ).then(async () => {
              const discountCode = element.options["products-cart-redirect-discount"];

              if (discountCode) {
                adapterService.applyDiscountCode(cartSession?.id, discountCode)
              }

              adapterService.updateCartAttributes(cartSession?.id, [
                {
                  key: "_convertflow",
                  value: app.ctas.eventSourceSlug(
                    payload.cta,
                    payload.variant,
                    payload.step,
                    payload.element
                  ),
                },
              ]);

              // redirect to cart right after add to cart
              if (element.options["products-cart-redirect"] == "true" ||
                element.options["products-checkout-redirect"] == "true") {
                  redirectURL = await app.elements.products.getRedirectUrlForCartClick(payload, element);
              }

              let productPayloadWithVariant = {
                ...productPayload,
                product_variant: parsedProductVariantID,
              };

              if (
                selectedProductVariant &&
                selectedProductVariant.title &&
                selectedProductVariant.title !== "Default Title"
              ) {
                productPayloadWithVariant.product_name = `${productPayload.product_name} - ${selectedProductVariant.title}`;
                productPayload.product_name = productPayloadWithVariant.product_name;
              }

              if (window.Shopify == undefined && window.convertflow?.session?.cart?.Shopify) {
                // legacy listeners update the cart via #app.visitors.shopifyCartListener
                app.visitors.updateShopifyCart(window.convertflow.session.cart.Shopify);

                app.visitors.fireEvent("cfAddToCartShopify", {
                  ...payload
                });
              }

              app.ctas.track(
                {
                  event_type: "Add To Cart",
                  variant_id: payload.variant.id,
                  step_id: payload.step.id,
                  element_id: payload.element.id,
                  data: productPayloadWithVariant,
                },
                payload.cta,
                payload.element
              );

              console.log('CF conversionLogic', redirectURL);

              app.ctas.conversionLogic({
                ...payload,
                redirect_url: redirectURL,
                productDiv: productDiv,
                productData: productPayload,
              }, app.elements.products.shouldTrackConversion(element, "cf-added-to-cart"));

              app.visitors.fireEvent("cfAddToCart", {
                cta: payload.cta,
                variant: payload.variant,
                step: payload.step,
                element: payload.element,
                product: productPayloadWithVariant,
              });
            })
          });
        }
      }

      // redirect to product
      if (element.options["confirmation-type"] == "product") {
        let redirectURL = `/products/${product.handle}`;

        const discountCode = element.options["products-cart-redirect-discount"];

        if (redirectURL && discountCode) {
          redirectURL = `/discount/${discountCode}?redirect=/products/${product.handle}`;
        }

        app.ctas.conversionLogic({
          ...payload,
          redirect_url: `${window.convertflow.app.shopify_store_url}${redirectURL}`,
          productData: productPayload,
        }, app.elements.products.shouldTrackConversion(element, "cf-link-clicked-or-added-to-cart"));
      }
    }
  },

  updateProductsOuterDataAttributes: (payload, adaptedProducts = []) => {
    const productsContainer = payload.embed.querySelector(
      `.cf-products-outer[data-element-id="${payload.element.id}"]`
    );

    const layout = payload.element.options["products-layout"]
      ? payload.element.options["products-layout"]
      : "grid";

    let productsPerRow;

    if (layout === "list") {
      productsPerRow = 1;
    } else {
      productsPerRow = payload.element.options["products-limit-row"]
        ? payload.element.options["products-limit-row"]
        : 3;
    }

    productsContainer.setAttribute('data-products-per-row', productsPerRow);
  },
};


app.elements.elementTypes.carousel = {
  handleLoad: (payload) => {
    if (payload.embed.jquery) {
      payload.embed = $cf(payload.embed)[0];
    }

    const carouselDiv = payload.embed.querySelector(
      `.cf-element[data-element-id="${payload.element.id}"]`
    );

    app.helpers.onVisible(carouselDiv, () => {
      app.elements.elementTypes.carousel.adjustIndicators(payload, carouselDiv);
      app.elements.elementTypes.carousel.initialize(payload, carouselDiv);
    });
  },
  adjustIndicators: (payload, carouselDiv) => {
    let slideWrapper = carouselDiv.querySelector(".cf-carousel-wrapper");

    // Mobile
    if (app.helpers.mediaQueryIsMobile()) {
      if (payload.element.options["carousel-slides-per-view-mobile"]) {
        slideWrapper.setAttribute("data-items", payload.element.options["carousel-slides-per-view-mobile"]);
      }
    } else {
      // Desktop
      if (payload.element.options["carousel-slides-per-view"]) {
        slideWrapper.setAttribute("data-items", payload.element.options["carousel-slides-per-view"]);
      }
    }
  },
  initialize: (payload, carouselDiv) => {
    carouselDiv.querySelectorAll(".cf-carousel-wrapper").forEach((wrapper) => {
      const EL_slider = wrapper.querySelector(".cf-carousel");
      const ELS_items = wrapper.querySelectorAll(".cf-carousel-item");
      const sub = +wrapper.dataset.items ?? 1;
      const tot = Math.ceil(ELS_items.length / sub);
      let c = 0;

      const ratioPerSlide = () => parseFloat(((100 / sub) * 0.01).toFixed(5));

      const carouselPagesMatrix = (targetPosition) => {
        let positionPageMatrix = {};
        let slidesPerView = sub;
        let totalPages = tot;
        let slidePositionCounter = 1;
        let ratioCounter = 0;

        Array.from({ length: totalPages }).forEach((_x, page_number) => {
          Array.from({ length: slidesPerView }).forEach((_x) => {
            positionPageMatrix[slidePositionCounter] = ratioCounter;
            slidePositionCounter += 1;
            ratioCounter += ratioPerSlide();
          });
        });

        if (targetPosition) {
          return positionPageMatrix[targetPosition];
        } else {
          return positionPageMatrix;
        }
      };

      const itemsLength = () => {
        return carouselDiv.querySelectorAll(".cf-carousel-item").length;
      };

      const totalNonEmptySlides = () => {
        return (itemsLength() - sub) + 1
      }

      const getCurrentPosition = () => {
        let carousel_items = carouselDiv.querySelectorAll(
          ".cf-carousel-indicator"
        );

        return (
          [...carousel_items].findIndex((item) =>
            item.classList.contains("active")
          ) + 1
        );
      };

      const updateIndicatorPositionTo = (target_position) => {
        let indicators = carouselDiv.querySelectorAll(".cf-carousel-indicator");
        carouselDiv.setAttribute("data-slide-page", target_position);

        if (payload.element.options["carousel-hide-indicator-controls"] !== "true" && indicators.length > 0) {
          if (target_position > itemsLength()) {
            target_position = 1;
          } else if (target_position == 0) {
            target_position = itemsLength();
          }

          indicators.forEach((indicator) => {
            indicator.classList.remove("active");
          });

          let targetIndicator = carouselDiv.querySelector(`.cf-carousel-indicator[data-position="${target_position}"]`);
          if (targetIndicator) {
            targetIndicator.classList.add("active");
          }
        }
      };

      const anim = () =>
        (EL_slider.style.transform = `translateX(-${c * 100}%)`);

      const prev = () => {
        let currentPage = parseInt(carouselDiv.getAttribute("data-slide-page"));

        if (currentPage == 1) {
          currentPage = totalNonEmptySlides();
        } else {
          currentPage -= 1;
        }

        goToPage(currentPage);
      };

      const next = () => {
        let currentPage = parseInt(carouselDiv.getAttribute("data-slide-page"));

        if (currentPage == totalNonEmptySlides()) {
          currentPage = 1;
        } else {
          currentPage += 1;
        }

        goToPage(currentPage);
      };

      const goToPage = (target_position) => {
        updateIndicatorPositionTo(target_position);
        return (c = carouselPagesMatrix(target_position)), anim();
      };

      app.elements.elementTypes.carousel.setupTouchSwipe(carouselDiv, prev, next);

      carouselDiv
        .querySelectorAll(".cf-indicator-go-to")
        .forEach((indicator, index) => {
          if (index >= totalNonEmptySlides()) {
            indicator.style.display = "none";
          } else {
            indicator.style.display = "block";
            indicator.addEventListener("click", (x) => goToPage(x.target.dataset["position"]));
          }
        });

      if (payload.element.options["carousel-hide-arrow-controls"] !== "true") {
        wrapper.querySelector(".cf-arrow-left").addEventListener("click", prev);
        wrapper.querySelector(".cf-arrow-right").addEventListener("click", next);
      }

      if (getCurrentPosition() == 0) {
        updateIndicatorPositionTo(1);
      }

      let carouselRotationStyle = payload.element.options["carousel-rotation-style"];
      let carouselRotationDelay = payload.element.options["carousel-rotation-delay"] || 5;

      if (carouselRotationStyle == "automatic") {
        setInterval(() => next(), carouselRotationDelay * 1000);
      }
    });
  },
  setupTouchSwipe: (carouselDiv, prev, next) => {
    let touchstartX = 0
    let touchendX = 0

    carouselDiv.addEventListener('touchstart', e => {
      touchstartX = e.changedTouches[0].screenX
    })

    carouselDiv.addEventListener('touchend', e => {
      const isArrowControl = e.target.classList.contains('cf-arrow-control');

      if (isArrowControl) {
        return;
      }

      touchendX = e.changedTouches[0].screenX

      if (touchendX < touchstartX) { next() }
      if (touchendX > touchstartX) { prev() }
    })
  },
};

app.elements.elementTypes.collapse = {
  handleLoad: (payload) => {
    const collapseDiv = document.querySelector(
      `#cf-collapse${payload.element.id}`
    );

    if (payload.embed.jquery) {
      payload.embed = $cf(payload.embed)[0];
    }

    app.helpers.onVisible(collapseDiv, () => {
      app.elements.elementTypes.collapse.initialize(payload);
    });
  },
  initialize: (payload) => {
    const element = payload.element;

    payload.embed
      .querySelectorAll(
        `#cf-collapse${element.id} .cf-collapse-toggle[data-list-item-element-id="${element.id}"]`
      )
      .forEach((list_item_toggle) => {
        list_item_toggle.onclick = function (e) {
          e.preventDefault();

          app.elements.elementTypes.collapse.toggleChevron(
            payload,
            element,
            list_item_toggle
          );

          let target = list_item_toggle.getAttribute("data-target");
          app.elements.elementTypes.collapse.toggleBox(
            payload,
            element,
            target
          );
        };
      });

    payload.embed
      .querySelectorAll(`#cf-collapse${element.id} .cf-collapse-heading`)
      .forEach((list_item_heading) => {
        list_item_heading.onclick = function (e) {
          if (e.target.classList.contains("cf-collapse-heading")) {
            list_item_heading.querySelector(".cf-collapse-toggle").click();
          }
        };
      });
  },

  toggleChevron: (payload, element, list_item_toggle) => {
    let targetCollapsed = list_item_toggle.classList.contains("cf-collapsed");

    payload.embed
      .querySelectorAll(
        `#cf-collapse${element.id} .cf-collapse-toggle[data-list-item-element-id="${element.id}"]`
      )
      .forEach((toggle) => {
        toggle.classList.remove("cf-collapsed");
      });

    if (!targetCollapsed) {
      list_item_toggle.classList.add("cf-collapsed");
    }
  },

  toggleBox: (payload, element, target) => {
    let targetBox = payload.embed.querySelector(target);

    let targetItemId = targetBox.getAttribute("data-collapse-item-id");
    let targetHeadingBox = payload.embed.querySelector(
      `#cf-collapse-item-heading-${targetItemId}`
    );

    if (targetBox.classList.contains("cf-collapse-box-in")) {
      targetBox.classList.remove("cf-collapse-box-in");
      targetHeadingBox.classList.remove("cf-collapse-box-in");
    } else {
      targetBox.classList.add("cf-collapse-box-in");
      targetHeadingBox.classList.add("cf-collapse-box-in");
    }

    payload.embed
      .querySelectorAll(
        `#cf-collapse${element.id} .cf-collapse-box[data-list-item-element-id="${element.id}"]:not(${target})`
      )
      .forEach((box) => {
        box.classList.remove("cf-collapse-box-in");
      });
  },
};

app.elements.elementTypes.product_hero = {
  handleLoad: (payload) => {
    const element = payload.element;

    if (payload.embed.jquery) {
      payload.embed = $cf(payload.embed)[0];
    }

    const stepDiv = document.querySelector(`.cf-step[data-step-id="${payload.step.id}"]`);

    app.helpers.onVisible(stepDiv, () => {
      app.elements.elementTypes.product_hero.initialize(element, payload);

      if (element.options["products-source"] == "ShopifyGraphql") {
        ['cfAddToCartShopify', 'cfUpdateCartShopify', 'cfChangeCartShopify', 'cfClearCartShopify'].forEach(function (eventName) {
          window.addEventListener(eventName, function (event) {
            if (element.addingToCart !== true) {
              app.elements.elementTypes.product_hero.initialize(element, payload);
            }
          });
        });
      }
    });
  },

  initialize: (element, payload) => {
    let objectToUse = element;

    const productRecommendations = element.product_recommendations || {};
    const trueConditionalRecommendation = Object.values(
      productRecommendations
    ).filter((productRecommendation) => {
      if (
        !$cf.isEmptyObject(productRecommendation.conditions) &&
        app.campaigns.checkConditions(
          productRecommendation.conditions,
          window.convertflow.person,
          { variant: payload.variant }
        ) == true
      ) {
        productRecommendation.status = true;
        return productRecommendation;
      }
    })[0];

    if (trueConditionalRecommendation) {
      objectToUse = trueConditionalRecommendation;

      if (typeof app.admin.render == "function") {
        app.admin.render(app.website);
      }
    }

    const productsSource = element.options["products-source"]

    if (productsSource == "ShopifyGraphql") {
      app.elements.elementTypes.product_hero.setupShopifyGraphqlProductFeed(payload, objectToUse);
    } else if (!productsSource || productsSource?.toLowerCase() == "convertflow") {
      app.elements.elementTypes.product_hero.setupConvertflowProductFeed(payload, objectToUse);
    }

    const productsReviewsSource = element.options["products-reviews-source"];

    setTimeout(function () {
      if (productsReviewsSource == "Yotpo" && window.convertflow.app.yotpo_storefront_token) {
        const client = new YotpoClient({ app_key: window.convertflow.app.yotpo_storefront_token })
        app.elements.products.setupProductReviews(payload, client, "Yotpo");

      } else if (productsReviewsSource == "Okendo" && window.convertflow.app.okendo_storefront_token) {
        const client = new OkendoClient({ app_key: window.convertflow.app.okendo_storefront_token })
        app.elements.products.setupProductReviews(payload, client, "Okendo");

      }
    }, 1000);
  },

  setupConvertflowProductFeed: (payload, object) => {
    const adapterService = new ProductsAdapterService(undefined, "Convertflow")
    let adaptedProduct = adapterService.adaptProduct(Object.values(object.products)[0]);

    const productsContainer = payload.embed.querySelector(`.cf-products-outer[data-element-id="${payload.element.id}"]`);
    const productDiv = productsContainer.querySelector(".cf-product-hero-inner");

    if (adaptedProduct) {
      productDiv.setAttribute("data-product-id", adaptedProduct.id);
      productDiv.setAttribute("data-handle", adaptedProduct.handle);

      app.elements.products.populateAdaptedProduct(
        payload,
        adaptedProduct
      );
    } else {
      app.elements.products.showEmptyMessage(true, payload);
    }
  },

  setupShopifyGraphqlProductFeed: (payload, object) => {
    const productsSource = object.options["shopify-products-source"] || "selected";
    const shopifyClient = new ShopifyGraphqlClient({
      store_name: window.convertflow.app.shopify_store_url?.replace('.myshopify.com', ''),
      token: window.convertflow.app.shopify_storefront_token,
    });
    const adapterService = new ProductsAdapterService(shopifyClient, "ShopifyGraphql")

    function populateProductByHandle(productHandle) {
      const productsContainer = payload.embed.querySelector(`.cf-products-outer[data-element-id="${payload.element.id}"]`);
      const productDiv = productsContainer.querySelector(".cf-product-hero-inner");
      productsContainer.style.display = "block";

      adapterService.getProduct(productHandle).then((product) => {
        productDiv.setAttribute("data-product-id", product.id);
        productDiv.setAttribute("data-handle", product.handle);

        app.elements.products.populateAdaptedProduct(
          { ...payload, objectToUse: object },
          product
        );
      }).catch((error) => {
        productsContainer.style.display = "none";
      }).finally(() => {
        app.elements.products.showEmptyMessage(
          $cf(productsContainer).find(".cf-products-item:visible").length == 0,
          payload
        );
      });
    }

    function loadFilteredProduct(parsedFilterQuery, productsOperator) {
      console.log('CF products query', parsedFilterQuery);

      let query = ''
      parsedFilterQuery.forEach((filter, i) => {
        query += `(title:${filter}) OR (product_type:${filter}) OR (tag:${filter})`
        if (i + 1 < parsedFilterQuery.length) {
          query += ` ${productsOperator} `
        }
      });

      const productFallbackHandle = object.options["shopify-products-current-fallback"];

      const productsContainer = payload.embed.querySelector(`.cf-products-outer[data-element-id="${payload.element.id}"]`);
      const productDiv = productsContainer.querySelector(".cf-product-hero-inner");

      adapterService
        .getProducts({ query: query, limit: 1, sort: object.options["shopify-products-sorting"] })
        .then((products) => {
          const product = products[0];

          // Check if query is present because if it's empty we want to show the fallback product
          if (query && product) {
            productsContainer.style.display = "block";
            productDiv.setAttribute("data-product-id", product.id);
            productDiv.setAttribute("data-handle", product.handle);

            app.elements.products.populateAdaptedProduct(
              { ...payload, objectToUse: object },
              product
            );
          } else if (productFallbackHandle) {
            populateProductByHandle(productFallbackHandle);
          } else {
            productsContainer.style.display = "none";
          }
        }).finally(() => {
          app.elements.products.showEmptyMessage(
            $cf(productsContainer).find(".cf-products-item:visible").length == 0,
            payload
          );
        });
    }

    window.addEventListener('cfSubmit', function(event) {
      window.removeEventListener('cfSubmit', this);

      let objectToUse = app.elements.products.getProductMatchedRecommendation(payload, object)
      app.elements.elementTypes.product_hero.setupShopifyGraphqlProductFeed(payload, objectToUse);
    });

    if (productsSource == "selected") {
      populateProductByHandle(object.options["shopify-products-selected"])
    }

    if (productsSource == "current") {
      let productHandle = object.options["shopify-products-current-fallback"];

      if (window.ShopifyAnalytics && ShopifyAnalytics.meta && ShopifyAnalytics.meta.page && ShopifyAnalytics.meta.page.pageType == "product") {
        productHandle = window.location.href.split("/").pop().split("?")[0].split("#")[0];
      }

      populateProductByHandle(productHandle)
    }

    if (productsSource == "filter") {
      const productsFilter = object.options["shopify-products-filter"];
      const productsOperator = object.options["products-filter-operator"] || "OR";

      const strippedValues = productsFilter?.split(",").map(item => item.trim()).filter(n => n) || [];
      const parsedFilterQuery = app.helpers.parseDynamicFieldValues(strippedValues, window.convertflow.person);

      loadFilteredProduct(parsedFilterQuery, productsOperator);
    }

    if (productsSource == "filter_quiz_answers") {
      const personFields = payload?.cta?.payload?.extra
      const excludedFields = object.options["products-filter-quiz-answers-excluded-fields"] || '';
      const fallbackProductHandle = object.options["shopify-products-current-fallback"];

      const answeredValuesToUse = personFields ? Object.keys(personFields)
        .filter(key => !excludedFields.includes(key))
        .reduce((obj, key) => { obj[key] = personFields[key]; return obj; }, {}) : {};
      const answeredValues = Object.values(answeredValuesToUse)

      const productsFilter = answeredValues.length > 0 ? answeredValues.join(', ')?.split(',')?.map(item => item.trim()) : [];
      const productsOperator = object.options["products-filter-quiz-answers-operator"] || "OR";

      if (productsFilter.length > 0) {
        loadFilteredProduct(productsFilter, productsOperator);
      } else if (fallbackProductHandle) {
        populateProductByHandle(fallbackProductHandle);
      }
    }
  },
}

app.elements.elementTypes.products = {
  handleLoad: (payload) => {
    const element = payload.element;

    if (payload.embed.jquery) {
      payload.embed = $cf(payload.embed)[0];
    }

    const stepDiv = document.querySelector(
      `.cf-step[data-step-id="${payload.step.id}"]`
    );

    app.helpers.onVisible(stepDiv, () => {
      app.elements.elementTypes.products.initialize(element, payload);

      if (["Shopify", "ShopifyGraphql"].includes(element.options["products-source"]) && (element.options["shopify-products-source"] || 'cart') == 'cart') {
        ['cfAddToCartShopify', 'cfUpdateCartShopify', 'cfChangeCartShopify', 'cfClearCartShopify'].forEach(function (eventName) {
          window.addEventListener(eventName, function (event) {
            if (element.addingToCart !== true) {
              app.elements.elementTypes.products.initialize(element, payload);
            }
          });
        });
      }
    });
  },

  initialize: (element, payload) => {
    // determine if any conditional product recommendations are true
    let objectToUse = element;

    const productRecommendations = element.product_recommendations || {};
    const trueConditionalRecommendation = Object.values(
      productRecommendations
    ).filter((productRecommendation) => {
      if (
        !$cf.isEmptyObject(productRecommendation.conditions) &&
        app.campaigns.checkConditions(
          productRecommendation.conditions,
          window.convertflow.person,
          { variant: payload.variant }
        ) == true
      ) {
        productRecommendation.status = true;
        return productRecommendation;
      }
    })[0];

    if (trueConditionalRecommendation) {
      objectToUse = trueConditionalRecommendation;

      if (typeof app.admin.render == "function") {
        app.admin.render(app.website);
      }
    }

    const productsSource = element.options["products-source"]
    payload.objectToUse = objectToUse;

    if (productsSource == "ShopifyGraphql") {
      app.elements.elementTypes.products.setupShopifyGraphqlProductFeed(payload, objectToUse);
    } else if (productsSource == "Shopify") {
      // TODO: REMOVE THIS METHOD AND IT'S INNER METHODS
      // This is not being used. Legacy file in use instead -> app/views/elements/library/element_types/_products_legacy.js
      app.elements.elementTypes.products.setupShopifyRestProductFeed(payload, objectToUse);
    } else if (!productsSource || productsSource?.toLowerCase() == "convertflow") {
      app.elements.elementTypes.products.setupConvertflowProductFeed(payload, objectToUse);
    }

    const productsReviewsSource = element.options["products-reviews-source"];

    setTimeout(function () {
      if (productsReviewsSource == "Yotpo" && window.convertflow.app.yotpo_storefront_token) {
        const client = new YotpoClient({ app_key: window.convertflow.app.yotpo_storefront_token })
        app.elements.products.setupProductReviews(payload, client, "Yotpo");

      } else if (productsReviewsSource == "Okendo" && window.convertflow.app.okendo_storefront_token) {
        const client = new OkendoClient({ app_key: window.convertflow.app.okendo_storefront_token })
        app.elements.products.setupProductReviews(payload, client, "Okendo");

      }
    }, 1000);
  },

  setupConvertflowProductFeed: (payload, object) => {
    const adapterService = new ProductsAdapterService(undefined, "Convertflow")

    const productsContainer = payload.embed.querySelector(
      `.cf-products-outer[data-element-id="${payload.element.id}"]`
    );
    productsContainer.style.visibility = "hidden";

    // build feed
    const productDivTemplate = productsContainer.firstChild.cloneNode(true);
    productsContainer.style.visibility = "initial";
    productsContainer.replaceChildren();

    productDivTemplate.style.display = 'none';
    productsContainer.prepend(productDivTemplate)
    productsContainer.firstChild.remove()

    let adaptedProducts = Object.values(object.products)
      .sort((a, b) => a.position - b.position)
      .map((product) => adapterService.adaptProduct(product))

    if (adaptedProducts.length > 0) {
      app.elements.products.updateProductsOuterDataAttributes(payload, adaptedProducts);

      adaptedProducts.forEach((product) => {
        const productDiv = productDivTemplate.cloneNode(true);
        productDiv.style.display = "block";
        productDiv.setAttribute("data-product-id", product.id);
        productsContainer.appendChild(productDiv);

        app.elements.products.populateAdaptedProduct(
          payload,
          product
        );
      });
    } else {
      app.elements.products.showEmptyMessage(true, payload);
    }
  },

  shopifyGraphqlLoadFilteredProducts: (payload) => {
    const parsedFilterQuery = payload.parsedFilterQuery;
    const productsOperator = payload.operator;
    const adapterService = payload.adapterService;
    const productsLimit = payload.limit;
    const productsSorting = payload.sort;

    console.log('CF products query', parsedFilterQuery);

    let query = ''
    parsedFilterQuery.forEach((filter, i) => {
      query += `(title:${filter}) OR (product_type:${filter}) OR (tag:${filter})`
      if (i + 1 < parsedFilterQuery.length) {
        query += ` ${productsOperator} `
      }
    });

    adapterService
      .getProducts({ query: query, limit: productsLimit, sort: productsSorting })
      .then((products) => {
        app.elements.elementTypes.products.shopifyBuildFeed(
          payload,
          products || [],
          true
        );
      });
  },

  setupShopifyGraphqlProductFeed: (payload, object) => {
    const element = payload.element;

    // generate Shopify product feed and bind handleClick to buttons
    const productsSource = object.options["shopify-products-source"] || "cart";
    let productsLimit;
    if (element.options["cart-show-all-products"] !== "true") {
      productsLimit = element.options["products-limit"] || "3";
    }
    const integration = Object.values(app.website.integrations).filter((integration) => integration.integration_type == "Shopify")[0];
    const productsContainer = payload.embed.querySelector(`.cf-products-outer[data-element-id="${payload.element.id}"]`);
    productsContainer.style.visibility = "hidden";

    const shopifyClient = new ShopifyGraphqlClient({
      store_name: window.convertflow.app.shopify_store_url?.replace('.myshopify.com', ''),
      token: window.convertflow.app.shopify_storefront_token,
    });
    const adapterService = new ProductsAdapterService(shopifyClient, "ShopifyGraphql")

    function loadCartItems(items) {
      let products = items;
      if (productsLimit) {
        products = items.slice(0, parseInt(productsLimit));
      }

      Promise.all(products.map((product) => adapterService.getProduct(product.handle, product.variant_id)))
        .then((shopifyProducts) => {
          app.elements.elementTypes.products.shopifyResetProductFeed(payload);
          app.elements.elementTypes.products.shopifyBuildFeed(
            payload,
            shopifyProducts,
            false
          );

          app.elements.products.updateProductsOuterDataAttributes(payload);

          shopifyProducts.forEach((product) => {
            app.elements.products.populateAdaptedProduct(
              { ...payload, object: object },
              product
            );
          })
        }).finally(() => {
          app.elements.products.showEmptyMessage(items.length == 0, payload);
        });
    }

    function fetchProductRecommendations(productIdForRecommendation) {
      adapterService
        .getProductRecommendations(productIdForRecommendation, { intent: object.options["shopify-products-related-intent"] })
        .then((products) => {
          const queryIds = products.map(product => product.id).map(id => `id:${id}`).join(' OR ')

          adapterService
            .getProducts({ query: queryIds, limit: productsLimit, sort: object.options["shopify-products-sorting"] })
            .then((products) => {
              app.elements.elementTypes.products.shopifyBuildFeed(
                payload,
                products || [],
                true
              );
            });
        });
    }

    window.addEventListener('cfSubmit', function(event) {
      window.removeEventListener("cfSubmit", this);

      const objectToUse = app.elements.products.getProductMatchedRecommendation(payload, element);

      app.elements.elementTypes.products.shopifyResetProductFeed(payload);
      app.elements.elementTypes.products.setupShopifyGraphqlProductFeed(payload, objectToUse);
    }, { once: true });

    window.addEventListener('cfAnswer', function(event) {
      if (productsSource == "filter") {
        const productsFilter = payload.objectToUse.options["shopify-products-filter"];
        const productsOperator = payload.objectToUse.options["products-filter-operator"] || "OR";
        const productsSorting = payload.objectToUse.options["shopify-products-sorting"];

        const strippedValues = productsFilter?.split(",").map(item => item.trim()) || [];
        const parsedFilterQuery = app.helpers.parseDynamicFieldValues(strippedValues, window.convertflow.person);

        app.elements.elementTypes.products.shopifyResetProductFeed(payload);

        app.elements.elementTypes.products.shopifyGraphqlLoadFilteredProducts({
          ...payload,
          parsedFilterQuery,
          operator: productsOperator,
          adapterService,
          limit: productsLimit,
          sort: productsSorting
        });
      }
    }, { once: true });

    // GraphQL Listener
    $cf(document).ajaxComplete(function (event, request, settings) {
      new ProductsIntegrationsService(element.options["products-source"]).headlessSessionCart().then((cartSession) => {
        if (!cartSession) {
          return;
        }

        const cartCallback = settings.url.includes(`?cf_action=cf_shopify_cart&cart_id=${cartSession.id}`)

        if (cartCallback && productsSource == "cart") {
          const parsedProducts = cartSession.lines.map((e) => ({
            ...e.product,
            id: e.product.id.replace("gid://shopify/Product/", ""),
            variant_id: e.id.replace("gid://shopify/ProductVariant/", ""),
          }));

          loadCartItems(parsedProducts)
          app.elements.products.showEmptyMessage(cartSession.lines?.length == 0, payload);
        }

        if (productsSource == "related" && object.options["shopify-products-related-type"] == "cart") {
          if (["inline", "page"].includes(payload.cta.cta_type) && cartSession && cartSession.lines?.length > 0) {
            // landing pages and embeds populate using cart status upon CF load
            fetchProductRecommendations(cartSession.lines[0].product.id);
          } else {
            // for popups, get product ID from first product in cart (if not present then fallback to selected product)
            adapterService
              .getProducts({ limit: productsLimit })
              .then((products) => {
                app.elements.elementTypes.products.shopifyBuildFeed(
                  payload,
                  products || [],
                  true
                );
              });
          }
        }
      });
    });

    if (productsSource == "cart") {
      if (integration && window.Shopify) {
        loadCartItems(integration["cart"]["items"])
      } else {
        const productsIntegrationService = new ProductsIntegrationsService(element.options["products-source"]);

        productsIntegrationService.headlessSessionCart().then((cartSession) => {
          if (!cartSession) {
            return;
          }

          const parsedProducts = cartSession?.lines?.map((e) => ({
            ...e.product,
            id: e.product.id.replace("gid://shopify/Product/", ""),
            variant_id: e.id.replace("gid://shopify/ProductVariant/", ""),
          })) || [];

          loadCartItems(parsedProducts)
        });
      }
    }

    if (productsSource == "related") {
      let productIdForRecommendation = object.options["shopify-products-related-default"];
      const productsRelatedType = object.options["shopify-products-related-type"] || 'current';

      if (
        productsRelatedType == "current" &&
        window.ShopifyAnalytics &&
        ShopifyAnalytics.meta &&
        ShopifyAnalytics.meta.product &&
        ShopifyAnalytics.meta.product.id
      ) {
        productIdForRecommendation = ShopifyAnalytics.meta.product.id;
      }

      object.productIdForRecommendation = productIdForRecommendation;

      // check if using first product in cart to power recommendations
      if (object.options["shopify-products-related-type"] == "cart" && integration) {
        // landing pages and embeds populate using cart status upon CF load
        if (
          ["inline", "page"].includes(payload.cta.cta_type) &&
          integration["cart"] &&
          integration["cart"]["items"] &&
          integration["cart"]["items"].length > 0 &&
          integration["cart"]["items"][0].product_id
        ) {
          // landing pages and embeds populate using cart status upon CF load
          productIdForRecommendation = integration["cart"]["items"][0].product_id;
          fetchProductRecommendations("gid://shopify/Product/" + productIdForRecommendation);
        } else {
          // for popups, get product ID from first product in cart (if not present then fallback to selected product)
          adapterService
            .getProducts({ limit: productsLimit, sort: object.options["shopify-products-sorting"] })
            .then((products) => {
              app.elements.elementTypes.products.shopifyBuildFeed(
                payload,
                products || [],
                true
              );
            });
        }
      }

      // order confirmation page recommendations for 1.0 themes
      if (
        object.options["shopify-products-related-type"] == "order" &&
        typeof window.Shopify == "object" &&
        typeof window.Shopify.checkout == "object" &&
        typeof window.Shopify.checkout.line_items == "object"
      ) {
        const firstProductInOrder = window.Shopify.checkout.line_items[0];

        if (firstProductInOrder && firstProductInOrder.product_id) {
          productIdForRecommendation = firstProductInOrder.product_id;
        }
        fetchProductRecommendations(productIdForRecommendation);
      }

      // last order recommendation
      if (
        object.options["shopify-products-related-type"] == "order" &&
          window.cf_shopify && 
          cf_shopify.orders &&
          cf_shopify.orders.length > 0
      ) {
        const firstProductInOrder = window.cf_shopify.orders[0];

        if (firstProductInOrder && firstProductInOrder.item_product_ids) {
          productIdForRecommendation = firstProductInOrder.item_product_ids[0];
        }

        fetchProductRecommendations(productIdForRecommendation);
      }

      if (['cart', 'order'].includes(productsRelatedType) == false) {
        // if not use the selected product for recommendation
        fetchProductRecommendations(productIdForRecommendation);
      }
    }

    if (productsSource == "filter") {
      const productsFilter = payload.objectToUse.options["shopify-products-filter"];
      const productsOperator = payload.objectToUse.options["products-filter-operator"] || "OR";
      const productsSorting = payload.objectToUse.options["shopify-products-sorting"];

      const strippedValues = productsFilter?.split(",").map(item => item.trim()) || [];
      const parsedFilterQuery = app.helpers.parseDynamicFieldValues(strippedValues, window.convertflow.person);

      app.elements.elementTypes.products.shopifyGraphqlLoadFilteredProducts({
        ...payload,
        parsedFilterQuery,
        operator: productsOperator,
        adapterService,
        limit: productsLimit,
        sort: productsSorting
      });
    }

    if (productsSource == "filter_quiz_answers") {
      const personFields = payload?.cta?.payload?.extra
      const excludedFields = payload.objectToUse.options["products-filter-quiz-answers-excluded-fields"] || '';
      const fallbackProductHandle = object.options["shopify-products-current-fallback"];

      const answeredValuesToUse = personFields ? Object.keys(personFields)
        .filter(key => !excludedFields.includes(key))
        .reduce((obj, key) => { obj[key] = personFields[key]; return obj; }, {}) : {};
      const answeredValues = Object.values(answeredValuesToUse)

      const productsFilter = answeredValues.length > 0 ? answeredValues.join(', ')?.split(',')?.map(item => item.trim()) : [];
      const productsOperator = payload.objectToUse.options["products-filter-quiz-answers-operator"] || "OR";
      const productsSorting = payload.objectToUse.options["shopify-products-sorting"];

      if (productsFilter.length > 0) {
        app.elements.elementTypes.products.shopifyGraphqlLoadFilteredProducts({
          ...payload,
          parsedFilterQuery: productsFilter,
          operator: productsOperator,
          adapterService,
          limit: productsLimit,
          sort: productsSorting
        });
      } else if (fallbackProductHandle) {
        app.elements.elementTypes.products.shopifyGraphqlLoadFilteredProducts({
          ...payload,
          parsedFilterQuery: [fallbackProductHandle],
          operator:  "OR",
          adapterService,
          limit: productsLimit,
          sort: productsSorting
        });
      } else {
        app.elements.products.showEmptyMessage(
          $cf(productsContainer).find(".cf-products-item:visible").length == 0,
          payload
        );
      }
    }

    if (productsSource == "selected") {
      let shopifyProductHandles = object.options["shopify-products-selected"]
        .split(",")
        .filter(item => item)
        .sort((a, b) => a.localeCompare(b));

      const promises = shopifyProductHandles.map(handle => adapterService.getProduct(handle));

      Promise.allSettled(promises)
        .then((results) => {
          const queryIds = results.filter(r => r.status == "fulfilled")
            .map(result => result.value.id)
            .map(id => `id:${id}`).join(' OR ');

          adapterService
            .getProducts({ query: queryIds, sort: object.options["shopify-products-sorting"] })
            .then((products) => {
              app.elements.elementTypes.products.shopifyResetProductFeed(payload);
              app.elements.elementTypes.products.shopifyBuildFeed(
                payload,
                products || [],
                true
              );
              app.elements.products.updateProductsOuterDataAttributes(payload)

              products.forEach((product) => {
                app.elements.products.populateAdaptedProduct(
                  { ...payload, object: object },
                  product
                );
              });
            });
        });
    }

    if (productsSource == "collection") {
      const collectionIds = object.options["shopify-products-collection"]?.split(",").filter(item => item) || [];
      const showUnavailable = object.options["shopify-products-unavailable"] == "true";

      const promises = collectionIds.map(collectionId => {
        return adapterService.getCollectionProducts(collectionId, {
          limit: productsLimit, sort: object.options["shopify-products-sorting"]
        });
      });

      Promise.all(promises)
        .then(results => {
          let shopifyProducts = results.flat();

          if (shopifyProducts.length > 0) {
            shopifyProducts = shopifyProducts.slice(0, productsLimit)
          }

          app.elements.elementTypes.products.shopifyBuildFeed(
            payload,
            shopifyProducts || [],
            false
          );

          app.elements.products.updateProductsOuterDataAttributes(payload, shopifyProducts);

          shopifyProducts.forEach((product) => {
            const productAvailable = product.available !== false || showUnavailable == true;

            if (productAvailable) {
              app.elements.products.populateAdaptedProduct(
                { ...payload, object: object },
                product
              );
            }
          });

          app.elements.products.showEmptyMessage(
            shopifyProducts.filter(product => product.available !== false).length == 0,
            payload
          );
        });
    }

    if (productsSource == "current") {
      let shopifyProductHandles = [object.options["shopify-products-current-fallback"]];

      if (
        window.ShopifyAnalytics &&
        ShopifyAnalytics.meta &&
        ShopifyAnalytics.meta.page &&
        ShopifyAnalytics.meta.page.pageType == "product"
      ) {
        shopifyProductHandles = [window.location.href.split("/").pop().split("?")[0].split("#")[0]];
      }

      Promise.all(shopifyProductHandles.map((handle) => adapterService.getProduct(handle)))
        .then((products) => {
          app.elements.elementTypes.products.shopifyBuildFeed(
            payload,
            products,
            false
          );

          app.elements.products.updateProductsOuterDataAttributes(payload);

          products.forEach((product) => {
            app.elements.products.populateAdaptedProduct(
              { ...payload, object: object },
              product
            );
          });
        })
        .finally(() => {
          app.elements.products.showEmptyMessage(
            $cf(productsContainer).find(".cf-products-item:visible").length == 0,
            payload
          );
        })
    }
  },

  setupShopifyRestProductFeed: (payload, object) => {
    const element = payload.element;

    if (window.Shopify && app.live == true) {
      const adapterService = new ProductsAdapterService(undefined, "Shopify")

      // generate Shopify product feed and bind handleClick to buttons
      const productsSource =
        object.options["shopify-products-source"] || "cart";
      const productsLimit = element.options["products-limit"] || "3";

      const integration = Object.values(app.website.integrations).filter(
        (integration) => integration.integration_type == "Shopify"
      )[0];

      const productsContainer = payload.embed.querySelector(
        `.cf-products-outer[data-element-id="${payload.element.id}"]`
      );

      productsContainer.style.visibility = "hidden";

      function loadCartItems(items) {
        const shopifyProductHandles = items.map(
          (shopifyProduct) => shopifyProduct.handle
        );

        const productsLimitInt = parseInt(productsLimit);

        const shopifyProducts = shopifyProductHandles
          .map((handle) => ({
            handle: handle,
          }))
          .slice(0, productsLimitInt);

        app.elements.elementTypes.products.shopifyBuildFeed(
          payload,
          shopifyProducts,
          false
        );

        app.elements.products.updateProductsOuterDataAttributes(payload, shopifyProductHandles);

        shopifyProductHandles.forEach((handle) => {
          $cf.getJSON(
            `${
              window.Shopify && window.Shopify.routes
                ? window.Shopify.routes.root
                : "/"
            }products/${handle}.js`,
            function (shopifyProduct) {
              app.elements.products.populateAdaptedProduct(
                payload,
                adapterService.adaptProduct(shopifyProduct)
              );
            }
          );
        });
      }

      if (productsSource == "cart" && integration) {
        loadCartItems(integration["cart"]["items"]);
      }

      if (productsSource == "related") {
        let productIdForRecommendation =
          element.options["shopify-products-related-default"];
        const productsRelatedType = object.options["shopify-products-related-type"] || 'current';

        if (
          productsRelatedType == "current" &&
          window.ShopifyAnalytics &&
          ShopifyAnalytics.meta &&
          ShopifyAnalytics.meta.product &&
          ShopifyAnalytics.meta.product.id
        ) {
          productIdForRecommendation = ShopifyAnalytics.meta.product.id;
        }

        object.productIdForRecommendation = productIdForRecommendation;

        function fetchProductRecommendations(productIdForRecommendation) {
          fetch(
            `${
              window.Shopify && window.Shopify.routes
                ? window.Shopify.routes.root
                : "/"
            }recommendations/products.json?product_id=${productIdForRecommendation}&limit=${productsLimit}${
              object.options["shopify-products-related-intent"]
                ? `&intent=${object.options["shopify-products-related-intent"]}`
                : ""
            }`
          )
            .then((response) => response.json())
            .then(({ products }) => {
              app.elements.elementTypes.products.shopifyBuildFeed(
                payload,
                products || [],
                true
              );
            });
        }

        // check if using first product in cart to power recommendations
        if (
          object.options["shopify-products-related-type"] == "cart" &&
          integration
        ) {
          // landing pages and embeds populate using cart status upon CF load
          if (
            ["inline", "page"].includes(payload.cta.cta_type) &&
            integration["cart"] &&
            integration["cart"]["items"] &&
            integration["cart"]["items"].length > 0 &&
            integration["cart"]["items"][0].product_id
          ) {
            // landing pages and embeds populate using cart status upon CF load
            productIdForRecommendation =
              integration["cart"]["items"][0].product_id;
            fetchProductRecommendations(productIdForRecommendation);
          } else {
            // for popups, get product ID from first product in cart (if not present then fallback to selected product)
            setTimeout(function () {
              fetch(
                `${
                  window.Shopify && window.Shopify.routes
                    ? window.Shopify.routes.root
                    : "/"
                }cart.js`
              )
                .then((response) => response.json())
                .then(({ items }) => {
                  if (items && items[0] && items[0].product_id) {
                    productIdForRecommendation = items[0].product_id;
                  }
                  fetchProductRecommendations(productIdForRecommendation);
                });
            }, 500);
          }
        }

        if (
          object.options["shopify-products-related-type"] == "order" &&
          typeof window.Shopify == "object" &&
          typeof window.Shopify.checkout == "object" &&
          typeof window.Shopify.checkout.line_items == "object"
        ) {
          const firstProductInOrder = window.Shopify.checkout.line_items[0];

          if (firstProductInOrder && firstProductInOrder.product_id) {
            productIdForRecommendation = firstProductInOrder.product_id;
          }
          fetchProductRecommendations(productIdForRecommendation);
        }

        if (
          ['cart', 'order'].includes(productsRelatedType) == false
        ) {
          // if not use the selected product for recommendation
          fetchProductRecommendations(productIdForRecommendation);
        }
      }

      if (productsSource == "filter") {
        const productsFilter = object.options["shopify-products-filter"];

        fetch(
          `${
            window.Shopify && window.Shopify.routes
              ? window.Shopify.routes.root
              : "/"
          }search/suggest.json?q=${productsFilter}&resources[type]=product&limit=${productsLimit}&resources[options][unavailable_products]=hide&resources[options][fields]=title,product_type,variants.title,tag`
        )
          .then((response) => response.json())
          .then((suggestions) => {
            const shopifyProductHandles = suggestions.resources.results.products.map(
              (shopifyProduct) => shopifyProduct.handle
            );

            let enrichedProducts = []
            let promises = [];

            shopifyProductHandles.forEach((handle) => {
              promises.push(
                $cf.getJSON(
                  `${
                    window.Shopify && window.Shopify.routes
                      ? window.Shopify.routes.root
                      : "/"
                  }products/${handle}.js`,
                  function (shopifyProduct) {
                    enrichedProducts.push(shopifyProduct)
                  }
                )
              )
            });

            Promise.all(promises).then(() =>
              {
                app.elements.elementTypes.products_legacy.shopifyBuildFeed(
                  payload,
                  enrichedProducts,
                  false
                )

                app.elements.products.updateProductsOuterDataAttributes(payload, enrichedProducts);

                enrichedProducts.forEach((shopifyProduct) => {
                  app.elements.elementTypes.products_legacy.populateAdaptedProduct(
                    payload,
                    shopifyProduct
                  );
                });
              }
            );
          });
      }

      if (productsSource == "selected") {
        const shopifyProductHandles = object.options[
          "shopify-products-selected"
        ]
          .split(",")
          .filter(item => item)
          .sort((a, b) => a.localeCompare(b));

        const shopifyProducts = shopifyProductHandles.map((handle) => ({
          handle: handle,
        }));

        app.elements.elementTypes.products.shopifyBuildFeed(
          payload,
          shopifyProducts,
          false
        );

        app.elements.products.updateProductsOuterDataAttributes(payload, shopifyProductHandles);

        shopifyProductHandles.forEach((handle) => {
          $cf.getJSON(
            `${
              window.Shopify && window.Shopify.routes
                ? window.Shopify.routes.root
                : "/"
            }products/${handle}.js`,
            function (shopifyProduct) {
              app.elements.products.populateAdaptedProduct(
                { ...payload, object: object },
                adapterService.adaptProduct(shopifyProduct)
              );
            }
          );
        });
      }

      if (productsSource == "collection") {
        const collectionIds = object.options[
          "shopify-products-collection"
        ].split(",").filter(item => item);
        const showUnavailable =
          object.options["shopify-products-unavailable"] == "true";

        let fetchUrls = [];
        collectionIds.forEach((collectionId) => {
          fetchUrls.push(
            `${
              window.Shopify && window.Shopify.routes
                ? window.Shopify.routes.root
                : "/"
            }collections/${collectionId}/products.json?limit=${productsLimit}`
          );
        });

        Promise.all(fetchUrls.map((url) => fetch(url)))
          .then(function (responses) {
            return Promise.all(
              responses.map(function (response) {
                return response.json();
              })
            );
          })
          .then(function (data) {
            function flattenArray(arr) {
              const flattened = arr.reduce((acc, val) => acc.concat(val), []);
              const uniqueItems = new Map();
              return flattened.filter((item) => {
                if (!uniqueItems.has(item.handle)) {
                  uniqueItems.set(item.handle, true);
                  return true;
                }
                return false;
              });
            }

            const products = flattenArray(data.map((d) => d.products)).slice(
              0,
              parseInt(productsLimit)
            );

            app.elements.elementTypes.products.shopifyBuildFeed(
              payload,
              products || [],
              false
            );

            app.elements.products.updateProductsOuterDataAttributes(payload, products);

            products.forEach((collectionItem, i) => {
              $cf.getJSON(
                `${
                  window.Shopify && window.Shopify.routes
                    ? window.Shopify.routes.root
                    : "/"
                }products/${collectionItem.handle}.js`,
                function (shopifyProduct) {
                  const productAvailable =
                    shopifyProduct.available !== false ||
                    showUnavailable == true;

                  if (productAvailable) {
                    app.elements.products.populateAdaptedProduct(
                      payload,
                      adapterService.adaptProduct(shopifyProduct)
                    );
                  } else if (i + 1 == products.length) {
                    setTimeout(function () {
                      // if no products are available, show empty message
                      const productsContainer = payload.embed.querySelector(
                        `.cf-products-outer[data-element-id="${payload.element.id}"]`
                      );
                      app.elements.products.showEmptyMessage(
                        $cf(productsContainer).find(".cf-products-item:visible").length == 0,
                        payload
                      );
                    }, 3000);
                  }
                }
              );
            });
          })
          .catch(function (error) {
            // if there's an error, log it
            console.log(error);
          });
      }

      if (productsSource == "current") {
        let shopifyProductHandles = [
          object.options["shopify-products-current-fallback"],
        ];

        if (
          window.ShopifyAnalytics &&
          ShopifyAnalytics.meta &&
          ShopifyAnalytics.meta.page &&
          ShopifyAnalytics.meta.page.pageType == "product"
        ) {
          shopifyProductHandles = [
            window.location.href.split("/").pop().split("?")[0].split("#")[0],
          ];
        }

        const shopifyProducts = shopifyProductHandles.map((handle) => ({
          handle: handle,
        }));

        app.elements.elementTypes.products.shopifyBuildFeed(
          payload,
          shopifyProducts,
          false
        );

        app.elements.products.updateProductsOuterDataAttributes(payload, shopifyProductHandles);

        shopifyProductHandles.forEach((handle) => {
          $cf.getJSON(
            `${
              window.Shopify && window.Shopify.routes
                ? window.Shopify.routes.root
                : "/"
            }products/${handle}.js`,
            function (shopifyProduct) {
              app.elements.products.populateAdaptedProduct(
                payload,
                adapterService.adaptProduct(shopifyProduct)
              );
            }
          );
        });
      }
    } else if (app.live == true) {
      app.elements.products.showEmptyMessage(true, payload);
    } else {
      const selectedProducts = element.options["shopify-products-selected"]?.split(",")?.filter(item => item);
      const productsLimit = selectedProducts ? selectedProducts.length : element.options["products-limit"] || "3"
      let counter = 0;

      if (selectedProducts?.length > 0) {
        document.querySelectorAll(`.cf-products-outer[data-element-id="${element.id}"] .cf-products-item`)
          .forEach((productDiv) => {
            if (counter < parseInt(productsLimit)) {
              productDiv.style.display = "block";
            }

            counter++;
          });
      } else {
        app.elements.products.showEmptyMessage(true, payload);
      }
    }
  },

  shopifyResetProductFeed: (payload) => {
    const productsContainer = payload
      .embed
      .querySelector(`.cf-products-outer[data-element-id="${payload.element.id}"]`);

    const containerProducts = productsContainer.querySelectorAll('.cf-products-item');
    containerProducts.forEach((product) => {
      if (product.style.display == 'block') {
        product.remove();
      }
    });
  },

  shopifyBuildFeed: (payload, shopifyProducts, populateProducts) => {
    var mappedById = new Map(shopifyProducts.map(o => [o.id,o]));
    var uniqueProductsById = [...mappedById.values()];

    const productsContainer = payload.embed.querySelector(
      `.cf-products-outer[data-element-id="${payload.element.id}"]`
    );

    const productDivTemplate = productsContainer.firstChild.cloneNode(true);

    productsContainer.style.visibility = "initial";
    productDivTemplate.style.display = 'none';

    app.elements.products.updateProductsOuterDataAttributes(payload, uniqueProductsById);

    if (uniqueProductsById.length > 0) {
      uniqueProductsById.forEach((shopifyProduct) => {
        const parsedID =
          typeof shopifyProduct.id == "string"
            ? shopifyProduct.id.replace("gid://shopify/Product/", "")
            : shopifyProduct.id;

        const productSelector = shopifyProduct?.is_variant == true ? 'data-product-variant-id' : 'data-product-id';
        const productAlreadyPopulated = productsContainer
          ?.querySelector(`.cf-products-item[${productSelector}="${parsedID}"]`)
          ?.getAttribute("data-product-populated") == "true";

        if (productAlreadyPopulated) {
          return;
        }

        const productDiv = productDivTemplate.cloneNode(true);
        productDiv.setAttribute("data-handle", shopifyProduct.handle);

        if (shopifyProduct?.is_variant == true) {
          productDiv.setAttribute("data-product-variant-id", shopifyProduct.id);
          productDiv.setAttribute("data-product-id", shopifyProduct?.product_id);
        } else {
          productDiv.setAttribute("data-product-id", shopifyProduct.id);
        }

        productsContainer.appendChild(productDiv);

        if (populateProducts !== false && shopifyProduct.title) {
          app.elements.products.populateAdaptedProduct(payload, shopifyProduct)
        }
      });

      if (payload.element.options["products-button-cart-all"] == "true") {
        app.elements.elementTypes.products.shopifyAddAllToCart(
          payload,
          uniqueProductsById
        );
      }
    }

    app.elements.products.showEmptyMessage($cf(productsContainer).find(".cf-products-item:visible").length == 0, payload);
  },

  shopifyAddAllToCart: (payload, shopifyProducts) => {
    const element = payload.element;
    const elementDiv = payload.embed.querySelector(
      `.cf-element[data-element-id="${element.id}"]`
    );
    const addAllButton = elementDiv.querySelector(
      `.cf-products-all-button-outer .cf-button`
    );

    if (!addAllButton) return false;

    addAllButton.onclick = async (event) => {
      let productVariantIds = [];

      const productsIntegrationService = new ProductsIntegrationsService(element.options["products-source"]);

      elementDiv.querySelectorAll(".cf-products-item").forEach((productDiv) => {
        if (productDiv.style.display == "none") return;

        const handle = productDiv.getAttribute("data-handle");
        const enrichedProduct = window.convertflow.app.adapted_products.find(prod => prod.handle == handle)

        if (enrichedProduct) {
          let selectedProductSubscriptionDiv;
          if (element.options["products-subscription-choices-type"] == "radios") {
            selectedProductSubscriptionDiv = productDiv.querySelector(
              ".cf-products-subscription-radio-wrapper input[type='radio']:checked"
            );
          } else {
            selectedProductSubscriptionDiv = productDiv.querySelector(
              ".cf-products-subscription-dropdown-wrapper select"
            );
          }
          let selectedSellingPlanID = selectedProductSubscriptionDiv?.value

          const selectedProductQuantityDiv = productDiv.querySelector(".cf-increment-quantity-picker .cf-products-quantity");
          const selectedProductQuantity = selectedProductQuantityDiv ? selectedProductQuantityDiv.innerHTML : 1;
          let selectedVariant = app.elements.products.getSelectedVariantForProduct(payload, enrichedProduct);

          if (enrichedProduct.requires_selling_plan && !selectedSellingPlanID) {
            const defaultSubscription = selectedVariant.subscriptions[0]?.sellingPlans[0]?.id

            if (defaultSubscription) {
              selectedSellingPlanID = defaultSubscription
            } else {
              console.log('Shopify Product configured to require a subscription but product has no subscription plans.')
            }
          }

          productVariantIds.push({
            merchandiseId: selectedVariant.id,
            quantity: selectedProductQuantity,
            sellingPlanId: selectedSellingPlanID
          });
        }
      })

      productsIntegrationService.headlessSessionCart().then((cartSession) => {
        productsIntegrationService.adapter().addToCart(
          cartSession?.id, productVariantIds
        ).then(async (cart) => {
          const discountCode = element.options["products-cart-redirect-discount"];

          if (discountCode) {
            productsIntegrationService.adapter().applyDiscountCode(cart?.id, discountCode)
          }

          const shopifyClient = new ShopifyGraphqlClient({
            store_name: window.convertflow.app.shopify_store_url?.replace('.myshopify.com', ''),
            token: window.convertflow.app.shopify_storefront_token,
          });
          const adapterService = new ProductsAdapterService(shopifyClient, "ShopifyGraphql")
          adapterService.updateCartAttributes(cartSession?.id, [
            {
              key: "_convertflow",
              value: app.ctas.eventSourceSlug(
                payload.cta,
                payload.variant,
                payload.step,
                element
              ),
            },
          ]);

          shopifyProducts.forEach((shopifyProduct) => {
            const enrichedProduct = window.convertflow.app.adapted_products.find(prod => prod.handle == shopifyProduct.handle)
            const selectedProductVariant = app.elements.products.getSelectedVariantForProduct(payload, enrichedProduct);

            let productPayload = {
              product_id: enrichedProduct.id,
              product_name: enrichedProduct.title,
              product_variant: selectedProductVariant.id.replace("gid://shopify/ProductVariant/", ""),
              product_price: enrichedProduct.price,
              product_source: "Shopify",
            };

            if (selectedProductVariant.id &&
              selectedProductVariant &&
              selectedProductVariant.title &&
              selectedProductVariant.title !== "Default Title") {
                productPayload.product_name = `${productPayload.product_name} - ${selectedProductVariant.title}`;
            }

            app.ctas.track(
              {
                event_type: "Add To Cart",
                variant_id: payload.variant.id,
                step_id: payload.step.id,
                element_id: payload.element.id,
                data: productPayload,
              },
              payload.cta,
              payload.element
            );

            app.visitors.fireEvent("cfAddToCart", {
              cta: payload.cta,
              variant: payload.variant,
              step: payload.step,
              element: payload.element,
              product: productPayload,
            });
          })

          let redirectURL;

          if (element.options["products-cart-redirect"] == "true" ||
            element.options["products-checkout-redirect"] == "true") {
            redirectURL = await app.elements.products.getRedirectUrlForCartClick(payload, element);
          }

          app.ctas.conversionLogic({
            ...payload,
            redirect_url: redirectURL,
            button: addAllButton,
          }, app.elements.products.shouldTrackConversion(element, "cf-added-to-cart"));
        });
      });
    };
  },
};

app.elements.elementTypes.products_legacy = {
  handleLoad: (payload) => {
    const element = payload.element;

    if (payload.embed.jquery) {
      payload.embed = $cf(payload.embed)[0];
    }

    const stepDiv = document.querySelector(
      `.cf-step[data-step-id="${payload.step.id}"]`
    );

    app.helpers.onVisible(stepDiv, () => {
      app.elements.elementTypes.products_legacy.initialize(element, payload);

      if (element.options["products-source"] == "Shopify" && (element.options["shopify-products-source"] || 'cart') == 'cart') {
        ['cfAddToCartShopify', 'cfUpdateCartShopify', 'cfChangeCartShopify', 'cfClearCartShopify'].forEach(function (eventName) {
          window.addEventListener(eventName, function (event) {
            if (element.addingToCart !== true) {
              app.elements.elementTypes.products_legacy.initialize(element, payload);
            }
          });
        });
      }
    });
  },

  initialize: (element, payload) => {
    // determine if any conditional product recommendations are true
    let objectToUse = element;

    const productRecommendations = element.product_recommendations || {};
    const trueConditionalRecommendation = Object.values(
      productRecommendations
    ).filter((productRecommendation) => {
      if (
        !$cf.isEmptyObject(productRecommendation.conditions) &&
        app.campaigns.checkConditions(
          productRecommendation.conditions,
          window.convertflow.person,
          { variant: payload.variant }
        ) == true
      ) {
        productRecommendation.status = true;
        return productRecommendation;
      }
    })[0];

    if (trueConditionalRecommendation) {
      objectToUse = trueConditionalRecommendation;

      if (typeof app.admin.render == "function") {
        app.admin.render(app.website);
      }
    }

    app.elements.elementTypes.products_legacy.setupFeed(objectToUse, payload);
  },

  setupFeed: (object, payload) => {
    const element = payload.element;

    // loop through ConvertFlow products and bind handleClick to buttons
    if (element.options["products-source"] !== "Shopify") {
      Object.values(object.products).forEach((product) => {
        const productDiv = payload.embed.querySelector(
          `.cf-products-item[data-product-id="${product.id}"]`
        );
        const productImage = productDiv.querySelector(
          ".cf-products-item-image img"
        );
        const productTitle = productDiv.querySelector(
          ".cf-products-item-title p"
        );
        const productPrice = productDiv.querySelector(
          ".cf-products-item-price-base"
        );
        const productPriceContainer = productDiv.querySelector(
          ".cf-products-item-price p"
        );
        const productDiscount = productDiv.querySelector(
          ".cf-products-item-price-discount"
        );
        const productDescription = productDiv.querySelector(
          ".cf-products-item-description"
        );
        const productVariantsSelectTag = productDiv.querySelector("select");
        const productButton = productDiv.querySelector(
          ".cf-products-item-button"
        );

        // swap products info with variant info
        if (productVariantsSelectTag) {
          productVariantsSelectTag.onchange = (event) => {
            const value = productVariantsSelectTag.value;
            const selectedProductVariant = product.product_variants[value];

            const productDiscount = productDiv.querySelector(
              ".cf-products-item-price-discount"
            );

            if (selectedProductVariant && selectedProductVariant.image) {
              productImage.src = selectedProductVariant.image;
            } else if (product.image) {
              productImage.src = product.image;
            }

            if (selectedProductVariant && selectedProductVariant.title) {
              productTitle.innerText = selectedProductVariant.title;
            } else if (product.title) {
              productTitle.innerText = product.title;
            }

            let priceFormatted;

            if (selectedProductVariant && selectedProductVariant.price) {
              priceFormatted = selectedProductVariant.price;
            } else if (product.price) {
              priceFormatted = product.price;
            } else {
              priceFormatted = 0;
            }
            productPriceContainer.innerHTML = `${app.website.currency_character}<span class="cf-products-item-price-base">${priceFormatted}</span>`;

            if (
              selectedProductVariant &&
              selectedProductVariant.discounted_price !== null
            ) {
              productPriceContainer.innerHTML = `<strike><span class="cf-products-item-price-base">${app.website.currency_character}${priceFormatted}</span></strike> ${app.website.currency_character}<span class="cf-products-item-price-discount">${selectedProductVariant.discounted_price}</span>`;
            } else if (product.discounted_price !== null) {
              productPriceContainer.innerHTML = `<strike><span class="cf-products-item-price-base">${app.website.currency_character}${priceFormatted}</span></strike> ${app.website.currency_character}<span class="cf-products-item-price-discount">${product.discounted_price}</span>`;
            } else if (
              element.options["products-discount-type"] == "amount" ||
              element.options["products-discount-type"] == "percentage"
            ) {
              let priceDiscounted = priceFormatted;

              if (element.options["products-discount-type"] == "amount") {
                const discountAmount =
                  element.options["products-discount-amount"] || 10;

                priceDiscounted = priceFormatted - parseInt(discountAmount);
              }

              if (element.options["products-discount-type"] == "percentage") {
                const discountPercentage =
                  element.options["products-discount-percentage"] || 10;

                priceDiscounted =
                  priceFormatted -
                  priceFormatted * (parseInt(discountPercentage) * 0.01);
              }
              if (priceDiscounted < 0) {
                priceDiscounted = 0;
              }
              productPriceContainer.innerHTML = `<strike><span class="cf-products-item-price-base">${app.website.currency_character}${priceFormatted}</span></strike> ${app.website.currency_character}<span class="cf-products-item-price-discount">${priceDiscounted}</span>`;
            }

            if (productDescription) {
              if (selectedProductVariant && selectedProductVariant.description) {
                productDescription.innerHTML = $cf(`<div>${selectedProductVariant.description}</div>`).text();
              } else if (product.description) {
                productDescription.innerHTML = $cf(`<div>${product.description}</div>`).text();
              }
            }
          };
        }

        const onClick = (event) => {
          app.elements.elementTypes.products_legacy.handleClick(
            { ...payload, product: product, button: productButton },
            productDiv
          );
        };

        // bind click handle function to button (if enabled), or product info div
        if (
          productButton &&
          element.options["products-button"] !== "false" ||
          object.options["confirmation-type"] == "cart"
        ) {
          productButton.onclick = onClick;
        } else {
          const clickableDiv = productDiv.querySelector(
            ".cf-products-item-inner"
          );
          clickableDiv.style.cursor = "pointer";
          clickableDiv.onclick = onClick;
        }

        productDiv.style.display = "block";
        productDiv.setAttribute("data-product-id", product.id);
      });
    } else if (
      element.options["products-source"] == "Shopify" &&
      app.live == true &&
      window.Shopify
    ) {
      // generate Shopify product feed and bind handleClick to buttons
      const productsSource =
        object.options["shopify-products-source"] || "cart";

      let productsLimit;
      if (element.options["cart-show-all-products"] !== "true") {
        productsLimit = element.options["products-limit"] || "3";
      }

      const integration = Object.values(app.website.integrations).filter(
        (integration) => integration.integration_type == "Shopify"
      )[0];

      const productsContainer = payload.embed.querySelector(
        `.cf-products-outer[data-element-id="${payload.element.id}"]`
      );

      productsContainer.style.visibility = "hidden";

      function loadCartItems(items) {
        const shopifyProductHandles = items.map(
          (shopifyProduct) => shopifyProduct.handle
        );

        let shopifyProducts = shopifyProductHandles
          .map((handle) => ({
            handle: handle,
          }))
          .filter((product, index, self) =>
            index === self.findIndex((p) => p.handle === product.handle)
          );

        if (productsLimit) {
          shopifyProducts = shopifyProducts.slice(0, parseInt(productsLimit));
        }

        app.elements.elementTypes.products_legacy.shopifyBuildFeed(
          payload,
          shopifyProducts,
          false
        );

        app.elements.products.updateProductsOuterDataAttributes(payload, shopifyProductHandles);

        shopifyProductHandles.forEach((handle) => {
          $cf.getJSON(
            `${
              window.Shopify && window.Shopify.routes
                ? window.Shopify.routes.root
                : "/"
            }products/${handle}.js`,
            function (shopifyProduct) {
              app.elements.elementTypes.products_legacy.shopifyPopulateProduct(
                payload,
                shopifyProduct
              );
            }
          );
        });
      }

      if (productsSource == "cart" && integration) {
        loadCartItems(integration["cart"]["items"]);
      }

      if (productsSource == "related") {
        let productIdForRecommendation = element.options["shopify-products-related-default"];
        const productsRelatedType = object.options["shopify-products-related-type"] || 'current';

        if (
          productsRelatedType == "current" &&
          window.ShopifyAnalytics &&
          ShopifyAnalytics.meta &&
          ShopifyAnalytics.meta.product &&
          ShopifyAnalytics.meta.product.id
        ) {
          productIdForRecommendation = ShopifyAnalytics.meta.product.id;
        }

        object.productIdForRecommendation = productIdForRecommendation;

        function fetchProductRecommendations(productIdForRecommendation) {
          fetch(
            `${
              window.Shopify && window.Shopify.routes
                ? window.Shopify.routes.root
                : "/"
            }recommendations/products.json?product_id=${productIdForRecommendation}&limit=${productsLimit}${
              object.options["shopify-products-related-intent"]
                ? `&intent=${object.options["shopify-products-related-intent"]}`
                : ""
            }`
          )
            .then((response) => response.json())
            .then(({ products }) => {
              app.elements.elementTypes.products_legacy.shopifyBuildFeed(
                payload,
                products || [],
                true
              );
            });
        }

        // check if using first product in cart to power recommendations
        if (
          object.options["shopify-products-related-type"] == "cart" &&
          integration
        ) {
          // landing pages and embeds populate using cart status upon CF load
          if (
            ["inline", "page"].includes(payload.cta.cta_type) &&
            integration["cart"] &&
            integration["cart"]["items"] &&
            integration["cart"]["items"].length > 0 &&
            integration["cart"]["items"][0].product_id
          ) {
            // landing pages and embeds populate using cart status upon CF load
            productIdForRecommendation =
              integration["cart"]["items"][0].product_id;
            fetchProductRecommendations(productIdForRecommendation);
          } else {
            // for popups, get product ID from first product in cart (if not present then fallback to selected product)
            setTimeout(function () {
              fetch(
                `${
                  window.Shopify && window.Shopify.routes
                    ? window.Shopify.routes.root
                    : "/"
                }cart.js`
              )
                .then((response) => response.json())
                .then(({ items }) => {
                  if (items && items[0] && items[0].product_id) {
                    productIdForRecommendation = items[0].product_id;
                  }
                  fetchProductRecommendations(productIdForRecommendation);
                });
            }, 500);
          }
        }

        if (
          object.options["shopify-products-related-type"] == "order" &&
          typeof window.Shopify == "object" &&
          typeof window.Shopify.checkout == "object" &&
          typeof window.Shopify.checkout.line_items == "object"
        ) {
          const firstProductInOrder = window.Shopify.checkout.line_items[0];

          if (firstProductInOrder && firstProductInOrder.product_id) {
            productIdForRecommendation = firstProductInOrder.product_id;
          }
          fetchProductRecommendations(productIdForRecommendation);
        }

        if (
          ['cart', 'order'].includes(productsRelatedType) == false
        ) {
          // if not use the selected product for recommendation
          fetchProductRecommendations(productIdForRecommendation);
        }
      }

      if (productsSource == "filter") {
        const productsFilter = object.options["shopify-products-filter"];

        fetch(
          `${
            window.Shopify && window.Shopify.routes
              ? window.Shopify.routes.root
              : "/"
          }search/suggest.json?q=${productsFilter}&resources[type]=product&limit=${productsLimit}&resources[options][unavailable_products]=hide&resources[options][fields]=title,product_type,variants.title,tag`
        )
          .then((response) => response.json())
          .then((suggestions) => {
            const shopifyProductHandles = suggestions.resources.results.products.map(
              (shopifyProduct) => shopifyProduct.handle
            ).slice(0, productsLimit);

            let enrichedProducts = []
            let promises = [];

            shopifyProductHandles.forEach((handle) => {
              promises.push(
                $cf.getJSON(
                  `${
                    window.Shopify && window.Shopify.routes
                      ? window.Shopify.routes.root
                      : "/"
                  }products/${handle}.js`,
                  function (shopifyProduct) {
                    enrichedProducts.push(shopifyProduct)
                  }
                )
              )
            });

            Promise.all(promises).then(() =>
              {
                app.elements.elementTypes.products_legacy.shopifyBuildFeed(
                  payload,
                  enrichedProducts,
                  false
                )

                app.elements.products.updateProductsOuterDataAttributes(payload, enrichedProducts);

                enrichedProducts.forEach((shopifyProduct) => {
                  app.elements.elementTypes.products_legacy.shopifyPopulateProduct(
                    payload,
                    shopifyProduct
                  );
                });
              }
            );
          });
      }

      if (productsSource == "selected") {
        const shopifyProductHandles = object.options[
          "shopify-products-selected"
        ]
          .split(",")
          .sort((a, b) => a.localeCompare(b));

        const shopifyProducts = shopifyProductHandles.map((handle) => ({
          handle: handle,
        }));

        app.elements.elementTypes.products_legacy.shopifyBuildFeed(
          payload,
          shopifyProducts,
          false
        );

        app.elements.products.updateProductsOuterDataAttributes(payload, shopifyProductHandles);

        shopifyProductHandles.forEach((handle) => {
          $cf.getJSON(
            `${
              window.Shopify && window.Shopify.routes
                ? window.Shopify.routes.root
                : "/"
            }products/${handle}.js`,
            function (shopifyProduct) {
              app.elements.elementTypes.products_legacy.shopifyPopulateProduct(
                { ...payload, object: object },
                shopifyProduct
              );
            }
          );
        });
      }

      if (productsSource == "collection") {
        const collectionIds = object.options[
          "shopify-products-collection"
        ].split(",");
        const showUnavailable =
          object.options["shopify-products-unavailable"] == "true";

        let fetchUrls = [];
        collectionIds.forEach((collectionId) => {
          fetchUrls.push(
            `${
              window.Shopify && window.Shopify.routes
                ? window.Shopify.routes.root
                : "/"
            }collections/${collectionId}/products.json?limit=${productsLimit}`
          );
        });

        Promise.all(fetchUrls.map((url) => fetch(url)))
          .then(function (responses) {
            return Promise.all(
              responses.map(function (response) {
                return response.json();
              })
            );
          })
          .then(function (data) {
            function flattenArray(arr) {
              const flattened = arr.reduce((acc, val) => acc.concat(val), []);
              const uniqueItems = new Map();
              return flattened.filter((item) => {
                if (!uniqueItems.has(item.handle)) {
                  uniqueItems.set(item.handle, true);
                  return true;
                }
                return false;
              });
            }

            const products = flattenArray(data.map((d) => d.products)).slice(
              0,
              parseInt(productsLimit)
            );

            app.elements.elementTypes.products_legacy.shopifyBuildFeed(
              payload,
              products || [],
              false
            );

            app.elements.products.updateProductsOuterDataAttributes(payload, products);

            products.forEach((collectionItem, i) => {
              $cf.getJSON(
                `${
                  window.Shopify && window.Shopify.routes
                    ? window.Shopify.routes.root
                    : "/"
                }products/${collectionItem.handle}.js`,
                function (shopifyProduct) {
                  const productAvailable =
                    shopifyProduct.available !== false ||
                    showUnavailable == true;

                  if (productAvailable) {
                    app.elements.elementTypes.products_legacy.shopifyPopulateProduct(
                      payload,
                      shopifyProduct
                    );
                  } else if (i + 1 == products.length) {
                    setTimeout(function () {
                      // if no products are available, show empty message
                      const productsContainer = payload.embed.querySelector(
                        `.cf-products-outer[data-element-id="${payload.element.id}"]`
                      );
                      app.elements.elementTypes.products_legacy.showEmptyMessage(
                        $cf(productsContainer).find(".cf-products-item:visible").length == 0, 
                        payload
                      );
                    }, 3000);
                  }
                }
              );
            });
          })
          .catch(function (error) {
            // if there's an error, log it
            console.log(error);
          });
      }

      if (productsSource == "current") {
        let shopifyProductHandles = [
          object.options["shopify-products-current-fallback"],
        ];

        if (
          window.ShopifyAnalytics &&
          ShopifyAnalytics.meta &&
          ShopifyAnalytics.meta.page &&
          ShopifyAnalytics.meta.page.pageType == "product"
        ) {
          shopifyProductHandles = [
            window.location.href.split("/").pop().split("?")[0].split("#")[0],
          ];
        }

        const shopifyProducts = shopifyProductHandles.map((handle) => ({
          handle: handle,
        }));

        app.elements.elementTypes.products_legacy.shopifyBuildFeed(
          payload,
          shopifyProducts,
          false
        );

        app.elements.products.updateProductsOuterDataAttributes(payload, shopifyProductHandles);

        shopifyProductHandles.forEach((handle) => {
          $cf.getJSON(
            `${
              window.Shopify && window.Shopify.routes
                ? window.Shopify.routes.root
                : "/"
            }products/${handle}.js`,
            function (shopifyProduct) {
              app.elements.elementTypes.products_legacy.shopifyPopulateProduct(
                payload,
                shopifyProduct
              );
            }
          );
        });
      }
    } else if (element.options["products-source"] == "Shopify") {
      if (app.live !== true) {
        document
          .querySelectorAll(
            `.cf-products-outer[data-element-id="${element.id}"] .cf-products-item`
          )
          .forEach((productDiv) => {
            productDiv.style.display = "block";
          });
      } else {
        app.elements.elementTypes.products_legacy.showEmptyMessage(true, payload);
      }
    }
  },

  //
  shopifyBuildFeed: (payload, shopifyProducts, populateProducts) => {
    const productsContainer = payload.embed.querySelector(
      `.cf-products-outer[data-element-id="${payload.element.id}"]`
    );
    let shopifyProductDivs = [];
    const productDivTemplate = productsContainer.firstChild.cloneNode(true);

    productsContainer.style.visibility = "initial";
    productsContainer.replaceChildren();

    productDivTemplate.style.display = 'none';
    productsContainer.prepend(productDivTemplate)

    if (shopifyProducts.length > 0) {
      app.elements.products.updateProductsOuterDataAttributes(payload, shopifyProducts);

      shopifyProducts.forEach((shopifyProduct) => {
        const productDiv = productDivTemplate.cloneNode(true);
        productDiv.style.display = "block";
        productDiv.setAttribute("data-handle", shopifyProduct.handle);
        productDiv.setAttribute("data-product-id", shopifyProduct.id);
        productsContainer.appendChild(productDiv);

        if (populateProducts !== false && shopifyProduct.title) {
          app.elements.elementTypes.products_legacy.shopifyPopulateProduct(
            payload,
            shopifyProduct
          );
        }
      });

      if (payload.element.options["products-button-cart-all"] == "true") {
        app.elements.elementTypes.products_legacy.shopifyAddAllToCart(
          payload,
          shopifyProducts
        );
      }
    }

    app.elements.elementTypes.products_legacy.showEmptyMessage(shopifyProducts.length == 0, payload);
  },

  shopifyPopulateProduct: (payload, shopifyProduct) => {
    const element = payload.element;
    const productDiv = payload.embed.querySelector(
      `.cf-products-outer[data-element-id="${payload.element.id}"]  .cf-products-item[data-handle="${shopifyProduct.handle}"]`
    );

    if (productDiv) {
      const productImage = productDiv.querySelector(".cf-products-item-image");
      const productTitle = productDiv.querySelector(
        ".cf-products-item-title p"
      );
      const productPriceContainer = productDiv.querySelector(
        ".cf-products-item-price p"
      );
      const productPrice = productDiv.querySelector(
        ".cf-products-item-price-base"
      );
      const productDiscount = productDiv.querySelector(
        ".cf-products-item-price-discount"
      );
      const productDescription = productDiv.querySelector(
        ".cf-products-item-description"
      );
      const productButtonOuter = productDiv.querySelector(
        ".cf-products-item-button-outer"
      );

      const productButton = productDiv.querySelector(
        ".cf-products-item-button"
      );

      const productBadge = productDiv.querySelector(".cf-products-item-badge")

      if (productBadge) {
        productBadge.style.display = "block";

        let productImageBadgeText;

        if (element.options["products-show-image-sold-out-badge"] == "true" && shopifyProduct.available === false) {
          productImageBadgeText = element.options["products-image-sold-out-badge-text"] || "SOLD OUT";
        } else if (element.options["products-image-badge-style"] == "custom") {
          productImageBadgeText = element.options["products-image-badge-custom-message"] || "10% Off"
        } else if (element.options["products-discount-type"] == "detect") {
          if (shopifyProduct.compare_at_price) {
            productImageBadgeText = `${app.website.currency_character} ${((shopifyProduct.compare_at_price - shopifyProduct.price) / 100).toFixed(2)} OFF`
          } else {
            productBadge.style.display = "none";
          }
        }

        if (productImageBadgeText) {
          productBadge.innerHTML = productImageBadgeText;
        }
      }

      if (productImage && shopifyProduct.featured_image) {
        productImage.innerHTML = `<img src="${shopifyProduct.featured_image}" loading="lazy" />`;
      }

      if (productTitle && shopifyProduct.title) {
        productTitle.innerText = shopifyProduct.title;
      }

      if (productPrice && shopifyProduct.price) {
        let shopifyPrice = shopifyProduct.price;
        productDiv.setAttribute("data-product-price", shopifyPrice);

        let priceFormatted = (shopifyPrice / 100).toFixed(2);
        productPrice.innerText = priceFormatted;

        let priceDiscounted;

        if (element.options["products-discount-type"] == "amount") {
          let discountAmount =
            element.options["products-discount-amount"] || 10;

          priceDiscounted = priceFormatted - parseInt(discountAmount);
        }

        if (element.options["products-discount-type"] == "percentage") {
          let discountPercentage =
            element.options["products-discount-percentage"] || 10;

          priceDiscounted =
            priceFormatted -
            priceFormatted * (parseInt(discountPercentage) * 0.01);
        }

        if (
          element.options["products-discount-type"] == "detect" &&
          shopifyProduct.compare_at_price
        ) {
          priceFormatted = (shopifyProduct.compare_at_price / 100).toFixed(2);
          priceDiscounted = shopifyPrice / 100;
        }

        if (priceDiscounted !== undefined) {
          if (priceDiscounted < 0) {
            priceDiscounted = 0;
          }
          let originalPrice =
            productPriceContainer.querySelector("strike") ||
            document.createElement("strike");
          let discountFormatted = priceDiscounted.toFixed(2);

          originalPrice.innerHTML = `${app.website.currency_character}<span className="cf-products-item-price-base">${priceFormatted}</span> `;

          productPriceContainer.prepend(originalPrice);
          if (productDiscount) {
            productDiscount.innerHTML = discountFormatted
          }
        }
      }

      if (productDescription) {
        if (shopifyProduct.description) {
          productDescription.innerHTML = $cf(`<div>${shopifyProduct.description}</div>`).text();
        } else if (element.options["products-descriptions"] !== "false") {
          productDescription.innerHTML = "";
        }
      }

      if (
        element.options["confirmation-type"] == "cart" &&
        shopifyProduct.variants.length > 0
      ) {
        const selectTag = productDiv.querySelector(
          ".cf-products-item-variants select"
        );
        const shopifyProductVariantOptions = [];
        const objectToCheck = payload.object ? payload.object : element;

        let productVariantsToUse;
        let defaultVariantId;

        if (
          objectToCheck.options["shopify-products-source"] == "selected" &&
          objectToCheck.options["shopify-products-selected-variants"] &&
          shopifyProduct.variants.length > 1
        ) {
          productVariantsToUse = shopifyProduct.variants.filter(
            (productVariant) => {
              if (
                objectToCheck.options["shopify-products-selected-variants"]
                  .split(",")
                  .includes(productVariant.id + "")
              ) {
                return productVariant;
              }
            }
          );

          if (productVariantsToUse[0] && productVariantsToUse[0].id) {
            defaultVariantId = productVariantsToUse[0].id;
          }
        }

        if (!productVariantsToUse || productVariantsToUse.length == 0) {
          productVariantsToUse = shopifyProduct.variants;

          if (
            !defaultVariantId &&
            productVariantsToUse &&
            productVariantsToUse[0] &&
            productVariantsToUse[0].id
          ) {
            defaultVariantId = productVariantsToUse[0].id;
          }
        }

        productVariantsToUse.forEach((shopifyProductVariant) => {
          const optionTag = document.createElement("option");
          optionTag.value = shopifyProductVariant.id;
          optionTag.innerText = shopifyProductVariant.name;
          shopifyProductVariantOptions.push(optionTag);
        });

        if (selectTag) {
          selectTag.replaceChildren(...shopifyProductVariantOptions);
        }

        function changeProductVariant(value) {
          const selectedProductVariant = Object.values(
            shopifyProduct.variants
          ).filter(
            (shopifyProductVariant) => shopifyProductVariant.id + "" == value
          )[0];

          if (selectedProductVariant) {
            const shopifyVariantPrice = selectedProductVariant.price;

            if (
              productImage &&
              selectedProductVariant.featured_image &&
              selectedProductVariant.featured_image.src
            ) {
              productImage.innerHTML = `<img src="${selectedProductVariant.featured_image.src}" loading="lazy" />`;
            } else if (productImage && shopifyProduct.featured_image) {
              productImage.innerHTML = `<img src="${shopifyProduct.featured_image}" loading="lazy" />`;
            }

            if (productTitle && selectedProductVariant.name) {
              productTitle.innerText = selectedProductVariant.name;
            }

            const productBadge = productDiv.querySelector(".cf-products-item-badge")

            if (productBadge) {
              productBadge.style.display = "block";

              let productImageBadgeText;

              if (element.options["products-show-image-sold-out-badge"] == "true" && selectedProductVariant.available === false) {
                productImageBadgeText = element.options["products-image-sold-out-badge-text"] || "SOLD OUT";
              } else if (element.options["products-image-badge-style"] == "custom") {
                productImageBadgeText = element.options["products-image-badge-custom-message"] || "10% Off"
              } else if (element.options["products-discount-type"] == "detect") {

                if (selectedProductVariant.compare_at_price) {
                  productImageBadgeText = `${app.website.currency_character} ${((selectedProductVariant.compare_at_price - selectedProductVariant.price) / 100).toFixed(2)} OFF`
                } else {
                  productBadge.style.display = "none";
                }
              }

              if (productImageBadgeText) {
                productBadge.innerHTML = productImageBadgeText;
              }
            }

            if (productPrice && selectedProductVariant.price) {
              let priceFormatted = (selectedProductVariant.price / 100).toFixed(
                2
              );
              productPrice.innerText = priceFormatted;

              let priceDiscounted;

              if (element.options["products-discount-type"] == "amount") {
                let discountAmount =
                  element.options["products-discount-amount"] || 10;

                priceDiscounted = priceFormatted - parseInt(discountAmount);
              }

              if (element.options["products-discount-type"] == "percentage") {
                let discountPercentage =
                  element.options["products-discount-percentage"] || 10;

                priceDiscounted =
                  priceFormatted -
                  priceFormatted * (parseInt(discountPercentage) * 0.01);
              }

              if (
                element.options["products-discount-type"] == "detect" &&
                selectedProductVariant.compare_at_price
              ) {
                priceFormatted = (
                  selectedProductVariant.compare_at_price / 100
                ).toFixed(2);
                priceDiscounted = shopifyVariantPrice / 100;
              }

              const originalPrice = productPriceContainer.querySelector("strike") || document.createElement("strike");

              if (productPriceContainer && priceDiscounted !== undefined) {
                const discountFormatted = priceDiscounted.toFixed(2);

                originalPrice.innerHTML = `${app.website.currency_character}<span className="cf-products-item-price-base">${priceFormatted}</span> `;
                productPriceContainer.prepend(originalPrice);

                if (productDiscount && selectedProductVariant.compare_at_price) {
                  productDiscount.innerHTML = discountFormatted
                }
              } else {
                originalPrice.innerHTML = '';
              }
            }
          }
        }

        if (defaultVariantId) {
          changeProductVariant(defaultVariantId);
        }

        if (selectTag) {
          selectTag.onchange = (event) => {
            changeProductVariant(selectTag.value);
          };
        }
      }

      const onLinkToClick = (event) => {
        event.preventDefault();
        const redirectURL = `${window.Shopify.shop}/products/${shopifyProduct.handle}`;

        app.ctas.conversionLogic({
          ...payload,
          redirect_url: redirectURL,
          productDiv: productDiv,
        }, app.elements.products.shouldTrackConversion(element, "cf-link-clicked-or-added-to-cart"));
      };

      const wrapProductContentWithLinkTo = (content) => {
        return content.replace(/^/, x => x + `<a class="cf-link-to-trigger" href="/products/${shopifyProduct.handle}">`).replace(/$/, x => x + '</a>')
      }

      if (productImage && element.options["products-image-link-to-product"] == "true") {
        productImage.parentElement.innerHTML = wrapProductContentWithLinkTo(productImage.parentElement.innerHTML)
      }
      if (productDescription && element.options["products-description-link-to-product"] == "true" && productDescription) {
        productDescription.innerHTML = wrapProductContentWithLinkTo(productDescription.innerHTML)
      }
      if (productTitle && element.options["products-title-link-to-product"] == "true") {
        productTitle.parentElement.innerHTML = wrapProductContentWithLinkTo(productTitle.parentElement.innerHTML)
      }
      if (productPrice && element.options["products-price-link-to-product"] == "true") {
        productPrice.innerHTML = wrapProductContentWithLinkTo(productPrice.innerHTML)
      }

      productDiv.querySelectorAll('.cf-link-to-trigger').forEach((link) => {
        link.onclick = onLinkToClick;
      })

      const onClick = (event) => {
        app.elements.elementTypes.products_legacy.handleClick(
          {
            ...payload,
            shopifyProduct: shopifyProduct,
            button: productButton,
          },
          productDiv
        );
      };

      if (productButton) {
        if (
          element.options["products-button"] !== "false" ||
          element.options["confirmation-type"] == "cart"
        ) {
          element.addingToCart = false;
          productButton.onclick = onClick;
        } else {
          const clickableDiv = productDiv.querySelector(
            ".cf-products-item-inner"
          );
          clickableDiv.style.cursor = "pointer";
          clickableDiv.onclick = onClick;
        }
      }

      const showProductsQuantity = element.options["quantity-picker-show"]
        ? element.options["quantity-picker-show"]
        : element.options["products-quantity"]
        ? element.options["products-quantity"]
        : "false";

      const quantityDiv = productDiv.querySelector(".cf-increment-quantity-picker");

      if (showProductsQuantity == "true" && quantityDiv) {
        const quantityInput = quantityDiv.querySelector(
          ".cf-products-quantity"
        );
        const quantityDecrement = quantityDiv.querySelector(".cf-decrement");
        const quantityIncrement = quantityDiv.querySelector(".cf-increment");

        quantityDecrement.onclick = function (e) {
          if (quantityInput.innerHTML > 1) {
            quantityInput.innerHTML = parseInt(quantityInput.innerHTML) - 1;
          }
        };

        quantityIncrement.onclick = function (e) {
          quantityInput.innerHTML = parseInt(quantityInput.innerHTML) + 1;
        };
      }

      productDiv.style.display = "block";
    }
  },

  shouldTrackConversion: (element, target_action = "cf-added-to-cart") => {
    if (element.options["confirmation-type"] == "product" || !element.options["products-source"] || element.options["products-source"]?.toLowerCase() == "convertflow") {
      return true;
    }

    if (element.options["confirmation-type"] == "cart") {
      if (element.options["products-cart-redirect"] == "true" ||
        element.options["products-checkout-redirect"] == "true"
      ) {
        return true;
      }

      switch (element.options["track-conversion-when"]) {
        case "cf-added-to-cart":
          return target_action == "cf-added-to-cart";
        case "cf-link-clicked-or-added-to-cart":
          return target_action == "cf-added-to-cart" || target_action == "cf-link-clicked-or-added-to-cart";
        case "cf-clicking-through-to-cart":
          return target_action == "cf-clicking-through-to-cart";
        default:
          return true;
      }
    }

    return false;
  },

  handleClick: (payload, productDiv) => {
    const element = payload.element;
    const product = payload.product;

    // redirect to selected product's redirect URL
    if (element.options["products-source"] !== "Shopify") {
      let redirectURL = product.redirect_url;
      let selectedProductVariantID;
      let selectedProductVariant;

      if (
        element.options["products-button"] !== "false" &&
        product.product_variants &&
        Object.values(product.product_variants).length > 0
      ) {
        const productVariantSelectTag = productDiv.querySelector("select");
        selectedProductVariantID = productVariantSelectTag.value;
        selectedProductVariant =
          product.product_variants[selectedProductVariantID];

        if (selectedProductVariant && selectedProductVariant.redirect_url) {
          redirectURL = selectedProductVariant.redirect_url;
        }
      }

      app.ctas.conversionLogic({
        ...payload,
        redirect_url: redirectURL,
        product: product,
        product_variant: selectedProductVariant,
      });
    }

    // add shopify product to cart or redirect to url
    if (element.options["products-source"] == "Shopify") {
      const shopifyProduct = payload.shopifyProduct;
      let productPrice = shopifyProduct.price / 100;

      const productDiscount = productDiv.querySelector(
        ".cf-products-item-price-discount"
      );
      if (productDiscount) {
        productPrice = productDiscount.innerText;
        try {
          productPrice = parseFloat(productPrice);
        } catch (e) {}
      }

      let productPayload = {
        product_id: shopifyProduct.id,
        product_name: shopifyProduct.title,
        product_price: productPrice,
        product_source: "Shopify",
      };

      // add to cart
      if (
        element.options["confirmation-type"] == "cart" &&
        shopifyProduct.variants.length > 0
      ) {
        element.addingToCart = true;

        const selectTag = productDiv.querySelector(
          ".cf-products-item-variants select"
        );
        const selectedProductQuantityDiv = productDiv.querySelector(
          ".cf-increment-quantity-picker .cf-products-quantity"
        );
        const selectedProductQuantity = selectedProductQuantityDiv
          ? selectedProductQuantityDiv.innerHTML
          : 1;

        const selectedProductVariantID = selectTag.value;
        let selectedProductVariant;

        if (selectedProductVariantID && shopifyProduct.variants) {
          selectedProductVariant = shopifyProduct.variants.find(
            (variant) => variant.id == selectedProductVariantID
          );
        }

        if (selectedProductVariantID) {
          $cf.ajax({
            type: "POST",
            url: `${
              window.Shopify && window.Shopify.routes
                ? window.Shopify.routes.root
                : "/"
            }cart/add.js`,
            data: {
              items: [
                {
                  id: selectedProductVariantID,
                  quantity: selectedProductQuantity,
                },
              ],
            },
            dataType: "json",
            success: function (data) {},
          });

          let productPayloadWithVariant = {
            ...productPayload,
            product_variant: selectedProductVariantID,
          };

          if (
            selectedProductVariant &&
            selectedProductVariant.title &&
            selectedProductVariant.title !== "Default Title"
          ) {
            productPayloadWithVariant.product_name = `${productPayload.product_name} - ${selectedProductVariant.title}`;
            productPayload.product_name = productPayloadWithVariant.product_name;
          }

          app.ctas.track(
            {
              event_type: "Add To Cart",
              variant_id: payload.variant.id,
              step_id: payload.step.id,
              element_id: payload.element.id,
              data: productPayloadWithVariant,
            },
            payload.cta,
            payload.element
          );

          let actionAfterAddToCart;

          if (element.options["products-cart-redirect"] == "true") {
            actionAfterAddToCart = "cart";
          } else if (element.options["products-checkout-redirect"] == "true") {
            actionAfterAddToCart = "checkout";
          }

          const discountCode = element.options["products-cart-redirect-discount"];

          let redirectURL;
          if (actionAfterAddToCart == "cart" && discountCode) {
            redirectURL = `${window.location.host}/discount/${discountCode}?redirect=/cart`;
          } else if (actionAfterAddToCart == "cart") {
            redirectURL = `${window.location.host}/cart`;
          } else if (actionAfterAddToCart == "checkout" && discountCode) {
            redirectURL = `${window.location.host}/discount/${discountCode}?redirect=/checkout`;
          } else if (actionAfterAddToCart == "checkout") {
            redirectURL = `${window.location.host}/checkout`;
          }

          // update cart status for conditions
          let integration = $cf.map(app.website.integrations, function (
            integration
          ) {
            if (integration.integration_type == "Shopify") return integration;
          })[0];

          if (integration) {
            integration.cart = integration.cart || {};
            integration.cart.items = integration.cart.items || [];
            integration.cart.items.push(shopifyProduct);

            integration.cart.item_count = integration.cart.item_count || 0;
            integration.cart.item_count += 1;

            integration.cart.original_total_price =
              integration.cart.original_total_price || 0;
            integration.cart.original_total_price += shopifyProduct.price;

            integration.cart.total_price = integration.cart.total_price || 0;
            integration.cart.total_price += productPrice;

            app.visitors.updateShopifyCart(integration.cart);
          }

          app.ctas.conversionLogic({
            ...payload,
            redirect_url: redirectURL,
            productDiv: productDiv,
            productData: productPayload,
          }, app.elements.products.shouldTrackConversion(element, "cf-added-to-cart"));

          app.visitors.fireEvent("cfAddToCart", {
            cta: payload.cta,
            variant: payload.variant,
            step: payload.step,
            element: payload.element,
            product: productPayloadWithVariant,
          });
        }
      }

      // redirect to product
      if (element.options["confirmation-type"] == "product") {
        let redirectURL = `/products/${shopifyProduct.handle}`;

        const discountCode = element.options["products-cart-redirect-discount"];

        if (redirectURL && discountCode) {
          redirectURL = `/discount/${discountCode}?redirect=/products/${shopifyProduct.handle}`;
        }

        app.ctas.conversionLogic({
          ...payload,
          redirect_url: `${window.location.host}${redirectURL}`,
          productData: productPayload,
        }, app.elements.products.shouldTrackConversion(element, "cf-link-clicked-or-added-to-cart"));
      }
    }
  },

  shopifyAddAllToCart: (payload, shopifyProducts) => {
    const element = payload.element;
    const elementDiv = payload.embed.querySelector(
      `.cf-element[data-element-id="${element.id}"]`
    );
    const addAllButton = elementDiv.querySelector(
      `.cf-products-all-button-outer .cf-button`
    );

    if (!addAllButton) return false;

    addAllButton.onclick = (event) => {
      let productVariantIds = [];

      elementDiv.querySelectorAll(".cf-products-item").forEach((productDiv) => {
        const selectedProductQuantityDiv = productDiv.querySelector(".cf-increment-quantity-picker .cf-products-quantity");
        const selectedProductQuantity = selectedProductQuantityDiv ? selectedProductQuantityDiv.innerHTML : 1;
        const selectedVariantId = productDiv.querySelector('.cf-products-item-variants select')?.value;

        if (selectedVariantId) {
          productVariantIds.push({
            id: selectedVariantId,
            quantity: selectedProductQuantity,
          });
        }
      })

      $cf.ajax({
        type: "POST",
        url: `${
          window.Shopify && window.Shopify.routes
            ? window.Shopify.routes.root
            : "/"
        }cart/add.js`,
        data: {
          items: productVariantIds,
        },
        dataType: "json",
        success: function (data) {},
      });

      // update cart status for conditions
      let integration = $cf.map(app.website.integrations, function (
        integration
      ) {
        if (integration.integration_type == "Shopify") return integration;
      })[0];

      if (integration) {
        shopifyProducts.forEach((shopifyProduct) => {
          let productPrice = shopifyProduct.price / 100;

          const productDiv = elementDiv.querySelector(
            `.cf-products-item[data-handle=\"${shopifyProduct.handle}\"]`
          );

          if (productDiv) {
            const productDiscount = productDiv.querySelector(
              ".cf-products-item-price-discount"
            );
            if (productDiscount) {
              productPrice = productDiscount.innerText;
              try {
                productPrice = parseFloat(productPrice);
              } catch (e) {}
            }
          }

          integration.cart = integration.cart || {};
          integration.cart.items = integration.cart.items || [];
          integration.cart.items.push(shopifyProduct);

          integration.cart.item_count = integration.cart.item_count || 0;
          integration.cart.item_count += 1;

          integration.cart.original_total_price =
            integration.cart.original_total_price || 0;
          integration.cart.original_total_price += shopifyProduct.price;

          integration.cart.total_price = integration.cart.total_price || 0;
          integration.cart.total_price += productPrice;

          app.visitors.updateShopifyCart(integration.cart);

          const selectedProductVariantID = productDiv.querySelectorAll(
            ".cf-products-item-variants select"
          )[0].value;

          let productPayload = {
            product_id: shopifyProduct.id,
            product_name: shopifyProduct.title,
            product_variant: selectedProductVariantID,
            product_price: productPrice,
            product_source: "Shopify",
          };

          if (selectedProductVariantID && shopifyProduct.variants) {
            selectedProductVariant = shopifyProduct.variants.find(
              (variant) => variant.id == selectedProductVariantID
            );

            if (
              selectedProductVariant &&
              selectedProductVariant.title &&
              selectedProductVariant.title !== "Default Title"
            ) {
              productPayload.product_name = `${productPayload.product_name} - ${selectedProductVariant.title}`;
            }
          }

          app.ctas.track(
            {
              event_type: "Add To Cart",
              variant_id: payload.variant.id,
              step_id: payload.step.id,
              element_id: payload.element.id,
              data: productPayload,
            },
            payload.cta,
            payload.element
          );

          app.visitors.fireEvent("cfAddToCart", {
            cta: payload.cta,
            variant: payload.variant,
            step: payload.step,
            element: payload.element,
            product: productPayload,
          });
        });
      }

      let actionAfterAddToCart;

      if (element.options["products-cart-redirect"] == "true") {
        actionAfterAddToCart = "cart";
      } else if (element.options["products-checkout-redirect"] == "true") {
        actionAfterAddToCart = "checkout";
      }

      const discountCode = element.options["products-cart-redirect-discount"];

      let redirectURL;
      if (actionAfterAddToCart == "cart" && discountCode) {
        redirectURL = `${window.location.host}/discount/${discountCode}?redirect=/cart`;
      } else if (actionAfterAddToCart == "cart") {
        redirectURL = `${window.location.host}/cart`;
      } else if (actionAfterAddToCart == "checkout" && discountCode) {
        redirectURL = `${window.location.host}/discount/${discountCode}?redirect=/checkout`;
      } else if (actionAfterAddToCart == "checkout") {
        redirectURL = `${window.location.host}/checkout`;
      }

      app.ctas.conversionLogic({
        ...payload,
        redirect_url: redirectURL
          ? `${window.location.host}${redirectURL}`
          : undefined,
        button: addAllButton,
      }, app.elements.products.shouldTrackConversion(element, "cf-added-to-cart"));
    };
  },

  showEmptyMessage: (show, payload) => {
    const elementDiv = payload.embed.querySelector(
      `.cf-element[data-element-id="${payload.element.id}"]`
    );
    const productsEmptyDiv = elementDiv.querySelector(
      `.cf-products-empty-message`
    );

    const addAllButton = elementDiv.querySelector(
      `.cf-products-all-button-outer .cf-button`
    );

    if (show) {
      productsEmptyDiv.style.display = "block";

      if (addAllButton) {
        addAllButton.style.display = "none";
      }
    } else {
      productsEmptyDiv.style.display = "none";
    }
  },
};

app.elements.elementTypes.progress = {
  handleLoad: (payload) => {
    const variant = payload.variant;
    const element = payload.element;
    const embed = payload.embed;

    var elementDiv = $cf(embed).find('.cf-element[data-element-id="' + element.id + '"]');
    var progressInner = $cf(elementDiv).find('.cf-progress-inner');
    var stepCount = Object.keys(variant.steps).length;

    if (element.options['progress-type'] == 'dynamic') {
      var stepDiv = $cf(elementDiv).parents(".cf-step")[0];

      var stepPosition = parseInt(
        $cf(stepDiv).attr("data-step-position")
      );
      var previousExcludedSteps = $cf(embed).find(".cf-step[data-progress-bar-count='false']").filter(function(i, stepDiv) {
        return stepDiv.getAttribute("data-step-position") < stepPosition
      }).length
      stepPosition = stepPosition - previousExcludedSteps;

      var stepCount = $cf(embed).find(".cf-step:not([data-progress-bar-count='false'])").length;
      var innerProgressWidth = (100 * stepPosition) / stepCount;
      $cf(progressInner).css('width', (innerProgressWidth > 100 ? '100' : innerProgressWidth) + '%');

      var progressMessageStepProgress = $cf(elementDiv).find(
        ".cf-progress-step-progress"
      )[0];
      if (progressMessageStepProgress) {
        if (stepPosition > stepCount) {
          var stepProgressText = stepCount + '/' + stepCount;
        } else {
          var stepProgressText = stepPosition + '/' + stepCount;
        }
        $cf(progressMessageStepProgress).text(stepProgressText);
      }
    }

    app.elements.elementTypes.progress.initializeShopifyHeadlessCartTags(payload, progressInner);
    app.elements.elementTypes.progress.initializeProgressListeners(payload);
  },

  initializeProgressListeners: (payload) => {
    const element = payload.element;
    const embed = payload.embed;

    let elementDiv = $cf(embed).find('.cf-element[data-element-id="' + element.id + '"]');
    let progressInner = $cf(elementDiv).find('.cf-progress-inner');

    if (element.options['progress-type'] == 'cart' && convertflow.cart !== undefined && typeof convertflow.cart == 'object') {
      app.helpers.onVisible($cf(progressInner)[0], () => {
        app.elements.elementTypes.progress.updateCartProgress({progressInner: progressInner, ...payload});
      });

      ['cfAddToCartShopify', 'cfUpdateCartShopify', 'cfChangeCartShopify', 'cfClearCartShopify'].forEach(function (eventName) {
        window.addEventListener(eventName, function (event) {
          app.elements.elementTypes.progress.updateCartProgress({progressInner: progressInner, ...payload});
        });
      });
    }
  },

  initializeShopifyHeadlessCartTags: (payload) => {
    const element = payload.element;
    const embed = payload.embed;

    let elementDiv = $cf(embed).find('.cf-element[data-element-id="' + element.id + '"]');
    let progressInner = $cf(elementDiv).find('.cf-progress-inner');

    let headlessCartSession = window.convertflow?.session?.cart?.Shopify

    if (window.Shopify == undefined) {
      if (headlessCartSession == undefined) {
        setTimeout(() => {
          app.elements.elementTypes.progress.initializeShopifyHeadlessCartTags(payload);
        }, 1000);
      } else {
        app.visitors.enrichment_status["Shopify"] = "success";
        app.visitors.updateShopifyCart(headlessCartSession);
        app.elements.elementTypes.progress.updateCartProgress({progressInner: progressInner, ...payload});
        app.elements.elementTypes.progress.initializeProgressListeners(payload);
      }
    }
  },

  updateCartProgress: (payload) => {
    const progressInner = payload.progressInner;
    const variant = payload.variant;
    const element = payload.element;

    var currency_character = (app.website.currency_character) ? app.website.currency_character : '$';
    var cart_value = (convertflow.cart['value']) ? convertflow.cart['value'] : 0;
    var cart_value_threshold;
    var percentageWidth = 0;

    if (variant.options['cart-value-threshold']) {
      cart_value_threshold = parseInt(variant.options['cart-value-threshold']);
    } else {
      cart_value_threshold = (app.website.data['cart-value-threshold']) ? parseInt(app.website.data['cart-value-threshold']) : 50;
    }

    if (cart_value_threshold !== undefined) {
      percentageWidth = (cart_value * 100) / cart_value_threshold;

      if (percentageWidth > 100) {
        percentageWidth = 100;
      }

      var messageToShow = element.options['progress-message-cart-reached'];

      if (percentageWidth == 100 && messageToShow) {
        let elementDiv = $cf(payload.embed).find('.cf-element[data-element-id="' + element.id + '"]');
        var progressMessageDiv = $cf(elementDiv).find(".cf-progress-message")[0];
        $cf(progressMessageDiv).html(messageToShow);
        app.ctas.mergeTags(payload.cta, payload.variant, elementDiv);
      }

      $cf(progressInner).css('min-width', percentageWidth + '%');
    }
  }
}

app.elements.elementTypes.tabs = {
  handleLoad: (payload) => {
    const tabsDiv = document.querySelector(
      `.cf-element[data-element-id="${payload.element.id}"]`
    );

    if (payload.embed.jquery) {
      payload.embed = $cf(payload.embed)[0];
    }

    app.helpers.onVisible(tabsDiv, () => {
      app.elements.elementTypes.tabs.adjustDevice(payload, tabsDiv);
      app.elements.elementTypes.tabs.initialize(payload);
    });
  },
  adjustDevice: (payload, tabsDiv) => {
    const element = payload.element;
    const variant = payload.variant;

    const desktopChoosedLayout =
      element.options["tabs-layout"] ||
      variant.options["tabs-layout"] ||
      "horizontal";

    const mobileChoosedLayout =
      element.options["tabs-layout-mobile"] ||
      variant.options["tabs-layout-mobile"] ||
      desktopChoosedLayout

    let choosedLayout = app.helpers.mediaQueryIsMobile() ? mobileChoosedLayout : desktopChoosedLayout

    const tabsContainer = tabsDiv.querySelector(".cf-tabs-container");

    if (choosedLayout == "vertical") {
      tabsContainer.classList.add("cf-vertical");
      tabsContainer.classList.remove("cf-horizontal");
    } else {
      tabsContainer.classList.add("cf-horizontal");
      tabsContainer.classList.remove("cf-vertical");
    }
  },
  initialize: (payload) => {
    const element = payload.element;

    payload.embed
      .querySelectorAll(
        `.cf-element[data-element-id="${element.id}"] .cf-tab-item[data-tab-element-id="${element.id}"]`
      )
      .forEach((tab_item) => {
        tab_item.onclick = function (e) {
          e.preventDefault();

          payload.embed
            .querySelectorAll(
              `.cf-element[data-element-id="${element.id}"] .cf-tab-item[data-tab-element-id="${element.id}"]`
            )
            .forEach((tab) => {
              tab.classList.remove("active");
            });

          tab_item.classList.add("active");

          let tabId = tab_item.getAttribute("data-tab-id");
          let sectionId = tab_item.getAttribute("data-section-id");

          let targetId = `#cf-tab-item-${tabId}-section-${sectionId}`;
          let targetSectionBox = payload.embed.querySelector(targetId);

          payload.embed
            .querySelectorAll(
              `.cf-tab-item-cf-section-box[data-tab-element-id="${element.id}"]`
            )
            .forEach((box) => {
              box.style.display = "none";
            });

            setTimeout(() => {
              app.elements.products.showEmptyMessage(
                $cf(targetSectionBox).find(".cf-products-item:visible").length == 0,
                payload
              );
            }, 250)

          if (targetSectionBox) {
            targetSectionBox.style.display = "block";
          }
        };
      });
  },
};

app.elements.elementTypes.form = {
  handleLoad: (payload) => {
    const elementDiv = document.querySelector(
      `.cf-element[data-element-id="${payload.element.id}"]`
    );

    if (payload.embed.jquery) {
      payload.embed = $cf(payload.embed)[0];
    }

    app.helpers.onVisible(elementDiv, () => {
      app.elements.elementTypes.form.initialize(payload);
    });
  },
  initialize: (payload) => {
    const elementDiv = payload.embed.querySelector(`.cf-element[data-element-id="${payload.element.id}"]`);

    elementDiv.querySelectorAll('.cf-form-field select').forEach((select) => {
      select.addEventListener('change', (e) => {
        e.target.setAttribute('data-selected', 'true')
      })
    })

    app.elements.elementTypes.form.adjustDeviceClasses(payload, elementDiv);
    app.elements.elementTypes.form.initializeGoogleReCaptcha(payload, elementDiv);
  },
  adjustDeviceClasses: (payload, elementDiv) => {
    const element = payload.element;
    const formDiv = elementDiv.querySelector('.cf-form-2');

    formDiv.classList.remove('cf-form-vertical');
    formDiv.classList.remove('cf-form-horizontal');

    if (app.helpers.mediaQueryIsMobile() && element.options["form-type-mobile"]) {
      formDiv.classList.add(`cf-form-${element.options["form-type-mobile"]}`)
    } else {
      formDiv.classList.add(`cf-form-${element.options["form-type"]}`)
    }
  },
  initializeGoogleReCaptcha: (payload, formDiv) => {
    formDiv.querySelectorAll('.cf-recaptcha-placeholder').forEach((recaptchaDiv) => {
      const element = payload.element;
      const recaptchaSiteKey = app?.recaptcha_site_key;
      const formDiv = payload.embed.querySelector(`.cf-element[data-element-id="${payload.element.id}"]`);
      const recaptchaDivBox = formDiv?.querySelector(".cf-recaptcha-box");

      if (element.options["check_recaptcha"] == "true" && recaptchaDivBox && recaptchaSiteKey) {
        app.helpers.onVisible(formDiv, () => {
          app.helpers.loadScript('https://www.google.com/recaptcha/api.js?render=explicit', function() {
            grecaptcha.ready(function () {
              if (typeof grecaptcha !== "undefined") {
                recaptchaDiv.innerHTML = "";
                recaptchaDivBox.style.display = "inline-block";
    
                const recaptchaResponse = formDiv?.querySelector(
                  `#cf-form-recaptcha-response-${payload.element.id}`
                );
    
                if (recaptchaResponse) {
                  grecaptcha.render(recaptchaDiv, {
                    sitekey: recaptchaSiteKey,
                    callback: function (response) {
                      recaptchaResponse.value = response;
                    },
                  });
    
                  recaptchaResponse.required = true;
                }
    
              }
            });
          }, true);
        });
      } else if (recaptchaDivBox && !recaptchaSiteKey) {
        recaptchaDivBox.remove();
      }
    });
  }
};

app.elements.elementTypes.quiz = {
  autoContinueInProgress: false,

  handleLoad: (payload) => {
    if (payload.embed.jquery) {
      payload.embed = $cf(payload.embed)[0];
    }

    const elementDiv = payload.embed.querySelector(
      `.cf-element[data-element-id="${payload.element.id}"]`
    );

    app.helpers.onVisible(elementDiv, () => {
      app.elements.elementTypes.quiz.initialize(payload);
    });
  },

  adjustImagePlacement: (payload, option) => {
    const element = payload.element;
    const variant = payload.variant;
    const field = element.fields[option.getAttribute("data-field-id")];

    const labelImagePlacement = app.helpers.mediaQueryIsMobile()
      ? field.options["label-image-placement-mobile"] ||
        variant.options["label-image-placement-mobile"]
      : field.options["label-image-placement"] ||
        variant.options["label-image-placement"];

    payload.embed
      .querySelectorAll(
        `.cf-quiz-question[data-field-id="${field.id}"] img.cf-quiz-label-image`
      )
      .forEach((img) => {
        img.style.display = "none";
      });

    if (["left", "right", "above"].includes(labelImagePlacement)) {
      let img = payload.embed.querySelector(
        `.cf-quiz-question[data-field-id="${field.id}"] img.cf-quiz-image-left-right-above`
      );
      if (img) {
        img.style.display = "block";
      }
    } else {
      let img = payload.embed.querySelector(
        `.cf-quiz-question[data-field-id="${field.id}"] img.cf-quiz-image-below`
      );
      if (img) {
        img.style.display = "inline-block";
      }
    }
  },

  autoContinue: (question, payload) => {
    if (question) {
      let optionAutoContinueDelay =
        question.options["auto-continue-delay"] || 5;

      if (
        parseInt(optionAutoContinueDelay) > 0 &&
        question.field_type == "empty" &&
        app.elements.elementTypes.quiz.autoContinueInProgress !== question.id
      ) {
        app.elements.elementTypes.quiz.autoContinueInProgress = question.id;

        setTimeout(() => {
          let current_question = app.elements.elementTypes.quiz.currentQuestion(payload);
          if (question.id !== current_question.id) {
            app.elements.elementTypes.quiz.autoContinueInProgress = false;
            return;
          }

          app.elements.elementTypes.quiz.goToNextQuestion(payload);
          app.elements.elementTypes.quiz.autoContinueInProgress = false;
        }, optionAutoContinueDelay * 1000);
      }
    }
  },

  initialize: (payload) => {
    const element = payload.element;

    let firstQuestionWithoutSubFields = Object.values(element.fields)
      .filter((field) => !field.field_id)
      .sort((a, b) => a.position - b.position)[0];

    app.elements.elementTypes.quiz.autoContinue(firstQuestionWithoutSubFields, payload);

    if (element.options["prefill-fields"] == "false") {
      Object.values(element.fields).forEach((field) => {
        const slug_or_id =
            field["slug"] == "New Field" || !field["slug"]
              ? `cf_question_id_${field["id"]}` + ""
              : field["slug"];

        const originalValue = convertflow.person?.extra?.[slug_or_id];
        if (!originalValue) return;

        delete convertflow.person.extra[slug_or_id];
      });
    }

    payload.embed
      .querySelectorAll(
        `.cf-element[data-element-id="${payload.element.id}"] .cf-quiz-question-option`
      )
      .forEach((option) => {
        app.elements.elementTypes.quiz.adjustImagePlacement(payload, option);

        const field = element.fields[option.getAttribute("data-field-id")];
        let option_field_type = option.getAttribute("data-field-type");
        let existingValue;

        const slug_or_id =
          field["slug"] == "New Field" || !field["slug"]
            ? `cf_question_id_${field["id"]}` + ""
            : field["slug"];

        // does this person already have this field?
        if (
          convertflow.person !== undefined &&
          convertflow.person.extra !== undefined &&
          convertflow.person.extra !== null &&
          convertflow.person.extra[slug_or_id]
        ) {
          existingValue = convertflow.person.extra[slug_or_id];
        }

        // does this field have a value to pre-fill?
        if (
          field.value &&
          ["dropdown", "range"].includes(field.field_type) == false
        ) {
          existingValue = field.value;
        }

        // does the URL contain the value of a custom defined parameter to map to this field?
        if (field.url_params) {
          var custom_param = $cf(field.url_params.split(",")).map(function (
            i,
            custom_param_name
          ) {
            custom_param_name = custom_param_name.replace(" ", "");

            if (
              !custom_param &&
              custom_param_name &&
              app.helpers.getParameterByName(custom_param_name)
            ) {
              var custom_param = app.helpers.getParameterByName(
                custom_param_name
              );
              return custom_param;
            }
          })[0];

          if (custom_param) {
            existingValue = custom_param;
          }
        }

        // is there a URL parameter mapping directly to this fields dataname?
        if (app.helpers.getParameterByName(slug_or_id)) {
          existingValue = app.helpers.getParameterByName(slug_or_id);
        }

        const storeOnPayloadWith = (value, remove_on_reselect = true) => {
          app.elements.elementTypes.quiz.storeOnPayloadToSend(
            element,
            option.getAttribute("data-field-id"),
            value,
            payload,
            remove_on_reselect
          );
        };

        if (existingValue && element.options["prefill-fields"] !== "false") {
          let parsedValues;
          const isMultiSelect = field.field_type !== "radio" && (field.multi_select == true || field.field_type == "checkbox");
          if (isMultiSelect) {
            parsedValues = typeof existingValue == "string" ? existingValue.split(', ') : existingValue
          } else {
            parsedValues = [existingValue]
          }

          parsedValues.forEach((value) => {
            storeOnPayloadWith(value, false);

            if (option_field_type == "checkbox" || option_field_type == "radio") {
              option.querySelectorAll("input").forEach((input) => {
                if (input.value == value) {
                  input.checked = true;
                }
              });
            } else if (value == option.getAttribute("data-field-value")) {
              option.classList.add("cf-option-selected");
            }
          })
        }

        if (option_field_type == "range") {
          let range = option.querySelector(".cf-field-range-slider");
          var rangeStartValue = 0;
          var rangeValues = { min: 0, max: 1000 };
          var rangeStep = field.options["increment"]
            ? parseInt(field.options["increment"])
            : 1;
          var rangePips = false;
          var rangeSnap = false;
          var numberType = field.options["range-value-type"]
            ? field.options["range-value-type"]
            : "integer";

          // range input using min/max and step
          if (field.options["range-type"] !== "increments") {
            var rangeSliderMinimum = field.options["minimum"]
              ? parseInt(field.options["minimum"])
              : 0;
            var rangeSliderMaximum = field.options["maximum"]
              ? parseInt(field.options["maximum"])
              : 1000;
            rangeStartValue = rangeSliderMaximum * 0.25;

            rangeStartValue = [rangeStartValue];
            if (field.options["multiple-handles"] == "true") {
              rangeStartValue.push(rangeSliderMaximum * 0.75);
            }

            rangeValues = {
              min: rangeSliderMinimum,
              max: rangeSliderMaximum,
            };

            rangePips = false;

            if (field.options["range-labels"] == "true") {
              rangePips = {
                mode: "range",
                values: [rangeSliderMinimum, rangeSliderMaximum],
                density: 100,
              };

              var pipFormats = {};

              if (numberType == "currency") {
                rangePips["format"] = app.helpers.wNumb({
                  decimals: 2,
                  prefix: app.website.currency_character,
                });
              }

              if (numberType == "percentage") {
                rangePips["format"] = app.helpers.wNumb({
                  decimals: 0,
                  suffix: "%",
                });
              }

              if (field.options["range-label-minimum"]) {
                pipFormats[rangeSliderMinimum] =
                  field.options["range-label-minimum"];
              }

              if (field.options["range-label-maximum"]) {
                pipFormats[rangeSliderMaximum] =
                  field.options["range-label-maximum"];
              }

              if (Object.keys(pipFormats).length > 0) {
                rangePips["format"] = {
                  to: function (a) {
                    return pipFormats[a];
                  },
                };
              }
            }
          }

          // range input using field options
          if (field.options["range-type"] == "increments") {
            rangeSnap =
              field.options["limit-to-increments"] !== "false" ? true : false;

            if (rangeSnap == true) {
              rangeStep = undefined;
            }

            var values = [];
            if (field.field_options) {
              Object.values(field.field_options).forEach(function (
                field_option
              ) {
                if (app.helpers.isNumeric(field_option.value)) {
                  values.push(parseInt(field_option.value));
                }
              });
            }

            if (values) {
              var sortedValues = values.sort(function (a, b) {
                return a - b;
              });
              rangeStartValue = sortedValues[0];
              rangeSliderMaximum = sortedValues[sortedValues.length - 1];

              rangeValues = {
                min: rangeStartValue,
                max: sortedValues[sortedValues.length - 1],
              };

              rangeStartValue = [rangeStartValue];
              if (field.options["multiple-handles"] == "true") {
                rangeStartValue.push(rangeSliderMaximum * 0.75);
              }

              var numberOfPipsDividedBy100 = 100 / sortedValues.length;
              sortedValues
                .filter(function (option_value) {
                  if (
                    option_value !== rangeStartValue &&
                    option_value !== rangeSliderMaximum
                  ) {
                    return option_value;
                  }
                })
                .forEach(function (option_value, i) {
                  var percentage = numberOfPipsDividedBy100 * (i + 1);
                  rangeValues[percentage + "%"] = option_value;
                });

              rangePips = {
                mode: "values",
                values: values,
                density: values.length,
              };

              if (numberType == "currency") {
                rangePips["format"] = app.helpers.wNumb({
                  decimals: 2,
                  prefix: app.website.currency_character,
                });
              }

              if (numberType == "percentage") {
                rangePips["format"] = app.helpers.wNumb({
                  decimals: 0,
                  suffix: "%",
                });
              }
            }
          }

          if (range && range.noUiSlider) {
            range.noUiSlider.destroy();
          }

          app.helpers.noUiSlider.create(range, {
            tooltips: true,
            start: rangeStartValue,
            connect: true,
            range: rangeValues,
            step: rangeStep,
            pips: rangePips,
            snap: rangeSnap,
            format: {
              to: function (value) {
                return Math.round(value)
              },
              from: function (value) {
                return Math.round(value)
              },
            },
          });

          const rangeContainer = option;
          rangeContainer.timeoutId = undefined;

          range.noUiSlider.on("start", function (values) {
            $cf(rangeContainer).find(".noUi-tooltip").show();
            clearTimeout(rangeContainer.timeoutId);
          });

          range.noUiSlider.on("set", function (values) {
            $cf(rangeContainer).find(".noUi-tooltip").show();

            if (element.options["hide-next-button"] == "true") {
              payload.embed.querySelector(
                `#element${payload.element.id} .cf-quiz-next-button[data-field-id="${field.id}"]`
              ).style.display = "block";
            }
          });

          let is_initializing = true;

          range.noUiSlider.on("update", function (values) {
            var separator = " - ";
            var formattedNumbers = [];

            $cf(values).each(function (i, value) {
              if (numberType == "integer") {
                formattedNumbers.push(value);
              } else if (numberType == "percentage") {
                formattedNumbers.push(value + "%");
              } else if (numberType == "currency") {
                formattedNumbers.push(
                  app.website.currency_character + value + ".00"
                );
              }
            });

            var formattedValues = formattedNumbers.join(separator);

            if (!is_initializing) {
              app.elements.elementTypes.quiz.storeOnPayloadToSend(
                element,
                option.getAttribute("data-field-id"),
                formattedValues,
                payload
              );
            }

            clearTimeout(rangeContainer.timeoutId);
            rangeContainer.timeoutId = setTimeout(function () {
              $cf(rangeContainer).find(".noUi-tooltip").hide();
            }, 2000);
            is_initializing = false;
          });
        } else if (["text", "paragraph", "number"].includes(option_field_type)) {
          let input;

          if (option_field_type == "paragraph") input = option.querySelector("textarea");
          if (["text", "number"].includes(option_field_type)) input = option.querySelector("input");

          if (input) {
            input.oninput = () => {
              storeOnPayloadWith(input.value);
              app.elements.elementTypes.quiz.toggleButtons(payload);
            }

            input.addEventListener(
              "keypress",
              (e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  app.elements.elementTypes.quiz.goToNextQuestion(payload);
                }
              },
              false
            );
          }
        } else if (["dropdown", "radio", "checkbox"].includes(option_field_type)) {
          option.onchange = function (e) {
            e.preventDefault();

            app.elements.elementTypes.quiz.selectAnswer(
              option,
              payload,
              e.target.value
            );
          };
        } else {
          option.onclick = function (e) {
            e.preventDefault();
            app.elements.elementTypes.quiz.selectAnswer(option, payload);
          };
        }
      });

    let back_buttons = payload.embed.querySelectorAll(
      `#element${payload.element.id} .cf-quiz-back-button`
    );
    let next_buttons = payload.embed.querySelectorAll(
      `#element${payload.element.id} .cf-quiz-next-button`
    );

    Object.values(back_buttons).forEach((back_button) => {
      if (back_button) {
        back_button.onclick = function (e) {
          e.preventDefault();
          app.elements.elementTypes.quiz.goToPreviousQuestion(element, payload);
        };
      }
    });

    Object.values(next_buttons).forEach((next_button) => {
      if (next_button) {
        next_button.onclick = function (e) {
          e.preventDefault();
          app.elements.elementTypes.quiz.goToNextQuestion(payload);
        };
      }
    });

    app.elements.elementTypes.quiz.toggleButtons(payload);
  },

  storeOnPayloadToSend: (element, field_id, value, payload, remove_on_reselect = true) => {
    let field_object = payload.embed.querySelector(
      `.cf-quiz-question[data-field-id="${field_id}"]`
    );
    let slug = field_object.getAttribute("data-field-slug");
    let slug_or_id =
      slug == "New Field" || !slug
        ? `cf_question_id_${field_object.getAttribute("data-field-id")}`
        : slug;

    let is_text_type = ["text", "number", "paragraph"].includes(field_object.getAttribute("data-field-type"))
    let is_multi_select = field_object.getAttribute("data-multi-select") == "true" && is_text_type !== true
    let multi_select_limit = field_object.getAttribute(
      "data-multi-select-limit"
    );

    let answers_input = payload.embed.querySelector(
      `#cf-quiz-${element.id}-answers`
    );
    let parsed_input = answers_input.value
      ? JSON.parse(answers_input.value)
      : {};
    let value_to_send = parsed_input[slug_or_id] || [];

    if (is_multi_select !== true) {
      value_to_send = [value];
    } else if (
      parsed_input[slug_or_id] &&
      parsed_input[slug_or_id].includes(value) &&
      remove_on_reselect
    ) {
      value_to_send = parsed_input[slug_or_id].filter((item) => item !== value);
    } else if (
      !multi_select_limit ||
      !parsed_input[slug_or_id] ||
      parsed_input[slug_or_id].length < multi_select_limit
    ) {
      value_to_send.push(value);
    }

    parsed_input[slug_or_id] = [...new Set(value_to_send)];
    answers_input.value = JSON.stringify(parsed_input);

    return parsed_input;
  },

  setCurrentQuestion: (field, element, payload) => {
    payload.embed
      .querySelectorAll(
        `.cf-element[data-element-id="${element.id}"] .cf-quiz-question`
      )
      .forEach((question) => {
        question.style.display = "none";
      });

    let target_question = payload.embed.querySelector(
      `.cf-element[data-element-id="${element.id}"] .cf-quiz-question[data-field-id="${field?.id}"]`
    );
    if (target_question) {
      target_question.style.display = "block";
    }

    if (element.options["scroll-top-on-next-question"] !== "false") {
      let elementDiv = payload.embed.querySelector(`#element${element.id}`)
      if (elementDiv) {
        elementDiv.style.scrollMarginTop = "150px"; // Chrome, Firefox, Edge
        elementDiv.style.scrollSnapMarginTop = "150px"; // Safari
        elementDiv.scrollIntoView({ behavior: "instant" });
      }
    }

    let current_question_input = payload.embed.querySelector(
      `#cf-quiz-${element.id}-current-question`
    );
    current_question_input.value = JSON.stringify(field);

    app.elements.elementTypes.quiz.autoContinue(field, payload);
  },

  storeOnVariantCurrentAnswers: (payload, answers_mapping, sorted_fields) => {
    let mapping = [];

    Object.keys(answers_mapping).forEach((slug_or_id) => {
      let enriched_field;

      if (slug_or_id.includes("cf_question_id_")) {
        enriched_field = sorted_fields.find(
          (f) => f.id == slug_or_id.replace("cf_question_id_", "")
        );
      } else {
        enriched_field = sorted_fields.find((f) => f.slug == slug_or_id);
      }

      let enchired_answers_array = [];

      if (enriched_field) {
        answers_mapping[slug_or_id].forEach((answer) => {
          let enriched_answer = Object.values(
            enriched_field.field_options
          ).find((f) => f.value == answer);

          if (enriched_answer) {
            enchired_answers_array.push(enriched_answer);
          }
        });
      }

      mapping.push({
        ...enriched_field,
        answers: enchired_answers_array,
      });
    });

    payload.variant.current_answers = mapping;
  },

  selectAnswer: (field_option, payload, value = undefined, field_id = undefined) => {
    const element = payload.element;
    const field_option_id = field_id || field_option.getAttribute("data-field-id");
    const field_option_value = value !== undefined ? value : field_option.getAttribute("data-field-value");

    payload.embed.querySelectorAll(`.cf-quiz-question-option`).forEach((el) => {
      el.style.boxShadow = "";
      el.classList.remove("cf-quiz-required");
    });

    let answers_mapping = app.elements.elementTypes.quiz.storeOnPayloadToSend(
      element,
      field_option_id,
      field_option_value,
      payload
    );

    let sorted_fields = app.elements.elementTypes.quiz.sortedFields(element);
    let selected_field = Object.values(sorted_fields).find(
      (f) => f.id == field_option_id
    );

    let slug_or_id =
      selected_field["slug"] == "New Field" || !selected_field["slug"]
        ? `cf_question_id_${selected_field["id"]}`
        : selected_field["slug"];

    app.elements.elementTypes.quiz.storeOnVariantCurrentAnswers(
      payload,
      answers_mapping,
      sorted_fields
    );

    let is_multi_select = payload.embed
      .querySelector(
        `.cf-quiz-question[data-field-id="${selected_field["id"]}"]`
      )
      .getAttribute("data-multi-select");

    let current_index = app.elements.elementTypes.quiz.currentQuestionIndex(payload);
    app.elements.elementTypes.quiz.toggleButtons(
      payload,
      current_index + 1,
    );

    // Toggle selected class
    if (
      element.options["hide-next-button"] == "true" &&
      is_multi_select !== "true"
    ) {
      app.elements.elementTypes.quiz.goToNextQuestion(payload);
    } else {
      let reset_question_selector = `.cf-quiz-question[data-field-id="${selected_field["id"]}"] .cf-quiz-question-option`;

      payload.embed
        .querySelectorAll(
          `.cf-element[data-element-id="${element.id}"] ${reset_question_selector}`
        )
        .forEach((option) => {
          if (
            answers_mapping[slug_or_id].includes(
              option.getAttribute("data-field-value")
            )
          ) {
            option.classList.add("cf-option-selected");
          } else {
            option.classList.remove("cf-option-selected");
          }
        });
    }

    if (slug_or_id) {
      $cf('span[data-merge="' + slug_or_id + '"]').text(field_option_value);
    }
  },

  sortedFields: (element) => {
    let sorted_fields = [];

    if (!element?.fields) return sorted_fields;

    let sorted_fields_without_subfields = Object.values(element.fields)
      .filter((field) => !field.field_id)
      .sort((a, b) => a.position - b.position);

    Object.values(sorted_fields_without_subfields).forEach((field) => {
      sorted_fields.push(field);

      Object.values(element.fields)
        .filter((sub_field) => sub_field.field_id == field.id)
        .sort((a, b) => a.position - b.position)
        .forEach((sub_field) => {
          sorted_fields.push(sub_field);
        });
    });

    return sorted_fields;
  },

  currentQuestion: (payload) => {
    let current_question_input = payload.embed.querySelector(
      `#cf-quiz-${payload.element.id}-current-question`
    );

    return JSON.parse(current_question_input.value);
  },

  toggleButtons: (payload, target_question_position = null) => {
    if (!payload.embed) return;

    const element = payload.element;
    const sorted_fields = app.elements.elementTypes.quiz.sortedFields(element);

    if (!target_question_position) target_question_position = app.elements.elementTypes.quiz.currentQuestionIndex(payload) + 1;
    const current_question = sorted_fields[target_question_position-1];

    let showing_loader =
      current_question &&
      current_question.options["show-loading-spinner"] == "true" &&
      current_question.field_type == "empty";

    let back_buttons = payload.embed.querySelectorAll(
      `#element${payload.element.id} .cf-quiz-back-button`
    );
    let next_buttons = payload.embed.querySelectorAll(
      `#element${payload.element.id} .cf-quiz-next-button`
    );

    let is_text_type = ["text", "number", "paragraph"].includes(current_question?.field_type)
    let next_button_hidden = element.options["hide-next-button"] == "true"
    let back_button_not_hidden = element.options["hide-back-button"] !== "true";
    let next_button_not_hidden = !next_button_hidden

    let next_button_not_hidden_and_has_next_question =
      next_button_not_hidden && target_question_position > sorted_fields.length;

    if (back_button_not_hidden) {
      if (
        target_question_position > sorted_fields.length ||
        target_question_position == 1 ||
        showing_loader
      ) {
        Object.values(back_buttons).forEach((back_button) => {
          back_button.style.display = "none";
        });
      } else {
        Object.values(back_buttons).forEach((back_button) => {
          back_button.style.display = "block";
        });
      }
    }

    let answers_input = payload.embed.querySelector(
      `#cf-quiz-${element.id}-answers`
    );
    let parsed_input = answers_input.value
      ? JSON.parse(answers_input.value)
      : {};

    let is_multi_select =
      current_question && current_question.multi_select == true;

    const slug_or_id = current_question
      ? current_question.slug == "New Field" || !current_question.slug
        ? `cf_question_id_${current_question.id}` + ""
        : current_question.slug
      : "";

    let has_answered =
      (current_question && parsed_input[slug_or_id] && parsed_input[slug_or_id].filter(n => n).length > 0)

    if (
      next_button_not_hidden_and_has_next_question ||
      (next_button_hidden && current_question?.multi_select !== true && !has_answered) ||
      showing_loader
    ) {
      Object.values(next_buttons).forEach((next_button) => {
        next_button.style.display = "none";
      });
    } else if (!has_answered && element.options["hide-next-button"] == "true") {
      Object.values(next_buttons).forEach((next_button) => {
        next_button.style.display = "none";
      });
    } else if (
      has_answered ||
      (current_question && next_button_not_hidden) ||
      (current_question && current_question.field_type == "range")
    ) {
      Object.values(next_buttons).forEach((next_button) => {
        next_button.style.display = "block";
      });
    }
  },

  saveQuestionOnHistory: (element, current_question, payload) => {
    let history_input = payload.embed.querySelector(
      `#cf-quiz-${element.id}-history`
    );
    let parsed_history_input = history_input.value
      ? JSON.parse(history_input.value)
      : [];

    parsed_history_input.push(current_question);
    history_input.value = JSON.stringify(parsed_history_input);
  },

  goToNextQuestion: (payload) => {
    const element = payload.element;
    const variant = payload.variant;

    let current_index = app.elements.elementTypes.quiz.currentQuestionIndex(payload);
    let current_position = current_index + 1;
    let sorted_fields = app.elements.elementTypes.quiz.sortedFields(element);
    let target_field_id = sorted_fields[current_index]["id"];

    let current_question_input = payload.embed.querySelector(
      `#cf-quiz-${element.id}-current-question`
    )?.value;
    let parsed_current_question_input = JSON.parse(current_question_input);

    let answers_input = payload.embed.querySelector(
      `#cf-quiz-${element.id}-answers`
    );
    let parsed_input = answers_input.value
      ? JSON.parse(answers_input.value)
      : {};

    app.elements.elementTypes.quiz.storeAnswersToPerson(parsed_input);

    const slug_or_id =
      parsed_current_question_input["slug"] == "New Field" || !parsed_current_question_input["slug"]
        ? `cf_question_id_${parsed_current_question_input["id"]}` + ""
        : parsed_current_question_input["slug"];

    let answer = parsed_input[slug_or_id];
    let is_multi_select = sorted_fields[current_index].multi_select == true;

    let answer_object = Object.values(
      parsed_current_question_input.field_options
    ).find((f) => f.value == answer && answer[0]);

    // START CHECK NEXT QUESTION
    let action_group = Object.values(element.action_groups)
      .filter((f) => f.field_id == target_field_id)
      .find((ag) => {
        return (
          $cf.isEmptyObject(ag.conditions) == false &&
          app.campaigns.checkConditions(
            ag.conditions,
            window.convertflow.person,
            { variant: variant }
          ) == true
        );
      });

    let answer_selection_jump = answer_object && answer_object["jump_field_id"];
    let question_selection_jump =
      parsed_current_question_input["options"]["jump-field-id"];
    let next_question;

    const nextQuestionFromJumpCondition = (jump_condition) => {
      let next_question;

      if (jump_condition == "complete_quiz") {
        next_question = sorted_fields[-1];
        current_position = sorted_fields.length;
      } else if (jump_condition == "next_sub_question") {
        next_question = sorted_fields[current_index + 1];
      } else if (jump_condition) {
        next_question = Object.values(sorted_fields).find(
          (f) => f.id == jump_condition
        );
      }

      if (!next_question && jump_condition !== "complete_quiz") {
        next_question = sorted_fields[current_index + 1];
      }

      return next_question;
    };

    if (action_group) {
      next_question = nextQuestionFromJumpCondition(
        action_group.data["jump-field-id"]
      );
    } else if (!is_multi_select && answer_selection_jump) {
      next_question = nextQuestionFromJumpCondition(answer_selection_jump);
    } else if (question_selection_jump) {
      next_question = nextQuestionFromJumpCondition(question_selection_jump);
    } else {
      if (parsed_current_question_input["field_id"]) {
        let sorted_fields_without_subfields = sorted_fields.filter(
          (f) => !f.field_id
        );

        let parent_field_index = sorted_fields_without_subfields.findIndex(
          (f) => f.id == parsed_current_question_input["field_id"]
        );

        next_question = sorted_fields_without_subfields[parent_field_index + 1];
      } else {
        next_question = sorted_fields[current_index + 1];
      }
    }

    // END CHECK NEXT QUESTION

    let selector = "";
    let current_question = parsed_current_question_input;

    if (["number", "text"].includes(current_question.field_type)) {
      selector = "input";
    } else if (current_question.field_type == "dropdown") {
      selector = "select";
    } else if (current_question.field_type == "paragraph") {
      selector = "textarea";
    } else if (current_question.field_type == "range") {
      selector = ".noUi-base";
    }

    let is_invalid = "false";
    if (["number", "text"].includes(current_question.field_type)) {
      let question_field = payload.embed.querySelector(
        `.cf-quiz-question-option[data-field-id="${current_question["id"]}"] ${selector}`
      );

      is_invalid = question_field.getAttribute("aria-invalid");

      if (current_question.field_type == "number") {
        const minValue = parseInt(question_field.getAttribute("min"));
        const maxValue = parseInt(question_field.getAttribute("max"));

        const invalidMinValue = minValue && parseInt(question_field?.value) < minValue
        const invalidMaxValue = maxValue && parseInt(question_field?.value) > maxValue

        if (invalidMinValue || invalidMaxValue) is_invalid = "true";
      }
    } else if (current_question.field_type == "range") {
      is_invalid = parsed_input[slug_or_id] && parsed_input[slug_or_id].length > 0 ? "false" : "true";
    }

    let not_required = sorted_fields[current_index].required !== true;
    let is_not_finished = current_position <= sorted_fields.length;
    let has_answered =
      (answer && answer.filter(n => n).length > 0 && is_invalid !== "true") ||
      parsed_current_question_input["field_type"] == "empty";
    let can_go_to_next =
      is_not_finished && (has_answered || (not_required && is_invalid !== "true"));

    const canSendQuizResults = (has_answered || (not_required && is_invalid !== "true")) && !next_question

    if (can_go_to_next) {
      app.elements.elementTypes.quiz.setCurrentQuestion(
        next_question,
        element,
        payload
      );

      app.elements.elementTypes.quiz.saveQuestionOnHistory(
        element,
        parsed_current_question_input,
        payload
      );

      app.elements.elementTypes.quiz.toggleButtons(
        payload,
        current_position + 1
      );

      // Toggle selected options ( for duplicated slugs and keep the same behaviour as the parsed_input )

      if (next_question) {
        let slug_or_id =
          next_question.slug == "New Field" || !next_question.slug
            ? `cf_question_id_${next_question.id}` + ""
            : next_question.slug;

        payload.embed
          .querySelectorAll(
            `.cf-element[data-element-id="${element.id}"] .cf-quiz-question[data-field-id="${next_question.id}"] .cf-quiz-question-option`
          )
          .forEach((option) => {
            if (
              parsed_input[slug_or_id] &&
              parsed_input[slug_or_id].includes(
                option.getAttribute("data-field-value")
              )
            ) {
              option.classList.add("cf-option-selected");
            } else {
              option.classList.remove("cf-option-selected");
            }
          });
      }

      if (answer) {
        app.elements.elementTypes.quiz.trackSelectionEvent(
          payload,
          current_question,
          answer,
          canSendQuizResults
        );
      }
    } else {
      payload.embed
        .querySelectorAll(
          `.cf-quiz-question-option[data-field-id="${current_question["id"]}"] ${selector}`
        )
        .forEach((el) => {
          el.style.boxShadow = "0 0 5px 0 rgb(241 4 4)";
          el.classList.add("cf-quiz-required");
        });
    }

    if (canSendQuizResults) {
      app.elements.elementTypes.quiz.sendQuizResults(payload);
    }
  },

  resetQuestion: (payload, question) => {
    convertflow.person.extra = convertflow.person.extra || {};
    convertflow.person.extra[question.slug] = null;

    app.elements.elementTypes.quiz.selectAnswer(
      undefined,
      payload,
      "",
      question.id
    );
  },

  goToPreviousQuestion: (element, payload) => {
    let current_index = app.elements.elementTypes.quiz.currentQuestionIndex(payload);
    let history_input = payload.embed.querySelector(
      `#cf-quiz-${element.id}-history`
    );
    let parsed_history_input = history_input.value
      ? JSON.parse(history_input.value)
      : [];
    let previous_question =
      parsed_history_input[parsed_history_input.length - 1];

    app.elements.elementTypes.quiz.resetQuestion(payload, previous_question);

    app.elements.elementTypes.quiz.setCurrentQuestion(
      previous_question,
      element,
      payload
    );

    app.elements.elementTypes.quiz.toggleButtons(
      payload,
      current_index
    );

    history_input.value = JSON.stringify(parsed_history_input.slice(0, -1));

    app.elements.elementTypes.quiz.autoContinue(previous_question, payload);
  },

  sendQuizResults: (payload) => {
    const element = payload.element;
    const variant = payload.variant;

    let answers_input = payload.embed.querySelector(
      `#cf-quiz-${element.id}-answers`
    );

    if (element.options["confirmation-type"] == "message") {
      payload.embed.querySelector("#cf-quiz-confirmation-type").style.display =
        "block";
    }

    let answersUnformatted = JSON.parse(answers_input.value || "{}");

    const answersFormatted = app.elements.elementTypes.quiz.formatPayload(
      answersUnformatted
    );

    var cta = payload.cta;
    cta.payload = cta.payload || {};
    cta.payload = {...cta.payload, ...{
      'visitor_token': convertflow.person.visitor_token,
      'contactable_type': 'Cta',
      'contactable_id': payload.cta.id,
      'website_id': app.website.id,
      'variant_id': payload.variant.id,
      'step_id': payload.step.id,
      'element_id': payload.element.id,
      'extra': cta.payload['extra'] || {}
    }};

    cta.payload['extra'] = {...cta.payload['extra'], ...answersFormatted};

    if (
      convertflow.person.email !== undefined &&
      convertflow.person.email !== ""
    ) {
      cta.payload["email"] = convertflow.person.email;
    }

    if (
      convertflow.person.phone !== undefined &&
      convertflow.person.phone !== ""
    ) {
      cta.payload["phone"] = convertflow.person.phone;
    }

    $cf.each(["broadcast_id"], function (index, campaign_id) {
      if (convertflow.ctas[payload.cta.id][campaign_id] !== undefined) {
        cta.payload[campaign_id] = convertflow.ctas[payload.cta.id][campaign_id];
      }
    });

    Object.keys(answersUnformatted).forEach((custom_field) => {
      const custom_field_value = answersFormatted[custom_field];

      // update scores
      const score = app.ctas.incrementScore(
        payload.embed,
        payload.cta,
        payload.variant,
        payload.element,
        custom_field,
        custom_field_value
      );

      if (score !== undefined) {
        cta.payload["latest_score"] = score;

        if (payload.variant["score_field"]) {
          cta.payload["extra"][variant["score_field"]] = score;
        }
      }

      // update merge tags
      $cf('span[data-merge="' + custom_field + '"]').text(custom_field_value);

      // prefill fields
      $cf(".new_contact").each(function (index, contact_form) {
        $cf(contact_form)
          .find('input[name="contact[extra][' + custom_field + ']"]')
          .val(custom_field_value);
      });
    });

    var action_groups = [];
    if (element.action_groups !== undefined) {
      $cf.each(element.action_groups, function (i, action_group) {
        if (
          !action_group.field_id &&
          $cf.isEmptyObject(action_group.conditions) == false &&
          app.campaigns.checkConditions(
            action_group.conditions,
            window.convertflow.person,
            { variant: payload.variant }
          ) == true
        ) {
          action_groups.push(action_group.id);
        }
      });
    }

    if (action_groups.length > 0) {
      cta.payload["action_groups"] = action_groups.join();
    }

    if (app.live == true) {
      if (app.website.data["contact-processing"] !== "false") {
        $cf.ajax({
          type: "GET",
          url: app.api_contacts,
          data: {contact: cta.payload},
          contentType: "application/json; charset=utf-8",
          dataType: "JSONP",
          success: function (data, status, xhr) {},
        });
      }

      if (app.localstorage) {
        app.helpers.compressAndStore(app.local_person, convertflow.person);
      }
    }

    app.ctas.conversionLogic({
      embed: payload.embed,
      cta: payload.cta,
      variant: payload.variant,
      step: payload.step,
      section: payload.section,
      element: payload.element,
      submission_data: answersFormatted,
    });
  },

  currentQuestionIndex: (payload) => {
    const element = payload.element;
    let sorted_fields = app.elements.elementTypes.quiz.sortedFields(element);

    let current_question_input = payload.embed.querySelector(
      `#cf-quiz-${element.id}-current-question`
    ).value;
    let current_question_id = JSON.parse(current_question_input)["id"];

    return sorted_fields.findIndex((f) => f.id == current_question_id);
  },

  formatPayload: (payloadUnformatted) => {
    const formattedPayload = {};

    for (let key in payloadUnformatted) {
      if (payloadUnformatted.hasOwnProperty(key)) {
        if (Array.isArray(payloadUnformatted[key])) {
          formattedPayload[key] = payloadUnformatted[key].join(", ");
        } else {
          formattedPayload[key] = payloadUnformatted[key];
        }
      }
    }

    return formattedPayload;
  },

  trackSelectionEvent: (payload, field, answer, quiz_finished = false) => {
    if (
      [
        "survey",
        "image",
        "color",
        "emoji",
        "icon",
        "letter",
        "dropdown",
        "radio",
        "checkbox",
      ].includes(field.field_type) ||
      (field.field_type == "range" &&
        field.options["range-type"] == "increments")
    ) {
      let event = {
        event_type: "Selection",
        variant_id: payload.variant.id,
        step_id: payload.step.id,
        element_id: payload.element.id,
        fields: {
          extra: {},
        },
      };

      const slug_or_id =
        field.slug == "New Field" || !field.slug
          ? `cf_question_id_${field.id}` + ""
          : field.slug;
      event.fields.extra[slug_or_id] = answer.join(", ");

      if (app.live == true) {
        app.ctas.track(event, payload.cta, payload.element);
      }

      if (quiz_finished == false) {
        app.visitors.fireEvent("cfAnswer", {
          cta: payload.cta,
          variant: payload.variant,
          step: payload.step,
          element: payload.element,
          fields: event.fields
        });
      }
    }
  },

  reset: function (payload) {
    const variant = payload.variant;

    $cf.each(variant.steps, function(step_id, step) {
      $cf.each(step.sections, function(section_id, section) {
        $cf.each(section.elements, function(element_id, element) {
          if (element.element_type == 'quiz') {
            let quiz_first_question = Object.values(element.fields).filter((field) => !field.field_id).sort(function(a, b) { return a.position - b.position })[0];
            let payload_clone = { ...payload, element, variant, step, section }

            app.elements.elementTypes.quiz.setCurrentQuestion(quiz_first_question, element, payload_clone)
            app.elements.elementTypes.quiz.toggleButtons(payload_clone, 1);
          }
        })
      })
    })
  },

  storeAnswersToPerson: function (answers_mapping) {
    Object.keys(answers_mapping).forEach((slug) => {
      let answer = answers_mapping[slug];

      if (answer) {
        convertflow.person.extra = convertflow.person.extra || {};
        convertflow.person.extra[slug] = answer.join(", ");

        if (app.localstorage) {
          app.helpers.compressAndStore(app.local_person, convertflow.person);
        }
      }
    })
  }
};

app.elements.elementTypes.timer = {
  handleLoad: (payload) => {
    const cta = payload.cta;
    const step = payload.step;
    const section = payload.section;
    const element = payload.element;
    const embed = payload.embed;

    var clock = $cf(embed).find('.cf-timer[data-id="' + element.id + '"]')[0];

    app.helpers.onVisible(clock, () => {
      if (payload.element.timeinterval) {
        clearInterval(payload.element.timeinterval);
      }
      var deadline;
      var broadcast = app.website.broadcasts[cta.broadcast_id];

      if (element.options['timer-type'] == 'static' && element.options['timer-broadcast-date'] == "true" && broadcast && broadcast.quick == false && broadcast.timeframe == true && broadcast.range_end) {
        deadline = new Date(parseInt(broadcast.range_end));

      } else if (element.options['timer-type'] == 'static') {
        if (element.options['timer-date-formatted']) {
          deadline = new Date(Date.parse(element.options['timer-date-formatted']));;
        } else {
          deadline = new Date();
        }

      } else if (element.options['timer-type'] == 'daily') {
        var hours = element.options['timer-hours'] || element.options['timer-hours'] == 0 ? parseInt(element.options['timer-hours']) : 23;
        var minutes = element.options['timer-minutes'] || element.options['timer-minutes'] == 0 ? parseInt(element.options['timer-minutes']) : 59;
        var seconds = element.options['timer-seconds'] || element.options['timer-seconds'] == 0 ? parseInt(element.options['timer-seconds']) : 59;
        deadline = new Date(new Date().setHours(hours, minutes, seconds, 999))

      } else if (element.options['timer-type'] == 'relative') {
        var d = new Date();
        var timerDays = (element.options['timer-days'] || element.options['timer-days'] == 0 ? parseInt(element.options['timer-days']) : 0);
        var timerHours = (element.options['timer-hours'] || element.options['timer-hours'] == 0 ? parseInt(element.options['timer-hours']) : 23);
        var timerMinutes = (element.options['timer-minutes'] || element.options['timer-minutes'] == 0 ? parseInt(element.options['timer-minutes']) : 59);
        var timerSeconds = (element.options['timer-seconds'] || element.options['timer-seconds'] == 0 ? parseInt(element.options['timer-seconds']) : 59);
        var days = d.getDate() + timerDays;
        var hours = d.getHours() + timerHours;
        var minutes = d.getMinutes() + timerMinutes;
        var seconds = d.getSeconds() + timerSeconds;

        if (false == (timerDays == 0 && timerHours == 0 && timerMinutes == 0 && timerSeconds == 0)) {
          deadline = new Date(new Date(new Date().setDate(days)).setHours(hours, minutes, seconds, 999));
        } else {
          deadline = new Date(new Date(new Date().setDate(-2)).setHours(0, 0, 0, 999));
        }
      }

      if (clock && deadline) {
        if (deadline > new Date()) {
          app.elements.elementTypes.timer.initializeClock({
            clock: clock,
            endtime: deadline,
            ...payload
          });
          clock.setAttribute('data-loaded', 'true');
        } else if (element.options["timer-end-action"] == "message") {
          $cf(clock).find(".cf-timer-inner").hide();
          $cf(clock).find(".cf-timer-message").show();
        } else if (element.options["timer-end-action"] == "hide") {
          $cf(clock).hide();
        }
      }
    });
  },

  getTimeRemaining: (endtime) => {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  },

  reset: function (payload) {
    const cta = payload.cta;
    const variant = payload.variant;
    const embed = payload.embed;

    $cf.each(variant.steps, function(step_id, step) {
      $cf.each(step.sections, function(section_id, section) {
        $cf.each(section.elements, function(element_id, element) {
          if (element.element_type == 'timer') {
            let container;
            if (embed) {
              container = embed.jquery ? embed[0] : embed;
            } else {
              container = document;
            }
            let clock = container ? container.querySelector(`.cf-element[data-element-id="${element.id}"] .cf-timer`) : null;

            if (clock && clock.getAttribute('data-loaded') === 'true') {
              app.elements.elementTypes.timer.handleLoad({
                cta: cta,
                variant: variant,
                step: step,
                section: section,
                element: element,
                embed: embed
              });
            }
          }
        });
      });
    });
  },

  initializeClock: (payload) => {
    const step = payload.step;
    const section = payload.section;
    const element = payload.element;
    const embed = payload.embed;
    const clock = payload.clock;
    const endtime = payload.endtime;
    const variant = payload.variant;
    const cta = payload.cta;

    var daysSpan = clock.querySelector(
      ".cf-timer-unit[data-unit-type='days'] .cf-timer-unit-number"
    );
    var hoursSpan = clock.querySelector(
      ".cf-timer-unit[data-unit-type='hours'] .cf-timer-unit-number"
    );
    var minutesSpan = clock.querySelector(
      ".cf-timer-unit[data-unit-type='minutes'] .cf-timer-unit-number"
    );
    var secondsSpan = clock.querySelector(
      ".cf-timer-unit[data-unit-type='seconds'] .cf-timer-unit-number"
    );

    var updateClock = function() {
      var t = app.elements.elementTypes.timer.getTimeRemaining(endtime);

      if (daysSpan) {
        var daysDiv = clock.querySelector(
          ".cf-timer-unit[data-unit-type='days']"
        );
        daysSpan.innerHTML = t.days > 0 ? t.days : 0;

        if (t.days == 0) {
          daysDiv.classList.add("cf-timer-hidden");
        } else {
          daysDiv.classList.remove("cf-timer-hidden");
        }
      }
      if (hoursSpan) {
        var hoursDiv = clock.querySelector(
          ".cf-timer-unit[data-unit-type='hours']"
        );
        hoursSpan.innerHTML = t.hours > 0 ? t.hours : 0;

        if (t.days == 0 && t.hours == 0) {
          hoursDiv.classList.add("cf-timer-hidden");
        } else {
          hoursDiv.classList.remove("cf-timer-hidden");
        }
      }
      if (minutesSpan) {
        var minutesDiv = clock.querySelector(
          ".cf-timer-unit[data-unit-type='minutes']"
        );
        minutesSpan.innerHTML = t.minutes > 0 ? t.minutes : 0;

        if (t.days == 0 && t.hours == 0 && t.minutes == 0) {
          minutesDiv.classList.add("cf-timer-hidden");
        } else {
          minutesDiv.classList.remove("cf-timer-hidden");
        }
      }
      if (secondsSpan) {
        var secondsDiv = clock.querySelector(
          ".cf-timer-unit[data-unit-type='seconds']"
        );
        secondsSpan.innerHTML = t.seconds > 0 ? t.seconds : 0;
      }

      if (t.total <= 0) {
        clearInterval(payload.element.timeinterval);

        if (element.options["timer-end-action"] == "message") {
          $cf(clock).find(".cf-timer-inner").hide();
          $cf(clock).find(".cf-timer-message").show();

        } else if (element.options["timer-end-action"] == "hide") {
          $cf(clock).hide();

        } else if (element.options["timer-end-action"] == "step" && element.options["timer-end-step"] && variant.steps[element.options["timer-end-step"]]) {

          if ($cf('.cf-step[data-step-id="' + step.id + '"]').is(':visible') == true) {
            app.ctas.performConfirmationActionStep({
              embed: embed,
              cta: cta,
              variant: variant,
              step: step,
              section: section,
              element: element,
              step_override: element.options["timer-end-step"]
            });
          }
        }
      }
    }

    updateClock();
    payload.element.timeinterval = setInterval(updateClock, 1000);
  }
};

app.elements.elementTypes.conditional_row = {
  handleLoad: (payload) => {
    const tabsDiv = document.querySelector(
      `.cf-element[data-element-id="${payload.element.id}"]`
    );

    if (payload.embed.jquery) {
      payload.embed = $cf(payload.embed)[0];
    }

    app.helpers.onVisible(tabsDiv, () => {
      app.elements.elementTypes.conditional_row.initialize(payload);
    });
  },
  initialize: (payload) => {
    const element = payload.element;
    const variant = payload.variant;

    let matched_conditions = [];

    if (element.content_toggle_items !== undefined) {
      $cf.each(element.content_toggle_items, function (i, toggle_item) {
        if (
          $cf.isEmptyObject(toggle_item.conditions) == false &&
          app.campaigns.checkConditions(
            toggle_item.conditions,
            window.convertflow.person,
            { variant: variant }
          ) == true
        ) {
          toggle_item.status = true;
          matched_conditions.push(toggle_item.id);
        }
      });
    }

    if (matched_conditions.length > 0) {
      const true_content_toggle_item = Object.values(
        element.content_toggle_items
      ).find((toggle_item) => toggle_item.id === matched_conditions[0]);

      const elementDiv = payload.embed.querySelector(`.cf-conditional-row-element[data-element-id="${element.id}"]`)
      const matchedRowDiv = elementDiv.querySelector(
        `.cf-conditional-row-section-box[data-conditional-row-id="${true_content_toggle_item.id}"]`
      );

      matchedRowDiv.style.display = "block";

      // Update condition status on live script to display it correctly based on status == true on admin widget
      if (true_content_toggle_item && typeof app.admin.render == "function") {
        app.admin.render(app.website);
      }
    }
  },
};

app.elements.elementTypes.logo = {
  handleLoad: (payload) => {
    const logoDiv = document.querySelector(
      `.cf-element[data-element-id="${payload.element.id}"]`
    );

    app.elements.elementTypes.logo.initialize(payload, logoDiv);
  },
  initialize: (payload, logoDiv) => {
    const logoLink = payload.element.options["logo-link"] ? payload.element.options["logo-link"] : payload.variant.options["logo-link"] ? payload.variant.options["logo-link"] : app.website?.data?.["logo-link"] ?  app.website?.data?.["logo-link"] : null;
    const logoLinkNewTab = payload.element.options["logo-link-new-tab"] ? payload.element.options["logo-link-new-tab"] : payload.variant.options["logo-link-new-tab"] ? payload.variant.options["logo-link-new-tab"] : null;

    if (logoLink) {
      const logoLinkElement = logoDiv.querySelector("a");

      if (logoLinkElement) {
        logoLinkElement.href = logoLink.indexOf("http") > -1 ? logoLink : `http://${logoLink}`;
        logoLinkElement.target = logoLinkNewTab ? "_blank" : "_self";
      }
    }

    const logoImage = logoDiv.querySelector("img");

    if (logoImage) {
      const logoStyle = logoImage.getAttribute("data-style");
      const logoFormat = logoImage.getAttribute("data-format");

      if (logoFormat == "image" && logoStyle == "dark" && app.website.data["logo-dark"] && logoImage.src !== app.website.data["logo-dark"]) {
        logoImage.src = app.website.data["logo-dark"];
      } else if (logoFormat == "image" && logoStyle == "light" && app.website.data["logo-light"] && logoImage.src !== app.website.data["logo-light"]) {
        logoImage.src = app.website.data["logo-light"];
      } else if (logoFormat == "icon" && logoStyle == "dark" && app.website.data["logo-icon-dark"] && logoImage.src !== app.website.data["logo-icon-dark"]) {
        logoImage.src = app.website.data["logo-icon-dark"];
      } else if (logoFormat == "icon" && logoStyle == "light" && app.website.data["logo-icon-light"] && logoImage.src !== app.website.data["logo-icon-light"]) {
        logoImage.src = app.website.data["logo-icon-light"];
      }
    }
  },
};

    app.sections.handleLoad = (payload) => {
  const section = payload.section;

  Object.values(section.elements).forEach((element) => {
    app.elements.handleLoad({ element: element, ...payload });
  });
};

    app.steps.handleLoad = (payload) => {
  const step = payload.step;

  Object.values(step.sections).forEach((section) => {
    app.sections.handleLoad({ section: section, ...payload });
  });
};

    app.variants.handleLoad = (payload) => {
  const cta = payload.cta;
  const variant = payload.variant;

  Object.values(variant.steps).forEach((step) => {
    app.steps.handleLoad({ step: step, ...payload });
  });
};


      // creates new UID

app.visitors.generateUID = function() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}



// returns uid

app.visitors.uid = function(override) {
  var cookie = 'cf_' + app.website.id + '_id';

  // new visitor without cookie yet? cookie them
  var uid = app.helpers.getCookie(cookie);
  if (app.helpers.getCookie(cookie) == undefined || override == true) {
    var uid = app.visitors.generateUID()
    app.helpers.setCookie(cookie, uid, 20 * 365 * 24 * 60);
  }


  return uid
}





// returns email address from the URL

app.visitors.urlIdentification = function() {
  var email = undefined;
  if (app.website.url_identification == 'true') {
    $cf.each(['cf_email', 'email', 'Email', 'EmailAddress', 'email_address', 'emailaddresss', 'inf_field_Email'], function(index, key) {
      var parameter = app.helpers.getParameterByName(key)
      if (parameter !== "") {
        email = parameter
        return false
      }
    })
  }
  return email
}




// creates a new visitor record (async)

app.visitors.create = function() {

  // create visitor session
  var session_time = new Date().toISOString();

  var visitor = {
    website_id: app.website.id,
    visitor_token: app.visitors.uid(),
    contact_id: null,
    landing_page: window.location.href,
    platform: convertflow.platform || "Web",
    data: {}
  }

  if (document.referrer !== "" && document.referrer.includes(location.host) == false) {
    visitor.referral_source = document.referrer
  }

  // POST visitor data to backend
  var payload = {
    visitor: visitor,
    new: true,
    utms: {}
  }

  $cf.each(['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'], function(i, utm_param) {
    var utm = app.helpers.getParameterByName(utm_param)
    if (utm) {
      payload.utms[utm_param] = utm
    }
  })

  $cf.ajax({
    type: "GET",
    url: app.api_visitors + app.visitors.uid(),
    contentType: "application/json; charset=utf-8",
    data: payload,
    dataType: "JSONP",
    complete: function(data,status,xhr)  {
      window.convertflow.person.last_requested = $cf.now();

      if (data && data.responseJSON && (data.responseJSON['logged_in'] == true || "false" == "true")) {
        app.helpers.setCookie('cf_' + app.website.id + '_logged_in', 'true', 60 * 24 * 60);

        if (window.convertflow.readyFired == true) {
          app.admin.initialize(convertflow.app.website);
        }
      }
    }
  });

  visitor.last_requested = $cf.now();
  window.convertflow.person = visitor;
  var continue_without_response = true;

  var integrations_to_sync = app.visitors.integrationsToSync(true);
  if (integrations_to_sync && integrations_to_sync.length > 0) {
    var continue_without_response = false;
    integrations_to_sync.forEach(function(integration_to_sync) {
      app.visitors.targetingSync(integration_to_sync);
    })
  }

  if (continue_without_response == true) {
    app.visitors.initialize(visitor);
  }

}


// gets current visitor record

app.visitors.get = function() {

  $cf.ajax({
    type: "GET",
    url: app.api_visitors + app.visitors.uid(),
    contentType: "application/json; charset=utf-8",
    dataType: "JSONP",
    timeout: 5000,
    success: function(person,status,xhr) {
      // mark time of localstorage
      person.last_requested = $cf.now();
      app.helpers.setCookie(app.visitors.expiration_cookie, person.last_requested);
      var person = app.visitors.appendLocalContactFields(person);

      window.convertflow.person = person;
      
      // run campaigns once all targeting data is ready
      var continue_without_response = true;

      // fetch integration targeting data for enabled integrations
      var integrations_to_sync = app.visitors.integrationsToSync(true);
      if (integrations_to_sync && integrations_to_sync.length > 0) {
        var continue_without_response = false;
        integrations_to_sync.forEach(function(integration_to_sync) {
          app.visitors.targetingSync(integration_to_sync);
        })
      }

      if (continue_without_response == true) {
        app.visitors.initialize(person);
      }
    },
    error: function () {
      // track as new visitor
      app.visitors.uid(true);
      app.visitors.create();
    }
  });
}


// loops through website integrations to check for presence of targeting sync parameters, or if current targeting data is more than 30 minutes old
app.visitors.integrationsToSync = function(clear_params) {
  var integrations_to_sync = [];

  $cf.each(app.website.integrations, function(i, integration) {
    if (integration.targeting_sync_id_type) {
      var current_targeting_data = window.convertflow.person && window.convertflow.person.data[integration.integration_type.toLowerCase()] && window.convertflow.person.data[integration.integration_type.toLowerCase()]['last_sync'] ? window.convertflow.person.data[integration.integration_type.toLowerCase()] : undefined;
      var can_sync_with_param = (app.helpers.getParameterByName(integration.targeting_sync_parameter) && !current_targeting_data);
      // var can_sync_with_tracking = integration.targeting_sync_tracking && (integration.targeting_sync_tracking['type'] == 'cookie' && app.helpers.getCookie(integration.targeting_sync_tracking['identifier'])) || (integration.targeting_sync_tracking['type'] == 'variable' && app.helpers.nestedGet(window, integration.targeting_sync_tracking['identifier']));
      var can_sync_with_existing_data = (integration.targeting_sync_id_type == 'email' && !current_targeting_data && window.convertflow.person && window.convertflow.person.email) || (integration.targeting_sync_id_type == 'phone' && !current_targeting_data && window.convertflow.person && window.convertflow.person.phone) || (current_targeting_data && (current_targeting_data['id'] || integration.targeting_sync_id_type == 'email' || integration.targeting_sync_id_type == 'phone') && current_targeting_data['last_sync'] && app.helpers.parseDate(current_targeting_data['last_sync']) <= (Date.parse(new Date()) - (30 * 60 * 1000)));

      if (can_sync_with_param || can_sync_with_existing_data) {
        if (can_sync_with_param) {
          var contact_id = app.helpers.getParameterByName(integration.targeting_sync_parameter);

          if (clear_params == true) {
            app.visitors.removeTargetingSyncParameter(integration.targeting_sync_parameter);
          }
        }
        // if (can_sync_with_tracking) {
        //   var contact_id = app.helpers.nestedGet(window, integration.targeting_sync_tracking['identifier']);
        // }

        if (can_sync_with_existing_data) {
          if (current_targeting_data && current_targeting_data['id']) {
            var contact_id = current_targeting_data['id'];
          }

          if (integration.targeting_sync_id_type == 'email' && window.convertflow.person.email) {
            var contact_id = window.convertflow.person.email;
          }

          if (integration.targeting_sync_id_type == 'phone' && window.convertflow.person.phone) {
            var contact_id = window.convertflow.person.phone;
          }
        }

        if (contact_id) {
          integrations_to_sync.push({
            integration_id: integration.id,
            integration_type: integration.integration_type,
            contact_id: contact_id,
            website_id: app.website.id
          })
        }
      }
    }
  })
  return integrations_to_sync
}



// removes targeting sync parameter from URL
app.visitors.removeTargetingSyncParameter = function(param) {
  if (location.search.indexOf(param + '=') !== -1) {
    var replace = '';
    try {
      var url = new URL(location);
      url.searchParams.delete(param);
      replace = url.href;
    } catch (ex) {
      var regExp = new RegExp('[?&]' + param + '=.*$');
      replace = location.search.replace(regExp, '');
      replace = location.pathname + replace + location.hash;
    }
    history.replaceState(null, '', replace);
  }
}



// can we use local person data?

app.visitors.canUseLocal = function(localperson) {
  var conclusion = false;
  var targetingSync = app.visitors.integrationsToSync(false);

  var local_storage_can_be_used = (localperson !== null && app.helpers.getCookie(app.visitors.localstorage_prevent) !== 'true');
  var website_id_matches = (local_storage_can_be_used && localperson.website_id !== undefined && localperson.website_id == app.website.id);
  var localperson_was_requested_recently = (local_storage_can_be_used && localperson.last_requested !== undefined && localperson.last_requested >= Date.parse(new Date()) - (30 * 60 * 1000));
  var localperson_has_not_expired = local_storage_can_be_used && (app.helpers.getCookie(app.visitors.expiration_cookie) == undefined || parseInt(app.helpers.getCookie(app.visitors.expiration_cookie)) <= localperson.last_requested);
  var localperson_last_update_matches = local_storage_can_be_used && (app.helpers.getCookie(app.visitors.localstorage_last_update)) == localperson.last_updated;
  var targeting_sync_is_not_running = (!targetingSync || targetingSync.length == 0);
  var not_waiting_on_contact_processing = (local_storage_can_be_used && (localperson.email !== undefined && localperson.person_type !== 'Contact') == false);

  if (local_storage_can_be_used &&
      website_id_matches &&
      localperson_was_requested_recently &&
      targeting_sync_is_not_running &&
      localperson_has_not_expired &&
      localperson_last_update_matches &&
      not_waiting_on_contact_processing
    ) {
    var conclusion = true;
  }
  return conclusion;
}



// if visitor has submitted an email and their contact record hasn't processed yet
// appends current submitted contact fields to visitor database response for localstorage

app.visitors.appendLocalContactFields = function(person) {
  var localperson = app.helpers.decompressAndGet(app.local_person)
  if (person.person_type == 'Visitor' && localperson && localperson.email && localperson.person_type !== 'Contact') {
    var contactFields = ['email', 'name', 'last_name', 'phone', 'website', 'company_name', 'company_title', 'city', 'country', 'address', 'state', 'zip_code', 'extra']
    contactFields.forEach(function(field) {
      if (field !== 'extra') {
        if (!person[field] && localperson[field]) {
          person[field] = localperson[field]
        }
      } else {
        if (!person['extra'] && localperson['extra']) {
          person['extra'] = localperson['extra']
        } else if (person['extra'] && localperson['extra']) {
          Object.keys(localperson['extra']).forEach(function(custom_field) {
            if (!person['extra'][custom_field]) {
              person['extra'][custom_field] = localperson['extra'][custom_field];
            }
          })
        }
      }
    })
  }
  return person;
}




// returns data used for tracked visit events

app.visitors.visitEvent = function() {
  var visit = {
    event_type: 'Visit',
    visitor_token: app.visitors.uid(),
    url: window.location.href,
    website_id: app.website.id,
    data: {
      title: document.title
    }
  }
  if ($cf.isEmptyObject(app.helpers.getQueryString()) == false && app.website.data["contact-processing"] !== "false") {
    visit.data = $cf.extend({}, visit.data, {
      params: app.helpers.getQueryString()
    })
  }
  return visit
}



// track an event

app.visitors.trackEvent = function(event, skip_database_storage) {

  // check if person is registered in tracking database, send event in 500 milliseconds
  if (convertflow.person && window.convertflow.readyFired == true) {
    event.website_id = app.website.id
    event.visitor_token = app.visitors.uid()

    if (convertflow.person !== undefined) {
      var id = convertflow.person.id_bigint || convertflow.person.id;

      if (convertflow.person.person_type == 'Visitor') {
        event.visitor_id = id;
        event.visitor_id_bigint = id;
      }
      if (convertflow.person.person_type == 'Contact') {
        event.contact_id = id;
      }
    }



    if ($cf.inArray(event.event_type, ['View', 'Complete', 'Completion']) > -1) {
      app.visitors.addEngagementToHistory(event);
    }

    app.actions.mapEventToActions(event);


    var payload = {};
    if (event.action_groups) {
      payload['action_groups'] = event.action_groups
      delete event.action_groups
    }
    payload['event'] = event

    if (app.helpers.canStringify() && skip_database_storage !== true) {
      if (payload['event']['visitor_token']) {
        $cf.ajax({
          type: "GET",
          url: app.api_events,
          contentType: "application/json; charset=utf-8",
          data: payload,
          dataType: "JSONP",
          complete: function(data,status,xhr)  {
          }
        });
      } else {
        throw "ConvertFlow event lacks visitor_token"
      }
    }
  } else if (window.convertflow.readyFired == undefined) {

    setTimeout(function() {
      app.visitors.trackEvent(event, skip_database_storage);
    }, 500)
  }
}





// identifies the visitor as contact if
// email is in URL, or starts targeting

app.visitors.initialize = function(data) {

  // register visit if not already stored
  if (!data.visit_already_stored) {
    var data = app.visitors.addPageViewToHistory(data);
  } else {
    delete data.visit_already_stored;
  }

  window.convertflow.person = data;
  app.helpers.compressAndStore(app.local_person, data)

  var visit_event = app.visitors.visitEvent();
  app.visitors.trackEvent(visit_event);


  var continue_without_enrichment = true;
  var enrichment_integrations = app.visitors.enabledEnrichmentIntegrations();

  if (enrichment_integrations && enrichment_integrations.length > 0) {
    var continue_without_enrichment = false;
    $cf.each(enrichment_integrations, function(i, integration_type) {
      app.visitors.enrichmentIntegration(integration_type);
    });
  }

  if (convertflow.person.email === undefined && app.visitors.urlIdentification() !== undefined) {
    var continue_without_enrichment = false;
    convertflow.identify({email: app.visitors.urlIdentification()});
  }

  if (continue_without_enrichment == true) {
    app.visitors.ready();
  }
}



// determines if the page has integration data accessible

app.visitors.enabledEnrichmentIntegrations = function() {
  var response = [];

  // add geolocation enrichment if data is needed
  if (app.geotargeting == true && (!convertflow.person.data || !convertflow.person.data.location)) {
    response.push('geolocation');
  }

  $cf.each(app.website.integrations, function(i, integration) {
    if ($cf.inArray(integration.integration_type, ['Shopify', 'Clearbit']) > -1) {
      response.push(integration.integration_type);
    }
  });
  return response;
}




// perform ajax call to enrichment integration endpoint

app.visitors.enrichmentIntegration = function(integration_type) {

  // geolocation

  if (integration_type == 'geolocation') {
    app.visitors.enrichment_status['geolocation'] = 'in progress';

    $cf.ajax({
      type: "GET",
      url: 'https://convertflow.co/geolocation/',
      dataType: "JSONP",
      success: function(data,status,xhr) {
        app.visitors.enrichment_status['geolocation'] = 'success';
        var visitor = window.convertflow.person;
        visitor.data = visitor.data || {};

        var location = {
          latitude: data['lat'],
          longitude: data['lon'],
          city: data['city'],
          regionName: data['regionName'],
          region: data['region'],
          country: data['country'],
          countryCode: data['countryCode'],
          timezone: data['timezone'],
          zip: data['zip']
        }

        visitor.data.location = location;

        visitor.city = location.city;
        visitor.country = location.country;
        visitor.state = location.regionName;
        visitor.zip_code = location.zip;
        app.helpers.compressAndStore(app.local_person, visitor)

        if (Object.values(app.visitors.enrichment_status).includes('in progress') == false) {
          app.visitors.ready();
        }
      },
      timeout: 1000,
      error: function() {
        app.visitors.enrichment_status['geolocation'] = 'failed';

        if (Object.values(app.visitors.enrichment_status).includes('in progress') == false) {
          app.visitors.ready();
        }
      }
    });
  }


  // shopify

  if (integration_type == 'Shopify') {

    if (window.Shopify && typeof window.Shopify == 'object') {
      app.visitors.enrichment_status['Shopify'] = 'in progress';

      if (
        window.ShopifyAnalytics &&
        ShopifyAnalytics.meta &&
        ShopifyAnalytics.meta.page &&
        ShopifyAnalytics.meta.page.pageType == "product"
      ) {
        const shopifyProductHandle = [
          window.location.href.split("/").pop().split("?")[0].split('#')[0],
        ];

        $cf.getJSON(
          window.Shopify.routes.root + `products/${shopifyProductHandle}.js`,
          function (shopifyProduct) {
            window.convertflow.product = {
              id: shopifyProduct.id,
              title: shopifyProduct.title,
              type: shopifyProduct.type,
              price: shopifyProduct.price,
              compare_at_price: shopifyProduct.compare_at_price,
              description: shopifyProduct.description,
            };
          }
        );
      }

      $cf.get("/cart.js", function(data) {
        app.visitors.enrichment_status['Shopify'] = 'success';
        app.visitors.updateShopifyCart(data);

        if (Object.values(app.visitors.enrichment_status).includes('in progress') == false) {
          app.visitors.ready();
        }
      }, 'json').fail(function() {
        app.visitors.enrichment_status['Shopify'] = 'failed';

        if (Object.values(app.visitors.enrichment_status).includes('in progress') == false) {
          app.visitors.ready();
        }
      });

      app.visitors.shopifyCartListener();

    } else if (Object.values(app.visitors.enrichment_status).includes('in progress') == false)  {
      app.visitors.ready();
    };

  }
};


app.visitors.updateShopifyCart = function(cart) {
  let integration = $cf.map(app.website.integrations, function (
    integration
  ) {
    if (integration.integration_type == "Shopify") return integration;
  })[0];

  if (integration) {
    integration['cart'] = cart;
  }

  if (cart) {
    window.convertflow.cart = window.convertflow.cart || {};

    if (cart.total_price || cart.total_price == 0) {
      window.convertflow.cart["value"] = cart.original_total_price / 100;
    }

    if (cart.item_count || cart.item_count == 0) {
      window.convertflow.cart["count"] = cart.item_count;
    }
  }
}



app.visitors.shopifyCartListener = function() {

  const triggerEvent = ((eventName) => {
    fetch(window.Shopify.routes.root + 'cart.js').then((response) => response.json()).then(cart => {
      app.visitors.updateShopifyCart(cart);
      
      if (eventName) {
        try {
          window.dispatchEvent(new CustomEvent(eventName, { detail: false }));
        } catch (error) {
          var evt = document.createEvent("CustomEvent");
          evt.initCustomEvent(eventName, undefined, undefined, undefined);
          window.dispatchEvent(evt);
        };
      }
    });
  });

  $cf(document).ajaxComplete(function(event, request, settings) {
    const addToCart = settings.url.indexOf("/cart/add.js") > -1;
    const updateCart = settings.url.indexOf("/cart/update.js") > -1;
    const changeCart = settings.url.indexOf("/cart/change.js") > -1;
    const clearCart = settings.url.indexOf("/cart/clear.js") > -1;

    if (addToCart || updateCart || changeCart || clearCart) {
      const eventName = addToCart ? 'cfAddToCartShopify' : updateCart ? 'cfUpdateCartShopify' : changeCart ? 'cfChangeCartShopify' : clearCart ? 'cfClearCartShopify' : null;

      triggerEvent(eventName);
      console.log(`ajax cart ${eventName}`);
    }
  });

  (function (ns, fetch) {
    ns.fetch = function() {
      const response = fetch.apply(this, arguments);
      response.then(res => {
        const addToCart = res.url.indexOf("/cart/add") > -1;
        const updateCart = res.url.indexOf("/cart/update") > -1;
        const changeCart = res.url.indexOf("/cart/change") > -1;
        const clearCart = res.url.indexOf("/cart/clear") > -1;

        if (addToCart || updateCart || changeCart || clearCart) {
          const eventName = addToCart ? 'cfAddToCartShopify' : updateCart ? 'cfUpdateCartShopify' : changeCart ? 'cfChangeCartShopify' : clearCart ? 'cfClearCartShopify' : null;
          
          triggerEvent(eventName);
          console.log(`fetch cart ${eventName}`);
        }
      });
      return response
    }
  }(window, window.fetch));
}



// adds current page and url parameters to history for targeting
// (reflects changes to visitor database happening in background)

app.visitors.addPageViewToHistory = function(data) {
  var person = data;
  var url = app.helpers.cleanURL(window.location.href);
  var time_now = app.helpers.timeNow();
  var fallback_session = {
    pages: 0,
    sessions: 1,
    current: time_now
  };

  if (person.data.visits == undefined) {
    var history = {
      pages: 0
    }
  } else {
    var history = person.data.visits;
  }

  if (history[url] == undefined) {
    history[url] = 0;
  }

  if (history.session == undefined) {
    history.session = fallback_session;
  }

  if (app.helpers.parseDate(history.session.current) <= (Date.parse(new Date()) - (30 * 60 * 1000))) {
    history.session.previous = history.session.current;
    history.session.current = time_now;
  }

  history.pages = history.pages + 1;
  history.session.pages = history.session.pages + 1;
  history[url] = history[url] + 1;
  history.session[url] = (history.session[url] || 0) + 1;
  person.data.visits = history;

  var params_current = app.helpers.getQueryString()
  var params_new = person.data.params || {}

  $cf.each(params_current, function(key, value) {
    params_new[key] = value
  })
  person.data.params = params_new

  return person;
}




app.visitors.addEngagementToHistory = function(event) {
  var person = window.convertflow.person;
  person.data = person.data || {};
  person.data['campaigns'] = person.data['campaigns'] || {};

  if (event.contactable_id) {
    person.data.campaigns['ctas'] = person.data.campaigns['ctas'] || {};
    var cta_object = person.data['campaigns']['ctas'][event.contactable_id] || {};

    // increment cta total stats
    var cta_stats = cta_object['stats'] || {};
    cta_stats[event.event_type] = cta_stats[event.event_type] || 0;
    cta_stats[event.event_type] += 1;
    cta_object['stats'] = cta_stats;

    if (event.variant_id) {
      var variant_id = event.variant_id;
      cta_object['variants'] = cta_object['variants'] || {};
      var variant_object = cta_object['variants'][variant_id] || {};

      // increment variant total stats
      var variant_stats = variant_object['stats'] || {};
      variant_stats[event.event_type] = variant_stats[event.event_type] || 0;
      variant_stats[event.event_type] += 1;
      variant_object['stats'] = variant_stats;

      if (event.step_id) {
        var step_id = event.step_id;
        variant_object['steps'] = variant_object['steps'] || {};
        var step_object = variant_object['steps'][step_id] || {};

        // increment step total stats
        var step_stats = step_object['stats'] || {};
        step_stats[event.event_type] = step_stats[event.event_type] || 0;
        step_stats[event.event_type] += 1;
        step_object['stats'] = step_stats;

        if (event.element_id) {
          var element_id = event.element_id;
          step_object['elements'] = step_object['elements'] || {};
          var element_object = step_object['elements'][element_id] || {};

          // incremenet element total stats
          var element_stats = element_object['stats'] || {};
          element_stats[event.event_type] = element_stats[event.event_type] = 0;
          element_stats[event.event_type] += 1;
          element_object['stats'] = element_stats;

          step_object['elements'][element_id] = element_object;
        }
        variant_object['steps'][step_id] = step_object;
      }
      cta_object['variants'][variant_id] = variant_object;
    }
    person.data.campaigns.ctas[event.contactable_id] = cta_object;
  }

  app.helpers.compressAndStore(app.local_person, person);
}



// fire the cfReady event
app.visitors.ready = function() {
  app.campaigns.initialize(app.website);

  window.convertflow.readyFired = true;

  if (app.helpers.getCookie('cf_' + app.website.id + '_logged_in') == 'true') {
    app.admin.initialize(convertflow.app.website);
  }

  var trigger_ready = function() {
    $cf(document).trigger("cfReady");
    try {
      window.dispatchEvent(new CustomEvent('cfReady', { detail: false }));
    } catch (error) {
      var evt = document.createEvent("CustomEvent");
      evt.initCustomEvent('cfReady', undefined, undefined, undefined);
      window.dispatchEvent(evt);
    };
  }

  if (document.readyState == 'complete') {
    trigger_ready()
  } else {
    $cf(document).ready(function() {
      trigger_ready()
    })
  }
}




// get contact data from integrated ESP/CRM
app.visitors.targetingSync = function(payload) {
  var integration = app.website.integrations[payload.integration_id];

  if (integration) {
    var integration_type_key = payload.integration_type.toLowerCase();
    app.visitors.targeting_sync_status[integration_type_key] = false;
    var targeting_sync_url = `https://convertflow.co/targeting-sync/?environment=production&version=${integration.targeting_sync_version}`;

    $cf.ajax({
      type: "GET",
      url: targeting_sync_url,
      data: payload,
      dataType: "JSONP",
      timeout: 5000,
      success: function(data,status,xhr)  {
        app.visitors.targeting_sync_status[integration_type_key] = true;
        convertflow.person.data[integration_type_key] = convertflow.person.data[integration_type_key] || {};
        convertflow.person.data[integration_type_key]['last_sync'] = app.helpers.timeNow();
        convertflow.person.last_requested = undefined;

        if (data && $cf.isEmptyObject(data.contact) == false) {
          // send targeting sync reponse to database
          var targeting_data = Object.assign({}, data);
          if (payload.contact_id) {
            targeting_data['id'] = payload.contact_id;
          }
          app.visitors.storeTargetingData(integration_type_key, targeting_data);

          // add targeting sync response data to convertflow.person
          Object.keys(data).forEach(function(integration_data_key) {
            if (integration_data_key == 'contact') {
              Object.keys(data[integration_data_key]).forEach(function(contact_attribute) {
                if (!convertflow.person[contact_attribute]) {
                  if (contact_attribute == 'email') {
                    convertflow.identify({email: data[integration_data_key]['email'], override: true})
                  }
                  convertflow.person[contact_attribute] = data[integration_data_key][contact_attribute];
                }
              });
            }

            if (integration_data_key !== 'contact') {
              convertflow.person.data[integration_type_key][integration_data_key] = data[integration_data_key];
            }
          })
        }

        // now run campaigns
        convertflow.person.visit_already_stored = true;
        if (!Object.values(app.visitors.targeting_sync_status).includes(false) && Object.values(app.visitors.enrichment_status).includes('in progress') == false) {
          app.visitors.initialize(convertflow.person);
        }

      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        console.log(integration_type_key + ' timed out!')
        app.visitors.targeting_sync_status[integration_type_key] = true;
        app.visitors.initialize(convertflow.person);
      }
    });
  }
}





// save targeting sync response to database
app.visitors.storeTargetingData = function(integration_type, response) {
  var targeting_data = response;

  if (targeting_data.contact) {
    delete targeting_data.contact;
  }

  var payload = {
    visitor_token: app.visitors.uid(),
    targeting_data: JSON.stringify(targeting_data),
    integration_type: integration_type
  }

  $cf.ajax({
    type: "POST",
    url: app.api_visitors + app.visitors.uid() + '/targeting_data',
    data: payload,
    dataType: "json",
    success: function(data,status,xhr)  {
      convertflow.person.last_requested = $cf.now();
    }
  });
}



// looks for integration UID cookies

app.visitors.trackingUIDs = function() {
  $cf(window).on("load", function() {
    setTimeout(function() {

      // loops through possible integration UIDs (to be refactored)
      var tracking_ids = {}






      if (Object.keys(tracking_ids).length !== 0) {

        var endpoint = app.api_visitors + app.visitors.uid() + "/uids";

        $cf.ajax({
          type: "POST",
          url: endpoint,
          data: {
            visitor_token: app.visitors.uid(),
            uids: tracking_ids
          },
          dataType: "json"
        });
      }
    }, 1000)

  })
}



// looks for form submissions,
// sends relevant data to API

app.visitors.trackSubmits = function() {

  if (window.convertflow && convertflow.app.website.form_tracking == 'true' && app.website.data["contact-processing"] !== "false" && ($cf.isEmptyObject(convertflow.app.website.conditions) || app.campaigns.checkConditions(convertflow.app.website.conditions) == true)) {

    $cf(document).on("submit", "form", function (e) {
      var form = e.target;

      if ($cf(form).hasClass('new_contact') == false) {
        var fields = {
          firstname: 'name',
          first_name: 'name',
          lastname: 'last_name',
          last_name: 'last_name',
          email: 'email',
          Email: 'email',
          phone: 'phone',
          website: 'url'
        }
        var submission = {}
        $cf.each(fields, function(k, v) {
          if (submission[v] == undefined) {
            if ($cf(form).find('input[type="' + k + '"]').length > 0 && $cf(form).find('input[type="' + k + '"]').attr('type') !== 'hidden') {
              submission[v] = $cf(form).find('input[type="' + k + '"]').val()
            } else if ($cf(form).find('[name*="' + k + '"]').length > 0 && $cf(form).find('[name*="' + k + '"]').attr('name') !== 'authenticity_token' && $cf(form).find('[name*="' + k + '"]').attr('type') !== 'hidden') {
              submission[v] = $cf(form).find('[name*="' + k + '"]').val()
            } else if ($cf(form).find('[id*="' + k + '"]').length > 0 && $cf(form).find('[id*="' + k + '"]').attr('type') !== 'hidden') {
              submission[v] = $cf(form).find('[id*="' + k + '"]').val()
            } else if ($cf(form).find('[placeholder*="' + k + '"]').length > 0 && $cf(form).find('[placeholder*="' + k + '"]').attr('type') !== 'hidden') {
              submission[v] = $cf(form).find('[placeholder*="' + k + '"]').val()
            }
          }
        });
        var filter = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if (submission['email'] !== undefined && filter.test(submission['email'])) {
          convertflow.person.email = submission['email'];
          submission['source_url'] = app.helpers.cleanURL(window.location.href);

          var event = {
            event_type: 'Submission',
            visitor_token: app.visitors.uid(),
            website_id: app.website.id,
            url: app.helpers.cleanURL(window.location.href),
            data: submission
          }

          $cf.ajax({
            type: "GET",
            url: app.api_events,
            data: {
              event: event,
              cf2: true
            },
            dataType: "JSONP"
          });

          if (app.localstorage) {
            app.helpers.compressAndStore(app.local_person, convertflow.person);
          }

        }
      }
    });
  }
}




// fire JS events for integrations

app.visitors.fireEvent = function(event_type, payload) {

  // define event payload
  var cta;
  var event = {}

  if (payload.cta) {
    cta = payload.cta;

    event.cta = {
      name: payload.cta.name,
      cta_type: payload.cta.cta_type,
      id: payload.cta.id
    }
  }

  if (payload.variant) {
    event.variant = payload.variant.variation
  }

  if (payload.step) {
    event.step = payload.step.position;
    event.step_name = payload.step.options && payload.step.options['name'] ? payload.step.options['name'] : null;
  }

  if (payload.element) {
    event.element = payload.element.element_type

    if (payload.element.element_type == 'button') {
      event['button_text'] = $cf(payload.element.html).text();
    };

    if (payload.element.element_type == 'form') {
      event['button_text'] = $cf(".new_contact[data-element-id='" + payload.element.id + "']").find('.cf-form-button .cf-button').first().text();
    };

    if (payload.element.element_type == 'survey') {
      var field_object = payload.element.fields[Object.keys(payload.element.fields)[0]];

      if (field_object.slug) {
        event['button_text'] = payload.fields[field_object.slug];
      }
    };
  }

  if (payload.fields) {
    event.fields = payload.fields
  }

  if (payload.product) {
    event.product = payload.product;
  }

  // send to javascript api
  $cf(document).trigger(event_type, [event]);
  try {
    window.dispatchEvent(new CustomEvent(event_type, {detail: event}));
  } catch (error) {
    var evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event_type, undefined, undefined, event);
    window.dispatchEvent(evt);
  };

  convertflow.events = convertflow.events || [];
  convertflow.events.push(event);


  // send events to Segment integration
  if (typeof window.analytics == 'object' && typeof analytics.track == 'function') {
    var integration = $cf.map(app.website.integrations, function(integration) {if (integration.integration_type == 'Segment' && integration.segment_events == true) return integration})[0];

    if (integration) {

      var segment_event;
      var segment_properties = {};

      if (event_type == 'cfView') {
        var segment_event = 'CTA Viewed';
      }

      if (event_type == 'cfSubmit' && payload.element && payload.element.element_type == 'form') {
        var segment_event = 'CTA Form Submitted';
      }

      if (event_type == 'cfSubmit' && payload.element && payload.element.element_type == 'survey') {
        var segment_event = 'CTA Survey Submitted';
      }

      if (event_type == 'cfConversion' && payload.element && payload.element.element_type == 'button') {
        var segment_event = 'CTA Button Clicked';
      }

      if (event_type == 'cfCompletion') {
        var segment_event = 'CTA Completed';
      }

      if (event_type == 'cfClose') {
        var segment_event = 'CTA Closed';
      }

      if (event_type == 'cfAddToCart') {
        var segment_event = 'Add To Cart';
      }

      if (payload.cta) {
        segment_properties['cta_name'] = payload.cta.name;
        segment_properties['cta_type'] = payload.cta.cta_type;
        segment_properties['cta_id'] = payload.cta.id;
      }

      if (payload.variant) {
        segment_properties['cta_variant'] = payload.variant.variation;
      }

      if (payload.step) {
        segment_properties['cta_step'] = payload.step.position;
        segment_properties['cta_step_name'] = payload.step.options && payload.step.options['name'] ? payload.step.options['name'] : null;
      }

      if (payload.element) {
        segment_properties['element'] = payload.element.element_type;

        if (payload.element.element_type == 'button') {
          segment_properties['button_text'] = $cf(payload.element.html).text();
        };

        if (payload.element.element_type == 'form') {
          segment_properties['button_text'] = $cf(".new_contact[data-element-id='" + payload.element.id + "']").find('.cf-form-button .cf-button').first().text();
        };

        if (payload.element.element_type == 'survey') {
          var field_object = payload.element.fields[Object.keys(payload.element.fields)[0]];

          if (field_object.slug) {
            segment_properties['button_text'] = payload.fields[field_object.slug];
          }
        };
      }

      if (payload.product) {
        segment_properties['product_id'] = payload.product.product_id;
        segment_properties['product_name'] = payload.product.product_name;
        segment_properties['product_variant'] = payload.product.product_variant;
        segment_properties['product_price'] = payload.product.product_price;
      }

      if (segment_event && $cf.isEmptyObject(segment_properties) == false) {
        analytics.track(segment_event, segment_properties);
      }

      if (event_type == 'cfSubmit' && payload.fields) {
        var segment_traits = {};

        var officialFields = ['email', 'name', 'last_name', 'phone', 'url', 'company_name', 'company_title', 'city', 'state', 'zip_code', 'country', 'address', 'privacy_consent', 'marketing_consent', 'sms_consent'];

        var traitMap = {
          'email': 'email',
          'name' : 'firstName',
          'last_name': 'lastName',
          'phone': 'phone',
          'url': 'website',
          'company_title': 'title',
          'privacy_consent': 'privacy_consent',
          'marketing_consent': 'marketing_consent',
          'sms_consent': 'sms_consent'
        };

        $cf.each(traitMap, function(k, v) {
          if (payload.fields[k]) {
            segment_traits[v] = payload.fields[k];
          }
        });

        $cf.each(payload.fields, function(k, v) {
          if ($cf.inArray(k, officialFields) == -1) {
            var formatted_key = k.replace(/-/g, '_').replace(/–/g, '_').replace(/ /g, '_');
            segment_traits[formatted_key] = v;
          }
        });

        var locationTraits = {};
        if (payload.fields.city) locationTraits['city'] = payload.fields.city;
        if (payload.fields.state) locationTraits['state'] = payload.fields.state;
        if (payload.fields.zip_code) locationTraits['postalCode'] = payload.fields.zip_code;
        if (payload.fields.country) locationTraits['country'] = payload.fields.country;
        if (payload.fields.address) locationTraits['street'] = payload.fields.address;
        if ($cf.isEmptyObject(locationTraits) == false) segment_traits['address'] = locationTraits;
        var companyTraits = {};
        if (payload.fields.company_name) companyTraits['name'] = payload.fields.company_name;
        if ($cf.isEmptyObject(companyTraits) == false) segment_traits['company'] = companyTraits;
        analytics.identify(segment_traits);
      };
    }
  };
  // send to google analytics
  var google_analytics_category = app.website.data['google-analytics-category'] ? app.website.data['google-analytics-category'] : 'ConvertFlow';
  var event_names = {
    'cfView': 'View',
    'cfConversion': 'Conversion',
    'cfCompletion': 'Completion',
    'cfClose': 'Close',
    'cfAddToCart': 'Add To Cart'
  }
  var name = ""
  if (cta) {
    if (cta.cta_type == 'inline') {
      name = name + 'Embedded – '
    } else {
      var capitalized = cta.cta_type.charAt(0).toUpperCase() + cta.cta_type.slice(1)
      name = name + capitalized + ' (' + cta.id + ')' + ' – ';
    }
  }

  if (cta.name !== undefined && cta.name !== "") {
    name = name + cta.name;
  } else {
    name = name + 'Cta ' + cta.id
  }

  if (payload.variant) {
    name = name + ' (Variant ' + payload.variant.variation.toUpperCase() + ')';

    if (payload.step) {
      name = name + ' – Step ' + payload.step.position;
    }
  }

  if (payload.product && payload.product.product_name) {
    name = name + ` - ${payload.product.product_name}`;
  }

  // send events to Google analytics unless toggled off
  if (app.website.data['google-analytics-track'] !== 'false') {

    // send to gtag
    if (window.gtag !== undefined && event_names[event_type] !== undefined) {
      var ga_event = {
        'event_category': google_analytics_category,
        'event_label': name
      }

      if (event_type == 'cfView') {
        ga_event['non_interaction'] = true
      }

      if (event_type == 'cfAddToCart' && payload.product && payload.product.product_price) {
        ga_event['value'] = payload.product.product_price;
      }

      if (app.website.data["google-analytics-tracking-id"]) {
        ga_event["send_to"] =
          app.website.data["google-analytics-tracking-id"];
      }

      gtag('event', event_names[event_type], ga_event);
    } else if (window.ga !== undefined && window.ga.getAll !== undefined && event_names[event_type] !== undefined) {
      // track legacy google analytics, if no gtag or if google analytics tracking id specified
      var ga_event = {
        'hitType': 'event',
        'eventCategory': google_analytics_category,
        'eventAction': event_names[event_type],
        'eventLabel': name
      }
      if (['cfView', 'cfClose'].includes(event_type)) {
        ga_event['nonInteraction'] = true
      }

      if (event_type == 'cfAddToCart' && payload.product && payload.product.product_price) {
        ga_event['eventValue'] = payload.product.product_price;
      }

      $cf.each(ga.getAll(), function(index, tracker) {
        var trackingId = tracker.get('trackingId');
        // track if event not yet sent to tracking id. also check if GA events are limited to specific tracking id
        if (trackingId && !ga_event[trackingId] && (!app.website.data['google-analytics-tracking-id'] || app.website.data['google-analytics-tracking-id'] == trackingId)) {
          ga(tracker.get('name') + '.send', ga_event);
          ga_event[trackingId] = true;
        }
      })
    }
  }
  // send to dataLayer
  if (app.website.data['google-analytics-data-layer'] == 'true' && event_names[event_type] !== undefined) {
    var ga_event = {
      'event': google_analytics_category,
      'eventCategory': google_analytics_category,
      'eventAction': event_names[event_type],
      'eventLabel': name
    }
    if (['cfView', 'cfClose'].includes(event_type)) {
      ga_event['nonInteraction'] = true
    }

    if (event_type == 'cfAddToCart' && payload.product && payload.product.product_price) {
      ga_event['eventValue'] = payload.product.product_price;
    }

    event['event'] = event_type;
    event['ga_event'] = ga_event;
    if (payload.element && payload.element.options['confirmation-type'] == 'redirect' && payload.element.options['redirect-url']) {
      event['redirect_url'] = app.helpers.cleanURL(payload.element.options['redirect-url']);
    }
    if (app.website.data['google-analytics-data-layer-variable'] && window[app.website.data['google-analytics-data-layer-variable']]) {
      var dataLayerObject = window[app.website.data['google-analytics-data-layer-variable']];
      try {
        dataLayerObject.push(event);
      } catch(e) {}
    } else {
      window.dataLayer = window.dataLayer || [];
      dataLayer.push(event);
    }
  }
  // send to klaviyo
  if (event_type == 'cfSubmit' && convertflow.person.email && $cf('script[src*="klaviyo"]').length > 0) {
    var _learnq = window._learnq || [];
    _learnq.push(['identify', {
      '$email' : convertflow.person.email
    }]);
  }

}

    app.admin = {
  actionGroupDiv: function (website, cta, variant, step, action_group) {
    let label;

    if (action_group.step_id) {
      label = `Skip Logic - Jump to step ${step.position}`;
    }

    if (!action_group.step_id) {
      label = `Conditional Action: `;

      if (action_group.data["confirmation-type"] == "redirect") {
        label += `Redirect to a URL`;
      }

      if (action_group.data["confirmation-type"] == "step") {
        const stepJumpedTo = variant.steps[action_group.data["redirect-step"]];
        label += `Jump to funnel step`;

        if (stepJumpedTo) {
          label += ` ${stepJumpedTo.position} "${
            stepJumpedTo.options["name"] || ""
          }"`;
        }
      }

      if (action_group.data["confirmation-type"] == "message") {
        label += `Display a message`;
      }

      if (action_group.data["confirmation-type"] == "cta") {
        label += `Trigger a campaign`;
      }

      if (action_group.data["confirmation-type"] == "sms") {
        label += `Subscribe via SMS code`;
      }
    }

    const actionGroupCollapseDiv = app.admin.nestedKeyValueDiv(
      label,
      (actionGroupCollapseDiv) => {
        const actionGroupDiv = $cf(
          `<div class="cf-test-action-group" data-id="${action_group.id}"></div>`
        );

        if (action_group.conditions) {
          const operatorsDiv = app.admin.operatorsDiv((operatorDiv) => {
            app.admin.appendConditionsToOperatorsDiv(
              operatorDiv,
              action_group.conditions
            );
            return operatorDiv;
          });

          $cf(actionGroupDiv).append(operatorsDiv);
        }

        $cf(actionGroupCollapseDiv)
          .children(".cf-campaign-collapse")
          .append(actionGroupDiv);
        return actionGroupCollapseDiv;
      },
      action_group.status == true
    );

    return actionGroupCollapseDiv;
  },

  adminIsLoggedIn: function () {
    return (
      (window.convertflow.person &&
        convertflow.person.logged_in + "" == "true") ||
      app.helpers.getCookie("cf_" + app.website.id + "_logged_in") == "true"
    );
  },

  appendConditionsToOperatorsDiv: function (operatorsDiv, conditions) {
    Object.values(conditions).forEach((condition) => {
      const conditionDiv = app.admin.conditionDiv(condition);
      var operatorWrapper = $cf(operatorsDiv).children(
        `.cf-conditions-operator[data-operator="${condition.operator}"]`
      );
      $cf(operatorWrapper).find(".cf-conditions").append(conditionDiv);
      $cf(operatorWrapper).css("display", "block");
    });
  },

  broadcastDiv: function (website, broadcast) {
    const broadcastName = `${
      broadcast.name ? broadcast.name : `Broadcast ${broadcast.id}`
    }`;
    const link = `https://app.convertflow.com/websites/${website.id}/broadcasts/${broadcast.id}/edit`;

    const divToReturn = app.admin.nestedKeyValueDiv(
      broadcastName,
      (collapseDiv) => {
        const broadcastDiv = $cf(
          `<div class="cf-test-broadcast" data-id="${broadcast.id}"></div>`
        );

        if (
          broadcast.timeframe &&
          broadcast.range_start &&
          broadcast.range_end
        ) {
          const rangeStart =
            parseInt(broadcast.range_start) == NaN
              ? new Date(broadcast.range_start)
              : new Date(parseInt(broadcast.range_start));
          const hasStarted = $cf.now() > broadcast.range_start;

          const rangeEnd =
            parseInt(broadcast.range_end) == NaN
              ? new Date(broadcast.range_end)
              : new Date(parseInt(broadcast.range_end));
          const hasEnded = $cf.now() > broadcast.range_end;

          $cf(broadcastDiv).append(`
            <div class="cf-conditions-operator cf-info" style="display: ${
              hasEnded ? "none" : "block"
            } !important;">
              ${app.admin.conditionStatusImg(hasStarted)} <p><em>${
            hasStarted ? "Broadcast has started" : "Broadcast has not started"
          }</em></p>
              <p><br>${rangeStart}</p>
            </div>
            <div class="cf-conditions-operator cf-info" style="display: ${
              hasStarted ? "block" : "none"
            } !important">
            ${app.admin.conditionStatusImg(hasEnded == false)} <p><em>${
            hasEnded ? "Broadcast has ended" : "Broadcast has NOT ended"
          }</em></p>
              <p><br>${rangeEnd}</p>
            </div>
          `);
        }

        const broadcastConditions = Object.values(broadcast.conditions).filter(
          (condition) => !condition.cta_id
        );

        const operatorsDiv = app.admin.operatorsDiv((operatorDiv) => {
          app.admin.appendConditionsToOperatorsDiv(
            operatorDiv,
            broadcastConditions
          );
          return operatorDiv;
        });

        $cf(broadcastDiv).append(operatorsDiv);

        if (Object.keys(broadcast.ctas).length > 0) {
          Object.values(broadcast.ctas).forEach((cta_id) => {
            const cta = app.website.ctas[cta_id];
            const ctaConditions = Object.values(broadcast.conditions).filter(
              (condition) => condition.cta_id == cta.id
            );
            const ctaDiv = app.admin.ctaDiv(
              website,
              cta,
              ctaConditions,
              cta.status == true
            );
            $cf(broadcastDiv).append(ctaDiv);
          });
        }

        $cf(collapseDiv).children(".cf-campaign-collapse").append(broadcastDiv);
        return collapseDiv;
      },
      broadcast.status == true,
      link
    );

    return divToReturn;
  },

  conditionDiv: function (condition) {
    const conditionResult = condition[condition.operator];
    let conditionDiv = $cf(
      `<div class="cf-test-condition" data-id="${condition.id}">
        <p>
          ${app.admin.conditionStatusImg(conditionResult)} ${
        condition.condition_type
      } - ${condition.value || ""}
        </p>
      </div>`
    );
    return conditionDiv;
  },

  conditionStatusImg: function (status) {
    const imgSrc = status
      ? "https://assets.convertflow.com/images/condition-success.png"
      : "https://assets.convertflow.com/images/condition-fail.png";
    return `<img class="cf-test-condition-status" src="${imgSrc}" />`;
  },

  countURLs: function (arr) {
    const urlCounts = {};
    for (let i = 0; i < arr.length; i++) {
      if (urlCounts[arr[i].url]) {
        urlCounts[arr[i].url]++;
      } else {
        urlCounts[arr[i].url] = 1;
      }
    }
    return urlCounts;
  },

  ctaDiv: function (website, cta, conditions, status) {
    cta = convertflow.ctas[cta.id] ? convertflow.ctas[cta.id] : cta;
    const ctaName = `${cta.cta_type == "inline" ? "Embed" : cta.cta_type} - ${
      cta.name ? cta.name : `CTA ${cta.id}`
    }`;
    const link = `https://app.convertflow.com/websites/${website.id}/cta/${cta.id}`;

    const divToReturn = app.admin.nestedKeyValueDiv(
      ctaName,
      (collapseDiv) => {
        const ctaDiv = $cf(
          `<div class="cf-test-cta" data-id="${cta.id}"></div>`
        );

        if (conditions) {
          const operatorsDiv = app.admin.operatorsDiv((operatorDiv) => {
            app.admin.appendConditionsToOperatorsDiv(operatorDiv, conditions);
            return operatorDiv;
          });

          $cf(ctaDiv).append(operatorsDiv);
        }

        let variant;
        if (cta.variants) {
          variant = Object.values(cta.variants).filter(
            (variant) => variant.winner
          )[0];
        }

        if (variant) {
          $cf(ctaDiv).append(
            app.admin.keyValueDiv(
              "Variant",
              `${variant.variation} ${variant.name ? `- ${variant.name}` : ""}`
            )
          );
        }

        if (
          variant &&
          status &&
          status == true &&
          ["overlay", "hook", "bar"].includes(cta.cta_type)
        ) {
          $cf(ctaDiv).append(
            app.admin.keyValueDiv(
              "Trigger type",
              variant.options["trigger_type"]
            )
          );

          $cf(ctaDiv).append(
            app.admin.keyValueDiv("Triggered", cta.fired == true ? "Yes" : "No")
          );

          if (variant.options["trigger_type"] == "scroll") {
            $cf(ctaDiv).append(
              app.admin.keyValueDiv(
                "Triggers at",
                `${variant.options["scroll"] || 0}%`
              )
            );
          }

          if (variant.options["trigger_type"] == "delayed") {
            $cf(ctaDiv).append(
              app.admin.keyValueDiv(
                "Triggers after",
                `${variant.options["delay"] || 0} seconds`
              )
            );
          }
        }

        if (variant) {
          Object.values(variant.steps).forEach((step) => {
            const stepDiv = app.admin.stepDiv(website, cta, variant, step);
            $cf(ctaDiv).append(stepDiv);
          });
        }

        $cf(collapseDiv).children(".cf-campaign-collapse").append(ctaDiv);
        return collapseDiv;
      },
      status,
      link
    );

    return divToReturn;
  },

  handleCloseClick: function (website) {
    $cf("#cfTestStart, .cf-test-close")
      .off("click")
      .on("click", function () {
        $cf("#cfTestStart").toggleClass("cf-active");
        $cf("#cfTestWidget").toggleClass("cf-active");
      });
  },

  handleRefreshClick: function (website) {
    $cf("#cfTestRefresh")
      .off("click")
      .on("click", function (e) {
        e.preventDefault();
        convertflow.app.helpers.deleteCookie(`cf_${website.id}_id`);
        convertflow.app.helpers.deleteCookie(`cf_${website.id}_person_time`);
        convertflow.app.helpers.deleteCookie(
          `cf_${website.id}_person_storage_prevent`
        );
        convertflow.app.helpers.deleteCookie(
          `cf_${website.id}_person_last_update`
        );

        localStorage.removeItem("cf_person");
        localStorage.removeItem(`cf_${website.id}_person`);
        localStorage.removeItem(`cf_${website.id}_session`);

        $cf.each(convertflow.app.website.ctas, function (i, cta) {
          if (cta.cta_type !== "inline" && cta.cta_type !== "page") {
            convertflow.app.helpers.deleteCookie("viewedCta" + cta.id);
          }
        });
        setTimeout(function () {
          location.reload();
        }, 300);
      });
  },

  handleTabToggles: function (website) {
    $cf("#cfTestWidget .cf-test-collapse-toggle")
      .off("click")
      .on("click", function () {
        $cf(this).toggleClass("cf-active");
        $cf(this).parent().children(".cf-campaign-collapse").toggle();
      });
  },

  initialize: function (website) {
    if (app.admin.adminIsLoggedIn()) {
      app.helpers.setCookie(
        "cf_" + app.website.id + "_logged_in",
        "true",
        60 * 24 * 60
      );

      if (
        document.readyState === "interactive" ||
        document.readyState === "complete"
      ) {
        app.admin.load(website);
      } else {
        $cf(document).on("ready", function () {
          app.admin.load(website);
        });
      }
    }
  },

  keyValueDiv: function (key, value) {
    if (key && value) {
      return $cf(
        `<div class="cf-test-contact-info">
          <p><strong>${key}:</strong> ${value}</p>
        </div>`
      );
    }
  },

  load: function (website) {
    if (website.adminWidgetLoaded !== true) {
      website.adminWidgetLoaded = true;

      $cf.ajax({
        type: "GET",
        url: app.api_root + "admin",
        dataType: "JSONP",
        success: function (data) {
          $cf("#cfTestStart").remove();
          $cf("#cfTestWidget").remove();
          $cf("body").append(data.html);

          if (website.name) {
            $cf(".cf-website-name").text(website.name);
          }
          
          convertflow.app.admin.render(website);
        },
      });
    }
  },

  nestedKeyValueDiv: function (collapse, callback, status, link) {
    var collapseDiv = $cf(
      `<div class="cf-test-campaign" data-id="${collapse}">
        <div class="cf-test-headline cf-test-collapse-toggle">
          <h4>${
            status !== undefined ? app.admin.conditionStatusImg(status) : ""
          }${collapse}${link ? `<a style="text-align: right; float: right; color: inherit;" href="${link}" target="_blank">↗</a>` : ''}</h4>
        </div>
        <div class="cf-campaign-collapse">
        </div>
      </div>`
    );

    if (callback) {
      collapseDiv = callback(collapseDiv);
    }
    return collapseDiv;
  },

  operatorsDiv: function (callback) {
    let operatorsDiv = $cf(
      `<div class="cf-test-conditions">
        <div class="cf-conditions-operator" data-operator="and">
          <p><em>If all AND conditions are met...</em></p>
          <div class="cf-conditions"></div>
        </div>
        <div class="cf-conditions-operator" data-operator="or">
          <p><em>If any OR conditions are met...</em></p>
          <div class="cf-conditions"></div>
        </div>
      </div>`
    );

    if (callback) {
      operatorsDiv = callback(operatorsDiv);
    }

    return operatorsDiv;
  },

  populateProfile: function (website) {
    if (!convertflow.person) return;

    var profileContents = $cf("<div></div>");
    let personName;

    if (convertflow.person.name) {
      personName = `${convertflow.person.name} ${
        convertflow.person.last_name || ""
      }`;
    } else if (convertflow.person.email) {
      personName = convertflow.person.email;
    } else if (convertflow.person.phone) {
      personName = convertflow.person.phone;
    }

    if (personName) {
      $cf("#cf-test-name").text(personName);
    }

    if (convertflow.person.avatar_url) {
      $cf("#cf-test-avatar").attr("src", convertflow.person.avatar_url);
    }

    [
      "visitor_token",
      "email",
      "name",
      "last_name",
      "phone",
      "city",
      "avatar_url",
      "company_name",
      "company_title",
      "state",
      "twitter_url",
      "facebook_url",
      "linkedin_url",
      "twitter_followers",
      "twitter_following",
      "twitter_handle",
      "address",
      "zip_code",
      "country",
      "bio",
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "first_visit",
      "source_url",
      "referral_source",
      "landing_page",
    ].forEach((contact_field) => {
      if (convertflow.person[contact_field]) {
        var keyValueDiv = app.admin.keyValueDiv(
          contact_field,
          convertflow.person[contact_field]
        );
        $cf(profileContents).append(keyValueDiv);
      }
    });

    if (
      convertflow.person.extra && 
      typeof convertflow.person.extra == "object" && 
      Object.keys(convertflow.person.extra).length > 0
    ) {
      Object.keys(convertflow.person.extra).forEach(function (key) {
        var keyValueDiv = app.admin.keyValueDiv(
          key,
          convertflow.person.extra[key]
        );
        $cf(profileContents).append(keyValueDiv);
      });
    }

    if (
      convertflow.session &&
      typeof convertflow.session == "object" &&
      Object.keys(convertflow.session).length > 0
    ) {
      const sessionDiv = app.admin.nestedKeyValueDiv(
        "Session",
        (collapseDiv) => {
          ["pages", "current", "previous"].forEach((key) => {
            const keyDiv = app.admin.keyValueDiv(key, convertflow.session[key]);
            $cf(collapseDiv).children(".cf-campaign-collapse").append(keyDiv);
          });

          if (convertflow.session.attribution) {
            const attributionDiv = app.admin.nestedKeyValueDiv(
              "Attribution",
              (attributionCollapse) => {
                [
                  "landing_page",
                  "referral_source",
                  "utm_source",
                  "utm_medium",
                  "utm_campaign",
                  "utm_term",
                  "utm_content",
                ].forEach((key) => {
                  const keyDiv = app.admin.keyValueDiv(
                    key,
                    convertflow.session.attribution[key]
                  );
                  $cf(attributionCollapse)
                    .children(".cf-campaign-collapse")
                    .append(keyDiv);
                });

                return attributionCollapse;
              }
            );

            $cf(collapseDiv)
              .children(".cf-campaign-collapse")
              .append(attributionDiv);
          }

          if (convertflow.session.urls) {
            const urlCounts = app.admin.countURLs(convertflow.session.urls);

            const urlsDiv = app.admin.nestedKeyValueDiv(
              "Visited URLs",
              (urlsCollapse) => {
                Object.keys(urlCounts).forEach((url) => {
                  const keyDiv = app.admin.keyValueDiv(url, urlCounts[url]);
                  $cf(urlsCollapse)
                    .children(".cf-campaign-collapse")
                    .append(keyDiv);
                });

                return urlsCollapse;
              }
            );

            $cf(collapseDiv).children(".cf-campaign-collapse").append(urlsDiv);
          }
          return collapseDiv;
        }
      );
      $cf(profileContents).append(sessionDiv);
    }

    Object.values(app.website.integrations).forEach((integration) => {
      const serviceName = integration.integration_type.toLowerCase();

      if (
        convertflow.person.data &&
        typeof convertflow.person.data[serviceName] == "object" &&
        Object.keys(convertflow.person.data[serviceName]).length > 0
      ) {
        const serviceDataDiv = app.admin.nestedKeyValueDiv(
          integration.integration_type,
          (collapseDiv) => {
            Object.keys(convertflow.person.data[serviceName]).forEach(
              (serviceKey) => {
                if (!convertflow.person.data[serviceName][serviceKey]) return;

                if (
                  typeof convertflow.person.data[serviceName][serviceKey] ==
                  "string"
                ) {
                  const stringDiv = app.admin.keyValueDiv(
                    serviceKey,
                    convertflow.person.data[serviceName][serviceKey]
                  );

                  $cf(collapseDiv)
                    .children(".cf-campaign-collapse")
                    .append(stringDiv);
                } else if (
                  Array.isArray(
                    convertflow.person.data[serviceName][serviceKey]
                  )
                ) {
                  const arrayDiv = app.admin.nestedKeyValueDiv(
                    serviceKey,
                    (arrayCollapse) => {
                      convertflow.person.data[serviceName][serviceKey].forEach(
                        (item) => {
                          const id = item[Object.keys(item)[0]];
                          const value = item[Object.keys(item)[1]];
                          const keyDiv = app.admin.keyValueDiv(
                            value ? id : Object.keys(item)[0],
                            value ? value : id
                          );
                          $cf(arrayCollapse)
                            .children(".cf-campaign-collapse")
                            .append(keyDiv);
                        }
                      );

                      return arrayCollapse;
                    }
                  );

                  $cf(collapseDiv)
                    .children(".cf-campaign-collapse")
                    .append(arrayDiv);
                } else if (
                  typeof convertflow.person.data[serviceName][serviceKey] ==
                    "object" &&
                  Object.keys(convertflow.person.data[serviceName][serviceKey])
                    .length > 0
                ) {
                  Object.keys(
                    convertflow.person.data[serviceName][serviceKey]
                  ).forEach((serviceDataObjectKey) => {
                    const serviceDataObjectCollapse = app.admin.nestedKeyValueDiv(
                      serviceKey,
                      (serviceDataObjectCollapse) => {
                        const keyDiv = app.admin.keyValueDiv(
                          serviceDataObjectKey,
                          convertflow.person.data[serviceName][serviceKey][
                            serviceDataObjectKey
                          ]
                        );
                        $cf(serviceDataObjectCollapse)
                          .children(".cf-campaign-collapse")
                          .append(keyDiv);
                        return serviceDataObjectCollapse;
                      }
                    );

                    $cf(collapseDiv)
                      .children(".cf-campaign-collapse")
                      .append(serviceDataObjectCollapse);
                  });
                }
              }
            );
            return collapseDiv;
          }
        );

        $cf(profileContents).append(serviceDataDiv);
      }
    });

    $cf(
      "#cfTestWidget .cf-test-container[data-name='profile'] .cf-campaign-collapse"
    )
      .html("")
      .append(profileContents);
  },

  populateBroadcasts: function (website) {
    const broadcastsContainer = $cf(
      '#cfTestWidget .cf-test-container[data-name="broadcasts"]'
    );
    const broadcastsCollapse = $cf(broadcastsContainer).find(
      ".cf-campaign-collapse"
    );
    $cf(broadcastsCollapse).html("");

    const broadcasts = Object.values(website.broadcasts).filter(
      (broadcast) => broadcast.quick == false
    );

    if (broadcasts.length > 0) {
      Object.values(broadcasts).forEach((broadcast) => {
        const broadcastDiv = app.admin.broadcastDiv(website, broadcast);

        $cf(broadcastsCollapse).append(broadcastDiv);
      });

      $cf(broadcastsContainer).show();
    }
  },

  populateCampaigns: function (website) {
    const campaignsContainer = $cf(
      '#cfTestWidget .cf-test-container[data-name="campaigns"]'
    ).children(".cf-campaign-collapse");

    $cf(campaignsContainer).html("");

    // populate quick broadcast campaigns
    const campaigns = Object.values(website.broadcasts).filter(
      (broadcast) =>
        broadcast.quick == true && Object.keys(broadcast.ctas).length > 0
    );

    campaigns.forEach((broadcast) => {
      const ctaId = broadcast.ctas[0];
      const cta = app.website.ctas[ctaId];

      if (cta) {
        ctaDiv = app.admin.ctaDiv(
          website,
          cta,
          broadcast.conditions,
          broadcast.status == true
        );

        $cf(campaignsContainer).append(ctaDiv);
      }
    });

    // populate the rest of the ctas loaded
    Object.values(convertflow.ctas).forEach((cta) => {
      let ctaDiv;
      const campaign = Object.values(website.broadcasts).filter(
        (broadcast) =>
          broadcast.ctas.includes(cta.id) && broadcast.status == true
      )[0];

      if (!campaign) {
        ctaDiv = app.admin.ctaDiv(website, cta, [], true);
      }

      $cf(campaignsContainer).append(ctaDiv);
    });
  },

  populateSideWideConditions: function (website) {
    if (Object.keys(website.conditions).length > 0) {
      const operatorsDiv = app.admin.operatorsDiv((operatorDiv) => {
        app.admin.appendConditionsToOperatorsDiv(
          operatorDiv,
          website.conditions
        );
        return operatorDiv;
      });

      const siteWideWrapper = $cf(
        "#cfTestWidget .cf-test-container[data-name='site']"
      );

      $cf(siteWideWrapper)
        .find(".cf-clickable .cf-test-condition-status")
        .remove();

      $cf(siteWideWrapper)
        .find(".cf-clickable")
        .prepend(`${app.admin.conditionStatusImg(website.status)}`);

      $cf(siteWideWrapper)
        .find(".cf-campaign-collapse")
        .html("")
        .append(operatorsDiv);

      $cf(siteWideWrapper).show();
    }
  },

  productRecommendationDiv: function (
    website,
    cta,
    variant,
    step,
    product_recommendation
  ) {
    let label = `Product Recommendation`;

    if (product_recommendation.options["shopify-products-source"] == "cart") {
      label += ` - current cart`;
    }

    if (
      product_recommendation.options["shopify-products-source"] == "collection"
    ) {
      label += ` - collection ${product_recommendation.options["shopify-products-collection"]}`;
    }

    if (
      product_recommendation.options["shopify-products-source"] == "related"
    ) {
      label += `- related to ${
        product_recommendation.productIdForRecommendation || "product"
      }`;
    }

    if (
      product_recommendation.options["shopify-products-source"] == "selected"
    ) {
      label += ` - selected products`;
    }

    const productCollapseDiv = app.admin.nestedKeyValueDiv(
      label,
      (productCollapseDiv) => {
        const productRecommendationDiv = $cf(
          `<div class="cf-test-product-recommendation" data-id="${product_recommendation.id}"></div>`
        );

        if (product_recommendation.conditions) {
          const operatorsDiv = app.admin.operatorsDiv((operatorDiv) => {
            app.admin.appendConditionsToOperatorsDiv(
              operatorDiv,
              product_recommendation.conditions
            );
            return operatorDiv;
          });

          $cf(productRecommendationDiv).append(operatorsDiv);
        }

        $cf(productCollapseDiv)
          .children(".cf-campaign-collapse")
          .append(productRecommendationDiv);
        return productCollapseDiv;
      },
      product_recommendation.status == true
    );

    return productCollapseDiv;
  },

  conditionalRowDiv: function (content_toggle_item) {
    let label = `Conditional Row - ${content_toggle_item.content}`;

    const conditionalRowCollapse = app.admin.nestedKeyValueDiv(
      label,
      (conditionalRowCollapse) => {
        const conditionalRowDiv = $cf(
          `<div class="cf-test-conditional-row" data-id="${content_toggle_item.id}"></div>`
        );

        if (content_toggle_item.conditions) {
          const operatorsDiv = app.admin.operatorsDiv((operatorDiv) => {
            app.admin.appendConditionsToOperatorsDiv(
              operatorDiv,
              content_toggle_item.conditions
            );
            return operatorDiv;
          });

          $cf(conditionalRowDiv).append(operatorsDiv);
        }

        $cf(conditionalRowCollapse)
          .children(".cf-campaign-collapse")
          .append(conditionalRowDiv);
        return conditionalRowCollapse;
      },
      content_toggle_item.status == true
    );

    return conditionalRowCollapse;
  },

  render: function (website) {
    if (app.admin.adminIsLoggedIn() && $cf("#cfTestWidget").length > 0) {
      app.admin.populateProfile(website);
      app.admin.populateSideWideConditions(website);
      app.admin.populateBroadcasts(website);
      app.admin.populateCampaigns(website);

      app.admin.handleCloseClick(website);
      app.admin.handleRefreshClick(website);
      app.admin.handleTabToggles(website);
    }
  },

  stepDiv: function (website, cta, variant, step) {
    const stepDiv = app.admin.nestedKeyValueDiv(
      `Step ${step.position}${
        step.options["name"] ? ` "${step.options["name"]}"` : ""
      } - Conditional Logic`,
      (collapseDiv) => {
        Object.values(step.action_groups || []).forEach((action_group) => {
          if (typeof action_group.status == "boolean") {
            const skipLogicDiv = app.admin.actionGroupDiv(
              website,
              cta,
              variant,
              step,
              action_group
            );

            $cf(collapseDiv).append(skipLogicDiv);
          }
        });

        Object.values(step.sections).forEach((section) => {
          Object.values(section.elements).forEach((element) => {
            Object.values(element.action_groups || []).forEach(
              (action_group) => {
                if (typeof action_group.status == "boolean") {
                  const conditionalActionDiv = app.admin.actionGroupDiv(
                    website,
                    cta,
                    variant,
                    step,
                    action_group
                  );

                  $cf(collapseDiv).append(conditionalActionDiv);
                }
              }
            );
          });
        });

        Object.values(step.sections).forEach((section) => {
          Object.values(section.elements).forEach((element) => {
            Object.values(element.product_recommendations || []).forEach(
              (product_recommendation) => {
                if (typeof product_recommendation.status == "boolean") {
                  const productRecommendationDiv = app.admin.productRecommendationDiv(
                    website,
                    cta,
                    variant,
                    step,
                    product_recommendation
                  );
                  $cf(collapseDiv).append(productRecommendationDiv);
                }
              }
            );

            Object.values(element.content_toggle_items || []).forEach(
              (content_toggle_item) => {
                if (typeof content_toggle_item.status == "boolean") {
                  const conditionalRowDiv = app.admin.conditionalRowDiv(content_toggle_item);
                  $cf(collapseDiv).append(conditionalRowDiv);
                }
              }
            )
          });
        });

        return collapseDiv;
      }
    );

    if ($cf(stepDiv).find(".cf-campaign-collapse").children().length > 0) {
      return stepDiv;
    }
  },
};

    // identify a contact (public API)

app.api.identify = function(data, callback) {
  var payload = {
    contact: {
      website_id: app.website.id,
      visitor_token: app.visitors.uid()
    }
  };

  var emailTest = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  var emailCanUpdate = data.email && ((convertflow.person !== undefined && convertflow.person.email == undefined) || (data.override == true && data.email !== convertflow.person.email)) && emailTest.test(data.email);
  var phoneTest = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  var phoneCanUpdate = data.phone && ((convertflow.person !== undefined && convertflow.person.phone == undefined) || (data.override == true && data.phone !== convertflow.person.phone)) && phoneTest.test(data.phone);

  // identify the visitor if email or phone is provided
  if (emailCanUpdate == true || phoneCanUpdate == true) {

    if (emailCanUpdate) {
      payload.contact.email = data.email;
      convertflow.person.email = data.email;
    }

    if (phoneCanUpdate) {
      payload.contact.phone = data.phone;
      convertflow.person.phone = data.phone;
    }

    if (!payload.contact.email && fieldChanged && convertflow.person.email) {
      payload.contact.email = convertflow.person.email;
    }

    if (!payload.contact.phone && fieldChanged && convertflow.person.phone) {
      payload.contact.phone = convertflow.person.phone;
    }

    if (app.website.data["contact-processing"] !== "false") {

      function identifyCall(payload) {
        $cf.ajax({
          type: "GET",
          url: app.api_contacts,
          dataType: "JSONP",
          data: payload,
          success: function(response) {
          }
        });
      }

      if (typeof app.visitors.createVisitorIfNotCreated == 'function') {
        app.visitors.createVisitorIfNotCreated(function() {
          identifyCall(payload);
        });
      } else {
        identifyCall(payload);
      }
    } else {
      console.log('ConvertFlow: Contact PII processing disabled');
    }
  }

  // update the contact's fields for personalization
  var fieldChanged = false;

  var presetFields = [
    'name', 
    'last_name',  
    'company_name', 
    'company_title', 
    'url',
    'state',
    'city',
    'country',
    'zip_code', 
    'address',
  ];

  presetFields.forEach((presetField) => {
    if (data && data[presetField] && (!convertflow.person[presetField] || data.override == true)) {
      fieldChanged = true;
      convertflow.person[presetField] = data[presetField];
    }
  });

  if (data && data.custom_fields) {
    convertflow.person.extra = convertflow.person.extra || {};
    
    Object.keys(data.custom_fields).forEach(function(customField) {
      if (data.custom_fields[customField] && (!convertflow.person.extra[customField] || data.override == true)) {
        fieldChanged = true;
        convertflow.person.extra[customField] = data.custom_fields[customField];
      }
    });
  }

  if (emailCanUpdate == true || phoneCanUpdate == true || (fieldChanged && (convertflow.person.email || convertflow.person.phone))) {
    if (app.localstorage) {
      app.helpers.compressAndStore(app.local_person, convertflow.person);
    }

    if (window.convertflow.readyFired == true) {
      app.ctas.resetCTAs();
      app.campaigns.initialize(app.website);
    }

    if (callback) {
      callback();
    }
  }
}



// loads a popup CTA (public API) 

app.api.load = function(payload) {
  var cta_id;

  if (typeof payload == 'object' && payload.cta_id) {
    cta_id = payload.cta_id;
  } else if (typeof payload !== 'object' && app.helpers.isNumeric(payload)) {
    //  support for deprecated cta_id only argument
    cta_id = payload;
  };

  if ($cf('#cta' + cta_id).length == 0) {

    var ctaDiv = document.createElement('div');
    $cf(ctaDiv).attr('id', 'cta' + cta_id);
    $cf(ctaDiv).attr('cta-id', cta_id);
    $cf(ctaDiv).css('display', 'none');
    $cf(ctaDiv).addClass('convertflow-cta');

    if (app.website.ctas[cta_id] !== undefined) {
      $cf(ctaDiv).addClass('cf-' + app.website.ctas[cta_id].cta_type);
    }

    app.ctas.load(cta_id, payload.campaign, ctaDiv, payload.callback);
  }
}



// loads a popup CTA (public API) 

app.api.trigger = function(payload) {
  var cta_id;

  if (typeof payload == 'object' && payload.cta_id) {
    cta_id = payload.cta_id;
  } else if (typeof payload !== 'object' && app.helpers.isNumeric(payload)) {
    //  support for deprecated cta_id only argument
    cta_id = payload;
  };

  $cf(document).trigger('trigger_CTA_' + cta_id);

  if (payload.step) {
    var cta = convertflow.ctas[cta_id];
    var embed = $cf('#cta' + cta_id);
    if (cta && embed) {
      var variant = Object.values(cta.variants).filter(function(variant) {
        if (variant.winner == true) {
          return variant;
        }
      })[0];
      
      if (variant) {
        var step = Object.values(variant.steps).filter(function(step) {
          if (step.position + '' == payload.step + '') {
            return step;
          }
        })[0];

        if (step) {
          app.ctas.performConfirmationActionStep({
            embed: embed,
            cta: cta,
            variant: variant,
            step: step,
            step_override: step.id
          });
        }
      }
    }
  };
}



// reruns campaign targeting conditions (public API)

app.api.start = function() {
  app.ctas.resetCTAs();

    app.visitors.trackEvent(app.visitors.visitEvent());
    app.campaigns.initialize(app.website);
}



// closes all popup CTAs or the specified one (public API) 

app.api.close = function(payload) {
  var cta_ids = [];

  if (typeof payload == 'object' && payload.cta_id) {
    cta_ids.push(payload.cta_id);

  } else {

    $cf('.cf-overlay:visible, .cf-hook:visible, .cf-bar:visible, .cf-two-tap:visible').each(function(i, cta_div) {
      var cta_div_id = $cf(cta_div).attr('data-cta-id') || $cf(cta_div).attr('id');
      
      if (cta_div_id) {
        var cta_id = cta_div_id.replace('cta', '');
        cta_ids.push(cta_id);
      }
    });
  }

  cta_ids.forEach(function(cta_id) {
    var cta = convertflow.ctas[cta_id];

    if (cta) {
      var embed = $cf('#cta' + cta_id);
      
      if (cta && embed) {
        var variant = Object.values(cta.variants).filter(function(variant) {
          if (variant.winner == true) {
            return variant;
          }
        })[0];
        
        if (variant) {
          var track = payload && payload.track ? payload.track : false;
          app.ctas.close(cta, variant, embed, track);
          $cf('.cf-two-tap[data-cta-id=' + cta.id + '], .cf-prehook-popup.cta' + cta.id).removeClass('slide-up').hide();
        }
      }
    } 
  });
}


// tracks a custom order event
app.api.trackPurchase = function(payload) {
  if (typeof app.visitors.createVisitorIfNotCreated == 'function' && payload && payload.revenue && app.helpers.isNumeric(payload.revenue) && payload.order_id) {
    const visitorTracked = (convertflow.person.last_requested || convertflow.person.email) && app.helpers.getCookie(app.visitors.expiration_cookie);
    const existingSession = app.helpers.decompressAndGet(
      app.visitors.session_localstorage_key
    );
    const orderId = (payload.order_id + '');
    const orderIdValid = orderId.length > 0 && orderId.length < 100;

    if (visitorTracked && existingSession && convertflow.session && orderIdValid) {
      const orderNotTracked = !existingSession.order && convertflow.session && !convertflow.session.order;

      if (orderNotTracked) {
        let session = existingSession;
        session.order = orderId;

        app.helpers.compressAndStore(
          app.visitors.session_localstorage_key,
          session,
          false
        );

        convertflow.session = session;

        app.visitors.trackEvent({
          event_type: "Order",
          integration_type: "JavaScript",
          revenue: payload.revenue,
          data: {
            order_id: orderId.substring(0, 100),
            currency: payload.currency || app.website.data.currency
          }
        });

        console.log('ConvertFlow: Order tracked!');
      } else {
        console.error('ConvertFlow: Order already tracked for this session.');
      }

    } else if (!orderIdValid) {
      console.error('ConvertFlow: Supplied order_id is not between 0 and 100 characters. Order not tracked.');
      
    }

  } else if (typeof app.visitors.createVisitorIfNotCreated !== 'function') {
    console.error('ConvertFlow: trackPurchase function not available for legacy script versions. Please contact support to request a script upgrade.')

  } else if (!payload.order_id) {
    console.error('ConvertFlow: No order_id supplied. Order not tracked.');

  } else if (payload.order_id.length < 1 || payload.order_id.length > 100) {
    console.error('ConvertFlow: Supplied order_id is not between 1 and 100 characters. Order not tracked.');

  } else if (!payload.revenue) {
    console.error('ConvertFlow: No revenue supplied. Order not tracked.');

  } else if (!app.helpers.isNumeric(payload.revenue)) {
    console.error('ConvertFlow: Supplied revenue value is not an integer. Order not tracked.');
  }
}
    // returns root domain

app.helpers.domain = function() {
  var parts = location.hostname.split('.');
  if (parts.length > 2 && (parts[1] !== 'com' && parts[1] !== 'co' && parts[1] !== 'ac' && parts[1] !== 'org') && ['convertflowpages', 'myshopify', 'herokuapp', 'github', 'ghost', 'webflow', 'lpages', 'wpenginepowered', 'mybigcommerce', 'netlify'].includes(parts[1]) == false) {
    var subdomain = parts.shift();
    var domain = parts.join('.');
  } else {
    var domain = location.hostname;
  }
  return domain
}

// parses dynamic values with person fields

app.helpers.parseDynamicFieldValues = function(values, person) {
  if (!values) return;

  let parsedValues = []

  values.forEach(value => {
    const dynamicValue = value.match(/{([^}]+)}/)
    const person_fields = person?.extra

    if (dynamicValue && person_fields) {
      let dynamicValueKey = dynamicValue[1]
      let personDynamicField = person_fields[dynamicValueKey]

      if (personDynamicField) {
        personDynamicField.split(',').forEach(field => {
            parsedValues.push(field.trim());
        })
      }
    } else {
      parsedValues.push(value)
    }
  });

  parsedValues = parsedValues.map(value => value.toLowerCase());

  return parsedValues;
}

// return current page

app.helpers.page = function() {
  return window.location.pathname;
}


// get time now

app.helpers.timeNow = function() {
  var date = new Date();
  return date.toISOString();
}


// is this internet explorer?

app.helpers.IE = function() {
  var ms_ie = false;
  var ua = window.navigator.userAgent;
  var old_ie = ua.indexOf('MSIE ');
  var new_ie = ua.indexOf('Trident/');
  var edge = ua.indexOf('Edge/');
  if ((old_ie > -1) || (new_ie > -1) || (edge > -1)) {
    var ms_ie = true;
  }
  return ms_ie;
}


// creates cookies

app.helpers.setCookie = function(name, value, ttl) {
  var expires = "";
  var cookieDomain = "";
  if (ttl) {
    var date = new Date();
    date.setTime(date.getTime() + (ttl * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  }
  if (app.helpers.domain()) {
    cookieDomain = "; domain=" + app.helpers.domain();
  }
  document.cookie = name + "=" + escape(value) + expires + cookieDomain + "; path=/";
}



// deletes cookies

app.helpers.deleteCookie = function(name) {
  if (name && app.helpers.domain()) {
    var cookieDomain = "; domain=" + app.helpers.domain();
    document.cookie = name + "=" + cookieDomain + "; path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }
}



// gets cookies

app.helpers.getCookie = function(name) {
  var re = new RegExp(name + "=([^;]+)");
  var value = re.exec(document.cookie);
  return (value != null) ? unescape(value[1]) : undefined;
}



// gets URL parameters

app.helpers.getParameterByName = function(name) {
  var name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var results = null;
  var response = null;

  try {
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    results = regex.exec(location.search);

    if (results !== null) {
      response = app.helpers.decodeURIComponentSafe(results[1].replace(/\+/g, " "));
    };

  } catch (e) {};

  if (results === null) {
    response = '';
  };

  return response;
}



// checks if value is in array

app.helpers.isInArray = function(value, array) {

  return array.indexOf(value) > -1;

}



// makes URL characters safe

app.helpers.decodeURIComponentSafe = function (uri, mod) {
  var out = new String(),
    arr,
    i = 0,
    l,
    x;
  typeof mod === "undefined" ? mod = 0 : 0;
  arr = uri.split(/(%(?:d0|d1)%.{2})/);
  for (l = arr.length; i < l; i++) {
    try {
        x = decodeURIComponent(arr[i]);
    } catch (e) {
        x = mod ? arr[i].replace(/%(?!\d+)/g, '%25') : arr[i];
    }
    out += x;
  }
  return out;
}



// gets all URL parameters

app.helpers.getQueryString = function() {
  var search = location.search.substring(1);
  var data = {}

  if (search !== "") {
    $cf.each(search.split('&'), function(i, parameter) {
      if (parameter.indexOf('=') > -1) {
        var param_array = parameter.split('=')
        var key = param_array[0]
        var value = param_array[1]
        data[key] = app.helpers.decodeURIComponentSafe(value)
      }
    })
  }
  return data
}



// able to stringify JSON?

app.helpers.canStringify = function() {

  return typeof(JSON) !== "undefined" && typeof(JSON.stringify) !== "undefined";

}



// cleans URL to database safe conditions
app.helpers.cleanURL = function(url) {
  var cleaned_url = url.split(/[?#]/)[0].replace(/^https?\:\/\//, "").replace(/^www./, "").replace(/\s+/g, '').replace(/\/$/, "");
  return cleaned_url;
}



// ajax loads and caches script assets

app.helpers.cachedScript = function( url, options ) {
  options = $cf.extend( options || {}, {
    dataType: "script",
    cache: true,
    async: true,
    url: url
  });
  return $cf.ajax( options );
}



// capitalize first letter of string

app.helpers.capitalizeFirstLetter = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}




// visual names for contact fields

app.helpers.personMap = function() {
  return {
    name: 'firstname',
    last_name: 'lastname',
    email: 'email',
    phone: 'phone',
    website: 'website',
    company_name: 'company_name',
    company_title: 'company_title',
    city: 'city',
    country: 'country',
    address: 'address',
    state: 'state',
    zip_code: 'zipcode'
  }
}


// localstorage functions with error catching\

app.localstorage = (function() {
  if (app.helpers.IE() == false) {
    try {
      return !!localStorage.getItem;
    } catch (exception) {
      return false;
    }
  } else {
    return false;
  }
}());


var localStorageSpace = function(){
  if (app.localstorage) {
    var allStrings = '';
    for(var key in window.localStorage){
      if (window.localStorage.hasOwnProperty(key)) {
        allStrings += window.localStorage[key];
      }
    }
    var value = allStrings ? 3 + ((allStrings.length*16)/(8*1024)) : '0'
    return value;
  } else {
    return '0'
  }
};

if (app.localstorage) {
  var localCompress=function(){function o(o,r){if(!t[o]){t[o]={};for(var n=0;n<o.length;n++)t[o][o.charAt(n)]=n}return t[o][r]}var r=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",t={},i={compressToBase64:function(o){if(null==o)return"";var r=i._compress(o,6,function(o){return n.charAt(o)});switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(r){return null==r?"":""==r?null:i._decompress(r.length,32,function(e){return o(n,r.charAt(e))})},compressToUTF16:function(o){return null==o?"":i._compress(o,15,function(o){return r(o+32)})+" "},decompressFromUTF16:function(o){return null==o?"":""==o?null:i._decompress(o.length,16384,function(r){return o.charCodeAt(r)-32})},compressToUint8Array:function(o){for(var r=i.compress(o),n=new Uint8Array(2*r.length),e=0,t=r.length;t>e;e++){var s=r.charCodeAt(e);n[2*e]=s>>>8,n[2*e+1]=s%256}return n},decompressFromUint8Array:function(o){if(null===o||void 0===o)return i.decompress(o);for(var n=new Array(o.length/2),e=0,t=n.length;t>e;e++)n[e]=256*o[2*e]+o[2*e+1];var s=[];return n.forEach(function(o){s.push(r(o))}),i.decompress(s.join(""))},compressToEncodedURIComponent:function(o){return null==o?"":i._compress(o,6,function(o){return e.charAt(o)})},decompressFromEncodedURIComponent:function(r){return null==r?"":""==r?null:(r=r.replace(/ /g,"+"),i._decompress(r.length,32,function(n){return o(e,r.charAt(n))}))},compress:function(o){return i._compress(o,16,function(o){return r(o)})},_compress:function(o,r,n){if(null==o)return"";var e,t,i,s={},p={},u="",c="",a="",l=2,f=3,h=2,d=[],m=0,v=0;for(i=0;i<o.length;i+=1)if(u=o.charAt(i),Object.prototype.hasOwnProperty.call(s,u)||(s[u]=f++,p[u]=!0),c=a+u,Object.prototype.hasOwnProperty.call(s,c))a=c;else{if(Object.prototype.hasOwnProperty.call(p,a)){if(a.charCodeAt(0)<256){for(e=0;h>e;e++)m<<=1,v==r-1?(v=0,d.push(n(m)),m=0):v++;for(t=a.charCodeAt(0),e=0;8>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;h>e;e++)m=m<<1|t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=a.charCodeAt(0),e=0;16>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}l--,0==l&&(l=Math.pow(2,h),h++),delete p[a]}else for(t=s[a],e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;l--,0==l&&(l=Math.pow(2,h),h++),s[c]=f++,a=String(u)}if(""!==a){if(Object.prototype.hasOwnProperty.call(p,a)){if(a.charCodeAt(0)<256){for(e=0;h>e;e++)m<<=1,v==r-1?(v=0,d.push(n(m)),m=0):v++;for(t=a.charCodeAt(0),e=0;8>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;h>e;e++)m=m<<1|t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=a.charCodeAt(0),e=0;16>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}l--,0==l&&(l=Math.pow(2,h),h++),delete p[a]}else for(t=s[a],e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;l--,0==l&&(l=Math.pow(2,h),h++)}for(t=2,e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;for(;;){if(m<<=1,v==r-1){d.push(n(m));break}v++}return d.join("")},decompress:function(o){return null==o?"":""==o?null:i._decompress(o.length,32768,function(r){return o.charCodeAt(r)})},_decompress:function(o,n,e){var t,i,s,p,u,c,a,l,f=[],h=4,d=4,m=3,v="",w=[],A={val:e(0),position:n,index:1};for(i=0;3>i;i+=1)f[i]=i;for(p=0,c=Math.pow(2,2),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;switch(t=p){case 0:for(p=0,c=Math.pow(2,8),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;l=r(p);break;case 1:for(p=0,c=Math.pow(2,16),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;l=r(p);break;case 2:return""}for(f[3]=l,s=l,w.push(l);;){if(A.index>o)return"";for(p=0,c=Math.pow(2,m),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;switch(l=p){case 0:for(p=0,c=Math.pow(2,8),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;f[d++]=r(p),l=d-1,h--;break;case 1:for(p=0,c=Math.pow(2,16),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;f[d++]=r(p),l=d-1,h--;break;case 2:return w.join("")}if(0==h&&(h=Math.pow(2,m),m++),f[l])v=f[l];else{if(l!==d)return null;v=s+s.charAt(0)}w.push(v),f[d++]=s+v.charAt(0),h--,s=v,0==h&&(h=Math.pow(2,m),m++)}}};return i}();"function"==typeof define&&define.amd?define(function(){return localCompress}):"undefined"!=typeof module&&null!=module&&(module.exports=localCompress);
}

app.helpers.compressAndStore = function(key, object, cookie) {
  if (app.localstorage) {
    if (localStorageSpace() < 1000) {

      if (cookie !== false) {
        var timestamp = Date.now();
        object.last_updated = timestamp;
        app.helpers.setCookie(app.visitors.localstorage_last_update, timestamp);
      }

      return localStorage.setItem(key, localCompress.compress(JSON.stringify(object)));
    } else {
      return null;
    }
  } else {
    return null
  }
}

// decompresses objects

app.helpers.decompressAndGet = function(key) {
  if (app.localstorage) {
    var data = localStorage.getItem(key)
    if (data !== null) {
      try {
        return JSON.parse(localCompress.decompress(data));
      } catch(e) {
        return null
      }
    } else {
      return null
    }
  } else {
    return null
  }
}



// polyfill CustomEvent for IE

if (app.helpers.IE() == true && (typeof window.CustomEvent === "function") == false) {
  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
  }
  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
}



// cross-browser date parser

app.helpers.parseDate = function(date) {
  if (date.indexOf('T') == -1) {
    var lastIndex = date.lastIndexOf(" ");

    if (date.indexOf('0000') > -1) {
      // format UTC dates
      var formatted_date = date.substring(0, lastIndex).replace(' ', 'T') + 'Z';
    } else {

      // format other timezone dates
      var timezone = date.split(' ').pop()
      var formatted_date = date.substring(0, lastIndex).replace(' ', 'T');
      var len = timezone.length;
      var formatted_timezone = timezone.substring(0, len-2) + ":" + timezone.substring(len-2);
      var formatted_date = formatted_date + formatted_timezone;
    }
    var parsed_date = Date.parse(formatted_date);

  } else {

    // already formatted
    var formatted_date = date;
    var parsed_date = Date.parse(formatted_date);
  }

  return parsed_date;
}



// lodash style fetching from nested object

app.helpers.nestedGet = function(obj, path, defaultValue) {
  var paths = String.prototype.split.call(path, /[,[\].]+?/).filter(Boolean)
  var result = paths.reduce(function(res, key) {
    if (res !== null && res !== undefined) {
      return res[key]
    } else {
      return res
    }
  }, obj);
  return (result === undefined || result === obj) ? defaultValue : result;
}



// uses cachedScript for UTF-8 sites and async scripts, if not fallback to inline script

app.helpers.loadScript = function(scriptUrl, callback, async) {
  if (document.characterSet !== 'UTF-8' || async == false) {
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = scriptUrl;
    script.charset = "UTF-8";
    script.onload = callback;

    if (async == false) {
      document.head.appendChild(script);
    } else {
      script.async = true;
      document.body.appendChild(script);
    }
  } else {
    app.helpers.cachedScript(scriptUrl).done(callback);
  }
}


app.helpers.removeTags = function(str) {
  if ((str===null) || (str===''))
  return false;
  else
  str = str.toString();
  return str.replace( /(<([^>]+)>)/ig, '');
};


app.helpers.isNumeric = function(str) {
  if (typeof str != "number" && typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}


app.helpers.cleanURL = function(redirect_url) {

  if (redirect_url.indexOf('http') == -1 && redirect_url.charAt(0) !== '#' && redirect_url.indexOf('mailto:') == -1) {
    redirect_url = 'http://' + redirect_url;
  }
  if (redirect_url.indexOf("&amp;") > -1) {
    redirect_url = redirect_url.replace(new RegExp('&amp;', 'g'), '&');
  }

  return redirect_url;
}


app.helpers.redirectToFormattedUrl = function(redirect_url, new_tab) {
  const isActuallyURL = redirect_url.charAt(0) !== '#' && redirect_url.indexOf('mailto:') == -1 && redirect_url.indexOf('tel:') == -1 && redirect_url.indexOf('sms:') == -1;
  redirect_url = app.helpers.cleanURL(redirect_url);

  function formatURLWithGA(redirect_url, callback) { // decorate redirect URL with Google Analytics' cross-domain tracking URL parameter, if GA cross-domain toggle enabled
    if (window.ga !== undefined && window.ga.getAll !== undefined && window.gaplugins !== undefined && app.website.data['google-analytics-cross-domain'] == 'true' && isActuallyURL) {
      var trackerToUse;

      $cf.each(ga.getAll(), function(index, tracker) {
        var trackingId = tracker.get('trackingId');

        if (trackingId && (!trackerToUse || app.website.data['google-analytics-tracking-id'] == trackingId)) {
          trackerToUse = tracker;
        }
      });

      if (trackerToUse !== undefined) {
        redirect_url = (new window.gaplugins.Linker(trackerToUse)).decorate(redirect_url);
      }
    }

    callback(redirect_url);
  }

  function formatURLWithGA4(redirect_url, callback) { // decorates URL with clientId and sessionId if GA4 cross-domain tracking enabled
    if (window.gtag && app.website.data['google-analytics-tracking-id'] && app.website.data['google-analytics-cross-domain'] == 'true' && isActuallyURL) {
      const createGtagPromise = (key) => {
        return new Promise((resolve) => {
          const timeout = setTimeout(() => resolve(null), 500);

          try {
            gtag("get", app.website.data["google-analytics-tracking-id"], key, (value) => {
              clearTimeout(timeout);
              resolve(value);
            });
          } catch (e) {
            clearTimeout(timeout);
            resolve(null);
          }
        });
      };

      Promise.all([
        createGtagPromise("client_id"),
        createGtagPromise("session_id"),
      ]).then(([client_id, session_id]) => {
        const params = [];

        if (client_id) {
          params.push(`clientId=${client_id}`);
        }
        if (session_id) {
          params.push(`sessionId=${session_id}`);
        }

        if (params.length > 0) {
          const separator = redirect_url.indexOf("?") > -1 ? "&" : "?";
          redirect_url = `${redirect_url}${separator}${params.join("&")}`;
        }

        callback(redirect_url);
      });
    } else {
      callback(redirect_url);
    }
  }

  // formats the redirect URL with all supported parameter integrations, then redirects
  formatURLWithGA(redirect_url, function(redirect_url) {
    formatURLWithGA4(redirect_url, function(redirect_url) {
      setTimeout(function() {
        if (new_tab) {
          window.open(redirect_url);
        } else {
          window.location = redirect_url;
        }
      }, 500);
    })
  })
};


app.helpers.onVisible = (domElement, callback) => {
  if (domElement) {
    new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          callback(domElement);
          observer.disconnect();
        }
      });
    }).observe(domElement);
  }
}


app.helpers.mediaQueryIsMobile = () => {
  return window.matchMedia('(max-width: 767px)').matches;
}

app.helpers.mediaQueryIsTablet = () => {
  return window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches;
}

app.helpers.mediaQueryIsDesktop = () => {
  return window.matchMedia('(min-width: 1024px)').matches;
}

app.helpers.findMostFrequent = (arr) => {
  if (!arr || arr.length === 0) return null;

  var freqCounter = {};
  var maxCount = 0;

  for(var i = 0; i < arr.length; i++) {
    var num = arr[i];
    freqCounter[num] = (freqCounter[num] || 0) + 1;

    if(freqCounter[num] > maxCount) {
      maxCount = freqCounter[num];
    }
  }

  var mostFrequentValues = [];
  for(var key in freqCounter) {
    if(freqCounter[key] === maxCount) {
      mostFrequentValues.push(parseInt(key));
    }
  }

  if(mostFrequentValues.length > 1) {
    return null;
  }

  return mostFrequentValues[0];
}

app.helpers.normalizeObjectsPositions = (objects) => {
  if (!objects || objects.length === 0) return objects;

  const sortedObjects = [...objects].sort((a, b) => a.position - b.position);

  return sortedObjects.map((object, index) => {
    return { ...object, position: index + 1 };
  });
};

app.helpers.isGtagLoaded = function(gtagId) {
  if (typeof gtag === 'function' && window.dataLayer) {
    for (let i = 0; i < window.dataLayer.length; i++) {
      if (window.dataLayer[i][0] === 'config' && window.dataLayer[i][1] === gtagId) {
        return true;
      }
    }
  }
  return false;
}

app.helpers.removeUrlParameter = (param) => {
  if (location.search.indexOf(param + "=") !== -1) {
    var replace = "";
    try {
      var url = new URL(location);
      url.searchParams.delete(param);
      replace = url.href;
    } catch (ex) {
      var regExp = new RegExp("[?&]" + param + "=.*$");
      replace = location.search.replace(regExp, "");
      replace = location.pathname + replace + location.hash;
    }
    history.replaceState(null, "", replace);
  }
}

  class ConvertflowAdapter {
  constructor(source_product) {
    this.source = "Convertflow";
    this.source_product = source_product;

    this.id = this.productId();
    this.handle = this.productHandle();
    this.available = this.productAvailable();
    this.title = this.productTitle();
    this.description = this.productDescription();
    this.image = this.productImage();
    this.price = this.productPrice();
    this.options = this.productOptions();
    this.variants = this.productVariants() || [];
    this.compare_at_price = this.productCompareAtPrice();
    this.redirect_url = this.productRedirectUrl();
    this.subscriptions = this.productSubscriptions();
    this.is_variant = false;
  }

  productId() {
    return this.source_product?.id;
  }

  productHandle() {
    return undefined;
  }

  productAvailable() {
    return true;
  }

  productTitle() {
    return this.source_product?.title;
  }

  productDescription() {
    return this.source_product?.description;
  }

  productImage() {
    return this.source_product?.image;
  }

  productPrice() {
    return (this.source_product?.discounted_price || this.source_product?.price);
  }

  productCompareAtPrice() {
    if (!this.source_product?.discounted_price) return;

    return this.source_product?.price * 100;
  }

  productOptions() {
    return undefined;
  }

  productStockQuantity() {
    return undefined;
  }

  productRedirectUrl() {
    return this.source_product?.redirect_url;
  }

  productSubscriptions() {
    return undefined;
  }

  productVariants() {
    if (!this.source_product?.product_variants) return undefined;

    let variantsOutput = [this];

    Object.values(this.source_product?.product_variants).filter(
      (productVariant) =>
        productVariant.product_id == this.source_product?.id &&
        productVariant.toBeDeleted !== true
    ).forEach((productVariant) => {
      variantsOutput.push(new ConvertflowAdapter(productVariant));
    });

    return variantsOutput.sort((a, b) => {
      return a.position - b.position;
    });
  }
}

if (typeof window !== 'undefined' && typeof window.convertflow == 'undefined') {
  window.ConvertflowAdapter = ConvertflowAdapter;
}

  class ProductsAdapterService {
  constructor(client, source, cache_products = false) {
    this.client = client;
    this.source = source;
    this.cache_products = cache_products;
  }

  adaptProduct(product) {
    // If already adapted
    if (product.source_product) {
      return product;
    }

    switch (this.source) {
      case 'ShopifyGraphql':
        return new ShopifyAdapter(product);
      case 'Shopify':
        return new ShopifyAjaxAdapter(product);
      case 'Convertflow':
        return new ConvertflowAdapter(product);
      default:
        break;
    }
  }

  createCart() {
    return new Promise((resolve, reject) => {
      this.client.cartCreate().then((cart) => {
        resolve(cart)
      }).catch(reject)
    })
  }

  addToCart(cartId, products) {
    return new Promise((resolve, reject) => {
      if (window.convertflow?.session?.cart?.Shopify?.adding_to_cart !== true) {
        const productsIntegrationService = new ProductsIntegrationsService("Shopify");

        let cart_session = { adding_to_cart: true }
        productsIntegrationService.saveOnCartSession("Shopify", cart_session);

        this.client.cartAddProduct(cartId, products).then((cart) => {
          $cf.ajax({
            type: "GET",
            url: `/?cf_action=cf_shopify_cart&cart_id=${cart?.id}`,
            dataType: "json",
            success: function (data) {},
          });

          if (cart?.lines?.length > 0) {
            cart_session = { ...cart_session, ...cart };

            let cartSessionProductIDS = convertflow.session.cart.Shopify.cf_products_quantities || [];
            cart.lines.forEach((line) => {
              cartSessionProductIDS.push(`${line.id.replace('gid://shopify/ProductVariant/', '')}:${line.quantity}`)
            });
            cart_session = { ...cart_session, cf_products_quantities: cartSessionProductIDS };
          }

          cart_session.adding_to_cart = false;
          productsIntegrationService.saveOnCartSession("Shopify", cart_session);

          resolve(cart)
        }).catch(reject)
      } else {
        let interval = setInterval(() => {
          if (window.convertflow?.session?.cart?.Shopify?.adding_to_cart !== true) {
            clearInterval(interval);
            this.addToCart(cartId, products).then(resolve).catch(reject);
          }
        }, 100);
      }
    })
  }

  removeFromCart(cartId, products) {
    return new Promise((resolve, reject) => {
      const productsIntegrationService = new ProductsIntegrationsService("Shopify");

      this.client.cartRemoveProduct(cartId, products).then((cart) => {
        productsIntegrationService.saveOnCartSession("Shopify", cart);

        $cf.ajax({
          type: "GET",
          url: `/?cf_action=cf_shopify_cart&cart_id=${cart?.id}`,
          dataType: "json",
          success: function (data) {},
        });

        resolve(cart)
      }).catch(reject)
    })
  }

  applyDiscountCode = async (cartId, discountCode) => {
    return new Promise((resolve, reject) => {
      if (window.convertflow?.session?.cart?.Shopify?.adding_to_cart !== true) {
        const productsIntegrationService = new ProductsIntegrationsService("Shopify");

        let cart_session = { adding_to_cart: true }
        productsIntegrationService.saveOnCartSession("Shopify", cart_session);

        this.client.cartApplyDiscountCode(cartId, discountCode).then((cart) => {
          productsIntegrationService.saveOnCartSession("Shopify", cart);

          $cf.ajax({
            type: "GET",
            url: `/?cf_action=cf_shopify_cart&cart_id=${cart?.id}`,
            dataType: "json",
            success: function (data) {},
          });

          cart_session.adding_to_cart = false;
          productsIntegrationService.saveOnCartSession("Shopify", cart_session);

          resolve(cart)
        }).catch(reject)
      } else {
        let interval = setInterval(() => {
          if (window.convertflow?.session?.cart?.Shopify?.adding_to_cart !== true) {
            clearInterval(interval);
            this.applyDiscountCode(cartId, discountCode).then(resolve).catch(reject);
          }
        }, 100);
      }
    })
  }

  updateCartAttributes = async (cartId, attributes) => {
    return new Promise((resolve, reject) => {
      this.client.cartUpdateAttributes(cartId, attributes).then((cart) => {
        resolve(cart)
      }).catch(reject)
    })
  }

  getProduct(handle, variantId = null) {
    return new Promise((resolve, reject) => {
      const product = this.getProductFromCache(handle);
      if (product) {
        resolve(product)
      }

      this.client.getProduct(handle).then((product) => {
        if (product) {
          let adaptedProduct = this.adaptProduct(product);

          if (this.cache_products == true) {
            this.saveOnCache([adaptedProduct]);
          }

          if (variantId) {
            let variant = adaptedProduct.variants.find((variant) => variant.id == variantId);
            resolve(variant)
          } else {
            resolve(adaptedProduct)
          }
        } else {
          reject("Product not found")
        }
      }).catch(reject)
    })
  }

  getProducts(args) {
    return new Promise((resolve, reject) => {
      const batchCallback = this.cache_products == true ? this.saveOnCache : undefined;

      this.client.getProducts(args, [], undefined, 0, batchCallback).then((products) => {
        products = products.map((product) => {
          return this.adaptProduct(product);
        })

        resolve(products)
      }).catch(reject)
    })
  }

  getCollectionProducts(id, args) {
    return new Promise((resolve, reject) => {
      this.client.getCollectionProducts(id, args).then((products) => {
        if (products) {
          products = products.map((product) => {
            return this.adaptProduct(product);
          })

          if (this.cache_products == true) {
            this.saveOnCache(products);
          }

          resolve(products)
        } else {
          resolve([])
        }
      }).catch(reject)
    })
  }

  getProductRecommendations(productId, args) {
    return new Promise((resolve, reject) => {
      this.client.getProductRecommendations(productId, args).then((products) => {
        products = products.map((product) => {
          return this.adaptProduct(product);
        })

        if (this.cache_products == true) {
          this.saveOnCache(products);
        }

        resolve(products)
      }).catch(reject)
    })
  }

  getProductFromCache(handle) {
    if (
      typeof window !== 'undefined' &&
      typeof window.convertflow == 'undefined' &&
      typeof window.cf_shopify_products !== 'undefined'
    ) {
      const product = window.cf_shopify_products.find((product) => product.handle == handle);
      return product;
    }
  }

  saveOnCache(products) {
    if (typeof window !== 'undefined' && typeof window.convertflow == 'undefined') {
      const windowProducts = window.cf_shopify_products || [];
      const uniqueProducts = [
        ...new Map(
          [...products, ...windowProducts].map((item) => [item.id, item])
        ).values(),
      ].sort((a, b) => a.title.localeCompare(b.title));

      window.cf_shopify_products = uniqueProducts;

      dispatchCustomEvent("cf_shopify_products_change", {
        products: window.cf_shopify_products,
      });
    }
  }
}

if (typeof window !== 'undefined' && typeof window.convertflow == 'undefined') {
  window.ProductsAdapterService = ProductsAdapterService;
}

  class ProductsIntegrationsService {
  constructor(integration_type, integration_object = null) {
    this.integration_type = integration_type == 'ShopifyGraphql' ? 'Shopify' : integration_type;
    this.integration_object = integration_object;
  }

  client() {
    switch (this.integration_type) {
      case 'Shopify':
        let parsed_store_name = window.convertflow?.app?.shopify_store_url?.replace('.myshopify.com', '')
          || (this.integration_object?.api_data?.api_url || this.integration_object?.api_data?.website)
            ?.replace("http://", "")
            ?.replace("https://", "")
            ?.replace(".myshopify.com", "")
            ?.replace("/", "")
            ?.replace(" ", "");
        let token = window.convertflow?.app?.shopify_storefront_token
          || this.integration_object?.api_data["storefront-token"];

        return new ShopifyGraphqlClient({
          store_name: parsed_store_name,
          token: token,
        });
      default:
        break;
    }
  }

  adapter() {
    switch (this.integration_type) {
      case 'Shopify':
        return new ProductsAdapterService(this.client(), 'ShopifyGraphql');
      default:
        break;
    }
  }

  saveOnCartSession(key, attributes, override = false) {
    const time_now = app.helpers.timeNow();
    let isNewSession = false;

    let session = convertflow.session || {};

    session.cart = session.cart || {};
    let parsedStoreKey = key == "ShopifyGraphql" ? "Shopify" : key;

    if (override == false) {
      session.cart[parsedStoreKey] = Object.assign({}, session.cart[parsedStoreKey], attributes);
    } else {
      session.cart[parsedStoreKey] = attributes;
    }

    app.helpers.compressAndStore(
      app.visitors.session_localstorage_key,
      session,
      false
    );

    convertflow.session = session;
    convertflow.session.newSession = isNewSession;
  }

  headlessSessionCart(force_creation = false) {
    return new Promise((resolve) => {
      if (this.client().isWithinOnlineStore()) {
        resolve(null);
      } else if (force_creation == false && convertflow.session.cart && convertflow.session.cart[this.integration_type]) {
        resolve(convertflow.session.cart[this.integration_type]);
      } else {
        if (!window.convertflow?.session.cart_created) {
          window.convertflow.session.cart_created = true;

          this.adapter().createCart().then((cartObject) => {
            this.saveOnCartSession(this.integration_type, cartObject, true);
            resolve(cartObject);
          });
        } else {
          let interval = setInterval(() => {
            if (convertflow.session.cart && convertflow.session.cart[this.integration_type]) {
              clearInterval(interval);
              resolve(convertflow.session.cart[this.integration_type]);
            }
          }, 100);
        }
      }
    });
  }

  storeCartURL(options = {}) {
    if (this.client().isWithinOnlineStore()) {
      return new Promise((resolve) => {
        resolve(this.client().storeCartURL(undefined, options));
      });
    } else {
      return new Promise((resolve) => {
        let interval = setInterval(() => {
          if (window.convertflow?.session?.cart?.Shopify?.adding_to_cart !== true) {
            clearInterval(interval);

            this.headlessSessionCart().then((sessionCart) => {
              resolve(this.client().storeCartURL(sessionCart, options))
            });
          }
        }, 100);
      })
    }
  }

  storeCheckoutURL(options = {}) {
    if (this.client().isWithinOnlineStore()) {
      return new Promise((resolve) => {
        resolve(this.client().storeCheckoutURL(undefined, options))
      });

    } else {
      return new Promise((resolve) => {
        let interval = setInterval(() => {
          if (window.convertflow?.session?.cart?.Shopify?.adding_to_cart !== true) {
            clearInterval(interval);

            this.headlessSessionCart().then((sessionCart) => {
              resolve(this.client().storeCheckoutURL(sessionCart, options))
            });
          }
        }, 100);
      })
    }
  }
}

if (typeof window !== 'undefined' && typeof window.convertflow == 'undefined') {
  window.ProductsIntegrationsService = ProductsIntegrationsService;
}

  class ProductsReviewsAdapterService {
  constructor(client, source) {
    this.client = client;
    this.source = source
  }

  adaptReview(review) {
    switch (this.source) {
      case 'Yotpo':
        return new YotpoAdapter(review);
      case 'Okendo':
        return new OkendoAdapter(review);
      default:
        break;
    }
  }

  getReviews(productIds) {
    return new Promise(async (resolve, reject) => {
      let reviews = [];

      for (const productId of productIds) {
        try {
          const productReviews = await this.client.getProductReviews(productId);
          reviews = reviews.concat(this.adaptReview(productReviews));
        } catch (error) {
          reject(error);
          return;
        }
      }

      resolve(reviews);
    });
  }
}

if (typeof window !== 'undefined' && typeof window.convertflow == 'undefined') {
  window.ProductsReviewsAdapterService = ProductsReviewsAdapterService;
}

  class BaseClient {
  isWithinOnlineStore() {
    return false;
  }
}

if (typeof window !== "undefined" && typeof window.convertflow == "undefined") {
  window.BaseClient = BaseClient;
}



    // needed jquery plugins

app.helpers.plugins = function() {

  /*! jQuery Validation Plugin - v1.19.5 - 7/1/2022 https://jqueryvalidation.org/ Copyright (c) 2022 Jörn Zaefferer; Licensed MIT */
  !function(a){a($cf)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!(c.settings.submitHandler&&!c.settings.debug)||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0],k="undefined"!=typeof this.attr("contenteditable")&&"false"!==this.attr("contenteditable");if(null!=j&&(!j.form&&k&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}});var b=function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};a.extend(a.expr.pseudos||a.expr[":"],{blank:function(c){return!b(""+a(c).val())},filled:function(c){var d=a(c).val();return null!==d&&!!b(""+d)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");if(!this.form&&c&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name")),d===this.form){var e=a.data(this.form,"validator"),f="on"+b.type.replace(/^validate/,""),g=e.settings;g[f]&&!a(this).is(g.ignore)&&g[f].call(e,this,b)}}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.currentForm,e=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){e[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").trigger("focus").trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name"),e="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),e&&(this.form=a(this).closest("form")[0],this.name=d),this.form===b.currentForm&&(!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0))})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type,g="undefined"!=typeof e.attr("contenteditable")&&"false"!==e.attr("contenteditable");return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=g?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);"function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f&&(j=f.call(b,j),delete g.normalizer);for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return void 0===a?"":a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()&&0===this.pendingRequest?(a(this.currentForm).trigger("submit"),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a["date"===b?"dateISO":c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),""===d&&(d=!0),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(a,d){b[a]="function"==typeof d&&"normalizer"!==a?d(c):d}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var a;b[this]&&(Array.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(a=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(a[0]),Number(a[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:void 0!==b&&null!==b&&b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)},date:function(){var a=!1;return function(b,c){return a||(a=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(c)||!/Invalid|NaN/.test(new Date(b).toString())}}(),dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d>=c},maxlength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d<=c},rangelength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d>=c[0]&&d<=c[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var c,d={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,c){var e=a.port;"abort"===a.mode&&(d[e]&&d[e].abort(),d[e]=c)}):(c=a.ajax,a.ajax=function(b){var e=("mode"in b?b:a.ajaxSettings).mode,f=("port"in b?b:a.ajaxSettings).port;return"abort"===e?(d[f]&&d[f].abort(),d[f]=c.apply(this,arguments),d[f]):c.apply(this,arguments)}),a});

}



    // define convertflow namespace, 
    // rename api for public use
    window.convertflow = app.api;
    delete app.api;
    window.convertflow.app = app;
    window.convertflow.fonts = {};
    window.convertflow.session = {};


    // with classes and functions defined, 
    // ready to run the app

    function initialize(app) {

      if (app.timed == true) {
        console.time('Person load');
        console.time('CTA inject');
      }

      if (app.live == true) {

        // clear expired ctas in localstorage
        app.ctas.locallystored();

          // start a new tracking session OR use localstorage OR get from database
          if (app.helpers.getCookie(app.visitors.uid_cookie) == undefined) {
            app.visitors.create();
            app.ctas.findSnippets();
          } else {
            var localperson = app.helpers.decompressAndGet(app.local_person)
            if (app.visitors.canUseLocal(localperson) == false) {
              app.visitors.get();
            } else {
              app.visitors.initialize(localperson);
            }
          }

      } else {

        // preview mode

        var person = {}
          person['id'] = null;
          person['name'] = null;
          person['created_at'] = null;
          person['updated_at'] = null;
          person['email'] = null;
          person['user_id'] = null;
          person['owner_id'] = null;
          person['phone'] = null;
          person['city'] = null;
          person['leadhook_id'] = null;
          person['contactable_id'] = null;
          person['contactable_type'] = null;
          person['avatar_file_name'] = null;
          person['avatar_content_type'] = null;
          person['avatar_file_size'] = null;
          person['avatar_updated_at'] = null;
          person['avatar_url'] = null;
          person['company_name'] = null;
          person['company_title'] = null;
          person['url'] = null;
          person['state'] = null;
          person['twitter_url'] = null;
          person['facebook_url'] = null;
          person['linkedin_url'] = null;
          person['twitter_followers'] = null;
          person['twitter_following'] = null;
          person['lead_value'] = null;
          person['customer_ltv'] = null;
          person['twitter_handle'] = null;
          person['last_name'] = null;
          person['address'] = null;
          person['zip_code'] = null;
          person['country'] = null;
          person['view'] = null;
          person['website_id'] = null;
          person['source_url'] = null;
          person['company_id'] = null;
          person['pref_id'] = null;
          person['visitor_token'] = null;
          person['flow_id'] = null;
          person['stage_id'] = null;
          person['extra'] = null;
          person['broadcast_id'] = null;
          person['goal_id'] = null;
          person['opportunity_id'] = null;
          person['recent_event'] = null;
          person['bio'] = null;
          person['referral_id'] = null;
          person['person_id'] = null;
          person['intercom_id'] = null;
          person['variant_id'] = null;
          person['drip_id'] = null;
          person['data'] = null;
          person['inf_id'] = null;
          person['first_visit'] = null;
          person['referral_source'] = null;
          person['utm_source'] = null;
          person['utm_medium'] = null;
          person['utm_campaign'] = null;
          person['utm_term'] = null;
          person['utm_content'] = null;
          person['privacy_consent'] = null;
          person['marketing_consent'] = null;
          person['ip_address'] = null;
          person['queued_actions'] = null;
          person['latest_score'] = null;
          person['sms_consent'] = null;
        person.visitor_token = "51730cc1-e3ab-475f-9844-4193d9ff316d"
        person.website_id = app.website.id
        person.data = {}
        person.extra = {}
        window.convertflow.person = person;
        app.ctas.findSnippets();
        
      }

    }



    // runs initialize function after checking if 
    // jquery exists, jquery isn't slim and if
    // existing jquery version is higher than 1.8. 
    // if not it needs to load jquery 3.6.1 first.

    function usejQuery(app) {
      if (window.jQuery !== undefined) {
        window.prevjQuery = window.jQuery;
      }
      var scriptLoadHandler = function() {
        $cf = jQuery.noConflict(true);
        if (window.prevjQuery !== undefined) {
          jQuery = window.prevjQuery
        }
        initialize(app);
      }
      if (window.jQuery === undefined ||
          window.jQuery.ajax == undefined ||  
          window.jQuery.validator !== undefined || 
          (jQuery.fn.jquery !== undefined && 
            parseInt(jQuery.fn.jquery.split('.')[0]) < 2)
        ) {
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type", "text/javascript");
        script_tag.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js");
        if (script_tag.readyState) {
          script_tag.onreadystatechange = function () {
            if (this.readyState == 'complete' || this.readyState == 'loaded') {
              scriptLoadHandler()
            }
          };
        } else {
          script_tag.onload = function() {
            scriptLoadHandler()
          }
        }
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
      } else {
        $cf = window.jQuery;
        if (location.search.indexOf('cfTime=true') > -1) {
          console.log('Existing jQuery is ' + $cf.fn.jquery)
        }
        initialize(app);
      }
    }


    // check for bots

    var bots = "(googlebot\/|Googlebot-Mobile|bot|pingdom|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";
    var re = new RegExp(bots, 'i');

    if (re.test(navigator.userAgent) == false || document.body.classList.contains('convertflow-page')) {
      // ready set go!!
      usejQuery(app)
    }


  })();

} else {
  console.log('Uh oh! ConvertFlow script is already installed.')
}

