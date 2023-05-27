'use client';
import { FC, FormEvent, useState } from 'react';
import { toast } from './ui/Toast';
import { createApiKey } from '../helpers/createApiKey';
import { Key } from 'lucide-react';
import LHeading from './ui/LHeading';
import Paragraph from './ui/Paragraph';
import CopyButton from './CopyButton';
import { Input } from './ui/Input';
import Button from './ui/Button';

const RequestApiKey: FC = ({}) => {
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [apiKey, setApiKey] = useState<string | null>(null);

  const createNewApiKey = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsCreating(true);
    try {
      const generatedApiKey = await createApiKey();
      setApiKey(generatedApiKey);
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: 'Error',
          message: error.message,
          type: 'error',
        });
        return;
      }

      toast({
        title: 'Error',
        message: 'Something went wrong',
        type: 'error',
      });
    } finally {
      setIsCreating(false);
    }
  };
  return (
    <div className="container md:max-w-2xl">
      <div className="flex flex-col gap-6 items-center">
        <Key className="mx-auto h-12 w-12 text-gray-400" />
        <LHeading>Request your API key</LHeading>
        <Paragraph>You haven&apos;t requested an API key yet.</Paragraph>
      </div>

      <form
        onSubmit={createNewApiKey}
        className="mt-6 sm:flex sm:items-center"
        action={'#'}
      >
        <div className="relative rounded-md shadow-md sm:min-w-0 sm:flex-1">
          {apiKey && (
            <CopyButton
              type="button"
              valueToCopy={apiKey}
              className="absolute inset-y-0 right-0 animate-in fade-in duration-300"
            />
          )}
          <Input
            readOnly
            value={apiKey ?? ''}
            placeholder="Request an API Key to display at here"
          />
        </div>
        <div className="mt-6 flex justify-center sm:mt-0 sm:ml-4 sm:flex-shrink-0">
          <Button disabled={!!apiKey} isLoading={isCreating}>
            Request key
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RequestApiKey;
