class Driver {

  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate){
    return (parseInt(endDate) - ("19" + this.startDate.getYear()))
  }

}

class Route {

  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
    this.eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
  }

  blocksTravelled() {
    var nsDistance = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    var ewDistance = Math.abs(this.eastWest.indexOf(this.beginningLocation.horizontal) - this.eastWest.indexOf(this.endingLocation.horizontal))
    return nsDistance + ewDistance
  }

  estimatedTime(happyHour = false) {
    // console.log(this.blocksTravelled())
    if (!happyHour){
      return (this.blocksTravelled() / 3)}
    else {
      return (this.blocksTravelled() / 2)
    }
  }

}
