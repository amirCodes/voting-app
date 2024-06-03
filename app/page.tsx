import React from "react";
import { Redis } from '@upstash/redis'

import MaxWidthWrapper from "./components/MaxWidthWrapper";
import { StarIcon, PuzzlePieceIcon } from '@heroicons/react/24/solid'
import TopicCreator from "./components/TopicCreator";
import {db} from "@/app/lib/redis"
const redis = new Redis({
  url: 'https://current-slug-53612.upstash.io',
  token: 'AdFsAAIncDFiOGQwZmY2MjE5Yzk0YmMzYmFlYmViOTQ1NWEwMWNjZnAxNTM2MTI',
})
export default async function Home() {
  // const member = await redis.srandmember<string>("nextjs14")
  const servedRequests = await db.get("served-requests")
  console.log(Number)
  return (
    <section className="min-h-screen bg-grid-zinc-50">
    <MaxWidthWrapper className="relative pb-24 pt-10 sm:pb-32 lg:pt-24 xl:pt-32 lg:pb-52">
      <div className="hidden lg:block absolute inset-0 top-8">
        {/* circle */}
      </div>

      <div className="px-6 lg:px-0 lg:pt-4">
        <div className="relative mx-auto text-center flex flex-col items-center">
          <h1 className="relative leading-snug w-fit tracking-tight text-balance mt-16 font-bold text-gray-900 text-5xl md:text-6xl">
            What do you{" "}
            <span className="whitespace-nowrap">
              th
              <span className="relative">
                i
                <span className="absolute mb-6 inset-x-0 -top-2 -translate-x-3">
                  <PuzzlePieceIcon className="h-7 w-7 md:h-8 md:w-8 text-orange-600" />
                </span>
              </span>
              nk
            </span>{" "}
            about...
          </h1>

          <TopicCreator />

          <div className="mt-12 flex flex-col sm:flex-row items-cemter sm:items-start gap-5">
            <div className="flex flex-col gap-1 justify-between items-center">
              <div className="flex gap-0.5">
                <StarIcon className="h-4 w-4 text-green-600 fill-green-600" />
                <StarIcon className="h-4 w-4 text-green-600 fill-green-600" />
                <StarIcon className="h-4 w-4 text-green-600 fill-green-600" />
                <StarIcon className="h-4 w-4 text-green-600 fill-green-600" />
                <StarIcon className="h-4 w-4 text-green-600 fill-green-600" />
              </div>

              <p>
                <span className="font-semibold">
                  {Math.ceil(Number() / 10) * 10}
                </span>{" "}
                served requests
              </p>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  </section>
  );
}
