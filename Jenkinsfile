#!/usr/bin/env groovy

def config = [
    scriptVersion          : 'v7',
    iqOrganizationName     : 'Team AOS',
    pipelineScript         : 'https://git.aurora.skead.no/scm/ao/aurora-pipeline-scripts.git',
    sonarQube              : true,
    publishToNpm           : true,
    publishSnapshotToNpm	 : true,
    npmPublishFolder	     : 'lib',
    nodeVersion            : '10',
    versionStrategy	       : [[ branch : 'master', versionHint:'2' ]],
    createBuildEnvs        : { props -> "REACT_APP_BUILD_VERSION=${props.version}" }
]

fileLoader.withGit(config.pipelineScript, config.scriptVersion) {
  jenkinsfile = fileLoader.load('templates/webleveransepakke')
}

jenkinsfile.run(config.scriptVersion, config)
