import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const ChildComponent = (props) => {
                console.log(props)
                const { name, multipleValue }=props

const [userName, setUserName]= useState('')
const [Count, setCount]= useState(1)

useEffect(()=>{
setUserName(name+" Hussain")
},[])

useEffect(()=>{
                console.log('useEffect without array/dependencies')
})
const updateName = () =>{
                setCount(pre=>pre+1)
                console.log("name")
                setUserName("name")
}
return (
<View>
<Text>Child Component {userName}</Text>
<Text>Count{Count}</Text>
<Button title='onClick' onPress={updateName}/>
<Button title='multiple' onPress={()=>multipleValue(10)} />
</View> 
)
}
const styles = StyleSheet.create({
mainContainer: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
}
})

export default ChildComponent