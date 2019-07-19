import React, { Fragment, useContext, useEffect, useState } from "react";
import PokemonContext from "../../context/PokemonContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Pagination from "../pokemon/PokemonPagination";

const ItemEntries = () => {
  const pokemonContext = useContext(PokemonContext);

  const { items, getItems } = pokemonContext;

  // const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);

  useEffect(() => {
    getItems();

    // eslint-disable-next-line
  }, []);

  // const SearchOnChange = e => {
  //   setSearch(e.target.value);
  // };

  // // filter search
  // const filteredItem = items.filter(item => {
  //   return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  // });

  //get the index of the last post
  const indexOfLastPost = currentPage * postsPerPage;
  //get the index of the first post
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // firstpost = 0 , lastposts = 10
  // 10 20
  const currentItems = items.slice(indexOfFirstPost, indexOfLastPost);
  //change content from each pagenumber
  const paginates = pageNumber => setCurrentPage(pageNumber);

  return (
    <Fragment>
      <div className='container '>
        <CenterDiv className='row'>
          <div className='grid-4'>
            {currentItems.map(name => (
              <div className='card' key={name.url}>
                <div className='col-s10'>
                  <Link to={`/items/${name.name}`}>
                    <PokemonImage
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${
                        name.name
                      }.png`}
                      alt='items'
                    />
                  </Link>

                  <TextWrap>{name.name}</TextWrap>
                </div>
              </div>
            ))}
          </div>
        </CenterDiv>
        <Pagination postsPerPage={postsPerPage} totalPosts={items.length} paginates={paginates} />
      </div>
    </Fragment>
  );
};

let PokemonImage = styled.img`
  width: 30%;
  height: auto;

  &:hover {
    transform: translate(0, -5px);
    cursor: pointer;
  }
`;

let CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

let TextWrap = styled.h4`
  text-transform: uppercase;
  font-size: 1em;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 5px;
  color: black;
`;

export default ItemEntries;
