import { StyleSheet } from "react-native";
import { fontsFamily, colors } from "../../shared/globalStyles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
  },
  header: {
    height: 135,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontFamily: fontsFamily.regular,
    fontSize: 16,
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  headerAvatar: {
    width: 22,
    height: 22,
    borderRadius: 10,
    overflow: 'hidden',
    marginLeft: 7,
    marginRight: 3,
  },
  headerSubtitle: {
    color: '#FFFFFF',
    opacity: 0.5,
    fontSize: 16,
    fontFamily: fontsFamily.regular,
  },
  content: {
    paddingHorizontal: 20,
  },
  contentUtilities: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom:5,
  },
  contentUtilitiesItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  languageTitle: {
    color: '#FFFFFF',
    opacity: .5,
    fontSize: 10,
    fontFamily: fontsFamily.regular,
  },
  languageContent: {
    color: '#FFFFFF',
    fontSize: 14,
    marginLeft: 5,
    fontFamily: fontsFamily.regular,
  },
  contentIcon: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 35,
  },
  description: {
    color: '#FFFFFF',
    opacity: 0.8,
    fontSize: 10,
    lineHeight: 14,
    fontStyle: 'italic',
    fontFamily: fontsFamily.regular,
  },
  repoDates: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateItem: {
    width: '32.5%',
    height: 45,
    justifyContent: 'space-between',
    padding: 7,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  dateItemTitle: {
    color: '#FFFFFF',
    fontSize: 8,
    fontFamily: fontsFamily.regular,
    textTransform: 'uppercase',
    opacity: .5,
  },
  dataItemContent: {
    color: '#FFFFFF',
    fontSize: 9,
    fontFamily: fontsFamily.regular,
  },
});