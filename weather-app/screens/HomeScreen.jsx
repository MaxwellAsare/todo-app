import {
  View,
  Text,
  StatusBar,
  Image,
  SafeAreaView,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { MagnifyingGlassIcon,CalendarDaysIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";
import { MaterialIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);

  const handleLocation = () => {
    console.log("location", loc);
  };
  return (
    <View style={tw`flex-1 relative `}>
      <SafeAreaView style={tw`flex flex-1`}>
        <View style={tw`mx-4 relative z-50 `}>
          <View style={tw`flex-row justify-end items-center rounded-full `}>
            {showSearch ? (
              <TextInput
                placeholder="Search city"
                placeholderTextColor={"gray"}
                style={tw`border-2 border-gray-500 rounded-full flex-1 px-3 py-4 `}
              />
            ) : null}

            <Pressable
              style={tw`bg-gray-300 rounded-full p-3 -ml-13`}
              onPress={() => toggleSearch(!showSearch)}
            >
              <MagnifyingGlassIcon size={25} color="white" />
            </Pressable>
          </View>

          {locations.length > 0 && showSearch ? (
            <View style={tw`absolute w-full bg-gray-500 top-16 rounded-3xl`}>
              {locations.map((loc, index) => {
                return (
                  <Pressable
                    onPress={() => handleLocation(loc)}
                    key={index}
                    style={tw`flex-row  gap-4 items-center border-0 p-3 px-4 mb-1 border-b-2 border-b-gray-300 `}
                  >
                    <MapPinIcon size="20" color="white" />
                    <Text style={tw`text-white text-lg ml-2`}>
                      {" "}
                      London,United Kingdom
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          ) : null}
        </View>
        <View style={tw` mx-4 flex  flex-1 justify-around mb-80 `}>
          <Text style={tw`text-black text-center text-3xl font-bold`}>
            London,
            <Text style={tw`text-lg font-semibold text-gray-900`}>
              United Kingdom
            </Text>
          </Text>
          {/* weather image */}
          <View style={tw`flex-row justify-center `}>
            <Image
             source={require("../assets/images/suuny.png")} 
             style={tw`mt-4`}
             />
        
          </View>
          <View style={tw`my-14`}>
            <Text style={tw`text-center font-bold text-black text-6xl ml-5`}>
              23&#176;
            </Text>
            <Text style={tw`text-center text-black text-xl tracking-widest`}>
              Sunny
            </Text>
          </View>
          <View style={tw`flex-row justify-between mx-4`}>
            <View style={tw`flex-row space-x-2 items-center`}>
              <MaterialIcons name="person-outline" size={25} />
              <Text style={tw`text-black font-semibold text-base`}>22km</Text>
            </View>
            <View style={tw`flex-row space-x-2 items-center`}>
              <MaterialIcons name="info-outline" size={25} />
              <Text style={tw`text-black font-semibold text-base`}>23%</Text>
            </View>
            <View style={tw`flex-row space-x-2 items-center`}>
              <MaterialIcons name="help-outline" size={25} />
              <Text style={tw`text-black font-semibold text-base`}>
                6:05 AM
              </Text>
            </View>
          </View>
        </View>
        <View style={tw`mb-2 space-y-3`}>
<View style={tw`flex-row items-center mx-3 gap-3`}>
<CalendarDaysIcon size={21} />
<Text style={tw`text-black text-base`}>Daily forecast</Text>
</View>
        </View>
        <ScrollView
        horizontal
        contentContainerStyle={{paddingHorizontal:15}}
        showsHorizontalScrollIndicator={false}
        >
<View style={tw`flex justify-center items-center w-24 rounded-3xl py-1`}>
<Image
source={require('../assets/images/rainny.png')}
style={tw`h-11 w-11`}

/>
<Text style={tw`text-lg`}>Monday</Text>
<Text style={tw`text-xl font-semibold`}>13&#176;</Text>
</View>
<View style={tw`flex justify-center items-center w-24 rounded-3xl py-1`}>
<Image
source={require('../assets/images/rainny.png')}
style={tw`h-11 w-11`}

/>
<Text style={tw`text-lg`}>Monday</Text>
<Text style={tw`text-xl font-semibold`}>13&#176;</Text>
</View>
<View style={tw`flex justify-center items-center w-24 rounded-3xl py-1`}>
<Image
source={require('../assets/images/rainny.png')}
style={tw`h-11 w-11`}

/>
<Text style={tw`text-lg`}>Monday</Text>
<Text style={tw`text-xl font-semibold`}>13&#176;</Text>
</View>
<View style={tw`flex justify-center items-center w-24 rounded-3xl py-1`}>
<Image
source={require('../assets/images/rainny.png')}
style={tw`h-11 w-11`}

/>
<Text style={tw`text-lg`}>Monday</Text>
<Text style={tw`text-xl font-semibold`}>13&#176;</Text>
</View>


        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
