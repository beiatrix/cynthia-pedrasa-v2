export interface Content {
  markDefs: []
  children: [
    {
      text: string
      _key: string
      _type: string
      marks: []
    }
  ]
  _type: string
  style: string
  _key: string
}

export interface Project {
  _id: string
  slug: {
    current: string
    _type: string
  },
  title: string
  _createdAt: string
  description: string
  category: string
  content: Content[]
  _rev: string
  _type: string
  _updatedAt: string
},
