import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import NoticiaCard from "../components/NoticiaCard";
import api from "../services/api";

const TelaInicio = ({ navigation }) => {
  const [noticias, setNoticias] = useState([]);

  const fetchNoticias = async () => {
    try {
      const response = await api.post("article/getArticles", {
        lang: "por",
        resultType: "articles",
        articlesCount: 20,
      });
      setNoticias(response.data.articles.results);
    } catch (error) {
      console.error("Erro ao buscar notícias:", error);
    }
  };

  useEffect(() => {
    fetchNoticias();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={noticias}
        keyExtractor={(item) => item.uri}
        renderItem={({ item }) => (
          <NoticiaCard
            noticia={item}
            onPress={() => navigation.navigate("Noticia", { noticia: item })}
          />
        )}
      />
    </View>
  );
};

export default TelaInicio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
