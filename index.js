class Driver {
  constructor (name, date) {
    this.name = name;
    this.startDate = new Date(date);
  }

  yearsExperienceFromBeginningOf(year) {
    return Math.abs(this.startDate.getUTCFullYear() - year);
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']


class Route {
  constructor (begin, end) {
    this.begin  = begin;
    this.end= end;
  }


  blocksTravelled() {
    let horizontal = Math.abs(eastWest.indexOf(this.begin.horizontal) - eastWest.indexOf(this.end.horizontal));
    let vertical = Math.abs(this.begin.vertical - this.end.vertical);
    return vertical + horizontal;
  }

  estimatedTime(peak = false) {
    let blocks = this.blocksTravelled();
    if (peak) return blocks / 2;
    if (!peak) return blocks / 3;
  }
}
