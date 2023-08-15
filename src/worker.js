console.log("I'm alive!");

postMessage('READY!');

onmessage = ({data}) => {
    console.log('hey from worker', data);
}