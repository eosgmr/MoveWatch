import { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CardContent from "../../components/cardContent/CardContent";
import CustomPagination from "../../components/pagination/CustomPagination";

const Search = () => {


    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });


    const [type, setType] = useState(0);
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [content, setContent] = useState();
    const [nrPage, setPageNumbers] = useState();



    const fetchSearch = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY
                }&language=en-US&query=${searchText}&page=${page}&include_adult=false`);

            setContent(data.results);
            setPageNumbers(data.total_pages);

        } catch (error) {
            console.log(error);
        }


    }


    useEffect(() => {

        window.scroll(0, 0);
        fetchSearch();
        // eslint-disable-next-line


    }, [type, page])

    return (

        <ThemeProvider theme={darkTheme}>
            <div style={{ display: 'flex' }}>

                <TextField style={{ flex: 1 }}
                    className='searchField'
                    label="Search"
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={fetchSearch}>
                </TextField>

               

            </div>

            <div>
                <Tabs
                    value={type}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={(event, newValue) => {
                        setType(newValue);
                        setPage(1);
                    }}
                    style={{ paddingBottom: 5 }}
                    aria-label="disabled tabs example"
                >
                    <Tab  label="Search Movies" />
                    <Tab  label="Search TV Series" />
                </Tabs>

            </div>




            <div className="trending">{
                content && content.map((c) => (

                    <CardContent
                        key={c.id}
                        id={c.id}
                        poster={c.poster_path}
                        title={c.title || c.name}
                        release={c.release_date || c.first_air_date}
                        media_type={type ? "tv" : "movie"}
                        vote_average={c.vote_average}
                        overview={c.overview}

                    />))
            }
                {searchText &&
                    !content &&
                    (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}

            </div>
            {nrPage > 1 && (<CustomPagination setPage={setPage} nrPage={nrPage} />)}

        </ThemeProvider>


    );

}
export default Search;