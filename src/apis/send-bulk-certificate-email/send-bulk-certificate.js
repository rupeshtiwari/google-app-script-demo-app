function sendBulkCertificate(e) {
  const candidates = getAllRecipients();
  candidates.forEach(function (candidate) {
    sendCertificate(candidate);
  });
  scriptInfo(`Certificate is sent to ${candidates.length} candidates`);
}
