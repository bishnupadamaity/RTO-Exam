import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLOR } from '~/utils/Color/Color';
import { HEIGHT } from '~/utils/Constants/Constants';

/**
 * CustomDropdown Component
 *
 * This functional component renders a customizable dropdown menu
 * using the react-native-element-dropdown package. It allows users
 * to select an item from a list of options, with support for searching
 * and displaying selected items.
 *
 * Props:
 * - data: An array of objects representing the dropdown options.
 * - placeholder: A string that serves as the placeholder text when no value is selected.
 * - onChange: A function to be called when an item is selected, passing the selected value.
 * - height: The height of the dropdown component (default is 45).
 * - borderRadius: The border radius of the dropdown component (default is 12).
 * - userSelectedValue: An initial selected value passed down to the component.
 *
 * State:
 * - selectedValue: Manages the currently selected value in the dropdown.
 */

const CustomDropdown: React.FC<{
    data: any[],
    placeholder: string,
    onChange: any,
    height?: number,
    borderRadius?: number,
    userSelectedValue?: string,
    disabled?: boolean,
    isLabel?: boolean,
    required?: boolean,
    optionalTextVisible?: boolean,
    label?: string
}> = ({
    data,
    placeholder,
    onChange,
    height = 45,
    borderRadius = 5,
    userSelectedValue,
    disabled = false,
    isLabel = true,
    required = false,
    optionalTextVisible = false,
    label
}) => {
    const [selectedValue, setSelectedValue] = useState<string>(
        userSelectedValue || '',
    );

    console.log({ userSelectedValue }, { selectedValue }, 'In Custom Dropdown')

    return (
        <View style={{marginTop:5}}>
            {
                            isLabel && 
                            <View style={styles.labelContainer}>
                                <Text style={styles.label}>{label}{!required ? (
                                    <>
                                        {
                                            optionalTextVisible && <Text style={styles.optionalLabel}>(Optional)</Text>
                                        }
                                    </>
                                ) : (<Text style={{ color: 'red' }}>*</Text>)}</Text>
            
                            </View>
                        }
            <Dropdown
                style={[styles.dropdown, { height, borderRadius }]}
                containerStyle={styles.dropdownContainer}
                data={data}
                disable={disabled}
                labelField="label"
                valueField="value"
                placeholder={placeholder || '- - Select - -'}
                value={userSelectedValue || selectedValue}
                onChange={item => {
                    setSelectedValue(item?.value);
                    onChange(item);
                }}
                // search
                searchPlaceholder="Search"
                maxHeight={HEIGHT * 0.7}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                itemTextStyle={styles.itemTextStyle}
                dropdownPosition={'auto'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    dropdown: {
        borderWidth: 1,
        borderColor: COLOR.Primary1,
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        borderRadius: 5,
    },
    dropdownContainer: {
        elevation: 5,
        marginTop: 5,
        borderRadius: 12,
    },
    placeholderStyle: {
        color: COLOR.placeholderText,
        borderRadius: 12,
        fontSize: RFValue(12),
        fontWeight: '400',
    },
    selectedTextStyle: {
        color: '#000',
        fontSize: RFValue(12),
        fontWeight: '400',
    },
    inputSearchStyle: {
        color: 'black',
        borderRadius: 12,
    },
    itemTextStyle: {
        color: 'black',
        fontSize: RFValue(12),
        fontWeight: '400',
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        width: '100%'
    },
    label: {
        fontWeight: '400',
        color: COLOR.TextHeader,
        marginRight: 5,
        width: '100%',
        flexWrap: 'wrap',
    },
    optionalLabel: {
        color: COLOR.placeholderText,
        fontSize: 12
    },
});

export default CustomDropdown;