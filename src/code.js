const vars = getGlobalVariables();

function onSubmit(e) {
  const mediaFolderId = getGlobalVariables().mediaFolderId;
  const subFolderInMedia = createFolder(e, mediaFolderId);
  moveMediaFile(e, subFolderInMedia);
  const cert = createCertificate(e);
  sendEmail(e, [cert]);
}

ScriptApp.getProjectTriggers().forEach((s) => ScriptApp.deleteTrigger(s));
ScriptApp.newTrigger('onSubmit')
  .forSpreadsheet(vars.sheetId)
  .onFormSubmit()
  .create();
