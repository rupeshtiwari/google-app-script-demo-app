

function onSubmit(e) {
 // uploadMedia(e)
 const cert = createCertificate(e);
 sendEmail(e, [cert]);
}

const vars = getGlobalVariables();
ScriptApp.getProjectTriggers().forEach((s) => ScriptApp.deleteTrigger(s));
ScriptApp.newTrigger('onSubmit')
  .forSpreadsheet(vars.sheetId)
  .onFormSubmit()
  .create();
