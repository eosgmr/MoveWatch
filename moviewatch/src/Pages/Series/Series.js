
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import CardContent from '../../components/cardContent/CardContent';
import CustomPagination from "../../components/pagination/CustomPagination";
import Genres from './../../components/pagination/Genres';
import GenreKook from './../../Hooks/GenreHook';


const Series = () => {
    const [nrPage, pageNumbers] = useState(1);
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreForUrl = GenreKook(selectedGenres);


    useEffect(() => {

        const fechMovies = async () => {
            const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForUrl}`);

            setContent(data.results);
            pageNumbers(data.total_pages);

            console.log(genreForUrl);
        }
        fechMovies();

    }, [page, genreForUrl]);




    return (

        <div>
            <span class="pageTitle">Tv Series</span>

            <Genres
                type="tv"
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                setGenres={setGenres}
                genres={genres}
                setPage={setPage}
            />

            <div className="trending">{
                content && content.map((c) => (

                    <CardContent
                        key={c.id}
                        id={c.id}
                        poster={c.poster_path}
                        title={c.title || c.name}
                        release={c.release_date || c.first_air_date}
                        media_type='Tv series'
                        vote_average={c.vote_average}
                        overview={c.overview}

                    />))

            }
            </div>
            {nrPage > 1 && (<CustomPagination setPage={setPage} nrPage={nrPage} />)}

        </div>
    );

}
export default Series;