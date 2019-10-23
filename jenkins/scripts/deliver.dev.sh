#!/bin/sh

# install aws cli
pip3 install awscli --upgrade --user

# aws configuration
/usr/local/bin/aws configure set aws_access_key_id AKIATQSRVQW4E52VWO4N
/usr/local/bin/aws configure set aws_secret_access_key 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
/usr/local/bin/aws configure set default.region ap-southeast-1

# aws remove old IMA data
/usr/local/bin/aws s3 rm s3://luckaka125 --recursive

# aws copy new IMA data to S3
/usr/local/bin/aws s3 cp dist s3://luckaka125 --recursive