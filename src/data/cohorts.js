export const cohorts = {
    4: {
      id: 4,
      status: 'active',
      startDate: '2025-09-11',
      endDate: '2025-11-14',
      registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfEay655qNjlMQ9wwsW7uJdxAg3PtOywBCYpoLxIAgD6HseMA/viewform',
      classroomUrl: 'https://classroom.google.com/c/ODEzNjcwMDE2MjAz?cjc=wtzvgkzb',
      participants: [], // Will be populated as program progresses
      description: 'Current active cohort focusing on protocol-level contributions',
      outcomes: {
        expectedPRs: '1-2 per participant',
        focusAreas: ['Protocol Architecture', 'Client Implementation', 'Open Source Workflow', 'Community Building']
      }
    },
    3: {
      id: 3,
      status: 'completed',
      startDate: '2024-09-01', // Placeholder dates
      endDate: '2024-11-15',
      participants: [], // To be filled when data is available
      description: 'Successfully completed cohort with multiple merged PRs',
      outcomes: {
        totalPRs: 'TBD',
        participantCount: 'TBD'
      }
    },
    2: {
      id: 2,
      status: 'completed',
      startDate: '2024-03-01', // Placeholder dates
      endDate: '2024-05-15',
      participants: [], // To be filled when data is available
      description: 'Successfully completed cohort with active community contributions',
      outcomes: {
        totalPRs: 'TBD',
        participantCount: 'TBD'
      }
    },
    1: {
      id: 1,
      status: 'completed',
      startDate: '2023-09-01', // Placeholder dates
      endDate: '2023-11-15',
      participants: [], // To be filled when data is available
      description: 'Inaugural cohort that established the foundation for the program',
      outcomes: {
        totalPRs: 'TBD',
        participantCount: 'TBD'
      }
    }
  };