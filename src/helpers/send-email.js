function sendEmail(e, attachments) {
  const form = getFormValues(e);
  const recipient = form.email;
  const template = HtmlService.createTemplateFromFile('./email.html');
  template.candidate = {
    name: form.fullName,
    phone: form.phone,
    activity: form.activity,
  };
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
