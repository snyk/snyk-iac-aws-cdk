# Snyk Infrastructure as Code - AWS CDK

The Snyk Infrastructure as Code CLI can scan your CloudFormation files for configuration issues.
These files are written as YAML files.

Developers can also use a general purpose programming language like Typescript with [Amazons Cloud Development Kit "CDK"](https://aws.amazon.com/cdk/) to also write and deploy infrastructure.

The Snyk IaC CLI does not scan these typescript files directly, but you can use the CDK CLI to render a CloudFormation template which can be scanned.

## Prerequisites

- Run `npm install -g aws-cdk` to install the AWS CDK CLI tool.

## Scan for configuration issues

This directory contains AWS CDK Stacks written in TypeScript. To scan them with Snyk, you need to follow these steps:

- Run `npm i` in the stack directory to install dependencies
- Run `cdk synth` to synthesize a CloudFormation template. This will be printed in your display in YAML by default. To print it in JSON, append `--json`.

- (Optional) Run `cdk ls` to check the name of the Stack you just synthesized
- The `cdk.out/` directory is now created and it contains two CloudFormation Templates
  - `VpcStackWithIssues.template.json`
  - `LoadBalancerStack.template.json`
- Run `snyk iac test cdk.out/VpcStackWithIssues.template.json` and check out for any vulnerabilities!
- Or `snyk iac test cdk.out/LoadBalancerStack.template.json`
- If you want to output it in a different directory, you can change the directory with the `--output` option, e.g.:
  `cdk synth --output=templates/`
