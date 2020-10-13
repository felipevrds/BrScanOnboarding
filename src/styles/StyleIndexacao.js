import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    homeImageArea: {
        flexDirection: "column",
        flex: 3.5,
        backgroundColor: "#c62825",
        width: "100%",
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeImageAreaText: {
        color: '#fffae7',
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: 'IBM Plex Sans',
    },
    homeTextArea: {
        flexDirection: "column",
        flex: 2,
        width: "100%",
        padding: 20,
        backgroundColor: '#c62825',
    },
    TextArea1: {
        color: '#020202',
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: 'IBM Plex Sans',
        textAlign: 'left'
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
        backgroundColor: "#ffffff",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    buttonTitle: {
        fontFamily: 'IBM Plex Sans'
    }
})