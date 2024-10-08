export type Lecture = {
  subject: string;
  startHour: string;
  endHour: string;
  roomNr: string;
  teacherInitials: string;
};

export type DaySchedule = {
  date: string;
  lectures: Lecture[];
};

export type Schedule = DaySchedule[];
