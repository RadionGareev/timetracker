const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
};

exports.logErrors = (err, req, res, next) => {
    console.error('Log:', err.stack);
    next(err);
};

exports.clientErrorHandler = (err, req, res, next) => {
    if (req.xhr) {
        res.status(500).send({ error: 'Something failed!' });
    } else {
        next(err);
    }
};

exports.errorHandler = errorHandler;
