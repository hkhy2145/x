import { Text, SafeAreaView, StyleSheet ,View,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import React, { useState } from 'react';
const TextTimer = ({ text ,pf,sf}) => {

  const fontSize = text.length > 50 ? sf : pf;
  return (
    <Text style={{ fontSize, color: 'black', margin:3,}}>
      {text}
    </Text>
  );
};
export default function App() {
  const q=" يتم تغيير جهة الوقوف كل يوم :";
  const r1="بين الساعة التاسعة والنصف والساعة العاشرة ليلا";
  const r2="بين الساعة الثامنة والنصف والساعة التاسعة ليلا";
  const r3="لا يمكن مهجمة تونس";
  const q_image='./src/image1.png'
  return (
    <LinearGradient
        colors={['#EFFFF0', '#FFFFFF']}
        style={styles.linearGradient}
    >
    <SafeAreaView style={[styles.container]}>
      <View style={styles.premier_screen}>
      <View style={styles.top_bar}>
        <View style={styles.timer}>
          <Text style={styles.text_timer}>43 s</Text>
        </View>
        <AntDesign style={styles.icon_sound} name="sound" size={50} color="black" />
        <Text style={[styles.text_p,styles.text_qn]}>11/44</Text>
      </View>
      <View style={styles.question_image}>
        <Image source={require(q_image)} style={styles.image_q} />
      </View>
      <View  style={styles.question_text}>
        <Text style={styles.q}><TextTimer text={q} pf={25} sf={20}/></Text>
      </View>
      <View style={styles.question_respons}>
        <View style={styles.cr}><TextTimer text={r1} pf={19} sf={15}/></View>
        <View style={styles.cr}><TextTimer text={r2} pf={19} sf={15}/></View>
        <View style={styles.cr}><TextTimer text={r3} pf={19} sf={15}/></View>
      </View>
      <View  style={styles.add_option}>
        <Image source={require('./src/add.png')} style={styles.image2} />
      </View>
      </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  linearGradient: {
    flex: 1,
    backgroundColor: 'transparent',
    backgroundImage: `linear-gradient(to bottom right, #EBF1FF, #FEFEFE)`, // Your linear gradient colors
  },


  container: {
    flex: 1,
    paddingTop: 30,
    alignItems:"center",
    direction:"column",
  },
  top_bar:{
    marginTop:25,
    height:80,
    flexDirection: 'row', // Horizontal layout
    justifyContent: 'space-between', // Items spaced along the main axis
    alignItems: 'center', // Center items along the cross axis
    paddingHorizontal: 20, // Adjust as needed
    //backgroundColor:"#eee"
   // Adjust the height of the container
    
  },
  timer:{
    borderWidth:8,
    borderColor:"#08FF02",
    width:70,
    height:70,
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center",

  },
  text_qn:{
    color:"red",
    fontSize:20,
    //fontFamily: 'Cairo_Regular''
  },
  text_timer:{
    color:"red",
    fontSize:20,
    //fontFamily: 'Cairo_Regular''
  },
  icon_sound:{

  },
  question_image:{
    marginTop:30,
    height:181,
    width:385,
    //borderWidth:3,
   // borderColor:"red",
  },
  image_q:{
    height:181,
    width:385,
    borderRadius:17,
  },
  question_text:{
    marginTop:3,
    height:100,
    width:385,
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center',
    //borderWidth:3,
    //borderColor:"red",
  },
  q:{
    marginTop:10,
    textAlign:"center",
    fontSize:20,
    //fontFamily: 'Cairo_Regular'',
  },
  question_respons:{
    marginTop:5,
    height:230,
    width:385,
    //borderWidth:3,
    borderColor:"red",
  },
  cr:{
    backgroundColor:"white",
    borderColor:"black",
    borderWidth:2,
    borderRadius:17,
    marginTop:10,
    width:"100%",
    height:60,
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center',
  },
  r:{
    fontSize:25,
    textAlign:"center",
    textAlignVertical:"center",
    //fontFamily: 'Cairo_Regular''
  },
  cr1:{
    borderRadius:17,
  },
  cr2:{

  },
  cr3:{

  },
  add_option:{
    marginTop:30,
    height:90,
    width:385,
    //borderWidth:3,
    borderColor:"red",
    alignItems:"center",
    alignContent:"center"
  },
});
