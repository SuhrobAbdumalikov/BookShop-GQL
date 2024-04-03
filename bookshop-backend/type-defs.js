export const typeDefs = `
 type Book {
    id:ID!
    title:String
    subtitle:String
    author:String
    published:String
    pages:Int
    description:String
    rating:String
    cost:String
    categories:String
 }

 type Response {
    message:String
 }

 type Query {
    books:[Book]
    bookById(id:ID):Book
    searchBook(title:String,author:String,categories:String):[Book]
    filterByAll(author:String,categories:String,rating:String):[Book]
 }

 type Mutation {
    addBook(id:ID,title:String,subtitle:String, author:String,published:String, pages:Int,description:String):Response
    deleteBook(id:ID):Response
    editBook(id:ID,title:String,subtitle:String, author:String,published:String, pages:Int,description:String):Response
 }

`;
