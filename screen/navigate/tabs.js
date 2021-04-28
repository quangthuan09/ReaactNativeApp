import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './../main';
import HomeScreen from './../home';
import AddCustomerScreen from './../home/addCustomer';
import DetailCustomerScreen from './../home/detailCustomer';
import ReportScreen from './../report';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './../profile';
const Tab = createBottomTabNavigator();


const StackMain = createStackNavigator();
const StackHome = createStackNavigator();
const StackProfile = createStackNavigator();

function MainStack({navigator,route}){
    return(
        <StackMain.Navigator>
            <StackMain.Screen 
                name ={"Main"}
                component={MainScreen}
                options={{
                    headerShown: false,
                }}
            >
            </StackMain.Screen>
            <StackMain.Screen 
                name ={"ReportScreen"}
                component={ReportScreen}
                options={{
                    headerShown: false,
                }}
            >
            </StackMain.Screen>
        </StackMain.Navigator>
    );
}

function HomeStack({navigator,route}){
    return(
        <StackHome.Navigator>
            <StackHome.Screen 
                name ={"Home"}
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            >
            </StackHome.Screen>
            <StackHome.Screen 
                name ={"AddCustomerScreen"}
                component={AddCustomerScreen}
                options={{
                    headerShown: false,
                }}
            >
            </StackHome.Screen>
            <StackHome.Screen 
                name ={"DetailCustomerScreen"}
                component={DetailCustomerScreen}
                options={{
                    headerShown: false,
                }}
            >
            </StackHome.Screen>
        </StackHome.Navigator>
    );
}

function ProfileStack({navigator,route}){
    return(
        <StackProfile.Navigator>
            <StackProfile.Screen 
                name ={"Main"}
                component={ProfileScreen}
                options={{
                    headerShown: false,
                }}
            >
            </StackProfile.Screen>
        </StackProfile.Navigator>
    );
}

export default function App1(){
    return (
        <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={MainStack} ></Tab.Screen>
            <Tab.Screen name="Khách hàng" component={HomeStack} ></Tab.Screen>
            <Tab.Screen name="Menu" component={ProfileStack} ></Tab.Screen>
        </Tab.Navigator>
        
        </NavigationContainer>
    );

};