import "@/app/styles/button.css"

interface PlayButtonProps {
    text: string;
}

export default function PlayButton({ text }: PlayButtonProps) {
    return (
        <>
            <div className="flex text-white items-center justify-center">
                <div className="card relative flex items-center justify-center rounded-2xl overflow-hidden bg-gray-700 transition-all duration-300 ease-[ease]">
                    <button className="relative px-5 py-2.5 font-medium cursor-pointer">
                        { text }
                    </button>
                </div>
            </div>
        </>
    )
}
