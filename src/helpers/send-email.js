function sendEmail(e, attachments, candidate) {
  const recipient = form.email;
  if (!isValidEmail(recipient)) return;

  const form = getFormValues(e);
  const template = HtmlService.createTemplateFromFile('src/helpers/email.html');

  scriptVerbose(form);

  template.candidate = candidate;

  scriptVerbose(template.candidate);

  const htmlBody = template.evaluate().getContent();

  GmailApp.sendEmail(
    recipient,
    'Thankyou',
    'You need html to view this page contact admin',
    {
      htmlBody,
      attachments,
      name: 'Event Admin',
    }
  );
}

function isValidEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
