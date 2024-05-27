export default function TopHeader(props:{ redirectUrl: string }) {

    const {redirectUrl} = props

    return (
        <main className="mx-auto">
            <div
                className=" flex flex-col items-center justify-center relative top-16 lg:top-4 xl:top-4 2xl:top-16 w-full lg:h-[85vh] 2xl:h-full">
                <img
                    src={"/pol-1.svg"}
                    className="absolute z-[-1] left-0 top-[9%] max-sm:hidden sm:block "
                />
                <img
                    src={"/pol-2.svg"}
                    className="absolute z-[-1] left-[30%] top-0 max-sm:hidden sm:block lg:hidden 2xl:block"
                />
                <img
                    src={"/pol-3.svg"}
                    className="absolute z-[-1] left-[50%] top-[10%] max-sm:hidden sm:block "
                />
                <img
                    src={"/pol-4.svg"}
                    className="absolute z-[-1] left-[75%] top-0 max-sm:hidden sm:block "
                />
                <img
                    src={"/pol-5.svg"}
                    className="absolute z-[-1] left-[80%] top-[35%] max-sm:hidden sm:hidden xl:block"
                />
                <img
                    src={"/pol-6.svg"}
                    className="absolute z-[-1] left-[90%]  top-[80%] max-sm:hidden sm:block "
                />
                <img
                    src={"/pol-7.svg"}
                    className="absolute z-[-1] left-[75%] top-[90%] max-sm:hidden sm:block "
                />
                <img
                    src={"/pol-8.svg"}
                    className="absolute z-[-1] left-[5%] top-[60%] max-sm:hidden sm:block "
                />

                <section
                    className="flex flex-col items-center justify-center max-sm:w-full max-sm:px-4 max-sm:gap-8 sm:px-16 md:px-24 lg:px-32 xl:px-80  max-sm:my-2 mt-40 mb-16 gap-16">
                    <h4
                        className="text-[#6C7B8E] mt-4 text-center max-sm:text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-normal relative w-full max-sm:px-8">
                        The Ultimate Tool for Assessing Your Software
                    </h4>
                    <h1
                        className="text-center max-sm:text-3xl sm:text-4xl md:text-4xl lg:text-6xl leading-5 font-bold relative self-stretch txt-gradient ">
                        Say Goodbye to Software Quality Blind Spots with Expert Algorithms
                    </h1>
                    <div className="flex flex-col gap-6 items-center justify-center self-stretch shrink-0 relative">
                        <p className="text-center max-sm:text-sm text-xl  font-normal relative self-stretch">
                            Flickit is a software assessment platform. It allows software
                            owners and developers to assess their software across various
                            subjects and attributes. Users can customize their assessment
                            kits to meet their specific needs.
                        </p>
                    </div>
                    <div className="mt-4 flex gap- max-sm:gap-2 gap-4">
                        <a href={redirectUrl}>
                            <button
                                className="max-sm:text-sm rounded-full border border-solid border-[#1cc2c4] bg-[#1CC2C4] hover:bg-[#1cc2c4bf]  px-16 py-2.5 text-[#edf4fc]">
                                Getting started
                            </button>
                        </a>
                        {/* <button className="max-sm:text-sm rounded-full  px-6 py-2.5 text-[#1cc2c4] hover:border hover:border-[#1cc2c4]">
                Read more...
              </button> */}
                    </div>
                </section>
            </div>
        </main>
    )
}