import React from 'react'
import Hero from '../components/Hero'
import useFetchAllJobs from "../hooks/useFetchAllJobs"
import Jobs from '../components/Jobs'

const WorkFromHome = () => {
    const {jobs,loading} = useFetchAllJobs("0f8c4551a83c29b15c89")
  return (
    <>
    <Hero title="Work From Home"/>
    <Jobs jobs={jobs} loading={loading}/>
    </>
  )
}

export default WorkFromHome