const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    try {
        const bucketName = 'cmpe272hw'; 
        const folderName = 'images';
        const objectKeys = ['book1.jpeg', 'book2.jpeg', 'book3.jpeg', 'book4.jpeg', 'book5.jpeg'];

        const imageUrls = objectKeys.map((key) => {
            return `https://${bucketName}.s3.amazonaws.com/${folderName}/${key}`;
        });

        
        const response = {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(imageUrls),
        };

        return response;
    } catch (error) {
        console.error('Error:', error);

        const response = {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };

        return response;
    }
};
