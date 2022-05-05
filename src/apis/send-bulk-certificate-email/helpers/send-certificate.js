function sendCertificate(candidate) {
  sendEmail({
    attachments: [createCertificate(candidate)],
    candidate: candidate,
    subject: 'Certificate of Completion',
    templateUrl:
      'src/apis/send-bulk-certificate-email/helpers/certificate-email.html',
    senderName: 'Event Admin',
  });
}
