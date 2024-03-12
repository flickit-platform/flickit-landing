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
  const [tab, setActiveTab] = useState(0);
  const [selectedFAQ, setSelectedFAQ] = useState(0);
  const [isHovered, setIsHovered] = useState(0);

  return (
    <main>
      {/* <section className='flex items-center justify-center min-h-[calc(100vh-56px)] animate-fade-in opacity-0'>
        <div className='flex absolute w-full h-full justify-between z-0 overflow-hidden'>
          <div className='animate-t-left'>
            <Image src='/rise.svg' width='219' height='146' alt='Flickit' className='relative left-64 top-24' />
            <Image src='/assessment.svg' width='263' height='175' alt='Flickit' className='relative left-20 top-44' />
            <Image src='/chart-grow.svg' width='423' height='281' alt='Flickit' className='relative left-48 top-60' />
          </div>
          <div dir='rtl' className='animate-t-right'>
            <Image src='/check.svg' width='251' height='168' alt='Flickit' className='relative right-72 top-16' />
            <Image src='/question.svg' width='279' height='186' alt='Flickit' className='relative right-20 top-32' />
            <Image src='/chart.svg' width='509' height='339' alt='Flickit' className='relative right-44 top-36' />
          </div>
        </div>
        <article className='text-center relative z-10'>
          <h1 className='text-6xl font-black'>
            <div className='text-5xl font-bold mb-2'>Before</div>
            <div className='text-primary mb-6 min-h-[80px]'><Typewriter text='PURCHASING SOFTWARE' /></div>
            <div className='text-5xl font-bold mb-2'>Conduct a</div>
            <div className='text-secondary min-h-[80px]'><Typewriter text='SPECIALIZED EVALUATION' delay={1600}/></div>
          </h1>
          <p className='mt-16 max-w-xl mx-auto text-gray-500'>
            To clarify your decision-making space in the area of Information Technology, evaluate the quality and characteristics of IT assets.
            Flickit provides you with an assessment kit and a professional assessor that fit your issues .
          </p>
          <div className='mt-8 flex items-center justify-center'>
            <Image src='/arrow-to-right.svg' width='137' height='107' alt='Flickit' className='mt-10' />
            <a className='bg-red-600 text-white px-14 py-2 rounded-md uppercase font-bold tracking-widest inline-block' href='https://flickit.org' target='_blank'>
              Lets assess it
            </a>
            <Image src='/arrow-to-left.svg' width='137' height='107' alt='Flickit' className='mb-10' />

          </div>
        </article>
      </section> */}

      {/* <section className='mx-auto max-w-screen-2xl'>
        <div className='bg-primary-darker rounded-lg mx-12 p-12 text-white'>
          <article className='text-center text-white mt-8'>
            <h2 className='text-4xl font-bold'>Conduct a specialized evaluation with <strong className='block mt-4 font-bold text-5xl tracking-wider'>ASSESSMENT KITS</strong></h2>
            <p className='mt-7 max-w-3xl mx-auto text-gray-400'>Assessment kits are our way of creating customize assessments for everything. we have a set of free Assessment kits created by a team of experts for almost every case but you can always create your own Assessment kit to conduct an evaluation.</p>
            <a className='text-gray-500 mx-auto mt-9 underline inline-block'>Read more about Assessment kits</a>
          </article>
          <div className='mt-20 max-w-7xl mx-auto'>
            <h4 className='text-4xl font-bold text-gray-400'>Assessment kits</h4>
            <div className='flex'>
              <div>
                {assessmentKits.map((kit, index) =>
                  <div className={`flex justify-between mt-12 overflow-hidden transition-all ${index === tab ? 'h-[240px]' : 'h-14'}`} key={kit.title}>
                    <div className={`w-2 rounded-md transition-colors duration-300 ${index === tab ? 'bg-secondary' : 'bg-gray-400'} mr-2`}></div>
                    <div className='flex flex-col'>
                      <button className='flex flex-1 max-w-xl justify-start text-left pl-2' onClick={() => { setActiveTab(index) }}>
                        <article>
                          <h4 className='font-bold text-2xl text-gray-200'>
                            {kit.title}
                          </h4>
                          <p className='text-sm text-gray-300 mt-1'>
                            {kit.desc}
                          </p>
                        </article>
                      </button>
                      <div className='flex flex-wrap mt-4'>
                        {Object.keys(kit.extras).map((key:any) => <div className='rounded-lg bg-secondary text-white mx-1 px-2 text-sm py-[2px]' key={key}>{kit.extras[key]} | {key}</div>)}
                      </div>
                      <a className={`bg-primary text-white ml-auto mt-6 px-9 py-1 text-md rounded-lg font-bold tracking-wider inline-block`} target='_blank' href={kit.href}>TRY THIS KIT</a>
                    </div>
                  </div>
                )}
                <div className='mt-40 text-center flex flex-col items-center'>
                  <h5>Didn't find your issue?</h5>
                  <a className='bg-red-600 text-white px-14 py-2 rounded-md uppercase font-bold tracking-widest inline-block mt-3' href='https://flickit.org/profiles' target='_blank'>VIEW ALL ASSESSMENT KITS</a>
                </div>
              </div>
              <div className='w-8'></div>
              <div className='bg-white p-10 rounded-lg flex-1 text-black max-w-xl'>
                <h4 className='font-black text-xl text-gray-700'>Sample system overall report</h4>
                <h5 className='mt-6 text-lg font-semibold text-gray-500'>Attributes</h5>
                <div className='mt-4'>
                  <h6 className='text-base font-bold text-gray-700'>Efficiency</h6>
                  <div className='bg-gray-200 rounded-lg h-3 w-full'>
                    <div className='bg-cyan-500 h-full w-4/5 rounded-lg'></div>
                  </div>
                </div>
                <div className='mt-4'>
                  <h6 className='text-base font-bold text-gray-700'>Maintainability</h6>
                  <div className='bg-gray-200 rounded-lg h-3 w-full'>
                    <div className='bg-orange-500 h-full w-3/5 rounded-lg'></div>
                  </div>
                </div>
                <div className='mt-4'>
                  <h6 className='text-base font-bold text-gray-700'>Usability</h6>
                  <div className='bg-gray-200 rounded-lg h-3 w-full'>
                    <div className='bg-lime-500 h-full w-full rounded-lg'></div>
                  </div>
                </div>
                <div className='mt-4'>
                  <h6 className='text-base font-bold text-gray-700'>Reliability</h6>
                  <div className='bg-gray-200 rounded-lg h-3 w-full'>
                    <div className='bg-cyan-500 h-full w-4/5 rounded-lg'></div>
                  </div>
                </div>
                <div className='mt-4'>
                  <h6 className='text-base font-bold text-gray-700'>Scalability</h6>
                  <div className='bg-gray-200 rounded-lg h-3 w-full'>
                    <div className='bg-cyan-500 h-full w-4/5 rounded-lg'></div>
                  </div>
                </div>
                <div className='mt-4'>
                  <h6 className='text-base font-bold text-gray-700'>Agile Workflow</h6>
                  <div className='bg-gray-200 rounded-lg h-3 w-full'>
                    <div className='bg-orange-500 h-full w-3/5 rounded-lg'></div>
                  </div>
                </div>
                <div className='mt-4'>
                  <h6 className='text-base font-bold text-gray-700'>Team Learning</h6>
                  <div className='bg-gray-200 rounded-lg h-3 w-full'>
                    <div className='bg-cyan-500 h-full w-4/5 rounded-lg'></div>
                  </div>
                </div>
                <div className='mt-16 flex justify-center'>

                  <Image src='/gauge.svg' width='363' height='235' alt='Flickit' className='max-w-[280px]' />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section> */}

      {/* <section className='mt-36 mx-auto max-w-screen-2xl'>
        <div className='mx-12'>
          <div className='mt-8'>
            <h2 className='text-4xl font-bold'>Flickit Features</h2>
            <p className='mt-2 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='flex justify-between flex-wrap mt-14'>
            {features.map((feature) => <div className='flex w-[calc(50%-34px)] mb-10' key={feature.title}>
              <div className='min-w-[116px] max-w-[116px] mr-3'><Image src={feature.img} alt={feature.title} width={233} height={155} /></div>
              <article className=''>
                <h6 className='text-base font-bold text-gray-800'>{feature.title}</h6>
                <p className='text-sm text-gray-600'>
                  {feature.desc}
                </p>
              </article>
            </div>)}

          </div>
        </div>
      </section> */}

      {/* <section className='mt-36 bg-primary-dark'>
        <div className=' p-10 mx-auto max-w-screen-2xl'>
          <div className='mt-8 text-center text-white'>
            <h2 className='text-4xl font-bold'>What do people say about us?</h2>
            <p className='mt-2 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='flex flex-wrap mt-28 justify-between'>
            {peopleQuotes.map((quote) => <div className='bg-white text-black rounded-3xl rounded-tl-none p-8 w-[calc(50%-24px)]' key={quote.name}>
              <div className='flex'>
                <Image src={quote.img} width={200} height={180} alt={quote.name} className='rounded-full w-14 h-14' />
                <div className='ml-4'>
                  <h5 className='text-lg font-bold'>{quote.name}</h5>
                  <p className='text-gray-500 text-sm'>{quote.name} is {quote.relation.relation} in <a href={quote.relation.href} target='_blank' className='underline'>{quote.relation.title}</a></p>
                </div>
              </div>
              <q className='mt-6 block'>
                {quote.quote}
              </q>
            </div>)}


          </div>
        </div>
      </section> */}

      {/* <section className='mt-24 mx-auto max-w-screen-2xl'>
        <div className='p-10'>
          <div className='mt-8 text-center'>
            <h2 className='text-4xl font-bold'>Frequently asked questions</h2>
            <p className='mt-2 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='flex flex-wrap mt-28 justify-between items-start'>
            {QAs.map((QA, index) => <Expandable {...QA} key={index} />)}

          </div>
        </div>
      </section> */}

      <section className="mx-auto">
        <div className=" bg-clip-padding bg-cover flex flex-col items-center justify-center relative top-16 sm:bg-[url('/bg-polygon.svg')]  w-full bg-no-repeat">
          <div className="flex flex-col items-center justify-center max-sm:w-full max-sm:px-4 max-sm:gap-8 w-1/2 max-sm:my-2 mt-40 mb-16 gap-16">
            <div className="text-[#c7cfcf] text-center max-sm:text-xl text-[25px] font-normal relative w-full max-sm:px-8">
              The ultimate tool for Assessing your software
            </div>
            <div className="text-center max-sm:text-4xl md:text-7xl leading-5 font-bold relative self-stretch txt-gradient ">
              Eliminate quality blind spots by relying on experts&#039;
              algorithms.
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
            <div className="mt-4 flex gap- max-sm:gap-2">
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
        <div className="max-sm:hidden bg-[url('/bg-shapes.svg')] bg-clip-padding bg-cover r w-full bg-no-repeat h-[700px] py-16 md:px-16 lg:px-32 2xl:px-64 reletive">
          <Image
            src={"/polygon-vector.svg"}
            className="absolute z-1 left-4 mt-[-186px]"
            width={187}
            height={428}
            alt={"line vector"}
          />
          <div className="text-5xl font-ubuntu text-justify font-bold text-moon-silver flex justify-center text-[#edf4fc] mb-16">
            How does it works?
          </div>
          <div className="flex flex-row justify-between items-start md:gap-3 lg:gap-8 relative">
            <div className="flex flex-col justify-start items-center gap-6 p-4 border border-solid border-gray-200 rounded-lg shadow-inner bg-teal-50 w-[320px]">
              <Image
                src={"/Shape-ilustration-1.png"}
                width={288}
                height={200}
                alt={"ilustration"}
              />
              <div className="text-shadow-sm font-Ubuntu text-sm font-medium leading-relaxed text-center text-gray-500">
                Step 1.
              </div>
              <div className="text-shadow font-Ubuntu text-xl font-medium leading-relaxed text-center text-[#0A2342]">
                Address the right toolkit
              </div>
              <div className="text-sm font-light leading-relaxed tracking-normal text-justify text-[#0A2342]">
                This indicates the initial step of selecting the appropriate
                toolkit tailored to the user's needs.
              </div>
            </div>
            <div className="flex flex-col justify-start items-center gap-6 p-4 border border-solid border-gray-200 rounded-lg shadow-inner bg-teal-50 w-[320px]">
              <Image
                src={"/Shape-ilustration-2.png"}
                width={288}
                height={200}
                alt={"ilustration"}
              />
              <div className="text-shadow-sm font-Ubuntu text-sm font-medium leading-relaxed text-center text-gray-500">
                Step 2.
              </div>
              <div className="text-shadow font-Ubuntu text-xl font-medium leading-relaxed text-center text-[#0A2342]">
                Answer the questions
              </div>
              <div className="text-sm font-light leading-relaxed tracking-normal text-justify text-[#0A2342]">
                This highlights the step where users respond to the assessment
                questions and provide relevant information.
              </div>
            </div>

            <div className=" flex flex-col justify-start items-center gap-6 p-4 border border-solid border-gray-200 rounded-lg shadow-inner bg-teal-50 w-[320px]">
              <Image
                src={"/Shape-ilustration-3.png"}
                width={288}
                height={200}
                alt={"ilustration"}
              />
              <div className="text-shadow-sm font-Ubuntu text-sm font-medium leading-relaxed text-center text-gray-500">
                Step 3.
              </div>
              <div className="text-shadow font-Ubuntu text-xl font-medium leading-relaxed text-center text-[#0A2342]">
                Access Insights
              </div>
              <div className="text-sm font-light leading-relaxed tracking-normal text-justify text-[#0A2342]">
                This signifies the final step where users can retrieve and
                explore the insights and recommendations generated by the
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
                Address the right toolkit
              </div>
              <div className="text-xs font-light text-[#EDF4FC]">
                This indicates the initial step of selecting the appropriate
                toolkit tailored to the user's needs.
              </div>
            </div>
            <div className="ml-auto bg-[url('/polygon-mobile.svg')] bg-no-repeat bg-cover h-[210px] w-[180px] flex flex-col justify-center items-center gap-4 px-2 text-center">
              <div className="font-medium text-[10px] text-[#9DA7B3]">
                step 1.
              </div>
              <div className="text-sm font-medium text-[#1cc2c4] ">
                Address the right toolkit
              </div>
              <div className="text-xs font-light text-[#EDF4FC]">
                This indicates the initial step of selecting the appropriate
                toolkit tailored to the user's needs.
              </div>
            </div>
            <div className="bg-[url('/polygon-mobile.svg')] bg-no-repeat bg-cover h-[210px] w-[180px] flex flex-col justify-center items-center gap-4 px-2 text-center">
              <div className="font-medium text-[10px] text-[#9DA7B3]">
                step 1.
              </div>
              <div className="text-sm font-medium text-[#1cc2c4] ">
                Address the right toolkit
              </div>
              <div className="text-xs font-light text-[#EDF4FC]">
                This indicates the initial step of selecting the appropriate
                toolkit tailored to the user's needs.
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
                    If you are about to buy new software and are unsure about
                    its technical aspects, you can use a third party opinion. A
                    proper assessment kit will provide insights into the
                    software's technical details, enabling you to make an
                    informed decision.
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
                    If you own a software
                    <Image
                      src={"/Polygon-3.svg"}
                      width={40}
                      height={40}
                      alt={"polygon"}
                      className=" max-sm:w-[18px] max-sm:mr-2"
                    />
                  </div>
                  <div className="max-sm:mt-4 max-sm:text-xs max-sm:font-light text-base font-normal leading-relaxed tracking-normal text-left text-[#0A2342] ">
                    If you own software and want to assess your status in
                    different aspects, there are self-assessment tools available
                    that can help you identify your strengths and weaknesses.
                    This will allow you to develop a strategy to optimize your
                    work and cover your weaknesses.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-sm:mt-32 mt-52 mb-16 mx-auto">
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
              Trusted by indusrty leaders
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
