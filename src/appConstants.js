export const CONNECTION_NOTE_TEMPLATE = `\
Good {timeOfDay} {firstName},

I hope you're doing well! My name is Amir and I'm a Software Engineer II looking for new career opportunities. \
If you have time, I would appreciate the chance to discuss how my skills align with any roles \
you're looking to fill at {company}.

Best Regards!
Amir Sharapov`

export const CONNECTED_FOLLOW_UP_TEMPLATE = `\
Happy {dayOfWeek} {firstName}!

Thank you for connecting with me.

Can you tell me more about what you are looking for in terms of the software engineering talent pool \
and if my skills and experience make me a good candidate? I've attached my resume(s) for reference.

Thank you again and I appreciate your time!

Best Regards,
Amir Sharapov
(331) 255 - 6927
amirfounder18@gmail.com`

export const APPLIED_TO_JOB_POSTING_FOLLOW_UP = `\
Good {timeOfDay} {firstName},

I hope you're doing well! I'm interested in the role you posted: {associatedJobPosting}. \
Are you open to a quick chat to discuss the position? \
I\'d love to learn more about it, and share more about my own qualifications.

Best regards,
Amir Sharapov`

export const TEMPLATES = {
  connectionNote: {
    pretty: 'Connection Note',
    template: CONNECTION_NOTE_TEMPLATE
  },
  connectedFollowUp: {
    pretty: 'Connected Follow Up',
    template: CONNECTED_FOLLOW_UP_TEMPLATE,
  },
  appliedToJobPostingFollowUp: {
    pretty: 'Applied To Job Posting Follow Up',
    template: APPLIED_TO_JOB_POSTING_FOLLOW_UP
  }
}

export const COMPANY_NAMES = Array.from(new Set([
  'Dell Technologies',
  'Spot by NetApp',
  'DRW',
  'Intel Corporation',
  'Broadcom',
  'NVIDIA',
  'Salesforce',
  'Applied Materials',
  'CDW',
  'Cognizant Technology Solutions',
  'Texas Instruments',
  'DXC Technology',
  'Uber Technologies',
  'Western Digital',
  'Advanced Micro Devices',
  'Adobe',
  'Lam Research',
  'Leidos Holdings',
  'eBay',
  'Booking Holdings',
  'Amphenol',
  'Intuit',
  'Insight Enterprises',
  'CommScope Holding',
  'Motorola Solutions',
  'Zillow Group',
  'Opendoor Technologies',
  'Booz Allen Hamilton Holding',
  'Science Applications International',
  'Avantor',
  'Zillow',
  'Analog Devices',
  'NCR',
  'Xerox Holdings',
  'KLA',
  'Sanmina',
  'ON Semiconductor',
  'Compass',
  'Roper Technologies',
  'Agilent Technologies',
  'Amkor Technology',
  'CACI International',
  'Airbnb',
  'ServiceNow',
  'NetApp',
  'Concentrix',
  'Ametek',
  'Microchip Technology',
  'Workday',
  'Skyworks Solutions',
  'Twitter',
  'SS&C Technologies Holdings',
  'Keysight Technologies',
  'DoorDash',
  'Deloitte',
  'Juniper Networks',
  'Gartner',
  'Illumina',
  'Marvell Technology',
  'Autodesk',
  'Palo Alto Networks',
  'Maximus',
  'Synopsys',
  'Snap',
  'Zoom Video Communications',
  'Qorvo',
  'Diebold Nixdorf',
  'IAC/InterActiveCorp',
  'GoDaddy',
  'EPAM Systems',
  'Mettler-Toledo International',
  'Teradyne',
  'Apex Systems',
  'Pitney Bowes',
  'Trimble',
  'Ciena',
  'Super Micro Computer',
  'Akamai Technologies',
  'Plexus',
  'Fortinet',
  'Vishay Intertechnology',
  'Citrix Systems',
  'Lyft',
  'Xilinx',
  'II-VI',
  'Rackspace Technology',
  'Vontier',
  'Cadence Design Systems',
  'Match Group',
  'Avaya Holdings',
  'MKS Instruments',
  'Arista Networks',
  'Bio-Rad Laboratories',
  'Twilio',
  'AppLovin',
  'Waters',
  'McAfee',
  'Splunk',
  'Maxim Integrated Products',
  'F5',
  'Pinterest',
  // CONSULTING COMPANIES
  'Bain & Company',
  'Boston Consulting Group',
  'McKinsey & Company',
  'Booz Allen Hamilton',
  'EY-Parthenon',
  'Oliver Wyman',
  'ClearView Healthcare Partners',
  'Deloitte Consulting LLP',
  'PwC Advisory/Strategy&',
  'Putnam Associates'
])).sort()
