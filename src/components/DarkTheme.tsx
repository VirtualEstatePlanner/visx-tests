import { createMuiTheme, Theme } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { AsapFont } from '../fonts/Asap'
import AccordionExpandedStyleDark from '../styles/AccordionExpandedStyleDark'
import AccordionRootStyleDark from '../styles/AccordionRootStyleDark'
import AlertRootStyleDark from '../styles/AlertRootStyleDark'
import AppBarRootStyleDark from '../styles/AppBarRootStyleDark'
import AutocompleteOptionStyleDark from '../styles/AutocompleteOptionStyleDark'
import AutocompletePaperStyleDark from '../styles/AutocompletePaperStyleDark'
import BottomNavigationActionRootStyleDark from '../styles/BottomNavigationActionRootStyleDark'
import BottomNavigationRootStyleDark from '../styles/BottomNavigationRootStyleDark'
import ButtonIconRootStyleDark from '../styles/ButtonIconRootStyleDark'
import ButtonIconInheritStyleDark from '../styles/ButtonIconInheritStyleDark'
import ButtonPrimaryStyleDark from '../styles/ButtonPrimaryStyleDark'
import ButtonRootStyleDark from '../styles/ButtonRootStyleDark'
import ButtonSecondaryStyleDark from '../styles/ButtonSecondaryStyleDark'
import CardRootStyleDark from '../styles/CardRootStyleDark'
import CheckboxRootStyleDark from '../styles/CheckboxRootStyleDark'
import CircularProgressRootStyleDark from '../styles/CircularProgressRootStyleDark'
import CircularProgressPrimaryStyleDark from '../styles/CircularProgressPrimaryStyleDark'
import ContainerRootStyleDark from '../styles/ContainerRootStyleDark'
import DialogRootStyleDark from '../styles/DialogRootStyleDark'
import DialogPaperStyleDark from '../styles/DialogPaperStyleDark'
import DrawerRootStyleDark from '../styles/DrawerRootStyleDark'
import DrawerPaperStyleDark from '../styles/DrawerPaperStyleDark'
import FabRootStyleDark from '../styles/FabRootStyleDark'
import FormControlRootStyleDark from '../styles/FormControlRootStyleDark'
import FormControlLabelRootStyleDark from '../styles/FormControlLabelRootStyleDark'
import FormHelperTextRootStyleDark from '../styles/FormHelperTextRootStyleDark'
import IconRootStyleDark from '../styles/IconRootStyleDark'
import ImageListRootStyleDark from '../styles/ImageListRootStyleDark'
import ImageListItemBarRootStyleDark from '../styles/ImageListItemBarRootStyleDark'
import InputAdornmentRootStyleDark from '../styles/InputAdornmentRootStyleDark'
import InputBaseRootStyleDark from '../styles/InputBaseRootStyleDark'
import InputLabelRootStyleDark from '../styles/InputLabelRootStyleDark'
import InputOutlinedRootStyleDark from '../styles/InputOutlinedRootStyleDark'
import ListItemRootStyleDark from '../styles/ListItemRootStyleDark'
import ListRootStyleDark from '../styles/ListRootStyleDark'
import MenuRootStyleDark from '../styles/MenuRootStyleDark'
import MobileStepperDotActiveStyleDark from '../styles/MobileStepperDotActiveStyleDark'
import MobileStepperDotStyleDark from '../styles/MobileStepperDotStyleDark'
import MobileStepperProgressStyleDark from '../styles/MobileStepperProgressStyleDark'
import NativeSelectRootStyleDark from '../styles/NativeSelectRootStyleDark'
import OutlinedInputMultilineStyleDark from '../styles/OutlinedInputMultilineStyleDark'
import PaletteBackgroundStyleDark from '../styles/PaletteBackgroundStyleDark'
import PalettePrimaryStyleDark from '../styles/PalettePrimaryStyleDark'
import PaletteSecondaryStyleDark from '../styles/PaletteSecondaryStyleDark'
import PaperRootStyleDark from '../styles/PaperRootStyleDark'
import RadioRootStyleDark from '../styles/RadioRootStyleDark'
import SelectRootStyleDark from '../styles/SelectRootStyleDark'
import SelectMenuRootStyleDark from '../styles/SelectMenuRootStyleDark'
import SliderRootStyleDark from '../styles/SliderRootStyleDark'
import SliderMarkActiveStyleDark from '../styles/SliderMarkActiveStyleDark'
import SliderMarkStyleDark from '../styles/SliderMarkStyleDark'
import SliderRailStyleDark from '../styles/SliderRailStyleDark'
import SliderThumbStyleDark from '../styles/SliderThumbStyleDark'
import SliderTrackStyleDark from '../styles/SliderTrackStyleDark'
import SliderValueLabelStyleDark from '../styles/SliderValueLabelStyleDark'
import SpeedDialIconRootStyleDark from '../styles/SpeedDialIconRootStyleDark'
import StepIconActiveStyleDark from '../styles/StepIconActiveStyleDark'
import StepIconCompletedStyleDark from '../styles/StepIconCompletedStyleDark'
import StepIconRootStyleDark from '../styles/StepIconRootStyleDark'
import SwitchRootStyleDark from '../styles/SwitchRootStyleDark'
import TabLabelIconStyleDark from '../styles/TabLabelIconStyleDark'
import TablePaginationItemRootStyleDark from '../styles/TablePaginationItemRootStyleDark'
import TablePaginationRootStyleDark from '../styles/TablePaginationItemRootStyleDark'
import TablePaginationSelectRootStyleDark from '../styles/TablePaginationSelectRootStyleDark'
import TabRootStyleDark from '../styles/TabRootStyleDark'
import TabSelectedStyleDark from '../styles/TabSelectedStyleDark'
import TabsRootStyleDark from '../styles/TabsRootStyleDark'
import TextAreaRootStyleDark from '../styles/TextAreaRootStyleDark'
import ToggleButtonGroupRootStyleDark from '../styles/ToggleButtonGroupRootStyleDark'
import ToggleButtonRootStyleDark from '../styles/ToggleButtonRootStyleDark'
import TouchRippleRootStyleDark from '../styles/TouchRippleRootStyleDark'

export const DarkTheme: Theme = createMuiTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: AccordionRootStyleDark,
        expanded: AccordionExpandedStyleDark,
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: AlertRootStyleDark,
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: AppBarRootStyleDark,
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: AutocompletePaperStyleDark,
        option: AutocompleteOptionStyleDark,
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: BottomNavigationRootStyleDark,
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: BottomNavigationActionRootStyleDark,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ButtonRootStyleDark,
        containedPrimary: ButtonPrimaryStyleDark,
        containedSecondary: ButtonSecondaryStyleDark,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: CardRootStyleDark,
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: CheckboxRootStyleDark,
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ButtonPrimaryStyleDark,
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: CircularProgressRootStyleDark,
        colorPrimary: CircularProgressPrimaryStyleDark,
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: ContainerRootStyleDark,
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          '@font-face': AsapFont,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: DialogRootStyleDark,
        paper: DialogPaperStyleDark,
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: DrawerRootStyleDark,
        paper: DrawerPaperStyleDark,
      },
    },
    MuiFab: {
      styleOverrides: {
        root: FabRootStyleDark,
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: FormControlRootStyleDark,
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: FormControlLabelRootStyleDark,
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: FormHelperTextRootStyleDark,
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ButtonIconRootStyleDark,
        colorInherit: ButtonIconInheritStyleDark,
        colorPrimary: ButtonPrimaryStyleDark,
        colorSecondary: ButtonSecondaryStyleDark,
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: IconRootStyleDark,
      },
    },
    MuiImageList: {
      styleOverrides: {
        root: ImageListRootStyleDark,
      },
    },
    MuiImageListItemBar: {
      styleOverrides: {
        root: ImageListItemBarRootStyleDark,
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: InputAdornmentRootStyleDark,
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: InputBaseRootStyleDark,
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: InputLabelRootStyleDark,
      },
    },
    MuiList: {
      styleOverrides: {
        root: ListRootStyleDark,
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: ListItemRootStyleDark,
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: MenuRootStyleDark,
      },
    },
    MuiMobileStepper: {
      styleOverrides: {
        dot: MobileStepperDotStyleDark,
        dotActive: MobileStepperDotActiveStyleDark,
        progress: MobileStepperProgressStyleDark,
      },
    },
    MuiNativeSelect: {
      styleOverrides: {
        root: NativeSelectRootStyleDark,
        filled: NativeSelectRootStyleDark,
        select: NativeSelectRootStyleDark,
        outlined: NativeSelectRootStyleDark,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: InputOutlinedRootStyleDark,
        multiline: OutlinedInputMultilineStyleDark,
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: TablePaginationItemRootStyleDark,
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: PaperRootStyleDark,
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: MenuRootStyleDark,
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: RadioRootStyleDark,
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: SelectRootStyleDark,
        selectMenu: SelectMenuRootStyleDark,
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: SliderRootStyleDark,
        thumb: SliderThumbStyleDark,
        valueLabel: SliderValueLabelStyleDark,
        track: SliderTrackStyleDark,
        rail: SliderRailStyleDark,
        mark: SliderMarkStyleDark,
        markActive: SliderMarkActiveStyleDark,
      },
    },
    MuiSpeedDial: {
      styleOverrides: {
        root: SpeedDialIconRootStyleDark,
        fab: ButtonPrimaryStyleDark,
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: StepIconRootStyleDark,
        active: StepIconActiveStyleDark,
        completed: StepIconCompletedStyleDark,
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: SwitchRootStyleDark,
      },
    },
    MuiTab: {
      styleOverrides: {
        root: TabRootStyleDark,
        selected: TabSelectedStyleDark,
        labelIcon: TabLabelIconStyleDark,
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: TabsRootStyleDark,
        indicator: TabSelectedStyleDark,
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: TablePaginationRootStyleDark,
        selectRoot: TablePaginationSelectRootStyleDark,
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: TextAreaRootStyleDark,
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: ToggleButtonRootStyleDark,
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: ToggleButtonGroupRootStyleDark,
      },
    },
    MuiTouchRipple: {
      styleOverrides: {
        root: TouchRippleRootStyleDark,
      },
    },
  },
  palette: {
    mode: 'dark',
    background: PaletteBackgroundStyleDark,
    primary: PalettePrimaryStyleDark,
    secondary: PaletteSecondaryStyleDark,
    text: {
      primary: grey[300],
      secondary: grey[500],
      disabled: grey[700],
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
})
