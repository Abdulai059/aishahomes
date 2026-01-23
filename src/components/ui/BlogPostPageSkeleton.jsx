export function BlogPostPageSkeleton() {
    return (
        <article className="max-w-5xl mx-auto px-4 md:mt-20 py-12 animate-pulse">

            <header className="mb-8">
                <div className="h-8 w-3/4 bg-gray-300 rounded mb-4" />
                <div className="flex gap-4">
                    <div className="h-4 w-32 bg-gray-200 rounded" />
                    <div className="h-4 w-24 bg-gray-200 rounded" />
                </div>
            </header>

            <div className="mb-8">
                <div className="w-full h-48 md:h-96 bg-gray-200 rounded-lg" />
            </div>

            <div className="space-y-4 mb-12">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-4 bg-gray-200 rounded w-full" />
                ))}
                <div className="h-4 bg-gray-200 rounded w-5/6" />
                <div className="h-4 bg-gray-200 rounded w-4/6" />
            </div>


            <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="h-6 w-40 bg-gray-300 rounded mb-4" />
                <div className="space-y-3">
                    <div className="h-4 w-3/4 bg-gray-200 rounded" />
                    <div className="h-4 w-2/3 bg-gray-200 rounded" />
                    <div className="h-4 w-1/2 bg-gray-200 rounded" />
                </div>
            </div>


            <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="h-6 w-48 bg-gray-300 rounded mb-6" />
                <div className="flex gap-2 flex-wrap">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="h-8 w-20 bg-gray-200 rounded-full" />
                    ))}
                </div>
            </div>


            <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="h-6 w-44 bg-gray-300 rounded mb-6" />
                <div className="flex gap-4">
                    <div className="h-10 w-28 bg-gray-200 rounded-lg" />
                    <div className="h-10 w-28 bg-gray-200 rounded-lg" />
                    <div className="h-10 w-28 bg-gray-200 rounded-lg" />
                </div>
            </div>


            <div className="mt-16 pt-8 border-t border-gray-200">
                <div className="h-4 w-32 bg-gray-300 rounded mb-6" />
                <div className="space-y-6">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="flex justify-between items-center">
                            <div className="h-4 w-3/4 bg-gray-200 rounded" />
                            <div className="h-4 w-24 bg-gray-200 rounded" />
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
}
