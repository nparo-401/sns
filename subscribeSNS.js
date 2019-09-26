const AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-2'});

exports.handler = async (event) => {

    const sns = new AWS.SNS();

    const params = {
      Protocol: 'sms',
      TopicArn: 'arn:aws:sns:us-west-2:830278276484:TaskComplete', // replace with the correct AWS SNS Topic
      Endpoint: event.phoneNumber, // this will be replaced by actual call to the endpoint of the event.
      ReturnSubscriptionArn: true || false,
    };

    const data = await sns.subscribe(params).promise();

    const response = {
        statusCode: 200,
        body: JSON.stringify(data),
    };

    return response;
};
