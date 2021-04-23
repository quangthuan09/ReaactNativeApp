import React, { useState } from 'react';
import { Text, View,TouchableOpacity,FlatList,SafeAreaView,Button } from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements';
import { Modal } from 'react-native';
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native';
import ModalReact from 'react-native-modal';

const DetailCustomer = ({ navigation }) => {
const [modalCustomerAddChooseContact, setModaCustomerAddChooseContact]= useState(false);
const [isModalVisible, setModalVisible] = useState(false);
// mở modal thông tin người liên hệ
const openCustomerAddChooseContact = () => {
    setModaCustomerAddChooseContact(true)
    console.log("abc")
}
// đóng modal thông tin người liên hệ
const closeCustomerAddChooseContact = () =>{
    setModaCustomerAddChooseContact(false);
}
const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    name :'Bùi thị thủy',
    phone : '0987898989',
    regency :'nhân viên'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    name :'Nguyễn thành long',
    phone : '0987898989',
    regency :'nhân viên'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    name :'Bùi thị thủy',
    phone : '0987898989',
    regency :'nhân viên'
  },
];


return(
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView} horizontal={false}>
        <View style={styles.header}>
                <View style={styles.hearContent}>
                    <TouchableOpacity  style ={{marginLeft : 23}}>
                    <Icon
                    name='arrow-back-outline'
                    type='ionicon'  
                    onPress={() => navigation.goBack()} />
                    </TouchableOpacity>
                </View>
        </View>
        <View style ={styles.main}>
            <View style={styles.mainContent}>
                <View style={styles.avatar}>
                    <Text>LOGO</Text>
                </View>
                <Text style={{paddingTop:13,fontSize : 24,fontWeight:'600',color:'#333333'}}>FLC Group</Text>
                <Text style={{paddingTop:6,fontSize : 16,fontWeight:'600',color:'#333333'}}>KML00020</Text>
                <View style={styles.item}>
                    <Icon
                        name='call-outline'
                        type='ionicon'
                        size = {14}
                        color = '#EB2020'     
                        />
                    <Text style={{fontSize:18,color : '#EB2020',fontWeight:'600',paddingLeft:12}}>0909888999</Text>
                </View>
                <View style={styles.item}>
                    <Icon
                        name='mail-outline'
                        type='ionicon'
                        size = {14}

                        />
                    <Text style={{fontSize:18,color : '#333333',fontWeight:'600',paddingLeft:12}}>0@blackwind.vn</Text>
                </View>
                <View style={styles.item}>
                    <Icon
                        name='location-outline'
                        type='ionicon'
                        size = {14}

                        />
                    <Text style={{fontSize:18,color : '#333333',fontWeight:'600',paddingLeft:12}}>số 62 ngõ 509/68 - Vũ Tông Phan - Khương Đình Thanh Xuân HN</Text>
                </View>
                <View style={styles.item}>
                    <Icon
                        name='calendar-outline'
                        type='ionicon'
                        size = {14}
                        />
                    <Text style={{fontSize:18,color : '#333333',fontWeight:'600',paddingLeft:12}}>20/01/2021</Text>
                </View>
                <View style={styles.item}>
                    <Icon
                        name='help-circle-outline'
                        type='ionicon'
                        size = {14}
                        />
                    <Text style={{fontSize:18,color : '#333333',fontWeight:'600',paddingLeft:12}}>Mã số thuế : 1872828287</Text>
                </View>
                </View>
            </View>
        <View style={styles.mainSpokesman}>
            <Text style={{paddingTop:13,fontSize : 20,fontWeight:'600',color:'#333333'}}>Người đại diện</Text>
            <View style={{flex : 1,flexDirection:'row',paddingTop:14}}>
                <Icon
                    name='person-outline'
                    type='ionicon'
                    size = {14}
                    />
                <View style={{paddingLeft:12,marginTop:-5,paddingBottom:15}}>
                    <Text style={{fontSize:18,color:'#333333',fontWeight:'600'}}>Mrs. Ngô Thanh Vân</Text>
                    <Text style={{paddingTop:6}}>Giám đốc chi nhánh</Text>
                    <Text style={{paddingTop:6,color:'#EB2020',fontSize:16,fontWeight:'600'}}>0902 478 295</Text>
                </View>
            </View>
        </View>


        <View style={styles.contact}> 
            <View style={styles.contactAdd}>
                <Text style={{flex:1,fontSize:20,color:'#333333',fontWeight:'600'}}>Người liên hệ</Text>
                <TouchableOpacity onPress={openCustomerAddChooseContact}>
                <Icon
                    name='add-outline'
                    type='ionicon'
                    size = {24}
                    color ='#ECC259'
                    />
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                data={DATA}
                renderItem={({item, index}) =>
                    <View style={{
                        flex:1,
                        backgroundColor:'#F8F8F8',
                        flexDirection:'row',
                        marginTop:10,
                        marginBottom:10,
                        borderRadius:15
                        }}>
                        <Text style={{flex:1,alignSelf:'center',padding:10}}>dsdsdd</Text>
                        <View style={{flex:3,padding:10}}>
                            <Text style={{fontSize:18,color:'#333333'}}>{item.name}</Text>
                            <Text>{item.regency}</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Icon
                                    name='call-outline'
                                    type='ionicon'
                                    size = {13}
                                />
                                <Text style={{fontSize:14,color:'#333333',paddingTop:3}}> {item.phone}</Text>
                            </View>
                            
                        </View>
                        <TouchableOpacity onPress={toggleModal} style={{flex:1,justifyContent:'flex-end',flexDirection:'row',paddingTop:10,paddingRight:5}}>
                            <Icon
                                name='ellipsis-vertical-outline'
                                type='ionicon'
                                size = {18}
                            />
                        </TouchableOpacity>
                        
                    </View>
                }
                />
            </View>
        </View>
        
        
    </ScrollView> 

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
                <Text onPress={closeCustomerAddChooseContact} style={{textAlign : 'center',flex :1,textAlignVertical : 'center',fontSize : 18, fontWeight :'500',color : '#333333'}}>XONG</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal> 
    
    <ModalReact 

        style={styles.view}
         isVisible={isModalVisible}>
    <View style={{flex: 1,alignItems:'flex-end',flexDirection:'row'}}>  
        <View style={{backgroundColor:'white',flex:1,borderTopLeftRadius:30,borderTopRightRadius:30}}>
                <View style={{flexDirection:'row',padding:23,}}>
                    <Text style={{flex:1,fontSize:24,fontWeight:'600',color:'#333333'}}>Tùy chọn</Text>
                        <TouchableOpacity onPress={toggleModal}>
                            <Icon
                            name='close-outline'
                            type='ionicon'
                            size = {30}
                            color ='#BDBDBD'
                            />
                        </TouchableOpacity>
                        
                </View>
                <View style={{height:1,backgroundColor :'#F2F2F2'}}></View>

                <View style={{flexDirection:'row',padding:23}}>
                    <TouchableOpacity onPress={()=>console.log("sửa item")}>
                            <Icon
                            name='create-outline'
                            type='ionicon'
                            size = {30}
                            color ='#ECC259'
                            />
                    </TouchableOpacity>
                    <Text style={{paddingLeft:5,flex:1,fontSize:24,fontWeight:'600',color:'#333333'}}>Sửa</Text>        
                </View>
                <View style={{height:1,backgroundColor :'#F2F2F2'}}></View>

                <View style={{flexDirection:'row',padding:23}}>
                    <TouchableOpacity onPress={()=>console.log("xóa item")}>
                            <Icon
                            name='trash-outline'
                            type='ionicon'
                            size = {30}
                            color ='red'
                            />
                    </TouchableOpacity>
                    <Text style={{paddingLeft:5,flex:1,fontSize:24,fontWeight:'600',color:'#333333',color:'red'}}>Xóa</Text>        
                </View>
        </View>
        
    </View>
    </ModalReact>
  </SafeAreaView>
)};

export default DetailCustomer;
