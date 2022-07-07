export interface Book {
  description: string
  id: number
  imageUrl: string
  price: string
  title: string
}

// this folder should host any interface that does not belong
// directly to a component!
// this is a place for hosting interfaces that are supposed to be shared
// across multiple components
