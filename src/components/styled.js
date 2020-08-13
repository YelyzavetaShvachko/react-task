import styled from 'styled-components';
import img from '../assets/img/background.jpg';

export const AddMovie = styled.button`
    position: absolute;
    right: 0;
    width: 182px;
    padding: 10px 0;
    color: #e50914;
    background-color: rgba(76, 74, 74, 0.7);
    font-size: 18px;
`;

export const CategoriesWrapper = styled.div`
    display: flex;
`;

export const Category = styled.div`
    padding: 10px;
    color: #ffffff;
    font-size: 16px;
`;
export const Title = styled.h1`
    color: #ffffff;
    margin-bottom: 30px;
`;

export const SearchForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;    
`;

export const SearchInput = styled.input`
    width: 73%;
    background-color: #1d1c1c;
    padding: 16px 10px;
    opacity: 0.9;
    font-size: 18px;
`;

export const SearchBtn = styled.button`
    width: 25%;
    padding: 15px 0;
    font-size: 18px;
    background-color: #e50914;
    color: #ffffff;
`;

export const Footer = styled.footer`
    background-color: #424242;
    padding: 25px;
`;

export const Background = styled.div`
    position: absolute;
    width: 100vw;
    height: 450px;
    background-image: url(${img});
    z-index: -1;
    background-size: cover;
    &:before {
    content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6787902661064426) 0%, rgba(0,0,0,0.7) 100%);
        opacity: .9; 
  }
`;

export const MovieCard = styled.div`
    background-color: #232323;
    width: 30%;
    margin-bottom: 50px;
    color: #a2a2a2;
`;

export const Image = styled.img`
    width: 100%;
    height: 320px;
    margin-bottom: 10px;
    @media (min-width: 768px) {
        height: 380px;
  }
    @media (min-width: 1200px) {
        height: 520px;
  }
`;

export const Year = styled.span`
    border: 1px solid #555555;
    padding: 0 10px;
    border-radius: 5px;
    position: absolute;
    top: 35px;
    right: 0;
`;

export const DescriptionWrapper = styled.span`
    position: relative;
    font-size: 16px;
`;

export const Genre = styled.p`
    font-size: 14px;
`;

export const MoviesSection = styled.section`
    background-color: #232323;  
`;

export const Navigation = styled.nav`
    border-bottom: 2px solid #4c4c4c;
    position:relative;
    display: flex;
    justify-content: space-between;

    &:after {
        content: "";
        display: block;
        height: 1px;
        width: 100%;
        background: #000000;
        position: absolute;
        bottom: -4px;
  }
`;

export const MoviesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-between; 
`;

export const SearchResults = styled.h3`
    color: #ffffff;
    padding: 22px 0;
    font-size: 16px;
`;

export const MoviesAmount = styled.span`
    color: #ffffff;
    font-family: 'Arial', sans-serif;
    font-weight: 600;
`;

export const SortingWrapper = styled.div`
    padding: 10px;
    color: #ffffff;
    font-size: 16px;
    display: flex;
    align-items: center;
    &:after {
        content: '\A';
        color: red;
        right: 0;
        position: absolute;
        content: '';
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 4px 6px 4px 0;
        border-color: transparent red transparent transparent;  
        display: inline-block;
        vertical-align: middle;
        transform: rotate(270deg);
}
`;

export const SortingTitle = styled.span`
    color: #505050; 
    margin-right: 20px;
`;

export const SortingValue = styled.select`
    background: #232323;
    border: none;
    color: #ffffff;
    appearance: none;
    padding-right: 8px;
`;

export const OoopsText = styled.h2`
    width: 90%;
    margin: 0 auto;
    padding: 70px 20px;
    background: #1d1d1d;
    color: #e40909;
    margin-bottom: 8px;
    text-align: center;
`;
