import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components'
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

const Fullpost=()=> {
    let {id}=useParams()
    const [fullpost,setfullpost]=useState({})
    useEffect(()=>{
axios.get(`http://localhost:3001/post/byid/${id}`).then((res)=>{
    setfullpost(res.data)

})
    

},[])

  return (
    <>
      <Postmaindiv >
            <PostHeader>
              <PostTitle >{fullpost.Title}</PostTitle>
            </PostHeader>
            <div className='Postbody'>
              <PostDescription>{fullpost.Description}</PostDescription>
            </div>
            <div className='PostFooter'>
              <div className='Postuser'>{fullpost.Price}</div>
              <div className='Posttime'>{fullpost.CreatedAt}</div>
            </div>
          </Postmaindiv>
    </>
  )
}

export default Fullpost
