// Build a Book Organizer - FreeCodeCamp

const books = [
  {
    title: "a",
    authorName: "b",
    releaseYear: 2000
  },
  {
    title: "c",
    authorName: "d",
    releaseYear: 2008
  },
  {
    title: "e",
    authorName: "f",
    releaseYear: 1948
  }
]

function sortByYear(book1, book2) {
  return (book1.releaseYear - book2.releaseYear) / Math.abs(book1.releaseYear - book2.releaseYear) || 0
}

const filteredBooks = books.filter(book => book.releaseYear < 1950)
filteredBooks.sort(sortByYear);