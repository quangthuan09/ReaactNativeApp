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

  const [modalSelectDate, setModalSelectDate]= useState(false);
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

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "Ngày bắt đầu không được lớn hơn ngày kết thúc trước",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };
  const openCalendar = () => {
    setModalSelectDate(true)
  }
  const closeCalendar = () =>{
    setModalSelectDate(false);
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
    {key: 'Sản Phẩm',id :1},
    {key: 'Ngành Hàng',id :2},
    {key: 'Thương Hiệu',id :3},
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
      console.log('ko có dữ liệu');
    }
    return data
  }
  const selectDataSP = () =>{
    let dataSP;
    if(selectedID == 1){
      dataSP = DataSP.TonCanNguoi;
      console.log('sdsd--------sdsdsd')
    }
    if(selectedID == 2){
      dataSP = DataSP.TonLanhMau;
      console.log('sdsd--------sdsdsd')
    }
    return dataSP
  }
  const DataSP = {
    "TonCanNguoi" :[
      {
      "id" : 1,
      "logo" : "a",
      "code" : "ML0900221001",
      "date" : "002/2021",
      "sl" : "5",
      "price" : "11.000.000",
      },
      {
        "id" : 2,
        "logo" : "b",
        "code" : "ML0900221001",
        "date" : "08/2/2021",
        "sl" : "2",
        "price" : "11.00.000",
      },
      
    ],
    "TonLanhMau" : [
      {
        "id" : 1,
        "logo" : "c",
        "code" : "ML0900221001",
        "date" : "08/02/2021",
        "sl" : "3",
        "price" : "1000",
      },
      {
        "id" : 2,
        "logo" : "d",
        "code" : "ML0900221001",
        "date" : "08/02/2021",
        "sl" : "6",
        "price" : "11.000.000",
      }, 
    ]
  };
  const Data = {
      "Data" : 
        {
          "SanPham" : [
            {
              "id" : 1,
              "key" : "Tôn cuộn cán nguội",
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
              "key" : "Tôn lạnh màu",
              "sl" : "12.000",
              "dt" : "93.500.000",

                  "logo" : "a",
                  "code" : "ML0900221001",
                  "date" : "002/2021",
                  "soluong" : "5",
                  "price" : "11.000.000",

            },
            {
              "id" : 3,
              "key" : "Tôn kẽm màu",
              "sl" : "15.000",
              "dt" : "89.000.000"
            },
            {
              "id" : 4,
              "key" : "Thép thanh Thép hình V",
              "sl" : "40.000",
              "dt" : "87.500.000"
            },
            {
              "id" : 5,
              "key" : "Tôn cuộn tẩy gỉ và phủ dầu",
              "sl" : "30.000",
              "dt" : "85.500.000"
            },
          ],
          "NganhHang" :[
            {
              "key" : "Tôn",
              "sl" : "14.000",
              "dt" : "115.135.000"
            },
            {
              "key" : "Thép",
              "sl" : "12.000",
              "dt" : "135.000.00"
            },
            
          ],
          "ThuongHieu" :[
            {
              "key" : "Tôn Hoa Sen ",
              "sl" : "13.000",
              "dt" : "135.000"
            },
            {
              "key" : "Hòa Phát",
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
          <Text style={{fontSize : 24,color : '#333333',fontWeight :'600',marginLeft : 22}}>Báo cáo</Text>
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
        <View style= {styles.mainTotalPay}>
          <Text style={{fontSize : 18,textAlign : 'center',color : '#333333'}}>Doanh thu</Text>
          <Text style={{fontSize : 22,textAlign : 'center',color : '#333333'}}>20.000.000 đ</Text>
        </View>
        <View style= {styles.mainTotalPay}>
        <Text style={{fontSize : 18,textAlign : 'center',color : '#333333'}}>Tổng sản lượng</Text>
          <Text style={{fontSize : 22,textAlign : 'center',color : '#333333'}}>140.000</Text>
        </View>
      </View>
      <View style ={styles.main}>
        <View style ={styles.mainListDS}>
          <Text style={{fontSize : 18,color : '#333333',fontWeight :'600',marginLeft : 22}}>Danh sách doanh thu theo :</Text>
          <View style={styles.mainListDSFlagList}>
          <FlatList
          ref={cateButonList}
          showsVerticalScrollIndicator ={false}
          showsHorizontalScrollIndicator={false}
          horizontal = {true}
          data={DataPick}
          
        renderItem={({item, index}) => 
        <TouchableOpacity  
          onPress={()=>{setSelectButton(item.id), 
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
            <Text style ={styles.mainListSpTitleText}>Sản phẩm</Text>
            <Text style ={styles.mainListSpTitleText1}>Sản lượng (kg)</Text>
            <Text style ={styles.mainListSpTitleText1}>Doanh Thu</Text>
          </View>
          <View style ={styles.mainListSPList}>
            <FlatList
            showsVerticalScrollIndicator ={false}
            data={selectData()}
            renderItem={({item}) => 
            <View style = {styles.mainListSPListItem}>
              <TouchableOpacity onPress={() => console.log('---------------------',item.id) }  style={{flex : 1}}>
              <View style ={{flex : 1,flexDirection :'row'}}>
                <View  style={styles.itemListSPSP}>
                  <Text style={{flex : 0.5}} >{item.id}</Text>
                  <Text style={{flex : 3,flexWrap: 'wrap',color : '#333333'}} >{item.key}</Text>
                </View>   
                <Text style={styles.itemListSPSL}>{item.sl}</Text>
                <Text numberOfLines={1}  style={styles.itemListSPSL}>{item.dt} đ</Text>
              </View>
              
              <View  style ={{flex : 1,flexDirection:'row'}}>
                <View style={{flex :2,flexDirection :'row'}}>
                  <Text style={{flex : 0.5}}>{item.logo}</Text>
                  <View>
                    <Text style={{fontSize : 18,color:'#333333'}}>{item.code}</Text>
                    <Text style={{fontSize:13}}>Ngày :{item.date}</Text>
                    <Text style={{fontSize:13}}>Số lượng : {item.soluong}</Text>
                  </View>
                </View>
                <View style={{flex :1}}>
                  <Text numberOfLines={1} style={{color: '#F13612',fontSize : 18,fontWeight :'bold'}}>11.000.000 đ</Text>

                </View>

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
            'Tháng 1',
            'Tháng 2',
            'Tháng 3',
            'Tháng 4',
            'Tháng 5',
            'Tháng 6',
            'Tháng 7',
            'Tháng 8',
            'Tháng 9',
            'Tháng 10',
            'Tháng 11',
            'Tháng 12',
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
    </View>
  );
}

