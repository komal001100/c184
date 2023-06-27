import React from 'react';
import{
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	StatusBar,
	Platform,
	ScrollView,
	TouchableOpacity,
	Image
}  from' react-native';

import{RFValue, RFPercentage}from'react-native-responsive-fontsize';

import * as Permissions from 'expo-permissions';

import * as FaceDetector from 'expo-face-detector';

import{camera} from 'expo-camera';

import Filter1 from './Filter1';
import Filter2 from './Filter2';
import Filter3 from './Filter3';
import Filter4 from './Filter4';
import Filter5 from './Filter5';
import Filter6 from './Filter6';
import Filter7 from './Filter7';
import Filter8 from './Filter8';
import Filter9 from './Filter9';
import Filter10 from './Filter0';

let data = {
	regular : [
		
		{

			id : '1',

			image: require('../assets/glasses.png'),
		},
	],

	wayFarer : [
		{
			id : '4',

			image : require('../assets/Frapp-03.png'),

		},

		{
			id : '5',
			image : require('../assets/Frapp-04.png'),

		},

		
	],

	rimless : [
		{
			id : '10',
			image : require('../assets/Frapp-09.png'),

			
		},
	],

	round : [
		{
			id : '2',
			image : require('../assets/glasses-round.png'),

		},

		{
			id : '3',
			image : require('../assets/Frapp-02.png'),
			
			
		},
	],

	aviator : [
		{
			id : '6',
			image : require('../assets/Frapp-05.png'),
		},

		{
			id :'7',
			image : require('../assets/Frapp-06.png'),
		},

		{
			id : '8',
			image : require('../assets/Frapp-07.png'),
		},

		{
			id : '9',
			image : require('../assets/Frapp-08.png'),

		},
	],
};






