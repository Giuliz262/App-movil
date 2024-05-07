import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const contactsData = [
  { id: 1, name: 'John Doe', company: 'Financial Services Inc.' },
  { id: 2, name: 'Jane Smith', company: 'Creative Consulting' },
  { id: 3, name: 'Anna Haro', company: 'aaaaaaaaaa'}
];

const ContactScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const renderContact = ({ item }) => (
    <View style={styles.contactContainer}>
      <Text style={styles.contactName}>{item.name}</Text>
      <Text style={styles.contactCompany}>{item.company}</Text>
    </View>
  );
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FlatList
        data={contactsData}
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
  clock: {
    alignSelf: 'flex-end',
    marginTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ContactScreen;