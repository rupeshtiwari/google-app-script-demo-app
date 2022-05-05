function register(e) {
  const form = getFormValues(e);
  const candidate = getCandidateFromRegistrationForm(form);
  const templateUrl = 'src/apis/register/helpers/confirmation-email.html';

  const template = HtmlService.createTemplateFromFile(templateUrl);
  template.candidate = candidate;
  const htmlBody = template.evaluate().getContent();

  // todo getting "http_code":401,"response_code":"UNAUTHORIZED", error
  // sendSms(candidate, htmlBody);

  sendEmail({
    attachments: [],
    candidate: candidate,
    subject: 'Confirmation of Registration',
    templateUrl: 'src/apis/register/helpers/confirmation-email.html',
    senderName: 'Event Admin',
  });
}
