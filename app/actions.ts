"use cleint"

import { error } from "console"
import { redirect } from "next/dist/server/api-utils"
import { db } from "./lib/redis"

export const createTopic = async({topicName}: {topicName:string}) =>{
  const regex = /^[a-zA-Z]+$/

  if(!topicName || topicName.length>50){
    return {error:" Name must be between 1 and 50 chars"}
  }

  if(!regex.test(topicName)){
    return {error:"Only letters and hyphens allowed in name"}
  }
const set = new Set()
await db.sadd("existing-topics", topicName)

    redirect(`/${topicName}`)
}