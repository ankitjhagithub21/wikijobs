import React from 'react'
import Hero from '../components/Hero'
import Jobs from '../components/Jobs'
import useFetchAllJobs from "../hooks/useFetchAllJobs"

const Home = () => {
    const {jobs,loading} = useFetchAllJobs("1a90a1ac84177b731792")
  return (
    <>
    <Hero title="All Jobs"/>
    <Jobs jobs={jobs} loading={loading}/>
    </>
  )
}

export default Home