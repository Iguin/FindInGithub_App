import { StyleSheet } from "react-native";
import { fontsFamily, colors } from "../../shared/globalStyles";

const defaultHorizontalPadding = 20;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: defaultHorizontalPadding,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontFamily: fontsFamily.bold,
    color: '#FFFFFF',
    fontSize: 30,
  },
  subTitle: {
    fontSize: 12,
    fontFamily: fontsFamily.bold,
    color: '#FFFFFF',
    opacity: 0.4,
    textTransform: 'uppercase'
  },
  status: {
    flexDirection: 'row',
  },
  statusBox: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusTitle: {
    color: '#FFFFFF',
    fontFamily: fontsFamily.regular,
    textTransform: 'uppercase',
    opacity: 0.5,
    fontSize: 8,
  },
  statusValues: {
    color: '#FFFFFF',
    fontSize: 10,
    fontFamily: fontsFamily.regular,
  },
  searchContainer: {
    paddingHorizontal: defaultHorizontalPadding,
  },
  searchInput: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: fontsFamily.regular,
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    height: 40,
  },
  cleanInput:{
    position: 'absolute',
    top: 0,
    right: defaultHorizontalPadding,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    right: defaultHorizontalPadding,
  },
  cleanInputText:{
    color:'#FFFFFF',
    fontSize: 20,
    fontFamily: fontsFamily.regular,
    opacity: .5,
  },
  searchLoading: {
    marginTop: 15,
    flex: 1,
    paddingHorizontal: defaultHorizontalPadding,
  },
  searchItems: {
    paddingVertical: 15,
    paddingHorizontal: defaultHorizontalPadding,
  },
  waitingSearch: {
    color: 'white',
    fontFamily: fontsFamily.regular,
    fontSize: 20,
    opacity: .3,
  },
  totalCount:{
    paddingHorizontal: defaultHorizontalPadding,
    color: '#FFFFFF',
    paddingTop: 10,
    fontSize: 10,
    fontFamily: fontsFamily.regular,
    textAlign: 'center',
    opacity: 0.5,
  },
  footer: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: '#FFFFFF',
    opacity: .5,
    fontFamily: fontsFamily.regular,
    fontSize: 12,
  }
});