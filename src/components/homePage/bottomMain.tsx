import {bottomMainCard} from "@/utils/db";
import {useEffect, useRef, useState} from "react";

export default function BottomMain(){
    const sliderRef = useRef<any>(null)

    const [mouseDown, setMouseDown] = useState(false)
    const [scrollLeft, setScrollLeft] = useState(false)
    const [startX, setStartX] = useState<any>()


    const startDragging = (e) => {
        setMouseDown(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft)
    }

    const stopDragging = (e) => {
        setMouseDown(false);
    }
    const move = (e) => {
        e.preventDefault();
        if (!mouseDown) {
            return;
        }
        const x = e.pageX - sliderRef.current.offsetLeft;
        const scroll = x - startX;
        sliderRef.current.scrollLeft = scrollLeft - scroll;
    }


    const movement = (e: any,index:number) =>{
        let slider = sliderRef.current
        if(slider){
            let itemWidth = slider.getElementsByTagName("DIV")[0].clientWidth + 24
            console.log()
            if(index == 0){
                slider.scrollTo({
                    left: slider.scrollLeft - itemWidth ,
                    behavior: "smooth",
                })

            }else if(index == 2){
                slider.scrollTo({
                    left: slider.scrollLeft + itemWidth  ,
                    behavior: "smooth",
                })
            }
        }
    }

    useEffect(()=>{
        let slider = sliderRef.current
        let itemWidth = slider.getElementsByTagName("DIV")[0].clientWidth + 24
        if(slider){
            slider.scrollTo({
                left: slider.scrollLeft + (itemWidth / 2)  ,
                behavior: "smooth",
            })
        }
    },[])

    return(
            <section className="h-[13.3rem] sm:h-[25rem] lg:h-[41rem] flex justify-center mx-auto w-full lg:px-16 lg:py-32 overflow-auto  max-w-[1440px]">
            <div
                onMouseLeave={(e) => stopDragging(e)}
                onMouseUp={stopDragging}
                onMouseDown={startDragging}
                onMouseMove={move}
                ref={sliderRef}
                className="h-full w-full flex gap-6 scrollbar-hide overflow-x-auto overflow-y-hidden items-center px-3 sm:px-0 mx-auto">
                {bottomMainCard.map((items,index) => {
                    return (
                        <Slide movement={movement} {...items} key={index} index={index}/>
                    )
                })}
            </div>
        </section>
    )
}

const Slide = (items: any) => {
 const {color,text,title,movement,index} = items

    return (
        <div onClick={(e)=>movement(e,index)} style={{boxShadow: `inset 1px 1px 14px rgba(255, 255, 255, 12%)`}} className={`flex min-w-[9.37rem] gap-4 lg:gap-[79px] flex-col items-center justify-start w-[9.37rem] max-w-[9.37rem] h-[9.37rem] sm:w-[17rem] sm:max-w-[17rem] sm:h-[17rem] lg:w-[25rem] lg:h-[25rem] lg:min-w-[25rem] lg:min-h-[25rem] rounded-[0.75rem] sm:rounded-[2rem] px-2.5 sm:px-8 py-8 lg:py-[5.62rem] bg-gradient-to-b from-[#102D51] from-0% to-100% to-surfaceMidNightBlack `}>
        <h3 style={{color}} className={"label-small sm:text-[1.2rem] sm:leading-5 lg:!headline-small text-center lg:w-[15.75rem] h-[2.5rem] sm:h-[5.12rem]"}>{title}</h3>
        <h3 className="text-[0.375rem] sm:text-[0.6rem] lg:text-[1rem] text-InverseOnSurface lg:w-[19rem] text-center">{text}</h3>
        </div>
    )
}