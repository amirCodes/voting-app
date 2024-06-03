"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query"
import { createTopic } from "@/app/actions"

const TopicCreator = () => {
  const [input, setInput] = useState<string>("");

    const { mutate, error, isPending } = useMutation({
      mutationFn: createTopic,
    })

  return (
    <div className="mt-12 flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={({ target }) => setInput(target.value)}
          placeholder="Enter topic here..."
          autoComplete="AI..."
          className="block w-full rounded-md p-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <button
            disabled={isPending}
            onClick={() => mutate({ topicName: input })}
          className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create
        </button>
      </div>

      {/* {error ? <p className="text-sm text-red-600">{error.message}</p> : null} */}
    </div>
  );
};

export default TopicCreator;
