// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Startup, UserTL, Message, Predio, Tech, Goals, Project } = initSchema(schema);

export {
  Startup,
  UserTL,
  Message,
  Predio,
  Tech,
  Goals,
  Project
};