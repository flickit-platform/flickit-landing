import {cardsText} from "@/utils/db";
import {Trans} from "react-i18next";

export default function TopMain() {

    return (
        <section className="flex items-center justify-center bg-gradient-to-b from-0% from-bluemaxLight to-100% to-navyDeep p-9 sm:px-2 sm:h-[37.8rem] ">
            <div className="flex flex-col items-center justify-center gap-6 sm:gap-[60px] lg:gap[90px] max-w-[90rem] h-full">
                <h3 className=" text-OnPrimary headline-small sm:headline-large">
                    <Trans i18nKey={"howDoesItWork"} />
                </h3>
                <article className="flex flex-col sm:flex-row justify-center items-stretch gap-4 max-w-[90rem] lg:px-[80px] xl:px-[120px] ">
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
                className="flex flex-col justify-start lg:justify-between  gap-y-3 w-full  px-4 py-3 sm:px-[1.8rem] sm:py-[0.6rem] lg:px-[2.8rem] lg:py-[1.6rem] rounded-2xl sm:rounded-[2rem]  bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#375172] from-0%  to-[#28394F] to-100% bg-opacity-30% xl:w-[22.5rem] max-w-[22.5rem] sm:h-[17.5rem] max-h-[17.5rem]">
                <h2 style={{color}}
                    className={`title-medium lg:!headline-small flex items-center  text-left sm:text-center colorText h-1/3`}>
                    {title}
                </h2>
                <p className=" body-small lg:body-large text-InverseOnSurface sm:text-whiteGray text-left sm:text-center text-overFlow5 flex justify-center items-center  h-2/3">
                    {text}
                </p>
            </article>
        )
    }
}

