import Image from "next/image";
import {cardsText} from "@/utils/db";

export default function TopMain() {

    return (
        <section className="flex flex-col items-center gap-6 bg-gradient-to-b from-0% from-bluemaxLight to-100% to-bluemaxDeep p-9">
            <h3 className="text-white font-semibold text-[1.5rem] leading-8">
                How does it work?
            </h3>
            <article className="flex flex-col sm:flex-row justify-center items-stretch gap-4">
                {cardsText.map(card =>{
                    const {title, text, color} = card
                    return (
                        <Cards title={title} text={text} color={color} />
                    )
                })}
            </article>
        </section>
    )

    function Cards({title, text, color}: { title: string, text: string, color: string }) {
        return (
            <article
                className="flex flex-col justify-start  gap-y-3 w-full  px-4 py-3 rounded-2xl bg-[#375172] bg-opacity-30 sm:min-h-[16.6rem] sm:max-h-[16.6rem]">
                <h2 style={{color}} className=" text-base font-semibold text-left">
                    {title}
                </h2>
                <p className="text-xs text-whiteGray font-light leading-relaxed tracking-normal text-justify text-overFlow4 ">
                    {text}
                </p>
            </article>
        )
    }
}

