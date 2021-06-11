#!/usr/bin/env groovy

def config = [
    scriptVersion          : 'feature/AOS-5615-Automatisere-publisering-av-Designsystemet-til-npmjs',
    iqOrganizationName     : 'Team AOS',
    pipelineScript         : 'https://git.aurora.skead.no/scm/ao/aurora-pipeline-scripts.git',
    sonarQube              : true,
    publishToNpm           : true,
    publishSnapshotToNpm	 : true,
    npmPublishFolder	     : 'lib',
    nodeVersion            : '12',
    versionStrategy        : [[ branch : 'master', versionHint:'4' ]],
    createBuildEnvs        : { props -> "REACT_APP_BUILD_VERSION=${props.version}" },
    npm                    : [
      publish              : true,
      prepareCmd           : "build:copy-files-external"
    ]
    github                 : [
      enabled              : true,
      push                 : env.BRANCH_NAME == "master",
      repoUrl              : "https://github.com/Skatteetaten/frontend-components.git",
      deployToGHPagesCmd   : "npm run deploy:gh-pages"
    ]

]

fileLoader.withGit(config.pipelineScript, config.scriptVersion) {
  jenkinsfile = fileLoader.load('templates/webleveransepakke')
}

jenkinsfile.run(config.scriptVersion, config)
