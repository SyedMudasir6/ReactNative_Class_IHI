import React, { Children, useMemo, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ChildComponent from './childComponent';
import FirstScreen from './FirstScreen';
import SecondScreen from './secondScreen';
import NavigationContain from './NavigationContain';

const App = () =>{
  


  const [screen, setScreen] = useState(1)

  let screenview;
  if(screen==1){
    screenview = <FirstScreen setScreen={setScreen}/>
  }else{
    screenview = <SecondScreen setScreen={setScreen} />
  }



  return(
    <>
    {/* {screenview} */}
      <NavigationContain/>
    </>
    // <View style={styles.mainContainer}>
    //   <Text>Parent Component</Text>
    //   <Text>{value}</Text>
    //   <Text>{ValueMultiple}</Text>
    //   <Button title='Counter' onPress={() => setValue(pre => pre + 1)}/>
      
    //   <ChildComponent name={"Ali"} multipleValue={multipleValue} />
    // </View>
  )
}
const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default App