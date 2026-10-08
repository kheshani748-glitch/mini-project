
import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* Profile */}
      <View style={styles.content}>

        {/* Profile Image */}
        <View style={styles.profileContainer}>
          <Image
            source={require('./../../assets/me.jpeg')}
            style={styles.profileImage}
          />

          {/* Green Check */}
          <View style={styles.check}>
            <Text style={styles.checkText}>✓</Text>
          </View>
        </View>

        {/* Line */}
        <View style={styles.line} />

        {/* Name */}
        <View style={styles.section}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>Kaveesha</Text>
        </View>

        {/* Email */}
        <View style={styles.section}>
          <Text style={styles.label}>Email</Text>

          <Text style={styles.value}>
            ✉  kaveesha@gmail.com
          </Text>
        </View>

        {/* Points */}
        <View style={styles.section}>
          <Text style={styles.label}>Points</Text>

          <Text style={styles.value}>
            ★  0
          </Text>
        </View>

      </View>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>‹</Text>
      </TouchableOpacity>
      

      {/* Plus Button */}
      <TouchableOpacity
        style={styles.plusButton}
        onPress={() => alert('Add button clicked')}
      >
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  header: {
    height: 55,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  content: {
    padding: 20,
  },

  profileContainer: {
    alignSelf: 'center',
    position: 'relative',
    marginTop: 15,
    marginBottom: 10,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#eee',
  },

  check: {
    position: 'absolute',
    right: 0,
    bottom: 5,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#00e676',
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  line: {
    height: 1,
    backgroundColor: '#222',
    marginTop: 5,
    marginBottom: 10,
  },

  section: {
    marginTop: 12,
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 5,
  },

  value: {
    fontSize: 14,
    color: '#333',
  },

  backButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backText: {
    color: '#fff',
    fontSize: 35,
    marginTop: -5,
  },

  plusButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  plusText: {
    color: '#fff',
    fontSize: 28,
  },

});
