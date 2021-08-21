const API_BASE ='https://api.themoviedb.org/3';
const API_KEY = '433cbd1aad1967c6c4218e78597430ac';

const IdiomaPTBR = 'language=pt-BR';
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
                items: await basicFetch(`/discover/tv?${OriginaisNetflix}&${IdiomaPTBR}&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?${IdiomaPTBR}&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?${IdiomaPTBR}&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?${generoAcao}&${IdiomaPTBR}&api_key=${API_KEY}`)
            },            {
                slug: 'comedy',
                title: 'Em Comédia',
                items: await basicFetch(`/discover/movie?${generoComedia}&${IdiomaPTBR}&api_key=${API_KEY}`)
            },            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?${generoTerror}&${IdiomaPTBR}&api_key=${API_KEY}`)
            },            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?${generoRomance}&${IdiomaPTBR}&api_key=${API_KEY}`)
            },            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?${Documentarios}&${IdiomaPTBR}&api_key=${API_KEY}`)
            },
        ]
    }
}