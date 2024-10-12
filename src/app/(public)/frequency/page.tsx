"use client";

import React, { useEffect, useState } from "react";
import { SubjectFrequencyChart } from "@/components/subject-frequency-chart";
import { OverallAttendanceChart } from "@/components/overall-attendance-chart";
import { SubjectsOverviewChart } from "@/components/subjects-overview-chart";
import { MaxSubjectFrequency } from "@/data/max-frequency";

interface FrequencyData {
  subject_name: string;
  attended_hours: number;
  scheduled_hours: number;
}

export default function FrequencyPage() {
  const [frequencies, setFrequencies] = useState<FrequencyData[]>([]);

  useEffect(() => {
    fetch("/api/frequency")
      .then((response) => response.json())
      .then((data) => setFrequencies(data));
  }, []);

  const totalAttended = frequencies.reduce(
    (sum, subject) => sum + Number(subject.attended_hours),
    0
  );
  const totalScheduled = frequencies.reduce(
    (sum, subject) => sum + Number(subject.scheduled_hours),
    0
  );
  const totalMissed = totalScheduled - totalAttended;

  // Calculate remaining hours
  const totalMaxHours = MaxSubjectFrequency.reduce(
    (sum, subject) => sum + subject.hours,
    0
  );
  const totalRemaining = Math.max(0, totalMaxHours - totalScheduled);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Subject Frequency Statistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <OverallAttendanceChart
          attendedHours={totalAttended}
          missedHours={totalMissed}
          remainingHours={totalRemaining}
        />
        <SubjectsOverviewChart subjectsData={frequencies} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {frequencies.map((subject) => {
          const maxSubject = MaxSubjectFrequency.find(
            (max) => max.subjectName === subject.subject_name
          );
          const maxHours = maxSubject
            ? maxSubject.hours
            : Math.max(Number(subject.scheduled_hours), 100);

          return (
            <SubjectFrequencyChart
              key={subject.subject_name}
              subjectName={subject.subject_name}
              maxHours={maxHours}
              attendedHours={Number(subject.attended_hours)}
              scheduledHours={Number(subject.scheduled_hours)}
            />
          );
        })}
      </div>
    </div>
  );
}
