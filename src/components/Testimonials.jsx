import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div id="testimonials" className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are Saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-neutral-400">{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-16 h-16 mr-6 rounded-full border-2 border-neutral-300"
                  src={testimonial.image}
                  alt={testimonial.user}
                />
                <div>
                  <h6 className="text-lg font-semibold text-white">{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;