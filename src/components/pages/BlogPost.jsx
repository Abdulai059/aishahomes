import { Link } from "react-router-dom";
import { usePosts } from "../services/usePost";

export default function BlogPost() {
    const { data: posts, isLoading, error } = usePosts();

    if (isLoading)
        return <p className="text-center py-20">Loading posts...</p>;
    if (error)
        return (
            <p className="text-center py-20 text-red-500">
                Failed to load posts
            </p>
        );
    if (!Array.isArray(posts) || posts.length === 0)
        return <p className="text-center py-20">No posts found</p>;

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="relative z-10 pt-20 pb-12 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <p className="text-yellow-700 text-xs uppercase tracking-widest mb-4">
                        Our Stories & Insights
                    </p>
                    <h1
                        className="text-4xl md:text-5xl font-serif text-gray-900 mb-4 leading-tight animate-fade-in-up"
                        style={{ fontFamily: "Columbia-Serial, Georgia, serif" }}
                    >
                        Latest Blog Posts
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
                        Discover stories, insights, and inspiration from our community
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
                    >
                        {/* IMAGE */}
                        {post.heroImage && (
                            <img
                                src={post.heroImage}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                                onError={(e) => {
                                    e.target.src = "/images/blog/fallback.jpg";
                                }}
                            />
                        )}

                        {/* CONTENT */}
                        <div className="p-6 flex flex-col justify-between h-full">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                    {post.description || post.content?.substring(0, 100) + "..."}
                                </p>




                                <Link
                                    to={`/blog/${post.id}`}
                                    className="inline-flex items-center gap-2 mt-4 text-blue-900 font-semibold hover:underline hover:text-blue-600 transition"
                                >
                                    Read More
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>


                            </div>




                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
