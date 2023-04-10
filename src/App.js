import React, { useState, useEffect } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList
} from "react-native";
import MovieTile from "./movieTile";

const api_url = "https://www.omdbapi.com?apikey=34c87ba2";

function Link(props) {
  return <Text {...props} role="link" style={[styles.link, props.style]} />;
}

function App() {
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const fetchMovies = async (title) => {
    const response = await fetch(`${api_url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    fetchMovies("spiderman");
  }, []);
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Text style={styles.title}>Movie Dictionary</Text>
      </View>
      <Text style={styles.text}>
        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <button onClick={() => fetchMovies(title)}>find</button>
      </Text>
      <View>
        {movies?.length > 0 ? (
          <View>
            {movies.map((movie) => {
              return <MovieTile movie={movie} />;
            })}
          </View>
        ) : (
          <View>
            <Text>No movies found</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
    flex: 1 // Add this to make the FlatList scrollable
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 2
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    padding: 8,
    textAlign: "center",
    textTransform: "uppercase"
  }
});

export default App;
