import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export function SliceImage ({images}){
    if(!images || Object.keys(images).length === 0)return;
    const imagesData = Object.values(images);
    
    return (
        <Carousel>
            {
                imagesData?.length > 0 && imagesData.map(img => {
                   return (
                    <div key={img}>
                        <img src={img}  />
                    </div>
                   )
                })
            }
        </Carousel>
    )   
}