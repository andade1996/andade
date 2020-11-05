
import React, {Component,useEffect,useState} from 'react';
import  {TestPost} from './../axios/axiosRequest'

export default ()=>{
    const [data,setData] = useState({ hits: [] })
        useEffect(()=>{

                     const  result = async ()=>{
                                  const  res = await TestPost()
                                setData(res.data)
                                    console.log(data,"???")

                     }
                            result()


        },[])


        return <div>
                真棘手啊
            </div>

}
