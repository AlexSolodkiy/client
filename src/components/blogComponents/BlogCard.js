
import '../blogComponents/BlogCard.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';

export const BlogCard =({
    title,
    description,
    liked,
    likePost,
    deletePost
}) =>{


    const heartFill = liked ? 'crimson':'black';
   
    // localStorage.setItem('heart',JSON.stringify(fillHeart))
    return(
        <div  className="post">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>
                <FavoriteIcon style={{fill:heartFill}} onClick={likePost}/>
                
            </p>
            <button className='deletePost' onClick={() => {deletePost()}}>
                <DeleteIcon className='trash'/>
            </button>
         </div>
    )
}