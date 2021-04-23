import React, { useState,useRef,useEffect } from 'react';
import {  Text, View,TouchableOpacity,TextInput,FlatList,CheckBox } from 'react-native';
import styles from './styles';
import { Icon,Button,SearchBar  } from 'react-native-elements';
import CalendarPicker from 'react-native-calendar-picker';
import { Modal } from 'react-native';
import addCustomer from './addCustomer'
import AddCustomer from './addCustomer';
export default function App({navigation, route}) {

const [search,setSearch]=useState('');
const [searchList,setSearchList] = useState();
const [modalCustomerAdd, setModaCustomerAdd]= useState(false);
const [modalCustomerAddChooseKind, setModaCustomerAddChooseKind]= useState(false);
const [isSelected, setSelection] = useState(false);
const onChangeSearch = query =>{
    setSearch(query);
    console.log('sdsdsdsdsdsdsds----sdsds',search)
}

const openCustomerAdd = () => {
  // setModaCustomerAdd(true)
  navigation.navigate('AddCustomerScreen')
  console.log("abc")
}
const closeCustomerAdd = () =>{
  setModaCustomerAdd(false);
}
const openCustomerAddChooseKind = () => {
  setModaCustomerAddChooseKind(true)
  console.log("abc")
}
const closeCustomerAddChooseKind = () =>{
  setModaCustomerAddChooseKind(false);
}
const DataCustomer = {
  "data" : [
    {
      "id" : 1,
      "logo" : "logoo",
      "name" : "BlackWind Software",
      "code" : "KML00001",
      "phone" : "0902678292"
    },
    {
      "id" : 2,
      "logo" : "logoo",
      "name" : "Kilee Store",
      "code" : "KML00001",
      "phone" : "0902678292"
    },
    {
      "id" : 3,
      "logo" : "nga",
      "name" : "Mrs.Nguyễn Nga",
      "code" : "KML00222",
      "phone" : "090676"
    },
    {
      "id" : 4,
      "logo" : "logoo",
      "name" : "BlackWind Software",
      "code" : "KML00001",
      "phone" : "0902678292"
    },
    {
      "id" : 5,
      "logo" : "logoo",
      "name" : "BlackWind Software",
      "code" : "KML00001",
      "phone" : "0902678292"
    },
    {
      "id" : 6,
      "logo" : "logoo",
      "name" : "BlackWind Software",
      "code" : "KML00001",
      "phone" : "0902678292"
    },
    {
      "id" : 7,
      "logo" : "logoo",
      "name" : "BlackWind Software",
      "code" : "KML00001",
      "phone" : "0902678292"
    },
    {
      "id" : 8,
      "logo" : "logoo",
      "name" : "BlackWind Software",
      "code" : "KML00001",
      "phone" : "0902678292"
    },

  ]
}
const DataCustomerKind  = {
  "data" : [
    {
      "key" : "nhóm KH nhà máy tôn",
    },
    {
      "key" : "nhóm KH công trình"
    },
    {
      "key" : "nhóm khách lẻ",
    },
    {
      "key" : "nhóm khách vật liệu xây dựng"
    },
  ]
}
return (
  <View style={styles.container}> 
      <View style ={styles.header}>  
        <View style={styles.headerContent}>
          <TouchableOpacity  style ={{marginLeft : 23}}>
          <Icon
          name='arrow-back-outline'
          type='ionicon'  
          onPress={() => console.log('hello')} />
          </TouchableOpacity>
          <Text style={{fontSize : 24,color : '#333333',fontWeight :'600',marginLeft : 22}}>Báo cáo</Text>
        </View>
      </View>
      <View  style={styles.headerSearch}>
        <TextInput
            style={styles.input}
            onChangeText={setSearch}
            value={search}
            placeholder="Tên KH hoặc mã KH"
            keyboardType="default"
            placeholderTextColor = '#BDBDBD'
        />
        <View style={{flex :0.3,justifyContent:'center'}}>
            <TouchableOpacity>
                <Icon       
                name='search-outline'
                color ='#ECC259'
                type='ionicon'
                onPress={() => onChangeSearch()} />
            </TouchableOpacity>
        </View>
      </View>
      
      <View style ={styles.main}>
        <FlatList
          data={DataCustomer.data}
          renderItem={({item, index}) =>
          <View style={[{
          flexDirection :'row',
          backgroundColor :'#F8F8F8',
          borderRadius:15,
          marginLeft :12,
          marginRight:12,
          marginTop:10,
          height : 80
          },index==DataCustomer.data.length-1 ? {marginBottom: 100}: null ]}>
              <View style={{flex : 1,alignItems:'center',justifyContent:'center'}}>
                <Text >{item.logo}</Text>
              </View>
              <View style={{flex : 2,justifyContent:'center'}}>
                  <View>
                      <Text style={{fontSize : 18,color:'#333333'}}>{item.name}</Text>
                      <View style={{flexDirection:'row'}}>
                          <Text style={{color:'#333333',fontSize:13}}>{item.code}</Text>
                          <Text> -  </Text>
                          <Icon
                          size={15}  
                          name='call'
                          type='ionicons'
                          />
                          <Text style={{color:'#666666',fontSize:13}}> {item.phone}</Text>
                      </View>
                  </View>
              </View>
              <View style={{flex : 1,alignItems:'center',justifyContent:'center'}}>
              <Icon
                  name='arrow-forward-outline'
                  type='ionicon'
                  color='#BDBDBD'       
                  onPress={() => console.log('hello')} />
              </View>
          </View>
          }
        />
        <TouchableOpacity onPress={openCustomerAdd} style={styles.buttonAdd}>
          <View>
          <Icon
                name='add-outline'
                type='ionicon'
                color='white'
                 />  
          </View>
        </TouchableOpacity>
      </View>
    {/* <Modal 
    animationType={'slide'}
    visible={modalCustomerAdd}>
    <View style={{flex:1}}>
      <View style={styles.headerContent}>
        <TouchableOpacity  style ={{marginLeft : 23}}>
          <Icon
          name='arrow-back-outline'
          type='ionicon'  
          onPress={closeCustomerAdd}/>
          </TouchableOpacity>
          <Text style={{fontSize : 24,color : '#333333',fontWeight :'600',marginLeft : 22}}>Thêm mới khách hàng</Text>
      </View>
      
      <View style={styles.main}>
        <Text style={styles.modalCustomerAddText}>Hình ảnh</Text>
        <View style={styles.modalCustomerAddImage}>
        <TouchableOpacity style={styles.modalCustomerAddImageCircle}>
        <Icon
                name='add-outline'
                type='ionicon'
                color='#BDBDBD'
                 />
        </TouchableOpacity>
        </View>
        <View style={styles.chooseCustomer} >
          <TouchableOpacity style={{flex:1,flexDirection:'row'}} onPress={openCustomerAddChooseKind}>
            <View style={{flex :1,justifyContent :'center'}}>
              <Text style={styles.modalCustomerAddText} >Phân loại khách hàng</Text>
              <Text style={{marginLeft:17,marginTop:6}}>Khách vãng lai</Text>
            </View>
            <View style={{justifyContent :'center',marginRight:17}}>
              <Icon
                    name='chevron-forward-outline'
                    type='ionicon'
                    color='#BDBDBD'       
                    o /></View>
                    </TouchableOpacity>
          </View>
        <View style={{height:10,backgroundColor :'#F2F2F2'}}></View>

        <View style={styles.chooseCustomer} >
          <TouchableOpacity style={{flex:1,flexDirection:'row'}} onPress={() => console.log('hello')}>
            <View style={{flex :1,justifyContent :'center'}}>
              <Text style={styles.modalCustomerAddText} >Thông tin khách hàng</Text>
              <Text style={{marginLeft:17,marginTop:6}}>Địa chỉ, điện thoại, Email,....</Text>
            </View>
            <View style={{justifyContent :'center',marginRight:17}}>
              <Icon
                    name='chevron-forward-outline'
                    type='ionicon'
                    color='#BDBDBD'       
                     /></View>
                    </TouchableOpacity>
          </View>
        <View style={{height:10,backgroundColor :'#F2F2F2'}}></View>

        <View style={styles.chooseCustomer} >
          <TouchableOpacity style={{flex:1,flexDirection:'row'}} onPress={() => console.log('hello')}>
            <View style={{flex :1,justifyContent :'center'}}>
              <Text style={styles.modalCustomerAddText} >Người liên hệ</Text>
              <Text style={{marginLeft:17,marginTop:6}}>Điện thoại, email,chức vụ</Text>
            </View>
            <View style={{justifyContent :'center',marginRight:17}}>
              <Icon
                    name='chevron-forward-outline'
                    type='ionicon'
                    color='#BDBDBD'       
                     /></View>
                    </TouchableOpacity>
          </View>
        
        

        </View>
        <TouchableOpacity style={styles.doneButton}>
          <View style={{flex : 0.5}}>
                <Text onPress={() => console.log('cin xhào')} style={{textAlign : 'center',flex :1,textAlignVertical : 'center',fontSize : 18, fontWeight :'500',color : '#333333'}}>Lưu</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>

    <Modal animationType={'slide'}
    visible={modalCustomerAddChooseKind}>
<View style={{flex:1}}>
      <View style={styles.headerContent}>
        <TouchableOpacity  style ={{marginLeft : 23}}>
          <Icon
          name='arrow-back-outline'
          type='ionicon'  
          onPress={closeCustomerAddChooseKind}/>
          </TouchableOpacity>
          <Text style={{fontSize : 24,color : '#333333',fontWeight :'600',marginLeft : 22}}>Khách hàng</Text>
      </View>
      
      <View style={styles.main}>
        <View style={{height:10,backgroundColor :'#F2F2F2'}}></View>
        <FlatList
          data={DataCustomerKind.data}
          renderItem={({item, index}) =>
          <View style={{flex:1 }}>
            <View style={{height:1,backgroundColor :'#F2F2F2'}}></View>
              <View style={{margin:16,flexDirection:'row'}}>
                <Text style={{fontSize:17,color:'#4F4F4F',flex:1}}>{item.key}</Text>
                <View style={{alignContent:'flex-end'}}>
                  <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                  />
                </View>     
              </View>    
          </View>
          }
        />
      </View>
        <TouchableOpacity style={styles.doneButton}>
          <View style={{flex : 0.5}}>
                <Text onPress={closeCustomerAddChooseKind} style={{textAlign : 'center',flex :1,textAlignVertical : 'center',fontSize : 18, fontWeight :'500',color : '#333333'}}>Xong</Text>
          </View>
        </TouchableOpacity>
        </View>
    </Modal> */}
  </View>
  
  );
}

