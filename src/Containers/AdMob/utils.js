export function getAdmobSettingByType(admob, admobType) {
  if (admob && admob.settings && (admob.settings.length >= 1)) {
    const admobSettings = admob.settings;
    for (var i = 0; i < admobSettings.length; i++) {
      const item = admobSettings[i];
      if (item.admob_type === admobType) {
        return item;
      }
    } 
  }
  return null;
}

export function getTotalAdmobCounter(interstitialAdmob, rewardAdmob) {
  var totalCount = 0;
  if (interstitialAdmob && interstitialAdmob.present_count) {
    totalCount += interstitialAdmob.present_count;
  }
  if (rewardAdmob && rewardAdmob.present_count) {
    totalCount += rewardAdmob.present_count;
  }
  return totalCount;
}

export function getCurrentShowAdmob(admob, currentCounter) {
  const interstitialAdmob = getAdmobSettingByType(admob, 'Interstitial')
  const rewardAdmob = getAdmobSettingByType(admob, 'Reward')

  var totalCount = getTotalAdmobCounter(interstitialAdmob, rewardAdmob);
  if (totalCount == 0) return interstitialAdmob;
  if (!interstitialAdmob.visiable) {
    if (rewardAdmob.visiable)
      return rewardAdmob;
    return null;
  } 
  // Get first item by priority
  var firstAdmob = null;
  var secondAdmob = null;
  if (interstitialAdmob.priority < rewardAdmob.priority) {
    firstAdmob = interstitialAdmob;
    secondAdmob = rewardAdmob;
  } else {
    firstAdmob = rewardAdmob;
    secondAdmob = interstitialAdmob;
  }
  var currentAdmob = firstAdmob;

  if (currentCounter <= firstAdmob.present_count) {
    currentAdmob = firstAdmob;
  } else {
    currentAdmob = secondAdmob;
  }
  return currentAdmob;
}