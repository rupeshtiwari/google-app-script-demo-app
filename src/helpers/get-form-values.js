function getFormValues(e) {
  const namedValues = e.namedValues;
  const vars = getGlobalVariables();
  const form = vars.formTitle;
  return {
    fullName: namedValues[form.fullName],
    email: namedValues[form.email],
    phone: namedValues[form.phone],
    eventClassification: namedValues[form.eventClassification],
    guardianName: namedValues[form.guardianName],
    candidateName: namedValues[form.candidateName],
    teacherName: namedValues[form.teacherName],
    address: namedValues[form.address],
    media: namedValues[form.media],
    schoolName: namedValues[form.schoolName],
    className: namedValues[form.className],
    eventActivity: namedValues[form.eventActivity],
  };
}
