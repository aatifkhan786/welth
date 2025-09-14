// app/(auth)/sign-in/[[...sign-in]]/page.jsx
'use client';

import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return <SignIn routing="path" path="/sign-in" />;
};

export default SignInPage;
