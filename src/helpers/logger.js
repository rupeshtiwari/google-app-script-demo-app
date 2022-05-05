function scriptVerbose(message) {
    const isDebugLogAllowed = { getGlobalVariables(); }
    if (!isDebugLogAllowed) return;

  console.log(message);
}

function scriptInfo(message) {
    const isInfoLogAllowed = { getGlobalVariables(); }
    if (!isInfoLogAllowed) return;

  console.info(message);
}