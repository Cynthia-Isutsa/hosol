import React from 'react'
import { Button } from './ui/button';
import Image from 'next/image';

interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children?: React.ReactNode;
}



const SubmitButton = ({isLoading, className, children}: ButtonProps) => {
  return (
    <Button
    type="submit"
    className={className ?? "shad-primary-btn w-full"}
    disabled={isLoading}>
    {isLoading ? (
      <div className="flex items-center gap-4">
        <Image 
        src="/icons/loader.svg"
        alt = "loader"
        width={24}
        height={24}
        className="animate-spin"

        />
        <span>Loading... </span>
      </div>
    ) : (
      <>{children}</>
    )}
  </Button>
  )
}

export default SubmitButton