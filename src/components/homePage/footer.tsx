import Image from "next/image";

export default function Footer(props: { redirectUrl: string }) {
    const {redirectUrl} = props
    return (
        <footer className="max-sm:mt-8 mt-8">
            <main
                className=" w-full rounded-t-[32px] bg-[#1cc2c4] flex justify-between max-sm:px-4 max-sm:pt-4 sm :px-8 sm:pt-8 max-sm:bg-[url('/footer-bg-lines.svg')] bg-no-repeat bg-cover">
                {/* <div className="flex w-full items-center justify-center flex-col">
            <Image
              src={"/line-vector.svg"}
              className="mb-2 max-sm:w-[340px]"
              width={612}
              height={4}
              alt={"line vector"}
            />
            <Image
              src={"/logo.svg"}
              className=" max-sm:w-[135px]"
              width={200}
              height={46}
              alt={"logo"}
            />
            <Image
              className="mt-2 max-sm:w-[150px]"
              src={"/powered-img.svg"}
              width={221}
              height={26}
              alt={"powered"}
            />
          </div> */}
                <section className=" flex flex-col justify-between items-center w-1/4 mb-8 gap-8">
                    <span className="max-sm:hidden sm:hidden lg:block text-xl text-[#EDF4FC] font-bold">
                      Get in touch
                    </span>
                    <div className="flex justify-between items-center max-sm:gap-2 sm:gap-4 relative z-10">
                        <a href="https://github.com/Flickit-Platform-Dev" rel="noopener noreferrer">
                            <div
                                className=" max-sm:p-1 max-sm:min-w-[36px] max-sm:min-h-[36px] max-sm:rounded-full sm:rounded-full bg-[#EDF4FC]  lg:rounded-2xl p-2 min-w-[60px] min-h-[60px] flex items-center justify-center  text-white cursor-pointer w-[36px] h-[36px] lg:transition-width lg:duration-500 lg:hover:w-[200px] group">
                                <div
                                    className="text-[#1cc2c4] hidden lg:group-hover:flex whitespace-nowrap">Flickit-Platform-Dev
                                </div>
                                <Image
                                    src={"/github-icn.svg"}
                                    width={36}
                                    height={36}
                                    alt={"github icon"}
                                    className="max-sm:w-[20px] max-sm:h-[20px] block lg:group-hover:hidden"
                                />
                            </div>
                        </a>
                        <a href="mailto:info@flickit.org" rel="noopener noreferrer">
                            <div
                                className=" max-sm:p-1 max-sm:min-w-[36px] max-sm:min-h-[36px] max-sm:rounded-full sm:rounded-full bg-[#EDF4FC]  lg:rounded-2xl p-2 min-w-[60px] min-h-[60px] flex items-center justify-center  text-white cursor-pointer w-[36px] h-[36px] lg:transition-width lg:duration-500 lg:hover:w-[200px] group">
                                <div className="text-[#1cc2c4] hidden lg:group-hover:block">Info@flickit.org</div>
                                <div>
                                    <Image
                                        src={"/mail-icn.svg"}
                                        width={36}
                                        height={36}
                                        alt={"mail icon"}
                                        className="max-sm:w-[17px] max-sm:h-[14px] block lg:group-hover:hidden"
                                    />
                                </div>
                            </div>
                        </a>
                    </div>
                </section>
                <section className=" w-1/2 flex justify-center items-end ">
                    <Image
                        src={"/flickit-logo-footer.svg"}
                        width={180}
                        height={72}
                        alt={"logo"}
                        className=" max-sm:w-[90px] sm:w-[120px]  lg:w-auto absolute z-[2] max-sm:mb-1  sm:mb-4"
                    />
                    <Image
                        src={"/footer-bg-mobile.svg"}
                        width={305}
                        height={49}
                        alt={"logo"}
                        className="sm:hidden absolute "
                    />
                    {/*<Image*/}
                    {/*    src={"/footer-bg.svg"}*/}
                    {/*    width={935}*/}
                    {/*    height={125}*/}
                    {/*    alt={"logo"}*/}
                    {/*    className="max-sm:hidden absolute sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[40%]"*/}
                    {/*/>*/}
                    <img  src={"/footer-bg.svg"}
                    className={"max-sm:hidden absolute sm:w-[550px] lg:w-[750px]"}
                     alt={"logo"}
                    />
                </section>
                <article className="flex flex-col justify-center gap-2 items-center  w-1/4 md:mb-8 sm:mb-1">
                    <h4 className=" text-md text-[#EDF4FC] font-bold max-sm:hidden sm:hidden lg:block">
                      Joining in less than a minute!
                    </h4>
                    <a href={redirectUrl} rel="noopener noreferrer" className=" relative z-10">
                        <p
                            className="max-sm:text-xs max-sm:px-2 sm:px-8 max-sm:shadow-lg text-lg text-[#1cc2c4] bg-[#EDF4FC] rounded-2xl lg:px-16 py-1 hover:shadow-lg">
                            Try it now!
                        </p>
                    </a>
                </article>
            </main>
        </footer>
    )
}