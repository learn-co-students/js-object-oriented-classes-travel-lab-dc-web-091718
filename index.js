class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    let inputYear = new Date(year)

    return (inputYear.getFullYear() - (this.startDate.getFullYear() - 1))
  }

}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    let verticalTravel = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    
    let horizontalTravel = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))

    return horizontalTravel + verticalTravel
  }

  estimatedTime(peakHoursBoolean) {
    if (peakHoursBoolean) {
      return (this.blocksTravelled() / 2)
    } else {
      return (this.blocksTravelled() / 3)
    }
  }
}
