import { Post } from '@/typings';
import crypto from 'crypto';

export function generateEtag(prompts: Post[]) {
  const jsonString = JSON.stringify(prompts);
  const hash = crypto.createHash('md5').update(jsonString).digest('hex');
  return `"${hash}"`;
}
