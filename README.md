# webkit-service-worker-test

Webkit form post redirected breaks when a service worker is registered.

## Testing

- Access https://webkit-service-worker-test.herokuapp.com/
- Put in some data in the form
- Submit the form
- The page should show the data you entered
  - If you are in Safari, it will show an empty object
