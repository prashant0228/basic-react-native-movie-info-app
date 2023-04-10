import { useState, useEffect } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList
} from "react-native";

const MovieTile = ({ movie }) => {
  return (
    <FlatList
      data={[movie]}
      renderItem={({ item }) => (
        <>
          <Image style={styles.poster} source={{ uri: item.Poster }} />
          <Text>{item.Title}</Text>
          <Text>{item.Year}</Text>
        </>
      )}
      keyExtractor={(item) => item.imdbID}
    />
  );
};

const styles = StyleSheet.create({
  poster: {
    width: 100,
    height: 150
  }
});

export default MovieTile;
