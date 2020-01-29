const secrets: string[] = [];

export default {
  api_url: 'https://europe-west1-disarm-platform.cloudfunctions.net/disarm-api-dashboard-api',
  default_deploy_params: {
    labels: {
      // must be the string of true
      'com.openfaas.scale.zero': 'true',
    },
    secrets,
    envVars: {
      write_debug: 'true',
      exec_timeout: '600',
      write_timeout: '700',
      read_timeout: '700',
      combine_output: 'false',
    },
  },
};
