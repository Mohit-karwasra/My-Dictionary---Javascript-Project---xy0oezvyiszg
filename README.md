# html-css-js-project-boilerplate

# Dictionary App

This is a simple dictionary app that allows users to search for word definitions and keep track of their search history.

## Features

- **Search for Word Definitions**: Enter a word in the search input field to retrieve its definition from an external API.
- **Display Word Definitions**: The app displays the definition of the searched word in the designated area.
- **Search History**: Users can view their search history by clicking the "HISTORY" button.
- **Delete Search History**: Clicking on the delete icon within the search history removes the corresponding search entry from both the display and local storage.

## Technologies Used

- HTML
- CSS
- JavaScript

## Usage

1. Open the `index.html` file in a web browser.
2. Enter a word in the search input field and click the search icon.
3. The definition of the word will be displayed in the app.
4. Click the "HISTORY" button to view the search history.
5. To delete a search entry, click on the delete icon next to the entry in the search history.

## Implementation Details

- The app uses the `fetch` function to retrieve word definitions from the [Dictionary API](https://dictionaryapi.dev/).
- The search history is stored in the browser's local storage using the `localStorage` API.
- The JavaScript code (`app.js`) handles the search functionality, displaying definitions, managing search history, and deleting entries.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.
