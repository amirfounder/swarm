const log = (s) => {
  console.log(new Date().toISOString() + ' ' + s)
}

const saveCopied = (s) => {
  chrome.storage.sync.set({'copied': s}, (_result) => {
    log('Saved copied to storage.')
  })
}

const getCopied = async () => {
  const result = [null]
  await chrome.storage.sync.get(['copied'], (_result) => {
    result[0] = _result
  })
  return result[0]
}

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  switch (request.method) {
    case 'log':
      log(request.message)
      break;
    case 'saveCopied':
      saveCopied(request.data)
      break;
    case 'getCopied':
      const copied = await getCopied()
      sendResponse(copied)
  }
})