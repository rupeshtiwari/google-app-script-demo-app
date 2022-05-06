function register(e) {
  const form = getFormValues(e);
  let contact = '';
  
  if (form.competitionType === 'Art') {
    contact = 'Tarun Pal (Phone)';
  } else {
    contact = 'Ratan Das (Phone)';
  }

  const candidate = getCandidateFromRegistrationForm(form);
  const templateUrl = 'src/apis/register/helpers/confirmation-email.html';

  const smsMessage = `
   Thanks ${candidate.fullName} for registering for ${candidate.competitionType} competition.
  Feel free to contact us:- ${contact}
  You will be contacted soon!

  Best regards,
  Event Admin`;

  const whatsAppMessage = `
   Thanks *${candidate.fullName}* for registering for *${candidate.competitionType}* competition.
  Feel free to contact us:- *${contact}*
  You will be contacted soon!

  Best regards,
  *Event Admin*`;
  
  sendSms(candidate, smsMessage);
  sendWhatsapp(candidate, whatsAppMessage);

  candidate.contact = contact;
  sendEmail({
    attachments: [],
    candidate: candidate,
    subject: 'Confirmation of Registration',
    templateUrl,
    senderName: 'Event Admin',
  });
}
