'use client';

import { useState } from 'react';
import { X, Info } from 'lucide-react';

export default function AboutModal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Floating About Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all z-40 flex items-center gap-2"
                aria-label="About these projects"
            >
                <Info className="w-5 h-5" />
                <span className="hidden sm:inline font-medium">About</span>
            </button>

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-gray-800">
                                About These Projects
                            </h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="px-6 py-6 space-y-6">
                            {/* What is Software for Climate */}
                            <section>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    What is Software for Climate?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Software for Climate is an 8-week online course that teaches
                                    students about applications at the intersection of software and
                                    climate change. Students learn frameworks for understanding
                                    climate solutions, explore existing climate tech companies, and
                                    discover how their technical skills can contribute to climate
                                    action.
                                </p>
                            </section>

                            {/* The Project Timeline */}
                            <section>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    The Project Timeline
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex gap-4">
                                        <div className="text-2xl">📚</div>
                                        <div>
                                            <p className="font-medium text-gray-800">
                                                Weeks 1-6: Learn
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                Students explore climate frameworks, analyze
                                                existing solutions, and identify opportunities for
                                                software to make an impact.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="text-2xl">🛠️</div>
                                        <div>
                                            <p className="font-medium text-gray-800">
                                                Weeks 7-8: Build
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                Students spend 2 weeks building a capstone project
                                                that combines course concepts with their own
                                                expertise and interests. Projects range from data
                                                visualizations to web apps to research analyses.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="text-2xl">🎤</div>
                                        <div>
                                            <p className="font-medium text-gray-800">Demo Day</p>
                                            <p className="text-sm text-gray-600">
                                                At the end of the course, students present their
                                                projects to their cohort, receive feedback and
                                                questions, and vote on superlatives for outstanding
                                                work.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* About Superlatives */}
                            <section>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    About Superlatives
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    After Demo Day presentations, students vote on superlative
                                    awards within their cohort. Common awards include:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                    <li>Best Overall</li>
                                    <li>Most Interesting</li>
                                    <li>Best Execution</li>
                                </ul>
                                <p className="text-gray-600 text-sm mt-3">
                                    When multiple projects receive the same number of votes, they
                                    share the award (indicated by &ldquo;X-way tie&rdquo;).
                                </p>
                            </section>

                            {/* Learn More */}
                            <section className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Interested in taking the course?
                                </h3>
                                <p className="text-gray-700 text-sm mb-3">
                                    Learn more about Software for Climate and how to enroll.
                                </p>
                                <a
                                    href="https://www.terra.do/climate-change-courses/software-for-climate/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                                >
                                    Visit Course Page
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
