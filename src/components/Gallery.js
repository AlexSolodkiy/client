import React, {useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import "./Gallery.css"
import  Img1 from '../../src/images/gallery/imggal1.jpg'
import  Img2 from '../../src/images/gallery/imggal2.jpg'
import  Img3 from '../../src/images/gallery/imggal3.jpg'
import  Img4 from '../../src/images/gallery/imggal4.jpg'
import  Img5 from '../../src/images/gallery/imggal5.jpg'
import  Img6 from '../../src/images/gallery/imggal6.jpg'
import  Img7 from '../../src/images/gallery/imggal7.jpg'
import  Img8 from '../../src/images/gallery/imggal8.jpg'
import  Img9 from '../../src/images/gallery/imggal9.jpg'
import  Img10 from '../../src/images/gallery/imggal10.jpg'
import  Img11 from '../../src/images/gallery/imggal11.jpg'
import  Img12 from '../../src/images/gallery/imggal12.jpg'
import  Img13 from '../../src/images/gallery/imggal13.jpg'
import  Img14 from '../../src/images/gallery/imggal14.jpg'
import  Img15 from '../../src/images/gallery/imggal15.jpg'
import  Img16 from '../../src/images/gallery/imggal16.jpg'
import  Img17 from '../../src/images/gallery/imggal17.jpg'
import  Img19 from '../../src/images/gallery/imggal19.jpg'
import  Img20 from '../../src/images/gallery/imggal20.jpg'


function Gallery (){

    let dataGallery= [
        {
            id:1,
            imgSrc:Img1
        },
        {
            id:2,
            imgSrc:Img2
        },
        {
            id:3,
            imgSrc:Img3
        },
        {
            id:4,
            imgSrc:Img4
        },
        {
            id:5,
            imgSrc:Img5
        },
        {
            id:6,
            imgSrc:Img6
        },
        {
            id:7,
            imgSrc:Img7
        },
        {
            id:8,
            imgSrc:Img8
        },
        {
            id:9,
            imgSrc:Img9
        },
        {
            id:10,
            imgSrc:Img10
        },
        {
            id:11,
            imgSrc:Img11
        },
        {
            id:12,
            imgSrc:Img12
        },
        {
            id:13,
            imgSrc:Img13
        },
        {
            id:14,
            imgSrc:Img14
        },
        {
            id:15,
            imgSrc:Img15
        },
        {
            id:16,
            imgSrc:Img16
        },
        {
            id:17,
            imgSrc:Img17
        },
        {
            id:19,
            imgSrc:Img19
        },
        {
            id:20,
            imgSrc:Img20
        },
    ]
    
    const [model,setModel] = useState(false);
    const [tempingSrc, setTempingSrc] = useState('');


    const getImg = (imgSrc) =>{
        setTempingSrc(imgSrc);
        setModel(true);

    }

    const addImgGallery = dataGallery.map((item,key) =>{
        return(
            <div className="gallery-blc" key={key} onClick ={() => getImg(item.imgSrc)}>
                <img src={item.imgSrc} alt="" />
            </div>
        )
    })

    return (
        <>
            <div className={model ? 'model open': 'model'}>
                <img src={tempingSrc} alt="" />
                <CloseIcon onClick = {() => setModel(false)} />
            </div>
            <div className='gallery-wrapp'>
                <div className='gallery-container'>
                    {addImgGallery}
                </div>
            </div>
        </>
    )
}

export default Gallery;