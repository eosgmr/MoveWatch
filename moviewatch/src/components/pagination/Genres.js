import axios from "axios";
import { useEffect } from "react";
import Chip from '@mui/material/Chip';




const Genres = ({
    type = "movie",
    selectedGenres,
    setSelectedGenres,
    setGenres,
    genres,
    setPage }) => {


    const handleClick = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);


    }

    const handleDelete = (genre) => {
        setSelectedGenres
            (selectedGenres.filter((selected) => selected.id !== genre.id));

        setGenres([...genres, genre]);
        setPage(1);
    }

    const fetchGenres = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);

        setGenres(data.genres);


    };

    useEffect(() => {

       


        fetchGenres();

       

       
    }, []);




    return (

        <div>



            {genres && genres.map((genre) => (<Chip
                label={genre.name}
                style={{ margin: '4px' }}
                clickable
                size="small"
                color="secondary"
                key={genre.id}
                onClick={() => handleClick(genre)}

            />))}

            {selectedGenres && selectedGenres.map((genre) => (<Chip
                label={genre.name}
                style={{ margin: '4px' }}
                clickable
                size="small"
                color="primary"
                key={genre.id}
                onDelete={() => handleDelete(genre)}
            
                variant="outlined"

            />))}

        </div>
    );
}

export default Genres; 