function sendSms(candidate, message, row) {
  const vars = getGlobalVariables();
  const phone = candidate.phone;

  const url = 'https://rest.clicksend.com/v3/sms/send';
  const options = {
    method: 'post',
    headers: {
      // Authorization: 'Basic ' + btoa('D03182C2-D751-D243-E6E2-845DBE591D9E'),
      Authorization:
        'Basic cnRlY2huaWNhbDE5QGdtYWlsLmNvbUQwMzE4MkMyLUQ3NTEtRDI0My1FNkUyLTg0NURCRTU5MUQ5RQ==',
    },
    contentType: 'application/json',
    payload: JSON.stringify({
      messages: [
        {
          body: message,
          source: 'Event Admin',
          to: phone,
        },
      ],
    }),
  };
  const result = UrlFetchApp.fetch(url, options);
  if (result.getResponseCode() === 200) {
    console.log(`SMS is successfully sent to registerd candidate`);
  }
}
