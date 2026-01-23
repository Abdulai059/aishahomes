export function BlogPostSkeleton() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 animate-pulse">
            <div className="pt-20 pb-12 text-center">
                <div className="h-4 w-40 bg-gray-200 rounded mx-auto mb-4" />
                <div className="h-10 w-72 bg-gray-300 rounded mx-auto mb-4" />
                <div className="h-4 w-96 bg-gray-200 rounded mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                    >
                        <div className="w-full h-36 md:h-48 bg-gray-200" />

                        <div className="p-4 md:p-6 space-y-3">
                            <div className="h-5 w-3/4 bg-gray-300 rounded" />
                            <div className="h-4 w-full bg-gray-200 rounded" />
                            <div className="h-4 w-5/6 bg-gray-200 rounded" />
                            <div className="h-4 w-24 bg-gray-300 rounded mt-4" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
