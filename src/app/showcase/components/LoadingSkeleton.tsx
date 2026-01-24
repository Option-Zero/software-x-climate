export default function LoadingSkeleton() {
    return (
        <>
            {/* Content skeleton */}
            {[1, 2].map((cohort) => (
                <div key={cohort} className="mb-12">
                    <div className="h-8 bg-gray-300 rounded w-48 mb-6 animate-pulse" />
                    {[1, 2, 3].map((project) => (
                        <div key={project} className="bg-white rounded-lg shadow-md p-6 mb-4">
                            <div className="h-6 bg-gray-300 rounded w-2/3 mb-3 animate-pulse" />
                            <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse" />
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
}
