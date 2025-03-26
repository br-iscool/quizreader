export default function Menu() {
    return (    
        <div className="flex flex-row justify-center gap-10 max-w-4xl mx-auto py-10">
            <div className="flex-1 text-center p-8 shadow-lg rounded-lg dark:ring-1 h-48">
                <h2 className="text-xl font-semibold mb-3">AI-Powered Questions</h2>
                <div className="flex flex-col justify-center">
                    <p className="text-gray-400">Get an authentic quizbowl experience with questions generated and validated by artificial intelligence.</p>
                </div>
            </div>
            <div className="flex-1 text-center p-8 shadow-lg dark:ring-1 rounded-lg h-48">
                <h2 className="text-xl font-semibold mb-3">Instant Feedback</h2>
                <div className="flex flex-col justify-center">
                    <p className="text-gray-400">Submit your answers and get immediate AI-powered evaluation with our custom judging system.</p>
                </div>
            </div>
            <div className="flex-1 text-center p-8 shadow-lg dark:ring-1 rounded-lg h-48">
                <h2 className="text-xl font-semibold mb-3">Quiz & Improve</h2>
                <div className="flex flex-col justify-center">
                    <p className="text-gray-400">Track your progress and improve. Share your highest score with your friends and family.</p>
                </div>
            </div>
        </div>
    )
}