function getFormValues(e) {
  const formTitle = getGlobalVariables().formTitle;
  const namedValues = e.namedValues;

  scriptVerbose(namedValues);

  const form = {
    fullName: namedValues[formTitle.fullName][0],
    email: namedValues[formTitle.email][0],
    phone: namedValues[formTitle.phone][0],
    eventClassification: namedValues[formTitle.eventClassification][0],
    guardianName: namedValues[formTitle.guardianName][0],
    candidateName: namedValues[formTitle.candidateName][0],
    teacherName: namedValues[formTitle.teacherName][0],
    address: namedValues[formTitle.address][0],
    media: namedValues[formTitle.media][0],
    schoolName: namedValues[formTitle.schoolName][0],
    className: namedValues[formTitle.className][0],
    eventActivity: namedValues[formTitle.eventActivity][0],
  };

  scriptVerbose(form);

  return form;
}

