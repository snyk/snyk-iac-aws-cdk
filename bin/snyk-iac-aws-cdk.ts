#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { VpcStackWithIssues } from '../lib/vpc-stack-with-issues';
import { LoadBalancerStack } from '../lib/loadbalancer-stack';

const app = new cdk.App();
new VpcStackWithIssues(app, 'VpcStackWithIssues',{});
new LoadBalancerStack(app, 'LoadBalancerStack',);
