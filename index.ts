import * as core from '@actions/core';
import * as exec from '@actions/exec';
import { ExecOptions } from '@actions/exec/lib/interfaces';

async function run() {
  try {
    const bundleID = core.getInput('primary-bundle-id');
    const username = core.getInput('username');
    const password = core.getInput('password');
    const ascProvider = core.getInput('asc-provider');
    const file = core.getInput('file');

    let output: string = '';

    let options: ExecOptions = {}
    options.listeners = {
      stdout: (data: Buffer) => {
        output += data.toString();
      }
    };

    let args: string[] = [
      '--notarize-app', 
      '--output-format xml',
      `--primary-bundle-id "${ bundleID }"`,
      `--username "${ username }"`,
      `--password "${ password }"`,
      `--file "${ file }"`
    ]

    if (ascProvider != undefined) {
      args.push(`--asc-provider "${ ascProvider }"`);
    }

    await exec.exec('xcrun altool', args, options)
    core.setOutput("altool-response", output);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
  