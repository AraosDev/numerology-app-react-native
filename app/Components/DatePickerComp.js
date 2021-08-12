import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import DatePicker from 'react-native-datepicker'

export default function DatePickerComp(props) {
    const { label, style, date, mode, placeholder, format, maxDate, confirmBtnText, cancelBtnText, onDateChange } = props;
    return (
        <View style={styles.pickerContainer}>
            <Text style={{color: 'white', marginBottom: 5}}>{label}</Text>
            <DatePicker
                style={style}
                date={date}
                mode={mode}
                placeholder={placeholder}
                format={format}
                maxDate={maxDate}
                confirmBtnText={confirmBtnText}
                cancelBtnText={cancelBtnText}
                onDateChange={onDateChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    pickerContainer: {
        flex: 1,
        flexDirection: 'column',
        color: 'white',
        width: '100%'
    }
})
