import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    ScrollView,
    Modal
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BottomModal from '../BottomModal/BottomModal';
import { COLOR } from '~/utils/Color/Color';
import CustomGradientButton from '~/components/atoms/CustomGradientButton/CustomGradientButton';
import CustomButton from '~/components/atoms/CustomButton/CustomButton';

const RecordFilterModal = ({ isVisible, onClose, onConfirm }: {
    isVisible: boolean,
    onClose: () => void,
    onConfirm: () => void
}) => {
    const [selectedDate, setSelectedDate] = useState('Monthly');
    const [searchText, setSearchText] = useState('');
    const [sortDirection, setSortDirection] = useState('newest');
    const [sortOnDate, setSortOnDate] = useState('document');

    const dateOptions = ['Weekly', 'Monthly', 'Yearly', 'Custom Date'];
    const suggestions = ['hul'];

    return (
        <BottomModal isVisible={isVisible} onClose={onClose} >
            {/* <SafeAreaView style={styles.container}> */}
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <Text style={styles.title}>Time line</Text>
                    {/* <Ionicons name="checkmark-circle" size={24} color="#4CAF50" /> */}

                </View>

                {/* Date Selection */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Select Date</Text>
                    <View style={styles.dateOptionsContainer}>
                        {dateOptions.map((option) => (
                            <TouchableOpacity
                                key={option}
                                style={[
                                    styles.dateOption,
                                    selectedDate === option && styles.selectedDateOption,
                                ]}
                                onPress={() => setSelectedDate(option)}
                            >
                                <Text
                                    style={[
                                        styles.dateOptionText,
                                        selectedDate === option && styles.selectedDateOptionText,
                                    ]}
                                >
                                    {option}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Tags */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Tags</Text>
                    <View style={styles.searchContainer}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search"
                            value={searchText}
                            onChangeText={setSearchText}
                            placeholderTextColor="#999"
                        />
                        {/* <Ionicons name="search" size={20} color="#4CAF50" style={styles.searchIcon} /> */}
                    </View>

                    <Text style={styles.subSectionTitle}>Suggestions</Text>
                    <View style={styles.suggestionsContainer}>
                        {suggestions.map((tag) => (
                            <TouchableOpacity
                                key={tag}
                                style={styles.tagButton}
                            >
                                <Text style={styles.tagText}>{tag}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Sort By */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Sort By</Text>

                    <CustomGradientButton title={'Newest to Oldest'} onPress={() => { setSortDirection('newest') }} buttonStyle={{ borderRadius: 10 }} textStyle={{fontSize:14, fontWeight:'500'}} />


                    <CustomButton title={'Closest to Newest Date'} onPress={() => { setSortDirection('closest') }} buttonStyle={{ marginTop: 20, borderWidth:1 }} textStyle={{fontSize:14, fontWeight:'500'}} />
                </View>

                {/* Sort on Date */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Sort on Date</Text>

                    <CustomGradientButton title={'Document Date'} onPress={() => setSortOnDate('document')} buttonStyle={{ borderRadius: 10 }} textStyle={{fontSize:14, fontWeight:'500'}} />
                    <CustomButton title={'Upload Date'} onPress={() => setSortOnDate('upload')} buttonStyle={{ marginTop: 20 , borderWidth:1}} textStyle={{fontSize:14, fontWeight:'500'}}  />

                </View>

                {/* Save Button */}
                <CustomGradientButton title={'Apply'} onPress={onClose} buttonStyle={{ borderRadius: 10 }} />

            </ScrollView>
            {/* </SafeAreaView> */}
        </BottomModal >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 16,
    },
    scrollContent: {
        paddingBottom: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000'
    },
    section: {
        marginBottom: 16,
        backgroundColor: '#FAFAFA',
        borderRadius: 10,
        padding: 12,
        borderWidth: 1,
        borderColor: COLOR.green,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 12,
        color: '#000'
    },
    dateOptionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    dateOption: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: COLOR.green,
        backgroundColor: 'white',
    },
    selectedDateOption: {
        backgroundColor: '#10B981',
        borderColor: '#10B981',
    },
    dateOptionText: {
        color: '#374151',
        fontSize: 14,
    },
    selectedDateOptionText: {
        color: 'white',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLOR.green,
        borderRadius: 4,
        backgroundColor: 'white',
        paddingHorizontal: 8,
        marginBottom: 12,
    },
    searchInput: {
        flex: 1,
        height: 40,
        fontSize: 14,
    },
    searchIcon: {
        marginLeft: 8,
    },
    subSectionTitle: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 8,
        color: '#000'
    },
    suggestionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,

    },
    tagButton: {
        backgroundColor: '#F3F4F6',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: COLOR.green
    },
    tagText: {
        fontSize: 14,
        color: '#374151',
    },
    sortButton: {
        height: 40,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    sortButtonText: {
        fontSize: 14,
        fontWeight: '500',
        color: 'white',
    },
    saveButtonContainer: {
        height: 48,
        borderRadius: 4,
        marginTop: 8,
    },
    saveButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    saveButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    }
});

export default RecordFilterModal;