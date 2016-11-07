/**
 * Created by wangdi on 5/11/16.
 */
'use strict';

import {PixelRatio} from 'react-native';
import px2dp from '../util/px2dp';

const globalTextColor = '#000';

module.exports = {
    pageBackgroundColor: '#f4f4f4',
    actionBar: {
        height: px2dp(49),
        backgroundColor: 'rgb(22,131,251)',
        fontSize: px2dp(15),
        fontColor: 'white'
    },
    text: {
        color: globalTextColor,
        fontSize: px2dp(15)
    },
    scrollView: {
        fontSize: px2dp(13),
        underlineStyle: {
            backgroundColor: 'white'
        }
    }
};