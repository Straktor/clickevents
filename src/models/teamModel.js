import { Model } from "@vuex-orm/core";

class Egg extends Model {
  static entity = "eggs";

  static fields() {
    return {
      id: this.attr(null),
      name: this.attr(""),
      createdAt: this.attr(null),

      // FK
      teamId: this.attr(null),
    };
  }
}

class Event extends Model {
  static entity = "events";

  static fields() {
    return {
      id: this.attr(null),
      type: this.attr(""),
      values: this.attr({}),
      createdAt: this.attr(null),

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
      role: this.attr(""),
      email: this.attr(""),

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

      // Relations
      members: this.hasMany(Member, "teamId"),
      events: this.hasMany(Event, "teamId"),
      eggs: this.hasMany(Egg, "teamId"),
    };
  }

  get teamStats() {
    // Get the number of points
    let estimationEvent = this.events.find((e) => e.type === "Estimation");
    let points = estimationEvent ? estimationEvent?.values["# of points"] : "0";

    // Get a list of code review events
    let codeReviewEvents = this.events.filter(
      (e) => e.type === "Code Review Completed"
    );

    // Get a list of code review events
    let taskCompletedEvents = this.events.filter(
      (e) => e.type === "Task completed"
    );

    // Calculated the number of points completed
    let completedPoints = 0;
    if (taskCompletedEvents) {
      for (const tc of taskCompletedEvents) {
        completedPoints += tc?.values["# of points"]
          ? parseInt(tc?.values["# of points"])
          : 0;
      }
    }

    // Get the progress completed
    let progressReportEvents = this.events.filter(
      (e) => e.type === "Progress Report"
    );
    let percentageCompleted = 0;
    if (progressReportEvents.length) {
      // Get the latest report
      progressReportEvents.sort((a, b) => b.createdAt - a.createdAt);
      percentageCompleted =
        progressReportEvents[0].values["Estimation Percentage completed"];
    }

    return {
      points: points,
      numItemsCompleted: taskCompletedEvents ? taskCompletedEvents.length : 0,
      CRCompleted: codeReviewEvents ? codeReviewEvents.length : 0,
      pointsCompleted: completedPoints,
      percentageCompleted: percentageCompleted,
      numEggs: this.eggs ? this.eggs.length : 0,
    };
  }
}

export { Event, Member, Team, Egg };
