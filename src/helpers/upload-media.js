function createFolder(e, mediaFolderId) {
  const vars = getGlobalVariables();
  const folderName = e.namedValues[vars.formTitle.schoolName][0];
  const mediaFolder = DriveApp.getFolderById(mediaFolderId);
  let subFolder = mediaFolder.getFoldersByName(folderName);
  subFolder = subFolder.hasNext()
    ? subFolder.next()
    : mediaFolder.createFolder(folderName);

  return subFolder;
}

function moveMediaFile(e, targetFolder) {
  const vars = getGlobalVariables();
  const fileId = e.namedValues[vars.formTitle.media][0].split('id=')[1];
  const file = DriveApp.getFileById(fileId);
  file.moveTo(targetFolder);
}

function isMediaAvailable(e) {
  const vars = getGlobalVariables();
  return e.namedValues[vars.formTitle.media][0].length > 0;
}

function uploadMedia(e) {
  if (!isMediaAvailable(e)) return;

  const mediaFolderId = getGlobalVariables().mediaFolderId;
  const subFolderInMedia = createFolder(e, mediaFolderId);
  moveMediaFile(e, subFolderInMedia);
}
