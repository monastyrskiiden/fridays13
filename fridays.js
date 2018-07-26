function fridays(end) {
  const start = 1970;
  let leapYear = [];
  let count = 0;

  // Counting all leap-years in range
  for (var i = start, end; i <= end; i++) {
    if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
      leapYear.push(i);
    }
  }

  for (var i = 0; i < leapYear.length; i++) {
    let date = new Date(leapYear[i], 0); // first day of year
    let lastDate = new Date(leapYear[i], 11, 31); // last day of year

    // Converting dates to milliseconds
    let dateUTC = Date.parse(date);
    let lastDateUTC = Date.parse(lastDate);

    for (dateUTC, lastDateUTC; dateUTC <= lastDateUTC; dateUTC += 86400000) {
      let day = new Date(dateUTC); // Creating a new Date obj for every day of year
      if (day.getDay() == 5 && day.getDate() == 13) {
        count++;
      }
    }
  }

  console.log(
    `Кол-во Пятниц 13-го за период c ${start}г по ${end}г = ${count}`
  );
}
