import { DefaultAuthProvider } from 'adminjs';
import bcrypt from 'bcrypt';

import componentLoader from './component-loader';

import { User } from '@entities/user';

/**
 * Make sure to modify "authenticate" to be a proper authentication method
 */
const provider = new DefaultAuthProvider({
  componentLoader,
  authenticate: async ({ email, password }) =>
    User.findOne({
      where: { email },
      attributes: { include: ['password'] },
    })
      .then((user) => {
        if (!user) {
          throw new Error('User with this email or password does not exist.');
        }
        if (!bcrypt.compareSync(password, user.get('password') as string)) {
          throw new Error('User with this email or password does not exist.');
        }
        return { email, role: user.get('role') };
      })
      .catch((err: Error) => {
        throw new Error(err.message);
      }),
});

export default provider;
