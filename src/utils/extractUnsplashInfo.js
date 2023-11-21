export function extractUnsplashInfo(results) {
  const extractedResult = results.map((img) => {
    console.log(img.urls.regular)
    return { url: img.urls.small, id: img.id, desc: img.description }
  })
  console.log(extractedResult)
}
