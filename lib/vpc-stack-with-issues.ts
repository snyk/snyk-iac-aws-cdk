import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class VpcStackWithIssues extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'VPC', {
      maxAzs: 3,
      natGateways: 3
    });

    const ssh = new ec2.SecurityGroup(this, 'SSH-SG', {
      securityGroupName: 'open-ssh',
      vpc,
      allowAllOutbound: true
    });

    ssh.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(22));
    ssh.addIngressRule(ec2.Peer.anyIpv6(), ec2.Port.tcp(22));
  }
}
