import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const contactsData = [
  { id: 1, name: 'John Doe', company: 'Financial Services Inc.' },
  { id: 2, name: 'Jane Smith', company: 'Creative Consulting' },
  { id: 3, name: 'Anna Haro', company: 'aaaaaaaaaa'}
];

const ContactScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(contactsData);
  
  const renderContact = ({ item }) => (
    <View style={styles.contactContainer}>
      <Text style={styles.contactName}>{item.name}</Text>
      <Text style={styles.contactCompany}>{item.company}</Text>
    </View>
  );

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filteredData = contactsData.filter(contact =>
      contact.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredContacts(filteredData);
  };
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
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
  contactCompany: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ContactScreen;
