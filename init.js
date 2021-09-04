const cp = require('child_process')

async function initProcess() {
  let proc = await cp.spawn('node', ['example_spec.js'])
  proc.on('exit', () => {
    proc = initProcess()
  })
  return newProc
}
 
initProcess()


