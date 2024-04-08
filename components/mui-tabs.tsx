"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PizzaCard from "./mui-card";
import { pizzaSample } from "../placeholder-data/data";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
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
        <Box sx={{ p: 3 }}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MenuTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: { backgroundColor: '#ed4734' }
          }}
          aria-label="basic tabs example"
        >
          <Tab label="Veg" {...a11yProps(0)} />
          <Tab label="Non-Veg" {...a11yProps(1)} />
          <Tab label="Classic" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {pizzaSample.map((pizza, index) => {
          return (
            <div key={index} className="max-h-[9em] mb-4 overflow-x-hidden">
              <PizzaCard
                img={pizza.img}
                name={pizza.name}
                price={pizza.price}
                flexDirection="flex-row-reverse"
                imgHeight="h-[8em]"
              />
            </div>
          );
        })}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {pizzaSample.map((pizza, index) => {
          return (
            <div key={index} className="max-h-[9em] mb-4 overflow-x-hidden">
              <PizzaCard
                img={pizza.img}
                name={pizza.name}
                price={pizza.price}
                flexDirection="flex-row-reverse"
                imgHeight="h-[8em]"
              />
            </div>
          );
        })}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {pizzaSample.map((pizza, index) => {
          return (
            <div key={index} className="max-h-[9em] mb-4 overflow-x-hidden">
              <PizzaCard
                img={pizza.img}
                name={pizza.name}
                price={pizza.price}
                flexDirection="flex-row-reverse"
                imgHeight="h-[8em]"
              />
            </div>
          );
        })}
      </CustomTabPanel>
    </Box>
  );
}
