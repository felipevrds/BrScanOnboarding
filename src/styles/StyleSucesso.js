import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    homeTopBarArea: {
        flexDirection: "column",
        flex: 0.6,
        paddingRight: 22,
        backgroundColor: "#ffffff",
        width: "100%",
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    homeImageArea: {
        flexDirection: "column",
        flex: 3.1,
        backgroundColor: "#ffffff",
        width: "100%",
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeTextArea: {
        flexDirection: "column",
        flex: 1.75,
        paddingTop: 0,
        paddingLeft: 50,
        paddingRight: 50,
        backgroundColor: '#ffffff',
        width: "100%",
        alignItems: 'center',
        // justifyContent: 'center',
    },
    TextArea1: {
        color: '#020202',
        fontSize: 25,
        marginBottom: 22,
        fontWeight: "bold",
        fontFamily: 'IBM Plex Sans',
        textAlign: 'center',
    },
    TextArea2: {
        color: '#020202',
        fontSize: 18,
        fontFamily: 'IBM Plex Sans',
        textAlign: 'center',
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