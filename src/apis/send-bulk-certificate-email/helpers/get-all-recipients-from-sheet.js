function getAllRecipients() {
  const sheet = SpreadsheetApp.getActive().getSheetByName('register');
  const data = sheet.getDataRange().getValues();
  const recipients = [];

  data.forEach(function (row, index) {
    if (index === 0) { }
    scriptVerbose(row);
    const candidate = getCandidateFromSheetRow(row);

    if (candidate.email) {
      recipients.push(candidate);
    }
  });

  scriptVerbose(recipients);

  return recipients;
}

function getCandidateFromSheetRow(row) {
  const candidate = {
    fullName: row[1],
    phone: row[12],
    competitionType: row[6],
    email: row[2],
  };

  scriptVerbose(candidate);

  return candidate;
}
