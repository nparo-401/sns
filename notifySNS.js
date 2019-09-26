const AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-2'});

exports.handler = async (event, context) => {
    const sns = new AWS.SNS();

    const params = {
      Message: event.messageSent, // this will be replaced by actual call to the message portion of the event.
      TopicArn: 'arn:aws:sns:us-west-2:830278276484:TaskComplete', // replace with the correct AWS SNS Topic
    };

    const data = await sns.publish(params, context.done).promise();

    const response = {
        statusCode: 200,
        body: JSON.stringify(data),
    };
    return response;
};
