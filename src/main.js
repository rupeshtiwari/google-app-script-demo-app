function onSubmit(e) {
  register(e);
}

const vars = getGlobalVariables();
ScriptApp.getProjectTriggers().forEach((s) => ScriptApp.deleteTrigger(s));
ScriptApp.newTrigger('onSubmit')
  .forSpreadsheet(vars.sheetId)
  .onFormSubmit()
  .create();
