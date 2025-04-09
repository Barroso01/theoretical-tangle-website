import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerStartup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Startup, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly logo?: string | null;
  readonly startupname?: string | null;
  readonly coverimage?: string | null;
  readonly verticals?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStartup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Startup, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly logo?: string | null;
  readonly startupname?: string | null;
  readonly coverimage?: string | null;
  readonly verticals?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Startup = LazyLoading extends LazyLoadingDisabled ? EagerStartup : LazyStartup

export declare const Startup: (new (init: ModelInit<Startup>) => Startup) & {
  copyOf(source: Startup, mutator: (draft: MutableModel<Startup>) => MutableModel<Startup> | void): Startup;
}

type EagerUserTL = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserTL, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly profilepicture?: string | null;
  readonly bio?: string | null;
  readonly cognitoid?: string | null;
  readonly location?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserTL = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserTL, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly profilepicture?: string | null;
  readonly bio?: string | null;
  readonly cognitoid?: string | null;
  readonly location?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserTL = LazyLoading extends LazyLoadingDisabled ? EagerUserTL : LazyUserTL

export declare const UserTL: (new (init: ModelInit<UserTL>) => UserTL) & {
  copyOf(source: UserTL, mutator: (draft: MutableModel<UserTL>) => MutableModel<UserTL> | void): UserTL;
}

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly owner?: string | null;
  readonly recipientId?: string | null;
  readonly timestamp?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly owner?: string | null;
  readonly recipientId?: string | null;
  readonly timestamp?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerPredio = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Predio, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly address?: string | null;
  readonly lat?: number | null;
  readonly long?: number | null;
  readonly coverimage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPredio = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Predio, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly address?: string | null;
  readonly lat?: number | null;
  readonly long?: number | null;
  readonly coverimage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Predio = LazyLoading extends LazyLoadingDisabled ? EagerPredio : LazyPredio

export declare const Predio: (new (init: ModelInit<Predio>) => Predio) & {
  copyOf(source: Predio, mutator: (draft: MutableModel<Predio>) => MutableModel<Predio> | void): Predio;
}

type EagerTech = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tech, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTech = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tech, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Tech = LazyLoading extends LazyLoadingDisabled ? EagerTech : LazyTech

export declare const Tech: (new (init: ModelInit<Tech>) => Tech) & {
  copyOf(source: Tech, mutator: (draft: MutableModel<Tech>) => MutableModel<Tech> | void): Tech;
}

type EagerGoals = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Goals, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Description?: string | null;
  readonly image?: string | null;
  readonly activeresearchers?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGoals = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Goals, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Description?: string | null;
  readonly image?: string | null;
  readonly activeresearchers?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Goals = LazyLoading extends LazyLoadingDisabled ? EagerGoals : LazyGoals

export declare const Goals: (new (init: ModelInit<Goals>) => Goals) & {
  copyOf(source: Goals, mutator: (draft: MutableModel<Goals>) => MutableModel<Goals> | void): Goals;
}

type EagerProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly technologyclass?: string | null;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly pagelink?: string | null;
  readonly coverimage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly technologyclass?: string | null;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly pagelink?: string | null;
  readonly coverimage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Project = LazyLoading extends LazyLoadingDisabled ? EagerProject : LazyProject

export declare const Project: (new (init: ModelInit<Project>) => Project) & {
  copyOf(source: Project, mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void): Project;
}