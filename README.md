# Simple Notification Service

### Creation Steps

* Create an AWS IAM role with the following permissions:
  * `AmazonS3FullAccess` - allows you to connect to an S3 bucket if necessary. This is very useful if the lambda function relies upon dependencies and is too large to directly upload to Lambda.
  * `CloudWatchFullAccess` - allow you to use cloud watch to view logs of when the Lambda function is triggered.
  * `AWSLambdaBasicExecutionRole` - allow you to create and execute a functioning Lambda function.
  * `AmazonSNSFullAccess` - all full access to the AWS SNS features and properly connect with the SNS task.
* Create a new AWS SNS Task
  * Give it a name
  * Give it a display name (optional)
* Create 2 new AWS Lambda functions - one for each event
  * Choose "Author from scratch"
  * Give it a descriptive name
  * Choose the necessary runtime environment - for this example, use `Node.js 10.x`
  * Click the drop arrow to "Choose or create an execution role"
    * Select "Use an existing role"
    * Choose the IAM role you created above
  * Create the function
  * Replace the code in the editor with the code for the correct function:
    * [Subscribe](./subscribeSNS.js)
      * Line 10 - replace the value with the TopicArn for the task created above
      * Line 11 - replace with the correct endpoint (phone numbers must be in the following format: `+12345678901`)
    * [Notify](./notifySNS.js)
      * Line 8 - replace with the correct message to send
      * Line 9 - replace the value with the TopicArn for the task created above
  * Save the function

### Running Instructions
* For the first run, test the subscribe function first - this will ensure a subscription is created and an endpoint is available for the message to be sent.
  * Create a test class and hit the test button
    * After testing subscribe, navigate back to the AWS SNS Task and check if the new subscription has been added to the Task
    * After testing notify, ensure that a message has been sent to the endpoint
