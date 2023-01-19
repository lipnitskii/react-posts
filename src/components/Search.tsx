import axios from "axios";
import React, { useState } from "react";
import { IPost } from "../models";
import { Error } from "./Error";
import { Post } from "./post";

export function Search() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const submitHandler = async (event: React.FormEvent) => {
    setError("");
    event.preventDefault();
    if (value.trim().length === 0) {
      setError("Введите корректный запрос для поиска");
      setPosts([]);
      return;
    }
    const response = await axios.get(
      `https://dummyjson.com/posts/search?q=${value}`
    );
    if (response.data.total === 0) {
      setError("Ничего не найдено");
      setPosts([]);
      return;
    }

    setPosts(response.data.posts);
  };
  return (
    <>
      <div className="flex items-center">
        <form onSubmit={submitHandler} className="mx-auto max-w-2xl pt-5 ">
          <input
            type="text"
            className="border py-2 px-4 mb-2 "
            placeholder="Хочу найти..."
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />

          <button type="submit" className="py-2 px-4 border bg-blue-500">
            Найти!
          </button>
          {error && <Error error={error} />}
        </form>
      </div>
      <div className="container mx-auto max-w-2xl pt-5">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </>
  );
}
