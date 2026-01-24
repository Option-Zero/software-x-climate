export default function IntroSection() {
    return (
        <div className="bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 py-8 max-w-5xl">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Learn Card */}
                    <div className="text-center">
                        <div className="text-4xl mb-3">📚</div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Learn</h3>
                        <p className="text-sm text-gray-600">
                            6 weeks learning applications at the intersection of software & climate
                        </p>
                    </div>

                    {/* Build Card */}
                    <div className="text-center">
                        <div className="text-4xl mb-3">🛠️</div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Build</h3>
                        <p className="text-sm text-gray-600">
                            2 weeks building a capstone project combining course concepts with their
                            own expertise
                        </p>
                    </div>

                    {/* Share Card */}
                    <div className="text-center">
                        <div className="text-4xl mb-3">🎤</div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Share</h3>
                        <p className="text-sm text-gray-600">
                            Present at Demo Day, receive feedback, and vote on superlatives
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
