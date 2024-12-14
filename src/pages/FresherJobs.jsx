import React from 'react'
import Hero from '../components/Hero'
import useFetchAllJobs from "../hooks/useFetchAllJobs"
import Jobs from '../components/Jobs'

const FresherJobs = () => {
    const {jobs,loading} = useFetchAllJobs("7121c3734dc5666ded3d")
  return (
    <>
    <Hero title="Fresher Jobs"/>
    <Jobs jobs={jobs} loading={loading}/>
    </>
  )
}

export default FresherJobs