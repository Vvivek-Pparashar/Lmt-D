import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate, useParams } from 'react-router-dom';
const Employee = () => {
  const [attendanceCount, setAttendanceCount] = useState(0);   // stored total attendace
  const [isAttendanceMarked, setIsAttendanceMarked] = useState(false); // check if attendance is marked disable or enable the button
  const [attendanceDates, setAttendanceDates] = useState([]);  // stores all attendace dates 
  const  username  = useParams().username;  // get username from the url
  const sessionUsername = sessionStorage.getItem("username"); 
 
  const navigate = useNavigate();
//--------------------------------------------Total attendance--------------------------------------------
  useEffect(() => {
    const fetchAttendanceCount = async () => {
      try {
        const response = await axios.get(`https://lmt-d-server.vercel.app/api/employee/${username}`);
      
        const { attendance } = response.data;
        
        setAttendanceCount(attendance.length);
        setAttendanceDates(attendance.map(entry => entry.date.split("T")[0]));//setting dates in an array to display
      
      } catch (error) {
        console.error(error);
      }
    };

    fetchAttendanceCount();
  }, [username]);


//---------------------------------------------------- Check attendace of today else set attendacne of today----------------------------

  useEffect(() => {
    const checkAttendance = async () => {
      try {
        const response = await axios.get(`https://lmt-d-server.vercel.app/api/employee/attendance/${username}`);
        const { message } = response.data;
  
        if (response.status === 200 && message === "Attendance already marked for today") {
          setIsAttendanceMarked(true);
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkAttendance();
  }, [username]);

  const handleAddAttendance = async () => {
    try {
      const response = await axios.get(`https://lmt-d-server.vercel.app/api/employee/attendance/${username}`); // will mark attendance as soon as page opens 
      const { message } = response.data;
  
      if (response.status === 200 && message === "Attendance already marked for today") {
        setIsAttendanceMarked(true);
        return;
      }
  
     
    } catch (error) {
      console.error(error);
    }
  };
//------------------------------------------------ return not authenticates
if (sessionUsername !== username) {
  navigate("/")
  return;
}


  //--------------------------------------------------return Employee page---------------------------------------------
  return (
    <div>
      <h2>{username} Page</h2>
      <div>
        <p>Attendance Count: {attendanceCount}</p>
        <button onClick={handleAddAttendance} disabled={isAttendanceMarked}>
          {isAttendanceMarked ? "Attendance Marked" : "Add Attendance"}
        </button>
        <p>Attendance Dates:</p>
        <ul>
          {attendanceDates.map((date, index) => (
            <li key={index}>{date}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Employee;
