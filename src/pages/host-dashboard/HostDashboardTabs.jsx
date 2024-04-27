import {Properties} from '../../components'
import {HostedProperties} from '../'
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
        <div style={{ p: 3 }}>
          {children}
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

export default function HostDashboardTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          // border: "3px solid red",
          borderBottom: 1,
          borderColor: "divider",
         
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            // border: "3px solid purple",
            marginBottom: "3rem",
            marginLeft: '3rem',
            width: "22rem",
          }}
        >
          <Tab
            label="All Properties"
            {...a11yProps(0)}
            sx={{ backgroundColor: "red" }}
          />
          <Tab
            label="Hosted Properties"
            {...a11yProps(1)}
            sx={{ backgroundColor: "yellow" }}
          />
        </Tabs>
      </div>

      {/* All properties */}
      <CustomTabPanel value={value} index={0}>
        <Properties tabValue={value} />
      </CustomTabPanel>

      {/* Hosted properites */}
      <CustomTabPanel value={value} index={1}>
        <HostedProperties />
      </CustomTabPanel>
    </div>
  );
}
