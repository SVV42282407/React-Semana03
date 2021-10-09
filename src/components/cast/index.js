import React from 'react';
import './index.css';

const Cast = (props) => {
    const { actor, character, cast_img } = props;
    let img = process.env.PUBLIC_URL + {cast_img};
    return (
        <div className="cast-item">
            <div className="cast-image">
                <img src={img} alt={actor} />
            </div>
            <div className="cast-content">
                <div className="cast-actor">
                    {actor}
                </div>
                <div className="cast-character">
                    as {character}
                </div>
            </div>
        </div>
    )
}

export default Cast;