import React from 'react';
import { Text } from 'react-native';
import { SectionRow, SettingsPage, NavigateRow, BaseRow } from 'react-native-settings-view';

 export default function SettingScreen() {
   return (
     <>
<SettingsPage>
  <SectionRow title="SETTINGS" titleStyle={{backgroundColor:'white',textAlign:'center',width:'100%'}}>
    <NavigateRow
      text="Terms and conditions"
     
      leftIcon={{
        name: 'file-document',
        type: 'material-community',
      }}
      onPress={() => console.log('terms')}
    />
    <NavigateRow
      text="Privacy Policy"
      leftIcon={{
        name: 'folder-lock',
        type: 'material-community',
      }}
      onPress={() => console.log('policy')}
    />
    <NavigateRow
      text="Contact us"
      leftIcon={{
        name: 'users',
        type: 'font-awesome',
      }}
      onPress={() => console.log('contact')}
    />
     {/* <CheckRow
      text="Notifications"
      checked
      leftIcon={{
        name: 'ios-notifications',
        type: 'ionicon',
      }}
      onValueChange={(isChecked) => console.log('checked', isChecked)}
    />  */}
    {/* <SwitchRow
      text="Do not disturb"
      enabled
      leftIcon={{
        name: 'do-not-disturb',
        type: 'material-community',
      }}
      onValueChange={(isEnabled) => console.log('checked', isEnabled)}
    /> */}
    <BaseRow
      text={('version')}
      leftIcon={{
        name: 'tag',
        type: 'font-awesome',
      }}
      rightContent={<Text>0.1.0</Text>}
    />
  </SectionRow>
</SettingsPage>
     </>
   )
 }
 
