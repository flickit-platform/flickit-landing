import ImageCarousel from "@/utils/ImageCarousel";

export default function CarouselComponent(){

    const images = [
        {
            img: "/carousel-img-2.png",
            name: "Sadegh Aliakbary",
            title: "Software Engineering Instructor and Consultant",
            description:
                "Flickit is an intelligent assistant for technical decision support. I love it because it practically helped me in evaluating different enterprise software systems, its insights made sense to a wide variety of decision makers, and it is open source!",
        },
        {
            img: "/carousel-img-1.png",
            name: "Seyyed Jamaleddin Pishvaei",
            title: "Software Quality Assessor",
            description:
                "Flickit promotes efficient mental and practical disciplines in assessment projects. While speeding up the assessment process, it provides greater satisfaction among our consultees with less effort.",
        },
    ];

    return <ImageCarousel images={images}/>
}