function getCandidateFromRegistrationForm(form) {
  const candidate = createCandidate(form.fullName,form.competitionType,form.phone,form.email);

  scriptVerbose(candidate);

  return candidate;
}
