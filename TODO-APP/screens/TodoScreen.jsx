import { View, Text, TextInput, Pressable, FlatList } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";

const TodoScreen = () => {
  //init state
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const renderTodos = ({ item, index }) => {
    return (
      <View
        style={tw`bg-blue-500 rounded-lg  px-4 py-5 mb-5 flex-row justify-between items-center`}
      >
        <Text style={tw`text-white text-xl`}>{item.title}</Text>
        <View style={tw`flex-row gap-5`}>
          <MaterialIcons
            name="material"
            size={30}
            color="white"
            onPress={() => handleEditTodo(item)}
          />
          <MaterialIcons
            name="delete"
            size={30}
            color="white"
            onPress={() => handleDeleteTodo(item.id)}
          />
        </View>
      </View>
    );
  };
  //handle Add todo
  const handleAddTodo = () => {
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo("");
  };
  const handleDeleteTodo = (id) => {
    // structure of a single item
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
  // edit todo
  const handleEditTodo = (todo) => {
    setEditTodo(todo);
    setTodo(todo.title);
  };
  // update todo

  const handleUpdateTodo = () => {
    setTodoList(
      todoList.map((item) => {
        if(item.id === editTodo.id) {
          
          return {...item, title : todo }
        };
        return item;
      })
    );
    setEditTodo(null);
    setTodo("");
  };

  return (
    <View>
      <TextInput
        style={tw`border-2 border-blue-400 rounded-lg py-4 px-2 `}
        placeholder="Add a task"
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
      />
      {editTodo ? (
        <Pressable
          style={tw`bg-black rounded-lg py-4 my-10 items-center `}
          onPress={() => handleUpdateTodo()}
        >
          <Text style={tw`text-white font-bold text-lg`}>Save</Text>
        </Pressable>
      ) : (
        <Pressable
          style={tw`bg-black rounded-lg py-4 my-10 items-center `}
          onPress={() => handleAddTodo()}
        >
          <Text style={tw`text-white font-bold text-lg`}>Add</Text>
        </Pressable>
      )}

      <FlatList data={todoList} renderItem={renderTodos} />
    </View>
  );
};

export default TodoScreen;
