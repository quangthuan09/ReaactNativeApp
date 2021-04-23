import Constants from 'expo-constants';
import {StyleSheet} from 'react-native';
import { View, StatusBar, Platform  } from 'react-native';


const styles = StyleSheet.create({

header :{
    flex : 1,
    alignItems:'center',
    flexDirection:'row',
    
},
main :{
    flex : 5,
},
modalCustomerAddText :{
    color : '#333333',
    fontSize : 20,
    fontWeight : '600',
    marginLeft : 16
},
modalCustomerAddImage:{
    flex : 0.3,
    margin : 17,
    borderWidth : 1,
    borderRadius : 20,
    borderColor : '#BDBDBD',
    borderStyle: 'dashed',
    justifyContent : 'center'
},
modalCustomerAddImageCircle :{
    width : 88,
    height : 88,
    backgroundColor : '#F8F8F8',
    borderRadius : 50,
    alignSelf : 'center',
    justifyContent : 'center',
    borderWidth : 1,
    borderColor : '#BDBDBD',
    borderStyle: 'dashed',
},
chooseCustomer :{
    flex: 0.15,
    flexDirection  :'row',
    alignContent:'center',
    
},
doneButton :{
    flex:0.4,
    backgroundColor :'#ECC259',
    borderRadius : 27,
    margin :21,
    justifyContent: 'center',
    borderWidth : 3,
    borderColor : 'rgba(229, 153, 69, 0.2)',
},
});

export default styles