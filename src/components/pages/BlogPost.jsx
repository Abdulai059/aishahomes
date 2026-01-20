import { Link } from "react-router-dom";
import { usePosts } from "../services/usePost";

export default function BlogPostCards() {
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
            <h2 className="text-2xl md:text-3xl font-medium mb-8"
                style={{ fontFamily: "Columbia-Serial" }}>All Blog Posts</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
                    >
                       
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
