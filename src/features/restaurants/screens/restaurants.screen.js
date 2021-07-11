import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Searchbar, ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { LoadingIndicator } from "../../../components/utility/loading-indicator";

const StyledSearch = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return isLoading ? (
    <SafeArea>
      <LoadingIndicator />
    </SafeArea>
  ) : (
    <SafeArea>
      <StyledSearch>
        <Searchbar placeholder="Enter Location" />
      </StyledSearch>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={(item) => item.placeId}
      />
      {/* <RestaurantInfoCard restaurant={restaurants} /> */}
    </SafeArea>
  );
};
