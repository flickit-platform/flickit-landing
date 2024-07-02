import {flickitIsHelpful} from "@/utils/db";

export default function FlickitIsHelpful() {
    return (
        <main className="mx-auto flex justify-center items-center py-[2.37rem]  ">
            <section
                className=" flex flex-col justify-start items-center rounded-2xl pt-7 pb-12 gap-9 max-w-[80rem] w-[95%] bg-[#3B4F68] bg-opacity-30 relative">
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-[url(/bgShapes.svg)] blur-lg"/>
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-[url(/vector.svg)] mix-blend-overlay"/>
                <h2 className="text-white mx-auto font-medium text-[1.37rem]">
                    Flickit is specially helpful if...
                </h2>
                {flickitIsHelpful.map((item, index)=>{
                    return (
                        <section
                            key={index}
                            style={{background: "radial-gradient(circle at center, rgba(108, 123, 142, 40%) 0%, rgba(59, 79, 104, 40%) 100%)"}}
                            className={"rounded-lg px-5 pt-7 pb-4 justify-center items-center gap-y-3 sm:gap-[3.25rem] relative w-[90%] min-h-[14rem] grid grid-cols-1 sm:grid-cols-2 col-span-6"}>
                            <div
                            style={{background: `url(${item.img})`,backgroundRepeat: "no-repeat"}}    className="absolute flex justify-self-center w-[50px] h-[50px] -top-[20px]"/>
                            <h3 className="text-white text-center sm:text-right text-sm font-medium">{item.title}</h3>
                            <p className="text-xs text-[#EFF1F3] sm:text-left">
                            {item.text}
                            </p>
                        </section>
                    )
                })}
            </section>
        </main>
    )
}