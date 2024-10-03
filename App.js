import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Switch, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [theme, setTheme] = useState('Claro');
  const [fontSize, setFontSize] = useState(16);
  const [nightMode, setNightMode] = useState(false);

  
  useEffect(() => {
    if (theme === 'Escuro') {
      setNightMode(true);
    } else {
      setNightMode(false);
    }
  }, [theme]);

  
  const resetPreferences = () => {
    setTheme('Claro');
    setFontSize(16);
    setNightMode(false);
    Alert.alert("Preferências resetadas para o padrão!");
  };

  
  const isDarkMode = nightMode || theme === 'Escuro';
  const dynamicStyles = {
    backgroundColor: isDarkMode ? '#121212' : '#f9f9f9',
    color: isDarkMode ? '#e0e0e0' : '#333',
  };

  return (
    <View style={[styles.container, { backgroundColor: dynamicStyles.backgroundColor }]}>
      <Text style={[styles.title, { color: dynamicStyles.color }]}>Configurações de Preferências</Text>

      {}
      <View style={[styles.box, { borderColor: dynamicStyles.color }]}>
        <Text style={[styles.label, { color: dynamicStyles.color }]}>Escolha o Tema:</Text>
        <Picker
          selectedValue={theme}
          style={[styles.picker, { color: dynamicStyles.color }]}
          onValueChange={(itemValue) => setTheme(itemValue)}
        >
          <Picker.Item label="Claro" value="Claro" />
          <Picker.Item label="Escuro" value="Escuro" />
          <Picker.Item label="Automático" value="Automático" />
        </Picker>
      </View>

      {}
      <View style={[styles.box, { borderColor: dynamicStyles.color }]}>
        <Text style={[styles.label, { color: dynamicStyles.color }]}>
          Tamanho da Fonte: {fontSize}
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={12}
          maximumValue={30}
          step={1}
          value={fontSize}
          onValueChange={(value) => setFontSize(value)}
          minimumTrackTintColor={isDarkMode ? "#bb86fc" : "#6200ee"}
          maximumTrackTintColor={isDarkMode ? "#444" : "#ccc"}
          thumbTintColor={isDarkMode ? "#fff" : "#6200ee"}
        />
      </View>

      {}
      <View style={[styles.box, { borderColor: dynamicStyles.color }]}>
        <View style={styles.switchContainer}>
          <Text style={[styles.label, { color: dynamicStyles.color }]}>
            Modo Noturno: {nightMode ? 'Ativado' : 'Desativado'}
          </Text>
          <Switch
            value={nightMode}
            onValueChange={(value) => setNightMode(value)}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={nightMode ? "#f5dd4b" : "#f4f3f4"}
          />
        </View>
      </View>

      {}
      <Button title="Resetar Preferências" onPress={resetPreferences} color="#ff5c5c" />

      {}
      <View style={styles.previewContainer}>
        <Text style={[styles.previewText, { fontSize, color: dynamicStyles.color }]}>
          Arthur e o melhor do CS2
        </Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  box: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    borderColor: '#ccc',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
    marginVertical: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  previewContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  previewText: {
    textAlign: 'center',
  },
});






