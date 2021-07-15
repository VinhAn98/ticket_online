import React from 'react';
import { Carousel,Row,Col } from 'antd';
import {RightOutlined,LeftOutlined} from '@ant-design/icons'
import './MoviewCarousel.css';
import MovieList from "./MovieList";
const contentStyle = {

    height: '100vh',
    color: '#fff',
    lineHeight: '300px',
    textAlign: 'center',
    background: 'blue',
};


// nextArrow={<RightOutlined />} prevArrow={<LeftOutlined />}
const MovieCarousel = () => {

    return(
        <>
            <Row justify="center">
                <Col span={16}>

                    <Carousel className="myCarousel"  arrows   >
                        <div>
                            <MovieList  style={contentStyle}/>
                        </div>
                        <div>
                            <MovieList  style={contentStyle}/>
                        </div>

                    </Carousel>

                </Col>
            </Row>
        </>
    );
};

export default MovieCarousel;