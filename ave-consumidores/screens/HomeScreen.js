import {React, useState, useEffect} from "react";
import { View, Text, StyleSheet,TouchableOpacity, FlatList } from "react-native";
import axios from 'axios';

const HomeScreen = ()=> {
    // Hook
    const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://10.0.2.2:4000/productos');
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

    return (
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <View>
              <Text>{item.nombre}</Text>
              <Text>{item.descripcion}</Text>
            </View>
          )}
          keyExtractor={(item) => item._id.toString()}
        />
      );
    };

export default HomeScreen;