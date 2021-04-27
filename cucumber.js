const COMMON_FLAGS = [
  '--require-module ts-node/register',
  '--require features/**/*.ts',
  `--publish-quiet'}`,
].join(' ')

module.exports = {
  default: `${COMMON_FLAGS} --tags "not @wip"`,
  wip: `${COMMON_FLAGS} --tags @wip`,
}
