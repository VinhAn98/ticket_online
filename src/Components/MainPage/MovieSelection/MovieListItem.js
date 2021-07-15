import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;
// receive prop from movie List and show on card
const MovieListItem = ({name,minute,img}) => {

    return(
        <div>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={img} />}
            >
                <Meta title={name} description={minute} />
            </Card>
        </div>
    );
};

export default MovieListItem;