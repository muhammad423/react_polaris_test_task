import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  iconSizeValue: 50,
  titleColor: "",
  backgroundColor: "",
  subTitleColor: "",
  iconColor: "",
  titleFontSize: 13,
  titleFontStyle: "",
  subTitleFontSize: 13,
  subTitleFontStyle: "",
  blockSpace: 300,
  bgTransparent: false,
  blockSize: "10",
  goesUp: 0,
  goesDown: 0,
};

const formsSlice = createSlice({
  name: "polaris",
  initialState,
  reducers: {
    progressBarIconSize: (state, action) => {
      state.iconSizeValue = action.payload;
    },
    polarisTextColor: (state, action) => {
      state.titleColor = action.payload;
    },
    polarisIconColor: (state, action) => {
      state.iconColor = action.payload;
    },
    polarisSubTitleColor: (state, action) => {
      state.subTitleColor = action.payload;
    },
    polarisBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
    polarisTitleFontSize: (state, action) => {
      state.titleFontSize = action.payload;
    },
    polarisTitleFontStyle: (state, action) => {
      state.titleFontStyle = action.payload;
    },
    polarisSubTitleFontSize: (state, action) => {
      state.subTitleFontSize = action.payload;
    },
    polarisSubTitleFontStyle: (state, action) => {
      state.subTitleFontStyle = !action.payload;
    },
    polarisBlockSpace: (state, action) => {
      state.blockSpace = action.payload;
    },
    polarisBgTransparent: (state, action) => {
      state.bgTransparent = action.payload;
    },
    polarisBlockSize: (state, action) => {
      state.blockSize = action.payload;
    },
    polarisGoesUp: (state, action) => {
      state.goesUp = action.payload;
    },
    polarisGoesDown: (state, action) => {
      state.goesDown = action.payload;
    },
    deletePreviousValus: (state) => {
      state.iconSizeValue = 50;
      state.titleColor = "";
      state.backgroundColor = "";
      state.subTitleColor = "";
      state.iconColor = "";
      state.titleFontSize = 13;
      state.titleFontStyle = "";
      state.subTitleFontSize = 13;
      state.subTitleFontStyle = "";
      state.blockSpace = 300;
      state.bgTransparent = false;
      state.blockSize = "10";
      state.goesUp = 0;
      state.goesDown = 0;
    },
  },
});

export const {
  progressBarIconSize,
  polarisTextColor,
  polarisBackgroundColor,
  polarisIconColor,
  polarisSubTitleColor,
  polarisSubTitleFontSize,
  polarisTitleFontSize,
  polarisSubTitleFontStyle,
  polarisTitleFontStyle,
  polarisBlockSpace,
  polarisBgTransparent,
  polarisBlockSize,
  polarisGoesDown,
  polarisGoesUp,
  deletePreviousValus,
} = formsSlice.actions;
export default formsSlice.reducer;
