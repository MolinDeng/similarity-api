'use client';
import { FC, useState } from 'react';
import Button from './ui/Button';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn('google');
    } catch (err) {
      //   toast({
      //     title: 'Error signing in',
      //     message: 'Please try again later'
      //     type: 'error'
      //   });
    }
  };
  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  );
};

export default SignInButton;