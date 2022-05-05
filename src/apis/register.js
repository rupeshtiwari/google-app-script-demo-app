function register(e) {
  const form = getFormValues(e);
  const candidate = getCandidateFromRegistrationForm(form);

  sendEmail(e, {
    attachments: [],
    candidate: candidate,
    subject: 'Confirmation of Registration',
    templateUrl: 'src/helpers/confirmation-email.html',
    senderName: 'Event Admin',
  });
}
