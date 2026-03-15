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
    const difference = book1.releaseYear - book2.releaseYear
    return difference / Math.abs(difference) || 0
}

const filteredBooks = books.filter(book => book.releaseYear < 1950)
filteredBooks.sort(sortByYear);

// Implement a Sorted Index Finder

function getIndexToIns(arr, num) {
    arr.sort((acc, cur) => acc-cur)
    let index = arr.findIndex(x => x >= num)
    if (index === -1) {
        index = arr.length
    }
    return index
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // 2
console.log(getIndexToIns([40, 60], 50)); // 1
console.log(getIndexToIns([3, 10, 5], 3)); // 0
console.log(getIndexToIns([5, 3, 20, 3], 5)); // 2
console.log(getIndexToIns([2, 20, 10], 19)); // 2
console.log(getIndexToIns([3, 10, 5], 11)); // 3
console.log(getIndexToIns([], 5)); // 0