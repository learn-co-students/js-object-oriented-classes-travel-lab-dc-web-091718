class Driver {
	constructor(name, dateString) {
		this.name = name
		this.startDate = new Date(Date.parse(dateString))
	}

	yearsExperienceFromBeginningOf(year) {
		return Math.abs(this.startDate.getFullYear() - year)
	}
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
	constructor(beg, end) {
		this.beginningLocation = beg
		this.endLocation = end
	}

	blocksTravelled() {

		let begVert = parseInt(this.beginningLocation.vertical)
		let begHor = eastWest.indexOf(this.beginningLocation.horizontal)

		let endVert = parseInt(this.endLocation.vertical)
		let endHor = eastWest.indexOf(this.endLocation.horizontal)

		return Math.abs(begVert - endVert) + Math.abs(begHor - endHor)

	}

	estimatedTime(peak=false) {
		let blocksPerMinute = (peak? 2 : 3) 

		return parseFloat(this.blocksTravelled()) / blocksPerMinute

	}
}
