import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    bordas: {
        flexDirection: "row",
        paddingBottom: 30,
        backgroundColor: "#20161c",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 570
    },
    bordasLeft: {
        backgroundColor: "#20161c",
        width: 45,
        height: '100%',
        marginRight: 500,
    },
    bordasRight: {
        backgroundColor: "#20161c",
        width: 45,
        height: '100%',
    },
    homeImageAreaText: {
        color: '#fffae7',
        fontSize: 20,
        fontFamily: 'IBM Plex Sans',
        marginRight: 15
    },
    buttonCapturar: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeTopBarArea: {
        flexDirection: "row",
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 22,
        paddingRight: 22,
        backgroundColor: "#c62825",
        width: "100%",
        alignItems: 'center',
    },
    homeTopBarAreaBack: {
        flexDirection: 'row',
        flex: 3,
        width: 32,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    homeImageArea: {
        flexDirection: "column",
        flex: 1.5,
        backgroundColor: "#c62825",
        width: "100%",
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeTextArea: {
        flexDirection: "column",
        flex: 1.5,
        width: "100%",
        alignItems: 'stretch',
        backgroundColor: "#c62825",
        paddingLeft: 10,
        paddingRight: 10,
    },
    homeButtonArea: {
        flexDirection: "column",
        flex: 1.5,
        width: "100%",
        backgroundColor: "#c62825",
        alignItems: 'stretch',
        paddingLeft: 10,
        paddingRight: 10,
    },
    homeButtonArea2: {
        flexDirection: "column",
        flex: 1.5,
        width: "100%",
        backgroundColor: "#c62825",
        alignItems: 'stretch',
        paddingLeft: 10,
        paddingRight: 10,
    },
    button: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        borderBottomWidth: 2,
        borderBottomColor: '#ab0f0c',
        backgroundColor: "#c62825",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    imageButton: {
        flexDirection: 'row',
        flex: 3,
        fontFamily: 'IBM Plex Sans',
        fontSize: 15,
        color: '#ffffff',
        justifyContent: 'center',
    },
    textButton: {
        flexDirection: 'row',
        flex: 3,
        fontFamily: 'IBM Plex Sans',
        fontSize: 15,
        color: '#ffffff',
    },
    buttonTitle: {
        fontFamily: 'IBM Plex Sans',
        fontSize: 14,
        color: '#ffffff',
    }
})