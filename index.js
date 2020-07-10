const http = require('http');
const debug = require('debug')('test:app')
const appInsight = require('applicationinsights')
appInsight.setup(process.env.APPINSIGHTS_INSTRUMENTATIONKEY)
.setAutoDependencyCorrelation(true)
.setAutoCollectRequests(true)
.setAutoCollectPerformance(true, true)
.setAutoCollectExceptions(true)
.setAutoCollectDependencies(true)
.setAutoCollectConsole(true, true)
.setSendLiveMetrics(false)
.setDistributedTracingMode(appInsight.DistributedTracingModes.AI)
appInsight.start()
const server = http.createServer((request, response) => {
    debug('started')
    console.log('something startedp')
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
});

const port = process.env.PORT || process.env.port || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
