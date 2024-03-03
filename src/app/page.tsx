"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import Typewriter from "./components/TyprWriter";

export default function Home() {
  const assessmentKits: any[] = [
    {
      title: "Qualify an enterprise system",
      href: "https://flickit.org/profiles",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quidem eum harum necessitatibus, molestias deleniti,Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quidem eum harum necessitatibus, molestias deleniti, Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quidem eum harum necessitatibus, molestias deleniti,vero ipsa ab excepturi",
      extras: { questionnaires: 42, attributes: 23 },
    },
    {
      title: "Evaluate Security of an Application",
      href: "https://flickit.org/profiles",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quidem eum harum necessitatibus, molestias deleniti,Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quidem eum harum necessitatibus, molestias deleniti, Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quidem eum harum necessitatibus, molestias deleniti,vero ipsa ab excepturi",
      extras: { questionnaires: 42, attributes: 23 },
    },
    {
      title: "Technical Due Diligence of a Startup",
      href: "https://flickit.org/profiles",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quidem eum harum necessitatibus, molestias deleniti,Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quidem eum harum necessitatibus, molestias deleniti, Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quidem eum harum necessitatibus, molestias deleniti,vero ipsa ab excepturi",
      extras: { questionnaires: 42, attributes: 23 },
    },
  ];

  const features = [
    {
      img: "/comprehensive-reports.svg",
      title: "Conduct 360° system evaluation with comprehensive reports",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quidem eum harum necessitatibus, molestias deleniti,",
    },
    {
      img: "/self-assessment.svg",
      title: "Carry out self-assessment",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolo consectetur adipisicing elit. Doloribus cum quidem eum harum necessitatibus, molestias deleniti,",
    },
    {
      img: "different-kits.svg",
      title: "Use specialized Assessment Kits for different types of issues",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum, molestias deleniti,Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quidem eum harum necessitatibus, molestias deleniti,",
    },
    {
      img: "find-assessor.svg",
      title: "Find a professional assesso",
      desc: "consectetur adipisicing elit. Doloribus cum quidem eum harum necessitatibus, molestias deleniti,Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quidem eum harum necessitatibus, molestias deleniti,",
    },
    {
      img: "create-assessment.svg",
      title: "Create your own Assessment Kit",
      desc: "Lorem ipsum dolor sit ametDoloribus cum quidem eum harum necessitatibus, molestias deleniti,",
    },
    {
      img: "compare.svg",
      title: "Compare the assessment results of different alternatives",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quidem amet consectetur adipisicing elit. Doloribus cum quidem eum harum necessitatibus, molestias deleniti,",
    },
  ];

  const peopleQuotes = [
    {
      name: "Omid Bidkham",
      img: "/person-1.webp",
      relation: {
        relation: "expert",
        title: "Flickit Group",
        href: "https://flickit.org/expert-groups",
      },
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quidem amet consectetur adipisicing elit. Doloribus cum quidem eum harum necessitatibus, molestias deleniti, Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quidem amet consectetur adipisicing elit. Doloribus cum quidem eum harum necessitatibus, molestias deleniti, Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quidem amet consectetur adipisicing elit. Doloribus cum quidem eum harum necessitatibus, molestias deleniti,",
    },
    {
      name: "Omid Bidkham",
      img: "/person-2.webp",
      relation: {
        relation: "expert",
        title: "Flickit Group",
        href: "https://flickit.org/expert-groups",
      },
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quidem amet consectetur adipisicing elit. Doloribus cum quidem eum harum necessitatibus, molestias deleniti, Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quidem amet consectetur adipisicing elit. Doloribus cum quidem eum harum necessitatibus, molestias deleniti, Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quidem amet consectetur adipisicing elit. Doloribus cum quidem eum harum necessitatibus, molestias deleniti,",
    },
  ];

  const QAs = [
    { question: "How does it work?", answer: "It works like charm" },
    {
      question: "How can i make new assessment in this platform?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quidem amet consectetur adipisicing elit. Doloribus cum quidem eum harum necessitatibus, molestias deleniti, Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quidem amet consectetur adipisicing elit. Doloribus cum quidem eum harum necessitatibus, molestias deleniti, Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quidem amet consectetur adipisicing elit. Doloribus cum quidem eum harum necessitatibus, molestias deleniti,",
    },
    { question: "How does it work?", answer: "It works like charm" },
    { question: "How does it work?", answer: "It works like charm" },
    { question: "How does it work?", answer: "It works like charm" },
    { question: "How does it work?", answer: "It works like charm" },
    { question: "How does it work?", answer: "It works like charm" },
    { question: "How does it work?", answer: "It works like charm" },
  ];

  const [tab, setActiveTab] = useState(0);

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

      <section className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col items-center justify-center relative top-16 bg-[url('/bg-polygon.svg')] object-cover w-full bg-no-repeat h-dvh">
          <div className="flex flex-col items-center justify-center w-1/2 my-48">
            <div className="text-[#c7cfcf] text-center font-['Sansation-Regular',_sans-serif] text-[25px] leading-tight font-normal relative w-[517px]">
              The ultimate tool for Assessing your software{" "}
            </div>
            <div
              className="text-center font-['Sansation-Bold',_sans-serif] text-7xl leading-tight font-bold relative self-stretch"
              style={{
                color:
                  "radial-gradient(closest-side, rgba(28, 194, 196, 1.00) 0%,rgba(16, 97, 98, 1.00) 100%)",
              }}
            >
              Eliminate quality blind spots by relying on experts&#039;
              algorithms.
            </div>
            <div className="flex flex-col gap-6 items-center justify-center self-stretch shrink-0 relative">
              <div
                className="text-center font-['Ubuntu-Regular',_sans-serif] text-xl leading-[135%] font-normal relative self-stretch"
                style={{
                  color:
                    "var(--midnight-black-gradiant, radial-gradient(closest-side, rgba(10, 35, 66, 1.00) 0%,rgba(2, 12, 25, 1.00) 100%))",
                  opacity: "0.800000011920929",
                }}
              >
                Flickit is a software assessment platform that enables software
                owners and developers to evaluate their software in different
                subjects and factors of their choice. Users can create their own
                software evaluation kit and customize it to their specific
                needs.
              </div>
            </div>
            <div className="mt-4">
              <button className="rounded-full border border-solid border-[#1cc2c4] bg-[#1cc2c4bf]  px-6 py-2.5 text-[#edf4fc]">
                Getting started
              </button>
              <button className="rounded-full  px-6 py-2.5 text-[#1cc2c4]">
                Read more...
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-48">
        <div className="bg-[url('/bg-shapes.svg')] object-cover w-full bg-no-repeat h-[700px] py-16 px-40 reletive">
          <Image
            src={"/polygon-vector.svg"}
            className="absolute z-99 left-4 mt-[-186px]"
            width={187}
            height={428}
            alt={"line vector"}
          />
          <div className="text-5xl font-ubuntu text-justify font-bold text-moon-silver flex justify-center text-[#edf4fc] mb-16">
            How does it works?
          </div>
          <div className="flex flex-row justify-between items-start">
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
      </section>
      <section>
        <div className=" flex flex-col items-center justify-center relative top-16 bg-[url('/midle-shape-bg.svg')] object-cover w-full bg-no-repeat h-[1987px] p-32 ">
          <div className="backdrop-blur-md w-full h-full bg-white/50 rounded-[32px] flex justify-between flex-col">
            <div className="flex flex-row-reverse justify-between items-center">
              <Image
                src={"/situation-1.svg"}
                width={370}
                height={370}
                alt={"situation"}
              />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                error ducimus voluptate veniam quasi excepturi consectetur
                repellendus eveniet consequatur ullam, inventore modi dolores
                facere sint natus! Aliquid ea dolorum optio?
              </div>
            </div>
            <div  className="flex flex-col justify-between items-center">
              <Image
                className="m-auto "
                src={"/situation-2.svg"}
                width={370}
                height={370}
                alt={"situation"}
              />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                error ducimus voluptate veniam quasi excepturi consectetur
                repellendus eveniet consequatur ullam, inventore modi dolores
                facere sint natus! Aliquid ea dolorum optio?
              </div>
            </div>
            <div  className="flex flex-row justify-between items-center">
              <Image
                src={"/situation-3.svg"}
                width={370}
                height={370}
                alt={"situation"}
              />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                error ducimus voluptate veniam quasi excepturi consectetur
                repellendus eveniet consequatur ullam, inventore modi dolores
                facere sint natus! Aliquid ea dolorum optio?
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-36 mx-4">
        <div className="mx-auto w-full max-w-screen-2xl p-4">
          <div className="flex w-full items-center justify-center flex-col">
            <Image
              src={"/line-vector.svg"}
              className="mb-2"
              width={612}
              height={4}
              alt={"line vector"}
            />
            <Image src={"/logo.svg"} width={200} height={46} alt={"logo"} />
            <Image
              className="mt-2"
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

const Expandable = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isExpanded, setIsExpand] = useState(false);
  const childRef = useRef<HTMLParagraphElement | null>(null);
  return (
    <div
      className="bg-white text-black rounded-xl transition-all p-6 w-[calc(50%-34px)] duration-300 shadow-md hover:shadow-lg border border-gray-100 cursor-pointer mb-6"
      onClick={() => setIsExpand(!isExpanded)}
    >
      <div className="flex">
        <Image
          src={isExpanded ? "/minus.svg" : "/plus.svg"}
          width={24}
          height={24}
          alt={"expand"}
        />
        <h6 className="text-lg font-bold ml-6">{question}</h6>
      </div>
      <div
        className={`overflow-hidden duration-300 transition-all text-lg ml-12`}
        style={{
          height: isExpanded ? `${childRef.current?.clientHeight}px` : "0px",
          marginTop: isExpanded ? `18px` : "0px",
        }}
      >
        <p ref={childRef}>{answer}</p>
      </div>
    </div>
  );
};
