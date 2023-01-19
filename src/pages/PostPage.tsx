import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IPost } from "../models";

export function PostPage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<IPost>([] as any);
  const [id, setId] = useState(useParams().id);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="container mx-auto max-w-2xl pt-5">
          <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <p style={{ fontWeight: "bold" }}>{items.title}</p>
            <br />
            <p>{items.body}</p>
            <p>
              Reactions:
              <span style={{ fontWeight: "bold" }}> {items.reactions}</span>
            </p>
          </div>
          <Link to="/">
            <div className="py-2 px-4 border bg-blue-500 mx-auto w-20">
              {" "}
              Назад{" "}
            </div>
          </Link>
        </div>
      </>
    );
  }
}
