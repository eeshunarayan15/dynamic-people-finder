# dynamic-people-finder
Project Documentation
1. Project Overview
This project is a simple web application that displays a list of people with their names and profile pictures. The application includes a search feature that allows users to filter the list by typing a name into the search input. As the user types, the displayed list updates in real-time to show only those names that match the input.

2. Technologies Used
HTML: For structuring the web page.
CSS: For styling the web page.
JavaScript: For handling dynamic behavior, such as filtering the list based on user input.
Google Fonts: The Roboto font is used for the text.
3. Project Structure
index.html: The main HTML file that defines the structure of the web page.
style.css: The CSS file that contains styles for the elements on the page.
script.js: The JavaScript file that handles the dynamic functionality of the application.
4. Installation Guide
Prerequisites
A web browser (Google Chrome, Firefox, etc.)
Steps
Download or Clone the Repository:
Download the ZIP file of the project or clone the repository using Git.
Open the Project:
Navigate to the project folder and open the index.html file in your web browser.
5. Usage Instructions
Viewing the People List
Upon opening the index.html file, you'll see a search input at the top and a grid of people with their names and profile pictures below it.
Searching for a Person
Type a name into the search input.
The list will automatically update to show only those names that start with the letters you've typed.
Clear the input to reset the list and see all names again.
6. Code Explanation
HTML (index.html)
The HTML file defines a basic structure with a div element containing an input field for search and another div for displaying the people.
CSS (style.css)
The CSS styles the page, ensuring that it looks neat and responsive. It also includes styling for the input field and the grid layout for displaying the people.
JavaScript (script.js)
The JavaScript code handles the functionality of dynamically filtering the list of people based on the user's input. It does this by:
Creating an array of people objects, each containing a name and src for the image.
Using the forEach method to generate HTML for each person and insert it into the .people container.
Adding an event listener on the input field that listens for user input and filters the people list based on the typed text.

7. FAQ
Q: Can I add more people to the list?

Yes, you can add more people by updating the data array in script.js.
Q: How can I change the font?

You can modify the font by changing the Google Fonts link in the index.html file and updating the font-family in style.css.
