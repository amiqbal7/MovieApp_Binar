const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '8625d30a47546513e5ec6c4b16b9d46a',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;