function createFolder(e, mediaFolderId) {
  const vars = getGlobalVariables();
  const folderName = e.namedValues[vars.form.schoolName][0];
  const mediaFolder = DriveApp.getFolderById(mediaFolderId);
  let subFolder = mediaFolder.getFoldersByName(folderName);
  subFolder = subFolder.hasNext()
    ? subFolder.next()
    : mediaFolder.createFolder(folderName);

  return subFolder;
}

function moveMediaFile(e, targetFolder) {
  const vars = getGlobalVariables();
  const fileId = e.namedValues[vars.form.media][0].split('id=')[1];
  const file = DriveApp.getFileById(fileId);
  file.moveTo(targetFolder);
}
