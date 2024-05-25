import {QAs} from "@/utils/db";
import {useState} from "react";
import Image from "next/image";

export default function FaqComponents(){

    const [selectedFAQ, setSelectedFAQ] = useState(0);


    return(
        <section className="mx-auto w-full">
        <div className="max-sm:hidden flex justify-between sm:px-8 lg:px-16 py-8  w-full sm:gap-0 lg:gap-16 bg-[url('/faq-bg.svg')] bg-no-repeat bg-cover">
          <div className="flex flex-col justify-between bg-white rounded-3xl py-8 px-16 w-1/2">
            <div className="mb-8 text-4xl font-bold leading-normal tracking-normal text-center text-[#1cc2c4]">
              Ferquently asked questions
            </div>
            <div className="flex flex-col gap-2">
              {QAs.map((qa, index) => {
                return (
                  <div
                    className="flex cursor-pointer"
                    onClick={() => setSelectedFAQ(index)}
                  >
                    <Image
                      src={"/arrow-icon.svg"}
                      width={28}
                      height={14}
                      alt={"arrow"}
                      className={`mr-2 ml-[-36px]  ${
                        selectedFAQ === index ? "" : "hidden"
                      }`}
                    />
                    <div
                      className={`font-medium text-base ${
                        selectedFAQ === index
                          ? "text-[#1cc2c4]"
                          : "text-[#6c7b8e]"
                      } hover:text-[#1cc2c4]`}
                    >
                      {qa.question}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-1/2 flex ">
            <div className="flex gap-6 p-8 justify-center">
              <div className=" border-2 border-white rounded-full bg-white  text-transparent">
                .
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-2xl text-bold text-white text-left">
                  {QAs[selectedFAQ]?.question}
                </div>
                <div className="text-sm font-light text-white ">
                  {QAs[selectedFAQ]?.answer}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden mt-16 flex justify-between  px-8 py-8 w-full gap-16 bg-[url('/faq-bg.svg')] bg-no-repeat bg-cover">
          <div className="flex flex-col justify-between bg-white rounded-3xl py-4 px-8 w-full">
            <div className="flex flex-col gap-2">
              {QAs.map((qa, index) => {
                return (
                  <div
                    className={`flex cursor-pointer flex-col  pb-4 ${
                      index + 1 !== QAs.length ? "border-b-2" : ""
                    }`}
                    onClick={() => setSelectedFAQ(index)}
                  >
                    <div className="flex">
                      <Image
                        src={"/arrow-icon.svg"}
                        width={28}
                        height={14}
                        alt={"arrow"}
                        className={`w-[20px] mr-1 ml-[-24px]  ${
                          selectedFAQ === index ? "" : "hidden"
                        }`}
                      />
                      <div
                        className={`font-medium text-xs ${
                          selectedFAQ === index
                            ? "text-[#1cc2c4]"
                            : "text-[#6c7b8e]"
                        } hover:text-[#1cc2c4]`}
                      >
                        {qa.question}
                      </div>
                    </div>
                    <div
                      className={`text-[10px] font-light text-[#0A2342] mt-4  ${
                        selectedFAQ === index ? "" : "hidden"
                      }`}
                    >
                      {QAs[selectedFAQ]?.answer}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    )
}