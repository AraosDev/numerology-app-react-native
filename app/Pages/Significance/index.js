import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Headline, Card, Title, Paragraph, Subheading } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import Header from '../../Components/Header';
import { LifePathBenefits, DestinyNumberBenefits } from '../../Common/Common Helpers';

function Significance() {

    const [ activityIndex, setActivityIndex ] = useState(0)

    const renderItems = ({item, index}) =>{
        return(
            <Card style={{flex: 1, backgroundColor: 'black'}}>
                <ScrollView>
                <Card.Content>
                    <Title style={{color:'white', textAlign:'center', fontSize: 30, paddingVertical: 10}}>{item.Number}</Title>
                    <Paragraph style={{color:'white'}}>{item.Benefits}</Paragraph>
                </Card.Content>
                </ScrollView>
            </Card>
        )
    }

    return (
        <>
            <Header title='Number Significance' />
            <ScrollView style={styles.totalHome}>
                <View style={styles.header}>
                    <Headline style={styles.text}>Life Path Number</Headline>
                    <Subheading style={styles.text}>Swipe to see other numbers</Subheading>
                </View>
                <SafeAreaView style={styles.content}>
                    <View style={{flex: 1, marginBottom: 10}}>
                        <Carousel
                        layout={"default"}
                        data={LifePathBenefits}
                        sliderWidth={350}
                        itemWidth={350}
                        renderItem={renderItems}
                        onSnapToItem = { index => setActivityIndex(index) } />
                    </View>
                </SafeAreaView>
                <View style={styles.header}>
                    <Headline style={styles.text}>Destiny Number</Headline>
                    <Subheading style={styles.text}>Swipe to see other numbers</Subheading>
                </View>
                <SafeAreaView style={styles.content}>
                    <View style={{flex: 1, marginBottom: 10}}>
                        <Carousel
                        layout={"default"}
                        data={DestinyNumberBenefits}
                        sliderWidth={350}
                        itemWidth={350}
                        renderItem={renderItems}
                        onSnapToItem = { index => setActivityIndex(index) } />
                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    totalHome:{
        flex:1,
        backgroundColor:'#383838',
        flexDirection:'column'
    },
    header:{
        flex: 1,
        padding: 10,
    },
    content:{
        flex: 5,
        paddingHorizontal: 20,
    },
    text: {
        color: 'white'
    }
})

export default Significance;
