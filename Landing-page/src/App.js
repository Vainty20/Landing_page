import React from 'react'
import FindJob from './components/findjob/FindJob'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import JobList from './components/joblist/JobList';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FindJob />
      <JobList />
    </div>
  );
}

export default App;
