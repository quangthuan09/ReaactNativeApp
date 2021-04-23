import Constants from 'expo-constants';
import {StyleSheet} from 'react-native';
import { View, StatusBar, Platform  } from 'react-native';


const styles = StyleSheet.create({
container:{
    flex :1,

},
header :{
    flex : 1,
    backgroundColor : '#ECC259',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
},
main :{
    flex : 3,

},

headerContent :{
    flex : 1,
    flexDirection : 'row',
    alignItems :'center',
},
headerSearch :{
    flex : 0.3,
    borderWidth : 1,
    marginLeft : 16,
    marginRight : 16,
    flexDirection : 'row',
    borderRadius : 27,
    marginTop : -25,
    borderColor : '#E0E0E0',
    backgroundColor : '#FFFFFF'
},
input :{
    flex : 1,
    color : '#333333',
    paddingLeft : 17,
    fontSize : 17,
    paddingVertical : 0
},
buttonAdd :{
    backgroundColor : '#ECC259',
    justifyContent: 'center',
    alignSelf:'flex-end',
    width : 58,
    height : 58,
    borderRadius:50,
    bottom : 11,
    right : 11,
    position :'absolute'
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
    flex: 0.2,
    flexDirection  :'row',
    alignContent:'center',
    
},
doneButton :{
    flex:0.3,
    backgroundColor :'#ECC259',
    borderRadius : 27,
    margin :21,
    justifyContent: 'center',
},

});

export default styles