$(document).ready(function() {

	//Get the books from the server and display to page
	var getBooks = function(){$.get(' https://den-super-crud.herokuapp.com/books')
	.done(function(data) {
		var booksArr = data.books;
			for (var i = 0; i < booksArr.length; i++) {
				var listItem = $("<li></li>");
				$(listItem).appendTo('#books');
				var bookTitle = booksArr[i].title;
				var bookAuthor = booksArr[i].author;
				var bookImage = booksArr[i].image;
				var bookRelease = booksArr[i].releaseDate;
				listItem.html( 
					bookTitle + "<br>" +
					bookAuthor + "<br>" +
					bookRelease + 
					"<img src='" + bookImage  + "'>");
			}
		});
};

getBooks();

//event listener for when the form is submitted to post to the server,
// and then invoke the getBooks function
$("#new-book").on('submit', function(event) {
	event.preventDefault();
	var titleVal = $("#book-title").val(); 
	var authorVal = $("#book-author").val(); 
	var imageVal = $("#book-image").val(); 
	var releaseVal = $("#book-release-date").val();
	//console.log(releaseVal);
	$.post('https://den-super-crud.herokuapp.com/books',{author: authorVal, title: titleVal, image: imageVal, releaseDate: releaseVal});
	getBooks();
});





});