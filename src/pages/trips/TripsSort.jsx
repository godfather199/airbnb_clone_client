import {TripCard} from '../'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div sx={{ p: 3 }}>
          <span>{children}</span>
        </div>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



export default function TripsSort({
  ongoingTrips,
  upcomingTrips,
  previousTrips,
}) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="">
      {/* Heading  */}
      <div className="">
        <span className=" text-2xl text-red-500 font-bold">TRIPS</span>
      </div>

      {/* Navigation buttons */}
      <div style={{ width: "100%" }}>
        <div style={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              // border: "3px solid purple",
              marginBottom: "1.5rem",
              marginTop: '1rem'
              // marginLeft: '3rem',
              // width: "22rem",
            }}
          >
            <Tab
              sx={{ background: "lightblue" }}
              label="Ongoing Trips"
              {...a11yProps(0)}
              // sx={{ backgroundColor: "black" }}
            />
            <Tab
              sx={{ background: "red" }}
              label="Upcoming  Trips"
              {...a11yProps(1)}
            />
            <Tab
              sx={{ background: "orange" }}
              label="Previous Trips"
              {...a11yProps(2)}
            />
          </Tabs>
        </div>
        <CustomTabPanel value={value} index={0}>
          <TripCard bookings={ongoingTrips} notFound="Ongoing Trip" />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <TripCard bookings={upcomingTrips} notFound="Upcoming Trip" />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <TripCard bookings={previousTrips} notFound="Previous  Trip" />
        </CustomTabPanel>
      </div>
    </div>
  );
}
