function createCertificate(e) {
  const form = getFormValues(e);
  const certificateName = `Certificate ${form.fullName}`;
  const vars = getGlobalVariables();
  const certificateFolder = DriveApp.getFolderById(vars.certificateFolderId);
  const templateDoc = DriveApp.getFileById(vars.certificateTemplateDocId);
  const tempCertificateDoc = templateDoc.makeCopy(certificateFolder);
  const tempCertificateDocEdit = DocumentApp.openById(
    tempCertificateDoc.getId()
  );
  let body = tempCertificateDocEdit.getBody();
  scriptVerbose(body.getText());
  var text = body.getText();

  text = text.replace('{NAME}', form.fullName);
  text = text.replace('{EVENT}', form.eventClassification);
  body.setText(text);
  scriptVerbose(body.getText());
  tempCertificateDocEdit.saveAndClose();
  const pdf = tempCertificateDocEdit
    .getAs(MimeType.PDF)
    .setName(certificateName);
  certificateFolder.createFile(pdf);
  certificateFolder.removeFile(tempCertificateDoc);

  return pdf;
}
