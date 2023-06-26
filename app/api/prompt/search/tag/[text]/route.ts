import Prompt from '@/models/prompt';
import { connectToDB } from '@/utils/database';
import { NextRequest } from 'next/server';

export const GET = async (
  req: NextRequest,
  { params }: { params: { text: string } }
) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({
      tag: { $regex: /^params.text$/i },
    }).populate('creator');
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (err) {
    return new Response('Failed to fetch all prompts', { status: 500 });
  }
};
