"use client";

import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import ResolveNip05Name from './components/ResolveNip05Name';
import KeyConverter from './components/KeyConverter';
import RunRelayQuery from './components/RunRelayQuery';

export default function Home() {
  return (
    <div className="container mx-auto">
      <Tabs>
        <TabList>
          <Tab>Resolve Nip05 Name</Tab>
          <Tab>Key Converter</Tab>
          <Tab>Run a Relay Query</Tab>
          <Tab>Get Social Distance</Tab>
        </TabList>

        <TabPanel>
          <ResolveNip05Name />
        </TabPanel>

        <TabPanel>
          <KeyConverter />
        </TabPanel>

        <TabPanel>
          <RunRelayQuery />
        </TabPanel>
      </Tabs>
    </div>
    );
}
