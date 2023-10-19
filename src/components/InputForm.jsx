import React, { useState } from "react";
import TextNumber from "./TextNumber";
import {
  Form,
  FormLayout,
  Button,
  Text,
  Card,
  ButtonGroup,
} from "@shopify/polaris";
import { useDispatch } from "react-redux";
import {
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
} from "../redux/formsSlice";
import ProgressBars from "./ProgressBars";
import ColorPickerBtn from "./ColorPicker";
import CheckboxBtn from "./CheckboxBtn";
import ProgressBarSpacing from "./ProgressBarSpacing";
import ProgressSpaceBetween from "./ProgressSpaceBtween";

const InputForm = () => {
  const dispatch = useDispatch();
  const [progressvalue, setProgressValue] = useState(50);
  const [bgColor, setBgColor] = useState("");
  const [titleColor, setTitleColor] = useState("");
  const [iconColor, setIconColor] = useState("");
  const [subtitleColor, setSubtitleColor] = useState("");

  const [titleFontSize, setTitleFontSize] = useState(15);
  const [subTitleFontSize, setSubTitleFontSize] = useState(13);
  const [titleFontStyle, setTitleFontStyle] = useState("normal");
  const [subTitleFontStyle, setSubTitleFontStyle] = useState("normal");
  const [goesUp, setGoesUp] = useState(0);
  const [goesDown, setGoesDown] = useState(0);

  const [spaceValue, setSpaceValue] = useState(50);
  const [checked, setChecked] = useState(false);

  const [blockValue, setBlockValue] = useState("50");

  const handleSubmit = () => {
    dispatch(progressBarIconSize(progressvalue));
    dispatch(polarisTextColor(titleColor));
    dispatch(polarisBackgroundColor(bgColor));
    dispatch(polarisIconColor(iconColor));
    dispatch(polarisSubTitleColor(subtitleColor));
    dispatch(polarisSubTitleFontSize(subTitleFontSize));
    dispatch(polarisSubTitleFontStyle(subTitleFontStyle));
    dispatch(polarisTitleFontSize(titleFontSize));
    dispatch(polarisTitleFontStyle(titleFontStyle));
    dispatch(polarisBlockSpace(spaceValue));
    dispatch(polarisBgTransparent(checked));
    dispatch(polarisBlockSize(blockValue));
    dispatch(polarisGoesUp(goesUp));
    dispatch(polarisGoesDown(goesDown));
    window.scrollTo(0, 0);
  };

  const handleReset = () => {
    dispatch(deletePreviousValus());
    window.scrollTo(0, 0);
  };
  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <div>
          <div>
            <FormLayout>
              <FormLayout.Group>
                <ProgressBars
                  progressvalue={progressvalue}
                  setProgressValue={setProgressValue}
                />
              </FormLayout.Group>
            </FormLayout>
          </div>
          <hr />
          <div style={{ marginBottom: "10px" }}>
            <Text variant="headingMd" as="h6">
              COLOR
            </Text>
          </div>
          <div style={{ marginBottom: "20px", marginTop: "20px" }}>
            <FormLayout>
              <FormLayout.Group>
                <ColorPickerBtn
                  title="Background Color"
                  colors={bgColor}
                  setColorCode={setBgColor}
                />
                <ColorPickerBtn
                  title="Title Color"
                  colors={titleColor}
                  setColorCode={setTitleColor}
                />
              </FormLayout.Group>
              <br />
              <FormLayout.Group>
                <ColorPickerBtn
                  title="Icon Color"
                  colors={iconColor}
                  setColorCode={setIconColor}
                />
                <ColorPickerBtn
                  title="Subtitle Color"
                  colors={subtitleColor}
                  setColorCode={setSubtitleColor}
                />
              </FormLayout.Group>
              <CheckboxBtn
                title="Transparent Background"
                checked={checked}
                setChecked={setChecked}
              />
            </FormLayout>
          </div>
          <hr />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <Text variant="headingMd" as="h6">
            TYPOGRAPHY
          </Text>
        </div>
        <FormLayout>
          <FormLayout.Group>
            <TextNumber
              title="Title font size"
              type="number"
              fontSize={titleFontSize}
              setFontSize={setTitleFontSize}
            />
            <TextNumber
              title="Title font style"
              fontStyle={titleFontStyle}
              s
              etFontStyle={setTitleFontStyle}
            />
          </FormLayout.Group>
          <FormLayout.Group>
            <TextNumber
              title="Subtitle font size"
              type="number"
              fontSize={subTitleFontSize}
              setFontSize={setSubTitleFontSize}
            />
            <TextNumber
              title="Subtitle font style"
              fontStyle={subTitleFontStyle}
              setFontStyle={setSubTitleFontStyle}
            />
          </FormLayout.Group>
        </FormLayout>
        <hr />
        <div>
          <div style={{ marginBottom: "10px" }}>
            <Text variant="headingMd" as="h6">
              SPACING
            </Text>
          </div>
          <FormLayout>
            <FormLayout.Group>
              <ProgressBarSpacing
                blockValue={blockValue}
                setBlockValue={setBlockValue}
              />
            </FormLayout.Group>
          </FormLayout>
        </div>
        <div>
          <div style={{ marginBottom: "10px" }}>
            <Text variant="headingMd" as="h6">
              BORDER LOCATION
            </Text>
          </div>
          <FormLayout>
            <FormLayout.Group>
              <TextNumber
                title="Goes up"
                type="number"
                fontSize={goesUp}
                setFontSize={setGoesUp}
              />
              <TextNumber
                title="Goes down"
                type="number"
                fontSize={goesDown}
                setFontSize={setGoesDown}
              />
            </FormLayout.Group>
          </FormLayout>
        </div>
        <div style={{ marginBottom: "10px", marginTop: "10px" }}>
          <FormLayout>
            <FormLayout.Group>
              <ProgressSpaceBetween
                spaceValue={spaceValue}
                setSpaceValue={setSpaceValue}
              />
            </FormLayout.Group>
          </FormLayout>
        </div>
        <ButtonGroup>
          <Button submit size="large">
            Save
          </Button>
          <Button size="large" onClick={handleReset}>
            Delete
          </Button>
        </ButtonGroup>
      </Form>
    </Card>
  );
};

export default InputForm;
