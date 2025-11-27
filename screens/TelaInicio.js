import React, { useState } from "react";
import { FlatList, StyleSheet, View } from 'react-native';
import NoticiaCard from '../components/NoticiaCard';
import api from '../services/api';

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
            console.error('Erro ao consultar noticias:', error);
        }
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', fetchNoticias);
        return unsubscribe;
    }, [navigation]);

    const handlePress = (noticia) => {
        navigation.navigate('Noticia', { noticia })
    };

    return (
        <View style={styles.container}>
            <FlatList style={{ flex: 1, width: '100%' }} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }} data={noticias} keyExtractor={(item) => item.uri} renderItem={({ item }) => (
                //<Text style={{ fontSize: 18, padding: 10 }}>{item.nome}</Text>
                <NoticiaCard noticia={item} onPress={() => handlePress(item)} />
            )}
            />
        </View>
    );

}

export default TelaInicio;
