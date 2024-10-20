import { Teacher } from "./db.types";

export type TeacherWithSubjects = Teacher & {
  subject_ids: number[];
};

export type TeacherFormData = Omit<TeacherWithSubjects, "id">;
