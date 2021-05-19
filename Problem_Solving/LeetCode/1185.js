/*
    Problem: Day of the Week (https://leetcode.com/problems/day-of-the-week/)
*/

var checkLeapyear = function (year) {
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    return true
  }
  return false
}

var dayOfTheWeek = function (day, month, year) {
  let daysOfMonth = [
    31,
    checkLeapyear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ]
  let days = [
    'Friday',
    'Saturday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
  ]

  let numberOfDays = 0

  for (let i = 1971; i < year; i++) {
    if (checkLeapyear(i)) numberOfDays += 366
    else numberOfDays += 365
  }

  for (let i = 0; i < month - 1; i++) {
    numberOfDays += daysOfMonth[i]
  }

  numberOfDays += day - 1
  numberOfDays = numberOfDays % 7
  return days[numberOfDays]
}
