import React from 'react';

import Navbar from './Navbar';

import styled from 'styled-components';
import ItemCardMyListing from './ItemCardMyListing';
import {Button} from 'react-bootstrap';


const MyListing = () => {
    return(
        <div>
            <h1>This is MyListing</h1>
            <Navbar/>

            <Button href='http://localhost:3000/createListing' className="text-center btn-lg .bg-warning" >Create Listing</Button>
            
            <ItemCardMyListing></ItemCardMyListing>
            
            
            
        </div>
    )
};

export default MyListing;

// const Container = styled.div`
//     margin: 10px 10% 10px 10%;
//     border: black solid 3px;
//     height: 60vh;
//     padding: 2px;
//     display: flex;
//     flex-direction: column;
    
// `


const CreateButton = styled.a`
    width: 200px;
    height: 100px;
    border: black solid 1px;
    border-radius: 1px;
    text-decoration: none;
    background-color: #f07736;
    color: black;
    font-family: Poppin;
    font-size: 1rem;
    &:hover{
        color: white;
    }
        
`


// const Buttons = styled.a`
//     width: 200px;
//     height: 100px;
//     border: black solid 1px;
//     border-radius: 1px;
//     text-decoration: none;
//     background-color: #f07736;
//     color: black;
//     font-family: Poppin;
//     font-size: 1rem;
//     &:hover{
//         color: white;
//     }
        
// `

