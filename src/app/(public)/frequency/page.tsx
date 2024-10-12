"use client";

import React, { useState, useEffect } from "react";
import { SubjectFrequencyChart } from "@/components/subject-frequency-chart";
import { MaxSubjectFrequency } from "@/data/max-frequency";
import { getHelperClient } from "@/lib/fetch-helper-client";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { OverallFrequencyChart } from "@/components/overall-frequency-chart";

interface SubjectFrequency {
  subject_name: string;
  attended_hours: string;
  scheduled_hours: string;
}

export default function FrequencyPage() {
  const [frequencies, setFrequencies] = useState<SubjectFrequency[]>([]);
  const [manualInput, setManualInput] = useState<{ [key: string]: number }>({});
  const { toast } = useToast();

  useEffect(() => {
    fetchFrequencies();
  }, []);

  const fetchFrequencies = async () => {
    try {
      const data = await getHelperClient<SubjectFrequency[]>("/api/frequency");
      setFrequencies(data);
      // Initialize manual input with current attended hours
      const initialManualInput: { [key: string]: number } = {};
      data.forEach((subject) => {
        initialManualInput[subject.subject_name] = Number(
          subject.attended_hours
        );
      });
      setManualInput(initialManualInput);
    } catch (error) {
      console.error("Failed to fetch frequencies:", error);
      toast({
        title: "Error",
        description: "Failed to fetch frequency data.",
        variant: "destructive",
      });
    }
  };

  const handleManualInputChange = (subjectName: string, value: string) => {
    const hours = parseInt(value, 10);
    if (!isNaN(hours)) {
      setManualInput((prev) => ({ ...prev, [subjectName]: hours }));
    }
  };

  const saveManualInput = async () => {
    try {
      await getHelperClient("/api/frequency/manual", {
        method: "POST",
        body: JSON.stringify(manualInput),
      });
      toast({
        title: "Success",
        description: "Manual frequency data saved successfully.",
      });
      fetchFrequencies(); // Refresh data after saving
    } catch (error) {
      console.error("Failed to save manual input:", error);
      toast({
        title: "Error",
        description: "Failed to save manual frequency data.",
        variant: "destructive",
      });
    }
  };

  const totalAttended = frequencies.reduce(
    (sum, subject) => sum + Number(subject.attended_hours),
    0
  );
  const totalScheduled = frequencies.reduce(
    (sum, subject) => sum + Number(subject.scheduled_hours),
    0
  );

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Subject Frequency Statistics</h1>
      <OverallFrequencyChart
        totalAttended={totalAttended}
        totalScheduled={totalScheduled}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {frequencies.map((subject) => {
          const maxSubject = MaxSubjectFrequency.find(
            (s) => s.subjectName === subject.subject_name
          );
          const maxHours = maxSubject
            ? maxSubject.hours
            : Math.max(
                Number(subject.scheduled_hours),
                Number(subject.attended_hours)
              );

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
      <Card className="mt-10">
        <CardHeader>
          <CardTitle>Manual Frequency Input</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {frequencies.map((subject) => (
              <div
                key={subject.subject_name}
                className="flex items-center space-x-2"
              >
                <label htmlFor={subject.subject_name} className="w-1/2">
                  {subject.subject_name}:
                </label>
                <Input
                  id={subject.subject_name}
                  type="number"
                  value={manualInput[subject.subject_name] || ""}
                  onChange={(e) =>
                    handleManualInputChange(
                      subject.subject_name,
                      e.target.value
                    )
                  }
                  className="w-1/2"
                />
              </div>
            ))}
          </div>
          <Button onClick={saveManualInput} className="mt-4">
            Save Manual Input
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
