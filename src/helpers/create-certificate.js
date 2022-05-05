function createCertificate(candidate) {
  const vars = getGlobalVariables();
  const name = candidate.name;
  const competitionType = candidate.competitionType;

  const certificateName = `Certificate ${name}`;

  const certificateFolder = DriveApp.getFolderById(vars.certificateFolderId);
  const templateDoc = DriveApp.getFileById(vars.certificateTemplateDocId);
  const tempCertificateDoc = templateDoc.makeCopy(certificateFolder);
  const tempCertificateDocEdit = DocumentApp.openById(
    tempCertificateDoc.getId()
  );

  let body = tempCertificateDocEdit.getBody();
  body.replaceText('{NAME}', name);
  body.replaceText('{COMPETITIONTYPE}', competitionType);
    tempCertificateDocEdit.saveAndClose();

  const pdf = tempCertificateDocEdit
    .getAs(MimeType.PDF)
    .setName(certificateName);
  certificateFolder.createFile(pdf);
  certificateFolder.removeFile(tempCertificateDoc);

  return pdf;
}
