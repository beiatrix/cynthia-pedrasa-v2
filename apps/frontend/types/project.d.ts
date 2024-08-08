export interface Block {
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
  description: Block[]
  category: string
  content: Block[]
  _rev: string
  _type: string
  _updatedAt: string
},
