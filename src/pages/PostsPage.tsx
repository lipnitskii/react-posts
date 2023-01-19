import { Loader } from "../components/Loader";
import { Post } from "../components/post";
import { usePosts } from "../hooks/posts";
import { Error } from "../components/Error";
import { Search } from "../components/Search";
import { useState } from "react";

export function PostsPage() {
  const [pages, setPages] = useState(0);
  const { loading, error, posts } = usePosts(pages);

  return (
    <>
      <Search />

      <div className="flex items-center">
        <div className="mx-auto max-w-2xl pt-2 pb-2 ">
          {pages != 0 && (
            <button
              className="py-2 px-4 border bg-blue-500"
              type="button"
              onClick={() => setPages(pages > 10 ? pages - 10 : 0)}
            >
              назад
            </button>
          )}
          <span className="py-2 px-4 font-extrabold">
            {pages} - {pages + 10}
          </span>
          {pages < 140 && (
            <button
              className="py-2 px-4 border bg-blue-500"
              type="button"
              onClick={() => setPages(pages + 10)}
            >
              вперед
            </button>
          )}
        </div>
      </div>
      <div className="container mx-auto max-w-2xl pt-5">
        {loading && <Loader />}
        {error && <Error error={error} />}
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </>
  );
}
