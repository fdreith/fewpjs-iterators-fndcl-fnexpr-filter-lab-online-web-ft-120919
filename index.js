// Code your solution here
// findMatching()
// 1) returns all drivers that match the passed in name
// 2) returns matching drivers if case does not match but letters do
// 3) returns an empty array if there is no match

function findMatching(drivers, string) {
  let filterdDrivers = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
  return filterdDrivers
}

// fuzzyMatch()
// 4) returns a driver if beginning provided letters match
// 5) does not return drivers if only middle or ending letters match
// 6) does not return drivers if only middle or ending letters match

function fuzzyMatch(drivers, string) {
  let filterdDrivers = drivers.filter(driver => driver.startsWith(string))
  return filterdDrivers
}

// matchName()
// 7) accesses the data structure to check if name matches

function matchName(drivers, string) {
  let filterdDrivers = drivers.filter(driver => driver.name === string)
  return filterdDrivers

}