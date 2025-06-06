import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, Clock, Book, Users, Star } from "lucide-react";
import axios from "axios";

// Import courses data
import courses from "../data/courses";
const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [formErrors, setFormErrors] = useState({});

  const categories = ["All", "Cloud Computing", "DevOps", "Web Development", "Programming"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user types
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) errors.phone = "Phone is required";
    return errors;
  };

  const handleEnrollment = async () => {
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post('/api/enrollments', {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          courseType: selectedCourse?.title,
          amount: selectedCourse?.price,
          stripeSessionId: 'test-session-id',
        });
        console.log('Enrollment stored:', response.data);
      } catch (err) {
        console.error('Enrollment failed:', err);
      }
    } else {
      setFormErrors(errors);
    }
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 bg-[#111111] min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-2">
            <span className="text-white">Available</span>{" "}
            <span className="bg-gradient-to-r from-[#2563eb] via-[#22d3ee] to-[#4ade80] text-transparent bg-clip-text">
              Courses
            </span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Explore our curriculum and start your learning journey
          </p>
        </div>

        {/* Search and Filter Section */}
        <div id="courses" className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-gray-800 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCourse(course)}
              className="cursor-pointer bg-[#111111] border border-gray-800 rounded-2xl p-6 text-left hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">
                <img src={course.logo} alt={`${course.title} Logo`} className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {course.title}
              </h3>
              <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold">{course.price}</span>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="h-4 w-4 fill-current" />
                  <span>{course.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Course Modal */}
        <AnimatePresence>
          {selectedCourse && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-[#111111]/90 backdrop-blur-sm z-50 p-4 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-[#111111] rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative border border-gray-800 my-8"
              >
                <button
                  onClick={() => {
                    setSelectedCourse(null);
                    setShowForm(false);
                    setFormErrors({});
                  }}
                  className="absolute top-4 right-4 text-gray-400 hover:text-red-400 transition-all"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="mb-4 flex justify-center">
                  <img src={selectedCourse.logo} alt={`${selectedCourse.title} Logo`} className="h-16 w-16" />
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedCourse.title}
                  </h3>
                  <p className="text-xl text-gray-400">{selectedCourse.price}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <Clock className="h-5 w-5 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-400">Duration</p>
                    <p className="text-white font-semibold">{selectedCourse.duration}</p>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <Book className="h-5 w-5 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-400">Level</p>
                    <p className="text-white font-semibold">{selectedCourse.level}</p>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <Star className="h-5 w-5 text-yellow-400 mx-auto mb-2" />
                    <p className="text-gray-400">Rating</p>
                    <p className="text-white font-semibold">{selectedCourse.rating}/5.0</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-4">Course Outline</h4>
                  <ul className="space-y-4">
                    {selectedCourse.outline.map((topic, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-3 text-gray-300"
                      >
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {!showForm ? (
                  <button
                    onClick={() => setShowForm(true)}
                    className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-all font-semibold"
                  >
                    Enroll Now
                  </button>
                ) : (
                  <div className="mt-6">
                    <h4 className="text-2xl font-bold text-white mb-4">Enrollment Form</h4>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-gray-400 mb-1">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full p-3 rounded-lg bg-gray-800 text-white border ${
                            formErrors.name ? 'border-red-500' : 'border-gray-700'
                          }`}
                        />
                        {formErrors.name && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-gray-400 mb-1">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full p-3 rounded-lg bg-gray-800 text-white border ${
                            formErrors.email ? 'border-red-500' : 'border-gray-700'
                          }`}
                        />
                        {formErrors.email && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-gray-400 mb-1">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full p-3 rounded-lg bg-gray-800 text-white border ${
                            formErrors.phone ? 'border-red-500' : 'border-gray-700'
                          }`}
                        />
                        {formErrors.phone && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={handleEnrollment}
                        className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-all font-semibold"
                      >
                        Proceed to Payment
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedCourse(null);
                          setShowForm(false);
                          setFormErrors({});
                        }}
                        className="w-full bg-gray-600 text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition-all font-semibold"
                      >
                        Close
                      </button>
                    </form>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Courses;
