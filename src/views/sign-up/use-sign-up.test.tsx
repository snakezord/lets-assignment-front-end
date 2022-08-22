import useSignUp, { HookData } from './use-sign-up';
import { act, renderHook } from '@testing-library/react-hooks';
import { BaseSyntheticEvent } from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import SignUpView from './sign-up-view';

function renderSignUpView(props: Partial<HookData> = {}) {
  const defaultProps: HookData = {
    handleChangeData(e) {
      return;
    },
    handleChangeAvatar(e) {
      return;
    },
    handleClearAvatar() {
      return;
    },
    async handleSubmit(e) {
      return;
    },
    data: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      avatarBase64: '',
      movie: undefined,
      sitRow: undefined,
      sitPlace: undefined,
    },
    movies: [],
    loading: false,
  };
  return render(<SignUpView {...defaultProps} />);
}

describe('useSignUp', () => {
  const { result } = renderHook(useSignUp);
  it('should update data', async () => {
    //todo
  });
  it('should update avatar', () => {
    //todo
  });
  it('should update clear avatar', () => {
    //todo
  });
});
