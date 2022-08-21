import React, { ReactElement } from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';

import Menu from '../shared/components/menu';
import { H1 } from '../layout/layout.styles';

import { HookData } from './use-admin';
import { Wrapper, Table, Thead, Tbody, Th, Tr, Td } from './admin.styles';
import { Img, Preview } from '../sign-up/sign-up.styles';

const AdminView: React.FC<HookData> = ({ users, loading }): ReactElement => {
  return (
    <Wrapper>
      <Menu />

      <H1>Users</H1>

      {users.length > 0 ? (
        <Row center="xs">
          <Col>
            <Table cellPadding="0" cellSpacing="0">
              {/* FILL IN THE GAPS */}
              {/* Users and selected movies go here ... */}
              <Thead>
                <Tr>
                  <Th>First name</Th>
                  <Th>Last name</Th>
                  <Th>Email</Th>
                  <Th>Phone</Th>
                  <Th>Avatar</Th>
                  <Th>Movie</Th>
                  <Th>Seat row</Th>
                  <Th>Seat place</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  users.map(user => (
                    <Tr key={user._id}>
                      <Td>{user.firstName}</Td>
                      <Td>{user.lastName}</Td>
                      <Td>{user.email}</Td>
                      <Td>{user.phone}</Td>
                      <Td>
                        <Preview>
                          {user.avatarBase64 && <Img src={user.avatarBase64} alt="avatar" width={'100%'} height={'100%'} />}
                        </Preview>
                      </Td>
                      <Td>{user.movie?.title || '-'}</Td>
                      <Td>{user.sitRow || '-'}</Td>
                      <Td>{user.sitPlace || '-'}</Td>
                    </Tr>
                  ))
                }
              </Tbody>
            </Table>
          </Col>
        </Row>
      ) : loading ? <div>Loading...</div> : (
        <div>No users yet.</div>
      )}
    </Wrapper>
  );
};

export default AdminView;
