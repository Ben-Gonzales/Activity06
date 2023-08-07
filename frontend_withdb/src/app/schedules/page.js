'use client';
import React, { useState, useEffect } from "react";

const Schedules = () => {
    const [schedules, setSchedules] = useState([]);
    const [scheduleId, setScheduleId] = useState('');
    const [scheduleDetails, setScheduleDetails] = useState({});

    useEffect(() => {
        fetch('http://localhost:4000/schedules')
        .then(data => data.json())
        .then(data => setSchedules(data))
    }, [])

    useEffect(() => {
        if (scheduleId !== '') {
            fetch(`http://localhost:4000/schedules/${scheduleId}`)
            .then(res => res.json())
            .then(data => setScheduleDetails(data));
        }
    }, [scheduleId])

    const createSchedule = () => {
        fetch('http://localhost:4000/schedules', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            courseCode: 'G-SOSC004',
            start: '2:00 pM',
            end: '3:30 PM',
            daySchedule: ['Friday', 'Saturday']
          })
        });
      }
    return (
        <div>
            <ul>
                {schedules.map(schedule => {
                    return <li key={schedules._id} 
                    style={{ border: 'white 1px solid'}}
                    onClick={() => setScheduleId(schedule._id)}>
                        {schedule.courseCode}
                        {scheduleId === schedule._id &&
                        <span> | {scheduleDetails.start} | {scheduleDetails.end} | {scheduleDetails.daySchedule}</span>
                        }
                    </li>
                })}
            </ul>
            <button onClick={createSchedule}>Input Schedule</button>
        </div>
    )
}

export default Schedules;