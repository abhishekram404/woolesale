import {useEffect, useState} from 'react'
import sanityClient from 'app/utils/sanity'

export function useFetch(query: string){
    const [response, setResponse] = useState<any>()
      const [isLoading , setLoading]  = useState(false)
      useEffect(()=> {
          setLoading(true)
    sanityClient.fetch(query).then((data:any) => {
      setResponse(data)
          setLoading(false)
      
      }).catch(err => {
          
      })
  },[])
  
  
  return {response, isLoading}
}