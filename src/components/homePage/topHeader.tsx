import Link from "next/link";
import {Trans} from "react-i18next";

export default function TopHeader(props: { redirectUrl: string }) {

    const {redirectUrl} = props

    return (
        <main
            className="mx-auto flex justify-center items-center relative h-[28.3rem] w-full  sm:max-h-[45.3rem] sm:h-[45.3rem]  lg:max-h-[62.3rem] lg:h-[62.3rem] ">
            <div className={"absolute bg-cover bg-[url(/lines.svg)] h-full w-full top-0 bottom-0 right-0 left-0"}/>
            <div className={"flex justify-center items-center w-full h-[20rem]  sm:h-[30rem]"}>
                <div
                    className={"absolute bg-cover blur-2xl bg-[url(/meshGradiant.svg)] h-full w-full top-0 bottom-0 right-0 left-0"}/>
                <section
                    className={`relative text-center gap-y-4 sm:gap-y-5 flex flex-col items-center justify-center w-[18.5rem] sm:w-[32rem] lg:w-[55.43rem] 2xl:w-[60rem] 3xl:w-[80rem] max-w-[870px]`}>
                    <div className="label-small sm:display-medium text-InverseOnSurface">
                        <Trans i18nKey={"theUltimateTool"} />
                    </div>
                    <div
                        className={`heading-small sm:display-large  drop-shadow-[5px_5px_20px_rgba(255,255,255,0.4)] text-PrimaryFixed text-[1.5rem] sm:text-[2.5rem] lg:text-[4.5rem] font-bold leading-8 sm:leading-10 lg:leading-[5.625rem]`}>
                        <Trans i18nKey={"sayGoodBye"} />
                    </div>
                    <div className="body-small sm:headline-small sm:font-normal  text-InverseOnSurface">
                        <Trans i18nKey={"flickitIsASoftwareAssessmentPlatform"} />
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <Link href={redirectUrl} rel="noopener noreferrer">
                            <div
                                className="label-large sm:title-large flex justify-center items-center cursor-pointer bg-gradient-to-r from-primaryFixed from-0% to-PrimaryFixedDim to-100% text-Primary w-32 sm:w-[16rem] lg:w-[20rem] h-[2.5rem] sm:h-[3.375rem] font-medium text-[0.875rem] sm:text-[1.25rem] sm:px-6 sm:py-2.5 leading-5 rounded-[100px]">
                                <Trans i18nKey={"getStarted"} />
                            </div>
                        </Link>
                        <div
                            className="label-large sm:title-large text-InverseOnSurface flex justify-center items-center cursor-pointer w-32 sm:w-[16rem] lg:w-[20rem] h-[2.5rem] sm:h-[3.375rem] bg-transparent border border-solid border-Primary font-medium text-[0.875rem] sm:text-[1.25rem] sm:px-6 sm:py-2.5 leading-5 rounded-[100px]">
                            <Trans i18nKey={"readMore"} />
                        </div>
                    </div>
                </section>

            </div>
        </main>
    )
}