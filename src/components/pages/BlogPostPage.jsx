import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import supabase from "../services/Supabase";

// Fetch single post by ID
export async function getPost(id) {
    const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single(); // ensures single object
    if (error) throw error;
    return data;
}

// Fetch all posts
export async function getPosts() {
    const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false }); // newest first
    if (error) throw error;
    return data;
}

// Custom hook for all posts
export function usePosts() {
    return useQuery({
        queryKey: ["posts"],
        queryFn: getPosts,
    });
}

export default function BlogPostPage() {
    const { id } = useParams();
    const postId = Number(id);

    // Fetch single post
    const { data: post, isLoading: postLoading, error: postError } = useQuery({
        queryKey: ["post", postId],
        queryFn: () => getPost(postId),
        enabled: !!postId,
    });

    // Fetch all posts for prev/more
    const { data: posts, isLoading: postsLoading, error: postsError } = usePosts();

    if (postLoading || postsLoading) return <p className="text-center py-20">Loading...</p>;
    if (postError) return <p className="text-center py-20">Error loading post: {postError.message}</p>;
    if (postsError) return <p className="text-center py-20">Error loading posts: {postsError.message}</p>;
    if (!post) return <p className="text-center py-20">Post not found</p>;

    // Tags from metadata
    const rawTags = post.metadata?.tags;
    const tags = Array.isArray(rawTags)
        ? rawTags
        : typeof rawTags === "string"
            ? rawTags.split(",").map(tag => tag.trim()).filter(Boolean)
            : [];

    // Previous post (most recent before current)
    const previousPost = posts
        ?.filter(p => p.id !== post.id)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0];

    // More posts (exclude current)
    const morePosts = posts?.filter(p => p.id !== post.id).slice(0, 4) || [];

    return (
        <>
            <article className="max-w-5xl mx-auto px-4 md:mt-20 py-12">
                <header className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-serif mb-4 leading-tight">
                        {post.title} {post.author ? `, by ${post.author}` : ""}
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                        <time>{post.created_at ? new Date(post.created_at).toDateString() : ""}</time>
                        <span>•</span>
                        <span>{post.metadata?.readTime || post.read_time || "5"} min read</span>
                    </div>
                </header>

                {post.heroImage && (
                    <div className="mb-8">
                        <img
                            src={post.heroImage}
                            alt={post.title}
                            className="w-full md:h-96 h-48 object-cover rounded-lg"
                        />
                    </div>
                )}

                <div className="prose prose-lg max-w-none">
                    {post.content?.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="text-gray-700 leading-relaxed text-base mb-6 text-justify">
                            {paragraph}
                        </p>
                    ))}
                </div>

                {/* QUICK FACTS */}
                {post.metadata && Object.keys(post.metadata).length > 0 && (
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                        <dl className="space-y-3 text-sm">
                            {Object.entries(post.metadata).map(([key, value]) => (
                                <div key={key}>
                                    <dt className="font-semibold text-gray-900">
                                        {key.replace(/([A-Z])/g, " $1")}:
                                    </dt>
                                    <dd className="text-gray-700">{Array.isArray(value) ? value.join(", ") : value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                )}

                {/* TAGS */}
                {tags.length > 0 && (
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <h3 className="text-xl font-semibold mb-6">Related Topics</h3>
                        <div className="flex flex-wrap gap-2">
                            {tags.map(tag => (
                                <span
                                    key={tag}
                                    className="bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 border hover:border-gray-400 hover:bg-gray-100 transition cursor-pointer"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* SHARE BUTTONS */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-semibold mb-6">Share this article</h3>
                    <div className="flex gap-4">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                            Facebook
                        </button>
                        <button className="bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-sky-600 transition">
                            Twitter
                        </button>
                        <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition">
                            Email
                        </button>
                    </div>
                </div>

                {/* PREVIOUS + MORE POSTS */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    {previousPost && (
                        <div className="flex items-center justify-between mb-8">
                            <Link
                                to={`/blog/${previousPost.id}`}
                                className="text-gray-600 hover:text-gray-900 transition flex items-center gap-2"
                            >
                                <span>←</span>
                                <div className="text-left">
                                    <div className="text-xs text-gray-500 uppercase mb-1">Previous Post</div>
                                    <div className="text-sm font-medium">
                                        {previousPost.title}, by {previousPost.author}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}

                    <div className="mb-12">
                        <h3 className="text-sm font-semibold uppercase text-gray-500 mb-6">More Posts</h3>
                        <div className="space-y-6">
                            {morePosts.map(p => (
                                <div key={p.id} className="flex justify-between items-start pb-6 border-b border-gray-100">
                                    <div className="flex-1">
                                        <Link
                                            to={`/blog/${p.id}`}
                                            className="text-base font-medium text-gray-900 hover:text-gray-600 transition"
                                        >
                                            {p.title}, by {p.author}
                                        </Link>
                                    </div>
                                    <time className="text-sm text-gray-500 ml-4 whitespace-nowrap">
                                        {new Date(p.created_at).toDateString()}
                                    </time>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </article>


        </>
    );
}
