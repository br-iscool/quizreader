export default function PlayInput() {
    return (
        <>
            <div className="relative p-2">
                <label htmlFor="play-input" className="block pb-2 text-sm font-medium">Enter your answer: </label>
                <input type="text" id="play-input" className="block w-full p-4 rounded-lg caret-white bg-gray-700 focus:border-gray-400 focus:ring-gray-400" />
            </div>
        
        </>
    )
}