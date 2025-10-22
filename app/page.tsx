import Text from "./components/ui/text";
import { Button } from "./components/ui/button";
import HeaderHomePage from "./components/headerhomepage";
import Education from "./components/education";

export default function Home() {


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
          <HeaderHomePage/>
        <section className="container grid gap-4 justify-items-center py-8 ">
        <div className="w-full border-t-2 border-dashed border-blue-400" />
        </section>
        <Education/>

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
