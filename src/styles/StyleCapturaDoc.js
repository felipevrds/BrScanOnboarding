import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    bordas: {
        flexDirection: "row",
        // paddingTop:25,
        paddingBottom: 30,
        backgroundColor: "#20161c",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 570
    },
    bordasLeft: {
        // flexDirection: "row",
        backgroundColor: "#20161c",
        width: 45,
        height: '100%',
        marginRight: 500,
        // paddingTop: 20,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    bordasRight: {
        // flexDirection: "row",
        backgroundColor: "#20161c",
        width: 45,
        height: '100%',
        // paddingTop: 20,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    homeImageAreaText: {
        color: '#fffae7',
        fontSize: 20,
        fontFamily: 'IBM Plex Sans',
        marginRight: 15
    },

    buttonCapturar: {
        flexDirection: "row",
        // paddingTop:25,
        // paddingBottom: 30,
        // backgroundColor: "#20161c",
        alignItems: 'center',
        justifyContent: 'center',
    },





    homeTopBarArea: {
        flexDirection: "row",
        // flex: 0.6,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 22,
        paddingRight: 22,
        backgroundColor: "#c62825",
        width: "100%",
        alignItems: 'center',
        // justifyContent: 'center',
    },
    homeTopBarAreaBack: {
        flexDirection: 'row',
        flex: 3,
        // backgroundColor: 'blue',
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
    // TextArea1: {
    //     color: '#020202',
    //     fontSize: 20,
    //     fontWeight: "bold",
    //     fontFamily: 'IBM Plex Sans',
    //     textAlign: 'left'
    // },
    // TextArea2: {
    //     color: '#020202',
    //     fontSize: 18,
    //     fontFamily: 'IBM Plex Sans'
    // },
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
        // padding: 30,
        // marginLeft: 10,
        // marginRight: 50,
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
        // width: "40%",
        fontFamily: 'IBM Plex Sans',
        fontSize: 15,
        color: '#ffffff',
        justifyContent: 'center',
        // backgroundColor: 'blue'
    },
    textButton: {
        flexDirection: 'row',
        flex: 3,
        // width: "40%",
        fontFamily: 'IBM Plex Sans',
        fontSize: 15,
        color: '#ffffff',
        // backgroundColor: 'blue',
        // justifyContent: 'center'
    },
    buttonTitle: {
        fontFamily: 'IBM Plex Sans',
        fontSize: 14,
        color: '#ffffff',
        // textAlign: 'center'
    }
})
