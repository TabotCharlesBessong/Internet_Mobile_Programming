import * as bcrypt from 'bcrypt';

export const hashPassword = (password: string): string => {
  const saltOrRounds = 10;
  const hash = bcrypt.hashSync(password, saltOrRounds);
  return hash;
};

export const comparePasswordWithHash = (
  password: string,
  hash: string,
): boolean => {
  const passwordMatches = bcrypt.compareSync(password, hash);
  return passwordMatches;
};
