import React, { useState,useRef,useEffect } from 'react';
import { Text, View,TouchableOpacity,FlatList,CheckBox,SafeAreaView,Image } from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements';
import { Modal } from 'react-native';
import CheckBox1 from 'react-native-just-checkbox' 
import { TextInput } from 'react-native';
import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';
const AddCustomer = ({navigation }) => {

const [modalCustomerAddChooseKind, setModaCustomerAddChooseKind]= useState(false);
const [modalCustomerAddChooseInfo, setModaCustomerAddChooseInfo]= useState(false);
const [modalCustomerAddChooseContact, setModaCustomerAddChooseContact]= useState(false);
const [isSelected, setSelection] = useState(false);
const [filePath, setFilePath] = useState({});


const requestCameraPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs camera permission',
        },
      );
      // If CAMERA Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  } else return true;
};


const chooseFile = (type) => {
  let options = {
    mediaType: type,
    maxWidth: 300,
    maxHeight: 550,
    quality: 1,
  };
  launchImageLibrary(options, (response) => {
    console.log('Response = ', response);

    if (response.didCancel) {
      alert('User cancelled camera picker');
      return;
    } else if (response.errorCode == 'camera_unavailable') {
      alert('Camera not available on device');
      return;
    } else if (response.errorCode == 'permission') {
      alert('Permission not satisfied');
      return;
    } else if (response.errorCode == 'others') {
      alert(response.errorMessage);
      return;
    }
    console.log('base64 -> ', response.base64);
    console.log('uri -> ', response.uri);
    console.log('width -> ', response.width);
    console.log('height -> ', response.height);
    console.log('fileSize -> ', response.fileSize);
    console.log('type -> ', response.type);
    console.log('fileName -> ', response.fileName);
    setFilePath(response);
  });
};


// mở modal phân loại khách hàng
const openCustomerAddChooseKind = () => {
  setModaCustomerAddChooseKind(true)
}
// đóng modal phân loại khách hàng
const closeCustomerAddChooseKind = () =>{
  setModaCustomerAddChooseKind(false);
}
// mở modal thông tin khách hàng
const openCustomerAddChooseInfo = () => {
    setModaCustomerAddChooseInfo(true)
}
// đóng modal thông tin khách hàng
const closeCustomerAddChooseInfo = () =>{
    setModaCustomerAddChooseInfo(false);
}

// mở modal thông tin người liên hệ
const openCustomerAddChooseContact = () => {
  setModaCustomerAddChooseContact(true)
  console.log("abc")
}
// đóng modal thông tin người liên hệ
const closeCustomerAddChooseContact = () =>{
  setModaCustomerAddChooseContact(false);
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
let options = {
    title: 'Select Image',
    customButtons: [
      { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

return(
    <View style={{flex : 1}}>
      <View style={styles.header}>
      <TouchableOpacity style={{flexDirection:'row',marginLeft : 23}}>
            <Icon
            name='arrow-back-outline'
            type='ionicon'  
            onPress={()=> navigation.goBack()}/>
            <Text style={{fontSize : 24,color : '#333333',fontWeight :'600',marginLeft : 22}}>Thêm mới khách hàng</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <Text style={styles.modalCustomerAddText}>Hình ảnh</Text>
        <View style={styles.modalCustomerAddImage}>
            <TouchableOpacity onPress={() => console.log('chưa làm được')} style={styles.modalCustomerAddImageCircle}>
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
                    color='#BDBDBD'/>
              </View>
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
          <TouchableOpacity style={{flex:1,flexDirection:'row'}} onPress={openCustomerAddChooseContact}>
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
        <View style={{flex : 1}}>
          <View style={{flex:0.1,flexDirection : 'row',alignItems:'center'}}>
            <Text style={{flex:1,marginLeft:16,fontSize:17,color:'#4F4F4F'}}>Loại KH</Text>
            <View style={{flex : 1,flexDirection:'row',alignItems:'center'}}>
              <View style={{backgroundColor:'#ECC259',borderRadius:50}}>
                <CheckBox1 
                  isChecked={isSelected}
                  checkBoxSize={30}
                  squareCheckBox={false}
                  checkColor ='black'
                />
              </View>
              <Text style={{fontSize:18,color : '#333333',paddingLeft:6}}>Cá nhân</Text>
            </View>
            <View style={{flex : 1,flexDirection:'row',alignItems:'center'}}>
                <View style={{backgroundColor:'#ECC259',borderRadius:50}}>
                <CheckBox1 
                  isChecked={isSelected}
                  checkBoxSize={30}
                  squareCheckBox={false}
                  checkColor ='black'
                />
                </View>
                <Text style={{fontSize:18,color : '#333333',paddingLeft:6}}>Tổ chức</Text>
            </View>
          </View>
          <View style={{height:1,backgroundColor :'#F2F2F2'}}></View>
          
          <View style={{flex:0.1,paddingLeft:16,alignItems:'center',flexDirection : 'row'}}>
            <Text style={{fontSize:20,justifyContent:'center',alignContent :'center',fontWeight:'600'}}>Thông tin khách hàng</Text>
          </View>

          <View style={{flex:0.1,flexDirection : 'row',paddingLeft:16,alignItems:'center'}}>
            <Text style={{flex:1,fontSize:17,color:'#4F4F4F'}}>Danh xưng</Text>
            <TouchableOpacity>
              <View style={{alignContent:'center',fontSize:20,color:'#333333',marginRight:14,flexDirection:'row',alignItems:'center'}}>
                <Text style={{paddingRight : 20}}>Anh</Text>
                <Icon
                    name='chevron-forward-outline'
                    type='ionicon'
                    color='#BDBDBD'/>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{height:1,backgroundColor :'#F2F2F2'}}></View>

          <View style={{flex:0.1,flexDirection : 'row',paddingLeft:16,alignItems:'center'}}>
            <View style={{flex:1,flexDirection:'row'}}>
              <Text style={{fontSize:17,color:'#4F4F4F'}}>Tên khách hàng</Text>
              <Text style={{fontSize:17,color:'red'}}> *</Text>
            </View>
              <View style={{alignContent:'center',fontSize:20,color:'#333333',marginRight:14,flexDirection:'row',alignItems:'center',flex:1}}>
                <TextInput 
                style={{fontSize:22,textAlign:'right'}} 
                placeholder="Phan Anh Tú"
                returnKeyType='default'
                keyboardType ='default'
                
                >
                </TextInput>
              </View>
          </View>
          <View style={{height:1,backgroundColor :'#F2F2F2'}}></View>

          <View style={{flex:0.1,flexDirection : 'row',paddingLeft:16,alignItems:'center'}}>
            <View style={{flex:1,flexDirection:'row'}}>
              <Text style={{fontSize:17,color:'#4F4F4F'}}>Số điện thoại</Text>
              <Text style={{fontSize:17,color:'red'}}> *</Text>
            </View>
              <View style={{alignContent:'center',fontSize:20,color:'#333333',marginRight:14,flexDirection:'row',alignItems:'center'}}>
                <TextInput 
                style={{fontSize:22}} 
                placeholder=""
                returnKeyType='default'
                keyboardType ='numeric'
                >
                </TextInput>
              </View>
          </View>
          <View style={{height:1,backgroundColor :'#F2F2F2'}}></View>

          <View style={{flex:0.1,flexDirection : 'row',paddingLeft:16,alignItems:'center'}}>
            <View style={{flex:1,flexDirection:'row'}}>
              <Text style={{fontSize:17,color:'#4F4F4F'}}>Email</Text>
            </View>
              <View style={{alignContent:'center',fontSize:20,color:'#333333',marginRight:14,flexDirection:'row',alignItems:'center',flex:1}}>
                <TextInput 
                style={{fontSize:22,textAlign:'right'}} 
                returnKeyType='default'
                keyboardType ='default'
                placeholder="a@gmail.com"
                >
                </TextInput>
              </View>
          </View>
          <View style={{height:1,backgroundColor :'#F2F2F2'}}></View>

          <View style={{flex:0.1,flexDirection : 'row',paddingLeft:16,alignItems:'center'}}>
            <Text style={{flex:1,fontSize:17,color:'#4F4F4F'}}>Tỉnh,TP</Text>
            <TouchableOpacity>
              <View style={{alignContent:'center',fontSize:20,color:'#333333',marginRight:14,flexDirection:'row',alignItems:'center'}}>
                <Text style={{paddingRight : 20}}>Hà Nội</Text>
                <Icon
                    name='chevron-forward-outline'
                    type='ionicon'
                    color='#BDBDBD'/>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{height:1,backgroundColor :'#F2F2F2'}}></View>

          <View style={{flex:0.1,flexDirection : 'row',paddingLeft:16,alignItems:'center'}}>
            <Text style={{flex:1,fontSize:17,color:'#4F4F4F'}}>Quận, Huyện</Text>
            <TouchableOpacity>
              <View style={{alignContent:'center',fontSize:20,color:'#333333',marginRight:14,flexDirection:'row',alignItems:'center'}}>
                <Text style={{paddingRight : 20}}>Ba Đình</Text>
                <Icon
                    name='chevron-forward-outline'
                    type='ionicon'
                    color='#BDBDBD'/>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{height:1,backgroundColor :'#F2F2F2'}}></View>

          <View style={{flex:0.1,flexDirection : 'row',paddingLeft:16,alignItems:'center'}}>
            <Text style={{flex:1,fontSize:17,color:'#4F4F4F'}}>Phường, Xã</Text>
            <TouchableOpacity>
              <View style={{alignContent:'center',fontSize:20,color:'#333333',marginRight:14,flexDirection:'row',alignItems:'center'}}>
                <Text style={{paddingRight : 20}}>Nguyễn Trung Trực</Text>
                <Icon
                    name='chevron-forward-outline'
                    type='ionicon'
                    color='#BDBDBD'/>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{height:1,backgroundColor :'#F2F2F2'}}></View>

          <View style={{flex:0.1,flexDirection : 'row',paddingLeft:16,alignItems:'center'}}>
            <View style={{flex:1,flexDirection:'row'}}>
              <Text style={{fontSize:17,color:'#4F4F4F'}}>Địa chỉ</Text>
            </View>
              <View style={{alignContent:'center',fontSize:20,color:'#333333',marginRight:14,flexDirection:'row',alignItems:'center',flex:1}}>
                <TextInput 
                style={{fontSize:22,textAlign:'right'}} 
                returnKeyType='default'
                keyboardType ='default'
                >
                </TextInput>
              </View>
          </View>
        </View>
      </View>
        <TouchableOpacity style={styles.doneButton}>
          <View style={{flex : 0.5}}>
                <Text onPress={closeCustomerAddChooseKind} style={{textAlign : 'center',flex :1,textAlignVertical : 'center',fontSize : 18, fontWeight :'500',color : '#333333'}}>TIẾP TỤC</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal> 

{/* thêm mới người liên hệ */}

<Modal animationType={'slide'}
        visible={modalCustomerAddChooseContact}>
        <View style={{flex:1}}>
        <View style={styles.header}>
            <TouchableOpacity  style ={{marginLeft : 23}}>
                <Icon
                name='arrow-back-outline'
                type='ionicon'  
                onPress={closeCustomerAddChooseContact}/>
            </TouchableOpacity>
            <Text style={{fontSize : 24,color : '#333333',fontWeight :'600',marginLeft : 22}}>Người liên hệ</Text>
        </View>
      
      <View style={styles.main}>
        <View style={{height:10,backgroundColor :'#F2F2F2'}}></View>
        <View style={{flex : 1}}>
          
          <View style={{flex:0.1,flexDirection : 'row',paddingLeft:16,alignItems:'center'}}>
            <Text style={{flex:1,fontSize:17,color:'#4F4F4F'}}>Danh xưng</Text>
            <TouchableOpacity>
              <View style={{alignContent:'center',fontSize:20,color:'#333333',marginRight:14,flexDirection:'row',alignItems:'center'}}>
                <Text style={{paddingRight : 20}}>Anh</Text>
                <Icon
                    name='chevron-forward-outline'
                    type='ionicon'
                    color='#BDBDBD'/>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{height:1,backgroundColor :'#F2F2F2'}}></View>

          <View style={{flex:0.1,flexDirection : 'row',paddingLeft:16,alignItems:'center'}}>
            <View style={{flex:1,flexDirection:'row'}}>
              <Text style={{fontSize:17,color:'#4F4F4F'}}>Họ và tên</Text>
              <Text style={{fontSize:17,color:'red'}}> *</Text>
            </View>
              <View style={{alignContent:'center',fontSize:20,color:'#333333',marginRight:14,flexDirection:'row',alignItems:'center',flex:1}}>
                <TextInput 
                style={{fontSize:22,textAlign:'right'}} 
                placeholder="Phan Anh Tú"
                returnKeyType='default'
                keyboardType ='default'
                
                >
                </TextInput>
              </View>
          </View>
          <View style={{height:1,backgroundColor :'#F2F2F2'}}></View>

          <View style={{flex:0.1,flexDirection : 'row',paddingLeft:16,alignItems:'center'}}>
            <View style={{flex:1,flexDirection:'row'}}>
              <Text style={{fontSize:17,color:'#4F4F4F'}}>Số điện thoại</Text>
              <Text style={{fontSize:17,color:'red'}}> *</Text>
            </View>
              <View style={{alignContent:'center',fontSize:20,color:'#333333',marginRight:14,flexDirection:'row',alignItems:'center'}}>
                <TextInput 
                style={{fontSize:22}} 
                placeholder=""
                returnKeyType='default'
                keyboardType ='numeric'
                >
                </TextInput>
              </View>
          </View>
          <View style={{height:1,backgroundColor :'#F2F2F2'}}></View>

          <View style={{flex:0.1,flexDirection : 'row',paddingLeft:16,alignItems:'center'}}>
            <View style={{flex:1,flexDirection:'row'}}>
              <Text style={{fontSize:17,color:'#4F4F4F'}}>Email</Text>
            </View>
              <View style={{alignContent:'center',fontSize:20,color:'#333333',marginRight:14,flexDirection:'row',alignItems:'center',flex:1}}>
                <TextInput 
                style={{fontSize:22,textAlign:'right'}} 
                returnKeyType='default'
                keyboardType ='default'
                placeholder="a@gmail.com"
                >
                </TextInput>
              </View>
          </View>
          <View style={{height:1,backgroundColor :'#F2F2F2'}}></View>

          <View style={{flex:0.1,flexDirection : 'row',paddingLeft:16,alignItems:'center'}}>
            <View style={{flex:1,flexDirection:'row'}}>
              <Text style={{fontSize:17,color:'#4F4F4F'}}>Địa chỉ</Text>
            </View>
              <View style={{alignContent:'center',fontSize:20,color:'#333333',marginRight:14,flexDirection:'row',alignItems:'center',flex:1}}>
                <TextInput 
                style={{flex: 1, flexWrap: 'wrap',fontSize:22,textAlign:'right'}} 
                returnKeyType='done'
                keyboardType ='default'
                placeholder="lạc long quân,p5,q11"
                
                
                >
                </TextInput>
              </View>
          </View>

        </View>
      </View>
        <TouchableOpacity style={styles.doneButton}>
          <View style={{flex : 0.5}}>
                <Text onPress={closeCustomerAddChooseKind} style={{textAlign : 'center',flex :1,textAlignVertical : 'center',fontSize : 18, fontWeight :'500',color : '#333333'}}>XONG</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal> 


</View> 
)};

export default AddCustomer;
