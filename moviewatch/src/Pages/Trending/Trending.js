import axios from "axios";
import { useEffect, useState } from "react";
import CardContent from "../../components/cardContent/CardContent";
import CustomPagination from "../../components/pagination/CustomPagination";
import './trending.css'


const Trending = () => {
    const [nrPage, pageNumbers]=useState();
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);



    useEffect(() => {

        const fetchTrending = async () => {

            const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
    
           // console.log(data);
            
    
            setContent(data.results);
            pageNumbers(data.total_pages);
        }
        fetchTrending();
    }, [page,nrPage]);


    return (

        <div>
            <span className="pageTitle">Trending</span>

            <div className="trending">{
                content && content.map((c) => (

                    <CardContent
                        key={c.id}
                        id={c.id}
                        poster={c.poster_path}
                        title={c.title || c.name}
                        release={c.release_date || c.first_air_date}
                        media_type={c.media_type}
                        vote_average={c.vote_average}
                        overview={c.overview}

                    />))

            }
            </div>
            {nrPage > 1 &&( <CustomPagination setPage={setPage} nrPage={nrPage} />)}
        </div>
    );

}
export default Trending;