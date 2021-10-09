import styled from "styled-components";

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.5;
    padding: 40px;
    item-header {
        display: flex;
        flex-direction: row;
        /*justify-content: center;
        align-content: center;*/
        font-weight: bold;
    }
    item-header-icon{
        display: flex;
    }
    
    item-header-title{
        display: flex;
        padding-left: 20px;
        align-items: center;
        font-size: 1.2em;
    }
    
    item-body {
        display: flex;
        flex-direction: row;
        font-size: 0.7em;
        padding-top: 20px;
        padding-bottom: 20px;
    }

@media screen and (max-width: 769px) {
    width: 100%;
}
`