// app/(auth)/sign-up/[[...sign-up]]/page.jsx
'use client';

import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return <SignUp routing="path" path="/sign-up" />;
};

export default SignUpPage;
