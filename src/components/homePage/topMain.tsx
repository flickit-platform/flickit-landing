import Image from "next/image";
import {cardsText} from "@/utils/db";

export default function TopMain() {

    return (
        <section className="max-sm:mt-16 mt-40 mx-auto max-sm:bg-[#EDFCFC] bg-[#1cc2c4]">
            <div
                className="max-sm:hidden bg-[url('/bg-shapes.svg')] bg-clip-padding bg-cover r w-full bg-no-repeat h-[700px] py-16  md:px-8 lg:px-16 xl:px-32 2xl:px-64 reletive">
                <Image
                    src={"/polygon-vector.svg"}
                    className="absolute z-1 left-4 mt-[-186px]"
                    width={187}
                    height={428}
                    alt={"line vector"}
                />
                <div
                    className="text-5xl font-ubuntu text-justify font-bold text-moon-silver flex justify-center text-[#edf4fc] mb-16">
                    How does it work?
                </div>
                <div className="flex flex-row justify-between items-start md:gap-3 lg:gap-8 relative">
                    {cardsText.map((item,index) =>(
                      <Cards {...item} key={index}/>
                    ))}
                </div>
            </div>

            <div
                className="sm:hidden bg-[url('/bg-mobile.svg')] w-full bg-no-repeat bg-cover  h-[140vh] py-16 min-h-[950px]">
                <div className="text-4xl text-center w-full font-bold  text-[#edf4fc] ">
                    How does it work?
                </div>
                <div className="flex flex-col justify-between p-8">
                    {cardsText.map((item,index) =>(
                        <CardsM {...item} count={index + 1} key={index}/>
                    ))}
                </div>
            </div>
        </section>
    )


    function Cards({title, text, img}:{title:string, text:string, img:string}){
        return (
            <div
                className="flex flex-col justify-between  items-center p-8 border border-solid border-gray-200 rounded-lg shadow-inner bg-teal-50  h-[450px] w-1/3">
                <Image
                    src={img}
                    width={288}
                    height={200}
                    alt={"ilustration"}
                    className="h-[240px]"
                />
                {/* <div className="text-shadow-sm font-Ubuntu text-sm font-medium leading-relaxed text-center text-gray-500">
                Step 1.
              </div> */}
                <div className=" text-xl font-medium text-center text-[#0A2342]">
                    {title}
                </div>
                <div className="text-sm font-light leading-relaxed tracking-normal text-justify text-[#0A2342]">
                    {text}
                </div>
            </div>
        )
    }

    function CardsM({ title, text, count }:{title:string, text:string, count: number}){
        return (
            <div
                style={count == 2 ? {marginLeft:"auto"} : {}}
                className="bg-[url('/polygon-mobile.svg')] bg-no-repeat bg-cover h-[210px] w-[180px] flex flex-col justify-center items-center gap-4 px-2 text-center ">
                <div className="text-sm font-medium text-[#1cc2c4] relative z-3 ">
                    {title}
                </div>
                <div className="text-xs font-light text-[#0A2342] relative z-3">
                    {text}
                </div>
            </div>
        )
    }
}

