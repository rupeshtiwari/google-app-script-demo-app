function register(e) {
  const form = getFormValues(e);
  const candidate = getCandidateFromRegistrationForm(form);

  sendEmail({
    attachments: [],
    candidate: candidate,
    subject: 'Confirmation of Registration',
    templateUrl: 'src/apis/register/helpers/confirmation-email.html',
    senderName: 'Event Admin',
  });
}
