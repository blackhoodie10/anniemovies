
const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '5887d65ce3af664d179afa4bed111379',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) =>     `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;