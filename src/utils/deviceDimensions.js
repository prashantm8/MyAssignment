import { Dimensions, Platform } from "react-native";
import _ from "lodash";

const OS = Platform.OS;

export const WIDTH = Dimensions.get("window").width;
export const HEIGHT = Dimensions.get("window").height;


export const REFERENCE_WIDTH = 360;
export const REFERENCE_HEIGHT = 640;

export const setValueBasedOnWidth = (dp) => {
    if (!_.isNil(dp)) {
      return WIDTH * dp / REFERENCE_WIDTH
    }
    return dp
  }
  
  export const setValueBasedOnHeight = (dp) => {
    if (!_.isNil(dp)) {
      return HEIGHT * dp / REFERENCE_HEIGHT
    }
    return dp
  }
  
 const scale = (fonptSize) => fontSize * (WIDTH / REFERENCE_WIDTH)

  export const setFontSize = (size, factor = 0.5) => setValueBasedOnHeight(size) // size + ( scale(size) - size ) * factor;
