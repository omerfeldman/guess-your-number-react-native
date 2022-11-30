import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '..//components/PrimaryButton'

function StrartGameScreen() {
    return (<View style = {styles.ContainerInput} maxLangth = {2}>
        <TextInput style = {styles.NumberInput} />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
    </View>
    );
}

export default StrartGameScreen;

const styles = StyleSheet.create({

    ContainerInput: {
        flex: 1,
        marginTop: 100,
        marginHorizontal: 26,
        padding: 16,
        padding: 16,
        borderRadius:9,
        elevation: 4,
        backgroundColor: '#b5e7a0'
    },
    NumberInput: {
height:50,
width: 50,
textAlign:'center',
fontsize: 32,
borderBottomColor:'#feb236',
borderBottomWidth: 3,
color: '#feb236',
marginVertical: 8,
fontWeight: 'bold'

    }
})