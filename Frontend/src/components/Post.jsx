//this component is showing all post in the database we have
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom'

const Post = () => {
  //writing some styled-components css for this component
  const Postmaindiv = styled.div`
    width:500px;
    margin:10px auto;
    background-color:whitesmoke;
    display:center;
    `
  const PostHeader = styled.div`
    background-color: black;
    `
  const PostTitle = styled.div`
    background-color: lightblue;
    color: white;

    `

  const PostDescription = styled.div`
    background-color: lightyellow;
    height:4rem;
    color: black;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;

    `
  const [allpost, setallpost] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/post").then((res) => {
      setallpost(res.data)
    })


  }, [])
  const navigate=useNavigate();
  
  return (
    <>{
      allpost.map((value, key) => {
        return (
          <Postmaindiv onClick={()=>{navigate(`/post/${value.Post_ID}`)}} key={key}>
            <PostHeader>
              <PostTitle >{value.Title}</PostTitle>
            </PostHeader>
            <div className='Postbody'>
              <PostDescription>{value.Description}</PostDescription>
            </div>
            <div className='PostFooter'>
              <div className='Postuser'>{value.Price}</div>
              <div className='Posttime'>{value.CreatedAt}</div>
            </div>
          </Postmaindiv>
        )
      })
    }



    </>
  );
}

export default Post
