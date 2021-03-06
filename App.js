import { StatusBar } from 'expo-status-bar';
import React, { useState,useRef,useEffect } from 'react';
import { FlatList, Text, View,TouchableOpacity,ToastAndroid } from 'react-native';
import styles from './styles';
import { Icon,Button } from 'react-native-elements';
import CalendarPicker from 'react-native-calendar-picker';
import { Modal } from 'react-native';
export default function App() {
  const cateButonList = useRef(null);
  const [selectButton, setSelectButton] = useState(1);
  const [selectedID, setselectedID] = useState(0);
  const [itemVisible,setItemVisible] = useState();
  const [modalSelectDate, setModalSelectDate]= useState(false);
  const [modalSelectBranch, setModalSelectBranch]= useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedStartDate1, setSelectedStartDate1] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());
  const [selectedEndDate1, setSelectedEndDate1] = useState(new Date());

  

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      setSelectedEndDate1(new Date(date));
      console.log("-------end date ",date)
    }
    else 
    { 
      setSelectedStartDate1(new Date(date))
      console.log("-------started date ",date)
    }
  };

  const openItemDetail =()=>{
    // setItemVisible(true)
  }
  const openCalendar = () => {
    setModalSelectDate(true)
  }
  const closeCalendar = () =>{
    setModalSelectDate(false);
  }
  const openBranch = () => {
    console.log('-------open branch')
    setModalSelectBranch(true)
  }
  const closeBranch = () =>{
    console.log('-------close branch')
    setModalSelectBranch(false);
  }

  const submitPickCalendar = ()=>{
    console.log(selectedStartDate.getDate(), '----------', selectedStartDate1.getDate())
    console.log(selectedEndDate.getDate(), '----------', selectedEndDate1.getDate())
    setModalSelectDate(false);
    setSelectedStartDate(selectedStartDate1)
    setSelectedEndDate(selectedEndDate1)
    if(selectedStartDate1.getDate() > selectedEndDate.getDate()){
      setSelectedStartDate(selectedStartDate1)
      setSelectedEndDate(selectedStartDate1)
    }
  }
  const DataPick = [
    {key: 'S???n Ph???m',id :1},
    {key: 'Ng??nh H??ng',id :2},
    {key: 'Th????ng Hi???u',id :3},
  ]

  const selectData = ()=>{
    let data ;
    if(selectButton ==1){
      data = Data.Data.SanPham;
    }
    else if (selectButton ==2){
      data = Data.Data.NganhHang;
    }
    else if (selectButton ==3){
      data = Data.Data.ThuongHieu;
    }
    else if (selectButton ==4){
      data = Data.Data.ThuongHieu;
    }
    else{
      console.log('ko c?? d??? li???u');
    }
    return data
  }

  const Data = {
      "Data" : 
        {
          "SanPham" : [
            {
              "id" : 1,
              "key" : "T??n cu???n c??n ngu???i",
              "sl" : "14.000",
              "dt" : "135.000.000",
                  "logo" : "c",
                  "code" : "ML0900221001",
                  "date" : "08/02/2021",
                  "soluong" : "3",
                  "price" : "1000",
 
            },
            {
              "id" : 2,
              "key" : "T??n l???nh m??u",
              "sl" : "12.000",
              "dt" : "93.500.000",

                  "logo" : "a",
                  "code" : "ML0900221002",
                  "date" : "002/2021",
                  "soluong" : "5",
                  "price" : "11.000.000",

            },
            {
              "id" : 3,
              "key" : "T??n k???m m??u",
              "sl" : "15.000",
              "dt" : "89.000.000"
            },
            {
              "id" : 4,
              "key" : "Th??p thanh Th??p h??nh V",
              "sl" : "40.000",
              "dt" : "87.500.000"
            },
            {
              "id" : 5,
              "key" : "T??n cu???n t???y g??? v?? ph??? d???u",
              "sl" : "30.000",
              "dt" : "85.500.000"
            },
          ],
          "NganhHang" :[
            {
              "key" : "T??n",
              "sl" : "14.000",
              "dt" : "115.135.000"
            },
            {
              "key" : "Th??p",
              "sl" : "12.000",
              "dt" : "135.000.00"
            },
            
          ],
          "ThuongHieu" :[
            {
              "key" : "T??n Hoa Sen ",
              "sl" : "13.000",
              "dt" : "135.000"
            },
            {
              "key" : "H??a Ph??t",
              "sl" : "13.000",
              "dt" : "135.000"
            },
          ],
        }
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
          <Text style={{fontSize : 24,color : '#333333',fontWeight :'600',marginLeft : 22}}>B??o c??o</Text>
        </View>
      </View>
      <View  style={styles.headerCalendar}>
        <TouchableOpacity onPress={openCalendar} style={{flex : 1, flexDirection : 'row',alignItems : 'center',}} >         
          <Icon
            iconStyle={{marginLeft:22}}
            name='calendar-outline'
            type='ionicon'        
          />
          <Text> {selectedStartDate.toDateString().substr(8,2)}/{selectedStartDate.toLocaleDateString().substr(0,2)}/{selectedStartDate.toDateString().substr(11,4)}</Text>
          <Text> - </Text>
          <Text> {selectedEndDate.toDateString().substr(8,2)}/{selectedEndDate.toLocaleDateString().substr(0,2)}/{selectedEndDate.toDateString().substr(11,4)}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainTotal}>
        <TouchableOpacity style= {styles.mainTotalPay}  onPress={openBranch}>
        <View style= {styles.mainTotalPay} >
        
          <Text style={{fontSize : 18,textAlign : 'center',color : '#333333'}}>Doanh thu</Text>
          <Text style={{fontSize : 22,textAlign : 'center',color : '#333333'}}>20.000.000 ??</Text>
        </View>
        </TouchableOpacity>
        <View style= {styles.mainTotalPay}>
        <Text style={{fontSize : 18,textAlign : 'center',color : '#333333'}}>T???ng s???n l?????ng</Text>
          <Text style={{fontSize : 22,textAlign : 'center',color : '#333333'}}>140.000</Text>
        </View>
      </View>
      <View style ={styles.main}>
        <View style ={styles.mainListDS}>
          <Text style={{fontSize : 18,color : '#333333',fontWeight :'600',marginLeft : 22}}>Danh s??ch doanh thu theo :</Text>
          <View style={styles.mainListDSFlagList}>
          <FlatList
          ref={cateButonList}
          showsVerticalScrollIndicator ={false}
          showsHorizontalScrollIndicator={false}
          horizontal = {true}
          data={DataPick}
          
        renderItem={({item, index}) => 
        <TouchableOpacity  
          onPress={()=>{setSelectButton(item.id),console.log("------ m??? tab",item.key) ,
          cateButonList.current.scrollToIndex({index: index, viewOffset: 100 })}}
        >
        <Text style={[styles.item, selectButton == item.id ? {backgroundColor:'yellow'} : null]}>{item.key}</Text>
        </TouchableOpacity>
        
        }
      />
          </View>
        </View>
        <View style = {styles.mainListSP}>
          <View style ={styles.mainListSPTitle}>
            <Text style ={styles.mainListSpTitleText}>S???n ph???m</Text>
            <Text style ={styles.mainListSpTitleText1}>S???n l?????ng (kg)</Text>
            <Text style ={styles.mainListSpTitleText1}>Doanh Thu</Text>
          </View>
          <View style ={styles.mainListSPList}>
            <FlatList
            showsVerticalScrollIndicator ={false}
            data={selectData()}
            renderItem={({item, index}) => 
            <View style = {styles.mainListSPListItem}>
              <TouchableOpacity  onPress={() => setItemVisible(index)}  style={{flex : 1}}>
              <View style ={{flex : 1,flexDirection :'row'}}>
                <View  style={styles.itemListSPSP}>
                  <Text style={{flex : 0.5}} >{item.id}</Text>
                  <Text style={{flex : 3,flexWrap: 'wrap',color : '#333333'}} >{item.key}</Text>
                </View>   
                <Text style={styles.itemListSPSL}>{item.sl}</Text>
                <Text numberOfLines={1}  style={styles.itemListSPSL}>{item.dt} ??</Text>
              </View>
              
              <View style ={{flex : 1}}>
              { itemVisible==index ? 
                <View>
                {
                  item.date == null ? null : 
                  <View>
                  <View style={{flex :2,flexDirection :'row'}}>
                    {
                      item.logo == null ? null :  <Text style={{}}>{item.logo}</Text>
                    }   
                      <View>
                      {
                        item.code == null ? null : <Text style={{fontSize : 18,color:'#333333'}}>{item.code}</Text>
                      }
                      {   
                        item.date == null ? null :  <Text style={{fontSize:13}}>Ng??y :{item.date}</Text>
                      }
                      {
                        item.soluong == null ? null : <Text style={{fontSize:13}}>S??? l?????ng : {item.soluong}</Text>  
                      } 
                      </View>
                      <View  style={{flex :1,justifyContent:'flex-end',flexDirection:'row'}}>
                      <Text numberOfLines={1} style={{color: '#F13612',fontSize : 18,fontWeight :'bold'}}>{item.price} ??</Text>
                  </View>

                    </View>
                  
                  </View>
                }
                  </View> 
                : null
              }   
              </View>
              </TouchableOpacity> 
            </View>}
            />
          </View>
        </View>
      </View>
      <View style ={styles.footer}></View>
    
    <Modal
    visible={modalSelectDate}
    animationType={'slide'}
    >
    <View style={styles.backButton}>
      <Icon style={{textAlign :'left'}}
          name='arrow-back-outline'
          type='ionicon'        
          onPress={() => closeCalendar() } />
    </View>
    <View style={styles.calendarPicker}>
    <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={new Date(1900, 1, 1)}
          maxDate={new Date()}
          weekdays={
            [
              'T2', 
              'T3', 
              'T4', 
              'T5', 
              'T6', 
              'T7', 
              'CN'
            ]}
          months={[
            'Th??ng 1',
            'Th??ng 2',
            'Th??ng 3',
            'Th??ng 4',
            'Th??ng 5',
            'Th??ng 6',
            'Th??ng 7',
            'Th??ng 8',
            'Th??ng 9',
            'Th??ng 10',
            'Th??ng 11',
            'Th??ng 12',
          ]}
          previousTitle ={<Icon style={{textAlign :'left'}}
          name='chevron-back-outline'
          type='ionicon'        
           />}
          nextTitle = 
          {<Icon style={{textAlign :'left'}}
          name='chevron-forward-outline'
          type='ionicon'        
           />}
          selectedDayColor="#FBC73A"        
          onDateChange={onDateChange}
        />
    </View>
    <TouchableOpacity style={styles.doneButton}>
    <View style={{flex : 1}}>
          <Text onPress={() => submitPickCalendar()} style={{textAlign : 'center',flex :1,textAlignVertical : 'center',fontSize : 18, fontWeight :'500',color : '#333333'}}>XONG</Text>
    </View>
    </TouchableOpacity>
    </Modal>

    <Modal
     visible={modalSelectBranch}
    animationType={'fade'}>
          <View style={{flex : 1}}>
            <View style={{flex :1,flexDirection :'row'}}>
              <TouchableOpacity onPress={closeBranch} style={{alignSelf:'center',paddingLeft:23}}>
                <Icon style={{textAlign :'left'}}
                  name='arrow-back-outline'
                  type='ionicon'
                />
              </TouchableOpacity>
              <Text style={{alignSelf:'center',fontSize:24,fontWeight:'600',paddingLeft:22,color :'#333333'}}>Ng??nh T??n</Text>
            </View>
            <View style={{flex:0.2,backgroundColor:'#F2F2F2'}}></View>
            <View style={{flex:5}}>
              <View style={{flex:0.2,flexDirection:'row',borderBottomWidth:1,borderColor :'#E0E0E0',alignItems:'center'}}>
                <Text style={{flex:1,textAlign:'center'}}>Th????ng Hi???u</Text>
                <Text style={{flex:1,textAlign:'center'}}>T???ng s???n l?????ng</Text>
                <Text style={{flex:1,textAlign:'center'}}>Doanh thu</Text>
              </View>
              <View style={{flex:3}}>
              <FlatList
            showsVerticalScrollIndicator ={false}
            data={selectData()}
            renderItem={({item}) => 
            <View style = {styles.mainListSPListItem}>
              <TouchableOpacity onPress={() =>console.log('---------------------',item.id) }  style={{flex : 1}}>
              <View style ={{flex : 1,flexDirection :'row'}}>
                <View  style={styles.itemListSPSP}>
                  <Text style={{flex : 0.5}} >{item.id}</Text>
                  <Text style={{flex : 3,flexWrap: 'wrap',color : '#333333'}} >{item.key}</Text>
                </View>   
                <Text style={styles.itemListSPSL}>{item.sl}</Text>
                <Text numberOfLines={1}  style={styles.itemListSPSL}>{item.dt} ??</Text>
              </View>
              
              <View visible={true}  style ={{flex : 1,flexDirection:'row'}}>
              { itemVisible ==item ? 
                <View>
                <View style={{flex :2,flexDirection :'row'}}>
                    <Text style={{flex : 0.5}}>{item.logo}</Text>
                    <View>
                      <Text style={{fontSize : 18,color:'#333333'}}>{item.code}</Text>
                      <Text style={{fontSize:13}}>Ng??y :{item.date}</Text>
                      <Text style={{fontSize:13}}>S??? l?????ng : {item.soluong}</Text>
                    </View>
                  </View>
                  <View  style={{flex :1}}>
                    <Text numberOfLines={1} style={{color: '#F13612',fontSize : 18,fontWeight :'bold'}}>{item.price}</Text>
                  </View>
                </View>
                : null
              }
                  
              </View>
              </TouchableOpacity> 
            </View>}
            />
              </View>
            </View>
          </View>
    </Modal>
  </View>
  );
}

