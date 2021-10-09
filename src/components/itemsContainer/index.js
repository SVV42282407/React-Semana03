import React, { useState, useEffect } from 'react';
import { Item } from './style';

const Container = (props) => {
    const { title, img, content, r } = props;
    let image = process.env.PUBLIC_URL + img;
    return (
        <Item>
            <item-header>
                <item-header-icon>
                    <img src={image} width="50" height="50" alt="Hola"/>
                </item-header-icon>
                <item-header-title>{title}</item-header-title>
            </item-header>
            <item-body>
                {content}
            </item-body>
        </Item>
    )
}

export default Container;