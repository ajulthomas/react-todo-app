import React, { useState } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Todo from './components/Todo/Todo';
import './ListTasksStyles.css';

export default function ListTasks(props) {
  const [currentTab, setCurrentTab] = useState(0);
  const tabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };
  return (
    <div className="tasks-container">
      <Tabs
        value={currentTab}
        onChange={tabChange}
        aria-label="simple tabs example"
      >
        <Tab label="All Tasks" />
        <Tab label="Pending" />
        <Tab label="Completed" />
      </Tabs>
      <TabPanel currentTab={currentTab} tabId={0}>
        Item One
      </TabPanel>
      <TabPanel currentTab={currentTab} tabId={1}>
        Item Two
      </TabPanel>
      <TabPanel currentTab={currentTab} tabId={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
function TabPanel(props){
  const {currentTab, tabId, children} = props;
  return (
    <div className="tab-content" hidden= {currentTab !== tabId}>
      {children}
    </div>
  );
}
