export function extractUnsplashInfo(results) {
  const extractedResult = results.map((img) => {
    return { url: img.urls.regular, id: img.id, desc: img.description }
  })
  return extractedResult
}
