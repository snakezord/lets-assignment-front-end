import { BaseSyntheticEvent, FC } from "react";
import { Col, Row } from "react-styled-flexboxgrid";
import { ClearButton, Droparea, Img, InputFile, Label, Preview } from "../../../sign-up/sign-up.styles";

const ImageInput: FC<{
  label: string;
  name: string;
  handleChangeAvatar: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClear: (e: BaseSyntheticEvent) => void;
  avatar?: string,
  error?: boolean;
}> = ({ label, name, avatar, handleChangeAvatar, handleClear, error = false }) => {
  return (
    <Label>
      {label}:
      <Droparea style={{ minHeight: '80px', alignSelf: 'center' }}>
        <InputFile name={name} type='file' accept="image/*" onChange={handleChangeAvatar} onClick={(event: BaseSyntheticEvent) => {
          event.target.value = null;
        }} />
        <Preview>
          {avatar && <Img src={avatar} alt="avatar" width={'100%'} height={'100%'} />}
        </Preview>
      </Droparea>
      <Row center='xs'>
        <Col xs={12}>
          <label style={{ color: "gray", fontSize: '12px', opacity: error ? '1' : '0' }} htmlFor="message">
            *Required field
          </label>
        </Col>
        <Col>
          <ClearButton onClick={handleClear}>Clear</ClearButton>
        </Col>
      </Row>
    </Label>
  );
};

export default ImageInput;