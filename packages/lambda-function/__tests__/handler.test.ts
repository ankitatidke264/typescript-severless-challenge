import { handler } from '../src/handler';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';

test('returns Hello, World when no name is provided', async () => {
  const event = { queryStringParameters: {} } as APIGatewayProxyEvent;
  const result = await handler(event, {} as Context, () => null);
  expect(JSON.parse(result!.body).message).toBe('Hello, World');
});

test('returns Hello, [name] when a name is provided', async () => {
  const event = { queryStringParameters: { name: 'John' } } as unknown as APIGatewayProxyEvent;
  const result = await handler(event, {} as Context, () => null);
  expect(JSON.parse(result!.body).message).toBe('Hello, John');
});
