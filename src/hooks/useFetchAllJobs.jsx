import { useEffect, useState } from "react"


const getAllJobs = (id) => {
  const [jobs,setJobs] = useState([])
  const [loading,setLoading] = useState(true)
  useEffect(()=>{

    const getAllJobs = async() => {
      setLoading(true)
      try{
        const res = await fetch(`https://api.npoint.io/${id}`)
        const data = await res.json()
        setJobs(data)
      }catch(error){
        console.log(error)
      }finally{
        setLoading(false)
      }
    }
    getAllJobs()
  },[])
return {jobs,loading}
}

export default getAllJobs