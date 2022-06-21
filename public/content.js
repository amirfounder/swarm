const observer = new MutationObserver((_mutations, _observer) => {
  const customMessage = document.querySelector('#custom-message')
  if (customMessage !== null) {
    console.log('Custom Message found!')
    customMessage.rows = '15'
    _observer.disconnect()
  }
})

observer.observe(document, {
  childList: true,
  subtree: true
})

const scrapeLinkedInProfile = () => ({
  name: document.querySelector('h1')?.innerText,
  company: document.querySelector('a[href="#experience"]')?.innerText,
})

const scrapeMessageThread = () => ({
  name: document.querySelector('h2#thread-detail-jump-target')?.innerText
})

const scrapeData = () => {
  let data;
  if (window.location.href.includes('linkedin.com/in/')) {
    data = scrapeLinkedInProfile()
  }
  if (window.location.href.includes('linkedin.com/messaging/thread')) {
    data = scrapeMessageThread()
  }
  return data || {}
}

chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  switch (request.method) {
    case 'scrapeData':
      sendResponse({
        url: window.location.href,
        ...scrapeData()
      })
      break;
    case 'navigateToURL':
      window.location.replace(request.url)
      break;
  }
});
