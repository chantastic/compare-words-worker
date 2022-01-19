import assess from 'compare-words'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  let url = new URL(request.url)

  return new Response(
    `${JSON.stringify(assess(...url.pathname.split('/').slice(1, 3)))}`,
    {
      headers: { 'content-type': 'application/json' },
    },
  )
}
