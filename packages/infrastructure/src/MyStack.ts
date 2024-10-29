import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from '@aws-cdk/aws-apigateway';
import { Construct } from 'constructs';

export class MyStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
  
      const helloLambda = new lambda.Function(this, 'HelloFunction', {
        runtime: lambda.Runtime.NODEJS_14_X,
        code: lambda.Code.fromAsset('../lambda-function/dist'),
        handler: 'handler.handler',
      });
  
      const openApiLambda = new lambda.Function(this, 'OpenApiFunction', {
        runtime: lambda.Runtime.NODEJS_14_X,
        code: lambda.Code.fromAsset('../lambda-function/dist'), // Ensure this points to the same dist directory
        handler: 'openApiHandler.openApiHandler',
      });
      
      const api = new apigateway.RestApi(this, 'MyApi', {
        restApiName: 'Hello API',
        description: 'This is my API',
      });
  
      const helloResource = api.root.addResource('hello');
      helloResource.addMethod('GET', new apigateway.LambdaIntegration(helloLambda));

      const swaggerResource = api.root.addResource('swagger.json');
      swaggerResource.addMethod('GET', new apigateway.LambdaIntegration(openApiLambda));
  
    }
  }
