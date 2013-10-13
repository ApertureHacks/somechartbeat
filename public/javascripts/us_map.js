function get_random_color() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

function isEmpty(obj) {
  for(var prop in obj) {
    if(obj.hasOwnProperty(prop))
      return false;
  }
  return true;
}

function pickRandomProperty(obj) {
  var result;
  var count = 0;
  for (var prop in obj)
    if ([ 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY' ].indexOf(prop) > -1) {
      return prop;
    }
  return prop;
}

var rsr = Raphael('rsr', 100, 792, 0, 0);

var cards = [
  {
    "url": "/birthday-cards/birthday-congress-old-useless-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/congress-old-useless-shutdown-birthday-ecards-someecards.png"
  },
  {
    "url": "/usercards/viewcard/MjAxMi1hYWYxYzhlYTFiMzYyZGU3",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMi1hYWYxYzhlYTFiMzYyZGU3.png"
  },
  {
    "url": "/birthday-cards/government-shutdown-birthday-card-friend-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/government-shutdown-card-birthday-ecards-someecards.png"
  },
  {
    "url": "/apology-collection-cards/relationship-dating-sex-sorry-apology-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/relationship-love-dating-sorry-apology-ecards-someecards.png"
  },
  {
    "url": "/reminders-cards/mammogram-instagram-breast-cancer-awareness-month-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/mammogram-instagram-breast-cancer-awareness-reminders-ecards-someecards.png"
  },
  {
    "url": "/flirting-cards/vegetarian-meat-body-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/vegetarian-meat-body-flirting-ecards-someecards.png"
  },
  {
    "url": "/usercards/viewcard/fd06ac2398bf3b7c2b33745391d66ff7",
    "img": "http://static.someecards.com/someecards/usercards/fd06ac2398bf3b7c2b33745391d66ff7.png"
  },
  {
    "url": "/usercards/viewcard/MjAxMy04ZGU0MDkwNjYwZjU0M2Q3",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMy04ZGU0MDkwNjYwZjU0M2Q3_524c3ea60d295.png"
  },
  {
    "url": "/birthday-cards/birthday-elderly-best-friends-forever-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/elderly-old-best-friends-forever-birthday-ecards-someecards.png"
  },
  {
    "url": "/flirting-cards/back-massage-sex-love-coupon-valentines-day-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/love-coupon-back-massage-sex-valentines-day-ecards-someecards.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMy1kY2Q2ZGVmZTdkODhlNmU2",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMy1kY2Q2ZGVmZTdkODhlNmU2_51f6a8c37a0c4.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMS1iMTA2ZWZjZTE2MGRhNWU3",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMS1iMTA2ZWZjZTE2MGRhNWU3.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMy0xN2VjNjBiNTkyYjM4MmZl",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMy02NjcwNDJjMTAwMDU1MzM1.png"
  },
   {
    "url": "/columbus-day-cards/government-shutdown-columbus-day-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/government-shutdown-columbus-day-columbus-day-ecards-someecards.png"
  },
   {
    "url": "/birthday-cards/happy-birthday-shameful-family-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/happy-birthday-shameful-family-birthday-ecards-someecards.png"
  },
   {
    "url": "/birthday-cards/30-40-50-60-thirties-forties-fifties-old-birthday-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/30-40-50-60-thirties-forties-fifties-old-birthday-ecard.png"
  },
   {
    "url": "/birthday-cards/happy-birthday-to-one-of-the-few-people",
    "img": "http://cdn.someecards.com/someecards/filestorage/happy-one-few-people-birthday-ecard-someecards.jpg"
  },
   {
    "url": "/usercards/viewcard/4c35e74e1be01aa4ddd668624a5f13d1",
    "img": "http://static.someecards.com/someecards/usercards/1298498516584_4129121.png"
  },
   {
    "url": "/birthday-cards/birthday-bender-drink-autumn-leaves-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/autumn-leaves-drink-drunk-birthday-ecards-someecards.png"
  },
   {
    "url": "/flirting-cards/sex-flirting-government-shutdown-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/sex-government-shutdown-flirting-ecards-someecards.png"
  },
   {
    "url": "/columbus-day-cards/crowded-commute-columbus-day-indians-murder-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/commute-hell-america-columbus-day-ecards-someecards.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMS1mODAxMzk0NzE4YzdkMTJh",
    "img": "http://static.someecards.com/someecards/usercards/1311039281603_320022.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMy1lMDc1NDNmYjNmMWNiYjlm",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMy1lMDc1NDNmYjNmMWNiYjlm_5237478244316.png"
  },
   {
    "url": "/censored-cards/empty-vagina-flirting-woman-lonely-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/empty-vagina-flirting-woman-lonely-sex-censored-ecards-someecards.png"
  },
   {
    "url": "/columbus-day-cards/columbus-day-illegal-immigrant-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/columbus-day-illegal-immigrant-columbus-day-ecards-someecards.png"
  },
   {
    "url": "/usercards/viewcard/382b009819959a46a12e13b211a926ab",
    "img": "http://static.someecards.com/someecards/usercards/382b009819959a46a12e13b211a926ab.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMy04ZDMyMDIzMTdkNTUzNDJi",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMy04ZDMyMDIzMTdkNTUzNDJi_51e6d108234d7.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMy0xNGNlMjY2NDQ3YjExYTM4",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMy04ZGU0NzQzNzY0YjI1Yjk0.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMy1kYzU3NDFjMWFmMmRlM2Rl",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMy1kYzU3NDFjMWFmMmRlM2Rl_515988ab840ab.png"
  },
   {
    "url": "/usercards/viewcard/a2a2ace26558194db8b34f03007dcd24",
    "img": "http://static.someecards.com/someecards/usercards/a2a2ace26558194db8b34f03007dcd24.png"
  },
   {
    "url": "/anniversary-cards/happy-anniversary-love-couple-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/anniversary-celebrate-gave-up.jpg"
  },
   {
    "url": "/birthday-cards/happy-birthday-miley-cyrus-legs-spread-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/happy-birthday-miley-cyrus-legs-spread-birthday-ecards-someecards.png"
  },
   {
    "url": "/encouragement-cards/good-luck-not-hitting-the-wall-and-shitting-your-pants-in-public",
    "img": "http://cdn.someecards.com/someecards/filestorage/good-luck-not-hitting-encouragement-ecard-someecards.jpg"
  },
   {
    "url": "/usercards/viewcard/MjAxMy02MzkwNWJiNjE4MTA1Y2U2",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMy02MzkwNWJiNjE4MTA1Y2U2_525304c56ec69.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMy0zM2RhNjVlMjgxZjJjOTM3",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMy0zM2RhNjVlMjgxZjJjOTM3_524ef02f71292.png"
  },
   {
    "url": "/usercards/viewcard/e70269ce9b3241cefd722a09c9943ad3",
    "img": "http://static.someecards.com/someecards/usercards/1300394834620_5045752.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMy1hMjVkMTRhZGNhOWM3OTE2",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMy0xZDRmYTU3NzAzMzU1YjRm.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMy01MjgxZjczMzljY2NmMmYw",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMy00ZjFkY2Y4OWI5ZTMwMGRm.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMy1mYzg5MTdkZjU2OGJlMGZh",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMy1mYzg5MTdkZjU2OGJlMGZh_524db2f4af5ab.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMi0yMzI4NzY1YTEwMzA4ZDdj",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMi0yMzI4NzY1YTEwMzA4ZDdj_517551dc7d61c.png"
  },
   {
    "url": "/birthday-cards/belated-birthday-card-forget-family-friend-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/late-belated-forget-friend-family-birthday-ecards-someecards.png"
  },
   {
    "url": "/my-chateau-cards/romantic-evening-wine-chateau-ste-michelle-kids-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/kids-bed-wine-drink-my-chateau-ecards-someecards.png"
  },
   {
    "url": "/birthday-cards/may-you-live-long-enough-to-shit-yourself",
    "img": "http://cdn.someecards.com/someecards/filestorage/live-long-enough-shit-birthday-ecard-someecards.jpg"
  },
   {
    "url": "/get-well-cards/get-well-sick-coworker-work-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/sick-work-job-coworker-get-well-ecards-someecards.png"
  },
   {
    "url": "/weekend-cards/nice-weekend-blame-obama-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/nice-weekend-blame-obama-weekend-ecards-someecards.png"
  },
   {
    "url": "/thinking-of-you-cards/even-when-we-re-80-i-will-do-you-from-behind",
    "img": "http://cdn.someecards.com/someecards/filestorage/even-behind-thinking-of-you-ecard-someecards.jpg"
  },
   {
    "url": "/somewhat-topical-cards/just-let-me-know-if-theres-anything-i-can-do-this-month-to-further-the-cause-of-healthy-breasts",
    "img": "http://cdn.someecards.com/someecards/filestorage/know-anything-month-further-somewhat-topical-ecard-someecards.jpg"
  },
   {
    "url": "/apology-collection-cards/paleodiet-diet-meat-caveman-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/paleodiet-diet-meat-apology-ecards-someecards.png"
  },
   {
    "url": "/friendship-cards/youre-the-oates",
    "img": "http://cdn.someecards.com/someecards/filestorage/oates-friendship-ecard-someecards.jpg"
  },
   {
    "url": "/flirting-cards/i-couldnt-help-noticing",
    "img": "http://cdn.someecards.com/someecards/filestorage/couldnt-help-noticing-flirting-ecard-someecards.jpg"
  },
   {
    "url": "/birthday-cards/i-knew-that-a-paper-card",
    "img": "http://cdn.someecards.com/someecards/filestorage/knew-paper-card-birthday-ecard-someecards.jpg"
  },
   {
    "url": "/anniversary-cards/congratulations-on-defying-marriage",
    "img": "http://cdn.someecards.com/someecards/filestorage/congratulations-defying-marriage-anniversary-ecard-someecards.jpg"
  },
   {
    "url": "/censored-cards/censored-thinking-about-you-masturbation-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/censored-thinking-about-you-masturbation-censored-ecards-someecards.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMy0xMTE5NTNiMjcxODdhMGM2",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMy0xMTE5NTNiMjcxODdhMGM2_52543f0b7531e.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMy0wNTVhZmEzMWZjMmI1M2I4",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMy0wNTVhZmEzMWZjMmI1M2I4_5143555ad1fd4.png"
  },
   {
    "url": "/usercards/viewcard/dd39945842aa08b46c2c1fe0621e327ad7",
    "img": "http://static.someecards.com/someecards/usercards/dd39945842aa08b46c2c1fe0621e327ad7.png"
  },
   {
    "url": "/usercards/viewcard/f5f27cf27312843a66bbe40750ccf5c1",
    "img": "http://static.someecards.com/someecards/usercards/1294360551523_1925507.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMy1jODM1OGIxMWZhYmU4ZmRi",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMy1jODM1OGIxMWZhYmU4ZmRi_51976232a0873.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMi03MjhlOTc4YTEzNWM0OGFm",
    "img": "http://static.someecards.com/someecards/usercards/1344844661267_5161204.png"
  },
   {
    "url": "/usercards/viewcard/d4eab00f115d4dd5856d5265224fef62",
    "img": "http://static.someecards.com/someecards/usercards/1290975152274_185980.png"
  },
   {
    "url": "/birthday-cards/twenty-ninth-lying-thirty-women-birthday-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/twenty-ninth-women-woman-thirty-birthday-ecards-someecards.png"
  },
   {
    "url": "/birthday-cards/birthday-facebook-twitter-tweet-update-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/twitter-facebook-tweet-update-birthday-ecards-someecards.png"
  },
   {
    "url": "/get-well-cards/since-youre-sick",
    "img": "http://cdn.someecards.com/someecards/filestorage/since-sick-get-well-ecard-someecards.jpg"
  },
   {
    "url": "/flirting-cards/id-appreciate-it-if-you-started-treating-me",
    "img": "http://cdn.someecards.com/someecards/filestorage/appreciate-started-treating-flirting-ecard-someecards.jpg"
  },
   {
    "url": "/workplace-cards/happy-hour-work-late-drink-booze-office-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/happy-hour-drink-booze-office-workplace-ecards-someecards.png"
  },
   {
    "url": "/birthday-cards/just-wanted-to-be-the-first-one-to-wish",
    "img": "http://cdn.someecards.com/someecards/filestorage/wanted-first-one-wish-birthday-ecard-someecards.jpg"
  },
   {
    "url": "/birthday-cards/birthday-candles-cake-gray-pubes-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/gray-pubes-candles-cake-birthday-ecards-someecards.png"
  },
   {
    "url": "/censored-cards/censored-vagina-open-up-flirt-couple-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/open-up-flirt-woman-sex-censored-ecards-someecards.png"
  },
   {
    "url": "/birthday-cards/barack-obama-dnc-gray-aging-birthday-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/barack-obama-aged-gray-dnc-birthday-ecards-someecards.png"
  },
   {
    "url": "/miss-you-cards/miss-you-enough-to-hit-send-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/miss-you-enough-to-hit-send-missing_you-ecards-someecards.png"
  },
   {
    "url": "/birthday-cards/happy-birthday-to-someone-still-young-enough-to-become-a-professional-curler",
    "img": "http://cdn.someecards.com/someecards/filestorage/happy-someone-young-enough-birthday-ecard-someecards.png"
  },
   {
    "url": "/anniversary-cards/happy-anniversary-to-a-couple-who-almost",
    "img": "http://cdn.someecards.com/someecards/filestorage/happy-couple-almost-anniversary-ecard-someecards.jpg"
  },
   {
    "url": "/anniversary-cards/happy-anniversary-from-someone-youre-probably",
    "img": "http://cdn.someecards.com/someecards/filestorage/happy-someone-anniversary-ecard-someecards.jpg"
  },
   {
    "url": "/halloween-cards/i-cant-decide-this-halloween-whether-to-go-as-a-slutty-witch-a-slutty-nurse-a-slutty-schoolgirl-or-just-a-total-slut",
    "img": "http://cdn.someecards.com/someecards/filestorage/decide-whether-slutty-witch-halloween-ecard-someecards.jpg"
  },
   {
    "url": "/birthday-cards/birthday-aging-selfie-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/birthday-aging-selfie-birthday-ecards-someecards.png"
  },
   {
    "url": "/workplace-cards/coworker-hurricane-sandy-work-home-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/coworker-work-office-hurricane-sandy-home-workplace-ecards-someecards.png"
  },
   {
    "url": "/birthday-cards/missed-belated-birthday-no-acknowledgement-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/missed-belated-birthday-no-acknowledgement-birthday-ecards-someecards.png"
  },
   {
    "url": "/birthday-cards/facebook-notifications-social-network-birthday-funny-ecard",
    "img": "http://cdn.someecards.com/someecards/filestorage/facebook-notifications-social-network-birthday-ecards-someecards.png"
  },
   {
    "url": "/birthday-cards/birthday-confusion-michael-showalter"
  },
   {
    "url": "/birthday-cards/happy-belated-birthday-to-someone-who-now-has-free-rein-to-forget-mine",
    "img": "http://cdn.someecards.com/someecards/filestorage/happy-belated-someone-free-birthday-ecard-someecards.jpg"
  },
   {
    "url": "/usercards/viewcard/MjAxMy02Y2M3ZjY1ZmI2NzdkNTkz",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMy04NTYyMzU1ZmRjZDI0NWU1.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMy02NzdkYjljYzgzZjFlOTI0",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMy02NzdkYjljYzgzZjFlOTI0_5256be4360058.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMy00OGM2M2RmNTIzNzQ4Zjc0",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMy00OGM2M2RmNTIzNzQ4Zjc0_52374520c0d7a.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMy1kNjAyY2M3NGYyZGRkMmRl",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMy1kNjAyY2M3NGYyZGRkMmRl_51ed811dce64e.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMy01OTVjYWFkZWUwZDRiZjc3",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMy0xZDgxMzJmYzc1MzViMDhk.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMi05MTk3YWRlM2M4MGFiZmE4",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMi0yNzdkOWVhNjA5MDMwZjE3.png"
  },
   {
    "url": "/usercards/viewcard/05a54e7690bc15c74c15e0fa0f09db82",
    "img": "http://static.someecards.com/someecards/usercards/05a54e7690bc15c74c15e0fa0f09db82_51df08284d8f4.png"
  },
   {
    "url": "/usercards/viewcard/ae87a421b644cd4b0203e6bffd02752203",
    "img": "http://static.someecards.com/someecards/usercards/ae87a421b644cd4b0203e6bffd02752203_510bea5aca861.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMi1kNzVmNjNmMWI1ZjBlYThh",
    "img": "http://static.someecards.com/someecards/usercards/1348000005060_472236.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMy0zNGMwMTlhYTI1YjFjNzA4",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMy1jODExNDE0MDA1NWQwMWMw.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMi1hY2IyYzBiMWNhNzRiZjFi",
    "img": "http://static.someecards.com/someecards/usercards/1341939514068_6358057.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMS03MzgwOGNmM2MxZjJkZTAw",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMS03MzgwOGNmM2MxZjJkZTAw.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMi04ZDA2NDQyYjVmYzQxODMy",
    "img": "http://static.someecards.com/someecards/usercards/1351083002539_8240662.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMS1mZGY4MGRmNjEwMGU0OTNm",
    "img": "http://static.someecards.com/someecards/usercards/1307976628792_3120958.png"
  },
   {
    "url": "/usercards/viewcard/f2683953bb7d3f988b032c443f27aeb8",
    "img": "http://static.someecards.com/someecards/usercards/1298508652192_8804169.png"
  },
   {
    "url": "/usercards/viewcard/MjAxMS1mNDMxZWU3M2YyMWYxM2Fi",
    "img": "http://static.someecards.com/someecards/usercards/MjAxMS1mNDMxZWU3M2YyMWYxM2Fi_med.png"
  },
   {
    "url": "/usercards/viewcard/170bdaf35d21e419708c81405bd8a5eb",
    "img": "http://static.someecards.com/someecards/usercards/1292216147843_1808971.png"
  },
   {
    "url": "/usercards/viewcard/7443c2d9fe3f1d449faae8c8c024e59b",
    "img": "http://static.someecards.com/someecards/usercards/1290120010375_3489659.png"
  },
   {
    "url": "/usercards/viewcard/82d60fa22d8e61fb539781fc4168a0a3",
    "img": "http://static.someecards.com/someecards/usercards/1294188772572_3630952.png"
  }
];

$(document).ready(function(){
  var CA = rsr.set();
  CA.push(rsr.path("M29.372,112.632c0.448-2.074-0.185-3.696,0.417-5.552c0.523-1.614,9.007,1.63,10.56,2.049     c7.394,1.992,14.819,3.833,22.253,5.675c0.358,0.089-4.784,20.848-5.296,23.008c-0.658,2.777-1.348,5.545-2.026,8.316     c-0.288,1.178,2.975,4.554,3.622,5.471c7.907,11.218,17.359,24.53,28.387,40.352c2.367,3.395,4.734,6.791,7.101,10.188     c0.693,0.994-0.102,2.939,0.452,4.352c0.903,2.304,6.204,5.454,3.245,6.901c-2.521,1.234-2.582,2.198-3.254,4.711     c-0.712,2.656-4.289,3.06-3.475,6.303c0.277,1.104,1.471,0.553,0.685,2.783c-0.492,1.396-1.518,0.685-2.401,0.804     c-4.382,0.594-10.366-1.552-14.701-2.247c-2.591-0.415-9.717,0.07-9.884-3.427c0.124,0.27,0.247,0.539,0.37,0.809     c-0.136-0.172-0.107-0.751-0.52-1.246c-0.069,0.187-0.138,0.373-0.206,0.56c0.7-6.632-2.082-8.465-5.18-13.755     c-1.033-1.764-2.033-0.709-3.063-1.952c-0.276-0.333,0.099-2.205-0.459-2.907c-0.613-0.771-2.818-0.635-3.774-1.269     c-2.306-1.525-2.4-3.582-4.458-5.239c-1.363-1.097-3.95-1.646-5.613-2.509c-6.033-3.126-1.324-2.901-2.265-8.183     c-0.142-0.793-1.173-0.901-1.592-1.438c-0.732-0.938,0.481-1.145,0.332-1.945c-0.337-1.812-2.825-3.184-3.008-5.111     c-0.184-1.936-1.536-4.819-2.76-6.361c-2.196-2.764,1.312-4.041,1.584-5.199c0.779-3.308-2.83-2.898-3.682-5.836     c-0.237-0.815-0.439-4.003-0.283-4.572c1.494-5.428,1.273,0.417,3.861,1.909c-0.503-0.947-2.137-5.705-1.311-6.532     c1.059-1.058,7.357,1.466,7.675,2.321c-0.436-1.301-1.328-1.701-2.592-1.268c0.445-0.283,0.552-0.641,0.878-0.92     c-0.873,0.603-3.113,0.271-3.933-0.021c-2.271-0.807-0.86-1.799-2.976-0.801c-1.311,0.618,1.217,2.723-1.343,1.639     c-1.624-0.688-0.819-2.721-2.831-2.265c0.176-0.618,0.548-1.663,0.869-2.178c0.158,0.469,0.315,0.939,0.473,1.408     c-0.061-1.126-0.616-2.429-1.013-2.615c0.206-2.128-4.584-7.29-3.319-8.66c0.827-0.896,0.721-4.223,0.896-5.443     c0.166-1.164,0.705-2.193,0.529-3.532c-0.553-4.208-3.62-5.088-1.135-9.334c0.624-1.065,1.352-1.39,1.917-2.325    C28.076,115.98,28.391,114.359,29.372,112.632").attr({
      parent: 'CA',
      'stroke-width': '0'
  }));
  CA.attr({
      fill: '#003366',
      id: 'CA',
      name: 'CA'
  });
  var OR = rsr.set();
  OR.push(rsr.path("M28.995,102.739c-2.734-3.918,1.469-10.414,3.06-13.841c0.097,0.212,0.194,0.425,0.292,0.637     c1.11-0.716,0.321-0.843,1.238-0.574c-0.184-0.212,0.267-0.619-0.51-0.574c0.402-1.371,1.802-2.568,2.55-2.871     c-0.267,0.085-0.534,0.17-0.801,0.255c1.362-2.931,5.951-17.022,8.378-17.286c-0.3-2.269,0.966-4.529,1.821-7.208     c0.321,0.298,0.754,0.563,1.019,0.829c-0.016,0.089-0.442-0.671-0.217-0.574c2.192,0.439,7.645,1.413,7.215,4.738     c-0.769,5.963,4.881,4.154,8.957,4.352c1.828,0.088,3.574,1.246,5.027,1.754c1.072,0.375,5.171,0.638,6.483,0.351     c5.439-1.19,11.228-0.188,16.619,0.923c1.506,0.311,15.923,2.225,12.812,6.763c-1.017,1.483-10.016,10.636-8.888,12.119     c1.331,1.751,2.431,0.923,1.056,3.731c-1.328,2.713-1.965,5.499-2.703,8.602c-0.432,1.815-1.116,10.086-2.651,11.14     c-1.361,0.935-8.882-1.631-10.711-2.008C62.279,110.545,45.708,106.373,28.995,102.739").attr({
      parent: 'OR',
      'stroke-width': '0'
  }));
  OR.attr({
      fill: '#003366',
      id: 'OR',
      name: 'OR'
  });
  var WA = rsr.set();
  WA.push(rsr.path("M52.327,57.232c-1.486-0.754-2.582-0.763-4.044-1.234c0.297-1.211,0.595-2.422,0.893-3.633     c-0.131,0.592-0.03,1.462-0.137,2.125c0.223,0.139,0.809,0.397,1.097,0.549c-0.398-1.265-0.348-3.252,1.371-2.674     c-1.333-0.518-2.501-1.536-1.783-3.291c0.823,0.693,0.786,0.224,2.399,0.069c-0.517-0.478-1.41-1.127-2.057-1.508     c-0.068,0.229-0.137,0.457-0.206,0.685c0.099-2.981,0.216-6.688-0.137-9.94c-0.252-2.317,0.119-4.018,0.137-6.238     c2.328,1.569,3.99,3.18,6.445,4.456c1.753,0.911,4.68,0.698,4.73,2.537c0.109,0.089,0.836,0.523,1.234,0.823     c0.243-0.759,0.434-0.665,0.822-1.303c0.07,1.835,0.347,3.423-1.166,4.799c0.091-0.457,0.097-0.903,0.206-1.372     c-0.999,1.36-6.208,4.951-1.782,4.25c-0.39,0.025-1.066,0.109-1.44,0.069c-0.079-1.986,3.645-3.216,5.004-4.799     c0.242,1.602,0.425,1.326-1.028,1.714c-0.105,0.311,0.118,1.049,0.068,1.439c-0.229-0.068-0.457-0.137-0.685-0.206     c0,0.251,0,0.502,0,0.754c1.562,0.237,0.862,1.882-0.137,3.153c-0.251-0.16-0.502-0.32-0.754-0.479     c0.206-0.251,0.411-0.503,0.617-0.754c-0.666,0.665-1.046,0.889-1.577,1.851c0.195-0.616,0.226-1.436,0.412-2.125     c-0.959,0.688-1.787,1.278-2.674,1.783c0.055,0.114,0.774,1.118,1.028,1.371c0.33-0.626,0.521-0.589,0.892-1.097     c2.883,3.105,9.393-11.607,4.73-12.614c0-0.251,0-0.503,0-0.754c0.465,0.062,0.818,0.366,1.234,0.549     c0.152-0.736-0.072-0.782-0.137-1.44c0.229,0.114,0.457,0.229,0.685,0.343c0.636-2.059-1.746-2.625-1.371-4.113     c0.617-2.45,6.775,0.528,8.867,1.09c7.797,2.098,15.672,3.895,23.537,5.716c2.3,0.532,8.434,0.877,9.208,2.38     c0.917,1.779-1.977,9.226-2.388,11.142c-1.535,7.166-3.36,14.052-3.233,21.078c-11.354-2.34-21.764-4.048-32.666-3.53     c-1.041,0.049-3.129-2.022-4.97-2.091c-1.979-0.074-3.3,1.141-5.347,0.069c-3.655-1.914,0.057-4.521-2.434-6.787    C54.602,58.961,53.154,58.571,52.327,57.232").attr({
      parent: 'WA',
      'stroke-width': '0'
  }));
  WA.attr({
      fill: '#003366',
      id: 'WA',
      name: 'WA'
  });
  var NV = rsr.set();
  NV.push(rsr.path("M59.475,139.016c1.827-7.534,3.654-15.068,5.481-22.603c0.828-3.414,2.882-3.521,6.085-2.768     c3.304,0.777,16.479,3.585,18.761,4.492c4.891,1.946-0.212,3.384,4.705,4.275c1.051,0.19,20,3.601,19.931,3.988     c-0.448,2.505-0.896,5.011-1.344,7.516c-2.879,16.095-5.617,31.585-8.468,47.33c-0.311,1.712-0.367,8.844-2.866,9.469     c-1.104,0.276-1.973-2.9-3.833-1.95c-1.932,0.986-1.477,10.267-2.084,12.441c-6.157-9.081-12.325-18.152-18.532-27.2     c-4.794-6.988-11.588-15.977-16.383-22.965C57.374,145.863,57.871,145.43,59.475,139.016").attr({
      parent: 'NV',
      'stroke-width': '0'
  }));
  NV.attr({
      fill: '#003366',
      id: 'NV',
      name: 'NV'
  });
  var AZ = rsr.set();
  AZ.push(rsr.path("M91.872,228.73c4.882,1.13,0.655-4.334,1.135-6.141c0.284-1.066,1.9-1.512,2.41-2.547c0.403-0.816,0.361-2.216,0.78-2.875     c1.185-1.862,3.905-3.277,4.042-4.834c0.096-1.088-2.748-4.322-2.837-5.88c-0.132-2.313,0.73-4.455,0.958-6.76     c0.155-1.565-0.157-4.522,0.354-5.749c1.287-3.078,3.755,0.856,4.29,0.817c3.25-0.241,3.092-5.462,3.548-7.779     c0.758-3.853,5.373-1.277,8.958-0.742c8.253,1.23,16.506,2.518,24.797,3.521c1.054,0.128,11.624,1.354,11.611,1.451     c-0.341,2.492-0.682,4.983-1.023,7.474c-1.493,10.903-2.985,21.806-4.476,32.708c-0.875,6.392-1.75,12.783-2.625,19.175     c-0.148,1.08-17.652-1.68-19.265-1.891c-5.357-0.697-12.296-6.297-17.228-8.914c-4.282-2.274-8.564-4.547-12.846-6.819    C92.4,231.854,89.052,231.03,91.872,228.73").attr({
      parent: 'AZ',
      'stroke-width': '0'
  }));
  AZ.attr({
      fill: '#003366',
      id: 'AZ',
      name: 'AZ'
  });
  var ID = rsr.set();
  ID.push(rsr.path("M93.639,119.547c0.885-4.557,1.771-9.113,2.655-13.67c0.579-2.981,2.414-6.982,2.605-9.831     c0.129-1.926-2.552-3.765-0.637-5.82c1.883-2.021,3.731-4.268,4.902-6.777c0.538-1.154,2.772-3.227,2.805-4.362     c0.05-1.744-1.439-2.275-2.044-3.701c-1.12-2.639-0.438-6.298-0.034-9.02c1.325-8.923,3.728-17.705,5.294-26.591     c1.563,0.352,6.307,0.742,6.97,1.94c0.741,1.339-1.32,7.033-1.608,8.569c-0.514,2.736,4.023,14.148,5.428,16.657     c1.208,2.158,4.02,3.394,3.408,5.244c-1.23,3.722-6.033,15.152,1.686,9.992c1.571,2.582,0.86,7.242,2.077,9.63     c0.86,1.688,1.614,1.505,2.613,3.378c0.625,1.171,3.971,0.322,5.139,1.665c0.86-2.417,4.547-0.311,7.521,0.712     c4.647,2.027,2.913,4.285,2.589,6.662c-1.064,7.793-3.128,16.586-4.192,24.379C124.986,126.056,109.295,122.993,93.639,119.547").attr({
      parent: 'ID',
      'stroke-width': '0'
  }));
  ID.attr({
      fill: '#003366',
      id: 'ID',
      name: 'ID'
  });
  var UT = rsr.set();
  UT.push(rsr.path("M106.972,182.768c3.267-18.266,5.535-37.531,8.802-55.797c5.405,1.076,11.857,1.963,17.307,2.78     c1.57,0.235,7.929,0.235,7.669,1.985c-0.504,3.404-0.008,3.808-0.513,7.211c5.303,0.723,10.605,1.446,15.908,2.169     c1.256,0.171-0.568,9.044-0.729,10.323c-1.429,11.311-2.858,26.621-4.287,37.932C136.688,187.473,121.307,185.341,106.972,182.768").attr({
      parent: 'UT',
      'stroke-width': '0'
  }));
  UT.attr({
      fill: '#003366',
      id: 'UT',
      name: 'UT'
  });
  var MT = rsr.set();
  MT.push(rsr.path("M116.667,50.051l3.935-10.524c7.239,1.467,87.1,13.949,87.192,12.596c-0.182,2.671-2.695,44.43-3.455,44.369     c-15.165-1.212-30.175-2.726-45.021-4.84c-2.75-0.391-2.949-0.783-5.698-1.174c-1.468-0.209-7.176,3.009-8.215,6.804     c-2.272-0.487-10.04-4.47-10.953-2.096c-0.359-0.375-1.929,0.393-3.461-0.934c-1.537-1.331-3.036-4.756-3.234-5.502     c-0.757-2.848,0.488-6.064-1.203-8.706c-1.553-0.828-3.121-1.466-2.423-5.136c0.358-1.881,0.894-3.825,1.27-5.135    C125.4,69.774,118.5,65.885,116.667,50.051z").attr({
      parent: 'MT',
      'stroke-width': '0'
  }));
  MT.attr({
      fill: '#003366',
      id: 'MT',
      name: 'MT'
  });
  var WY = rsr.set();
  WY.push(rsr.path("M143.703,126.102c0.852-5.815,1.703-11.632,2.554-17.447c0.141-0.959,0.426-9.256,1.334-11.235s3.906-3.191,4.789-4.053     c2.019-1.972,11.814,1.11,14.631,1.47c5.212,0.666,6.438,0.298,11.667,0.81c5.598,0.547,11.191,2.128,16.798,2.565     c0.944,0.073,8.457-0.034,8.389,0.926c-0.214,3.016-0.429,6.032-0.643,9.048c-0.804,11.316-3.571,24.634-4.334,35.953     c-2.316-0.183-4.616-1.375-6.903-1.576c-16.483-1.451-32.29-3.374-48.886-5.637C143.786,132.29,143.275,128.984,143.703,126.102").attr({
      parent: 'WY',
      'stroke-width': '0'
  }));
  WY.attr({
      fill: '#003366',
      id: 'WY',
      name: 'WY'
  });
  var NM = rsr.set();
  NM.push(rsr.path("M145.404,254.441c2.653-16.866,4.306-33.948,6.442-50.888c0.423-3.351,0.845-6.701,1.268-10.053     c0.375-2.974,1.886-1.653,4.826-1.308c7.662,0.903,18.331,1.843,26.02,2.483c8.152,0.68,16.293,1.341,24.457,1.852     c2.133,0.134,0.204,5.257,0.038,6.559c-0.478,3.731-0.465,8.593-0.694,12.346c-0.506,8.263-1.037,16.5-1.761,24.746     c-0.318,3.622-0.493,7.261-0.729,10.89c-0.256,3.933-5.24,1.971-8.24,1.771c-8.504-0.568-17.007-1.363-25.481-2.26     c0.377,0.7,0.361,1.851,0.821,2.533c-5.019-0.511-13.034-2.082-18.05-2.627c-1.068-0.116-0.43,4.354-1.314,4.708    C151.12,255.948,147.427,254.689,145.404,254.441").attr({
      parent: 'NM',
      'stroke-width': '0'
  }));
  NM.attr({
      fill: '#003366',
      id: 'NM',
      name: 'NM'
  });
  var CO = rsr.set();
  CO.push(rsr.path("M153.62,189.666c2.227-17.619,4.876-48.41,6.599-48.201c2.773,0.335,21.254,2.457,27.736,2.968     c6.468,0.511,13.791,3.009,20.411,3.486c3.926,0.284,6.867,0.368,8.804,0.466c2.099,0.105,0.759,5.78,0.689,7.154     c-0.634,12.529-1.231,27.061-1.843,39.591C195.479,193.827,174.058,192.077,153.62,189.666").attr({
      parent: 'CO',
      'stroke-width': '0'
  }));
  CO.attr({
      fill: '#003366',
      id: 'CO',
      name: 'CO'
  });
  var TX = rsr.set();
  TX.push(rsr.path("M174.468,254.992c-0.429-0.647-0.657-1.67-0.779-2.465c3.831,0.416,33.76,4.178,33.943,1.28     c0.833-13.12,1.861-26.218,2.645-39.343c0.085-1.426-0.457-5.99,0.428-7.174c1.188-1.591,4.566-0.628,6.867-0.495     c5.841,0.339,11.779,0.253,17.594,0.794c2.542,0.236,0.664,16.042,0.584,18.684c-0.073,2.434,5.289,6.26,7.425,3.669     c0.953,0.687,3.967,1.222,4.58,1.431c2.556,0.874,3.671,1.061,6.334,1.367c0.521,1.32,1.23,4.068,3.054,2.198     c0.946-0.971,2.791,1.585,4.807,0.733c-0.097,2.869,2.185-0.315,3.534-0.667c1.229-0.32,2.61,1.554,4.002,2.465     c2.509-2.738,6.333-3.792,9.369-2.798c2.536,0.83,4.577,2.354,6.792,2.768c2.957,0.553,1.9,12.121,1.986,15.018     c0.108,3.673,1.409,6.19,2.818,9.364c0.47,1.058,1.511,2.189,1.851,3.298c0.16,0.52-0.011,1.803,0.195,2.332     c0.376,0.965-0.946,5.504-1.397,6.229c-0.705,1.134,1.079,2.737-0.097,4.064c-1.092,1.232-2.464,2.32-0.78,3.83     c-2.873-0.053-6.218,2-8.38,3.664c0.525-1.055,1.708-1.808,2.729-2.131c-0.905,0.206-1.791,0.123-2.729,0.4     c0.999-1.927,0.24-3.714-1.169-1.4c-0.325-0.2-0.649-0.399-0.974-0.6c-0.229,2.468,1.591,2.811,0.097,4.996     c-2.131,3.118-4.303,5.253-8.348,6.129c0.043,0.223,0.086,0.444,0.13,0.667c0.515-0.228,0.806-0.44,1.365-0.6     c-1.368,0.745-2.831,1.35-4.158,2.198c0.66-0.477,1.116-1.174,1.625-1.665c-0.455,0.199-0.91,0.399-1.364,0.599     c0.13-0.155,0.26-0.311,0.39-0.466c-0.69-0.057-0.632,0.14-0.909-0.6c-0.962-0.254-0.895,0.271-1.885-0.533     c0.195,0.444,0.39,0.889,0.585,1.333c-0.601-0.334-1.117-0.209-1.819-1.066c-0.238,0.022-0.476,0.044-0.714,0.066     c0.773,1.282,0.924,1.525,0.975,2.532c0.674-0.016,0.742,0.099,1.364,0.2c-1.24,1.575-2.869,1.793-3.703-0.2     c0.304,1.276,0.243,3.005-1.299,3.664c0.207-0.535,0.163-0.788,0.195-1.333c-0.206,0.628-0.505,0.796-0.844,1.333     c-0.644-0.369-0.593,0.005-1.56-0.267c-0.078,0.811-0.122,0.901,0.455,1.6c0.331-0.391,0.632-0.745,0.975-1.133     c-0.195,1.198-0.835,2.253-1.689,3.197c-1.141-0.68-1.426-0.479-2.793-0.333c0.336,0.052,0.708,0.013,1.039,0.066     c1.424,1.732,0.976,4.882-1.299,5.863c0.217-0.178,0.433-0.355,0.65-0.533c-1.204,0.201-2.108-0.12-2.923-1.132     c0.391,1.697,1.342,2.697,3.248,1.932c-0.019,2.171-1.889,2.76-0.584,4.33c-0.217-0.089-0.433-0.177-0.65-0.266     c1.083,2.735,1.792,5.972,2.858,8.86c-0.238,0-0.477,0-0.715,0c0.173,0.311,0.347,0.622,0.52,0.933     c0.173-0.244,0.347-0.488,0.52-0.732c-0.065,0.244-0.13,0.488-0.195,0.732c0.26-0.222,0.52-0.444,0.78-0.666     c0.043,0.267,0.086,0.532,0.13,0.799c-3.951,1.047-1.157,0.725-4.808-0.6c-1.004-0.364-1.856-0.184-2.858-0.399     c-2.471-0.532-2.577-0.858-4.612-1.799c-1.381-0.638-2.219-0.966-3.573-1.665c-2.951-1.524-2.552-0.515-3.833-4.131     c-0.721-2.038-1.949-2.993-1.949-5.164c0-0.518-0.324-3.711-1.04-4.297c-3.222-2.639-5.313-6.312-6.886-9.859     c-2.619-5.905-7.544-15.957-14.845-14.59c-0.989,0.185-1.576-0.801-2.501-0.801c-0.688,0-0.724,0.933-1.688,0.834     c-2.987-0.306-2.223,3.346-3.898,4.497c-0.212,0.146-2.334,2.916-2.437,3.23c-0.544,1.672-3.76-1.382-4.337-1.656     c-2.463-1.173-6.174-3.351-7.909-5.772c-2.268-3.166-0.959-7.359-3.053-10.592c-1.687-2.604-5.139-4.533-7.158-7.329     c-1.201-1.663-2.816-3.198-4.146-4.598C177.819,256.49,175.869,255.447,174.468,254.992").attr({
      parent: 'TX',
      'stroke-width': '0'
  }));
  TX.attr({
      fill: '#003366',
      id: 'TX',
      name: 'TX'
  });
  var NE = rsr.set();
  NE.push(rsr.path("M200.929,144.539c0.457-7.312,0.913-13.625,1.37-20.938c0.016-0.255,21.675,0.926,23.384,1.025     c6.481,0.378,12.975,0.639,19.466,0.746c1.373,0.022,3.46-0.341,4.779,0.079c1.181,0.376,7.121,2.262,8.566,2.503     c0.52,0.087,1.754-0.699,2.503-0.744c2.219-0.132,2.211,0.082,3.942,0.676c5.836,2.001,6.852,7.125,7.946,13.053     c0.379,2.056,2.489,4.93,1.983,8.322c-0.426,2.86,2.458,7.132,4.086,9.33c-18.611,0.195-40.159-0.286-58.755-1.014     c0.083-1.76,1.489-10.104,0.156-10.889c-2.482-1.461-9.957-0.935-12.727-1.15").attr({
      parent: 'NE',
      'stroke-width': '0'
  }));
  NE.attr({
      fill: '#003366',
      id: 'NE',
      name: 'NE'
  });
  var SD = rsr.set();
  SD.push(rsr.path("M204.72,120.92c0.273-3.648,0.546-7.296,0.819-10.944c0.21-2.81-0.347-7.369,0.884-9.953     c0.518-1.086,0.414-9.313,0.938-9.281c4.36,0.268,9.721,0.535,14.081,0.803c14.347,0.881,32.74,0.961,47.108,1.026     c-0.174,1.314-2.337,3.551-2.337,3.551l3.81,7.808l-0.373,16.905c0,0,1.865,8.887,1.568,9.355c-1.279,2.021-0.29-5.505-8.884-5.139     c-2.145,0.222-2.676,1.945-4.5,1c-3.261-1.689-11.372-3.334-15.299-3.391C230.252,122.482,216.97,121.78,204.72,120.92").attr({
      parent: 'SD',
      'stroke-width': '0'
  }));
  SD.attr({
      fill: '#003366',
      id: 'SD',
      name: 'SD'
  });
  var ND = rsr.set();
  ND.push(rsr.path("M207.548,89.218c0.799-11.774,1.862-23.562,2.381-35.352c17.161,1.148,34.336,1.944,51.539,1.944     c0.396,11.793,4.104,23.695,5.182,35.496C246.901,91.21,227.253,90.529,207.548,89.218").attr({
      parent: 'ND',
      'stroke-width': '0'
  }));
  ND.attr({
      fill: '#003366',
      id: 'ND',
      name: 'ND'
  });
  var OK = rsr.set();
  OK.push(rsr.path("M211.7,202.97c0.111-1.831-0.777-4.662-0.666-6.493c18.455,1.17,37.91,2.607,56.399,2.607     c4.198,0,8.388-0.047,12.586-0.125c2.121-0.04,4.009-1.006,4.066,1.331c0.062,2.521,0.226,4.771,0.642,7.25     c1.57,9.35,1.4,18.509,1.467,27.987c-2.179-0.351-3.293-1.271-5.106-2.404c-2.237-1.397-1.728,0.686-3.703,0.127     c-2.177-0.616-5.992-0.041-7.604,1.942c-1.436-0.915-3.884-2.808-5.159-2.479c-1.41,0.364-2.639,3.649-2.613,0.67     c-2.681,1.112-2.433-0.904-4.421-1.272c-0.264-0.049-2.311,2.62-2.445,0.736c-0.055-0.768-0.905-1.584-1.24-2.411     c-2.676-0.412-3.922,0.501-6.532-0.368c-0.687-0.229-2.721-0.303-3.182-0.637c-0.629-0.457-0.573-0.14-1.541-0.814     c-1.352,1.666-5.759-0.237-5.661-2.01c0.335-6.05,1.391-11.127,1.579-17.184c0.123-3.947-5.993-3.568-9.069-3.707    c-5.44-0.244-12.363-0.439-17.8-0.747").attr({
      parent: 'OK',
      'stroke-width': '0'
  }));
  OK.attr({
      fill: '#003366',
      id: 'OK',
      name: 'OK'
  });
  var KS = rsr.set();
  KS.push(rsr.path("M218.349,195.131c0.576-11.784,1.151-23.568,1.727-35.353c19.071,0.972,38.123,1.286,57.216,1.103     c2.137-0.021,6.154,0.616,6.36,2.857c0.009,0.097-2.366,1.213-1.872,2.448c0.434,1.086,1.624,2.534,2.304,3.384     c0.821,1.025,2.003,0.94,2.036,2.368c0.063,2.735,0.126,5.471,0.189,8.205c0.122,5.308,0.245,10.615,0.367,15.923    C263.874,196.493,241.132,196.13,218.349,195.131").attr({
      parent: 'KS',
      'stroke-width': '0'
  }));
  KS.attr({
      fill: '#003366',
      id: 'KS',
      name: 'KS'
  });
  var MN = rsr.set();
  MN.push(rsr.path("M263.583,55.52c2.947,0,6.903,1.07,9.85,0.99c4.656-0.126,4.775,0.461,4.692-4.197c2.707,0.099,2.398,2.582,2.968,4.698     c0.629,2.336,2.254,4.739,4.843,5.059c1.988,0.246,1.386,0.426,2.551,1.134c1.293,0.785,1.822-0.884,2.714-0.95     c1.607-0.12,4.779-0.572,4.757,1.629c0.929,0.42,1.667,1.082,2.379,2.036c0.567-1.796,3.588-0.851,3.965,0.814     c0.637,2.812,4.906-0.927,5.856-1.29c0.192,1.596,1.796,1.603,3.385,1.12c2.133-0.649,2.658,1.511,5.093,0.645     c-2.07,2.091-4.824,2.956-7.24,4.552c-2.777,1.834-4.223,5.308-6.544,7.63c-2.177,2.176-3.688,3.107-3.564,5.983     c0.07,1.615,0.487,3.392-0.34,4.841c-0.751,1.316-2.533,1.292-2.989,3.122c-0.136,0.544-1.14,1.985,0.244,2.138     c1.602,0.177,0.508,3.618,0.488,4.649c-0.048,2.486-0.764,5.523,2.562,6.143c4.351,0.809,8.167,7.414,9.088,11.23     c-12.457,0.796-23.908,2.243-36.389,2.357c-0.011-1.861-0.558-15.787-0.558-15.787l-1.907-6.183l-1.227-2.14     c0,0,1.326-1.838,1.471-2.34c0.133-0.462-0.152,0.242-0.62-1.604c-0.07-0.278-1.145-0.569-1.222-0.871     c-0.606-2.354-0.414-7.409-1.04-10.709C265.062,70.805,263.674,58.391,263.583,55.52").attr({
      parent: 'MN',
      'stroke-width': '0'
  }));
  MN.attr({
      fill: '#003366',
      id: 'MN',
      name: 'MN'
  });
  var IA = rsr.set();
  IA.push(rsr.path("M272.529,132.103c-1.05-1.775-1.109-3.8-0.06-5.638c0.458-0.803-0.599-3.322-0.835-4.447     c12.558-0.016,25.101-0.498,37.634-1.253c0.829,1.698-0.028,6.928,2.057,7.925c2.302,1.099,6.735,4.827,6.354,8.029     c-0.306,2.574-1.679,3.235-3.462,4.654c-1.382,1.1-2.366-0.271-2.654,1.848c-0.217,1.598,2.017,2.097,0.717,3.915     c-0.438,0.614-2.39,4.308-2.506,4.134c1.986,2.979-2.922-1.12-2.594-1.002c-1.669-0.603-6.564,0.67-8.531,0.791     c-3.359,0.206-6.712,0.441-10.077,0.523c-3.466,0.086-6.93,0.03-10.397,0.003c-1.342-0.01-1.009-4.118-1.113-5.201     c-0.248-2.59-0.832-4.419-1.551-6.64C274.861,137.737,273.689,133.235,272.529,132.103").attr({
      parent: 'IA',
      'stroke-width': '0'
  }));
  IA.attr({
      fill: '#003366',
      id: 'IA',
      name: 'IA'
  });
  var MO = rsr.set();
  MO.push(rsr.path("M279.052,156.583c8.242,0.073,16.458-0.017,24.678-0.726c0.756-0.065,8.751-0.833,7.334,2.219     c-0.853,1.835,0.294,5.056,1.348,6.644c1.219,1.836,3.931,2.532,5.071,4.378c0.723,1.17,0.381,3.104,1.54,3.999     c0.416,0.321,1.137-1.099,2.094-0.624c2.377,1.179,2.158,3.235,0.729,5.809c-1.38,2.481,3.237,3.954,3.846,5.479     c4.131-0.965,3.718,5.515,4.735,7.119c1.179,1.858,2.685,1.554,3.427,3.078c0.491,1.009-0.225,3.01-0.414,4.045     c-1.409,0.002-1.44,0.118-2.272,1.436c-0.093-0.285-0.181-0.91-0.255-1.251c0.017,1.279-0.208,1.803-0.492,2.466     c-0.047,1.082,0.594,0.461-0.472,1.436c1.67,1.971-0.848,2.617-2.579,2.738c-3.691,0.258-2.007,0.047-2.044-2.023     c-0.018-0.969,2.063-1.112,0.681-2.87c-1.284-1.634-4.799-0.679-6.581-0.626c-6.294,0.187-12.573,0.31-18.869,0.362     c-2.395,0.02-4.781,0.018-7.175-0.016c-5.205-0.071-4.701,0.166-4.864-5.055c-0.193-6.207-0.367-12.414-0.55-18.62     c-0.06-2.01-0.048-3.31-0.797-4.828c-0.416-0.842-2.756-2.404-2.855-3.516c-0.084-0.947,1.414-2.553,1.429-2.44     c-0.27-1.981-1.626-1.143-2.912-2.169C281.356,161.849,279.43,158.503,279.052,156.583").attr({
      parent: 'MO',
      'stroke-width': '0'
  }));
  MO.attr({
      fill: '#003366',
      id: 'MO',
      name: 'MO'
  });
  var AR = rsr.set();
  AR.push(rsr.path("M286.563,203.309c4.935-0.126,36.854-3.805,37.691-0.071c0.306,1.367-2.516,2.315-2.048,3.382     c0.232,0.528,7.021,0.73,5.151,1.479c-1.271,0.511-1.769,4.252-2.208,5.638c-1.144-0.438-0.147-0.144-1.023,0.562     c0.214-0.07,0.426-0.14,0.64-0.211c0.594,2.193-1.284,6.486-2.816,6.129c0.064,0.54,0.128,1.081,0.192,1.621     c-0.552-0.436-0.197-0.033-0.703-0.706c0.263,0.941-0.049,0.79,0.639,1.48c-0.213,0.117-0.426,0.234-0.639,0.352     c-0.064-0.234-0.129-0.469-0.192-0.703c0.777,2.781-1.049,4.587-2.753,5.564c0.721,1.282,0.479,2.399-1.15,2.959     c0.362,1.558,0.332,1.282-0.385,2.255c0.218,0.766,0.067,0.299,0.704,0.774c-0.67,0.173-0.697,0.212-1.279,0.423     c0.127,1.165,0.113,1.401-0.064,2.747c0.214-0.211,0.427-0.422,0.64-0.634c0.129,0.164,0.257,0.329,0.385,0.492     c-0.213,0.165-0.427,0.329-0.641,0.493c0.039,0.029,0.781,0.215,0.704,0.142c0.942,3.846-0.134,4.577-4.297,4.827     c-6.888,0.412-13.765,0.748-20.66,1.021c-0.037-1.189,0.542-5.377-0.192-6.199c-0.854-0.957-2.602,0.259-3.136-0.212     c-1.848-1.625-0.685-7.747-0.698-9.989C288.372,218.773,287.792,211.364,286.563,203.309").attr({
      parent: 'AR',
      'stroke-width': '0'
  }));
  AR.attr({
      fill: '#003366',
      id: 'AR',
      name: 'AR'
  });
  var LA = rsr.set();
  LA.push(rsr.path("M290.444,245.248c8.536-0.328,17.05-0.775,25.578-1.273c-0.033-0.135-0.396,1.059-0.396,1.062     c1.908-0.866,0.453,1.015,1.52,2.193c-0.871,1.176-1.04,1.471,0.596,1.203c-0.595,0.992-0.084,0.51-0.066,1.415     c-0.324,0.108-0.432-0.256-0.728-0.071c0.737,0.78,1.042,1.448,1.983,1.98c-0.797,0.372-1.53,1.205-2.248,1.91     c0.524,0.037,0.859,0.039,1.389,0c-0.678,0.77-0.447,0.812-1.256,1.202c0.369,0.266-1.795,4.764-2.775,5.52     c0.22,0.023,0.44,0.047,0.66,0.07c-0.391,1.143-0.734,1.87-1.256,2.405c0.439,1.367,0.804,0.75-0.594,1.485     c0.671,1.067,0.753,2.132,0.132,3.042c1.688-0.106,16.962-2.178,17.646-1.132c0.988,1.514-1.797,3.535,0.299,5.482     c1.159,1.076,0.893,2.55,2.213,3.572c-2.316,0.81-4.499-2.54-6.807-1.557c-2.537,1.081-1.403,3.145,0.462,3.396     c1.695,0.229,3.581-0.908,4.362-1.486c0.022,0.235,0.044,0.472,0.066,0.707c0.271-0.092,0.652-0.359,0.859-0.424     c-2.885,2.048-0.309,3.861,1.85,0.708c0.521,1.282,0.862,2.066,0.661,3.396c-1.528-0.338-1.708,0.309-0.793,1.627     c-0.495-0.161-0.939-0.086-1.388-0.212c-1.489,2.439,4.853,3.133,6.213,5.022c-0.252,0.47-0.66,1.38-1.058,2.122     c-0.309-0.4-0.617-0.802-0.926-1.202c-0.401,0.756-1.107,1.459-1.454,2.192c0.587-1.282,0.648-1.841,0.661-2.972     c-0.021,0.307-0.044,0.613-0.065,0.92c-1.171-1.48-2.709-2.087-4.627-2.122c0.629-1.683-2.12-1.917-3.635-2.618     c0.769,0.965,2.212,2.224,0.991,3.256c0.393,1.264,0.187,1.563-1.124,2.264c0.042-1.5-1.372-2.601-2.246-2.406     c-1.373,0.306-1.797,2.661-2.479,2.264c-1.921-1.115-6.055-0.969-5.123-5.094c-0.373,3.126-4.006-1.778-5.816-0.989     c0.03-0.372,0.048-0.817,0.066-1.202c-1.05,0.457-2.098,0.862-3.105,1.202c0.636,0.51,0.622,1.181,1.123,1.697     c-3.768,1.702-8.126-1.063-11.83-2.052c1.098-0.819,1.068-1.803,0-2.829c-0.276,0.731-0.584,1.768-0.793,2.405     c1.243,1.572-3.113,2.001-3.503,1.768c-0.986-0.59-0.137-2.341,0-3.253c0.242-1.61,0.583-3.489,0.727-5.165     c0.114-1.325,1.328-3.573,1.124-4.775c-0.533-3.132-0.234-5.207-2.446-8.17C289.946,257.522,290.595,250.573,290.444,245.248").attr({
      parent: 'LA',
      'stroke-width': '0'
  }));
  LA.attr({
      fill: '#003366',
      id: 'LA',
      name: 'LA'
  });
  var WI = rsr.set();
  WI.push(rsr.path("M303.713,80.493c3.342,3.258,12.062-7.177,8.983,1.089c1.73-0.574,4.026-0.098,5.512,1.089     c2.902,2.318,7.456,3.259,11.365,4.083c1.249,0.263,2.503,0.233,3.776,0.375c2.049,0.227,1.221,1.497,2.96,2.042     c2.738,0.858-0.443,5.125,2.723,4.185c-1.182,2.149,0.948,2.288,0.544,4.015c-0.229,0.979-3.552,2.451-2.654,4.492     c0.954,2.17,1.721-1.355,2.45-1.905c1.44-1.085,3.528-1.769,2.46,1.142c-1.477,4.023-1.157,7.975-1.916,12.162     c-0.834,4.603,0.903,7.438,1.021,11.875c-7.447,0.467-21.959,4.583-26.676-1.226c-0.68-0.837-0.788-2.813-1.021-3.879     c-0.124-0.566,0.476-1.354,0.34-2.109c-0.025-0.14-0.937-0.758-1.02-1.225c-0.576-3.26-0.842-4.286-3.268-6.397     c-2.656-2.312-4.729-4.292-7.791-5.682c-4.245-1.926-0.611-5.962-1.26-9.085c-0.341-1.639-2.086-1.243-1.973-2.994     c0.084-1.302,2.236-2.922,3.198-3.403C304.581,87.579,301.077,82.592,303.713,80.493").attr({
      parent: 'WI',
      'stroke-width': '0'
  }));
  WI.attr({
      fill: '#003366',
      id: 'WI',
      name: 'WI'
  });
  var IL = rsr.set();
  IL.push(rsr.path("M313.723,154.943c0.24-1.993,2.526-3.068,2.526-4.807c0-1.515,1.069-2.272,1.024-3.939     c-0.023-0.888-2.807-3.328-0.13-3.909c3.208-0.697,7.12-3.573,6.138-7.514c-0.384-1.539-3.446-4.479-4.438-5.422     c6.16-0.38,12.306-0.737,18.448-1.328c0.683-0.066,3.62-0.809,4.218-0.406c0.818,0.551-0.135,1.351,0.342,2.241     c0.834,1.561,1.531,3.132,2.185,4.771c1.932,4.851,1.711,10.669,2.184,15.939c0.373,4.158,2.499,12.095,0.684,15.614     c-0.516,0.999,0.802,3.377,1.127,4.41c0.559,1.775-1.099,3.894-1.81,5.53c-1.03,2.372-0.796,6.396-2.015,8.24     c-1.315,1.991,1.024,1.4-1.775,3.289c-1.759,1.188-0.975,1.382-0.477,3.145c0.629,2.228-8.958-2.008-5.838,2.747     c-4.693-0.343-2.561-11.438-7.851-9.976c-1.289-3.789-4.456-2.553-3.277-7.518c0.446-1.883,1.734-3.56-0.41-4.627     c-1.236-0.615-2.498,0.916-2.935,0.65c-1.547-0.942-0.602-3.836-2.049-5.061c-1.282-1.086-2.415-1.826-3.481-3.072    C314.149,161.652,312.218,158.106,313.723,154.943").attr({
      parent: 'IL',
      'stroke-width': '0'
  }));
  IL.attr({
      fill: '#003366',
      id: 'IL',
      name: 'IL'
  });
  var MS = rsr.set();
  MS.push(rsr.path("M321.299,241.401c0.369-1.574,0.805-2.494,0.354-4.315c0.076,0.149-0.674-0.131-0.676-0.133     c0.212-0.153,0.425-0.308,0.637-0.461c-0.118-0.153-0.235-0.307-0.354-0.46c-0.214,0.197-0.428,0.396-0.642,0.593     c0.35-1.234,0.239-1.498,0.165-2.56c0.504-0.21,0.652-0.276,1.246-0.392c-1.111-0.794,0.647-1.062-0.199-2.795     c1.586-0.432,1.827-1.53,1.203-2.707c1.705-0.921,3.333-2.429,2.792-5.03c0.054,0.211,0.107,0.421,0.161,0.632     c0.205-0.105,0.411-0.211,0.616-0.316c-0.685-0.614-0.333-0.461-0.562-1.325c0.053,0.231,0.105,0.462,0.158,0.693     c0.162-0.021,0.325-0.042,0.487-0.062c-0.045-0.482-0.091-0.966-0.136-1.448c1.271-0.069,1.093,0.091,1.248-1.317     c3.935-0.314,14.111-2.811,17.426-0.749c2.205,1.37-0.086,19.56-0.142,22.369c-0.133,6.658,0.105,12.603,0.892,19.219     c0.243,2.05,1.749,6.667,0.802,8.604c-0.322,0.658-3.914-0.021-4.869-0.254c0.324,0.024,0.649,0.048,0.974,0.072     c-3.948,1.347-6.931,5.08-8.488-1.016c-0.925-3.62,2.07-5.399-2.728-4.991c-4.737,0.403-9.474,0.727-14.219,1.035     c0.644-0.902,0.613-1.972,0.003-3.062c1.375-0.725,1.005-0.128,0.642-1.485c0.513-0.533,0.896-1.281,1.313-2.392     c-0.212-0.023-0.424-0.047-0.636-0.07c0.975-0.738,3.225-5.157,2.885-5.423c0.751-0.387,0.589-0.442,1.244-1.169     c-0.515,0.025-0.807,0.085-1.326,0c0.767-0.562,1.428-1.484,2.213-1.851c-0.936-0.6-1.183-1.222-1.752-2.044     c0.207,0.068,0.414,0.136,0.621,0.204c-0.376-0.719-0.442-0.69,0.112-1.356c-0.379,0.067-0.758,0.136-1.137,0.203     c0.1-0.679,0.222-0.624,0.615-1.352c-0.587-1.164,0.249-2.806-1.358-2.085C320.895,242.225,321.305,241.429,321.299,241.401").attr({
      parent: 'MS',
      'stroke-width': '0'
  }));
  MS.attr({
      fill: '#003366',
      id: 'MS',
      name: 'MS'
  });
  var TN = rsr.set();
  TN.push(rsr.path("M328.075,215.793c1.551-0.848,2.106-2.145,1.569-3.926c-0.218,0.06-0.437,0.118-0.654,0.178     c0.792-0.452-0.025-0.854,1.046-0.476c0.461-1.202,0.162-0.958,1.111-2.143c-0.117-1.924,2.467-3.257,1.308-5.891     c1.05-0.739,1.188-1.428,0.85-2.737c0.196-0.02,0.392-0.04,0.588-0.06c-0.044,0.158-0.087,0.317-0.131,0.476     c2.215-1.4,13.933,0.404,11.832-3.213c8.659,1.051,18.37-1.575,27.134-1.995c8.97-0.431,17.748-2.802,26.665-3.419     c-0.043,1.032-2.302,5.819-3.17,5.206c-0.51-0.36-5.279,2.427-5.263,2.351c-0.191,0.868-4.023,4.01-5.589,4.641     c-1.623,0.655-5.981,2.748-5.981,4.575c0,2.727-1.2,1.836-3.664,2.12c-2.482,0.287-4.965,0.587-7.449,0.861     c-4.406,0.486-8.81,0.954-13.23,1.271C346.005,214.264,337.39,215.138,328.075,215.793").attr({
      parent: 'TN',
      'stroke-width': '0'
  }));
  TN.attr({
      fill: '#003366',
      id: 'TN',
      name: 'TN'
  });
  var KY = rsr.set();
  KY.push(rsr.path("M339.514,197.107c1.364-1.094,2.603-2.401,2.06-4.84c-1.06-4.76,2.523-1.124,4.246-1.654     c2.286-0.703-1.213-3.18,2.435-4.09c0.36-0.089,1.903-4.354,1.936-4.775c0.654,0.028,1.446-0.217,1.936-0.188     c0.042,0.229,0.083,0.458,0.125,0.688c0.36-0.668,0.483,0.098,0.438-0.875c1.418-0.467,2.978-0.218,4.12,0.875     c0.431-1.187,1.105-1.455,1.998-2.248c0.572,0.758,1.144,0.634,1.811,1.248c0.271-1.465,1.231-2.653,1.436-3.684     c2.929,4.261,4.676-1.146,5.744-3.184c0.113-0.217,2.088-3.225,1.374-3.153c0.815-0.081,5.451-0.658,4.121-2.122     c-1.744-1.919,0.883-2.028,1.842-2.311c1.443-0.425,1.64,0.89,2.466,1.217c1.258,0.498,1.566,0.898,2.997,1.312     c2.925,0.844,5.2,1.53,7.93-0.874c0.817,2.056,3.765,2.367,3.091,5.058c-0.461,1.841,4.248,6.174,6.024,6.056     c-4.781,5.619-8.165,10.917-15.797,11.926c-5.382,0.711-10.883,1.368-16.307,1.627c-5.039,0.24-10.378,1.781-15.348,1.119    C352.124,197.786,341.832,196.911,339.514,197.107").attr({
      parent: 'KY',
      'stroke-width': '0'
  }));
  KY.attr({
      fill: '#003366',
      id: 'KY',
      name: 'KY'
  });
  var IN = rsr.set();
  IN.push(rsr.path("M348.286,178.383c-0.849-2.461,0.521-4.481,1.774-6.604c1.989-3.364,0.345-4.096,0.062-7.194     c-0.256-2.803,0.246-6.63-0.086-10.127c-0.51-5.368-1.181-10.75-1.502-16.131c2.054,1.936,4.866-0.947,7.195-1.184     c2.723-0.276,10.368-2.745,12.365-1.495c3.188,1.996,3.248,21.522,3.642,24.976c0.109,0.958,0.877,4.56,0.595,4.989     c-0.701,1.066-3.055,0.747-3.676,0.996c-1.646,0.661,0.055,0.722-0.623,1.619c-1.656,2.194-3.934,9.473-7.102,4.859     c-0.204,1.027-1.163,2.215-1.433,3.676c-0.666-0.612-1.235-0.489-1.807-1.246c-0.89,0.791-1.563,1.06-1.993,2.242     c-1.141-1.09-2.696-1.338-4.111-0.871c0.045,0.971-0.075,0.205-0.437,0.871c-0.042-0.229-0.083-0.456-0.125-0.685     c-0.488-0.029-1.278,0.215-1.931,0.187C349.645,178.584,348.76,177.986,348.286,178.383").attr({
      parent: 'IN',
      'stroke-width': '0'
  }));
  IN.attr({
      fill: '#003366',
      id: 'IN',
      name: 'IN'
  });
  var AL = rsr.set();
  AL.push(rsr.path("M347.16,217.223c4.574-2.404,16.162-1.674,21.975-2.347c2.287-0.265,6.423,18.387,7.142,20.984     c0.593,2.14,1.747,3.571,2.705,5.433c1.253,2.435,0.315,2.438,0.068,4.42c-0.403,3.245,0.063,9.61,1.972,12.375     c-7.208,0.863-14.409,1.732-21.632,2.461c-4.032,0.406-1.788,1.248-1.011,3.386c0.461,1.267,1.396,4.137-1.02,4.147     c-0.327,1.49-1.892,1.455-3.604,1.633c1.712-0.104,2.64-1.136,0.985-2.041c-1.132-0.619-0.377-2.529-1.733-3.535     c-0.195,0.867-0.315,4.216-0.816,4.216c-1.916,0-2.375,0.069-2.608-1.689c-0.683-5.138-2.098-10.645-2.003-15.83     c0.124-6.723,0.247-13.446,0.37-20.17C348.005,227.702,349.799,219.176,347.16,217.223").attr({
      parent: 'AL',
      'stroke-width': '0'
  }));
  AL.attr({
      fill: '#003366',
      id: 'AL',
      name: 'AL'
  });
  var MI = rsr.set();
  MI.push(rsr.path("M352.557,135.586c1.891-1.431,3.067-4.791,3.6-6.983c0.878-3.616-1.453-8.258-0.576-11.017     c-3.369,0.557-1.96-4.568-2.16-5.903c-0.15-1.001-1.065-2.376-0.972-3.312c0.123-1.228,1.455-2.37,1.584-3.78     c0.223-2.44-0.378-3.93,0.9-5.867c0.874-1.325,2.481-3.228,3.888-4.608c-0.467,1.578-0.359,3.33-0.216,4.824     c0.232-0.709,0.879-1.789,1.008-2.304c-0.106,0.726-0.128,1.506-0.216,2.232c2.157-2.281-0.948-7.306,3.672-7.128     c-2.306-2.289-0.156-4.544,2.16-4.752c1.815-0.163,5.006,1.64,6.552,2.412c0.214,0.106,7.603,3.498,5.112,3.996     c-0.872,0.174,3.239,7.603,0.433,9.288c-0.238,0.143-2.137,3.685-2.16,3.744c-0.377,0.932-2.17,3.9,0.468,4.141     c2.912,0.266,2.545-3.919,5.22-5.076c4.299-1.86,5.171,4.299,6.12,7.776c0.632,2.313,2.969,6.653,0.217,8.496     c-0.553-3.825-2.054,2.421-2.809,2.987c-1.367,1.025-0.548,2.371-1.008,3.78c-0.951,2.914-1.962,3.777-4.776,4.352    C370.225,134.589,361.31,135.004,352.557,135.586").attr({
      parent: 'MI',
      'stroke-width': '0'
  }));
  MI.attr({
      fill: '#003366',
      id: 'MI',
      name: 'MI'
  });
  var FL = rsr.set();
  FL.push(rsr.path("M362.303,267.588c0.199-1.804-3.896-4.828-2.324-6.006c2.196-1.648,8.092-0.528,10.924-0.761     c3.169-0.26,10.557-2.468,12.393,0.363c1.797,2.77,3.166,1.948,6.771,1.894c6.057-0.092,12.114-0.184,18.171-0.275     c1.791-0.026,3.581-0.054,5.371-0.081c1.429-0.021,1.03,1.981,2.021,2.142c2.067,0.333,0.166-4.189,1.019-4.945     c1.195-1.061,5.75,0.277,5.276,2.186c-0.139-0.176-0.276-0.351-0.415-0.526c3.298,3.981,4.091,10.422,7.024,14.95     c1.513,2.335,4.667,4.843,5.654,7.445c0.883,2.325-0.029,4.461,2.133,7.057c-2.182-2.357-1.982-4.184-2.465-7.033     c-0.141-0.833-2.297-1.674-2.854-2.493c1.682,5.626,7.838,10.988,8.139,16.572c4.16,0.801,3.399,10.799,3.529,14.226     c-0.083-0.242-0.165-0.483-0.248-0.726c-0.488,2.713-0.815,5.164-1.176,7.729c-0.276-0.109-0.552-0.219-0.828-0.328     c0.127,0.109,0.254,0.218,0.381,0.327c-1.201-0.149-8.038,3.513-6.438-0.209c0.475,0.25,1.021,0.632,1.482,0.922     c0.131-0.219,0.262-0.437,0.393-0.655c-3.993-1.169-4.417-5.483-8.914-6.062c0.22-0.087,0.44-0.175,0.66-0.262     c-2.652-1.104-4.267-5.604-2.374-7.678c-0.647,0.979-1.437,1.722-2.4,2.193c-0.396-1.481-0.893-3.603-0.071-4.469     c-1.245,0.178-1.248,0.185-2.485-0.045c0.757,0.63,0.79,1.092,1.281,1.856c-3.566,0.005-4.297-5.519-6.864-7.175     c0.229,0.188,0.458,0.378,0.687,0.566c0.653-1.215,2.944-3.839,1.335-5.347c-0.227,0.225-0.453,0.448-0.68,0.673     c-0.512-0.661-1.135-0.866-1.72-1.504c0.79,0.964,0.396,0.996,1.379,1.563c-0.041,0.786-0.343,1.508-0.808,2.122     c-0.311-0.289-1.144-0.847-1.446-1.213c0.254,0.353,0.508,0.704,0.762,1.057c-2.943-2.207,0.424-6.719-0.443-9.609     c-1.167-3.895-0.776-5.257-4.738-6.625c-2.231-0.771-5.752-5.142-7.069-7.033c-1.149-1.65-8.211-4.238-7.596-0.684     c-0.34-0.113-0.679-0.226-1.019-0.339c0.796,0.425,0.733,0.648,1.252,1.22c-1.774-0.508-10.705,6.068-10.447,1.338     c0.184,0.502,0.177,1.033,0.405,1.549c0.243-0.062,0.485-0.124,0.729-0.187c-0.372-2.429-3.036-3.21-4.465-4.522     c1.311,0.69,1.952,0.752,2.825,0.721c-1.619-0.473-4.072-1.252-2.148-3.044c-1.292,0.484-1.29,0.597-2.656,0.53     c0.554,0.569,0.867,1.336,1.315,1.834c-2.446-1.702-5.41-2.215-8.236-2.847c1.341-0.318,2.566-0.473,3.985,0.2     c-0.832-1.458-2.802-1.197-3.578-1.52c-1.531,1.984-4.914,1.788-7.209,2.024c1.985-0.27,2.194-1.3,0.969-2.646     c-0.147,0.562-0.583,1.084-0.703,1.611c-0.141-0.357-0.281-0.714-0.422-1.071c-0.147,0.143-0.295,0.284-0.442,0.427     c0.273,1.533-1.142,2.947-2.802,2.784C363.323,268.616,362.891,268.427,362.303,267.588").attr({
      parent: 'FL',
      'stroke-width': '0'
  }));
  FL.attr({
      fill: '#003366',
      id: 'FL',
      name: 'FL'
  });
  var OH = rsr.set();
  OH.push(rsr.path("M373.078,136.289c2.813-0.465,6.821-1.932,9.685-1.717c1.811,0.136,3.385,1.986,4.964,0.92     c0.184,0.204,0.367,0.409,0.551,0.613c-0.676,0.315-0.984,0.427-1.593,0.857c1.215-0.589,2.205-0.333,3.554-0.062     c0.733,0.147,2.84-1.386,3.556-1.716c1.776-0.818,2.504-0.701,4.075-2.451c1.544-1.719,3.964-2.771,5.914-3.922     c1.308,7.736,2.513,13.541,1.716,20.652c-0.043,0.38-0.222,1.842-0.368,2.574c-0.173,0.865-0.852,1.239-1.317,1.991     c-0.909,1.469-2.305,0.923-2.727,1.317c-1.836,1.717-1.594,3.711-2.268,5.762c-2.154-3.316-2.13,2.908-2.636,3.676     c-1.492,2.263-3.746,1.754-4.902-1.164c-1.956,1.723-3.652,1.738-5.793,1.931c-3.777,0.339-5.492-4.842-9.346-3.34    C375.158,153.565,374.166,144.923,373.078,136.289").attr({
      parent: 'OH',
      'stroke-width': '0'
  }));
  OH.attr({
      fill: '#003366',
      id: 'OH',
      name: 'OH'
  });
  var GA = rsr.set();
  GA.push(rsr.path("M420.166,249.562c0.168-0.48,0.336-0.96,0.504-1.44c-0.249-0.044-0.896-0.13-1.08-0.144     c0.553-0.999,0.29-0.377,0.359-1.368c0.265,0.168,0.528,0.336,0.793,0.504c0.039,0.087,0.258-1.226,0.216-1.152     c-0.24,0.096-0.48,0.192-0.721,0.288c-0.048-0.24-0.096-0.479-0.144-0.72c1.431-0.396,1.35-1.257,0.648-2.304     c1.304,0.598,1.954-0.296,2.447-1.656c-1.531-0.141-3.611-0.544-3.42-2.447c0.222-2.208-2.976-2.576-3.384-4.068     c-0.98-3.587-4.001-5.664-6.444-7.956c-2.287-2.146-7.866-5.054-9.215-8.425c-0.786-1.962-3.035-3.3-4.896-3.672     c-2.923-0.582-0.389-3.239,0.287-4.68c-6.316,0.987-12.591,1.921-18.942,2.63c-2.519,0.281-6.333-0.343-4.72,3.486     c1.208,2.867,2.771,5.758,3.602,8.759c1.181,4.266,1.818,12.695,5.336,15.941c3.374,3.113-0.97,5.717,0.36,9.504     c1.191,3.393,0.517,7.527,3.348,10.367c3.127,3.137,12.854,0.557,17.641,0.208c2.896-0.211,5.792-0.422,8.688-0.633     c2.825-0.206,1.822-0.309,2.436-2.563c0.44-1.617,2.93-0.335,4.141-0.215c1.551,0.153,0.937-1.841,1.152-3.061     c-0.168,0-0.337,0-0.505,0c-0.138-0.898,0.619-0.415-0.288-1.368c0.24,0.145,0.48,0.288,0.721,0.433     c0.12-0.264,0.239-0.528,0.359-0.792c-0.336-0.024-0.672-0.048-1.008-0.072c0.096-0.24,0.192-0.479,0.288-0.72     c2.157-0.089,1.611-1.979-0.647-2.088c1.398,0.524,1.159-0.365,1.655-0.648").attr({
      parent: 'GA',
      'stroke-width': '0'
  }));
  GA.attr({
      fill: '#003366',
      id: 'GA',
      name: 'GA'
  });
  var NC = rsr.set();
  NC.push(rsr.path("M385.75,209.225c-0.529-1.727,2.658-6.287,5.016-6.369c2.615-0.09,5.128-3.72,6.418-4.422     c1.371-0.746,3.123-1.253,4.913-2.764c0.418-0.354,1.307-0.882,2.173-2.061c0.255-0.347,0.693-2.51,1.018-2.722     c2.127-1.388,8.915-0.726,11.625-1.158c5.604-0.895,11.208-1.789,16.812-2.684c6.067-0.968,17.594-6.313,20.772,0.63     c-0.729-0.696-1.46-1.074-2.255-1.691c0.46,0.36,0.871,0.77,1.345,1.125c-1.002-0.257-2.164-0.371-3.105-0.623     c0.824,0.358,1.085,0.754,1.616,1.186c-0.633,0.177-0.779,0.004-1.397-0.003c0.213,0.189,0.426,0.378,0.639,0.567     c-0.534-0.173-1.14-0.174-1.695-0.174c0.269,0.133,0.536,0.266,0.805,0.398c-1.864,2.046-3.488,0.413-4.168-1.418     c0.315,2.935,1.73,2.696,3.787,2.611c3.509-0.145,2.818-0.393,4.068,2.371c-0.049-0.577,0.283-1.351,0.014-2.359     c0.034-0.035,1.086-0.993,0.905-0.854c1.288,0.673,3.184,3.354,0.916,3.278c0.359,2.492-1.887,4.193-3.761,2.259     c0.018,0.216,0.034,0.431,0.052,0.646c-0.896-0.701-0.931-0.443-1.222-1.12c-0.222,0.019-0.444,0.037-0.666,0.056     c0.186,0.342,0.399,0.814,0.552,1.175c-1.253,0.14-2.783,0.173-4.047-0.312c1.356,0.938,3.896,1.059,5.704,1.562     c-0.357,0.383-0.576,0.959-0.998,1.242c0.221-0.038,0.44-0.077,0.661-0.115c0.028,3.049-2.711,1.789-4.351,0.869     c1.719,2.104,3.486,1.403,5.496,1.238c-0.022-0.89,0.203-0.41,0.222-1.381c0.256,0.555,0.232,0.67,0.364,1.204     c0.447-0.305,0.729-0.563,1.146-0.835c0.397,1.267-0.185,3.258-1.784,2.586c-0.051,0.224-0.102,0.446-0.152,0.67     c-0.156-0.225-0.313-0.449-0.47-0.674c-0.526,0.815-1.976,1.926-3.137,1.562c-0.431-0.135-1.08,1.604-2.255,1.579     c0.127-0.204,0.254-0.409,0.381-0.613c-0.244-0.084-0.488-0.168-0.732-0.252c1.443,2.136-2.832,4.643-1.672,8.139     c-0.369-0.793-0.979-1.606-1.337-2.244c2.672,3.291-1.238,2.909-3.195,3.697c-2.056,0.828-4.884-1.979-6.572-3.005     c-2.054-1.249-5.743-4.72-8.244-4.381c-3.146,0.427-7.016,1.285-9.235,0.401c-2.396-0.954-2.122-2.09-5.417-1.916     c-2.815,0.148-6.227,0.036-8.91,0.918c-2.153,0.708-3.765,2.124-5.981,2.756C393.071,208.752,389.196,208.765,385.75,209.225").attr({
      parent: 'NC',
      'stroke-width': '0'
  }));
  NC.attr({
      fill: '#003366',
      id: 'NC',
      name: 'NC'
  });
  var VA = rsr.set();
  VA.push(rsr.path("M390.567,191.042c5.389-3.481,8.567-7.123,12.976-12.304c0.146,2.096,3.895,4.449,5.211,1.816     c0.398-0.797,4.283,0.679,4.404-2.152c5.831,0.235,5.306-6.975,7.395-11.697c1.993-4.507,0.769,0.165,3.967-1.748     c0.547-0.327,0.919-2.653,1.009-3.328c0.237-1.771,1.415-0.538,2.05-2.018c0.793-1.849,3.073-3.264,2.521-6.017     c-0.327-1.629,3.715,0.982,4.106,1.195c1.195,0.65,0.576-3.183,2.886-1.564c1.483,1.039,1.342,2.241,3.799,2.789     c2.022,0.451,1.622,3.399,0.101,3.362c-0.686,5.009,0.865,1.937,3.126,3.932c2.118,1.871,5.467,0.543,6.891,3.262     c-0.224-0.045-0.448-0.09-0.672-0.135c0.623,1.135,0.158,1.259,0.067,2.42c-2.334-0.793-4.996-4.4-7.463-4.303     c2.542,0.533,9.43,6.074,9.076,7.53c-0.696-0.547-1.107-0.28-1.613-0.471c0.359,0.819,0.123,0.699,0.269,1.412     c-1.257-0.564-2.357-1.33-3.496-1.95c1.531,1.4,7.321,2.978,4.438,5.043c-0.984-0.679-1.824-1.431-2.622-2.354     c-1.178-0.021-0.69,0.333-2.017-0.471c-0.022,0.247-0.045,0.493-0.067,0.74c-1.06-0.513-2.4-0.721-3.361-0.135     c3.085-0.442,7.023,0.664,7.462,3.563c0.731-0.085,1.134-0.234,1.95-0.27c-0.345-1.239-0.053-1.053,1.11-1.093     c2.156-0.074,2.145,1.747,3.327,3.446c-0.181-0.218-0.918-0.801-1.277-1.21c0.126,0.453,0.142,0.945,0.269,1.411     c0.079-0.008-0.941,0.133-0.739-0.201c-1.008,1.906-13.337,3.246-16.129,3.812c-6.283,1.275-12.607,2.357-18.912,3.521    C410.646,188.714,400.531,189.179,390.567,191.042").attr({
      parent: 'VA',
      'stroke-width': '0'
  }));
  VA.attr({
      fill: '#003366',
      id: 'VA',
      name: 'VA'
  });
  var WV = rsr.set();
  WV.push(rsr.path("M396.887,167.915c2.984-0.298,2.769-8.631,4.784-5.529c0.389-1.181-0.042-3.461,1.273-4.163     c0.936-0.498,0.005-0.384,0.466-0.869c0.769-0.809,1.31-0.061,1.678-0.373c1.012-0.858,2.721-2.488,2.982-3.789     c0.455-2.274-0.328-9.386,0.932-10.129c0.538,3.065,1.077,6.13,1.615,9.195c2.63-0.476,5.261-0.952,7.891-1.428     c0.29,1.739,0.58,3.479,0.87,5.219c1.376-1.522,4.372-3.805,4.722-5.281c2.552,2.396,5.521-4.456,7.643,0.496     c2.145,5.008-2.466,0.11-4.163,1.182c0.376-0.237-2.192,5.695-2.269,5.871c-0.514,1.198-1.288,0.418-1.832,1.397     c-0.502,0.905-0.364,2.279-0.839,3.231c-0.581,1.163-1.885,0.295-2.454-0.219c-1.157-1.043-1.061,1.451-1.367,2.145     c-1.929,4.362-1.445,11.03-6.834,10.811c-0.063,1.488-1.938,2.493-3.387,1.896c-1.561-0.644-2.836,2.364-5.281-0.622    C401.078,174.22,396.917,172.567,396.887,167.915").attr({
      parent: 'WV',
      'stroke-width': '0'
  }));
  WV.attr({
      fill: '#003366',
      id: 'WV',
      name: 'WV'
  });
  var SC = rsr.set();
  SC.push(rsr.path("M411.5,205.498c1.432-0.159,5.424,2.656,6.098,2.387c1.517-0.605,1.146,1.537,2.712,1.289     c2.237-0.355,6.415-1.335,6.415-1.335s8.19,5.401,10.461,7.016c4.743,3.372-2.209,4.29-1.467,9.498     c-0.631-1.321-0.475-0.616-0.445-2.226c-1.449,1.65,1.582,2.94-0.699,3.115c0.169,0.085,0.339,0.17,0.508,0.255     c-0.844,1.351-3.722,4.927-5.086,3.751c1.365,1.657-0.082,3.295-2.035,2.988c0.148,0.106,0.297,0.212,0.445,0.318     c-1.272,0.99-2.496,0.874-4.005,1.398c1.805,0.271,1.235,0.316,1.652,1.208c0.212-0.212,0.424-0.424,0.636-0.636     c-0.499,1.854-1.544,1.865-2.098,0c-0.021,0.445-0.042,0.891-0.063,1.336c-0.451-0.579-1.082-1.08-1.463-1.717     c0.32,1.133,0.921,2.111,1.78,2.86c0.256-0.011-1.043,0.831-0.89,0.7c0-0.212,0-0.425,0-0.637     c-0.022,0.624-0.519,1.316-0.572,1.972c-2.094-0.083-4.37-4.437-5.596-6.04c-1.109-1.451-0.579-3.228-2.86-3.91     c-1.352-0.405-1.832-1.916-2.734-2.766c-2.465-2.32-5.622-5.062-8.266-7.758c0,0-2.995-3.944-5.287-4.443    c0,0-3.891-2.568,4.609-7.737L411.5,205.498z").attr({
      parent: 'SC',
      'stroke-width': '0'
  }));
  SC.attr({
      fill: '#003366',
      id: 'SC',
      name: 'SC'
  });
  var PA = rsr.set();
  PA.push(rsr.path("M410.076,126.723c1.961-1.034,3.39-2.417,5.007-3.77c-0.407,4.087,3.533,2.058,6.1,1.604     c3.147-0.558,6.284-1.212,9.415-1.852c3.986-0.814,13.233-4.509,17.122-3.585c1.454,0.346,1.778,1.769,2.843,2.72     c0.444,0.396,3.089,2.085,3.215,2.411c0.658,1.701-3.131,5.451-1.978,7.851c0.51,1.061,1.842,1.594,2.657,2.41     c2.165,2.164,1.431,1.385,0,3.523c-1.192,1.782-4.336,2.105-4.852,3.832c-0.576,1.927-13.458,3.205-16.154,3.719     c-6.49,1.236-12.979,2.459-19.48,3.637C412.653,141.726,411.346,134.228,410.076,126.723").attr({
      parent: 'PA',
      'stroke-width': '0'
  }));
  PA.attr({
      fill: '#003366',
      id: 'PA',
      name: 'PA'
  });
  var MD = rsr.set();
  MD.push(rsr.path("M419.949,150.059c9.432-1.796,18.821-3.673,28.209-5.686c0.521-0.111,3.957-1.181,4.115-0.629     c0.771,2.673,1.541,5.347,2.312,8.02c1.719,5.967,0.647,6.39,7.052,4.919c0.269,3.147-1.525,6.313-5.759,7.271     c0.313-0.505,0.399-1.438,0.792-2.016c-1.021,0.296-0.718-0.172-1.729,0.216c0.176-0.751-0.045-0.745,0.504-1.512     c-0.085-0.298-0.345-1.097-0.504-1.656c-0.216,0.504-0.433,1.008-0.648,1.512c-0.129-0.331-0.222-0.749-0.359-1.08     c0.021,0.604-0.24,0.822-0.072,1.513c-0.641-0.405-1.526-0.715-2.088-1.225c0.072,0.24,0.144,0.479,0.216,0.72     c-0.7-1.291-0.835-1.396-0.36-3.023c-0.264,0.144-0.527,0.288-0.791,0.432c0.675-0.519,1.62-1.006,2.592-1.368     c-1.754,0.35-2.33-1.757-3.24,0c-0.293-1.77-0.274-1.541,1.225-1.224c0.044-0.67-0.004-0.673,0.144-1.367     c-0.379-0.299-0.77-0.392-1.224-0.793c-0.441,0.658-0.776,0.635-1.008,1.44c0.092-1.81,1.013-1.661,1.295-3.312     c-0.077,0.055-0.447,0.575-0.576,0.648c-1.106-1.812-0.082-3.858,1.944-4.248c-0.336-0.024-0.672-0.048-1.008-0.072     c0.446-0.606,0.653-1.423,0.792-1.8c-0.24,0.192-0.479,0.384-0.72,0.576c0.048-0.24,0.096-0.479,0.144-0.72     c-1.875,0.758-0.2,1.489-2.016,2.52c-0.024-0.24-0.048-0.479-0.072-0.72c-0.277,0.54-0.371,0.929-0.288,1.584     c-0.216-0.264-0.432-0.528-0.647-0.792c-0.313,0.81-0.804,1.532-0.864,1.655c0.24,0.216,0.479,0.433,0.72,0.648     c-0.687-0.07-1.06-0.012-1.729,0.072c1.27,0.731,1.832,1.297,2.377,2.304c-0.335-0.07-0.977,0.087-1.225,0.072     c0.67,0.901,2.533,7.222,2.448,7.775c-1.312-0.687-2.578-1.82-2.88-3.456c0.006,3.374,4.598,3.323,4.32,6.265     c-1.519-0.793-4.328-0.77-4.896-2.448c-0.08,0.425-0.181,0.706-0.145,1.152c-1.188-1.501-2.305-2.701-3.168-0.433     c-1.725-1.772,0.826-4.466,1.045-6.444c0.098-0.893-2.189-0.66-2.988-0.972c-0.738-0.288-1.574-0.145-2.195-0.54     c-0.699-0.444,0.12-1.212-0.612-1.691c-0.526-0.345-2.113-0.294-2.304-0.504c-0.248-0.272-0.741-1.797-0.865-1.872     c-0.842-0.512-1.062-1.338-2.808-1.368c-2.441-0.042-3.574,3.866-6.192,1.656c-0.121,1.492-3.844,4.547-5.255,6.048    C420.622,154.091,420.285,152.074,419.949,150.059").attr({
      parent: 'MD',
      'stroke-width': '0'
  }), rsr.path("M452.205,143.506c0.305-1.571,1.542-2.293,2.952-1.728c-3.969,5.229,7.661,10.086,5.257,13.68     c1.767-0.128,0.407-0.147,1.655,1.152c-4.301,0.865-5.699,2.559-6.804-2.052C454.375,150.838,453.265,147.182,452.205,143.506").attr({
      parent: 'MD',
      'stroke-width': '0'
  }));
  MD.attr({
      fill: '#003366',
      id: 'MD',
      name: 'MD'
  });
  var NJ = rsr.set();
  NJ.push(rsr.path("M454.582,144.154c0.231-2.83,5.704-5.453,5.472-7.92c-0.083-0.878-4.234-3.303-4.86-4.068     c-0.298-0.365-0.366-4.817-0.324-4.859c2.146-2.146,0.361-5.31,4.32-4.026c1.056,0.342,5.146,0.954,5.76,1.866     c0.517,0.769-0.361,2.137-0.252,2.916c0.128,0.904-1.327,0.807-1.332,1.764c-0.016,2.815,0.781,1.189,1.297,2.016     c0.427,0.683,1.358-0.447,1.619,0.685c0.212,0.916-0.042,1.858,0.108,2.772c0.205,1.25,0.42,2.456,0.288,3.743     c-0.028-1.012-0.284-1.943-0.432-2.88c-0.384,1.319,0.494,3.298,0,4.536c-0.738,1.845-1.879,2.61-1.368,4.392     c-2.281,0.819-0.782,4.654-3.456,5.688C462.78,146.334,455.174,148.712,454.582,144.154").attr({
      parent: 'NJ',
      'stroke-width': '0'
  }));
  NJ.attr({
      fill: '#003366',
      id: 'NJ',
      name: 'NJ'
  });
  var DE = rsr.set();
  DE.push(rsr.path("M457.75,170.578c0.161,1.058,0.118,1.882-0.504,2.809c-2.55-2.97,1.435-7.527,0.071-9.217     c0.727-1.045,1.716-1.723,2.952-2.016c-0.203,2.229-0.771,4.508-1.152,6.696c-0.24-0.168-0.479-0.336-0.72-0.504    C458.166,169.084,457.871,169.811,457.75,170.578").attr({
      parent: 'DE',
      'stroke-width': '0'
  }));
  DE.attr({
      fill: '#003366',
      id: 'DE',
      name: 'DE'
  });
  var VT = rsr.set();
  VT.push(rsr.path("M459.117,78.562c4.27-1.342,8.646-2.353,12.975-3.481c0.146,1.034,0.986,4.644,0.443,5.664     c-1.406,2.638-2.648,2.521-2.026,5.949c0.315,1.742-1.168,3.525-0.738,5.243c0.534,2.134-0.294,6.404,1.499,7.764     c-0.933,0.195-6.416,2.06-6.172,0.348c0.269-1.872-0.748-6.663-2.437-7.753c-0.105,0.253-0.211,0.506-0.316,0.76    C461.397,87.995,460.373,83.423,459.117,78.562").attr({
      parent: 'VT',
      'stroke-width': '0'
  }));
  VT.attr({
      fill: '#003366',
      id: 'VT',
      name: 'VT'
  });
  var MA = rsr.set();
  MA.push(rsr.path("M466.688,104.621c3.675-0.768,7.328-1.577,10.983-2.429c2.604-0.607,3.173-2.715,5.369-3.181     c-0.025,1.304,1.057,2.271,2.147,1.611c-0.706,1.328-2.142,2.029-1.73,3.581c-0.218,0-0.438,0-0.655,0     c0.988,1.46,2.704,0.518,4.058,2.507c-0.199-0.1-0.397-0.199-0.597-0.299c0.627,0.841,1.797,2.846,3.401,2.565     c3.194-0.555,0.978-3.17-0.598-3.7c1.777-0.379,3.646,1.938,2.746,3.521c-0.414,0.727-3.376,1.921-4.237,2.447     c-0.008-0.633-0.37-1.194-0.299-1.851c-1.286,0.958-1.782,2.281-2.864,3.104c-0.573-0.951-0.901-1.613-0.716-2.686     c-0.991,2.012-0.967-0.213-1.97-0.478c-1.307-0.341-0.607-1.082-2.85-0.409c-0.89,0.267-1.943,0.31-2.886,0.545     c-2.774,0.694-5.36,1.288-8.176,1.899C465.277,111.923,466.444,106.458,466.688,104.621").attr({
      parent: 'MA',
      'stroke-width': '0'
  }));
  MA.attr({
      fill: '#003366',
      id: 'MA',
      name: 'MA'
  });
  var CT = rsr.set();
  CT.push(rsr.path("M466.906,112.92c3.467-0.753,6.684-1.492,10.104-2.348c2.827-0.707,3.148,4.081,3.05,6.335     c-1.581-0.04-2.641,1.524-3.809,0.595c0.6,1.549-1.912,1.184-2.916,1.786c-1.418,0.852-2.079,1.468-3.394,2.321     c-0.658,0.429-1.199,2.014-2.053,1.16c-0.804-0.803,0.687-1.21,0.685-2.232C468.567,118.371,467.316,115.201,466.906,112.92").attr({
      parent: 'CT',
      'stroke-width': '0'
  }));
  CT.attr({
      fill: '#003366',
      id: 'CT',
      name: 'CT'
  });
  var NH = rsr.set();
  NH.push(rsr.path("M472.675,100.446c-1.164-0.883-2.042-7.625-1.495-8.714c1.033-2.057,0.712-5.317,0.51-7.538     c-0.075-0.827,1.82-1.979,2.258-2.799c0.74-1.39-0.479-1.787-0.573-3.084c-0.176-2.415-0.162-5.513,2.29-6.297     c1.514,4.256,2.849,8.584,4.261,12.876c0.63,1.915,1.064,6.11,3.022,7c0.51,0.232,1.636,2.021,1.526,2.481     c-0.404,1.704-0.851,0.801-1.717,2.163C480.838,99.55,476.159,99.634,472.675,100.446").attr({
      parent: 'NH',
      'stroke-width': '0'
  }));
  NH.attr({
      fill: '#003366',
      id: 'NH',
      name: 'NH'
  });
  var ME = rsr.set();
  ME.push(rsr.path("M477.39,71.139c1.625-0.204,1.838-1.441,2.952-1.872c-1.053-1.273-0.718-2.37,0.245-3.56c1.152-1.423,0.824-2.577,0.763-4     c-0.137-3.172-0.43-7.155,0.612-10.238c0.949-2.809,1.898-5.617,2.848-8.425c0.614-1.816,2.247,1.469,2.372,1.563     c2.042,1.534,4.095-2.731,6.336-2.557c7.535,0.586,5.087,14.405,9.54,17.244c0.688,0.438,2.619-0.433,2.304,0.721     c-0.201,0.733,0.548,2.379,0.9,3.024c1.183,2.166,3.942-0.381,3.959,3.996c0.252-0.302,0.371-1.022,0.361-1.008     c1.722,1.284-0.082,3.571-1.945,3.168c0.168,0.264,0.337,0.528,0.505,0.792c-1.13,0.426-1.452,1.18-2.304,2.16     c-0.318-0.271-0.66-0.502-1.008-0.864c-0.136,0.833-0.451,1.459-0.36,2.376c-0.072-0.264-0.145-0.528-0.217-0.792     c-0.023,0.264-0.048,0.528-0.071,0.792c-0.096-0.24-0.192-0.48-0.288-0.72c-0.01,0.378-0.347,1.19-0.432,1.8     c-0.832-0.988-1.302-0.688-2.448-1.296c-0.138,0.358-0.46,0.998-0.576,1.368c-0.216-0.24-0.432-0.48-0.647-0.721     c0.082,1.246-0.099,1.833,0.431,3.024c-0.582-0.007-2.013-0.291-2.592-0.432c0.206-0.437,0.246-0.882,0.433-1.296     c-0.24,0.048-0.479,0.096-0.72,0.144c-0.001-0.759,0.127-0.788-0.432-1.44c-0.361,1.301-0.161,0.743-0.865,1.873     c0.345,0.928,0.64,4.226,0.145,4.968c-1.001,1.5-2.905,0.297-2.52,3.023c-0.367-0.815-0.625-0.904-0.721-1.943     c0.022,0.749,0.004,1.496,0.145,2.376c-0.287-0.634-0.701-0.851-1.008-1.801c-0.058,0.785-0.389,1.752-0.216,2.665     c-0.658-0.97-1.029-2.114-1.009-3.24c-0.285,0.5-0.365,0.879-0.432,1.439c0.714,0.256,1.268,1.515,1.08,2.808     c-0.145-0.583-0.543-1.182-0.793-1.584c-0.159,0.506-0.439,1.014-0.575,1.513c-0.024-0.24-0.048-0.48-0.072-0.721     c-0.023,0.24-0.048,0.48-0.071,0.721c-0.12-0.456-0.241-0.912-0.361-1.368c-1.125,1.006-1.746,2.35-0.792,3.312     c-2.043,2.642-1.978,11.145-5.688,3.96C480.969,85.915,479.748,77.772,477.39,71.139").attr({
      parent: 'ME',
      'stroke-width': '0'
  }));
  ME.attr({
      fill: '#003366',
      id: 'ME',
      name: 'ME'
  });
  var RI = rsr.set();
  RI.push(rsr.path("M479.709,109.019c2.812-1.412,3.698-0.376,4.969,1.728c-0.12,0.12-0.24,0.24-0.36,0.36     c-0.191-0.264-0.384-0.528-0.575-0.792c0.093,3.408,1.636,4.574-2.305,6.624C481.553,114.317,480.436,111.608,479.709,109.019").attr({
      parent: 'RI',
      'stroke-width': '0'
  }));
  RI.attr({
      fill: '#003366',
      id: 'RI',
      name: 'RI'
  });
  var NY = rsr.set();
  NY.push(rsr.path("M413.102,119.929c1.609-1.356,3.338-3.166,4.55-4.9c0.357-0.511,1.493-1.692,1.61-2.17     c0.234-0.958-1.204-1.967-0.734-2.625c0.167-0.233-2.349-1.396-1.017-3.115c1.108-1.431,4.9-2.135,6.512-2.31     c3.724-0.404,9.641,1.399,11.83-2.626c0.993-1.827,2.511-1.6,3.08-3.394c0.561-1.765-1.518-2.438,0.209-4.341     c-0.326,0.164-0.652,0.327-0.979,0.49c-0.024-0.35-0.047-0.7-0.07-1.05c-0.454,0.782-0.554,0.031-0.631,1.121     c-1.37-1.233,2.532-6.32,3.544-8.006c3.458-5.762,6.382-5.796,12.465-7.49c1.15-0.32,5.159-2.405,4.712,0.061     c-0.278,1.537,1.23,3.27,1.646,4.655c0.917,3.06,1.036,6.833,1.645,10.081c0.116-0.28,0.232-0.561,0.349-0.84     c4.104,2.648,2.745,13.727,3.221,17.71c0.377,3.16,1.914,6.706,1.96,9.731c0.007,0.464-1.115,0.879-1.189,1.47     c-0.107,0.858,0.714,0.806,0,2.309c-0.382,0.804-0.678,1.409-1.47,1.891c0.662-2.261,0.312-4.452-1.12-6.09     c0.325,1.126,0.884,2.099,1.26,3.36c-1.854-0.602-10.63-2.32-11.13-4.831c-1.055-5.286-7.14-2.711-10.798-1.879     c-4.829,1.098-9.691,2.077-14.551,3.035c-2.89,0.57-5.773,1.177-8.673,1.69C415.864,122.479,413.356,124.271,413.102,119.929").attr({
      parent: 'NY',
      'stroke-width': '0'
  }), rsr.path("M469.454,126.439c-1.317,0.792-2.666,1.528-4.062,2.171c0.258-0.188,0.514-0.375,0.771-0.562     c-3.404,1.185-0.641-2.788,0.839-2.869c0.494-1.875,2.874-0.779,3.606-2.24c0.516-1.032,2.162-0.637,3.045-1.12     c1.642-0.899,2.391-1.73,3.639-3.221c-0.399,1.291-0.981,2.427-1.959,3.361c1.499-0.204,3.753-2.22,5.25-3.011    C477.545,122.536,473.547,124.152,469.454,126.439").attr({
      parent: 'NY',
      'stroke-width': '0'
  }));
  NY.attr({
      fill: '#003366',
      id: 'NY',
      name: 'NY'
  });
  var AK = rsr.set();
  AK.push(rsr.path("M433.931,261.235c0.39,0.025,0.819-0.18,1.288-0.086c-0.333-0.979-1.084-1.531-2.104-1.245    C433.457,260.378,433.542,260.786,433.931,261.235").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M435.219,263.942c0.028-0.19,0.413-0.344,0.43-0.688C434.544,263.308,435.272,263.585,435.219,263.942").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M444.971,270.6c0.525-0.338,0.892-0.476,1.159-1.031C445.374,269.836,445.145,270.263,444.971,270.6").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M448.707,271.502C448.713,271.396,448.746,270.775,448.707,271.502").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M450.039,274.853c0.364-0.524-0.498-1.329-1.332-2.062C449.19,273.435,449.621,274.1,450.039,274.853").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M452.016,272.748c0.172-0.129,0.343-0.258,0.515-0.387c-0.144-0.129-0.286-0.258-0.43-0.387    C451.245,272.284,452.07,272.344,452.016,272.748").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M456.568,274.767C456.611,274.6,456.736,274.102,456.568,274.767").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M462.023,277.129c0.173-0.158,0.344-0.315,0.516-0.473c0,0.157,0,0.314,0,0.473c0.425-0.068,0.85-0.37,1.332-0.43     c-0.079-0.352-0.25-1.026-0.387-1.246C462.873,276.062,462.485,276.504,462.023,277.129").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M464.042,276.914c0.116-0.28,0.405-0.203,0.345-0.645C463.754,276.358,464.184,276.571,464.042,276.914").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M464.73,276.828c0.085-0.261,0.61-0.193,0.129-0.386C464.375,276.248,464.812,276.578,464.73,276.828").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M465.202,275.97c0.034-0.333,0.458-0.253,0.172-0.73C464.59,275.455,465.244,275.57,465.202,275.97").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M470.014,276.184c-0.703-0.016-1.412,0.055-2.105,0.172c0.532,0.163,3.522,0.482,3.522-0.107    C471.431,275.054,471.284,275.101,470.014,276.184").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M473.149,277.473c0.606,0.018,1.105-0.087,1.719,0c-1.041-0.435-1.948-0.716-3.051-0.645    C472.26,277.042,472.688,277.314,473.149,277.473").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M476.371,276.957c0.134-0.161,0.589-0.271,0.773-0.429C476.264,275.993,476.642,276.63,476.371,276.957").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M481.912,276.441c0.186-0.208,0.36-0.289,0.645-0.215c-0.057-0.157-0.115-0.314-0.172-0.472    C481.742,275.865,482.158,276.165,481.912,276.441").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M484.576,275.41c0.286,0.087,0.572,0.173,0.858,0.259c0.015-0.158,0.028-0.315,0.043-0.473    C485.264,275.176,484.622,275.41,484.576,275.41").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M491.75,272.876c-0.984-0.695-1.933-0.225-1.934,0.988c-1.088-0.021-1.625,0.874-2.147,1.762    C489.224,275.144,490.724,273.938,491.75,272.876").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M492.008,274.122c1.111-0.312,2.441-0.632,2.791-1.246c0.625,0.027,0.819-0.211,1.633-0.43     c-0.642-0.126-0.083-0.329-0.816-0.128c0.314-0.394,0.385-0.751,0.945-1.074c-0.101-0.144-0.2-0.286-0.301-0.43     c-0.373,0.165-0.361,0.275-0.773,0.387c-0.737-1.113-2.397,0.324-0.473,0.944c-0.286-0.014-0.572-0.028-0.858-0.043     c0.082,0.439-0.025,0.495-0.387,0.73c0.143,0.058,0.286,0.114,0.429,0.172C493.164,273.286,491.425,273.349,492.008,274.122").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M496.604,272.318c0.032-0.21,0.253-0.374,0.258-0.645C496.148,271.803,496.658,271.959,496.604,272.318").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M497.635,240.102c0.626,0.62,1.348,1.067,2.19,1.461c-0.13-0.158-0.258-0.314-0.387-0.473     c0.563,0.068,1.219-0.113,1.761-0.216c0.122-3.625-2.412-2.062-4.424-1.675C496.923,239.825,497.326,239.864,497.635,240.102").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M497.72,270.771c0.229-0.144,0.458-0.286,0.688-0.43C497.354,269.927,496.896,269.931,497.72,270.771").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M498.708,270.471c0.034-0.426,0.618-0.466-0.086-0.902C498.548,269.913,498.733,270.166,498.708,270.471").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M499.524,270.9C499.303,270.702,499.008,270.438,499.524,270.9").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M500.984,209.561C500.577,209.8,500.362,209.926,500.984,209.561").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M500.899,268.108c0.048,1.734,3.927,0.308,4.467-0.429c0.299,0.167,0.523,0.365,0.859,0.472    C504.646,265.994,503.011,265.542,500.899,268.108").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M502.617,208.658c-0.142,0.054-0.623,0.167-0.902,0.43C502.016,208.944,502.316,208.802,502.617,208.658").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M505.667,207.283c-0.461,0.139-0.897,0.218-1.332,0.43C504.779,207.57,505.22,207.417,505.667,207.283").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M507.213,269.054c-0.031-0.064-0.149,0.379,0.387,0.645C507.817,269.086,507.371,269.371,507.213,269.054").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M508.846,266.69c-0.225,0.21-0.521-0.134-0.515,0.473C508.908,267.247,508.596,266.925,508.846,266.69").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M510.049,222.575c-0.108-0.026-0.121-0.328-0.473-0.257C509.504,222.989,509.743,222.499,510.049,222.575").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M510.307,265.789C510.286,265.876,510.144,266.496,510.307,265.789").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M512.411,247.919c0.329-0.028,0.647,0.604,0.901-0.644C512.9,247.416,512.749,247.69,512.411,247.919").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M513.356,264.586c-0.346,0.449-0.678,0.668-0.344,1.418c0.797-0.683,0.691-0.384,0.773-1.375    C513.163,265.338,513.479,264.622,513.356,264.586").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M514.388,264.844c0.186-0.272-0.469,0.345-0.43,0.301C514.534,265.469,514.215,265.098,514.388,264.844").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M515.375,266.304c0.093-0.391,0.29-0.608,0.258-1.03c-0.535,0.69-0.715,0.951-0.858,1.89    C514.975,266.877,515.174,266.591,515.375,266.304").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M516.75,265.402c-0.014,0.182-0.109,0.574,0,0.901C516.75,266.004,516.75,265.702,516.75,265.402").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M517.137,266.304C517.137,266.259,517.137,267.209,517.137,266.304").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M518.769,262.052C518.704,262.212,518.498,262.718,518.769,262.052").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M523.063,258.4C523.101,258.411,523.852,258.61,523.063,258.4").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M528.004,261.536c-0.118,0.265-0.344,0.344-0.387,0.688C528.176,262.064,527.855,261.87,528.004,261.536").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M533.545,254.706c0.195-0.299,0.516-0.44,0.859-0.429c-0.129-0.144-0.258-0.286-0.387-0.43     c1.158,0.164,1.959-0.104,0.688-0.859c0.799,0.137,1.396-0.059,1.891-0.859c-0.899-0.817-0.87-2.177-1.934-0.687     c-0.556-0.958-0.466-0.438-1.159-1.031c0.169,0.51,0.145,0.781,0.257,1.331c-0.144-0.129-0.286-0.258-0.43-0.386     c0.043,0.157,0.087,0.314,0.13,0.472c-0.765,0.086-0.035-0.216-0.559,0.258c-0.6-1.259-1.361-0.881-0.516,0.043     c-0.212,0.528-0.297,0.33,0.172,0.688c-0.144-0.057-0.286-0.114-0.43-0.171c0.127,0.457,0.269,0.935,0.387,1.374     c-0.599-0.782-1.671-2.846-2.577-0.73c-0.433,1.007,0.646,2.295,1.203,3.136c0.275-0.473,0.461-0.727,0.472-1.332     c-0.453,0.011-0.533,0.181-0.902,0.387c0.924-0.631,0.328-0.307,0.902,0c0.275-0.191,0.545-0.474,0.815-0.645     c-0.128,0.286-0.258,0.573-0.386,0.859c0.144-0.015,0.286-0.029,0.43-0.043c-0.333,0.426-0.559,0.913-0.859,1.332     c0.902-0.277,1.609-0.935,1.117-1.676C533.055,255.036,533.31,254.925,533.545,254.706").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M530.925,257.842c-0.277,0.272-0.729,0.092-0.601,0.773C530.707,258.403,530.671,258.091,530.925,257.842").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M531.87,257.714c-0.293,0.215-0.644-0.139-0.602,0.515C531.86,258.271,531.58,257.926,531.87,257.714").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M532.943,250.583c0.147,0.185,0.002,0.609,0.73,0.687C533.485,250.906,533.164,250.859,532.943,250.583").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M533.373,249.68c0.32,0.46,0.614,0.837,0.688,0.388c0.558-0.284,0.697-0.025,1.159-0.945     c0.014,0.144,0.028,0.286,0.043,0.43c0.779-0.105,1.269-0.451,1.417-1.246c-0.114,0.158-0.229,0.314-0.343,0.473     c-0.449-0.647-1.9-1.58-1.676,0.129c-0.297,0.038-0.608-0.111-0.902,0.044c0.144,0.114,0.286,0.229,0.43,0.343    C533.901,249.389,533.452,249.566,533.373,249.68").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M534.877,254.664C533.327,254.741,533.51,255.564,534.877,254.664").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M535.564,247.104c-0.115,0.074-0.539-0.129-0.645,0.559C535.423,247.616,535.256,247.303,535.564,247.104").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M535.607,237.353C535.409,237.575,535.145,237.869,535.607,237.353").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M544.585,234.561C544.575,234.504,544.739,235.418,544.585,234.561").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M544.671,233.658c0.039,0.183-0.105,0.455-0.043,0.688C545.354,234.093,544.756,234.053,544.671,233.658").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M545.359,237.396c-0.146,0.344-0.501,0.364-0.303,0.902C545.313,237.982,545.221,237.722,545.359,237.396").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M545.401,238.34C544.827,239.124,545.42,238.313,545.401,238.34").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M545.315,236.407C545.271,236.606,545.152,237.136,545.315,236.407").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M545.272,238.383c0.155-0.241,0.333-0.459,0.558-0.644C545.31,237.832,545.478,238.063,545.272,238.383").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M545.615,238.298C545.91,238.009,546.091,237.83,545.615,238.298").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M546.132,236.021c-0.217,0.172-0.559,0.572-0.087,1.332C546.044,236.905,546.067,236.468,546.132,236.021").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M546.347,238.168c-0.095,0.445-0.251,0.709-0.13,1.16c0.868-0.915,1.637-2.18,1.203-3.351    C547.315,236.826,546.947,237.588,546.347,238.168").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M549.911,235.419c-0.659-0.062-1.136-0.342-1.374,0.516c0.143-0.043,0.286-0.086,0.43-0.129     c-0.115,0.144-0.229,0.286-0.344,0.43C549.091,236.03,549.51,235.76,549.911,235.419").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M550.514,234.346c-0.357,0.216-0.724,0.142-0.902,0.729C549.912,234.832,550.213,234.589,550.514,234.346").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M552.361,234.818C552.364,235.153,552.368,235.477,552.361,234.818").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M554.853,236.364c-0.184,0.334-0.41,0.384-0.387,0.816C554.45,237.201,555.07,235.967,554.853,236.364").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M577.189,239.758c0.134,0.396-0.142,0.789,0.473,1.116C577.877,240.146,577.401,240.182,577.189,239.758").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M580.109,242.249c0.002-0.766,0.287,0.792,0.344,0.215c0.077-0.777-0.154-1.182-0.772-1.675     c0.815,0.221,2.622,1.158,2.577,0c-0.046-1.201-2.26-0.543-3.179-0.987c0.725,0.152,1.562,0.031,2.233,0.043     c-0.144-0.144-0.286-0.287-0.43-0.431c0.875-1.018-1.121-1.402-1.417,0.044c-0.144-0.029-0.286-0.059-0.43-0.087     c0.857-1.675-0.879-1.028-1.159-0.128c-0.158-0.101-0.315-0.201-0.473-0.302c0.416,0.892-0.05,0.685,0.944,1.375    C576.92,240.593,579.456,241.783,580.109,242.249").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M580.497,242.723c-0.089,0.374,0.033,1.097,0.601,1.503C581.425,243.389,580.913,243.22,580.497,242.723").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M583.031,240.66c0.655-0.438,0.662,0.956,0.773,2.19c0.812-0.542,1.059-1.258,0.473-1.977c0.579-0.09,0.264,0,0.772-0.3     c-0.575-1.048-2.022-1.655-2.491-2.921c0.686,0.52,1.38,1.096,2.019,1.675c-0.273-0.417-1.54-2.215-1.976-1.997     c-0.787,0.395-1.349,0.288-1.934-0.365C581.104,238.103,582.075,239.677,583.031,240.66").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M583.418,245.557c0.166-0.526,0.657,1,1.761,1.289c-0.258-1.646-2.225-6.149-4.124-5.026     c0.058-0.143,0.115-0.285,0.172-0.429c-0.157-0.028-0.314-0.058-0.473-0.086c-0.26,1.181-0.184,1.457,0.773,1.374     c0.391,0.577,0.132,0.497,0.773,0.815c0.002,0.937,0.253,1.21,0.645,1.72c0.085-0.144,0.172-0.287,0.257-0.431    C583.143,245.133,583.28,245.269,583.418,245.557").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M582.602,241.434C582.652,241.734,582.722,242.146,582.602,241.434").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M583.246,238.469C583.639,238.892,583.746,239.008,583.246,238.469").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M587.026,247.318c-0.256-0.464-0.361-0.727-0.258-1.203c0.1,0.144,0.2,0.286,0.3,0.429     c-0.164-1.064,0.019-2.67-0.901-3.307c0.162,0.332,0.16,0.506,0.086,0.858c-0.471-0.849-0.476-0.59-1.246-1.073     c0.144,0.086,0.286,0.172,0.43,0.258c-0.158-0.015-0.314-0.028-0.473-0.043c0.238,1.023-0.053,0.739,0.859,1.031     c0.192,0.564-0.095,0.332,0.645,0.945C585.813,245.887,586.19,246.667,587.026,247.318").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M587.67,244.698c1.16-0.627,1.122-1.399-0.172-2.062c0.404,0.243,0.945,0.366,1.375,0.602     c-0.205-1.049-0.715-1.944-1.375-1.203c-0.863-0.312-1.357-0.143-2.19,0.172C586.401,242.812,586.904,243.835,587.67,244.698").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M587.283,247.791c-0.2,0.057-0.4,0.114-0.602,0.171C587.181,248.453,587.003,247.996,587.283,247.791").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M588.873,245.813c-0.51,0.522-0.94,0.729-0.688,1.548c0.3-0.592,0.753-0.979,0.902-1.418     c0.985,0.952,0.319,2.89,1.59,1.976c0.165,0.148,0.796,0.819,0.944,1.032c-0.292,0.138-0.618,0.135-0.901,0.257     c0.562,0.432,0.208,0.371,1.03,0.173c-0.071,0.143-0.144,0.286-0.215,0.429c0.53-0.551,0.495-0.205,0.945-0.602     c0.386,0.725,0.599,0.523,0.687,1.246c1.199,0.436,2.77,1.229,1.59-1.031c-0.1,0.157-0.2,0.315-0.301,0.473     c0.024-0.415-0.148-0.847-0.086-1.331c-0.627-0.181-1.535-0.773-2.147-0.43c0.335-0.179,0.134-0.462,0.901-0.516     c-1.572-1.055-3.713-3.135-5.369-2.491C587.992,245.783,588.327,245.689,588.873,245.813").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M587.971,247.361C587.975,247.563,587.981,248.03,587.971,247.361").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M588.959,242.164C588.485,243.81,590.797,243.55,588.959,242.164").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M589.646,247.361c-0.462,0.379-0.727-0.007-0.816,0.644c0.144,0.044,0.286,0.086,0.43,0.13    C589.127,247.688,589.343,247.628,589.646,247.361").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M589.431,249.423C589.223,248.969,589.114,248.734,589.431,249.423").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M589.861,243.624C588.941,245.021,590.443,244.997,589.861,243.624").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M589.732,246.975c-0.104,0.231-0.663-0.169-0.129,0.258C590.106,247.634,589.639,247.184,589.732,246.975").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M589.732,248.907C589.77,249.079,589.884,249.61,589.732,248.907").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M590.033,249.423c-0.109,0.309-0.538,0.338-0.043,0.858C589.74,249.909,589.906,249.78,590.033,249.423").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M590.247,248.606C590.096,248.816,589.918,249.062,590.247,248.606").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M590.591,249.552c0.006,0.353-0.496,0.3-0.085,0.772C591.326,250.028,590.599,249.977,590.591,249.552").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M590.936,243.838c-0.994,1.115,0.225,1.991,1.503,1.547C592.015,244.691,591.563,244.161,590.936,243.838").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M590.763,243.109c0.329,0.796,0.675,1.223,1.504,1.374C592.263,243.518,591.681,243.34,590.763,243.109").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M591.278,249.723c-0.108,1.188,0.996,2.087,2.191,2.105C592.73,251.111,591.902,250.56,591.278,249.723").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M592.181,249.68c0.107,0.182,0.041,0.545,0.171,0.774c0.144-0.028,0.287-0.058,0.431-0.086    C592.687,249.915,592.364,249.987,592.181,249.68").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M593.297,250.84C593.172,251.062,592.982,251.395,593.297,250.84").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M595.102,247.619c0.213-0.384,0.332-0.562-0.129-0.859c0.144,0.114,0.286,0.229,0.43,0.344     c0.06-0.587,0.007-0.364-0.172-0.902c0.262,0.683,0.312,0.521,0.301,1.288c0.157,0,0.314,0,0.473,0     c-0.043-0.143-0.086-0.285-0.129-0.429c0.29,0.299,0.198,0.533,0.688,0.602c0.196-1.429-1.687-4.874-2.664-2.362     c0.158,0,0.315,0,0.473,0c-0.128,0.157-0.258,0.314-0.386,0.472c0.143-0.043,0.286-0.085,0.429-0.128    C594.112,246.429,594.291,247.198,595.102,247.619").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M594.328,247.447c0.301,0.435,0.158,0.8,0.773,1.03C595.151,247.741,594.694,247.855,594.328,247.447").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M595.617,247.876c0.057,0.146-0.232,0.646,0.73,0.688C596.189,248.081,595.858,248.185,595.617,247.876").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M596.777,248.735c-0.017,0.211-0.246,0.356-0.215,0.646C597.299,249.237,596.748,249.103,596.777,248.735").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M498.536,210.892C499.038,210.534,499.04,210.533,498.536,210.892").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M498.536,210.892c1.434-0.471,3.543-2.463,5.198-1.675c-0.553-1.593,2.77-2.624,4.209-2.062     c-0.143-0.014-0.286-0.028-0.429-0.042c0.054,0.898-0.076,1.276-0.688,1.933c1.219,1.097,3.209,0.664,4.553,1.288     c0.304-0.999,0.94-1.749,1.676-0.772c0.191-1.032-0.699-1.767-1.589-0.902c0.283-1.26-0.689-2.111-1.375-3.008     c-0.347-0.017,5.293,4.61,4.768,1.977c-0.282-1.417-2.416,0.173-2.964-0.559c-1.069-1.425,0.309-1.792-1.374-2.749     c-1.521,2.867-2.804-2.142-3.416-2.642c-1.563-1.278-2.677-2.929-4.402-3.931c1.118-0.574,0.565-1.861,1.375-2.427     c0.849-0.594,2.777,0.228,3.908-0.451c2.323-1.393,1.92-5.091,4.296-6.314c-0.136,0.21-0.356,0.253-0.473,0.43     c1.453-0.154,2.393-1.207,3.565-1.933c-0.021,0.462-0.074,0.77-0.172,1.202c0.099,0.069,0.348-0.017,0.387,0.387     c0.449-0.714,0.32-0.628,0.945-1.289c-1.53-0.098-1.272-1.211,0.129-1.761c-0.075,0.434-0.004,0.457,0,0.859     c2.124-1.029,2.929-2.015,4.639-3.651c-0.029,0.793,0.941,1.106,1.418,1.589c-0.499-0.504-0.57,3.199,0.558-0.171     c0.158,0.114,0.315,0.229,0.474,0.343c0-0.143,0-0.286,0-0.429c0.895,2.085,2.534,0.503,4.51,0.772     c-0.024,0.604,0.318,0.882,0.344,1.288c-0.158,0.043-0.314,0.087-0.473,0.129c0.427,0.01,0.839,0.117,1.289,0     c-0.058,0.144-0.115,0.286-0.172,0.43c1.457,0.513,2.21-0.491,3.479-0.644c1.21-0.146,2.316,0.24,3.265,0.387     c1.908,0.294,5.453,0.998,7.217,0.128c0.596-1.18,1.777-0.581,2.964-0.343c2.783,0.559,2.913,1.237,3.823,4.295     c2.161,7.265,4.287,14.54,6.431,21.81c1.382,4.688,2.765,9.376,4.147,14.064c0.354,1.199,0.81,5.516,2.051,6.266     c0.568,0.344,2.466-0.286,2.728-0.729c1.259-2.128,1.357,0.187,1.783,0.43c1.979,1.133,5.188,1.991,6.229,4.209     c0.334-0.867,1.309-1.416,1.632-2.19c0.246-0.589-0.321-1.849,0-2.362c1.115-1.782,2.461-1.356,3.438,0.106     c0.759,1.14,3.353,1.422,4.553,2.32c1.723,1.288,3.423,2.901,5.37,4.167c1.146,0.744,2.207,1.761,3.156,2.812     c0.688,0.764,3.218,0.239,4.403,0.559c2.08,0.562,4.653,4.332,2.792,7.045c-0.201-0.286-0.4-0.572-0.601-0.859     c0.1,0.287,0.2,0.573,0.3,0.859c-1.397-0.433-0.761-1.548-0.3-2.749c-0.106,1.72-1.819,1.899-0.73,0.43     c-0.776-0.604-2.415-2.44-2.449-3.351c-0.777,1.209-1.913,1.672-1.159,3.222c-0.144-0.043-0.287-0.086-0.431-0.129     c0.144,0.144,0.287,0.286,0.431,0.43c-1.546,0.274-1.637-2.659-0.603-3.265c-1.112-0.004-2.058-0.419-2.662-1.332     c-0.158,0.115-0.314,0.229-0.473,0.344c-0.02-0.387-0.118-0.486-0.086-0.901c-1.065,0.113-1.157,0.09-1.59-0.988     c-0.639,0.315-1.296,0.425-2.104,0.386c0.272-0.368,0.346-0.712,0.858-1.159c-0.3,0.071-0.602,0.144-0.901,0.215     c-0.251-0.274-0.766-0.874-1.203-1.418c0.612,0.098,1.106,0.055,1.719,0.259c-0.767-0.261-1.445-0.714-1.934-1.332     c0.302-0.072,0.602-0.144,0.902-0.215c-0.988,0.733-1.702,0.737-1.676-0.773c-0.088,0.281-0.185,0.604-0.171,0.902     c-1.015-0.494-1.312-1.671-0.816-2.578c-0.583,4.107-4.949-0.649-5.584-2.964c0.221,1.123-0.167,0.768,0.729,1.633     c-0.157-0.101-0.314-0.2-0.472-0.301c0.654,1.372,3.142,3.456,2.189,4.468c0.549-0.582-2.169-0.413-1.89-0.302     c-0.473-0.188-1.023-1.692-0.601-2.318c-0.301-0.015-0.602-0.029-0.902-0.044c0.431,1.694-1.208,0.57-2.234,0.431     c-0.002,0.042,0.039,0.821,0.044,0.858c0.986-0.383,1.802-0.188,1.933,0.602c1.294-0.214,2.098,1.581,0.215,0.988     c0.159,0.521-0.023,0.768,0,1.202c-0.99-0.562-1.989-0.653-3.093-0.988c0.129-0.143,0.257-0.286,0.387-0.429     c-1.027,0.22-2.86-1.189-3.352-1.676c-1.277,0.304-2.726-0.266-4.037-0.645c0.688-0.591,0.621-1.34,0.043-2.104     c0.578,0.293,0.801,0.212,1.202,1.159c0.15-1.282-0.31-0.287,0.559-1.073c-2.485-1.336-2.627,2.356-6.057,1.547     c0.083-0.704-0.173-0.576-0.301-1.159c-0.151,0.578-5.252,2.272-6.379,2.169c-1.498-0.139-3.209-1.354-2.255-3.158     c-0.716,1.241-1.054,2.631-2.62,1.934c-0.059-0.343,0.104-0.547,0.172-0.859c-0.6,0.013-0.81-0.003-1.331,0.214     c0.085-0.3,0.171-0.601,0.257-0.901c-0.412,0.291-0.96,0.533-1.332,0.816c0.386-0.399,0.656-0.636,1.16-0.988     c-0.158-0.058-0.315-0.115-0.473-0.172c-1.119,0.419-1.738-0.519-0.215-0.987c-1.028,0.052-1.646,0.844-2.363,1.331     c-0.144-0.129-0.286-0.258-0.43-0.387c-0.014,0.144-0.028,0.286-0.042,0.43c-0.071-0.301-0.144-0.602-0.215-0.902     c0.038,0.398-0.073,0.895-0.043,1.332c-0.086-0.144-0.172-0.286-0.258-0.43c-0.925,0.504-0.834-0.72-0.344-1.676     c-0.091,0.441-0.358,0.914-0.516,1.332c-0.902-0.033-0.32,0.049-0.944,0.473c0.114-0.144,0.229-0.286,0.344-0.43     c-0.095,0.982,0.127,0.715-0.817,1.546c0.144-0.057,0.287-0.113,0.431-0.171c-0.086,0.144-0.172,0.286-0.258,0.43     c0.725-0.237,0.117-0.085,0.645,0.171c0.085-0.144,0.172-0.286,0.257-0.43c-0.226,0.764,0.226,0.649-0.644,1.375     c1.425-0.752,2.076-0.214,0.816,1.16c1.721,0.818-1.601,1.931-1.848,2.105c-0.144-0.287-0.287-0.573-0.431-0.86     c-0.102,0.746-0.272,1.097-0.214,1.805c-0.213-0.33-0.363-0.461-0.43-0.859c-0.016,0.497-0.064,0.817,0,1.332     c-0.22-0.251-0.448-0.361-0.73-0.515c-0.016,0.891-0.137,0.692-0.43,1.545c-0.022-0.229-0.037-0.7-0.086-0.901     c-0.517,0.694-0.428,0.456-0.815,0.73c0.001,0.662-0.387,1.061-0.559,1.718c-0.286-0.071-0.573-0.144-0.859-0.215     c0.114,0.143,0.229,0.286,0.344,0.429c-2.075,1.012-2.97-1.172-0.815-1.03c0.131-0.492,0.323-0.908,0.644-1.675     c-2.723,2.585-1.432-1.939-1.117-3.093c0.364-1.334-0.604-2.784,1.59-3.565c0.322-0.115,3.023,0.119,3.437,0.258     c-1.774-0.647-3.506-1.374-1.031-2.964c-1.368,0.168-1.662,2.477-2.878,0.988c-0.614,1.1-1.911,2.508-2.449,3.436     c-0.729,1.258-1.428,3.449-3.006,2.75c1.637,0.578,1.53,2.142-0.215,2.318c0.675,0.85,0.397,0.228-0.129,1.203     c-0.028-0.157-0.058-0.314-0.086-0.473c-0.916,0.736-2.097,2.211-1.848,3.566c3.985-1.245,0.935,3.14-0.043,3.951     c0.144-0.057,0.286-0.114,0.43-0.171c-0.104,0.763-0.478,1.236-0.901,1.545c-1.605,0.047-1.328,1.759-2.707,1.461     c-0.131,0.964-0.663,1.425-1.03,1.805c-0.677,0.062-0.646,0.206-1.288,0.687c1.518,1.039-1.599,2.449-2.492,2.577     c-0.071,1.002-0.646,1.336-1.46,1.29c0.295,0.394,0.171,0.31,0.343,0.687c-0.832-0.226-1.531,0.071-2.019,0.859     c0.392-0.015,0.446-0.076,0.858,0c0.028,0.552-0.47,0.23,0.172,0.558c-0.143,0.245-0.537,0.765-0.729,1.074     c0.004-0.363-0.059-0.505,0-0.901c-1.09,1.406-2.655,1.399-3.394,3.092c0.852-2.682-1.729-0.334-2.32,0.473     c-0.445-0.492-0.116-0.208-0.687-0.386c0.071,0.143,0.144,0.286,0.215,0.43c-1.038,0.329-3.036,0.785-1.676-0.344     c-1.115-1.156-3.628,4.799-3.78,1.073c-0.143,0.071-0.286,0.144-0.429,0.215c0.204,0.476,0.212,0.816,0.3,1.331     c-0.817-0.074-1.087,0.039-1.761-0.688c0.104,0.482,0.184,0.337,0.387,0.773c-0.221,0.258-0.693,0.48-0.859,0.731     c-0.16-1.907,4.714-6.06,6.959-5.628c0.103,0.751,0.4,0.541,0.729,1.117c0.447-0.217,0.064-0.534,1.246-0.172     c-1.924-2.097,2.531-5.508,4.21-5.155c0.376-1.729,1.365-3.078,2.921-4.08c0.809,0.619-0.035,0.108,0.815,0     c-0.157,0.129-0.314,0.258-0.472,0.387c-0.561-1.134-0.802-3.788,1.031-3.523c-2.518-0.437,0.503-3.266,0.516-4.725     c-0.312,0.975-2.553,2.837-3.565,2.492c-1.122-0.384-0.695-2.962,0.645-1.461c-0.45-0.483-0.93-0.886-1.462-1.331     c-0.197,0.861-0.347,0.764-0.644,1.073c-0.119,0.461,0.256,2.746,0,2.835c-0.877,0.306-1.867-2.021-2.147-2.621     c-0.27,0.306-0.646,0.392-0.902,0.646c-1.222-2.937-3.763,1.614-5.498,0.815c0.735-0.499,0.893-1.479,1.03-2.147     c-1.95-1.069,0.052-1.202-0.129-2.448c-0.134-0.923-0.945-1.805-1.116-2.663c-0.268-1.338-0.465-2.461,0.945-3.351     c-0.134-0.048-0.573-0.173-0.73-0.215c0.002,1.437-1.158,3.619-2.02,4.124c-2.553,1.497-3.479-0.461-4.252-2.319     c-0.733-0.234-1.184-0.537-1.762-1.117c0.576-0.678,1.182-1.298,1.847-1.891c0.69,0.362,1.234,0.937,0.517,1.805     c0.346-0.403,0.855-0.671,1.245-1.031c0.672,1.448,1.584,0.766,0.43-0.301c0.144-0.043,0.286-0.086,0.43-0.128     c-0.086-0.144-0.172-0.287-0.258-0.431c-1.045,0.883-2.645,0.109-3.394-0.473c0.341-0.134,0.534-0.254,0.858-0.429     c-0.286-0.043-0.572-0.086-0.858-0.129c0.057-0.144,0.114-0.286,0.172-0.43c-0.144,0.043-0.286,0.086-0.43,0.129     c0.11-0.929,0.862-1.642,1.418-2.277c-0.847,0.806-1.516,1.791-2.062,2.664c-0.555-0.706-0.758-1.397-0.43-2.104     c-0.569-0.229-0.312-0.146-0.858-0.173c-0.034,0.063-0.065-0.943-0.044-0.902c0.329-0.001,0.53,0.132,0.902,0.087     c-0.311-0.259-0.398-0.438-0.644-0.73c1.382-0.237,1.866-4.692,3.822-3.007c-0.648-0.883-0.354-0.47,0.344-1.503     c-0.763,0.33-0.252,0.025-0.901,0c0.024-0.838,0.387-1.406,1.374-1.289c-0.995-1.683,2.19-1.556,1.203,0.171     c1.62-0.49,2.061-0.731,3.414-2.232c0.88-0.976,2.831,0.956,3.566-1.504c0.454-1.521-1.298-3.095-1.225-3.995     c0.021-0.256,1.688-0.692,0.859-2.062c-1.278,0.808-3.017,1.02-3.866,2.835c-0.531-0.896-0.657-0.861-1.289-1.246     c0.271,0.369,0.299,0.5,0.43,0.902c-1.4-1.545-4.05-0.404-5.928-1.031c-1.458-0.486-1.454-2.39-1.977-3.694     c0.39,0.753,1.082,0.43,1.891,0.172c-0.593-0.406-1.034-0.689-1.761-0.945c0.172,0.101,0.343,0.201,0.515,0.301    C500.099,212.715,498.569,211.891,498.536,210.892").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M502.875,197.618C502.661,198.021,503.26,196.89,502.875,197.618").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M504.163,227.859C504.216,227.954,504.184,227.896,504.163,227.859").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M504.207,227.902C504.633,228.216,504.568,228.168,504.207,227.902").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M523.537,245.644C523.698,245.207,523.724,245.138,523.537,245.644").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M533.373,249.68c0.26,0.212,0.638,0.308,0.902,0.56C533.609,250.376,533.681,249.932,533.373,249.68").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M533.631,249.767c0.16-0.345,0.062-0.587,0.559-0.473c-0.144-0.114-0.286-0.229-0.43-0.343     c0.257-0.136,0.631-0.076,0.902-0.044c-0.225-1.709,1.227-0.776,1.676-0.129c0.114-0.158,0.229-0.314,0.343-0.473     c-0.148,0.795-0.638,1.141-1.417,1.246c-0.015-0.144-0.029-0.286-0.043-0.43c-0.13,0.501-0.439,0.683-0.645,1.159    C534.234,250.157,533.913,249.991,533.631,249.767").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M533.631,249.767C534.104,250.083,534.124,250.097,533.631,249.767").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M581.527,236.708C581.622,236.717,582.215,236.769,581.527,236.708").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M581.527,236.708c0.257,0.151,0.662,0.169,0.945,0.344C581.368,237.476,581.719,236.865,581.527,236.708").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M588.873,245.813C588.951,245.825,589.328,245.881,588.873,245.813").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M588.873,245.813c0.061,0.506,0.048,0.945-0.688,1.548C587.933,246.542,588.363,246.336,588.873,245.813").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M598.968,249.036C599.158,248.702,598.978,249.02,598.968,249.036").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M599.011,248.864C599.654,248.311,598.764,249.076,599.011,248.864").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M504.163,227.859C504.216,227.954,504.184,227.896,504.163,227.859").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M504.207,227.902C504.633,228.216,504.568,228.168,504.207,227.902").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M523.537,245.644C523.698,245.207,523.724,245.138,523.537,245.644").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M433.931,261.235c-0.389-0.449-0.474-0.857-0.816-1.331c1.021-0.286,1.771,0.267,2.104,1.245    C434.75,261.056,434.32,261.261,433.931,261.235").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M435.219,263.942c0.054-0.357-0.675-0.635,0.43-0.688C435.632,263.599,435.247,263.752,435.219,263.942").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M444.971,270.6c0.174-0.337,0.403-0.764,1.159-1.031C445.862,270.124,445.496,270.262,444.971,270.6").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M448.707,271.502C448.746,270.775,448.713,271.396,448.707,271.502").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M450.039,274.853c-0.418-0.753-0.849-1.418-1.332-2.062C449.541,273.523,450.403,274.328,450.039,274.853").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M452.016,272.748c0.055-0.404-0.771-0.464,0.085-0.773c0.144,0.129,0.286,0.258,0.43,0.387    C452.358,272.49,452.188,272.619,452.016,272.748").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M456.568,274.767C456.736,274.102,456.611,274.6,456.568,274.767").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M460.263,276.055c0.607-0.295,1.251-0.409,1.804-0.645C461.714,276.387,461.11,276.53,460.263,276.055").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M462.023,277.129c0.462-0.625,0.85-1.067,1.461-1.676c0.137,0.22,0.308,0.895,0.387,1.246     c-0.482,0.06-0.907,0.361-1.332,0.43c0-0.158,0-0.315,0-0.473C462.367,276.813,462.196,276.971,462.023,277.129").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M464.042,276.914c0.142-0.343-0.288-0.556,0.345-0.645C464.447,276.711,464.158,276.634,464.042,276.914").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M464.73,276.828c0.082-0.25-0.355-0.58,0.129-0.386C465.341,276.635,464.815,276.567,464.73,276.828").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M465.202,275.97c0.042-0.399-0.612-0.515,0.172-0.73C465.66,275.717,465.236,275.637,465.202,275.97").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M470.014,276.184c1.271-1.083,1.417-1.13,1.417,0.064c0,0.59-2.99,0.271-3.522,0.107    C468.602,276.238,469.311,276.168,470.014,276.184").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M473.149,277.473c-0.461-0.158-0.89-0.431-1.332-0.645c1.103-0.071,2.01,0.21,3.051,0.645    C474.255,277.386,473.756,277.49,473.149,277.473").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M476.371,276.957c0.271-0.327-0.107-0.964,0.773-0.429C476.96,276.686,476.505,276.796,476.371,276.957").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M481.912,276.441c0.246-0.276-0.17-0.576,0.473-0.687c0.057,0.157,0.115,0.314,0.172,0.472    C482.272,276.152,482.098,276.233,481.912,276.441").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M484.576,275.41c0.046,0,0.688-0.234,0.901-0.214c-0.015,0.157-0.028,0.314-0.043,0.473    C485.148,275.583,484.862,275.497,484.576,275.41").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M491.75,272.876c-1.026,1.062-2.526,2.268-4.081,2.75c0.522-0.888,1.06-1.783,2.147-1.762    C489.817,272.651,490.766,272.181,491.75,272.876").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M492.008,274.122c-0.583-0.773,1.156-0.836,2.189-1.117c-0.143-0.058-0.286-0.114-0.429-0.172     c0.361-0.235,0.469-0.291,0.387-0.73c0.286,0.015,0.572,0.029,0.858,0.043c-1.925-0.62-0.265-2.058,0.473-0.944     c0.412-0.111,0.4-0.222,0.773-0.387c0.101,0.144,0.2,0.286,0.301,0.43c-0.561,0.323-0.631,0.681-0.945,1.074     c0.733-0.201,0.175,0.002,0.816,0.128c-0.813,0.219-1.008,0.457-1.633,0.43C494.449,273.49,493.119,273.811,492.008,274.122").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M496.604,272.318c0.055-0.359-0.455-0.516,0.258-0.645C496.856,271.944,496.636,272.108,496.604,272.318").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M497.635,240.102c-0.309-0.237-0.712-0.276-0.859-0.902c2.012-0.388,4.546-1.95,4.424,1.675     c-0.542,0.103-1.197,0.284-1.761,0.216c0.129,0.158,0.257,0.314,0.387,0.473C498.982,241.169,498.261,240.722,497.635,240.102").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M497.72,270.771c-0.823-0.841-0.366-0.845,0.688-0.43C498.178,270.485,497.949,270.628,497.72,270.771").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M498.708,270.471c0.025-0.305-0.16-0.558-0.086-0.902C499.326,270.005,498.742,270.045,498.708,270.471").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M499.524,270.9C499.008,270.438,499.303,270.702,499.524,270.9").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M500.899,268.108c2.111-2.566,3.747-2.114,5.326,0.043c-0.336-0.106-0.561-0.305-0.859-0.472    C504.826,268.416,500.947,269.843,500.899,268.108").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M507.213,269.054c0.158,0.317,0.604,0.032,0.387,0.645C507.063,269.433,507.182,268.989,507.213,269.054").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M508.846,266.69c-0.25,0.234,0.062,0.557-0.515,0.473C508.324,266.557,508.621,266.9,508.846,266.69").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M510.049,222.575c-0.306-0.076-0.545,0.414-0.473-0.257C509.928,222.247,509.94,222.549,510.049,222.575").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M510.307,265.789C510.144,266.496,510.286,265.876,510.307,265.789").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M512.411,247.919c0.338-0.229,0.489-0.503,0.901-0.644C513.059,248.523,512.74,247.891,512.411,247.919").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M513.356,264.586c0.123,0.036-0.193,0.752,0.43,0.043c-0.082,0.991,0.023,0.692-0.773,1.375    C512.679,265.254,513.011,265.035,513.356,264.586").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M514.388,264.844c-0.173,0.254,0.146,0.625-0.43,0.301C513.919,265.188,514.573,264.571,514.388,264.844").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M515.375,266.304c-0.201,0.287-0.4,0.573-0.601,0.859c0.144-0.938,0.323-1.199,0.858-1.89    C515.665,265.695,515.468,265.913,515.375,266.304").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M516.75,265.402c0,0.3,0,0.602,0,0.901C516.641,265.977,516.736,265.584,516.75,265.402").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M517.137,266.304C517.137,267.209,517.137,266.259,517.137,266.304").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M518.769,262.052C518.498,262.718,518.704,262.212,518.769,262.052").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M523.063,258.4C523.852,258.61,523.101,258.411,523.063,258.4").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M528.004,261.536c-0.148,0.334,0.172,0.528-0.387,0.688C527.66,261.88,527.886,261.801,528.004,261.536").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M530.925,257.842c-0.254,0.249-0.218,0.562-0.601,0.773C530.195,257.934,530.647,258.114,530.925,257.842").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M531.87,257.714c-0.29,0.212-0.01,0.557-0.602,0.515C531.227,257.575,531.577,257.929,531.87,257.714").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M532.943,250.583c0.221,0.276,0.542,0.323,0.73,0.687C532.945,251.192,533.091,250.768,532.943,250.583").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M533.545,254.706c-0.235,0.219-0.49,0.33-0.815,0.602c0.492,0.741-0.215,1.398-1.117,1.676     c0.301-0.419,0.526-0.906,0.859-1.332c-0.144,0.014-0.286,0.028-0.43,0.043c0.128-0.286,0.258-0.573,0.386-0.859     c-0.271,0.171-0.54,0.453-0.815,0.645c-0.574-0.307,0.021-0.631-0.902,0c0.369-0.206,0.449-0.376,0.902-0.387     c-0.011,0.605-0.196,0.859-0.472,1.332c-0.557-0.841-1.636-2.129-1.203-3.136c0.906-2.115,1.979-0.052,2.577,0.73     c-0.118-0.439-0.26-0.917-0.387-1.374c0.144,0.057,0.286,0.114,0.43,0.171c-0.469-0.357-0.384-0.159-0.172-0.688     c-0.846-0.924-0.084-1.302,0.516-0.043c0.523-0.474-0.206-0.172,0.559-0.258c-0.043-0.157-0.087-0.314-0.13-0.472     c0.144,0.128,0.286,0.257,0.43,0.386c-0.112-0.55-0.088-0.821-0.257-1.331c0.693,0.594,0.604,0.073,1.159,1.031     c1.063-1.49,1.034-0.131,1.934,0.687c-0.495,0.801-1.092,0.996-1.891,0.859c1.271,0.755,0.471,1.023-0.688,0.859     c0.129,0.144,0.258,0.286,0.387,0.43C534.061,254.266,533.74,254.407,533.545,254.706").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M534.877,254.664C533.51,255.564,533.327,254.741,534.877,254.664").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M535.564,247.104c-0.309,0.199-0.142,0.513-0.645,0.559C535.025,246.975,535.449,247.178,535.564,247.104").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M535.607,237.353C535.145,237.869,535.409,237.575,535.607,237.353").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M546.132,236.021c-0.064,0.447-0.088,0.885-0.087,1.332C545.573,236.593,545.915,236.192,546.132,236.021").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M546.347,238.168c0.601-0.58,0.969-1.342,1.073-2.19c0.434,1.171-0.335,2.436-1.203,3.351    C546.096,238.877,546.252,238.613,546.347,238.168").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M549.911,235.419c-0.401,0.341-0.82,0.611-1.288,0.816c0.115-0.144,0.229-0.286,0.344-0.43     c-0.144,0.043-0.287,0.086-0.43,0.129C548.775,235.077,549.252,235.357,549.911,235.419").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M577.189,239.758c0.212,0.424,0.688,0.389,0.473,1.116C577.048,240.547,577.323,240.154,577.189,239.758").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M580.109,242.249c-0.653-0.466-3.189-1.656-1.761-1.933c-0.994-0.69-0.528-0.483-0.944-1.375     c0.157,0.101,0.314,0.201,0.473,0.302c0.28-0.9,2.017-1.547,1.159,0.128c0.144,0.028,0.286,0.058,0.43,0.087     c0.296-1.446,2.292-1.062,1.417-0.044c0.144,0.144,0.286,0.287,0.43,0.431c-0.672-0.012-1.509,0.109-2.233-0.043     c0.911,0.44,2.585-0.053,2.921,0.536c0.995,1.741-1.361,0.711-2.319,0.451c0.618,0.493,0.85,0.897,0.772,1.675    C580.396,243.041,580.111,241.483,580.109,242.249").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M580.497,242.723c0.416,0.497,0.928,0.666,0.601,1.503C580.53,243.819,580.408,243.097,580.497,242.723").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M582.602,241.434C582.722,242.146,582.652,241.734,582.602,241.434").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M583.031,240.66c-0.956-0.983-1.928-2.558-2.363-3.694c0.585,0.653,1.146,0.76,1.934,0.365     c0.436-0.218,1.702,1.58,1.976,1.997c-0.639-0.579-1.333-1.155-2.019-1.675c0.469,1.266,1.916,1.873,2.491,2.921     c-0.509,0.3-0.193,0.21-0.772,0.3c0.586,0.719,0.34,1.435-0.473,1.977C583.693,241.616,583.687,240.222,583.031,240.66").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M583.246,238.469C583.746,239.008,583.639,238.892,583.246,238.469").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M583.418,245.557c-0.138-0.288-0.275-0.424-0.216-0.773c-0.085,0.144-0.172,0.287-0.257,0.431     c-0.392-0.51-0.643-0.783-0.645-1.72c-0.642-0.318-0.383-0.238-0.773-0.815c-0.957,0.083-1.033-0.193-0.773-1.374     c0.158,0.028,0.315,0.058,0.473,0.086c-0.057,0.144-0.114,0.286-0.172,0.429c1.899-1.123,3.866,3.38,4.124,5.026    C584.075,246.557,583.584,245.03,583.418,245.557").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M587.026,247.318c-0.836-0.651-1.213-1.432-0.559-2.104c-0.739-0.613-0.452-0.381-0.645-0.945     c-0.912-0.292-0.621-0.008-0.859-1.031c0.158,0.015,0.314,0.028,0.473,0.043c-0.144-0.086-0.286-0.172-0.43-0.258     c0.771,0.483,0.775,0.225,1.246,1.073c0.074-0.353,0.076-0.526-0.086-0.858c0.92,0.637,0.737,2.242,0.901,3.307     c-0.1-0.143-0.2-0.285-0.3-0.429C586.665,246.592,586.771,246.854,587.026,247.318").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M587.283,247.791c-0.28,0.205-0.103,0.662-0.602,0.171C586.883,247.905,587.083,247.848,587.283,247.791").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M587.67,244.698c-0.766-0.863-1.269-1.887-2.362-2.492c0.833-0.314,1.327-0.484,2.19-0.172     c0.66-0.741,1.17,0.154,1.375,1.203c-0.43-0.235-0.971-0.358-1.375-0.602C588.792,243.299,588.83,244.071,587.67,244.698").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M587.971,247.361C587.981,248.03,587.975,247.563,587.971,247.361").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M588.873,245.813c-0.546-0.124-0.881-0.03-1.117-0.686c1.656-0.644,3.797,1.437,5.369,2.491     c-0.768,0.054-0.566,0.337-0.901,0.516c0.612-0.344,1.521,0.249,2.147,0.43c-0.062,0.484,0.11,0.916,0.086,1.331     c0.101-0.157,0.201-0.315,0.301-0.473c1.18,2.26-0.391,1.467-1.59,1.031c-0.088-0.723-0.301-0.521-0.687-1.246     c-0.45,0.396-0.415,0.051-0.945,0.602c0.071-0.143,0.144-0.286,0.215-0.429c-0.822,0.198-0.468,0.259-1.03-0.173     c0.283-0.122,0.609-0.119,0.901-0.257c-0.148-0.213-0.779-0.884-0.944-1.032C589.402,248.838,590.014,246.459,588.873,245.813").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M589.431,249.423C589.114,248.734,589.223,248.969,589.431,249.423").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M589.646,247.361c-0.304,0.267-0.52,0.327-0.387,0.773c-0.144-0.044-0.286-0.086-0.43-0.13    C588.92,247.354,589.185,247.74,589.646,247.361").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M589.732,248.907C589.884,249.61,589.77,249.079,589.732,248.907").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M589.732,246.975c-0.094,0.209,0.374,0.659-0.129,0.258C589.069,246.806,589.629,247.206,589.732,246.975").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M589.861,243.624C590.443,244.997,588.941,245.021,589.861,243.624").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M590.033,249.423c-0.127,0.357-0.293,0.486-0.043,0.858C589.495,249.761,589.924,249.731,590.033,249.423").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M590.247,248.606C589.918,249.062,590.096,248.816,590.247,248.606").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M590.591,249.552c0.008,0.425,0.735,0.477-0.085,0.772C590.095,249.852,590.597,249.904,590.591,249.552").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M590.763,243.109c0.918,0.23,1.5,0.408,1.504,1.374C591.438,244.332,591.092,243.905,590.763,243.109").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M590.936,243.838c0.628,0.323,1.079,0.854,1.503,1.547C591.16,245.829,589.941,244.953,590.936,243.838").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M591.278,249.723c0.624,0.837,1.452,1.389,2.191,2.105C592.274,251.81,591.17,250.91,591.278,249.723").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M592.181,249.68c0.184,0.308,0.506,0.235,0.602,0.688c-0.144,0.028-0.287,0.058-0.431,0.086    C592.222,250.225,592.288,249.861,592.181,249.68").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M593.297,250.84C592.982,251.395,593.172,251.062,593.297,250.84").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M594.328,247.447c0.366,0.408,0.823,0.294,0.773,1.03C594.486,248.247,594.629,247.882,594.328,247.447").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M595.102,247.619c-0.811-0.421-0.989-1.19-0.688-1.976c-0.143,0.043-0.286,0.085-0.429,0.128     c0.128-0.157,0.258-0.314,0.386-0.472c-0.157,0-0.314,0-0.473,0c0.978-2.512,2.86,0.934,2.664,2.362     c-0.489-0.068-0.397-0.303-0.688-0.602c0.043,0.144,0.086,0.286,0.129,0.429c-0.158,0-0.315,0-0.473,0     c0.012-0.768-0.039-0.605-0.301-1.288c0.179,0.538,0.231,0.315,0.172,0.902c-0.144-0.114-0.286-0.229-0.43-0.344    C595.434,247.057,595.314,247.235,595.102,247.619").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M595.617,247.876c0.241,0.309,0.572,0.205,0.73,0.688C595.385,248.522,595.674,248.021,595.617,247.876").attr({
      parent: 'AK',
      'stroke-width': '0'
  }), rsr.path("M596.777,248.735c-0.029,0.367,0.521,0.502-0.215,0.646C596.531,249.092,596.761,248.946,596.777,248.735").attr({
      parent: 'AK',
      'stroke-width': '0'
  }));
  AK.attr({
      fill: '#003366',
      id: 'AK',
      name: 'AK'
  });
  var HI = rsr.set();
  HI.push(rsr.path("M53.218,282.477c0.537-0.67,0.95-1.205,1.08-2.088C53.021,280.984,53.247,281.541,53.218,282.477").attr({
      parent: 'HI',
      'stroke-width': '0'
  }), rsr.path("M59.554,281.686C66.11,276.583,50.323,279.944,59.554,281.686").attr({
      parent: 'HI',
      'stroke-width': '0'
  }), rsr.path("M73.378,287.229c0.484-0.118,0.962-0.288,1.44-0.432c-0.759-1.037-2.386-4.203-3.816-2.916     c-1.636,1.474,0.094,3.397,0.936,2.34C72.604,286.416,72.867,286.801,73.378,287.229").attr({
      parent: 'HI',
      'stroke-width': '0'
  }), rsr.path("M81.442,289.173c0.65-0.385,1.173-0.222,0.936-1.151c-1.751,0.102-3.867-1.055-4.68,0.647    C79.007,288.464,80.253,288.663,81.442,289.173").attr({
      parent: 'HI',
      'stroke-width': '0'
  }), rsr.path("M81.082,291.98c1.046-1.325,0.329-1.771-1.296-1.512C80.227,290.945,80.608,291.544,81.082,291.98").attr({
      parent: 'HI',
      'stroke-width': '0'
  }), rsr.path("M85.618,293.349c3.519-0.254,3.367-2.116,0.432-3.312c-0.638-0.26-2.926-0.854-3.096,0    C82.739,291.109,85.182,292.141,85.618,293.349").attr({
      parent: 'HI',
      'stroke-width': '0'
  }), rsr.path("M91.738,307.82c0.537-0.104,6.304-3.083,6.84-3.96c1.328-2.17-3.057-5.439-5.328-6.407     c-0.795-0.339-3.332-2.116-2.952-0.216c0.451,2.257-0.457,1.608-1.224,3.527C88.626,301.885,90.703,307.537,91.738,307.82").attr({
      parent: 'HI',
      'stroke-width': '0'
  }));
  HI.attr({
      fill: '#003366',
      id: 'HI',
      name: 'HI'
  });

  var rsrGroups = [CA, OR, WA, NV, AZ, ID, UT, MT, WY, NM, CO, TX, NE, SD, ND, OK, KS, MN, IA, MO, AR, LA, WI, IL, MS, TN, KY, IN, AL, MI, FL, OH, GA, NC, VA, WV, SC, PA, MD, NJ, DE, VT, MA, CT, NH, ME, RI, NY, AK, HI];

  for (var i = 0, len = rsrGroups.length; i < len; i++) {

    var el = rsrGroups[i];

    el.mouseover(function() {
        this.toFront();
        this.attr({
          cursor: 'pointer',
          'stroke-width': '2'
        });
        this.animate({
            transform: 's1.5'
        }, 200);
    });
    el.mouseout(function() {
        this.attr({
          'stroke-width': '0'
        });
        this.animate({
            transform: 's1.00'
        }, 200);
    });
  }

  window.setInterval(function() {
    var card = cards[Math.floor((Math.random()*cards.length)+1)];
    console.log(JSON.stringify(card));
    $.ajax(
      {
      type: 'POST',
      url: window.location.pathname + "chart",
      data: { card_url: card.url },
      success: function(data){
        console.log(data);
        data = JSON.parse(data);
        var region;
        var state;
        var colorThief = new ColorThief();
        var cardImage = new Image();
        cardImage.src = card.img;
        try{
          region = pickRandomProperty(data.regions);
          console.log("Using region " + region);
          switch(region) {
            case 'AL':
              state = AL;
              break;
            case 'AK':
              state = AK;
              break;
            case 'AZ':
              state = AZ;
              break;
            case 'AR':
              state = AR;
              break;
            case 'CA':
              state = CA;
              break;
            case 'CO':
              state = CO;
              break;
            case 'CT':
              state = CT;
              break;
            case 'DE':
              state = DE;
              break;
            case 'FL':
              state = FL;
              break;
            case 'GA':
              state = GA;
              break;
            case 'HI':
              state = HI;
              break;
            case 'ID':
              state = ID;
              break;
            case 'IL':
              state = IL;
              break;
            case 'IN':
              state = IN;
              break;
            case 'IA':
              state = IA;
              break;
            case 'KS':
              state = KS;
              break;
            case 'KY':
              state = KY;
              break;
            case 'LA':
              state = LA;
              break;
            case 'ME':
              state = ME;
              break;
            case 'MD':
              state = MD;
              break;
            case 'MA':
              state = MA;
              break;
            case 'MI':
              state = MI;
              break;
            case 'MN':
              state = MN;
              break;
            case 'MS':
              state = MS;
              break;
            case 'MO':
              state = MO;
              break;
            case 'MT':
              state = MT;
              break;
            case 'NE':
              state = NE;
              break;
            case 'NV':
              state = NV;
              break;
            case 'NH':
              state = NH;
              break;
            case 'NJ':
              state = NJ;
              break;
            case 'NM':
              state = NM;
              break;
            case 'NY':
              state = NY;
              break;
            case 'NC':
              state = NC;
              break;
            case 'ND':
              state = ND;
              break;
            case 'OH':
              state = OH;
              break;
            case 'OK':
              state = OK;
              break;
            case 'OR':
              state = OR;
              break;
            case 'PA':
              state = PA;
              break;
            case 'RI':
              state = RI;
              break;
            case 'SC':
              state = SC;
              break;
            case 'SD':
              state = SD;
              break;
            case 'TN':
              state = TN;
              break;
            case 'TX':
              state = TX;
              break;
            case 'UT':
              state = UT;
              break;
            case 'VT':
              state = VT;
              break;
            case 'VA':
              state = VA;
              break;
            case 'WA':
              state = WA;
              break;
            case 'WV':
              state = WV;
              break;
            case 'WI':
              state = WI;
              break;
            case 'WY':
              state = WY;
              break;
            default:
              throw "state not found";
          }
          console.log("Found a state to use.");
        }catch(err) {
          console.log("Using random state.");
          state = rsrGroups[Math.floor(Math.random()*rsrGroups.length)];
        }
        cardImage.onLoad(function() {
          state.attr({'fill': colorThief.getColor(cardImage)});
        });
        state.mouseover(function() {
          $("#card-container").attr("src", card.img);
        });
      },
      error: function(xhr, status, error){
        console.log("AJAX ERROR: " + error.message);
      }
    });
  }, 2500);
});
