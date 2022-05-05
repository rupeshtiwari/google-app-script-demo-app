function sendCertificate(e,candidate) {
  const attachments = [createCertificate(candidate)];
  sedEmail(e, attachments,candidate);
}
