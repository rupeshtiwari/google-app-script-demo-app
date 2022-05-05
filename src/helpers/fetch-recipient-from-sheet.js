function getAllRecipients() {
  const formTitle = getGlobalVariables().formTitle;
  const sheet = SpreadsheetApp.getActive().getSheetByName('register');
  const data = sheet.getDataRange().getValues();
  const recipients = [];
    data.forEach(function (row, index) {
        if (row.length < 1) continue;
    recipients.push({
      name: row[formTitle.fullName],
      phone: row[formTitle.phone],
      competitionType: row[formTitle.competitionType],
    });
  });

  return recipients;
}
