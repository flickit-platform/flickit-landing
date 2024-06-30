import Image from "next/image";
import {cardsText} from "@/utils/db";

export default function TopMain() {

    return (
        <main className="max-sm:mt-16 mt-40 mx-auto max-sm:bg-[#EDFCFC] ">
            <section
                className="max-sm:hidden h-[700px] bg-gradient-to-b from-[#12335A] to-[#182F4B] py-16 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                <h3
                    className="text-4xl md:text-5xl font-ubuntu text-justify font-bold text-moon-silver flex justify-center text-[#edf4fc] mb-16">
                    How does it work?
                </h3>
                <div className="flex flex-row justify-between items-start md:gap-3 lg:gap-8 relative">
                    {cardsText.map((item,index) =>(
                      <Cards {...item} key={index}/>
                    ))}
                </div>
            </section>

            <section
                className="sm:hidden bg-[url('/bg-mobile.svg')] w-full bg-no-repeat bg-cover  h-[140vh] py-16 min-h-[950px]">
                <h3 className="text-4xl text-center w-full font-bold  text-[#edf4fc] ">
                    How does it work?
                </h3>
                <div className="flex flex-col justify-between p-8">
                    {cardsText.map((item,index) =>(
                        <CardsM {...item} count={index + 1} key={index}/>
                    ))}
                </div>
            </section>
        </main>
    )


    function Cards({title, text, img}:{title:string, text:string, img:string}){
        return (
            <article
                className="flex flex-col justify-center  items-center p-8 border border-solid border-gray-200 rounded-lg shadow-inner bg-teal-50  h-[450px] w-1/3">
               <div className="w-full h-1/3 mb-4">
                   <img
                       src={img}
                       alt={"ilustration"}
                       className="h-full w-full object-contain"
                   />
               </div>
                {/* <div className="text-shadow-sm font-Ubuntu text-sm font-medium leading-relaxed text-center text-gray-500">
                Step 1.
              </div> */}
                <h2 className=" text-xl font-medium text-center text-blueDeep h-1/3 flex items-start">
                    {title}
                </h2>
                <p className="text-sm font-light leading-relaxed tracking-normal text-justify  text-blueDeep h-1/3">
                    {text}
                </p>
            </article>
        )
    }

    function CardsM({ title, text, count }:{title:string, text:string, count: number}){
        return (
            <article
                style={count == 2 ? {marginLeft:"auto"} : {}}
                className="bg-[url('/polygon-mobile.svg')] bg-no-repeat bg-cover h-[210px] w-[180px] flex flex-col justify-center items-center gap-4 px-2 text-center ">
                <h2 className="text-sm font-medium text-[#1cc2c4] relative z-3 ">
                    {title}
                </h2>
                <p className="text-xs font-light text-blueDeep relative z-3">
                    {text}
                </p>
            </article>
        )
    }
}

