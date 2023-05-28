import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import { notFound } from 'next/navigation';
import { db } from '@/app/lib/db';
import ApiDashboard from '@/app/components/ApiDashboard';
import RequestApiKey from '@/app/components/RequestApiKey';

export const metadata: Metadata = {
  title: 'Similarity.io | Dashborad',
  description: 'Free & open-source text similarity API',
};

const page = async ({}) => {
  const user = await getServerSession(authOptions);
  if (!user) return notFound();

  const apiKey = await db.apiKey.findFirst({
    where: { userId: user.user.id, enabled: true },
  });

  return (
    <div className="max-w-7xl mx-auto mt-16">
      {apiKey ? (
        // @ts-expect-error Server Component
        <ApiDashboard />
      ) : (
        <RequestApiKey />
      )}
    </div>
  );
};

export default page;
