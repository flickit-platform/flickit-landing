
import {sansation} from "@/utils/fonts";

export default function TopHeader(props:{ redirectUrl: string }) {

    const {redirectUrl} = props

    return (
        <main className="mx-auto flex justify-center items-center relative h-[28.3rem] w-full  sm:max-h-[45.3rem] sm:h-[45.3rem]  lg:max-h-[62.3rem] lg:h-[62.3rem] ">
            <img src={"/lines.svg"} className={"absolute h-full w-full top-0 bottom-0 right-0 left-0"} />
                <section className={`${sansation.className } text-center gap-y-4 sm:gap-y-5 flex flex-col items-center justify-center w-[18.5rem] h-[20rem] sm:w-[32rem] sm:h-[30rem] lg:w-[55.43rem] 2xl:w-[60rem] 3xl:w-[80rem]`} >
                    <div className="text-[0.688rem] sm:text-[1.563rem] text-[#EDF4FC] font-normal leading-8">
                        The ultimate tool for assessing your software
                    </div>
                    <div className=" text-[#EDF4FC] text-[1.5rem] sm:text-[2.5rem] lg:text-[4.5rem] font-bold leading-8 sm:leading-10 lg:leading-[5.625rem]">
                        Say Goodbye to Software Quality Blind Spots with Expert Algorithms
                    </div>
                    <div className="font-light sm:font-normal text-[0.75rem] sm:text-[1.25rem] text-[#EDF4FC]">
                        Flickit is a software assessment platform. It allows software owners and developers to assess their software across various subjects and attributes. Users can customize their assessment kits to meet their specific needs.
                    </div>
                    <div className="flex justify-center items-center gap-3 text-[#EDF4FC]">
                        <div
                            className="flex justify-center items-center cursor-pointer bg-primaryFixed text-blueDeep w-32 sm:w-[16rem] lg:w-[20rem] h-[2.5rem] sm:h-[3.375rem] font-medium text-[0.875rem] sm:text-[1.25rem] sm:px-6 sm:py-2.5 leading-5 rounded-[100px]">
                            Get started
                        </div>
                        <div
                            className="flex justify-center items-center cursor-pointer w-32 sm:w-[16rem] lg:w-[20rem] h-[2.5rem] sm:h-[3.375rem] bg-transparent border border-solid border-[#D0ECFF] font-medium text-[0.875rem] sm:text-[1.25rem] sm:px-6 sm:py-2.5 leading-5 rounded-[100px]">
                            Read more...
                        </div>
                    </div>
                </section>

        </main>
    )
}