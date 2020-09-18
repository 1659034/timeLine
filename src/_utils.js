import { testData } from "./_data";

/** Timeline
 *                    7   8   9   10   11   12   1   2   3   4   5
 * +-------------------------------------------------------------+
 * | Test Name       1|   xxxxxxxxx    xxxxx          xxxxx      | < The timeline rows are
 * | Dog Groomer     2|          xxxxxxxxxxxxxxxxxx              | < constructed by the
 * |                 3|                          xxxxxxxxxxxxx   | < timelineAlgorithm
 * +-------------------------------------------------------------+
 *
 * * renderingOrder determines that the order of the timeline rows is: [2, 3, 1]
 */

function getDateArgs(string) {
  if (!string) return "";
  const data = string.split("T");
  const date = data[0].split("-");
  const time = data[1].split(":");

  // -1 because month is 0-indexed in JS 🙄
  const normalizeMonth = date[1] - 1;

  return {
    year: parseInt(date[0], 10),
    month: parseInt(normalizeMonth, 10),
    day: parseInt(date[2], 10),
    hour: parseInt(time[0], 10),
    minutes: parseInt(time[1], 10),
    seconds: parseInt(time[2], 10)
  };
}

function createDate(string, utc = false) {
  const dateArgs = getDateArgs(string);
  const { year, month, day, hour, minutes, seconds } = dateArgs;
  return utc
    ? new Date(Date.UTC(year, month, day, hour, minutes, seconds))
    : new Date(year, month, day, hour, minutes, seconds);
}

function getData(data = testData) {
  const appointments = data.map(associate => associate.appointments);
  const withDates = appointments.map(associate => {
    const getData = associate.map(appointment => {
      return {
        ...appointment,
        start: createDate(appointment.bookStart),
        end: createDate(appointment.bookEnd)
      };
    });
    return sortByKey(getData, "start");
  });

  // a.start < b.end && b.start < a.end

  return data.map((associate, idx) => {
    return {
      ...associate,
      ...{ appointments: withDates[idx] },
      ...{ breakStartDate: createDate(associate.breakStart) },
      ...{ breakEndDate: createDate(associate.breakEnd) }
    };
  });
}

/**
 *
 */
function timelineAlgorithm() {
  return;
}

/**
 * The y-axis represents an array of timeline rows. This function
 * determines the order of which rows to start filling out first.
 * The row index starts at 1.
 */
function renderingOrder(rowCount, preference = "middle-out") {
  const array = Array.from({ length: rowCount }, (v, k) => k + 1);
  let i = Math.ceil(array.length / 2);
  let j = i - 1;
  let output = [];
  while (j >= 0) {
    output.push(array[j--]);
    if (i < array.length) output.push(array[i++]);
  }

  return preference === "middle-out" ? output : array;
}

function sortByKey(array, key) {
  return array.sort((a, b) => {
    const x = a[key];
    const y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
}

export { createDate, getData, renderingOrder };
