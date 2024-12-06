self.addEventListener("install", (event) => {
  // make debugging easier by skipWaiting
  self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      // HERE IS THE BUG - just checking of body is undefined causes the body
      // to not be included in the fetch, server does not receive the body
      if (event.request.body !== undefined) {
        console.log("this request has a body");
      }
      const response = await fetch(event.request);

      // to aid in debugging/logging we will throw an extra header on the response
      const responseWithHeader = new Response(null, {
        status: response.status,
        headers: { ["X-Service-Worker"]: "true" },
      });

      return responseWithHeader;
    })()
  );
});
