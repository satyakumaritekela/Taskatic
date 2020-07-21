const now = new Date()
const month = now.getMonth()

export default [
  {
    id: 0,
    title: 'All Day Event very long title',
    self: true,
    status: 'CLOSED',
    dueDate: new Date(2020, month, 1),
  },
  {
    id: 1,
    title: 'Long Event',
    status: 'READY',
    dueDate: new Date(2020, month, 7),
  },

  {
    id: 2,
    title: 'DTS dueDateS',
    status: 'PENDING',
    dueDate: new Date(2016, month, 13, 0, 0, 0),
  },

  {
    id: 3,
    title: 'DTS ENDS',
    status: 'PENDING',
    dueDate: new Date(2016, month, 6, 0, 0, 0),
  },

  {
    id: 4,
    title: 'Some Event',
    self: true,
    status: 'REVIEW',
    dueDate: new Date(2020, month, 9, 0, 0, 0),
  },
  {
    id: 5,
    title: 'Conference',
    status: 'IN_PROGRESS',
    dueDate: new Date(2020, month, 11),
    desc: 'Big conference for important people',
  },
  {
    id: 6,
    title: 'Meeting',
    status: 'IN_PROGRESS',
    dueDate: new Date(2020, month, 12, 10, 50, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    id: 7,
    title: 'Lunch',
    status: 'READY',
    dueDate: new Date(2020, month, 12, 12, 0, 0, 0),
    desc: 'Power lunch',
  },
  {
    id: 8,
    title: 'Meeting',
    status: 'IN_PROGRESS',
    dueDate: new Date(2020, month, 12, 14, 0, 0, 0),
  },
  {
    id: 9,
    title: 'Happy Hour',
    status: 'READY',
    dueDate: new Date(2020, month, 12, 17, 0, 0, 0),
    desc: 'Most important meal of the day',
  },
  {
    id: 10,
    title: 'Dinner',
    status: 'READY',
    self: true,
    dueDate: new Date(2020, month, 12, 20, 0, 0, 0),
  },
  {
    id: 11,
    title: 'Birthday Party',
    status: 'CLOSED',
    dueDate: new Date(2020, month, 13, 7, 0, 0),
  },
  {
    id: 12,
    title: 'Late Night Event',
    self: true,
    status: 'PENDING',
    dueDate: new Date(2020, month, 17, 19, 50, 0),
  },
  {
    id: 12.5,
    title: 'Late Same Night Event',
    status: 'PENDING',
    dueDate: new Date(2020, month, 17, 19, 50, 0),
  },
  {
    id: 13,
    title: 'Multi-day Event',
    self: true,
    status: 'OPEN',
    dueDate: new Date(2020, month, 20, 19, 50, 0),
  },
  {
    id: 14,
    title: 'Today',
    self: true,
    status: 'IN_PROGRESS',
    dueDate: new Date(new Date().setHours(new Date().getHours() - 3)),
  },
  {
    id: 15,
    title: 'Point in Time Event',
    status: 'IN_PROGRESS',
    dueDate: now,
  },
  {
    id: 16,
    title: 'Video Record',
    status: 'IN_PROGRESS',
    dueDate: new Date(2020, month, 14, 15, 50, 0),
  },
  {
    id: 17,
    title: 'Dutch Song Producing',
    status: 'STAGED',
    dueDate: new Date(2020, month, 14, 16, 50, 0),
  },
  {
    id: 18,
    title: 'Itaewon Halloween Meeting',
    status: 'REVIEW',
    dueDate: new Date(2020, month, 14, 16, 50, 0),
  },
  {
    id: 19,
    title: 'Online Coding Test',
    status: 'REVIEW',
    dueDate: new Date(2020, month, 17, 17, 50, 0),
  },
  {
    id: 20,
    title: 'An overlapped Event',
    status: 'IN_PROGRESS',
    dueDate: new Date(2020, month, 17, 17, 0, 0),
  },
  {
    id: 21,
    title: 'Phone Interview',
    status: 'IN_PROGRESS',
    dueDate: new Date(2020, month, 18, 17, 0, 0),
  },
  {
    id: 22,
    title: 'Cooking Class',
    status: 'IN_PROGRESS',
    dueDate: new Date(2020, month, 21, 17, 50, 0),
  },
  {
    id: 23,
    title: 'Go to the gym',
    status: 'IN_PROGRESS',
    dueDate: new Date(2020, month, 27, 18, 50, 0),
  },
]