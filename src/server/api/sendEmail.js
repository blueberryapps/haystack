import multer from 'multer';
import nodemailer from 'nodemailer';
import fs from 'fs';

const transporter = nodemailer.createTransport({
  service: 'SendGrid',
  auth: { user: process.env.SENDGRID_USER, pass: process.env.SENDGRID_PASSWORD }
});

function sendMail(name, email, message, cv) {
  const mailOptions = {
    to: cv ? process.env.BLUEBERRY_HR_EMAIL : process.env.BLUEBERRY_CONTACT_EMAIL,
    from: `${name} <${email}>`,
    subject: process.env.CONTACT_FORM_SUBJECT,
    text: message,
  };
  if (cv) mailOptions.attachments = { path: cv.path };

  return new Promise((resolve, reject) =>
    transporter.sendMail(
      mailOptions,
      (err, info) => (err ? reject(err) : resolve(info))
    )
  );
}

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  }
});

const fileFilter = (req, file, cb) => {
  const accepted = true;
  cb(null, accepted);
};

const limits = {
  fileSize: 2 * 1024 * 1024, // in bytes, 1MB
};

const saveUploaded = multer({ storage, fileFilter, limits }).single('cv');

export default (req, res, next) => {
  saveUploaded(
    req,
    res,
    (err) => {
      if (err) { return next(err); }

      const { name, email, message } = req.body;
      const cv = req.file || null;

      if (process.env.NODE_ENV !== 'production') {
        return res.json({
          error: 'Unable to send email in other that production env',
          data: { name, email, message }
        });
      }


      return sendMail(name, email, message, cv)
        .then(() => res.json({ OK: true }))
        .catch(() => res.sendStatus(400).json({ OK: false }))
        .then((info) => { // eslint-disable-line no-unused-vars
          if (!cv) return;
          console.log('[deleting]', cv.path);
          fs.unlinkSync(cv.path);
        });
    }
  );
};
