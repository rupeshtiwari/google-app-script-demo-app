function sendEmail(props) {
  const attachments = props.attachments;
  const candidate = props.candidate;
  const subject = props.subject;
  const templateUrl = props.templateUrl;
  const senderName = props.senderName || 'Event Admin';
  const recipient = candidate.email;

  if (!isValidEmail(recipient)) {
    console.warn(`Invalid Email Entered ${recipient}`);
    
    return;
  }

  const template = HtmlService.createTemplateFromFile(templateUrl);
  template.candidate = candidate;
  const htmlBody = template.evaluate().getContent();

  GmailApp.sendEmail(
    recipient,
    subject,
    'You need html to view this page contact admin',
    {
      htmlBody,
      attachments,
      name: senderName,
    }
  );

  scriptInfo(`Email is sent successfully to ${JSON.stringify(candidate)}`);
}

function isValidEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
