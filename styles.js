import Constants from 'expo-constants';
import {StyleSheet} from 'react-native';
import { View, StatusBar, Platform } from 'react-native';
import { greaterThan } from 'react-native-reanimated';

const styles = StyleSheet.create({
container:{
    flex :1,
},
header :{
    flex : 1,
    backgroundColor : 'yellow',
},
main :{
    flex : 3,
},
footer :{
    flex : 0.5,
    backgroundColor : 'yellow',
    height : 20,
},
headerContent :{
    flex : 1,
    flexDirection : 'row',
    alignItems :'center',
},
headerCalendar :{
    flex : 0.5,
    flexDirection : 'row',
    borderRadius : 20,
    marginLeft : 20,
    marginRight : 20,
    borderWidth : 1,
    borderColor : '#BDBDBD',
    alignItems : 'center',
    marginTop : -30,
    backgroundColor : '#fff'
},
mainTotal :{
    flex : 1,
    flexDirection : 'row',

},
mainTotalPay :{
    flex : 1,
    backgroundColor : '#F8F8F8',
    borderRadius : 20,
    margin : 13,
    alignItems : 'center',
    alignContent : 'center',
    justifyContent : 'center',
    
},
mainListDS: {
    flex: 1,
},
mainListSP:{
    flex : 4,
    paddingLeft : 15,
    paddingRight : 15,
    marginTop : 5,
    backgroundColor : '#F8F8F8'
},
mainListDSFlagList :{
    flex : 2,
},
item : {
    backgroundColor :'#F2F2F2',
    borderRadius : 22,
    height : 40,
    width : 130,
    textAlign : 'center',
    textAlignVertical :'center',
    marginTop : 15,
    marginLeft : 5,
    marginRight : 5,
},
mainListSPTitle : {
    flex : 0.1,
    flexDirection  :'row',
    borderBottomWidth : 1,
    marginLeft : -16,
    marginRight : -16,
    borderColor : '#E0E0E0'
},
mainListSpTitleText :{
    fontSize  : 13,
    textAlign : 'center',
    flex : 2,
    justifyContent: 'center',
    textAlignVertical :'center',
    color : '#828282'
},
mainListSpTitleText1 :{
    fontSize  : 13,
    textAlign : 'center',
    flex : 1.5,
    justifyContent: 'center',
    textAlignVertical :'center',
    color : '#828282'
},
mainListSPListItem : {
    flex : 1,
    flexDirection :'row',
    marginLeft : 14,
    marginRight : 14,
    paddingTop : 15,
   
},
mainListSPList :{
    flex : 1,
},
itemListSPSP :{
    flex :1.1,
    textAlignVertical :'center',
    paddingTop : 15,
    paddingBottom : 15,
    flexDirection :'row',
},
itemListSPSL :{
    flex  :1,
    fontSize : 16,
    textAlign : 'center',
    textAlignVertical :'center',
    color : '#333333',
},
backButton : {
    flex : 2,
    justifyContent : 'center',
    alignContent : 'center',
    alignItems :'flex-start',
    marginLeft :23
},
calendarPicker : {
    flex : 6,
},
doneButton :{
    flex :0.6,
    backgroundColor : 'yellow',
    margin :21,
    marginBottom :37,
    borderWidth : 3,
    borderColor : 'rgba(229, 153, 69, 0.2)',
    borderRadius : 27,
},
itemListSPListItemDetail : {
    backgroundColor : 'green',
    flex :1,
    flexDirection :'column'
}
});

export default styles