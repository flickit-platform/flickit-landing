import {Trans} from "react-i18next";

export default function BtnMain(props: { redirectUrl: string }){
    const {redirectUrl} = props
    return (
        <main className="mx-auto">
            <section className="w-full flex justify-center items-center ">
                <a
                    href={redirectUrl}
                    rel="noopener noreferrer"
                    className="w-2/3 h-full lg:max-w-[62rem] sm:pb-[41px] lg:pb-0"
                >
                    <button
                        className="title-medium sm:text-xl lg:!headline-medium drop-shadow-[0px_0px_60px_#ABCCED] max-h-[2.5rem] lg:max-h-[5.5rem] bg-gradient-to-r from-PrimaryFixed from-0% to-PrimaryFixedDim to-100%  h-[2.5rem] sm:h-25 lg:h-32 w-full main-btn text-Primary text-center rounded-[6.2rem] ">
                        <Trans i18nKey={"tryItForFree"} />
                    </button>
                </a>
            </section>
        </main>
    )
}