function sendCertificate(e) {
  const attachments = [createCertificate()];
  sedEmail(e, attachments);
}
