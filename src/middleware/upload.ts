import multer from "multer";
import path from "path";
import fs from "fs";

export const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(process.cwd(), "images");

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    const sanitizedOriginalName = file.originalname.replace(/\s+/g, "-");
    cb(null, `${Date.now()}_${sanitizedOriginalName}`);
  },
});

export const fileFilter = (req, file, cb) => {
  const allowed = ["image/png", "image/jpg", "image/webp", "image/jpeg", "application/pdf"];

  cb(null, allowed.includes(file.mimetype));
//   if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/webp" || file.mimetype === "image/jpeg" || file.mimetype === "application/pdf") {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
};
