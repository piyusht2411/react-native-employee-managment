import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useEffect, useState } from 'react'
import { useGetEmployeesQuery } from '../../services/employee'
import { Employee } from '../../type';
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const employees = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [input, setInput] = useState("");
    const router = useRouter();
    const {data=[], isSuccess, isError, isLoading} = useGetEmployeesQuery();
    setEmployees(data)
    console.log(data);


  //   useEffect((isError: any) => {
  //     if (isError) {
  //         return (
  //             <View>
  //                 <Text>{isError}</Text>
  //             </View>
  //         )
  //     }
  // }, [data])

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Ionicons
          onPress={() => router.back()}
          style={{ marginLeft: 10 }}
          name="arrow-back"
          size={24}
          color="black"
        />
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 7,
            gap: 10,
            backgroundColor: "white",
            borderRadius: 3,
            height: 40,
            flex: 1,
          }}
        >
          <AntDesign
            style={{ marginLeft: 10 }}
            name="search1"
            size={20}
            color="black"
          />
          <TextInput
            value={input}
            onChangeText={(text) => setInput(text)}
            style={{ flex: 1 }}
            placeholder="Search"
          />

          {employees.length > 0 && (
            <View>
              <Pressable onPress={() => router.push("/(home)/adddetails")}>
                <AntDesign name="pluscircle" size={30} color="#0072b1" />
              </Pressable>
            </View>
          )}
        </Pressable>
      </View>

      {/* {employees.length > 0 ? (
        <SearchResults data={employees} input={input} setInput={setInput} />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>No Data</Text>
          <Text>Press on the plus button and add your Employee</Text>
          <Pressable onPress={() => router.push("/(home)/adddetails")}>
            <AntDesign
              style={{ marginTop: 30 }}
              name="pluscircle"
              size={24}
              color="black"
            />
          </Pressable>
        </View>
      )} */}
    </View>
  );
};

export default employees;