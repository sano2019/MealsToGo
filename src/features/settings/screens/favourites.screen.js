import React, { useContext } from "react";
import { Text } from "../../../components/typography/text.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantList } from "../../restaurants/components/restaurant-info-styles";
import { TouchableOpacity } from "react-native";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info.component";

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return !favourites.length ? (
    <SafeArea>
      <Text variant="caption">No favourites yet</Text>
    </SafeArea>
  ) : (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", { restaurant: item })
            }
          >
            <RestaurantInfoCard restaurant={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.placeId}
      />
    </SafeArea>
  );
};
