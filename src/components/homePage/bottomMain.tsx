import {bottomMainCard} from "@/utils/db";

export default function BottomMain(){
    return(
            <section className="h-[41rem] w-full sm:px-16 sm:py-32 overflow-auto">
            <div className="h-full w-full flex justify-between items-center overflow-auto">
                {bottomMainCard.map(items => {
                    return (
                        <Slide {...items}/>
                    )
                })}
            </div>
        </section>
    )
}

const Slide = (items) => {
 const {color,text,title} = items
    const func = () =>{

    }
    return (
        <div onClick={func} style={{boxShadow: `inset 1px 1px 14px rgba(255, 255, 255, 12%)`}} className={`flex min-w-[9.37rem] gap-4 sm:gap-[79px] flex-col items-center justify-start w-[9.37rem] h-[9.37rem] sm:w-[25rem] sm:h-[25rem] rounded-[0.75rem] sm:rounded-[2rem] px-2.5 sm:px-8 py-8 sm:py-[5.62rem] bg-gradient-to-b from-[#102D51] from-0% to-100% to-[#0A2342] `}>
        <h3 style={{color}} className={"w-full font-medium text-[0.875rem] lg:text-[1.726rem] text-center w-[15.75rem] h-[2.5rem] sm:h-[5.12rem]"}>{title}</h3>
        <h3 className="w-full text-[0.375rem] sm:text-[1rem] text-[#EDF4FC] w-[19rem] text-center">{text}</h3>
        </div>
    )
}