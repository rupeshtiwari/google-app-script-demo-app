function register(e) {
  const form = getFormValues(e);
  const candidate = getCandidate(form);

  sendEmail(e, {
    attachments: [cert],
    candidate: candidate,
    subject: 'Confirmation of Registration',
    templateUrl: 'src/helpers/confirmation-email.html',
    senderName: 'Event Admin',
  });
}
