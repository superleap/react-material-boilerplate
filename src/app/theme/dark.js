import {
    indigo500,
    indigo900,
    grey600,
    deepPurple300,
    deepPurple600,
    deepPurple800,
    grey900,
    darkBlack,
    white
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

export default {
    spacing: {
        iconSize: 24,
        desktopGutter: 24,
        desktopGutterMore: 32,
        desktopGutterLess: 16,
        desktopGutterMini: 8,
        desktopKeylineIncrement: 64,
        desktopDropDownMenuItemHeight: 32,
        desktopDropDownMenuFontSize: 15,
        desktopLeftNavMenuItemHeight: 48,
        desktopSubheaderHeight: 48,
        desktopToolbarHeight: 56
    },
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: indigo500,
        primary2Color: indigo900,
        primary3Color: grey600,
        accent1Color: deepPurple300,
        accent2Color: deepPurple600,
        accent3Color: deepPurple800,
        textColor: white,
        alternateTextColor: white,
        canvasColor: grey900,
        borderColor: (0, fade)(white, 0.3),
        disabledColor: (0, fade)(white, 0.3),
        pickerHeaderColor: (0, fade)(white, 0.12),
        clockCircleColor: (0, fade)(white, 0.12)
    },
    avatar: {
        borderColor: null
    }
};
