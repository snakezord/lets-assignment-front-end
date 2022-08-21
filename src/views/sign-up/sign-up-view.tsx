import React, { ReactElement } from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';

import Menu from '../shared/components/menu';
import { H1 } from '../layout/layout.styles';
import { getLocaleDateString } from '../shared/utils/locale-datetime';

import { HookData } from './use-sign-up';
import {
  Wrapper,
  Form,
  Button,
  Label,
  Select,
} from './sign-up.styles';
import TextInput from '../shared/components/inputs/textInput';
import ImageInput from '../shared/components/inputs/imageInput';

const SignUpView: React.FC<HookData> = ({ data, movies, loading, handleSubmit, handleChangeAvatar, handleChangeData, handleClearAvatar }): ReactElement => {
  return (
    <Wrapper>
      <Menu />
      <Form onSubmit={handleSubmit}>
        <Row center="xs">
          <Col xs={12} md={4}>
            <H1>Sign up for a movie</H1>
            {/* FILL IN THE GAPS */}
            {/* Fields go here ... */}
            <TextInput name='firstName' label='First Name' handleChange={handleChangeData} error={!data?.firstName} />
            <TextInput name='lastName' label='Last Name' handleChange={handleChangeData} error={!data?.lastName} />
            <TextInput name='email' label='Email' handleChange={handleChangeData} error={!data?.email} />
            <TextInput name='phone' label='Phone' handleChange={handleChangeData} error={!data?.phone} />
            <ImageInput name='avatarBase64' label='Avatar' avatar={data?.avatarBase64} handleChangeAvatar={handleChangeAvatar} handleClear={handleClearAvatar} error={!data?.avatarBase64} />
            <Label>
              Pick movie
              <Select name='movie' defaultValue={'DEFAULT'} value={data?.movie?.id} onChange={handleChangeData}>
                <option value="DEFAULT" disabled>Choose a movie...</option>
                {
                  movies.map(movie => (<option key={movie.id} value={movie.id}>{`${movie.title} / ${getLocaleDateString(movie.startDate)} / ${movie.duration / 1000 / 60}min`}</option>))
                }
              </Select>
            </Label>
            {data?.movie?.id && <Row>
              <Col xs={6}>
                <TextInput name='sitRow' label='Seat row' min={0} type={'number'} handleChange={handleChangeData} />
              </Col>
              <Col xs={6}>
                <TextInput name='sitPlace' label='Seat place' min={0} type={'number'} handleChange={handleChangeData} />
              </Col>
            </Row>}
            {loading ? 'Loading...' : <Button type="submit" value='submit'>Save</Button>}
          </Col>
        </Row>
      </Form>
    </Wrapper>
  );
};



export default SignUpView;