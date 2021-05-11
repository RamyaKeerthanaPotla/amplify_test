// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';
import Amplify from 'aws-amplify'
import awsconfig from '../aws-exports'

Amplify.configure(awsconfig)

const { Blog, Post, Comment } = initSchema(schema);

export {
  Blog,
  Post,
  Comment
};