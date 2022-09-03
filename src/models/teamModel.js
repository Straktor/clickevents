import { Model } from "@vuex-orm/core";

class Event extends Model {
  static entity = "members";

  static fields() {
    return {
      id: this.attr(null),
      type: this.attr(""),
      values: this.attr({}),

      // FK
      teamId: this.attr(null),
    };
  }
}

class Member extends Model {
  static entity = "members";

  static fields() {
    return {
      id: this.attr(null),
      name: this.attr(""),

      // FK
      teamId: this.attr(null),
    };
  }
}

class Team extends Model {
  static entity = "teams";

  static fields() {
    return {
      id: this.attr(null),
      name: this.attr(""),
      email: this.attr(""),
      points: this.attr(null),
      numItems: this.attr(null),
      numItemsCompleted: this.attr(null),
      CRCompleted: this.attr(null),
      pointsCompleted: this.attr(null),
      percentageCompleted: this.attr(null),

      // Relations
      members: this.hasMany(Member, "teamId"),
      events: this.hasMany(Event, "teamId"),
    };
  }
}

export { Event, Member, Team };
