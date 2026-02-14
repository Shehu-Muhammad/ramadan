import workoutsData from '@/data/workouts.json';
import type {
  WorkoutProgram,
  WorkoutDay,
  Section,
  Exercise,
} from '@/types/workout';
import { JSX } from 'react';

const workouts: WorkoutProgram = workoutsData;

export default function WorkoutPage(): JSX.Element {
  return (
    <div className='min-h-screen bg-gradient-to-b from-emerald-50 to-white'>
      <div className='max-w-4xl mx-auto px-6 pt-24 pb-12'>
        <h1 className='text-4xl font-bold text-emerald-800 mb-4'>
          {workouts.programName}
        </h1>

        <p className='text-gray-600 mb-10'>{workouts.description}</p>

        {workouts.workouts.map((day: WorkoutDay) => (
          <div
            key={day.day}
            className='mb-12 bg-white shadow-lg rounded-2xl p-6 border border-emerald-100'
          >
            <h2 className='text-2xl font-semibold text-emerald-700 mb-6'>
              Day {day.day} – {day.title}
            </h2>

            {day.sections.map((section: Section, index: number) => (
              <div key={index} className='mb-6'>
                <h3 className='text-lg font-medium text-gray-600 mb-3'>
                  {section.name}
                </h3>

                <ul className='space-y-3'>
                  {section.exercises.map((exercise: Exercise, i: number) => (
                    <li
                      key={i}
                      className='flex justify-between items-center bg-emerald-50 px-4 py-3 rounded-lg'
                    >
                      <span className='font-medium text-gray-600'>
                        {exercise.name}
                      </span>

                      <span className='text-sm text-gray-600'>
                        {exercise.sets && exercise.reps
                          ? `${exercise.sets} × ${exercise.reps}`
                          : (exercise.duration ?? '')}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
