import Image from "next/image";

import Link from 'next/link';

export async function NavBar() {
   
    return (
        <header className='sticky top-0 z-40 border-b bg-background py-4'>
            <div className='container mx-auto px-4'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <Link href='/'>
                            <b className='text-blue-400                                                                                                                                                                                                                                           '>My World</b>
                        </Link>
                    </div>
                    <div className=' items-center justify-center'>
                    </div>
                    <div className='flex items-center'>
                         <Image
                            aria-hidden
                            src="/assets/fuck-u.png"
                            alt="File icon"
                            width={32}
                            height={32}
                            className="rounded-full shadow-lg shadow-blue-500/100 "
                        />        
                                
                    </div>
                </div>
            </div>
        </header>
    );
}
