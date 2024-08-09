import type { File, Image } from '.'

export interface About {
  _createdAt: string
  _id: string
  shortBio: string
  _updatedAt: string
  certifications: string
  _type: string
  longBio: string
  _rev: string
  resume: File
  profileImage: Image
}
