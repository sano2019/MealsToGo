import React from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info.component";
import styled from "styled-components/native";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const StyledSearch = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const StyledList = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const restaurant = {
    name: "Some Restaurant",
    icon: "data:image/png;base64,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",
    photos: [
      "data:image/jpeg;base64,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",
    ],
    address: "100 Random Street",
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: false,
  };

  return (
    <SafeArea>
      <StyledSearch>
        <Searchbar placeholder="Enter Location" />
      </StyledSearch>
      <StyledList>
        <RestaurantInfoCard restaurant={restaurant} />
      </StyledList>
    </SafeArea>
  );
};