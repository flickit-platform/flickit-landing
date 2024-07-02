
export default function BtnMain(props: { redirectUrl: string }){
    const {redirectUrl} = props
    return (
        <main className="mx-auto">
            <section className="w-full flex justify-center items-center">
                <a
                    href={redirectUrl}
                    rel="noopener noreferrer"
                    className="w-1/2 lg:max-w-[62rem]"
                >
                    <button
                        className="hover:scale-105 hover:shadow-2xl h-[2.5rem] sm:h-25 lg:h-32 text-base sm:text-xl lg:text-[3.75rem] w-full main-btn font-medium text-[#00365C] text-center rounded-[6.2rem]">
                        Try it for free
                    </button>
                </a>
            </section>
        </main>
    )
}