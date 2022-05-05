
function getGlobalVariables() {
  return {
    mediaFolderId : "1-cjZmZRlc7YYZExd9UpRkXfuoXEefcbp",
    certificateFolderId : "1mp-lrpzLNA85NOU5CWxpakiEverLoRy1",
    certificateTemplateDocId :"1ZvR9VTMH9XBFsTW1wJldjGPDLX10wK_wcDpPivBftCA",
    form : {
      fullName : "Full Name",
      email : "Email",
      phone : "Phone" , 
      eventClassification : "Event Classification",
      guardianName: "Guardian Name",
      candidateName: "Candidate Name",
      teacherName: "Teacher Name", 
      address: "Address",
      media: "Media",
      schoolName: "School Name",
      className: "Class",
      eventActivity:"Event Activity"
    }
  }
}

function sendEmail(e , attachments) {
  const form  = getForm(e);
  const recipient = form.email;
  const name = form.name;
  const template = HtmlService.createTemplateFromFile("email.html");
  template.candidate = {name , event, phone };
  const htmlBody = template.evaluate().getContent();
  GmailApp.sendEmail(recipient, 'Thankyou', 'backup message',{
    htmlBody, attachments,
    name: 'Event Admin'
  });

}

function getForm(e){
  const namedValues = e.namedValues;
   const vars = getGlobalVariables();
   const form = vars.form;
  return {
   fullName : namedValues[form.fullName],
email :namedValues[form.email],
phone :namedValues[form.phone],
eventClassification : namedValues[form.eventClassification],
guardianName:  namedValues[form.guardianName],
candidateName: namedValues[form.candidateName],
teacherName: namedValues[form.teacherName],
address:  namedValues[form.address],
media: namedValues[form.media],
schoolName: namedValues[form.schoolName],
className:namedValues[form.className],
eventActivity:namedValues[form.eventActivity],
  }
}

function createFolder(e,mediaFolderId){
  const folderName = e.namedValues['School Name'][0];
  const mediaFolder = DriveApp.getFolderById(mediaFolderId);
  let subFolder = mediaFolder.getFoldersByName(folderName);
  subFolder = subFolder.hasNext()?subFolder.next() : mediaFolder.createFolder(folderName);

  return subFolder;
}

function moveMediaFile(e,targetFolder) {
  const fileId =e.namedValues['media'][0].split('id=')[1]; 
  const file = DriveApp.getFileById(fileId);
  file.moveTo(targetFolder);
}

function onSubmit(e){
  const mediaFolderId = getGlobalVariables().mediaFolderId;
  const subFolderInMedia = createFolder(e,mediaFolderId);
  moveMediaFile(e, subFolderInMedia);
  const cert = createCertificate(e);
  sendEmail(e, [cert] );
}

function createCertificate(e) {
  const form = getForm(e);
  const certificateName = `Certificate ${form.name}`;
  const props = getGlobalVariables();
  const certificateFolder = DriveApp.getFolderById(props.certificateFolderId);
  const templateDoc = DriveApp.getFileById(props.certificateTemplateDocId);
  const tempCertificateDoc = templateDoc.makeCopy(certificateFolder);
  const tempCertificateDocEdit = DocumentApp.openById(tempCertificateDoc.getId());
  tempCertificateDocEdit.getBody().replaceText("{NAME}",form.name)
  tempCertificateDocEdit.getBody().replaceText("{EVENT}",form.eventActivities.join(','))
  tempCertificateDocEdit.saveAndClose();
  const pdf = tempCertificateDocEdit.getAs(MimeType.PDF).setName(certificateName);
  certificateFolder.createFile(pdf);
  certificateFolder.removeFile(tempCertificateDoc);

  return pdf; 
}

ScriptApp.getProjectTriggers().forEach(s=> ScriptApp.deleteTrigger(s));
ScriptApp.newTrigger('onSubmit').forSpreadsheet('1-k7UIGcFCGBElT0aSZmhrfet_Z1Lfx0RQFJeGta7IV0').onFormSubmit().create();