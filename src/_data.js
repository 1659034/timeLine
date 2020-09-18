// Tooltip data:
// petName
// petAge
// petBreed
// serviceName
// serviceStatus
// arrivalStart
// arrivalEnd

export const testData = [
  {
    nameFirst: "Creed",
    nameLast: "Bratton",
    associateGroup: "Professional PetStylist - Dog Only",
    breakStart: "",
    breakEnd: "",
    appointments: [
      {
        type: "locked",
        bookStart: "2019-10-04T9:00:00",
        bookEnd: "2019-10-04T11:00:00"
      },
      {
        type: "booked",
        bookStart: "2019-10-04T8:00:00",
        bookEnd: "2019-10-04T11:00:00"
      },
      {
        type: "locked",
        bookStart: "2019-10-04T7:00:00",
        bookEnd: "2019-10-04T10:00:00"
      },
      {
        type: "locked",
        bookStart: "2019-10-04T7:00:00",
        bookEnd: "2019-10-04T10:00:00"
      },
      {
        type: "available",
        bookStart: "2019-10-04T7:00:00",
        bookEnd: "2019-10-04T11:00:00"
      }
    ]
  },
  {
    nameFirst: "Stanley",
    nameLast: "Hudson",
    associateGroup: "Professional PetStylist - Dog Only",
    breakStart: "2019-10-04T14:00:00",
    breakEnd: "2019-10-04T14:30:00",
    appointments: [
      {
        type: "booked",
        bookStart: "2019-10-04T10:36:00",
        bookEnd: "2019-10-04T10:37:00"
      },
      {
        type: "locked",
        bookStart: "2019-10-04T11:00:00",
        bookEnd: "2019-10-04T14:00:00"
      },
      {
        type: "booked",
        bookStart: "2019-10-04T14:30:00",
        bookEnd: "2019-10-04T17:30:00"
      },
      {
        type: "available",
        bookStart: "2019-10-04T10:00:00",
        bookEnd: "2019-10-04T14:00:00"
      },
      {
        type: "booked",
        bookStart: "2019-10-04T14:30:00",
        bookEnd: "2019-10-04T17:30:00"
      },
      {
        type: "available",
        bookStart: "2019-10-04T10:00:00",
        bookEnd: "2019-10-04T14:00:00"
      }
    ],
    desiredOutput: [
      [
        [
          {
            type: "booked",
            bookStart: "2019-10-04T10:36:00",
            bookEnd: "2019-10-04T10:37:00"
          },
          {
            type: "locked",
            bookStart: "2019-10-04T11:00:00",
            bookEnd: "2019-10-04T14:00:00"
          },
          {
            type: "booked",
            bookStart: "2019-10-04T14:30:00",
            bookEnd: "2019-10-04T17:30:00"
          }
        ],
        {
          type: "available",
          bookStart: "2019-10-04T10:00:00",
          bookEnd: "2019-10-04T14:00:00"
        }
      ],
      [
        {
          type: "available",
          bookStart: "2019-10-04T10:00:00",
          bookEnd: "2019-10-04T14:00:00"
        },
        {
          type: "booked",
          bookStart: "2019-10-04T14:30:00",
          bookEnd: "2019-10-04T17:30:00"
        }
      ]
    ]
  },
  {
    nameFirst: "Michael",
    nameLast: "Scott",
    associateGroup: "Professional PetStylist - Dog Only",
    breakStart: "2019-10-04T16:30:00",
    breakEnd: "2019-10-04T17:00:00",
    appointments: [
      {
        type: "booked",
        bookStart: "2019-10-04T12:30:00",
        bookEnd: "2019-10-04T15:30:00"
      },
      {
        type: "booked",
        bookStart: "2019-10-04T15:00:00",
        bookEnd: "2019-10-04T20:00:00"
      },
      {
        type: "booked",
        bookStart: "2019-10-04T12:30:00",
        bookEnd: "2019-10-04T15:30:00"
      },
      {
        type: "available",
        bookStart: "2019-10-04T15:00:00",
        bookEnd: "2019-10-04T21:00:00"
      },
      {
        type: "booked",
        bookStart: "2019-10-04T12:30:00",
        bookEnd: "2019-10-04T15:30:00"
      },
      {
        type: "available",
        bookStart: "2019-10-04T15:00:00",
        bookEnd: "2019-10-04T21:00:00"
      }
    ]
  },
  {
    nameFirst: "Toby",
    nameLast: "Flenderson",
    associateGroup: "Stylist Apprentice",
    breakStart: "2019-10-04T10:00:00",
    breakEnd: "2019-10-04T10:30:00",
    appointments: [
      {
        type: "booked",
        bookStart: "2019-10-04T7:07:00",
        bookEnd: "2019-10-04T7:08:00"
      },
      {
        type: "booked",
        bookStart: "2019-10-04T09:00:00",
        bookEnd: "2019-10-04T11:00:00"
      },
      {
        type: "booked",
        bookStart: "2019-10-04T11:00:00",
        bookEnd: "2019-10-04T11:01:00"
      },
      {
        type: "booked",
        bookStart: "2019-10-04T11:22:00",
        bookEnd: "2019-10-04T11:23:00"
      },
      {
        type: "booked",
        bookStart: "2019-10-04T11:30:00",
        bookEnd: "2019-10-04T14:30:00"
      },
      {
        type: "available",
        bookStart: "2019-10-04T7:00:00",
        bookEnd: "2019-10-04T10:00:00"
      },
      {
        type: "booked",
        bookStart: "2019-10-04T10:30:00",
        bookEnd: "2019-10-04T11:30:00"
      },
      {
        type: "booked",
        bookStart: "2019-10-04T11:30:00",
        bookEnd: "2019-10-04T13:30:00"
      },
      {
        type: "available",
        bookStart: "2019-10-04T7:00:00",
        bookEnd: "2019-10-04T10:00:00"
      },
      {
        type: "booked",
        bookStart: "2019-10-04T11:35:00",
        bookEnd: "2019-10-04T11:36:00"
      },
      {
        type: "booked",
        bookStart: "2019-10-04T11:43:00",
        bookEnd: "2019-10-04T13:44:00"
      },
      {
        type: "available",
        bookStart: "2019-10-04T7:00:00",
        bookEnd: "2019-10-04T10:00:00"
      },
      {
        type: "available",
        bookStart: "2019-10-04T10:30:00",
        bookEnd: "2019-10-04T13:30:00"
      },
      {
        type: "available",
        bookStart: "2019-10-04T7:00:00",
        bookEnd: "2019-10-04T10:00:00"
      }
    ]
  },
  {
    nameFirst: "Ryan",
    nameLast: "Howard",
    associateGroup: "Stylist Apprentice",
    breakStart: "",
    breakEnd: "",
    appointments: [
      {
        type: "booked",
        bookStart: "2019-10-04T12:00:00",
        bookEnd: "2019-10-04T12:01:00"
      },
      {
        type: "booked",
        bookStart: "2019-10-04T13:00:00",
        bookEnd: "2019-10-04T14:00:00"
      },
      {
        type: "expedited",
        bookStart: "2019-10-04T12:00:00",
        bookEnd: "2019-10-04T14:00:00"
      },
      {
        type: "booked",
        bookStart: "2019-10-04T12:00:00",
        bookEnd: "2019-10-04T12:01:00"
      },
      {
        type: "available",
        bookStart: "2019-10-04T12:00:00",
        bookEnd: "2019-10-04T17:00:00"
      },
      {
        type: "available",
        bookStart: "2019-10-04T12:00:00",
        bookEnd: "2019-10-04T17:00:00"
      }
    ]
  },
  {
    nameFirst: "Kevin",
    nameLast: "Malone",
    associateGroup: "Stylist Apprentice",
    breakStart: "",
    breakEnd: "",
    appointments: [
      {
        type: "available",
        bookStart: "2019-10-04T17:00:00",
        bookEnd: "2019-10-04T21:00:00"
      },
      {
        type: "available",
        bookStart: "2019-10-04T17:00:00",
        bookEnd: "2019-10-04T21:00:00"
      },
      {
        type: "available",
        bookStart: "2019-10-04T17:00:00",
        bookEnd: "2019-10-04T21:00:00"
      }
    ]
  }
];
