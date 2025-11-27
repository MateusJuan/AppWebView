import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { Ionicons } from "@expo/vector-icons";

const TelaNoticia = ({ route, navigation }) => {
  const { noticia } = route.params;

  return (
    <View style={{ flex: 1 }}>
      {/* Header personalizado */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notícia</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* WebView com o link da notícia */}
      <WebView source={{ uri: noticia.url }} style={{ flex: 1 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#fff",
    elevation: 4,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default TelaNoticia;
