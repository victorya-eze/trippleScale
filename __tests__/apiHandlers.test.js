process.env.MONGODB_URI = 'mongodb://localhost:27017/test';
jest.mock('../lib/mongodb', () => ({
  __esModule: true,
  default: jest.fn(() => Promise.resolve())
}));
import enrollmentsHandler from '../pages/api/enrollments.js';

function createRes() {
  return {
    statusCode: 0,
    payload: null,
    status(code) { this.statusCode = code; return this; },
    json(data) { this.payload = data; return this; },
  };
}

test('enrollments handler rejects non-POST', async () => {
  const req = { method: 'GET' };
  const res = createRes();
  await enrollmentsHandler(req, res);
  expect(res.statusCode).toBe(405);
  expect(res.payload).toEqual({ success: false, message: 'Method not allowed' });
});
