import { Photo } from "./photo"

export interface Member {
    id: number
    userName: string
    age: number
    url: string
    knownAs: string
    dateCreated: Date
    lastActive: Date
    gender: string
    introduction: string
    interests: string
    lookingFor: string
    city: string
    country: string
    photos: Photo[]
  }
  
  
  