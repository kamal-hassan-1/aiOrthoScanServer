
export const uploadPatientData= async (req,res)=>{
    console.log(req.body);
    console.log(req.file);
    try {
      const file = req.file;
      const details = req.body.relevantData;

      console.log(file);         // file metadata
      console.log(file.buffer);  // actual image data (important)
      console.log(details);

      res.status(200).json({
        message: "Image received in memory",
        originalName: file.originalname,
        size: file.size,
        relevantData: details,
      });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}