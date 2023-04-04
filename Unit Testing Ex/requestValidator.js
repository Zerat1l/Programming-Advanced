function requestValidator(request) {

    const { method, uri, version, message } = request;
    const validMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriPattern = /^([\w.])+$|^\*$/g;
    const messagePattern = /^[^<>\\&\'\"]+$/g;
    const errorMessage = (typeOfParam) => {
        return `Invalid request header: Invalid ${typeOfParam}`;
    }

    if (!validMethod.includes(method) || !method) {
        throw new Error(errorMessage('Method'));
    }

    if(!validVersions.includes(version) || !version) {
        throw new Error(errorMessage('Version'))
    }
    if(!uriPattern.exec(uri) || !uri) {
        throw new Error(errorMessage('URI'));
    }
    if(messagePattern.exec(message) || message === undefined) {
        throw new Error(errorMessage('Message'));
    }

    return request;
}

requestValidator({

    method: 'GET',

    uri: 'svn.public.catalog',

    version: 'HTTP/1.1',

    message: ''

})