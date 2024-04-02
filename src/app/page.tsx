"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import Typewriter from "./components/TyprWriter";
import ImageCarousel from "./components/ImageCarousel";

export default function Home() {
  const QAs: any[] = [
    {
      question: "What is Flickit platform?",
      answer:
        "The Flickit platform is a powerful tool for evaluating and assessing software products. It allows users to assess the maturity level of their software across different quality attributes and dimensions. By analyzing the scores of software in different attributes and subjects, it helps users make informed decisions and reduce the risks and costs associated with software defects and failures.",
    },
    {
      question: "What are the benefits of using Flickit platform?",
      answer:
        "Flickit platform offers several benefits, including:Improved software quality and performance Better decision-making based on objective data and metrics Increased efficiency and productivity in the software development process Reduction of risk and cost associated with software defects and failures",
    },
    {
      question: "How does Flickit platform work?",
      answer:
        "Flickit platform uses a proprietary evaluation methodology and a comprehensive set of evaluation criteria and tools to assess the maturity level of software products across various quality attributes and dimensions. Users can customize the evaluation process to meet their specific needs, and the platform provides detailed reports and analytics to help users make data-driven decisions.",
    },
    {
      question: "Who can benefit from using Flickit platform?",
      answer:
        "The Flickit platform is perfect for teams involved in software development, software vendors, IT departments, and anyone responsible for software management. Whether you want to enhance the quality of your software products, minimize the risks and costs associated with software defects, or make data-driven decisions based on objective metrics, the Flickit platform can be a valuable aid.",
    },
    {
      question: "How can I get started with Flickit platform?",
      answer:
        "Signing up for free is all it takes to get started with the Flickit platform. Our team of experts is available to guide you and answer any questions throughout the assessment process.",
    },
    {
      question:
        "What kind of reports and analytics does Flickit platform provide?",
      answer:
        "The Flickit platform offers various reports and analytics that can assist users in making data-driven decisions about their software products. These reports include: 1. Maturity level reports: The Flickit platform generates reports that display the maturity level of the software product across different quality attributes and dimensions, helping users to identify areas of strength and weakness in the product and prioritize improvement efforts. 2. Trend analysis: The Flickit platform provides trend analysis reports that indicate how the maturity level of the software product has changed over time. This can help users track progress and measure the impact of improvement initiatives. 3. Benchmarking reports: The Flickit platform provides benchmarking reports that compare the maturity level of the software product to industry standards or best practices. This can help users understand how their product stacks up against competitors or industry norms. 4. Risk analysis: The Flickit platform generates risk analysis reports that identify potential risks or issues in the software product and provide recommendations for mitigating those risks. 5. Actionable insights: The Flickit platform provides actionable insights based on the evaluation results, such as specific recommendations for improving the product's maturity level or addressing identified risks. Overall, the Flickit platform's reports and analytics offer users valuable insights into the maturity level of their software products, enabling them to make more informed decisions and take targeted actions to improve software quality and performance.",
    },
    {
      question:
        "Can you explain how Flickit platform generates maturity level reports?",
      answer:
        "The Flickit platform uses a unique evaluation methodology along with a comprehensive set of evaluation criteria and tools to assess the maturity level of software products. This evaluation process involves collecting data on the software product's performance and capabilities, which is then compared against industry standards or best practices. To generate a maturity level report, the Flickit platform first collects data on the software product's performance across various quality attributes and dimensions. This data is collected using a range of evaluation tools, such as surveys, interviews, and automated tests. The collected data is then analyzed and scored based on a set of predefined evaluation criteria. These criteria are designed to measure the software product's maturity level across various quality attributes and dimensions, such as functionality, reliability, performance, and maintainability. After the data has been scored, the Flickit platform generates a maturity level report that shows the software product's maturity level across each quality attribute and dimension. The report typically includes a visual representation of the maturity level, such as a chart or graph, along with a detailed description of the evaluation results. By using this maturity level report, users can identify areas of strengths and weaknesses in their software products and prioritize improvement efforts accordingly. This report can also be used as a benchmarking tool to compare the software product's maturity level against industry standards or best practices. Overall, the Flickit platform's maturity level reports provide valuable insights into the quality and performance of software products, thus empowering users to make data-driven decisions and take targeted actions to improve their software maturity levels.",
    },
  ];
  const images = [
    "/carousel-img-1.png",
    "/carousel-img-2.png",
    "/carousel-img-3.png",
  ];
  const [selectedFAQ, setSelectedFAQ] = useState(0);

  return (
    <main>
      <section className="mx-auto">
        <div className=" flex flex-col items-center justify-center relative top-16   w-full ">
          <img
            src={"/pol-1.svg"}
            className="absolute z-[-1] left-0 top-[15%] max-sm:hidden sm:block "
          />
          <img
            src={"/pol-2.svg"}
            className="absolute z-[-1] left-[30%] top-0 max-sm:hidden sm:block "
          />
          <img
            src={"/pol-3.svg"}
            className="absolute z-[-1] left-[50%] top-[10%] max-sm:hidden sm:block "
          />
          <img
            src={"/pol-4.svg"}
            className="absolute z-[-1] left-[75%] top-0 max-sm:hidden sm:block "
          />
          <img
            src={"/pol-5.svg"}
            className="absolute z-[-1] left-[80%] top-[35%] max-sm:hidden sm:hidden xl:block"
          />
          <img
            src={"/pol-6.svg"}
            className="absolute z-[-1] left-[90%]  top-[80%] max-sm:hidden sm:block "
          />
          <img
            src={"/pol-7.svg"}
            className="absolute z-[-1] left-[75%] top-[90%] max-sm:hidden sm:block "
          />
          <img
            src={"/pol-8.svg"}
            className="absolute z-[-1] left-[5%] top-[60%] max-sm:hidden sm:block "
          />

          <div className="flex flex-col items-center justify-center max-sm:w-full max-sm:px-4 max-sm:gap-8 sm:px-16 md:px-24 lg:px-32 xl:px-80  max-sm:my-2 mt-40 mb-16 gap-16">
            <div className="text-[#6C7B8E] text-center max-sm:text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-normal relative w-full max-sm:px-8">
              The Ultimate Tool for Assessing Your Software
            </div>
            <div className="text-center max-sm:text-3xl sm:text-4xl md:text-4xl lg:text-6xl leading-5 font-bold relative self-stretch txt-gradient ">
              Say Goodbye to Software Quality Blind Spots with Expert Algorithms
            </div>
            <div className="flex flex-col gap-6 items-center justify-center self-stretch shrink-0 relative">
              <div className="text-center max-sm:text-sm text-xl  font-normal relative self-stretch">
                Flickit is a software assessment platform that enables software
                owners and developers to evaluate their software in different
                subjects and factors of their choice. Users can create their own
                software evaluation kit and customize it to their specific
                needs.
              </div>
            </div>
            <div className="mt-4 flex gap- max-sm:gap-2 gap-4">
              <button className="max-sm:text-sm rounded-full border border-solid border-[#1cc2c4] bg-[#1CC2C4] hover:bg-[#1cc2c4bf]  px-6 py-2.5 text-[#edf4fc]">
                Getting started
              </button>
              <button className="max-sm:text-sm rounded-full  px-6 py-2.5 text-[#1cc2c4] hover:border hover:border-[#1cc2c4]">
                Read more...
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-sm:mt-16 mt-40 mx-auto max-sm:bg-[#EDFCFC] bg-[#1cc2c4]">
        <div className="max-sm:hidden bg-[url('/bg-shapes.svg')] bg-clip-padding bg-cover r w-full bg-no-repeat h-[700px] py-16  md:px-8 lg:px-16 xl:px-32 2xl:px-64 reletive">
          <Image
            src={"/polygon-vector.svg"}
            className="absolute z-1 left-4 mt-[-186px]"
            width={187}
            height={428}
            alt={"line vector"}
          />
          <div className="text-5xl font-ubuntu text-justify font-bold text-moon-silver flex justify-center text-[#edf4fc] mb-16">
            How does it work?
          </div>
          <div className="flex flex-row justify-between items-start md:gap-3 lg:gap-8 relative">
            <div className="flex flex-col justify-between  items-center p-8 border border-solid border-gray-200 rounded-lg shadow-inner bg-teal-50  h-[450px] w-1/3">
              <Image
                src={"/Shape-ilustration-1.png"}
                width={288}
                height={200}
                alt={"ilustration"}

              />
              {/* <div className="text-shadow-sm font-Ubuntu text-sm font-medium leading-relaxed text-center text-gray-500">
                Step 1.
              </div> */}
              <div className=" text-xl font-medium text-center text-[#0A2342] txt-shadow ">
                1. Address the right assessment kit
              </div>
              <div className="text-sm font-light leading-relaxed tracking-normal text-justify text-[#0A2342]">
                Pick the assessment kit that aligns perfectly with your concerns
                and covers your decision factors.
              </div>
            </div>
            <div className="flex flex-col justify-between  items-center p-8 border border-solid border-gray-200 rounded-lg shadow-inner bg-teal-50 h-[450px] w-1/3">
              <Image
                src={"/Shape-ilustration-2.png"}
                width={288}
                height={200}
                alt={"ilustration"}

              />
              {/* <div className="text-shadow-sm font-Ubuntu text-sm font-medium leading-relaxed text-center text-gray-500">
                Step 2.
              </div> */}
              <div className="text-shadow font-Ubuntu text-xl font-medium leading-relaxed text-center text-[#0A2342] txt-shadow ">
                2. Answer the questions
              </div>
              <div className="text-sm font-light leading-relaxed tracking-normal text-justify text-[#0A2342]">
                Answer the questions in the chosen assessment kit and provide
                relevant details.
              </div>
            </div>

            <div className=" flex flex-col justify-between  items-center sm:p-2 md:p-4 lg:p-4 xl:p-8 border border-solid border-gray-200 rounded-lg shadow-inner bg-teal-50 h-[450px] w-1/3">
              <Image
                src={"/Shape-ilustration-3.png"}
                width={288}
                height={200}
                alt={"ilustration"}

              />
              {/* <div className="text-shadow-sm font-Ubuntu text-sm font-medium leading-relaxed text-center text-gray-500">
                Step 3.
              </div> */}
              <div className="text-shadow font-Ubuntu text-xl font-medium leading-relaxed text-center text-[#0A2342] txt-shadow mt-6 ">
                3. Explore the assessment insights
              </div>
              <div className="text-sm font-light leading-relaxed tracking-normal text-justify text-[#0A2342]">
                Explore the insights and recommendations generated by the
                assessment process.
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden bg-[url('/bg-mobile.svg')] w-full bg-no-repeat bg-cover  h-[140vh] py-16">
          <div className="text-4xl text-center w-full font-bold  text-[#edf4fc] ">
            How does it works?
          </div>
          <div className="flex flex-col justify-between p-16">
            <div className="bg-[url('/polygon-mobile.svg')] bg-no-repeat bg-cover h-[210px] w-[180px] flex flex-col justify-center items-center gap-4 px-2 text-center">
              <div className="font-medium text-[10px] text-[#9DA7B3]">
                step 1.
              </div>
              <div className="text-sm font-medium text-[#1cc2c4] ">
                Address the right assessment kit
              </div>
              <div className="text-xs font-light text-[#EDF4FC]">
                Pick the assessment kit that aligns perfectly with your concerns
                and covers your decision factors.
              </div>
            </div>
            <div className="ml-auto bg-[url('/polygon-mobile.svg')] bg-no-repeat bg-cover h-[210px] w-[180px] flex flex-col justify-center items-center gap-4 px-2 text-center">
              <div className="font-medium text-[10px] text-[#9DA7B3]">
                step 2.
              </div>
              <div className="text-sm font-medium text-[#1cc2c4] ">
                Answer the questions
              </div>
              <div className="text-xs font-light text-[#EDF4FC]">
                Answer the questions in the chosen assessment kit and provide
                relevant details
              </div>
            </div>
            <div className="bg-[url('/polygon-mobile.svg')] bg-no-repeat bg-cover h-[210px] w-[180px] flex flex-col justify-center items-center gap-4 px-2 text-center">
              <div className="font-medium text-[10px] text-[#9DA7B3]">
                step 3.
              </div>
              <div className="text-sm font-medium text-[#1cc2c4] ">
                Explore the assessment insights
              </div>
              <div className="text-xs font-light text-[#EDF4FC]">
                Explore the insights and recommendations generated by the
                assessment process.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto mb-8">
        <div className=" flex flex-col items-center justify-center relative top-16 bg-[url('/midle-shape-bg.svg')] w-full bg-no-repeat max-sm:py-8 max-sm:px-4  md:py-16 md:px-8 xl:p-32 ">
          <div className="backdrop-blur-md w-full h-full bg-white/70 rounded-[32px] flex  flex-col p-16  max-sm:py-4 max-sm:px-4 md:px-8 xl:px-32">
            <div className="text-5xl font-bold leading-normal tracking-normal text-center max-sm:hidden text-[#1cc2c4] mb-16">
              Flickit is specially helpful if...
            </div>
            <div className=" flex justify-between flex-col h-full  gap-8 ">
              <div className="flex flex-row-reverse justify-between items-center">
                <Image
                  src={"/situation-1.svg"}
                  width={370}
                  height={370}
                  alt={"situation"}
                  className="sm:w-2/5 xl:w-3/5  max-sm:w-[160px] max-sm:mb-auto"
                />
                <div className="mx-16 w-1/2 max-sm:w-full max-sm:mx-4">
                  <div className="max-sm:text-sm text-2xl font-bold leading-normal tracking-normal text-left text-[#0A2342] mb-6 flex">
                    <Image
                      src={"/Polygon-1.svg"}
                      width={40}
                      height={40}
                      alt={"polygon"}
                      className="mr-7 ml-[-64px] max-sm:w-[18px] max-sm:mr-2 max-sm:ml-[-24px]"
                    />
                    If you are about to buy a software
                  </div>
                  <div className="max-sm:mt-4 max-sm:text-xs max-sm:font-light text-base font-normal leading-relaxed tracking-normal text-left text-[#0A2342]">
                    If you're considering purchasing new software and are
                    uncertain about its technical specifications, seeking a
                    third-party opinion can be beneficial. A comprehensive
                    assessment kit will offer insights into the software's
                    technical aspects, empowering you to make a well-informed
                    decision.
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between items-center max-sm:gap-4">
                <Image
                  className="m-auto sm:w-1/3 xl:w-3/5   max-sm:w-[160px]"
                  src={"/situation-2.svg"}
                  width={370}
                  height={370}
                  alt={"situation"}
                />
                <div className="mx-16 w-1/2 max-sm:w-full max-sm:mx-4 max-sm:mt-4">
                  <div className="max-sm:w-2/3 max-sm:text-sm max-sm:m-auto text-2xl font-bold leading-normal tracking-normal text-center text-[#0A2342] mb-6 flex max-sm:flex-row-reverse flex-col-reverse items-center">
                    If you want evaluate your contractor’s work
                    <Image
                      src={"/Polygon-2.svg"}
                      width={40}
                      height={40}
                      alt={"polygon"}
                      className="mb-4 max-sm:w-[18px] max-sm:mr-2 max-sm:mb-0 "
                    />
                  </div>
                  <div className="max-sm:mt-4 max-sm:text-xs max-sm:font-light text-base font-normal leading-relaxed tracking-normal text-center text-[#0A2342] ">
                    If you are about to buy new software and are unsure about
                    its technical aspects, you can use a third party opinion. A
                    proper assessment kit will provide insights into the
                    software's technical details, enabling you to make an
                    informed decision.
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center">
                <Image
                  src={"/situation-3.svg"}
                  width={370}
                  height={370}
                  alt={"situation"}
                  className="sm:w-2/5 xl:w-3/5   max-sm:w-[160px] max-sm:mb-auto"
                />
                <div className="mx-16 w-1/2 max-sm:w-full max-sm:mx-4">
                  <div className="max-sm:flex-row-reverse max-sm:text-sm text-2xl font-bold leading-normal tracking-normal text-left text-[#0A2342] mb-6 flex justify-between">
                    If you are developing a software
                    <Image
                      src={"/Polygon-3.svg"}
                      width={40}
                      height={40}
                      alt={"polygon"}
                      className=" max-sm:w-[18px] max-sm:mr-2"
                    />
                  </div>
                  <div className="max-sm:mt-4 max-sm:text-xs max-sm:font-light text-base font-normal leading-relaxed tracking-normal text-left text-[#0A2342] ">
                    If you are developing a software and you wish to
                    professionally assess the quality of your work in technical
                    terms, you can seek assistance from expert evaluators in
                    this field to inform you about the status of various
                    technical aspects of the software.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-sm:mt-32 sm:mt-32 lg:mt-52 mb-16 mx-auto">
        <div className="w-full flex justify-center items-center mb-16">
          <button className="hover:scale-105 hover:shadow-2xl max-sm:text-xl max-sm:w-full max-sm:mx-8 max-sm:py-2 w-2/3 bt-gradient btn-2 font-medium md:text-3xl lg:text-6xl text-[#edf4fc] text-center rounded-full py-4">
            Try it for free
          </button>
        </div>
        <div className="max-sm:hidden flex items-center w-full justify-between sm:px-8 lg:px-16 lg:gap-4 xl:gap-8">
          <div className=" hover:bg-[url('/Polygon-bg-hover.svg')] bg-[url('/Polygon-bg.svg')] bg-no-repeat bg-contain h-[35vw] w-[33vw]  flex flex-col justify-center items-center sm:pt-8 pb-10 gap-2 sm:px-4 xl:px-8 ">
            <Image
              src={"/handshake.svg"}
              width={140}
              height={100}
              alt={"handshake"}
              className="sm:mb-0 xl:mb-6  w-2/5"
            />
            <div className="font-medium sm:text-base xl:text-2xl text-[#0A2342] text-center">
              Trusted by indusrty leaders
            </div>
            <div className="font-light sm:text-xs xl:text-base text-[#0A2342] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
          </div>
          <div className=" hover:bg-[url('/Polygon-bg-hover.svg')] bg-[url('/Polygon-bg.svg')] bg-no-repeat bg-contain h-[35vw] w-[33vw]  flex flex-col justify-center items-center sm:pt-8 pb-10 gap-2 sm:px-4 xl:px-8 ">
            <Image
              src={"/dashboard.svg"}
              width={140}
              height={100}
              alt={"dashboard"}
              className="sm:mb-0 lg:mb-6  w-2/5"
            />
            <div className="font-medium sm:text-base xl:text-2xl text-[#0A2342] text-center">
              Track your progress
            </div>
            <div className="font-light sm:text-xs xl:text-base text-[#0A2342] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
          </div>
          <div className=" hover:bg-[url('/Polygon-bg-hover.svg')] bg-[url('/Polygon-bg.svg')] bg-no-repeat bg-contain h-[35vw] w-[33vw] flex flex-col justify-center items-center sm:pt-8 pb-10 gap-2 sm:px-4 xl:px-8 ">
            <Image
              src={"/chart-ilustration.svg"}
              width={120}
              height={120}
              alt={"chart-ilustration"}
              className="sm:mb-0 xl:mb-6  w-2/5"
            />
            <div className="font-medium sm:text-base xl:text-2xl text-[#0A2342] text-center">
              Explore assessment insights
            </div>
            <div className="font-light sm:text-xs xl:text-base text-[#0A2342] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
          </div>
        </div>

        <div className="sm:hidden flex flex-col mt-32">
          <div className="flex justify-around items-center w-full">
            <div className="text-base font-bold text-[#EDFCFC] bg-[url('/polygon-o-mobile.svg')] bg-no-repeat bg-cover h-[172px] w-[150px] flex flex-col justify-center items-center gap-4 px-2 text-center">
              Track your progress
            </div>
            <div className="text-base font-bold text-[#EDFCFC] bg-[url('/polygon-g-mobile.svg')] bg-no-repeat bg-cover h-[172px] w-[150px] flex flex-col justify-center items-center gap-4 px-2 text-center">
              Smart Advice system
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <Image
              src={"/polygon-n-mobile-l.svg"}
              width={75}
              height={172}
              alt={"left"}
            />
            <div className="text-base font-bold text-[#EDFCFC] bg-[url('/polygon-r-mobile.svg')] bg-no-repeat bg-cover h-[172px] w-[150px] flex flex-col justify-center items-center gap-4 px-2 text-center">
              Trusted by industry leaders
            </div>
            <Image
              src={"/polygon-n-mobile-r.svg"}
              width={75}
              height={172}
              alt={"right"}
            />
          </div>
        </div>
      </section>
      <section>
        <ImageCarousel images={images} />
      </section>
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

      <footer className="max-sm:mt-8 mt-8 mx-4">
        <div className="mx-auto w-full p-4">
          <div className="flex w-full items-center justify-center flex-col">
            <Image
              src={"/line-vector.svg"}
              className="mb-2 max-sm:w-[340px]"
              width={612}
              height={4}
              alt={"line vector"}
            />
            <Image
              src={"/logo.svg"}
              className=" max-sm:w-[135px]"
              width={200}
              height={46}
              alt={"logo"}
            />
            <Image
              className="mt-2 max-sm:w-[150px]"
              src={"/powered-img.svg"}
              width={221}
              height={26}
              alt={"powered"}
            />
          </div>
        </div>
      </footer>
    </main>
  );
}
