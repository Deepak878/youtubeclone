import axios from "axios";
import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";
import { useState, useEffect } from "react";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const Search = () => {
  const [videos, setVideos] = useState([]);
  console.log(useLocation());
  const query = useLocation().search;
  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/search${query}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [query]);
  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Search;
