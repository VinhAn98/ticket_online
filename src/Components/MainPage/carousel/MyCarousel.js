import { Carousel } from 'antd';
import './MyCarousel.css';
const contentStyle = {
    height: '600px',
    color: '#fff',
    lineHeight: '300px',
    textAlign: 'center',
    background: '#364d79',
};

const MyCarousel = () => {
    return(
        <Carousel className="myCarousel" autoplay>
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    );
};

export default MyCarousel;