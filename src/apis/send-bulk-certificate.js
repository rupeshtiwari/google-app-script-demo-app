function sendBulkCertificate(e) {
  const candidates = getAllRecipients();
    candidates.forEach(function (candidate) {
        sendCertificate(e,candidate);
  });
}
