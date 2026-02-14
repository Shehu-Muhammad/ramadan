export interface Exercise {
  name: string;
  sets?: number;
  reps?: string;
  duration?: string;
}

export interface Section {
  name: string;
  exercises: Exercise[];
}

export interface WorkoutDay {
  day: number;
  title: string;
  focus: string;
  sections: Section[];
}

export interface ScheduleItem {
  day: number;
  title: string;
}

export interface WorkoutProgram {
  programName: string;
  description: string;
  schedule: ScheduleItem[];
  workouts: WorkoutDay[];
}
