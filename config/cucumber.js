module.exports = {
  default: {
    paths: ['tests/features/mis.feature'],
    require: [
      'tests/steps/**/*.ts',
      'tests/support/**/*.ts'
    ],
    requireModule: ['ts-node/register'],
    format: [
      'progress',
      "html:reports/cucumber-report.html",
      "json:reports/cucumber-report.json",
      "junit:reports/cucumber-report.xml",
    ],
    timeout: 150000 
  }
};