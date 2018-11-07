
let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(new_year) {
    return parseInt(new_year)-this.startDate.getFullYear()
  }
}

class Route {
  constructor(locStart, locEnd) {
    this.locStart = locStart
    this.locEnd = locEnd
  }

  blocksTravelled() {
    let d1 = eastWest.indexOf(this.locStart.horizontal)-eastWest.indexOf(this.locEnd.horizontal)
    let d2 = this.locEnd.vertical - this.locStart.vertical
    return Math.abs(d1) + Math.abs(d2)

  }
  estimatedTime(peakTime) {
    if (peakTime) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
