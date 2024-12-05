# Infrastructure
Contains all the infrastructure IaC (Infrastructure as Code) for the project. CloudFormation templates, Terraform scripts, etc.

# Amplify app

```sh
aws cloudformation deploy \
    --stack-name amplify-app-{put a name} \
    --template-file infrastructure/amplify-app.yml \
    --capabilities CAPABILITY_NAMED_IAM \
    --parameter-overrides AppName=nuxt-mvp-{your-name} AccessToken=<your token>\
    --profile psn-dev \
    --region us-east-1
```
