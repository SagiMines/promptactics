import Prompt from '@/models/prompt';
import { connectToDB } from '@/utils/database';
import { NextRequest } from 'next/server';
import { generateEtag } from '@/utils/generateEtag';
import { Post } from '@/typings';

export const GET = async (req: NextRequest) => {
  try {
    await connectToDB();
    const prompts: Post[] = await Prompt.find({}).populate('creator');

    // Generate the ETag and Last-Modified values
    const lastModified = new Date(); // Replace with the actual last modified timestamp of the prompts
    const eTag = generateEtag(prompts); // Replace with a function that generates a unique ETag for the prompts

    // Check if the client's request has a matching ETag or Last-Modified header
    const ifNoneMatch = req.headers.get('if-none-match');
    const ifModifiedSince = req.headers.get('if-modified-since');

    if (
      ifNoneMatch === eTag ||
      (ifModifiedSince && new Date(ifModifiedSince) >= lastModified)
    ) {
      // The prompts haven't been modified, so return a 304 Not Modified status
      return new Response(null, { status: 304 });
    } else {
      // The prompts have been modified or the client's request doesn't contain the necessary headers,
      // so send the updated prompts with a 200 OK status and include the ETag and Last-Modified headers
      const response = new Response(JSON.stringify(prompts), { status: 200 });
      response.headers.set('ETag', eTag);
      response.headers.set('Last-Modified', lastModified.toUTCString());
      return response;
    }
  } catch (err) {
    return new Response('Failed to fetch all prompts', { status: 500 });
  }
};
