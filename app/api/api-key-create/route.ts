import { authOptions } from '@/app/lib/auth';
import { db } from '@/app/lib/db';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { nanoid } from 'nanoid';
import { z } from 'zod';

export async function GET(request: NextRequest) {
  try {
    const user = await getServerSession(authOptions).then(
      (session) => session?.user
    );

    if (!user)
      return NextResponse.json(
        { error: 'Unauthorized to perform this action', createdApiKey: null },
        { status: 401 }
      );

    const existingApiKey = await db.apiKey.findFirst({
      where: { userId: user.id, enabled: true },
    });

    if (existingApiKey) {
      return NextResponse.json(
        { error: 'Already have a valid API key', createdApiKey: null },
        { status: 400 }
      );
    }

    const createdApiKey = await db.apiKey.create({
      data: {
        userId: user.id,
        key: nanoid(),
      },
    });

    return NextResponse.json(
      { error: null, createdApiKey: createdApiKey },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues, createdApiKey: null },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Internal Server Error', createdApiKey: null },
      { status: 500 }
    );
  }
}
