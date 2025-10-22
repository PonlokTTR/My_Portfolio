import React from 'react'
import Text from "../components/ui/text";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FiMail } from 'react-icons/fi';

const Education = () => {
    const socialIcons = [
        { icon: FaFacebookF, key: "facebook", url: "https://www.facebook.com/share/1A3fkbv2h4/" },
        { icon: FaTelegramPlane, key: "telegram", url: "https://t.me/+85517465395" },
        { icon: FaInstagram, key: "instagram", url: "https://www.instagram.com/pov.ponlok.336/profilecard/?igsh=MXRycnY4N290Y3Q4Yw==" },
        { icon: FiMail, key: "mail", url: "https://ponlokpov2@gmail.com" },
      ];
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