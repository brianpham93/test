const http = require('http');
const logger = require('./logger')
const appInsight = require('applicationinsights')
const { strict: assert } = require('assert');

appInsight.setup('e2a2a87b-da65-4e7d-a927-3bf4aa6af0d3')
.setAutoDependencyCorrelation(true)
.setAutoCollectRequests(true)
.setAutoCollectPerformance(true, true)
.setAutoCollectExceptions(true)
.setAutoCollectDependencies(true)
.setAutoCollectConsole(true, true)
.setSendLiveMetrics(false)
.setDistributedTracingMode(appInsight.DistributedTracingModes.AI)
.start()
const server = http.createServer((request, response) => {
    logger.info('Request received')
    logger.debug('Request: ', request.headers)
    logger.error('Some error')
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
});

const port = process.env.PORT || process.env.port || 1337;
server.listen(port);
console.log("Server running at http://localhost:%d", port);
