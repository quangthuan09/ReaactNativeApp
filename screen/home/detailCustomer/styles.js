import Constants from 'expo-constants';
import {StyleSheet} from 'react-native';
import { View, StatusBar, Platform  } from 'react-native';


const styles = StyleSheet.create({
container : {
    flex:1,
    
},
header :{
    flex : 1,
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'#ECC259',
    height:150
},
main :{
    flex : 5,
    backgroundColor:'white'
},
avatar : {
    backgroundColor : 'green',
    width : 100,
    height : 100,
    borderRadius :50,
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : -30,

},
mainContent : {
    paddingLeft:18,
    paddingRight:18,
    paddingBottom : 21
},
item:{
    flexDirection : 'row',
    alignItems:'center',
    paddingTop:15
},
scrollView: {
    backgroundColor :'#F2F2F2',
    
},
mainSpokesman : {
    paddingLeft:18,
    paddingRight:18,
    backgroundColor:'white',
    marginTop: 10,
    flex:1
},
contact:{
    flex:1,
    backgroundColor:'white',
    marginTop: 10,
    paddingLeft:18,
    paddingRight:18,
},
contactAdd:{
    flexDirection:'row',
    flex:1,
    paddingTop:21
},
view:{
    margin: 0,
}
});

export default styles