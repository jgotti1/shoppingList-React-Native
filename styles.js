import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5
  },
  inputContainer: {
    backgroundColor:"#c0cfdb",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 1,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#f3f3f3",
    borderRadius: 20,
    padding: 10,
    maxHeight: 100,
   
  },
  inputModal: {
    flex: 1,
    flexDirection: "col",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6bb1da",
    marginTop: 111,
    margin: 11,
    maxHeight: 200,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 12,
   

  
  },
  textInput: {
    height: 60,
    margin: 15,
    backgroundColor: "none",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 10,
    padding: 5,
    width: "90%",
    backgroundColor: "#ffffff",
   
  },
  itemsContainer: {
    marginTop: 5,
    flex: 5,
  },
  item: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#437394",
    borderWidth: .8,
    borderColor: "white"
  },
  
  itemText: {
    padding: 12,
    color: "white",
  },
  button: {
    borderRadius: 10,
    width: 120,
    backgroundColor: "#6e6c6c"
  },
  button1a: {
    borderRadius: 13,
    marginRight: 13,
    borderWidth: 1,
    borderColor: "white",
  },
  button1b: {
    borderRadius: 13,
    marginLeft: 15,
    backgroundColor: "#5e5c5c",
    borderWidth: 1,
    borderColor: "white",
  },
  buttonerase: {
    backgroundColor:"#f03a3a",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#fafafa",
   
  },
  button2: {
    borderRadius: 10,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  pressItem: {
    opacity: .9,
    backgroundColor: "red"

  },
   modal: {
    flex: 1,
    resizeMode: 'cover',
  },
   
  buttonModalContainer: {
    flex: 1,
    flexDirection: "row",
  
    

   }
});

export default styles;
