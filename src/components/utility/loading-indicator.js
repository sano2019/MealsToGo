import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";

export const LoadingIndicator = styled(ActivityIndicator).attrs({
  animating: true,
  color: "cornflowerblue",
})`
  flex: 1;
`;
