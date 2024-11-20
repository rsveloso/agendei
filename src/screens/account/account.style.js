import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    padding: 50,
    justifyContent: 'space-between',
  },
  containerLogo: {
    alignItems: 'center',
  },
  logo: {
    width: 100, //100
    height: 23, //23
    marginTop: 10
  },
  input: {
    backgroundColor: COLORS.gray5,
    borderRadius: 6,
    padding: 12
  },
  containerInput: {
    marginBottom: 15
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    //marginBottom: 10,
    flexDirection: 'row'
  },
  footerLink: {
    color: COLORS.blue,
    fontSize: FONT_SIZE.sm
  }

}