import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.box1}>
          <Text style={styles.text}>Header</Text>
        </View>

        <View style={styles.box2}>
            <Text style={styles.text}>Slider</Text>
        </View>

        <View style={styles.box3}>
          <Text style={styles.text}></Text>
            <View style={styles.box4}>
              <Text style={styles.text}>button 1</Text>
            </View>
            <View style={styles.box5}>
              <Text style={styles.text}>button 2</Text>
            </View>
            <View style={styles.box6}>
              <Text style={styles.text}>button 3</Text>
            </View>
            <View style={styles.box7}>
              <Text style={styles.text}>button 4</Text>
            </View>
        </View>

        <View style={styles.box8}>
          <Text style={styles.text}></Text>
              <View style={styles.box9}>
                <Text style={styles.text}>button 5</Text>
              </View>
              <View style={styles.box10}>
                <Text style={styles.text}>button 6</Text>
              </View>
              <View style={styles.box11}>
                <Text style={styles.text}>button 7</Text>
              </View>
              <View style={styles.box12}>
                <Text style={styles.text}>button 8</Text>
              </View>
        </View>

        <View style={styles.box13}>
          <Text style={styles.text}></Text>
              <View style={styles.box14}>
                <Text style={styles.text}>button 9</Text>
              </View>
              <View style={styles.box15}>
                <Text style={styles.text}>button 10</Text>
              </View>
              <View style={styles.box16}>
                <Text style={styles.text}>button 11</Text>
              </View>
              <View style={styles.box17}>
                <Text style={styles.text}>button 12</Text>
              </View>
        </View>

          <View style={styles.box18}>
            <Text style={styles.text}>footer</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'blue',
      flex: 1,
      //flexDirection: 'column'
  },
  box1: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   box2: {
    backgroundColor: 'white',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box3: {
      backgroundColor: 'black',
      flex: 2,
      //alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row'
  },
  box4: {
      backgroundColor: 'white',
      flex: 2,
      alignItems: 'center',
      justifyContent: 'space-around',
      width: 70,
      height: 70,
      marginTop: 20,
      marginLeft: 20,
      marginRight: 10,
      marginBottom: 20,
  },
  box5: {
      backgroundColor: 'yellow',
      flex: 2,
      alignItems: 'center',
      justifyContent: 'space-around',
      width: 70,
      height: 70,
      marginTop: 20,
      marginLeft: 20,
      marginRight: 10,
      marginBottom: 20
  },
  box6: {
      backgroundColor: 'red',
      flex: 2,
      alignItems: 'center',
      justifyContent: 'space-around',
      width: 30,
      height: 70,
      marginTop: 20,
      marginLeft: 20,
      marginRight: 10,
      marginBottom: 20
  },
  box7: {
      backgroundColor: 'green',
      flex: 2,
      alignItems: 'center',
      justifyContent: 'space-around',
      width: 70,
      height: 70,
      marginTop: 20,
      marginLeft: 20,
      marginRight: 10,
      marginBottom: 20
  },
box8: {
    backgroundColor: 'black',
    flex: 2,
    //alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
},
box9: {
    backgroundColor: 'gold',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 70,
    height: 70,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 10,
    marginBottom: 20,
},
box10: {
    backgroundColor: 'pink',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 70,
    height: 70,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 10,
    marginBottom: 20
},
box11: {
    backgroundColor: 'blue',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 70,
    height: 70,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 10,
    marginBottom: 20
},
box12: {
    backgroundColor: 'yellow',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 70,
    height: 70,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 10,
    marginBottom: 20
},
box13: {
    backgroundColor: 'black',
    flex: 2,
    //alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
},
box14: {
    backgroundColor: 'gold',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 70,
    height: 70,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 10,
    marginBottom: 20,
},
box15: {
    backgroundColor: 'pink',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 70,
    height: 70,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 10,
    marginBottom: 20
},
box16: {
    backgroundColor: 'blue',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 70,
    height: 70,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 10,
    marginBottom: 20
},
box17: {
    backgroundColor: 'yellow',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 70,
    height: 70,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 10,
    marginBottom: 20
},
box18: {
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
});
