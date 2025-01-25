import { SignUp } from '@clerk/nextjs'
export default function SignUpPage() {
  return (
    // <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className='h-screen w-full grid place-content-center'>
        <SignUp  />
    </div>
  );
}