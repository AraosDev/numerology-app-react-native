import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';
import Header from '../../Components/Header'
import { Headline, Card, Title, Paragraph } from 'react-native-paper';
import { HowToContent } from '../../Common/HowToContent';

const HowToCards = ({item})=>{
    const { Content } = item
    return(
    <>
        <Card style={{flex:1, backgroundColor: 'black', marginBottom: 10}}>
            <Card.Content>
                <Paragraph style={{color:'white'}}>{Content}</Paragraph>
            </Card.Content>
        </Card>
    </>    
    )
}

function HowTo() {
    return (
        <>
            <Header title='How To Calculate' />
            <ScrollView style={styles.totalHome}>
            {
                HowToContent.map(content =>
                    <React.Fragment key={content.Type}>
                        <View style={styles.header}>
                            <Headline style={styles.text}>{content.Type}</Headline>
                        </View>
                        <View style={styles.content}>
                            <HowToCards item={content} />
                        </View> 
                    </React.Fragment>
                )
            }
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    totalHome:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#383838'
    },
    header:{
        flex: 1,
        padding: 10,
    },
    content:{
        flex: 4,
        paddingHorizontal: 20
    },
    text:{
        color: 'white'
    }
})

export default HowTo;
