import Image from "next/image";

export default function BottomMain(props: { redirectUrl: string }){
    const {redirectUrl} = props
    return (
        <main className="max-sm:mt-32 sm:mt-32 lg:mt-52 mb-4 mx-auto">
            <section className="w-full flex justify-center items-center mb-16">
                <a
                    href={redirectUrl}
                    rel="noopener noreferrer"
                    className="w-2/3 max-sm:w-full max-sm:px-4"
                >
                    <button
                        className="hover:scale-105 hover:shadow-2xl max-sm:text-xl   max-sm:py-2 w-full bt-gradient btn-2 font-medium md:text-3xl lg:text-6xl text-[#edf4fc] text-center rounded-full py-4">
                        Try it for free
                    </button>
                </a>
            </section>
            <section className="max-sm:hidden flex items-center w-full justify-between sm:px-8 lg:px-16 lg:gap-4 xl:gap-8">
                <div
                    className=" hover:bg-[url('/Polygon-bg-hover.svg')] bg-[url('/Polygon-bg.svg')] bg-no-repeat bg-contain h-[35vw] w-[33vw] flex flex-col justify-start items-center sm:pt-8   2xl:gap-16 sm:gap-2 md:gap-4 lg:gap-8 sm:px-4 md:px-4 xl:px-8 relative">
                    <h5
                        className="font-bold sm:text-base xl:text-3xl 2xl:text-5xl text-[#0A2342] text-center md:mt-[20%] lg:mt-[30%] 2xl:mt-[40%]">
                        Expert-Designed Assessment Kits
                    </h5>
                    <p
                        className="font-light sm:text-xs xl:text-lg 2xl:text-3xl text-[#0A2342] text-center absolute top-[50%] 2xl:top-[55%] sm:px-4 md:px-4 xl:px-8 ">
                        Explore specialized assessment kits designed by experts for
                        various contexts, then select one that aligns with your needs and
                        interests.
                    </p>
                </div>
                <div
                    className=" hover:bg-[url('/Polygon-bg-hover.svg')] bg-[url('/Polygon-bg.svg')] bg-no-repeat bg-contain h-[35vw] w-[33vw] flex flex-col justify-start items-center sm:pt-8  2xl:gap-16  sm:gap-2 md:gap-4 lg:gap-8 sm:px-4 md:px-4 xl:px-8 relative">
                    <h5
                        className="font-bold sm:text-base xl:text-3xl 2xl:text-5xl text-[#0A2342] text-center md:mt-[20%] lg:mt-[30%] 2xl:mt-[40%]">
                        Custom Kit Creation
                    </h5>
                    <p
                        className="font-light sm:text-xs xl:text-lg 2xl:text-3xl text-[#0A2342] text-center absolute top-[50%] 2xl:top-[55%] sm:px-4 md:px-4 xl:px-8 ">
                        Based on your expertise, create a tailored kit that fully meets
                        your needs.
                    </p>
                </div>
                <div
                    className=" hover:bg-[url('/Polygon-bg-hover.svg')] bg-[url('/Polygon-bg.svg')] bg-no-repeat bg-contain h-[35vw] w-[33vw] flex flex-col justify-start items-center sm:pt-8   2xl:gap-16  sm:gap-2 md:gap-4 lg:gap-8  sm:px-4 md:px-4 xl:px-8 relative">
                    <h5
                        className="font-bold sm:text-base xl:text-3xl 2xl:text-5xl text-[#0A2342] text-center md:mt-[20%] lg:mt-[30%] 2xl:mt-[40%]">
                        Comprehensive Reporting Insights
                    </h5>
                    <p
                        className="font-light sm:text-xs xl:text-lg 2xl:text-3xl text-[#0A2342] text-center absolute top-[50%] 2xl:top-[55%] sm:px-4 md:px-4 xl:px-8 ">
                        Unlock actionable insights with detailed and comprehensive
                        reports.
                    </p>
                </div>
            </section>

            <section className="sm:hidden flex flex-col mt-32">
                <div className="flex justify-around items-center w-full">
                    <h2
                        className="text-base font-bold text-[#EDFCFC] bg-[url('/polygon-o-mobile.svg')] bg-no-repeat bg-cover h-[172px] w-[150px] flex flex-col justify-center items-center gap-4 px-2 text-center">
                        Expert-Designed Assessment Kits
                    </h2>
                    <h2
                        className="text-base font-bold text-[#EDFCFC] bg-[url('/polygon-g-mobile.svg')] bg-no-repeat bg-cover h-[172px] w-[150px] flex flex-col justify-center items-center gap-4 px-2 text-center">
                        Custom Kit Creation
                    </h2>
                </div>
                <div className="flex justify-between items-center w-full">
                    <Image
                        src={"/polygon-n-mobile-l.svg"}
                        width={75}
                        height={172}
                        alt={"left"}
                    />
                    <h2
                        className="text-base font-bold text-[#EDFCFC] bg-[url('/polygon-r-mobile.svg')] bg-no-repeat bg-cover h-[172px] w-[150px] flex flex-col justify-center items-center gap-4 px-2 text-center">
                        Comprehensive Reporting Insights
                    </h2>
                    <Image
                        src={"/polygon-n-mobile-r.svg"}
                        width={75}
                        height={172}
                        alt={"right"}
                    />
                </div>
            </section>
        </main>
    )
}