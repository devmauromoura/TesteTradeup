import React from 'react';
import {Image} from 'react-native';
import logotradeup from '../../assets/images/logotradeup.png';

const LogoTitle = () => {
    return(
        <Image
        style={{ width: 40, height: 40, alignSelf: 'center' }}
        source={logotradeup}
      />
    )
}

export default LogoTitle;