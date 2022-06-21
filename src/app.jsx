import React, { useState } from 'react'
import { useEffect } from "react"
import { copy, formatTemplate } from './appService'
import { TEMPLATES } from './appConstants'
import styles from './app.module.css'


const parseFirstName = (name) => name?.split(' ')?.at(0)


export const App = () => {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [headline, setHeadline] = useState('')
  const [message, setMessage] = useState('')
  const [copyButtonText, setCopyButtonText] = useState('Copy')
  const [associatedJobPosting, setAssociatedJobPosting] = useState('')
  const [activeTemplateKey, setActiveTemplateKey] = useState('')
  const [personalizationData, setPersonalizationData] = useState({})

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
      chrome.tabs.sendMessage(tab.id, { method: 'scrapeData' }, (response) => {
        const {
          url,
          name = '',
          company = '',
          headline = ''
        } = response
        const data = {
          name,
          firstName: parseFirstName(name),
          company,
          headline,
          associatedJobPosting
        }

        let templateKey;
        if (url.includes('linkedin.com/messaging/thread')) {
          templateKey = 'connectedFollowUp'
        }
        if (url.includes('linkedin.com/in/')) {
          templateKey = 'connectionNote'
        }

        setPersonalizationData(data)
        setMessage(formatTemplate(TEMPLATES[templateKey].template, data))
        setActiveTemplateKey(templateKey)
      })
    })
  }, [])

  const onPersonalizationDataInputChange = (e) => {
    const { id, value } = e.target
    setPersonalizationData((prev) => {
      const temp = {...prev, [id]: value}
      if (id == 'name') {
        temp.firstName = parseFirstName(value)
      }
      setMessage(formatTemplate(TEMPLATES[activeTemplateKey].template, temp))
      return temp
    })
  }

  return (
    <div style={{ width: '740px', padding: '25px 20px', display: 'grid', rowGap: '.4rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '5fr 3fr', columnGap: '2.5rem' }}>
        <div>
          <h2 style={{ fontWeight: '400', marginBlockStart: '0px' }}>Personalization Form</h2>
          <div>
            <label style={{ color: '#bbb' }}>Name
              <input
                id='name'
                value={personalizationData?.name}
                onChange={onPersonalizationDataInputChange}
              />
            </label>
            <label style={{ color: '#bbb' }}>Company
              <input
                id='company'
                value={personalizationData?.company}
                onChange={onPersonalizationDataInputChange}
              />
            </label>
            <label style={{ color: '#bbb' }}>Headline
              <input
                id='headline'
                value={personalizationData?.headline}
                onChange={onPersonalizationDataInputChange}
              />
            </label>
            <label style={{ color: '#bbb' }}>Job Posting
              <input
                id='associatedJobPosting'
                value={personalizationData?.associatedJobPosting}
                onChange={onPersonalizationDataInputChange}
              />
            </label>
            <label style={{ color: '#bbb' }}>
              Message
              <textarea
                rows='15'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div>
          <div style={{
            height: '360px',
            display: 'grid',
            rowGap: '5px'
          }}>
            <div>
              <h2 style={{ fontWeight: '400', marginBlockStart: '0px' }}>Message Templates</h2>
              <div style={{ marginBottom: '20px' }}>
                <ul
                  style={{ listStyle: 'none', padding: '0px' }}
                >
                  {Object.entries(TEMPLATES).map((entry) => {
                    const [key, { pretty, template }] = entry
                    const isActive = key === activeTemplateKey
                    const classNames = [
                      styles.messageTemplateListItem,
                      styles[`${isActive ? '' : 'in'}activeMessageTemplateListItem`]
                    ]
                    return (
                      <li key={key} className={classNames.join(' ')}
                        onClick={() => {
                          setActiveTemplateKey(key);
                          setMessage(formatTemplate(template, { firstName: name?.split(' ')?.at(0), associatedJobPosting }))
                        }}
                      >
                        <span>
                          {pretty}
                        </span>
                      </li>
                    )
                  }
                  )}
                </ul>
              </div>
              <div>
                <button
                  onClick={async () => {
                    await copy(message)
                    setCopyButtonText('Copied!')
                  }}
                >
                  {copyButtonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}