function getAllRecipients() {
  const sheet = SpreadsheetApp.getActive().getSheetByName('register');
  const data = sheet.getDataRange().getValues();
  const recipients = [];
  data.forEach(function (row, index) {
    if (row.length > 0) {
      recipients.push(getCandidateFromSheetRow(row));
    }
  });
  scriptVerbose(recipients);

  return recipients;
}
