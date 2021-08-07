import React, { useState } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Todo from '../Todo/Todo';
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
        centered
        variant="fullWidth"
      >
        <Tab label="All Tasks" />
        <Tab label="Pending" />
        <Tab label="Completed" />
      </Tabs>
      <TabPanel currentTab={currentTab} tabId={0}>
        <Todo taskName="Learn React" />
      </TabPanel>
      <TabPanel currentTab={currentTab} tabId={1}>
        <Todo taskName="Learn Something" />
      </TabPanel>
      <TabPanel currentTab={currentTab} tabId={2}>
        <Todo taskName="Learn everything" />
      </TabPanel>
    </div>
  );
}
function TabPanel(props) {
  const { currentTab, tabId, children } = props;
  return (
    <div className="tab-content" hidden={currentTab !== tabId}>
      {children}
    </div>
  );
}
