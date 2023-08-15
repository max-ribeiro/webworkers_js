console.log("I'm alive!");

postMessage('READY!');

onmessage = (msg) => {
    console.log('hey from worker', msg);
}