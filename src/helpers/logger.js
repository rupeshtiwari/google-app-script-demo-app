function scriptVerbose(message) {
  const isDebugLogAllowed = getGlobalVariables().isDebugLogAllowed;
  if (!isDebugLogAllowed) return;

  console.log(message);
}

function scriptInfo(message) {
  const isInfoLogAllowed = getGlobalVariables().isInfoLogAllowed;
  if (!isInfoLogAllowed) return;

  console.info(message);
}
