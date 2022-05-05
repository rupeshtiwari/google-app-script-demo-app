function createCertificate(e) {
  const form = getForm(e);
  const certificateName = `Certificate ${form.name}`;
  const props = getGlobalVariables();
  const certificateFolder = DriveApp.getFolderById(props.certificateFolderId);
  const templateDoc = DriveApp.getFileById(props.certificateTemplateDocId);
  const tempCertificateDoc = templateDoc.makeCopy(certificateFolder);
  const tempCertificateDocEdit = DocumentApp.openById(
    tempCertificateDoc.getId()
  );
  tempCertificateDocEdit.getBody().replaceText('{NAME}', form.name);
  tempCertificateDocEdit
    .getBody()
    .replaceText('{EVENT}', form.eventActivities.join(','));
  tempCertificateDocEdit.saveAndClose();
  const pdf = tempCertificateDocEdit
    .getAs(MimeType.PDF)
    .setName(certificateName);
  certificateFolder.createFile(pdf);
  certificateFolder.removeFile(tempCertificateDoc);

  return pdf;
}
