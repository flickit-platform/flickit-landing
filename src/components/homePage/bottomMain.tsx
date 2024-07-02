export default function BottomMain(){
    return(
        <section className="h-[400px] w-full flex justify-center items-center  overflow-auto">
            <div className="flex gap-16">
                <Slide color={"bg-amber-400"}/>
                <Slide color={"bg-red-400"}/>
                <Slide color={"bg-blue-400"}/>
            </div>

        </section>
    )
}

const Slide = ({color} : { color :string }) => {
    const func = () =>{

    }
    return (
        <div onClick={func} className={`min-w-[250px] h-[150px] ${color}`}></div>
    )
}