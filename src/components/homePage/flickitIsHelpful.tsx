import Image from "next/image";

export default function FlickitIsHelpful(){
    return (
        <main className="mx-auto mb-8 ">
            <section
                className="max-sm:hidden flex flex-col items-center justify-center relative top-16 w-full bg-no-repeat max-sm:py-8 max-sm:px-4  md:py-16 md:px-8 xl:p-32 ">
                <div
                    className="backdrop-blur-md w-full h-full bg-white/70 rounded-[32px] flex  flex-col p-16  max-sm:py-4 max-sm:px-4 md:px-8 xl:px-32 shadow-xl">
                    <h2
                        className="text-5xl font-bold leading-normal tracking-normal text-center max-sm:hidden text-[#1cc2c4] mb-16">
                        Flickit is specially helpful if...
                    </h2>
                    <div className=" flex justify-between flex-col h-full  gap-8 ">
                        <article className="flex flex-row-reverse justify-between items-center">
                            <Image
                                src={"/situation-1.svg"}
                                width={370}
                                height={370}
                                alt={"situation"}
                                className="sm:w-[200px] md:w-[25vw] xl:w-[20vw]  max-sm:w-[160px] max-sm:mb-auto"
                            />
                            <div className="mx-16 w-1/2 max-sm:w-full max-sm:mx-4">
                                <h5
                                    className="max-sm:text-sm text-2xl 2xl:text-4xl font-bold leading-normal tracking-normal text-left text-blueDeep mb-6 flex">
                                    <Image
                                        src={"/Polygon-1.svg"}
                                        width={40}
                                        height={40}
                                        alt={"polygon"}
                                        className="mr-7 ml-[-64px] max-sm:w-[18px] max-sm:mr-2 max-sm:ml-[-24px]"
                                    />
                                    If you are about to buy a software
                                </h5>
                                <p
                                    className="max-sm:mt-4 max-sm:text-xs max-sm:font-light text-base 2xl:text-2xl font-normal leading-relaxed tracking-normal text-left text-blueDeep">
                                    If you're considering purchasing new software and are
                                    uncertain about its technical specifications, seeking a
                                    third-party opinion can be beneficial. A comprehensive
                                    assessment kit will offer insights into the software's
                                    technical aspects, empowering you to make a well-informed
                                    decision.
                                </p>
                            </div>
                        </article>
                        <article className="flex justify-center items-center max-sm:gap-4">
                            <Image
                                className="sm:w-[200px] md:w-[25vw] xl:w-[20vw]  max-sm:w-[160px] max-sm:mb-auto"
                                src={"/situation-2.svg"}
                                width={300}
                                height={300}
                                alt={"situation"}
                            />
                            <div className="mx-16 w-1/2 max-sm:w-full max-sm:mx-4 max-sm:mt-4">
                                <h5
                                    className="max-sm:w-2/3 max-sm:text-sm max-sm:m-auto text-2xl 2xl:text-4xl font-bold leading-normal tracking-normal text-center text-blueDeep mb-6 flex max-sm:flex-row-reverse flex-col-reverse items-center">
                                    If you want to assess your contractor's work
                                    <Image
                                        src={"/Polygon-2.svg"}
                                        width={40}
                                        height={40}
                                        alt={"polygon"}
                                        className="mb-4 max-sm:w-[18px] max-sm:mr-2 max-sm:mb-0 "
                                    />
                                </h5>
                                <p
                                    className="max-sm:mt-4 max-sm:text-xs max-sm:font-light text-base 2xl:text-2xl font-normal leading-relaxed tracking-normal text-center text-blueDeep ">
                                    If you are developing a software and you wish to
                                    professionally assess the quality of their work in technical
                                    terms, you can seek assistance from expert evaluators in
                                    this field to inform you about the status of various
                                    technical aspects of the software.
                                </p>
                            </div>
                        </article>
                        <article className="flex flex-row-reverse justify-between items-center">
                            <Image
                                src={"/situation-3.svg"}
                                width={370}
                                height={370}
                                alt={"situation"}
                                className="sm:w-[200px] md:w-[25vw] xl:w-[20vw]  max-sm:w-[160px] max-sm:mb-auto"
                            />
                            <div className="mx-16 w-1/2 max-sm:w-full max-sm:mx-4">
                                <h5
                                    className="max-sm:flex-row-reverse max-sm:text-sm text-2xl 2xl:text-4xl font-bold leading-normal tracking-normal text-left text-blueDeep mb-6 flex">
                                    <Image
                                        src={"/Polygon-3.svg"}
                                        width={40}
                                        height={40}
                                        alt={"polygon"}
                                        className="mr-7 ml-[-64px] max-sm:w-[18px] max-sm:mr-2 max-sm:ml-[-24px]"
                                    />
                                    If you are developing a software
                                </h5>
                                <p
                                    className="max-sm:mt-4 max-sm:text-xs max-sm:font-light text-base 2xl:text-2xl font-normal leading-relaxed tracking-normal text-left text-blueDeep ">
                                    If you are developing a software and you wish to
                                    professionally assess the quality of your work in technical
                                    terms, you can seek assistance from expert evaluators in
                                    this field to inform you about the status of various
                                    technical aspects of the software.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <section
                className="sm:hidden flex flex-col items-center justify-center top-8 relative bg-[url('/midle-shape-bg-mobile.svg')] w-full bg-no-repeat py-8 px-4">
                <div className="backdrop-blur-md w-full h-full bg-white/70 rounded-[32px] flex  flex-col p-4">
                    <h2 className="text-2xl font-bold leading-normal tracking-normal text-center text-[#1cc2c4] mb-1">
                        Flickit is specially helpful if...
                    </h2>
                    <div className=" flex justify-between flex-col h-full  gap-8 ">
                        <article className="flex flex-col justify-between items-center">
                            <div className="flex w-full justify-between  gap-4">
                                <h5
                                    className="max-sm:w-2/3 max-sm:text-sm max-sm:m-auto text-2xl 2xl:text-4xl font-bold leading-normal tracking-normal text-center text-blueDeep mb-6 flex max-sm:flex-row-reverse flex-col-reverse items-start">
                                    If you are about to buy a software
                                    <Image
                                        src={"/Polygon-1.svg"}
                                        width={40}
                                        height={40}
                                        alt={"polygon"}
                                        className="w-[18px] "
                                    />
                                </h5>
                                <Image
                                    className="sm:w-[200px] md:w-[25vw] xl:w-[20vw]  max-sm:w-[160px] max-sm:mb-auto"
                                    src={"/situation-1.svg"}
                                    width={300}
                                    height={300}
                                    alt={"situation"}
                                />
                            </div>
                            <div>
                                <p
                                    className="max-sm:mt-4 max-sm:text-xs max-sm:font-light text-base 2xl:text-2xl font-normal leading-relaxed tracking-normal text-center text-blueDeep ">
                                    If you're considering purchasing new software and are
                                    uncertain about its technical specifications, seeking a
                                    third-party opinion can be beneficial. A comprehensive
                                    assessment kit will offer insights into the software's
                                    technical aspects, empowering you to make a well-informed
                                    decision.
                                </p>
                            </div>
                        </article>
                        <article className="flex flex-col justify-between items-center">
                            <div className="flex w-full justify-between flex-col-reverse items-center  gap-4">
                                <h5
                                    className="max-sm:w-2/3 max-sm:text-sm max-sm:m-auto text-2xl 2xl:text-4xl font-bold leading-normal tracking-normal text-center text-blueDeep mb-6 flex max-sm:flex-row-reverse flex-col-reverse items-start">
                                    If you want to assess your contractor's work
                                    <Image
                                        src={"/Polygon-2.svg"}
                                        width={40}
                                        height={40}
                                        alt={"polygon"}
                                        className="w-[18px]"
                                    />
                                </h5>
                                <Image
                                    className="sm:w-[200px] md:w-[25vw] xl:w-[20vw]  max-sm:w-[160px] max-sm:mb-auto"
                                    src={"/situation-2.svg"}
                                    width={300}
                                    height={300}
                                    alt={"situation"}
                                />
                            </div>
                            <div>
                                <p
                                    className="max-sm:mt-4 max-sm:text-xs max-sm:font-light text-base 2xl:text-2xl font-normal leading-relaxed tracking-normal text-center text-blueDeep ">
                                    If you are developing a software and you wish to
                                    professionally assess the quality of their work in technical
                                    terms, you can seek assistance from expert evaluators in
                                    this field to inform you about the status of various
                                    technical aspects of the software.
                                </p>
                            </div>
                        </article>
                        <article className="flex flex-col justify-between items-center">
                            <div className="flex w-full justify-between flex-row-reverse gap-4">
                                <h5
                                    className="max-sm:w-2/3 max-sm:text-sm max-sm:m-auto text-2xl 2xl:text-4xl font-bold leading-normal tracking-normal text-center text-blueDeep mb-6 flex max-sm:flex-row-reverse flex-col-reverse items-start">
                                    If you are developing a software
                                    <Image
                                        src={"/Polygon-3.svg"}
                                        width={40}
                                        height={40}
                                        alt={"polygon"}
                                        className="w-[18px] "
                                    />
                                </h5>
                                <Image
                                    className="sm:w-[200px] md:w-[25vw] xl:w-[20vw]  max-sm:w-[160px] max-sm:mb-auto"
                                    src={"/situation-3.svg"}
                                    width={300}
                                    height={300}
                                    alt={"situation"}
                                />
                            </div>
                            <div>
                                <p
                                    className="max-sm:mt-4 max-sm:text-xs max-sm:font-light text-base 2xl:text-2xl font-normal leading-relaxed tracking-normal text-center text-blueDeep ">
                                    If you are developing a software and you wish to
                                    professionally assess the quality of your work in technical
                                    terms, you can seek assistance from expert evaluators in
                                    this field to inform you about the status of various
                                    technical aspects of the software.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    )
}