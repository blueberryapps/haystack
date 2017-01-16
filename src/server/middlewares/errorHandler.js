import sendTerminalError from '../../utils/sendTerminalError';

export default function errorHandler(err, req, res, next) {
  sendTerminalError(req, res, err);
}
