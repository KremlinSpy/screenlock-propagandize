const cp = require('child_process')

async function initProcess() {
  let proc = await cp.spawn('node', ['friendly-script.js'])
  proc.on('exit', () => {
    proc = initProcess()
  })
  return proc
}
 
initProcess()


