const API_BASE ='https://api.themoviedb.org/3';
const API_KEY = '433cbd1aad1967c6c4218e78597430ac';

const Idioma = 'language=pt-BR';
const OriginaisNetflix = 'with_network=213';
const generoAcao = 'with_genres=28';
const generoComedia = 'with_genres=35';
const generoTerror = 'with_genres=27';
const generoRomance = 'with_genres=10749';
const Documentarios = 'with_genres=99';

/*
O QUE PEGAR DA API
- originais da netflix
- recomendados (trending)
- em alta (top rated)
- ação
- comédia
- terror
- romance
- documentários
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?${OriginaisNetflix}&${Idioma}&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?${Idioma}&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?${Idioma}&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?${generoAcao}&${Idioma}&api_key=${API_KEY}`)
            },            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?${generoComedia}&${Idioma}&api_key=${API_KEY}`)
            },            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?${generoTerror}&${Idioma}&api_key=${API_KEY}`)
            },            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?${generoRomance}&${Idioma}&api_key=${API_KEY}`)
            },            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?${Documentarios}&${Idioma}&api_key=${API_KEY}`)
            },
        ];
    },
    getMovieInfo: async function (movieId, type) {
        let info = {};
            if(movieId){
                switch(type){
                    case 'movie':
                        info = await basicFetch(`/movie/${movieId}?${Idioma}&api_key=${API_KEY}`);
                        break;
                        case 'tv':
                            info = await basicFetch(`/tv/${movieId}?${Idioma}&api_key=${API_KEY}`);
                        break;
                        default:
                            info = null;
                        break;
                }
            }
        return info;
    }
}