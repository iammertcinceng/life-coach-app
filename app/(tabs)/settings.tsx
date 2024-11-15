import suggestionsData, { TopicData } from "@/data/TRsuggestions";
import { SetStateAction, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const users = [
  { name: 'John' },
  { name: 'Jane' },
  { name: 'Doe' },
  { name: 'Alice' },
  { name: 'Bob' }
];

export default function Settings() {
  // const [selectedCategories, setSelectedCategories] = useState();

  // const HandleSelect = (category: any) => {
  //   setSelectedCategories(category);
  // };
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  
  const handleSelect = (name: string) => {
    // Seçilen kullanıcıyı selectedArray'e ekle ve listeyi güncelle
    if (!selectedUsers.includes(name)) {
      setSelectedUsers((prevSelected) => [...prevSelected, name]);
    }
  };

  const handleDeselect = (name: string) => {
    // Seçilen kullanıcıyı deselect et (listeden çıkar)
    setSelectedUsers((prevSelected) => prevSelected.filter((user) => user !== name));
  };

  return (
    <View style={{ flexDirection: 'row', padding: 10, marginTop: 50}}>
      {/* Seçilenler */}
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Seçilenler:</Text>
        {selectedUsers.map((name, index) => (
          <TouchableOpacity key={index} onPress={() => handleDeselect(name)}>
            <Text style={{ fontSize: 18, marginBottom: 5, color: 'red' }}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Seçilmeyen Kullanıcılar */}
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Kullanıcılar:</Text>
        {users
          .map((user, index) => (
            <TouchableOpacity key={index} onPress={() => handleSelect(user.name)}>
              <Text
                style={{
                  fontSize: 18,
                  marginBottom: 5,
                  color: selectedUsers.includes(user.name) ? 'red' : 'black',
                }}
              >
                {user.name}
              </Text>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};



    // <SafeAreaView>
    //   <View>
    //     <Text>Ayarlar</Text>
    //     {Object.values(suggestionsData).map((category) => (
    //       <View>
    //         <TouchableOpacity onPress={() => HandleSelect(category)}>
    //           <Text>{category.name}</Text>
    //           <Text>{selectedCategories}</Text>
    //         </TouchableOpacity>
    //       </View>
    //     ))}
    //   </View>
    // </SafeAreaView>