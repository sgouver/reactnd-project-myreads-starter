# My READS Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

## Instructions


The project is a responsive personal library site :

- The project has the below structure :
    - App.js // The main page where the composition of multiple components  occur.
          |
          |__ MainApp.js // The structure of the home page is wraped in a stateless |composition          
          |  |
          |  |_ BookList.js // The stateless composition that manage the books
          |
          |__ Search.js // The Search component that change the state of our main library by adding or removing new books.  
              |
              |_ BookList.js // The (same) stateless composition that manage the books

- In MainApp the user can set the status of his readings, currentlyReading, Want to Read
 or read.

- In Search user can find new books and set them to a status that will be transfered and remain in the MainApp page.

## Contributing

- There is a delay in MainApp currentShelf status, this sometimes demands for the page to refresh the page to see the change of the shelf.
