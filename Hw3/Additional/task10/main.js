const books = [
    {
        title: 'The Surgeon',
        pageCount: 352,
        genres: ['Medical thriller', 'Romantic comedy'],
        authors: [
            { name: 'Oleg', age: 23 }, { name: 'Mariya', age: 34 }]
    },
    {
        title: 'November 9',
        pageCount: 360,
        genres: ['Romance','Romantic comedy'],
        authors: [
            { name: 'Vasya', age: 54 }, { name: 'Roman', age: 21 }, {name: 'Katya', age: 18 }]
    },
    {
        title: 'A Court of Thorns and Roses',
        pageCount: 448,
        genres: ['Romantic fantasy', 'Romance'],
        authors: [
            { name: 'Sasha', age: 27 }, {name: 'Katya', age: 18 },{ name: 'Dmytro', age: 31 }]
    },
    {
        title: 'The Silent Patient',
        pageCount: 336,
        genres: ['Psychological thriller', 'Romance'],
        authors: [
            { name: 'Ivan', age: 45 }, { name: 'Dmytro', age: 31 }]
    },
    {
        title: 'The Love Hypothesis',
        pageCount: 384,
        genres: ['Psychological thriller', 'Romantic fantasy', 'Romance'],
        authors: [
            { name: 'Dmytro', age: 31 }]
    }
];

// let biggestBook = books[0];
// for (let book of books) {
//     if (book.pageCount > biggestBook.pageCount) {
//         biggestBook = book;
//     }
// }
// console.log(biggestBook);
// let maxGenresCount = 0;
// let maxGenresBook = 0;
// for(let book of books){
//     if(book.genres.length > maxGenresCount){
//         maxGenresCount = book.genres.length;
//         maxGenresBook = book;
//     }
// }
// console.log(maxGenresBook);
// let maxTitleLength = 0;
// let maxTitleBook = 0;
// for (let book of books) {
//     if (book.title.length > maxTitleLength) {
//         maxTitleLength = book.title.length;
//         maxTitleBook = book;
//     }
// }
// console.log(maxTitleBook);
// let CountAuthors = 0;
// for (let book of books) {
//     if (book.authors.length === 2) {
//         CountAuthors = book;
//         console.log(CountAuthors);
//     }
// }
// let CountAuthors = 0;
// for (let book of books) {
//     if (book.authors.length === 1) {
//         CountAuthors = book;
//         console.log(CountAuthors);
//     }
// }


