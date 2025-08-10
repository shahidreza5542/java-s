// const coding = ["js", "py", "rb", "java"]

//  const values = coding.forEach( (item) => {
//    // console.log(item);
//     //return item
// } )

// // console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books = [
  {
    bookName: "The Secret Garden",
    category: "Children's Literature",
    publicationDate: "1911-08-01"
  },
  {
    bookName: "Sapiens: A Brief History of Humankind",
    category: "History",
    publicationDate: "2014-06-03"
  },
  {
    bookName: "Cosmos",
    category: "Science",
    publicationDate: "1980-09-01"
  },
  {
    bookName: "Pride and Prejudice",
    category: "Classics",
    publicationDate: "1813-01-28"
  },
  {
    bookName: "The Hitchhiker's Guide to the Galaxy",
    category: "Science Fiction",
    publicationDate: "1979-10-12"
  },
  {
    bookName: "Educated: A Memoir",
    category: "Biography",
    publicationDate: "2018-02-20"
  },
  {
    bookName: "Thinking, Fast and Slow",
    category: "Psychology",
    publicationDate: "2011-10-25"
  },
  {
    bookName: "The Great Gatsby",
    category: "Fiction",
    publicationDate: "1925-04-10"
  },
  {
    bookName: "Astrophysics for People in a Hurry",
    category: "Science",
    publicationDate: "2017-05-02"
  },
  {
    bookName: "To Kill a Mockingbird",
    category: "Classics",
    publicationDate: "1960-07-11"
  }
];


const userBooks = books.filter ( (bk) => bk.category === 'Classics')

const userBook = books.filter ( (bk) => {
    return bk.publicationDate >= '1960-07-11' && bk.category === 'Classics'

} )

console.log(userBooks);
console.log(userBook);


