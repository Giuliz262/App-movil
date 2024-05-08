import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import contactsData from '../assets/contactsData.json'

const ContactScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    const filteredData = contactsData.filter(contact =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredContacts(filteredData);
  }, [searchQuery]);

  const renderContact = ({ item }) => (
    <View style={styles.contactContainer}>
      <Text style={styles.contactName}>{item && item.name}</Text>
      <Text style={styles.contactspeciality}>{item && item.specialty}</Text>
    </View>
  );
  

  const handleSearch = (text) => {
    setSearchQuery(text);
  };
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredContacts}
        renderItem={renderContact}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  contactContainer: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactspeciality: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ContactScreen;
