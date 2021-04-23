import React, { useState,useRef,useEffect } from 'react';
import { Text, View,TouchableOpacity,FlatList,CheckBox } from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements';
import { Modal } from 'react-native';


const AddCustomer = ({ }) => {

const [modalCustomerAddChooseKind, setModaCustomerAddChooseKind]= useState(false);
const [modalCustomerAddChooseInfo, setModaCustomerAddChooseInfo]= useState(true);
const [isSelected, setSelection] = useState(false);



// mở modal phân loại khách hàng
const openCustomerAddChooseKind = () => {
  setModaCustomerAddChooseKind(true)
  console.log("abc")
}
// đóng modal phân loại khách hàng
const closeCustomerAddChooseKind = () =>{
  setModaCustomerAddChooseKind(false);
}
// mở modal thông tin khách hàng
const openCustomerAddChooseInfo = () => {
    setModaCustomerAddChooseInfo(true)
    console.log("abc")
}
// đóng modal thông tin khách hàng
const closeCustomerAddChooseInfo = () =>{
    setModaCustomerAddChooseInfo(false);
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
return(
    <View style={{flex : 1}}>
      <View style={styles.header}>
      <TouchableOpacity style={{flexDirection:'row',marginLeft : 23}}>
            <Icon
            name='arrow-back-outline'
            type='ionicon'  
            onPress={()=> console.log("sssss")}/>
            <Text style={{fontSize : 24,color : '#333333',fontWeight :'600',marginLeft : 22}}>Thêm mới khách hàng</Text>
        </TouchableOpacity>
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
          <TouchableOpacity style={{flex:1,flexDirection:'row'}} onPress={openCustomerAddChooseInfo}>
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

{/* thêm mới phân loại khách hàng */}

    <Modal animationType={'slide'}  
        visible={modalCustomerAddChooseKind}>
        <View style={{flex:1}}>
        <View style={styles.header}>
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
        </Modal> 

{/* thêm mới thông tin khách hàng => chọn cá nhân*/}
    <Modal animationType={'slide'}
        visible={modalCustomerAddChooseInfo}>
        <View style={{flex:1}}>
        <View style={styles.header}>
            <TouchableOpacity  style ={{marginLeft : 23}}>
                <Icon
                name='arrow-back-outline'
                type='ionicon'  
                onPress={closeCustomerAddChooseInfo}/>
            </TouchableOpacity>
            <Text style={{fontSize : 24,color : '#333333',fontWeight :'600',marginLeft : 22}}>Thông tin khách hàng</Text>
        </View>
      
      <View style={styles.main}>
        <View style={{height:10,backgroundColor :'#F2F2F2'}}></View>
        <View >

        </View>
      </View>
        <TouchableOpacity style={styles.doneButton}>
          <View style={{flex : 0.5}}>
                <Text onPress={closeCustomerAddChooseKind} style={{textAlign : 'center',flex :1,textAlignVertical : 'center',fontSize : 18, fontWeight :'500',color : '#333333'}}>TIẾP TỤC</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal> 

</View> 
)};

export default AddCustomer;
