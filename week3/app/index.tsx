import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList
} from 'react-native';

const DATA = [
  { id: '1', title: 'เล่นเกม' },
  { id: '2', title: 'ดูหนัง' },
  { id: '3', title: 'ฟังเพลง' },
  { id: '4', title: 'ไปเที่ยว' },
];
const DATA1 = [
  { id: '1', title: 'ไม่ชอบไอวี่' },
  { id: '2', title: 'ไอวี่กาม' },
  { id: '3', title: 'ไอวี่พาเพื่อนเสีย' },
  { id: '4', title: 'ไอวี่เป็นคนนิสัยไม่ดี' },
];

const App = () => {
  const renderItem = ({ item }: { item: { id: string; title: string } }) => (
    <View style={styles.itemContainer}>
      <View style={styles.dot} />
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>

      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: '#FF6B6B' }]}>
          <Text style={styles.boxText}>รหัส</Text>
        </View>
      <View style={[styles.box, { backgroundColor: '#4ECDC4' }]}>
        <Text style={styles.boxText}>คณะ</Text>
      </View>
      <View style={[styles.box, { backgroundColor: '#fd03c7' }]}>
        <Text style={styles.boxText}>สาขา</Text>
      </View>
    </View>

    <View style={styles.contentSection}>
      <Text style={styles.title}>บทเรียนวันนี้</Text>
      {Array.from({ length: 1 }).map((_, index) => (
        <View key={index} style={styles.listItem}>
          <Text>ชือ : ณัฐพนธ์ สมสุข</Text>
        </View>
      ))}

      {Array.from({ length: 1 }).map((_, index) => (
        <View key={index} style={styles.listItem}>
          <Text>ชือเล่น : มอส</Text>
        </View>
      ))}

      {Array.from({ length: 1 }).map((_, index) => (
        <View key={index} style={styles.listItem}>
          <Text>อีเมล : mostapon09@gmail.com</Text>
        </View>
      ))}
    </View>

    <View style={styles.contentSection}>
      <Text style={styles.title}>การศึกษา</Text>
      {Array.from({ length: 1 }).map((_, index) => (
        <View key={index} style={styles.listItem}>
          <Text>ระดับอุดมศึกษา : DPU</Text>
        </View>
      ))}

      {Array.from({ length: 1 }).map((_, index) => (
        <View key={index} style={styles.listItem}>
          <Text>สาขา : วิศวะคอม</Text>
        </View>
      ))}
    </View>

    <View style={styles.contentSection}>
      <Text style={styles.title}>ที่อยู่</Text>
      {Array.from({ length: 1 }).map((_, index) => (
        <View key={index} style={styles.listItem}>
          <Text>ที่อยู่ : 36/134 หมู่บ้านสหกรณ์ 3 ซอย 4/3 หมู่ 9 ต.บางพูด อ.ปากเกร็ด จ.นนทบุรี</Text>
        </View>
      ))}
    </View>

    <View style={styles.contentSection}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={<Text style={styles.headerFlatList}>ชอบ</Text>}
      />
    </View>

    <View style={styles.contentSection}>
      <FlatList
        data={DATA1}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={<Text style={styles.headerFlatList}>ไม่ชอบ</Text>}
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
  },
  header: {
    height: 100,
    backgroundColor: '#101111',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  box: {
    flex: 1,
    height: 100,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  boxText: {
    color: 'white',
    fontWeight: '600',
  },
  contentSection: {
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listItem: {
    backgroundColor: 'White',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    borderBottomWidth: 5,
    borderLeftColor: '#1A535C',
  },
  contentSectionFlatList: {
    marginTop: 20,
  },
  headerFlatList: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    backgroundColor: '#2238d7ff',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'blue',
    marginRight: 10,
  },
  itemText: {
    fontSize: 18,
  },
});

export default App;