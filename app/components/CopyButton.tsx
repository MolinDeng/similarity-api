'use client';

import { Copy } from 'lucide-react';
import { ButtonHTMLAttributes, FC } from 'react';
import Button from './ui/Button';
import { toast } from './ui/Toast';
interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  valueToCopy: string;
}

const CopyButton: FC<CopyButtonProps> = ({
  className,
  valueToCopy,
  ...props
}) => {
  return (
    <Button
      {...props}
      onClick={() => {
        navigator.clipboard.writeText(valueToCopy);

        toast({
          title: 'Copied!',
          message: 'API key copied to clipboard',
          type: 'success',
        });
      }}
      variant={'ghost'}
      className={className}
    >
      <Copy className="h-5 w-5" />
    </Button>
  );
};

export default CopyButton;
