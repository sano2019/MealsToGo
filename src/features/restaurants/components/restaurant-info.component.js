import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  Rating,
  SectionEnd,
  Icon,
} from "./restaurant-info-styles";

export const RestaurantInfoCard = ({ restaurant = { undefined } }) => {
  const {
    name,
    icon,
    photos,
    vicinity,
    rating,
    isOpenNow,
    isClosedTemporarily,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml key={Math.random()} xml={star} width={20} height={20} />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              <Spacer position="left" size="medium">
                {isOpenNow && (
                  <SvgXml
                    key={Math.random()}
                    xml={open}
                    width={20}
                    height={20}
                  />
                )}
              </Spacer>
              <Spacer position="left" size="medium">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </SectionEnd>
          </Section>
          <Text variant="caption">{vicinity}</Text>
        </Info>
      </RestaurantCard>
    </>
  );
};
