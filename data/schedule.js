let schedule = [
  {
    date: 'Monday, 1/15',    
    time: '6-9PM',  
    location: 'Herald Square',
    singers: [
      'Jose', 'Rachel', 'Jonathan', 'Alexis', 'Anna V.'
    ]
  },
  {
    date: 'Thursday, 1/18',  
    time: '6-9PM',  
    location: 'Union Square',
    singers: [
      'Maurio', 'Jonathan', 'Lindell', 'Anna V.'
    ]
  },
  {
    date: 'Friday, 1/19',   
    time: '6-9PM',  
    location: 'Port Authority',
    singers: [
      'Jose', 'Jonathan', 'Alexis', 'Lindell'
    ]
  },
  {
    date: 'Monday, 1/22',   
    time: '6-9PM',  
    location: 'Times Square (Upper Mezz)',
    singers: [
      'Alexis', 'Omar', 'Antonio', 'Maurio'
    ]
  },
  {
    date: 'Thursday, 1/25',
    time: '6-9PM',  
    location: 'Port Authority',
    singers: [
      'Jose', 'Omar', 'Rachel', 'Alexis'
    ]
  }
]

export const getSchedule = () => {
  return new Promise((resolve, reject) => {
    if (schedule.length > 0) {
      resolve(schedule)
    } else {
      reject('No Schedule')
    }
  })
}

export const getConcertById = (id) => {
  return new Promise((resolve, reject) => {
    if (id >= 0 && id < schedule.length) {
      resolve(schedule[id])
    } else {
      reject('Invalid id: ' + id)
    }
  })
}

export const addToSchedule = (concert) => {
  return new Promise((resolve, reject) => {
    schedule = [...schedule, concert]
    if (schedule.length > 0) {
      resolve()
    } else {
      reject('No Schedule')
    }
  })
}