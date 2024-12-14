import React from 'react'
import Job from './Job'
import Loader from './Loader'

const Jobs = ({jobs,loading}) => {
    if(loading){
        return <Loader/>
    }
  return (
   <section className='px-5 py-24'>
     <div className='max-w-5xl w-full mx-auto flex flex-col gap-4'>
        {
            jobs.map((job,index)=>{
                return <Job key={index} title={job.title} tags={job.job_type} applyLink={job.referal_link} salary={job.salary}/>
            })
        }
        </div>
   </section>
  )
}

export default Jobs