import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { IPost } from "../models";

export function usePosts(pages:number) {
const [posts, setPosts] = useState<IPost[]>([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

async function fetchPosts() {
  try {
    setError("");
    setLoading(true);
    const response = await axios.get(`https://dummyjson.com/posts?limit=10&skip=${pages}`);
    setPosts(response.data.posts);
    setLoading(false);
  } catch (e: unknown) {
    const error = e as AxiosError;
    setLoading(false);
    setError(error.message);
  }
}

useEffect(() => {
  fetchPosts();
}, [pages]);

return {posts, loading, error }
}