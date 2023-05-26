import { FC } from 'react';
import type { Metadata } from 'next';
import Paragraph from '@/ui/Paragraph';
import LHeading from '@/ui/LHeading';
import 'simplebar-react/dist/simplebar.min.css';
import DocumentationTabs from '@/components/DocumentationTabs';

export const metadata: Metadata = {
  title: 'Similarity API | Documentation',
  description: 'Free & open-source text similarity API',
};

const page: FC = () => {
  return (
    <div className="container max-w-7xl mx-auto mt-12">
      <div className="flex flex-col items-center gap-6">
        <LHeading>Making a request</LHeading>
        <Paragraph>api/v1/similarity</Paragraph>

        <DocumentationTabs />
      </div>
    </div>
  );
};

export default page;
