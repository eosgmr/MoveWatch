
import { img_300, unavailable } from './../../config/config';
import "./CardContent.css";
import ContentModal from './../contentModal/ContentModal';

const CardContent = ({
    id,
    poster,
    title,
    release,
    media_type,
    vote_average,
    overview}) => {


    return (
        <ContentModal overview={overview} title={title} poster={poster} vote={vote_average}  >

            <img className="poster" src={poster ? `${img_300}/${poster} ` : unavailable} alt={title} />
            <b className='title'>{title}</b>
            <span className='type'>Type: {media_type === "movie" ? "Movie" : 'Tv Serie'}</span>
            <span className='date'>Release: {release}</span>
            <span className='vote'>⭐{vote_average}</span>
           
        </ContentModal>
    );


}
export default CardContent;