import Prompt from '@/models/prompt';
import { connectToDB } from '@/utils/database';
import { NextRequest } from 'next/server';

export const GET = async (
  req: NextRequest,
  { params }: { params: { text: string } }
) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({}).populate('creator');

    // Filter the prompts manually
    const filteredPrompts = prompts.filter(
      prompt => prompt.creator._id.toString() === params.text
    );

    return new Response(JSON.stringify(filteredPrompts), { status: 200 });
  } catch (err) {
    return new Response('Failed to fetch prompts', { status: 500 });
  }
};
