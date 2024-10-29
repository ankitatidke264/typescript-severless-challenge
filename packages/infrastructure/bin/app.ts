# bin/app.ts
import * as cdk from '@aws-cdk/core';
import { MyStack } from '../src/MyStack';

const app = new cdk.App();
new MyStack(app, 'MyStack');
