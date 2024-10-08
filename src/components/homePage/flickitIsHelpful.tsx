import {flickitIsHelpful} from "@/utils/db";
import {Trans} from "react-i18next";

export default function FlickitIsHelpful() {
    return (
        <main className="mx-auto flex justify-center items-center py-[2.37rem] sm:py-[9.1rem] max-w-[90rem] ">
            <section
                className=" flex flex-col justify-start items-center rounded-2xl pt-7 pb-12 sm:pt-20 gap-9 sm:gap-16 lg:gap-24 max-w-[90rem] w-[95%] bg-[#3B4F68] bg-opacity-30 relative">
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-[url(/bgShapes.svg)] bg-no-repeat bg-cover blur-xl"/>
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-[url(/vector.svg)] mix-blend-overlay"/>
                <h2 className="title-large sm:text-[2.2rem] lg:!headline-large text-OnPrimary mx-auto ">
                    <Trans i18nKey={"flickitIsHelpful"} />
                </h2>
                {flickitIsHelpful.map((item, index)=>{
                    return (
                        <section
                            key={index}
                            style={{background: "radial-gradient(circle at center, rgba(108, 123, 142, 40%) 0%, rgba(59, 79, 104, 40%) 100%)"}}
                            className={"rounded-lg px-5 pt-7 pb-4 justify-center items-center gap-y-3  sm:gap-x-[3.25rem] relative w-[90%] sm:min-h-[14rem] grid grid-cols-1 sm:grid-cols-2 col-span-6 shadow-lg  backdrop-blur-sm"}>
                            <div style={{background:`url(${item.img})`,backgroundRepeat: "no-repeat",backgroundPosition: "center top",backgroundSize:"contain",filter: `drop-shadow(0px 16px 16px rgba(${item.colorShadow}))`}} className="absolute flex justify-self-center w-[36px] h-[36px] sm:w-[70px] sm:h-[70px] -top-[18px] sm:-top-[33px] "/>
                            <h3 className="title-small sm:text-xl lg:!headline-medium text-InverseOnSurface text-center sm:text-right sm:pl-5 lg:pl-10 w-[90%]">{item.title}</h3>
                            <p className="label-medium lg:!body-large text-[#EFF1F3] sm:text-left ">
                            {item.text}
                            </p>
                        </section>
                    )
                })}
            </section>
        </main>
    )
}