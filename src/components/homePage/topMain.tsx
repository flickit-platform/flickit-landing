import {cardsText} from "@/utils/db";

export default function TopMain() {

    return (
        <section className="flex items-center justify-center bg-gradient-to-b from-0% from-bluemaxLight to-100% to-bluemaxDeep p-9 ">
            <div className="flex flex-col items-center justify-center gap-6 max-w-[90rem]">
                <h3 className="text-white font-semibold text-[1.5rem] leading-8">
                    How does it work?
                </h3>
                <article className="flex flex-col sm:flex-row justify-center items-stretch gap-4 lg:w-[75%]">
                    {cardsText.map((card, index) => {
                        const {title, text, color} = card
                        return (
                            <Cards title={title} text={text} color={color} key={index}/>
                        )
                    })}
                </article>
            </div>
        </section>
    )

    function Cards({title, text, color}: { title: string, text: string, color: string }) {
        return (
            <article
                className="flex flex-col  justify-start lg:justify-between  gap-y-3 w-full  px-4 py-3 sm:px-[1.8rem] sm:py-[0.6rem] lg:px-[2.8rem] lg:py-[1.6rem] rounded-2xl sm:rounded-[2rem] bg-[#375172] bg-opacity-30 sm:min-h-[16.6rem] sm:max-h-[16.6rem]">
                <h2 style={{color}}
                    className={`text-base sm:text-[1.1rem] lg:text-[1.5rem] font-semibold text-left lg:font-bold sm:text-center colorText h-1/3`}>
                    {title}
                </h2>
                <p className="text-xs sm:text-[0.8rem] text-whiteGray font-light leading-relaxed tracking-normal text-justify text-overFlow5 flex justify-center items-center  h-2/3">
                    {text}
                </p>
            </article>
        )
    }
}

