import React, { useState } from 'react';
import {  Text, View,Image,SafeAreaView,StatusBar,ScrollView,TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';


export default function App({navigation}) {



return (
    <SafeAreaView style={{
        flex: 1,
        }}>
    <ScrollView style={{backgroundColor: 'lightblue',flex:1}}>
        <View style={{backgroundColor:'#ECC259',height:150}}></View>
        <View style={{
            marginLeft:15
        }}>
            <View style={{
                alignSelf:'flex-start',
                marginTop:-40   
            }}>
                <TouchableOpacity
                    onPress={() => console.log("mở màn hình profile")}>
                    <Image style={{
                        width:105,
                        height:105,
                        borderRadius:50,
                        
                        }}
                        source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}>
                    </Image>
                </TouchableOpacity>
            </View>
            <Text style={{
                fontSize:24,
                color:'#333333',
                paddingTop:20,
                fontWeight:'600'
            }}>
            NML 10001 - Dương Ngọc Hà
            </Text>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                paddingTop:6
            }}>
                <Icon
                name='female-outline'
                type='ionicon'
                size={14}        
                />
                <Text style={{
                    fontSize:16,
                    paddingLeft:6
                }}> 
                Nữ
                </Text>
            </View>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                paddingTop:6
            }}>
                <Icon
                name='call-outline'
                type='ionicon'
                size={14}        
                />
                <Text style={{
                    fontSize:18,
                    paddingLeft:6,
                    color:'#4F4F4F'
                }}> 
                0934 447 723
                </Text>
            </View>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                paddingTop:6
            }}>
                <Icon
                name='mail-outline'
                type='ionicon'
                size={14}        
                />
                <Text style={{
                    fontSize:18,
                    paddingLeft:6,
                    color:'#4F4F4F'
                }}> 
                hadn@minhlong.com
                </Text>
            </View>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                paddingTop:18
            }}>
                <Text style={{
                    fontSize:12,
                    color:'#4F4F4F'
                }}> 
                Xem thêm
                </Text>
                <Icon
                    name='arrow-down-outline'
                    type='ionicon'
                    size={12}        
                />     
            </View>
        </View>
        <View style={{height:10,backgroundColor :'#F2F2F2',marginTop:30,marginBottom:26}}></View>
        
      </ScrollView>

    </SafeAreaView>
)

}

