'use strict';

const _ = require('lodash');
const assert = require('assert-plus');
const fs = require('fs');
const https = require('https');
const { promisify } = require('util');

const aws = require('aws-sdk');
aws.config = new aws.Config({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.REGION
});
const s3 = new aws.S3();

const bucket = process.env.BUCKET;
const rootPath = process.env.FOLDER + '/';

if (!process.env.ACCESS_KEY_ID && !process.env.SECRET_ACCESS_KEY && !process.env.BUCKET && !process.env.FOLDER) {
    throw 'specify access key, secret access key, bucket, and folder name'
}

const fileUrls = [];
const filePath = process.env.FILE_PATH;

const IS_PUBLIC = process.env.IS_PUBLIC === 'true' ? true : false;

const downloadFileFromURL = (url, callback) => {
    assert.string(url);
    assert.function(callback);

    https.get(url, function(response) {
        return callback(null, response);
    });
};

const downloadFileFromLocal = async path => {
    assert.string(path);

    const file = await fs.createReadStream(path);

    return file;
};

const uploadFile = async options => {
    assert.object(options);
    assert.string(options.path);
    assert.string(options.content_type);
    assert.bool(options.is_public);

    var s3Params = {
        Bucket: bucket,
        Key: rootPath + options.path,
        ContentType: options.content_type,
        Body: options.content,
        ACL: options.is_public ? 'public-read' : 'private'
    };

    const s3UploadPromise = await s3.upload(s3Params).promise();

    return s3UploadPromise;
};

let result = [];

(async () => {
    try {
        if (fileUrls.length === 0 && !_.isString(filePath)) {
            throw 'no url or file specified'
        }

        if (_.isString(filePath)) {
            const file = await downloadFileFromLocal(filePath);
            const fileName = 'testing';

            const s3FileOptions = {
                path: fileName,
                content_type: 'image/jpeg',
                is_public: IS_PUBLIC,
                content: file
            };

            const s3Response = await uploadFile(s3FileOptions);
            result.push(s3Response);
        } else {
            for (let i = 0; i < fileUrls.length; i++) {
                console.log(i + '/' + fileUrls.length);
                const file = await promisify(downloadFileFromURL)(fileUrls[i].url);
                const fileName = _.isString(fileUrls[i].name) ? _.isString(fileUrls[i].name) : i.toString();
    
                const s3FileOptions = {
                    path: fileName,
                    content_type: 'image/jpeg',
                    is_public: IS_PUBLIC,
                    content: file
                };
    
                const s3Response = await uploadFile(s3FileOptions);
                result.push(s3Response);
            }
        }

        await fs.writeFileSync(
            'result.txt',
            JSON.stringify(result, null, 2)
        );

        console.log('done');
    } catch (e) {
        result.push(e);
        console.log(e);

        await fs.writeFileSync(
            'result.txt',
            JSON.stringify(result, null, 2)
        );

        console.log('exit with error, please check your log in result.txt');
    }
})();
