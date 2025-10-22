import React from 'react'
import Text from "../components/ui/text";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FiMail } from 'react-icons/fi';

const HeaderHomePage = () => {
    const socialIcons = [
        { icon: FaFacebookF, key: "facebook", url: "https://www.facebook.com/share/1A3fkbv2h4/" },
        { icon: FaTelegramPlane, key: "telegram", url: "https://t.me/+85517465395" },
        { icon: FaInstagram, key: "instagram", url: "https://www.instagram.com/pov.ponlok.336/profilecard/?igsh=MXRycnY4N290Y3Q4Yw==" },
        { icon: FiMail, key: "mail", url: "https://ponlokpov2@gmail.com" },
      ];
  return (
   <section className='container grid gap-4 justify-items-center md:grid-cols-2 grid-cols-1 py-8 '>
    <div>
                <Text variant="subheading" className="py-2 ">
                  Hello It is Me
                </Text>
                <Text variant="heading" className="">K Boy Lok</Text>
                <Text variant="subheading" className="py-2">
                  And Im a <span className="text-blue-400">Frontend Developer</span>
                </Text>
                <Text variant="body" className="py-4 ">
                  Hello! I am Ponlok, a fresh graduate with a bachelor in Information Technology from Build Bright University. I am a fast learner and a hard worker with experience in web development and would like to work as a frontend developer.
                </Text>
                <div className="flex gap-4">
                  {socialIcons.map(({ icon: Icon, key, url }) => (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shadow-lg p-2 shadow-blue-400/100 rounded-full size-12 flex items-center justify-center transition delay-15 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-400"
                    >
                      <Icon className="text-white size-6" />
                    </a>
                  ))}
                </div>
              </div>
   </section>
  )
}

export default HeaderHomePage