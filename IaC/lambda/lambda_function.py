import json
import boto3
from decimal import Decimal

# Initialize DynamoDB resource
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('cloudresume')  # Replace with your actual table name

# Helper function to convert Decimal to int or float
def decimal_to_int_or_float(obj):
    if isinstance(obj, Decimal):
        if obj % 1 == 0:
            return int(obj)  # Convert to int if it's a whole number
        else:
            return float(obj)  # Convert to float if it's a decimal number
    raise TypeError
# hi from terraform
def lambda_handler(event, context):
    try:
        # Retrieve the current counter value from DynamoDB
        response = table.get_item(Key={'id': 'counter'})

        # Check if the item exists, if not initialize it
        if 'Item' in response:
            views = response['Item']['views']
        else:
            views = 0  # Initialize if no counter is found

        # Increment the counter by 1
        views += 1

        # Update the DynamoDB item with the new view count
        table.put_item(Item={
            'id': 'counter',
            'views': views
        })

        # Return the updated view count with CORS headers, converting Decimal to int/float
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
            },
            'body': json.dumps({'views': views}, default=decimal_to_int_or_float)
        }

    except Exception as e:
        # Log any errors to CloudWatch
        print(f"Error: {str(e)}")

        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*',  # Allow CORS for browser requests
            },
            'body': json.dumps({
                'message': 'Internal Server Error',
                'error': str(e)
            })
        }