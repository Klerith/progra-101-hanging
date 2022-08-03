import image0 from '../assets/0.png';
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import image6 from '../assets/6.png';
import image7 from '../assets/7.png';
import image8 from '../assets/8.png';
import image9 from '../assets/9.png';

const images: string[] = [
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
];

interface Props {
    imageNumber: number;
}


export function HangImage( { imageNumber }: Props ) {

    if ( imageNumber >= 9 ) {
        imageNumber = 9;
    }


    return (
        <img 
            src={ images[imageNumber] } 
            alt="Hang image" 
            style={{ width: 250 }}
        />
    ); // JSX Element

}
