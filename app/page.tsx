import Text from "./components/ui/text";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Button } from "./components/ui/button";

export default function Home() {
  const socialIcons = [
    { icon: FaFacebookF, key: "facebook", url: "https://www.facebook.com/share/1A3fkbv2h4/" },
    { icon: FaTelegramPlane, key: "telegram", url: "https://t.me/+85517465395" },
    { icon: FaInstagram, key: "instagram", url: "https://www.instagram.com/pov.ponlok.336/profilecard/?igsh=MXRycnY4N290Y3Q4Yw==" },
    { icon: FiMail, key: "mail", url: "https://ponlokpov2@gmail.com" },
  ];

  const skills = [
    { name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "PHP", link: "https://www.php.net/" },
    { name: "Laravel", link: "https://laravel.com/" },
    { name: "React", link: "https://react.dev/" },
    { name: "Next JS", link: "https://nextjs.org/" },
    { name: "Tailwind", link: "https://tailwindcss.com/" },
    { name: "Network", link: "https://www.cisco.com/" },
  ];


  return (
    <div className="min-h-screen grid items-center gap-16 ">
      <main className="flex flex-col gap-8">
        <section className="container grid gap-4 justify-items-center md:grid-cols-2 grid-cols-1 py-8 ">
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
          <div className="flex items-center justify-center shadow-lg shadow-blue-400/100 rounded-full w-[23rem] h-[23rem]">
            {/* <Image
              aria-hidden
              src="/assets/fuck-u.png"
              alt="File icon"
              width={300}
              height={100}
            /> */}
          </div>
        </section>
        <section className="container grid gap-4 justify-items-center py-8 ">
        <div className="w-full border-t-2 border-dashed border-blue-400" />
        </section>
        <section className="container grid gap-4 py-8 ">
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

        <section className="container grid gap-4 py-8">
          <Text variant="subheading" className="text-center text-blue-400">Expertise</Text>
          <div className="flex gap-8">
            <div>
              <Text variant="title" className="mb-4">Skills</Text>
              <div className="flex gap-4 flex-wrap">
                {skills.map(({ name, link }) => (
                  <a key={name} href={link} target="_blank" rel="noopener noreferrer">
                    <Button className="shadow-lg shadow-blue-400/100 flex items-center justify-center transition delay-15 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 text-blue-400 hover:text-white">
                        <Text variant="title" className="text-center">
                          {name}
                        </Text>
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full border-t-2 border-dashed border-blue-400" /> 
        </section>

        <section className="container grid gap-4 py-8">
          <Text variant="subheading" className="text-center text-blue-400">Job Experience</Text>
          <div className="flex gap-8">
            <div className="space-y-8">
              <div>
                <Text variant="smallheading" className="">Internship Network - Fly Computer </Text>
                <span className="text-blue-400 text-lg">Jun 2022 – Aug 2022  </span>
              </div>
              <div className="">
                <Text variant="smallheading" className="">Internship Laravel - eOcambo </Text>
                <span className="text-blue-400 text-lg">Sep 2023 – Dec 2023 </span>
              </div>   
              <div className="">
                <Text variant="smallheading" className="">Frontend Developer - Digital Government Committee</Text>
                <span className="text-blue-400 text-lg">Jul 2024 – Present </span>
              </div>
            </div>
          </div>
          <div className="w-full border-t-2 border-dashed border-blue-400" /> 
        </section>
        <section className=" grid gap-4 ">
        <footer className="w-full border-t-2 border-blue-400">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <span>Ponlok</span>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                      <Text variant="body">
                      Powered by : <span className="text-blue-400">Next JS</span>
                      </Text>
                    </li>
                </ul>
                </div>
            </footer>
        </section>
      </main>
    </div>
  );
}
