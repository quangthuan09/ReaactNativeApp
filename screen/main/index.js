import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import {  Text, View,Image} from 'react-native';
export default function App({navigation}) {

const [currentDate,setCurrentDate]= useState(new Date());

const openReportScreen = () =>{
  navigation.navigate('ReportScreen')
  console.log("abc")
}

return (
  <View style={{
    flex:1,
    backgroundColor:'#F8F8F8'
    }}>
    <View style={{
      flex:1,
      backgroundColor:'#ECC259',
      borderBottomEndRadius:20,
      borderBottomStartRadius:20}}>
      <View style={{
        width:52,
        height:52,
        backgroundColor:'blue',
        alignSelf:'flex-end',
        margin:23,
        alignItems:'center'}}>
        <TouchableOpacity onPress={() => console.log("mở màn hình profile")}>
          <Image style={{width:50,height:50}}
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}>
          </Image>
        </TouchableOpacity> 
      </View>
      <Text style={{
        color:'#333333',
        fontSize:28,
        paddingLeft:20
        }}>Xin chào
      </Text>
      <Text style={{
        color:'#333333',
        fontSize:24,
        paddingLeft:20
        }}>NML10001 - Dương Ngọc Hà
      </Text>
      <Text style={{
        paddingLeft:20,
        color:'#4F4F4F',
        fontSize:16,
        paddingTop:13
      }}>
        {currentDate.getHours()}:{currentDate.getMinutes()}, ngày {currentDate.getUTCDate()}/{currentDate.getUTCMonth()+1}/{currentDate.getUTCFullYear()}
      </Text>
    </View>
    <View style={{
      flex:1,
      backgroundColor:'white',
      borderRadius:20,
      marginTop:-30,
      margin:5
    }}>
      <Text style={{
        paddingLeft:21,
        color:'#333333',
        fontSize:20,
        fontWeight:'600',
        paddingTop:20
      }}>
      Doanh thu
      </Text>
      <View style={{
        backgroundColor:'#F8F8F8',
        margin:8,
        borderRadius:15
      }}>
        <Text style={{
          color:'#4F4F4F',
          paddingLeft:23,
          paddingTop:14,
          fontSize:15,
          fontWeight:'bold'
        }}>
        Tổng doanh thu
        </Text>
        <Text style={{
          color:'#EB2020',
          paddingLeft:23,
          fontSize:30,
          fontWeight:'bold',
          paddingBottom:13
        }}>
        20.000.000.000 đ
        </Text>
      </View>

      <View style={{
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'#F1F1F1',
        marginLeft:7,
        marginRight:7
      }}>
        <View style={{
          flexDirection:'row',
          flex:1,
          paddingLeft:18,
          marginBottom:7,
          marginTop:7
        }}>
          <View>
            <View style={{
              backgroundColor:'#ECC259',
              width:6,
              height:6,
              borderRadius:50,
            }}>
            </View>
          </View>
          <View style={{
            paddingLeft:10,
            marginTop:-8
          }}>
            <Text style={{
              fontSize:15,
              color:'#4F4F4F'
            }}>
              Trọng lượng bán (kg)
            </Text>
            <Text style={{
              color:'#111111',
              fontSize:22
            }}>
              10 000
            </Text>
          </View>
        </View>
        <View style={{
          flexDirection:'row',
          flex:1,
          paddingLeft:18,
          borderLeftWidth:1,
          borderColor:'#F1F1F1',
          marginBottom:7,
          marginTop:7,
        }}>
          <View>
            <View style={{
              backgroundColor:'#ECC259',
              width:6,
              height:6,
              borderRadius:50,
            }}>
            </View>
          </View>
          <View style={{
            paddingLeft:10,
            marginTop:-8,
          }}>
            <Text style={{
              fontSize:15,
              color:'#4F4F4F'
            }}>
              Đơn hàng
            </Text>
            <Text style={{
              color:'#111111',
              fontSize:22
            }}>
              1 375
            </Text>
          </View>
        </View>  
      </View>

      <View style={{
        flexDirection:'row',
        marginLeft:7,
        marginRight:7,
        paddingTop:5,
      }}>
        <View style={{
          flexDirection:'row',
          flex:1,
          paddingLeft:18,
          marginBottom:7,
          marginTop:7
        }}>
          <View>
            <View style={{
              backgroundColor:'#ECC259',
              width:6,
              height:6,
              borderRadius:50,
            }}>
            </View>
          </View>
          <View style={{
            paddingLeft:10,
            marginTop:-8
          }}>
            <Text style={{
              fontSize:15,
              color:'#4F4F4F'
            }}>
              Tổng KH phát sinh ĐH
            </Text>
            <Text style={{
              color:'#111111',
              fontSize:22
            }}>
              10 000
            </Text>
          </View>
        </View>
        <View style={{
          flexDirection:'row',
          flex:1,
          paddingLeft:18,
          borderLeftWidth:1,
          borderColor:'#F1F1F1',
          marginBottom:7,
          marginTop:7,
        }}>
          <View>
            <View style={{
              backgroundColor:'#ECC259',
              width:6,
              height:6,
              borderRadius:50,
            }}>
            </View>
          </View>
          <View style={{
            paddingLeft:10,
            marginTop:-8,
          }}>
            <Text style={{
              fontSize:15,
              color:'#4F4F4F'
            }}>
              Công nợ (đ)
            </Text>
            <Text style={{
              color:'#111111',
              fontSize:22
            }}>
              200 000 000
            </Text>
          </View>
        </View>  
      </View>

    </View>
    <View style={{
      flex:0.5,
      backgroundColor:'white',
      borderRadius:15,
      margin:5
    }}>
      <View style={{
        flexDirection:'row',
        paddingLeft:21,
        paddingRight:21,
        paddingTop:5,
        alignItems:'center',
      }}>
        <Text style={{
          flex:1,
          fontSize:20,
          fontWeight:'600',
          color:'#333333'
        }}>
          Menu
        </Text>
        <Text style={{
          fontSize:16,
          color:'#777777'
        }}>
          xem tất cả  ---
        </Text>
      </View>
      <View style={{
        flexDirection:'row',
        flex:1,
      }}>
        <TouchableOpacity style={{flex:1}} onPress={openReportScreen}>
          <View style={{
            flex:1,
            backgroundColor:'#F8F8F8',
            alignItems:'center',
            borderRadius:15,
            margin:9,
          }}>
            <View style={{
              width:52,
              height:52,
              marginTop:15
            }}>
              <Image style={{width:50,height:50}}
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}>
              </Image>
            </View>
            <Text style={{
              color:'#4F4F4F'
            }}>
              Báo cáo
            </Text>
          </View>
        </TouchableOpacity>
        
        <View style={{
          flex:1,
          backgroundColor:'#F8F8F8',
          alignItems:'center',
          borderRadius:15,
          margin:9,
        }}>
          <View style={{
            width:52,
            height:52,
            marginTop:15
          }}>
            <Image style={{width:50,height:50}}
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}>
            </Image>
          </View>
          <Text style={{
            color:'#4F4F4F'
          }}>
            Công nợ
          </Text>
        </View>
        <View style={{
          flex:1,
          backgroundColor:'#F8F8F8',
          alignItems:'center',
          borderRadius:15,
          margin:9,
        }}>
          <View style={{
            width:52,
            height:52,
            marginTop:15
          }}>
            <Image style={{width:50,height:50}}
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}>
            </Image>
          </View>
          <Text style={{
            color:'#4F4F4F'
          }}>
            Sản phẩm
          </Text>
        </View>
      </View>
    </View>
  </View>
  );
}

