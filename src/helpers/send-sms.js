function sendSms(candidate, message, row) {
  const phone = candidate.phone;

  const accountSid = 'ACd3823b1c7838b626a7e34dd8435d716c';
  const authToken = 'c188e6187385b8d6de87dd137918f543';
  const twilioNumber = '+19706101019';
  const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
  const payload = {
    To: phone,
    Body: message,
    From: twilioNumber,
  };
  const options = {
    method: 'post',
    payload: payload,
    headers: {
      Authorization:
        'Basic ' + Utilities.base64Encode(accountSid + ':' + authToken),
    },
  };
  const result = UrlFetchApp.fetch(url, options);
  if (result.getResponseCode() === '200') {
    scriptInfo(`SMS sent successfully to ${candidate.fullName}`);
  }
}
