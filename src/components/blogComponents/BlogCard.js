import { useState } from 'react'
import '../blogComponents/BlogCard.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';

export const BlogCard =(props) =>{
    const [count, setCount]=useState(0);
    const [fillHeart,setFillHeart] = useState(false);

    
    const heartFill = fillHeart ? 'crimson':'black';
    return(
        <div  className="post">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>
                <FavoriteIcon style={{fill:heartFill}} onClick={() =>setFillHeart(!fillHeart)}/>
                
                {count}
                
            </p>
            <button className='deletePost' onClick={() => {alert('a')}}>
                <DeleteIcon className='trash'/>
            </button>
         </div>
    )
}