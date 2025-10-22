import React from 'react'
import Text from "../components/ui/text";

const Education = () => {
  return (
   <section className='container grid gap-4 py-8'>
    <Text variant="subheading" className="text-center text-blue-400"> 
                Education
              </Text>
              <div className="flex gap-8">
                  
                  <div className="" >
                    <Text variant="title" className=""> 
                      BACHELOR DEGREE in Information Technology (Build Bright University 
                      Siem Reap)
                    </Text>
                    <span className="text-blue-400 text-lg">Jan 2021 – Mar 2024    </span>
                  </div>
              </div>
              <div className="w-full border-t-2 border-dashed border-blue-400" /> 
            
   </section>
  )
}

export default Education