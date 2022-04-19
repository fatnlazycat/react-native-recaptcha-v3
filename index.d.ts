import { ViewStyle } from "react-native";

type Props = {
  url: string,
  siteKey: string,
  reCaptchaType: 1 | 2,
  onExecute: (string) => void,
  containerStyle: ViewStyle,
}

const ReCaptcha: (props: Props) => JSX.Element;

export default ReCaptcha;