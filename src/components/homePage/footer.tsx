export default function Footer() {
    return (
        <footer className="flex justify-center bg-gradient-to-b from-0% to-100% from-[#001D35] to-[#001224] ">
            <main className=" flex justify-between items-start w-full md:w-[80%] h-[7rem] sm:h-[9rem] pt-6 px-8">
                <div className="flex flex-col items-center justify-start">
                    <img className="w-[8.6rem] h-[3rem]" src="/footer-Logo.png"/>
                    <p className="text-white text-bold text-xs">Have doubt? Let's assess.</p>
                </div>
                <div className="flex flex-col justify-center align-center">
                    <p className="text-medium text- text-[#EDF4FC]">Get in touch</p>
                    <div className="flex gap-4">
                        <a href="https://github.com/Flickit-Platform-Dev" target={"_blank"} rel="noopener noreferrer">
                            <img className="w-[2.5rem] h-[2.5rem]" src="/github-logo.png"/>
                        </a>
                        <a href="mailto:info@flickit.org" rel="noopener noreferrer">
                            <img className="w-[2.5rem] h-[2.5rem]" src="/mail-logo.png"/>
                        </a>
                    </div>
                </div>
            </main>
        </footer>
    )
}