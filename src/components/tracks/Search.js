import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../../context";

const Search = () => {
  //Hooks: use state and other React features without writing a class
  const [state, setState] = useContext(Context);
  const [userInput, setUserInput] = useState("");
  const [trackTitle, setTrackTitle] = useState("");

  //Effect Hook: perform side effects in function components; runs after every render
  useEffect( () => {
    //Axios:promise-based -> async and await
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      ).then(res => {
          let track_list = res.data.message.body.track_list;
          setState({ track_list: track_list });
        })
        .catch(err => console.log(err));
  }, [trackTitle]);  //only fetch if trackTitle changes

  const findTrack = e => {
    e.preventDefault();
    setTrackTitle(userInput);
  };

  const onChange = e => {
    setUserInput(e.target.value);
  };

  return(
    <div className="header">
      <div className="input-icon-wrap animated fadeIn">
        <span className="input-icon">
          <i className="fas fa-search"></i>
        </span>
        <form onSubmit={findTrack} className="search-form">
          <input
            type="text"
            className="input-with-icon"
            id="form-name"
            name="userInput"
            autoComplete="off"
            placeholder="search for music, albums, artists ..."
            value={userInput}
            onChange={onChange}
          />
        </form>
      </div>
    </div>
  );
};

export default Search;