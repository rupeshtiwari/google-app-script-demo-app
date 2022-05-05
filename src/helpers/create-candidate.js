function getCandidateFromRegistrationForm(form) {
  const candidate = {
    fullName: form.fullName,
    competitionType: form.competitionType,
    phone: form.phone,
    email: form.email,
  };

  scriptVerbose(candidate);

  return candidate;
}

function getCandidateFromSheetRow(row) {
  const formTitle = getGlobalVariables().formTitle;

  const candidate = {
    fullName: row[formTitle.fullName],
    phone: row[formTitle.phone],
    competitionType: row[formTitle.competitionType],
    email: row[formTitle.email],
  };

  scriptVerbose(candidate);

  return candidate;
}
