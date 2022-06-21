import React from 'react'


export const CompanySearchPrompts = ({
  companies
}) => {
  return (
    <>
      {companies.map((name) => (
        <div style={{fontSize: '11px', display: 'grid', gridTemplateColumns: '3fr 1fr'}}>
          <span>
            {name}
          </span>
          <div style={{display: 'grid', alignItems: 'end', justifyContent: 'end'}}>
            <button style={{fontSize: '8px'}} onClick={() => {
              chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
                chrome.tabs.sendMessage(tab.id, {
                  method: 'navigateToURL',
                  url: `https://linkedin.com/search/results/people/?keywords=${name} technical recruiter`
                      .toLowerCase()
                      .replaceAll(' ', '%20')
                      .replaceAll('&', '%26')
                })
              })
            }}>
              Search
            </button>
          </div>
        </div>
      ))}
    </>
  )
}