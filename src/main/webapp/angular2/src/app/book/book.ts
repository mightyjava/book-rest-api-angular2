export class Book {
    id: number;
    title: string;
    author: string;
    coverPhotoURL: string;
    isbnNumber: string;
    price: string;
    language: string;

    constructor(id: number, title: string, author: string, coverPhotoURL: string, isbnNumber: string,
        price: string, language: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.coverPhotoURL = coverPhotoURL;
        this.isbnNumber = isbnNumber;
        this.price = price;
        this.language = language;
    }
}
