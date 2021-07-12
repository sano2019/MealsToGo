import React from "react";
import { RestaurantInfoCard } from "../components/restaurant-info.component";
import { RestaurantMenu } from "../components/restaurant-menu.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetail = ({ route }) => {
  const { restaurant } = route.params;
  console.log(restaurant);
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <RestaurantMenu />
    </SafeArea>
  );
};
