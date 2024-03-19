const queryParams = new URLSearchParams(window.location.search);

// Add a key-value pair
queryParams.append('foo', 'bar');

// Remove a key-value pair
queryParams.delete('foo');

// Get the value of a key
const value = queryParams.get('foo');

// Get all values for a key
const values = queryParams.getAll('foo');

// Get the query string as a string
const queryString = queryParams.toString();
