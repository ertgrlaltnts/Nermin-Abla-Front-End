import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginPage from './pages/LoginPage';
import SignInPage from './pages/SignInPage';
import HomePage from './pages/HomePage';
import ImagePickPage from './pages/ImagePickPage';
import HoroscopePage from './pages/HoroscopePage';
import TellerSelectPage from './pages/TellerSelectPage';
import TransferPage from './pages/TransferPage';
import TellingPage from './pages/TellingPage';
import InboxPage from './pages/InboxPage/InboxPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import {useSelector} from 'react-redux';
import {selectIsLoggedIn} from '../store/authSlice';
import Home from '../src/assets/svg/home.svg';
import Inbox from '../src/assets/svg/inbox.svg';
import Profile from '../src/assets/svg/profile.svg';
import Header from './components/Header';
import AddGoldPage from './pages/AddGoldPage';
import HeaderLeft from './components/HeaderLeft/HeaderLeft';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignIn"
            component={SignInPage}
            options={{
              headerTitle: 'Kayıt',
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#181A1F',
              },
            }}
          />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator>
          <Tab.Screen
            name="HomePage"
            component={HomeStackScreen}
            options={({navigation}) => ({
              headerTitle: () => <Header />,
              headerLeft: () => (
                <HeaderLeft onPress={() => navigation.navigate('AddGold')} />
              ),
              headerTitleAlign: 'center',
              tabBarLabel: '',
              tabBarActiveTintColor: '#fff',
              tabBarInactiveTintColor: '#fff',
              tabBarIcon: () => <Home width={28} height={28} fill={'#fff'} />,
              headerStyle: {
                backgroundColor: '#181A1F',
              },
              tabBarStyle: {
                paddingVertical: 8,
                backgroundColor: '#652A6C',
              },
            })}
          />
          <Tab.Screen
            name="InboxPage"
            component={InboxStackScreen}
            options={({navigation}) => ({
              headerTitle: () => <Header />,
              headerLeft: () => (
                <HeaderLeft onPress={() => navigation.navigate('AddGold')} />
              ),
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
              tabBarLabel: '',
              tabBarActiveTintColor: '#fff',
              tabBarInactiveTintColor: '#fff',
              tabBarIcon: () => <Inbox width={30} height={30} fill={'#fff'} />,
              headerStyle: {
                backgroundColor: '#181A1F',
              },
              tabBarLabelStyle: {
                fontSize: 12,
              },
              tabBarStyle: {
                paddingVertical: 8,
                backgroundColor: '#652A6C',
              },
            })}
          />
          <Tab.Screen
            name="ProfilePage"
            component={ProfileStackScreen}
            options={({navigation}) => ({
              headerTitle: () => <Header />,
              headerLeft: () => (
                <HeaderLeft onPress={() => navigation.navigate('AddGold')} />
              ),
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
              tabBarLabel: '',
              tabBarActiveTintColor: '#fff',
              tabBarInactiveTintColor: '#fff',
              tabBarIcon: () => (
                <Profile width={30} height={30} fill={'#fff'} />
              ),
              headerStyle: {
                backgroundColor: '#181A1F',
              },
              tabBarLabelStyle: {
                fontSize: 12,
              },
              tabBarStyle: {
                paddingVertical: 8,
                backgroundColor: '#652A6C',
              },
            })}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

const InboxStack = createNativeStackNavigator();

const InboxStackScreen = () => {
  return (
    <InboxStack.Navigator>
      <InboxStack.Screen
        name="Inbox"
        component={InboxPage}
        options={{headerShown: false}}
      />
      <InboxStack.Screen
        name="Telling"
        component={TellingPage}
        options={{headerShown: false}}
      />
      <InboxStack.Screen
        name="AddGold"
        component={AddGoldPage}
        options={{headerShown: false}}
      />
    </InboxStack.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomePage}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="ImagePick"
        component={ImagePickPage}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="TellerSelect"
        component={TellerSelectPage}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Transfer"
        component={TransferPage}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Horoscope"
        component={HoroscopePage}
      />
      <HomeStack.Screen
        name="Inbox"
        component={InboxPage}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Telling"
        component={TellingPage}
        options={{headerShown: false}}
      />

      <HomeStack.Screen
        name="AddGold"
        component={AddGoldPage}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

const ProfileStack = createNativeStackNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfilePage}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name="AddGold"
        component={AddGoldPage}
        options={{headerShown: false}}
      />
    </ProfileStack.Navigator>
  );
};

export default App;
