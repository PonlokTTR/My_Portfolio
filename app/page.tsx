import Image from "next/image";
import Text from "./components/ui/text";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Separator } from "@radix-ui/react-separator";

export default function Home() {
  const socialIcons = [
    { icon: FaFacebookF, key: "facebook", url: "https://www.facebook.com/share/1A3fkbv2h4/" },
    { icon: FaTelegramPlane, key: "telegram", url: "https://t.me/+85517465395" },
    { icon: FaInstagram, key: "instagram", url: "https://www.instagram.com/pov.ponlok.336/profilecard/?igsh=MXRycnY4N290Y3Q4Yw==" },
    { icon: FiMail, key: "mail", url: "https://ponlokpov2@gmail.com" },
  ];

  return (
    <div className="min-h-screen grid items-center pb-20 gap-16">
      <div className="area">
        <ul className="circles">
          {Array.from({ length: 10 }).map((_, index) => (
            <li key={index} />
          ))}
        </ul>
      </div>
      <main className="flex flex-col gap-8">
        <section className="container grid gap-4 justify-items-center md:grid-cols-2 grid-cols-1 py-16 h-100">
          <div>
            <Text variant="subheading" className="py-2 ">
              Hello, It's Me
            </Text>
            <Text variant="heading" className="">K Boy Lok</Text>
            <Text variant="subheading" className="py-2">
              And I'm a <span className="text-blue-400">Frontend Developer</span>
            </Text>
            <Text variant="body" className="py-4 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              nulla sed saepe rerum, animi expedita.
            </Text>
            <div className="flex gap-4">
              {socialIcons.map(({ icon: Icon, key, url }) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shadow-lg p-2 shadow-blue-400/100 rounded-full size-12 flex items-center justify-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-400"
                >
                  <Icon className="text-white size-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center shadow-lg shadow-blue-400/100 rounded-full w-[23rem] h-[23rem]">
            <Image
              aria-hidden
              src="/assets/fuck-u.png"
              alt="File icon"
              width={300}
              height={100}
            />
          </div>
        </section>
        <section className="container grid gap-4 justify-items-center py-16 h-100">
          <Separator className="h-[1px] w-full bg-blue-400 shadow-lg shadow-blue-400/100" />
        </section>
      </main>
    </div>
  );
}
