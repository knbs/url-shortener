module.exports = {
  projects: [
    {
      displayName: 'Client',
      preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
      testMatch: [
        '**/tests/unit/src/**/*.[jt]s?(x)'
      ]
    },
    {
      displayName: 'Server',
      testEnvironment: 'node',
      preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
      testMatch: [
        '**/tests/unit/server/**/*.[jt]s?(x)'
      ],
      verbose: true
    }
  ]
}
