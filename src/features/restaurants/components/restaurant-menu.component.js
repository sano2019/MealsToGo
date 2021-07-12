import React, { useState } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

export const RestaurantMenu = () => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <ScrollView>
      <List.Section title="Menu">
        <List.Accordion
          title="Breakfast"
          titleStyle={
            breakfastExpanded ? { color: "cornflowerblue" } : "#757575"
          }
          left={(props) => (
            <List.Icon
              {...props}
              color={breakfastExpanded ? "cornflowerblue" : "#757575"}
              icon="bread-slice"
            />
          )}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          titleStyle={lunchExpanded ? { color: "cornflowerblue" } : "#757575"}
          left={(props) => (
            <List.Icon
              {...props}
              icon="hamburger"
              color={lunchExpanded ? "cornflowerblue" : "#757575"}
            />
          )}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          titleStyle={dinnerExpanded ? { color: "cornflowerblue" } : "#757575"}
          left={(props) => (
            <List.Icon
              {...props}
              icon="bowl-mix"
              color={dinnerExpanded ? "cornflowerblue" : "#757575"}
            />
          )}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="T-bone Steak" />
          <List.Item title="Grilled Chicken" />
          <List.Item title="Halloumi Burger" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          titleStyle={drinksExpanded ? { color: "cornflowerblue" } : "#757575"}
          left={(props) => (
            <List.Icon
              {...props}
              icon="glass-wine"
              color={drinksExpanded ? "cornflowerblue" : "#757575"}
            />
          )}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Prosecco" />
          <List.Item title="Draft beer" />
          <List.Item title="100w Ipa" />
          <List.Item title="Soft Drinks" />
          <List.Item title="Fresh Juice" />
          <List.Item title="House Red" />
          <List.Item title="House White" />
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
};
