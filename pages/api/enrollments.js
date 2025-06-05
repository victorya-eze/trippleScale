import dbConnect from '../../lib/mongodb';
import Enrollment from '../../models/Enrollment';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Connect to MongoDB
    await dbConnect();

    const { name, email, phone, courseType, amount, stripeSessionId } = req.body;

    // Create enrollment in MongoDB
    const enrollment = await Enrollment.create({
      name,
      email,
      phone,
      courseType,
      amount,
      stripeSessionId,
      status: 'pending',  // Default status
    });

    return res.status(200).json({
      success: true,
      enrollmentId: enrollment._id,
      message: 'Enrollment stored successfully'
    });
  } catch (error) {
    console.error('Enrollment error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to store enrollment',
      error: error.message,
    });
  }
} 