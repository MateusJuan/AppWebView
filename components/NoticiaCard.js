import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';

const NoticiaCard = ({ noticia, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      
      {noticia.image ? (
        <Image
          source={{ uri: noticia.image }}
          style={styles.image}
        />
      ) : (
        <View style={styles.noImage}>
          <Text style={{ color: "#777" }}>Sem imagem</Text>
        </View>
      )}

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {noticia.title}
        </Text>

        <Text style={styles.body} numberOfLines={3}>
          {noticia.body || "Clique para ler mais..."}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: "100%",
    height: 180,
  },
  noImage: {
    width: "100%",
    height: 180,
    backgroundColor: "#EEE",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
  },
  body: {
    fontSize: 14,
    color: "#555",
  },
});

export default NoticiaCard;
