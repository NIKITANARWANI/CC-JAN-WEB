// Get the elements we need
const form = document.getElementById('note-form');
const input = document.getElementById('note-input');
const notesList = document.getElementById('notes');

// Add event listener for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the value of the input field
  const note = input.value;

  // Create a new list item
  const newNote = document.createElement('li');
  newNote.textContent = note;

  // Append the new list item to the notes list
  notesList.appendChild(newNote);

  // Clear the input field
  input.value = '';
});
