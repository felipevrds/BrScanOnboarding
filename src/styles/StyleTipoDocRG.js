import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    containerTela: {
        flex: 1,
        width: "100%",
        // minWidth: 720,
        // minHeight: 1280,
    },
    homeImageArea: {
        flexDirection: "column",
        flex: 3.5,
        backgroundColor: "#ffffff",
        width: "100%",
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeTextArea: {
        flexDirection: "column",
        flex: 2,
        backgroundColor: '#ffffff',
        width: "100%",
        alignItems: 'center',
    },
    TextArea1: {
        color: '#020202',
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: 'IBM Plex Sans',
    },
    TextArea2: {
        color: '#020202',
        fontSize: 18,
        fontFamily: 'IBM Plex Sans'
    },
    homeButtonArea: {
        flexDirection: "column",
        flex: 0.55,
        width: "100%",
        alignItems: 'stretch',
        backgroundColor: "#ffffff"
    },
    button: {
        width: '100%',
        height: '100%',
        backgroundColor: "#c62825",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    buttonTitle: {
        fontFamily: 'IBM Plex Sans',
        color: '#ffffff'
    }
})