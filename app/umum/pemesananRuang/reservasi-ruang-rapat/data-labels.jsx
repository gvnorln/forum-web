import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DataLabels() {
  const [startTime, setStartTime] = React.useState('08:00'); // Set default start time to 08:00
  const [endTime, setEndTime] = React.useState('09:00'); // Set default end time to 09:00
  const [timeOptions, setTimeOptions] = React.useState([]);

  React.useEffect(() => {
    // Generate time options from 00:00 to 23:00
    const options = [];
    for (let i = 0; i <= 23; i++) {
      for (let j = 0; j < 60; j += 15) {
        const hour = i.toString().padStart(2, '0');
        const minute = j.toString().padStart(2, '0');
        options.push(`${hour}:${minute}`);
      }
    }
    setTimeOptions(options);
  }, []);

  const handleStartTimeChange = (event) => {
    const selectedStartTime = event.target.value;
    if (selectedStartTime >= endTime) {
      // Start time cannot be greater than or equal to end time
      alert('Start time cannot be greater than or equal to end time');
    } else {
      setStartTime(selectedStartTime);
    }
  };

  const handleEndTimeChange = (event) => {
    const selectedEndTime = event.target.value;
    if (selectedEndTime <= startTime) {
      // End time cannot be less than or equal to start time
      alert('End time cannot be less than or equal to start time');
    } else {
      setEndTime(selectedEndTime);
      if (startTime >= selectedEndTime) {
        // Update start time if it's greater than or equal to end time
        setStartTime('');
      }
    }
  };

  return (
    <div style={{ display: 'flex', width: '430px', gap: '75px' }}>
      <FormControl sx={{ minWidth: '430px', m: 1, right: '7px' }} size="small">
        <InputLabel id="start-time-label">Start Time</InputLabel>
        <Select
          labelId="start-time-label"
          id="start-time"
          value={startTime}
          label="Start Time"
          onChange={handleStartTimeChange}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 300,
                width: 250,
                marginTop: '8px', // Adjust this value to position the menu below the label
              },
            },
          }}
        >
          {timeOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: '435px', m: 1 }} size="small">
        <InputLabel id="end-time-label">End Time</InputLabel>
        <Select
          labelId="end-time-label"
          id="end-time"
          value={endTime}
          label="End Time"
          onChange={handleEndTimeChange}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 300,
                width: 250,
                marginTop: '8px', // Adjust this value to position the menu below the label
              },
            },
          }}
        >
          {timeOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
